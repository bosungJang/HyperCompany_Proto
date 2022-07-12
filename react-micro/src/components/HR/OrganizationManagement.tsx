import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";
import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTree from "common/HcTree";
import HcTextField, {
  HcTextFieldLabel,
  HcTitleTextField,
  SubHeading,
  TextField,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import { HcDatePicker } from "common/HcDatePicker";
import { HcTreePopup } from "common/HcPopup";
import HcBottomBar from "common/HcBottomBar";

const TableContainer = styled.div`
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

const Container = styled.div`
  background: #ffffff;
  height: 1013px;
  width: 984px;
  border: 1px solid #cecece;
  border-radius: 5px;
  display: block;
  padding: 28px 24px 28px 24px;
`;
const Memeber = styled.div`
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 20px;
  height: 30px;
  width: 100px;
  height: 30px;
  color: #303030;
  margin-bottom: 20px;
`;

const OrganizationManagement = () => {
  const [edit, setEdit] = useState(false);
  let num = 100000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  /*Tree*/
  const [items, setItems] = useState([
    {
      id: "0", //table
      title: "티맥스 소프트",
    },
    {
      id: "1",
      title: "사업부",
      items: [
        { id: "1-1", title: "사업 1팀" },
        { id: "1-2", title: "사업 2팀" },
      ],
    },
    {
      id: "2",
      title: "PM본부",
      items: [
        {
          id: "2-1",
          title: "Product실",
          items: [
            { id: "2-1-1", title: "Product 1팀" },
            { id: "2-1-2", title: "Product 2팀" },
          ],
        },
      ],
    },
  ]);
  /*Tree*/
  /* Current Data*/
  const [currentData, setcurrentData] = useState({
    id: "0",
    title: "티맥스 소프트",
  });
  /* Current Data*/
  const [checkedItem, setCheckedItem]: any = useState([]);
  const [groupCreate, setGroupCreate] = useState(false);
  function checkHandler(checked: Boolean, id: Number) {
    if (checked == true) {
      setCheckedItem([...checkedItem, id]);
    } else {
      setCheckedItem(checkedItem.filter((i: number) => i != id));
    }
  }

  function checkAllHandler(checked: Boolean) {
    if (checked) {
      const ids: Number[] = [];
      data.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }

  const data = Array(17)
    .fill(undefined)
    .map(() => ({
      id: getId(),
      content: "Tmax Enterprise 인사 이동",
      hc: Math.floor(Math.random() * 4) + 1,
      start: "2022.1.10",
      end: "2022.1.29",
      action: <TableActionBtn />,
    }));

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(false);
  /*BottomBar */

  /*Create */
  const [isCreate, setIsCreates] = useState(false);
  /*Create */

  return (
    <ComponentWrapper style={{ display: "block" }}>
      <HcTitleTextField titleName="조직 정보 관리" isBackIcon={false} />
      <div style={{ display: "flex", marginTop: 39 }}>
        <div style={{ marginRight: 24 }}>
          {" "}
          <HcTree
            items={items}
            title="조직도"
            search={true}
            style={{ minHeight: "832px" }}
            isCreate={isCreate}
            setIsCreates={setIsCreates}
            currentData={currentData}
            setcurrentData={setcurrentData}
            placeholder="조직 검색"
          />
        </div>
        <Container>
          <HcTextFieldLabel titleName={""}>
            {currentData.title}
          </HcTextFieldLabel>
          <SubHeading
            titleName={`구성원(${data.length})`}
            style={{ marginTop: 40 }}
          />
          <div style={{ float: "left" }}>
            {/*table*/}
            <HcButton
              onClick={() => {
                console.log();
              }}
              styles="secondary"
              style={{
                display: checkedItem.length >= 1 ? "none" : "",

                marginBottom: "20px",
              }}
              size="medium"
            >
              +생성
            </HcButton>
            <HcButton
              styles="line"
              style={{
                display: checkedItem.length >= 1 ? "" : "none",

                marginBottom: "20px",
              }}
              size="medium"
              onClick={() => {
                setbarOpen(true);
              }}
            >
              수정
            </HcButton>
            <HcButton
              styles="line"
              style={{
                display: checkedItem.length >= 1 ? "" : "none",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
              size="medium"
            >
              삭제
            </HcButton>
            <HcButton
              onClick={openModal}
              styles="line"
              style={{
                display: checkedItem.length >= 1 ? "" : "none",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
              size="medium"
            >
              사원이동
            </HcButton>
            <TableSetting />
            <HcTableContainer style={{ width: 936, height: 400 }}>
              <HcTable>
                <thead>
                  <tr>
                    <th>
                      <div style={{ paddingTop: 4 }}>
                        <HcCheckBox
                          checked={checkedItem.length > 0 ? true : false}
                          onChange={(e) => checkAllHandler(e.target.checked)}
                        />
                      </div>
                    </th>
                    <th style={{ width: 192 }}>이름</th>
                    <th style={{ width: 192 }}>조직</th>
                    <th style={{ width: 192 }}>직책</th>
                    <th style={{ width: 194 }}>직위</th>
                    <th style={{ width: 120 }}>-</th>
                  </tr>
                </thead>

                {data.length > 0 ? (
                  <tbody>
                    {data.map(({ id, content, hc, start, end, action }) => (
                      <tr
                        style={{
                          textAlign: "center",
                          backgroundColor: checkedItem.includes(id)
                            ? "#DFECFF"
                            : "",
                        }}
                      >
                        <td>
                          <HcCheckBox
                            checked={checkedItem.includes(id)}
                            onChange={(e) => {
                              checkHandler(e.target.checked, id);
                            }}
                          />
                        </td>
                        <td>홍길동</td>
                        <td>사업 1팀</td>
                        <td>연구원</td>
                        <td>연구원</td>
                        <td>
                          <TableActionBtn />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <NullTbody colspan={6} />
                  </tbody>
                )}
              </HcTable>
            </HcTableContainer>
          </div>
          {/*table*/}

          <HcTreePopup
            open={modalOpen}
            close={closeModal}
            header="Pop-up Title"
          >
            <HcTree
              items={items}
              title="사원 그룹"
              search={true}
              isCreate={isCreate}
              setIsCreates={setIsCreates}
            />
          </HcTreePopup>
          <HcBottomBar open={barOpen}>
            <HcButton
              onClick={() => {
                setbarOpen(false);
                setGroupCreate(false);
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              확인
            </HcButton>
          </HcBottomBar>
        </Container>
      </div>
    </ComponentWrapper>
  );
};
export default OrganizationManagement;
