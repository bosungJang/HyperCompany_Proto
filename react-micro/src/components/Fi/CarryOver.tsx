import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import "common/Table.css";
import {
  ComponentWrapper,
  MultiLayout,
  VariableMultiLayout,
} from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import { TableActionBtn } from "common/HcTableComponent";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcPopup } from "common/HcPopup";
import SubMenu from "antd/lib/menu/SubMenu";

const TableContainer = styled.div`
  width: 872px;
  height: 700px;
  overflow-x: auto;
  overflow-y: auto;
  float: left;
  &::-webkit-scrollbar-track {
    background: none;
    position: absolute;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: none;
    position: absolute;
  }
  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }

  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
`;

const columns = [
  "계정코드",
  "계정과목명",
  "전기분재무제표금액",
  "차액",
  "거래처 합계금액",
];
let num = 100000;
const getId = () => {
  num = num + 1;
  return num;
};

const data = Array(10)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    content: "당좌예금",
    hc: Math.floor(Math.random() * (5000000 - 4000000 + 1)) + 4000000,
    start: Math.floor(Math.random() * 4) + 1,
    end: Math.floor(Math.random() * (5000000 - 4000000 + 1)) + 4000000,
    submenu: [{ code: "100001", name: "거래처 1", price: 1000000 }],
  }));

console.log(data);

const numberComma = (value: number) => {
  if (value === 0) {
    return "";
  }
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const CarryOver = () => {
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [subData, setsubData] = React.useState([
    { code: "", name: "", price: 0 },
  ]);

  let visibleData = data;

  if (data.length < 16) {
    for (var i = 0; i < 16 - data.length; i++) {
      visibleData.push({
        content: "",
        end: 0,
        hc: 0,
        id: 0,
        start: 0,
        submenu: [{ code: "123", name: "test", price: 123 }],
      });
    }
  }
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <div style={{ display: "block" }}>
            <HcTitleTextField titleName="초기이월입력" isBackIcon={false} />
            <div style={{ display: "flex", marginTop: "39px" }}>
              <TableContainer>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      {columns.map((column: any) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {visibleData.map(
                      ({ id, content, hc, start, end, submenu }) => (
                        <tr
                          style={{
                            textAlign: "end",
                          }}
                          onClick={() => {
                            setsubData(submenu);
                            console.log(subData);
                          }}
                        >
                          <td>{id === 0 ? "" : id}</td>
                          <td>{content}</td>
                          <td>{numberComma(hc)}</td>
                          <td>{start === 0 ? "" : start}</td>
                          <td>{numberComma(end)}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </TableContainer>
              <div
                style={{
                  border: "1px solid black",
                  width: 416,
                  height: 683,
                  float: "left",
                  marginLeft: 27,
                }}
              >
                {subData[0].code}
                <br />
                {subData[0].name}
                <br />
                {subData[0].price}
              </div>
            </div>
          </div>
          <HcPopup open={modalOpen} close={closeModal} header="마감 확인">
            초기이월 및 마감이 진행됩니다. <br />
            진행하시겠습니까?
          </HcPopup>
        </ComponentWrapper>
        <HcBottomBar open={barOpen}>
          <div>
            <HcButton
              onClick={() => {
                openModal();
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              수정
            </HcButton>
            <HcButton
              onClick={() => {
                setbarOpen(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              마감
            </HcButton>
          </div>
        </HcBottomBar>
      </div>
    </>
  );
};

export default CarryOver;
