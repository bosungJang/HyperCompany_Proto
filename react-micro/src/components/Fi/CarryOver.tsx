import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import { TableActionBtn } from "common/HcTableComponent";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcPopup } from "common/HcPopup";
import { useCounter } from "router/Root";

import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
} from "devextreme-react/data-grid";

const TableContainer = styled.div`
  width: 872px;
  height: 722px;
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

const DataGridContainer = styled.div`
  min-height: 630px;
  overflow: auto;
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
    submenu: [
      { code: "100001", name: "거래처 1", price: 1000000 },
      { code: "100002", name: "거래처 2", price: 2000000 },
      { code: "100003", name: "거래처 3", price: 3000000 },
    ],
  }));

console.log(data);

const numberComma = (value: number) => {
  if (value === 0) {
    return "";
  }
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const CarryOver = () => {
  const myCounter = useCounter();
  myCounter.myTitle = "초기이월입력";

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

  const [sum, setSum] = React.useState(0);
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <div style={{ display: "block" }}>
            <HcTitleTextField titleName="초기이월입력" isBackIcon={false} />
            <div style={{ display: "flex", marginTop: "39px" }}>
              <TableContainer>
                <table className="table table-hover" style={{ width: "unset" }}>
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
                            textAlign: "center",
                          }}
                          onClick={() => {
                            setsubData(submenu);
                            console.log(subData);
                            let tempSum = 0;
                            for (let i = 0; i < submenu.length; i++) {
                              tempSum += submenu[i].price;
                            }
                            setSum(tempSum);
                          }}
                        >
                          <td style={{ width: 120 }}>{id === 0 ? "" : id}</td>
                          <td style={{ width: 170 }}>{content}</td>
                          <td style={{ width: 250, maxWidth: "unset" }}>
                            {numberComma(hc)}
                          </td>
                          <td style={{ width: 152 }}>
                            {start === 0 ? "" : start}
                          </td>
                          <td style={{ width: 180 }}>{numberComma(end)}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </TableContainer>
              <div
                style={{
                  width: 424,
                  height: 722,
                  float: "left",
                  marginLeft: 27,
                  overflow: "auto",
                  background: "#F9F9F9",
                  border: "1px solid #C4C4C4",
                }}
              >
                <DataGridContainer>
                  <DataGrid
                    dataSource={subData}
                    keyExpr="code"
                    showBorders={true}
                  >
                    <Paging enabled={false} />
                    <Editing
                      mode="batch"
                      allowUpdating={true}
                      allowAdding={true}
                      allowDeleting={false}
                      //selectTextOnEditStart={this.state.selectTextOnEditStart}
                      //startEditAction={this.state.startEditAction}
                    />
                    <Column dataField="code" caption="거래코드" width={138} />
                    <Column dataField="name" caption="거래처명" width={138} />
                    <Column dataField="price" caption="금액" width={138} />
                  </DataGrid>
                </DataGridContainer>
                <div
                  className="footer"
                  style={{
                    width: "424px",
                  }}
                >
                  <div
                    style={{
                      height: "46px",
                      background: "#F9F9F9",
                      border: "1px solid #E0E0E0",
                      lineHeight: "46px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Noto Sans KR",
                        fontWeight: 400,
                        fontSize: 14,
                        marginLeft: 89,
                      }}
                    >
                      합계
                    </span>
                    <span
                      style={{
                        float: "right",
                        marginRight: "11px",
                        fontFamily: "Noto Sans KR",
                        fontWeight: 400,
                        fontSize: 14,
                      }}
                    >
                      {numberComma(sum)}
                    </span>
                  </div>
                  <div
                    style={{
                      height: "46px",
                      background: "#F9F9F9",
                      border: "1px solid #E0E0E0",
                      lineHeight: "46px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Noto Sans KR",
                        fontWeight: 400,
                        fontSize: 14,
                        marginLeft: 89,
                      }}
                    >
                      차액
                    </span>
                    <span
                      style={{
                        float: "right",
                        marginRight: "11px",
                        fontFamily: "Noto Sans KR",
                        fontWeight: 400,
                        fontSize: 14,
                      }}
                    >
                      1,000,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "24px",
                border: "1px solid black",
                minHeight: 78,
                width: "100%",
              }}
            ></div>
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
                setbarOpen(false);
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              수정
            </HcButton>
            <HcButton
              onClick={() => {
                openModal();
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
