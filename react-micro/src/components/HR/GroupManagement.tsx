import { useHistory, Prompt } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TableActionBtn } from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import HcTree from "common/HcTree";
import {
  HcTitleTextField,
  SubHeading,
  HcTextFieldLabel,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import { HcTreePopup, Confirm } from "common/HcPopup";
import HcBottomBar from "common/HcBottomBar";
import { HcTable, HcTableContainer, NullTbody } from "common/HcTableComponent";
const TreeContainer = styled.div`
  height: 832px;
  width: 312px;
  margin-right: 19px;
`;

const CreateContainer = styled.div`
  background: #ffffff;
  height: 857px;
  width: 984px;
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 0px 24px 28px 24px;
`;

const items = [
  {
    id: "1",
    title: "parent 1",
    items: [
      { id: "1-1", title: "child 1-1" },
      { id: "1-2", title: "child 1-2" },
    ],
  },
  {
    id: "2",
    title: "parent 2",
    items: [
      { id: "2-1", title: "child 2-1" },
      {
        id: "2-2",
        title: "child 2-2",
        items: [
          { id: "2-2-1", title: "child 1-2-1" },
          { id: "2-2-2", title: "child 1-2-2" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "parent 3",
    items: [
      { id: "3-1", title: "child 3-1" },
      { id: "3-2", title: "child 3-2" },
    ],
  },
  {
    id: "4",
    title: "parent 4",
    items: [
      { id: "4-1", title: "child 4-1" },
      { id: "4-2", title: "child 4-2" },
    ],
  },
  {
    id: "5",
    title: "parent 5",
    items: [
      { id: "5-1", title: "child 5-1" },
      {
        id: "5-2",
        title: "child 5-2",
        items: [
          { id: "5-2-1", title: "child 5-2-1" },
          { id: "5-2-2", title: "child 5-2-2" },
        ],
      },
    ],
  },
];

const HRManagement = () => {
  let num = 100000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const [groupCreate, setGroupCreate] = React.useState(false);
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
  /* prompt */
  const [when, setWhen] = useState(false);
  const history = useHistory();
  const [showPrompt, setShowPrompt] = useState(false);
  /* prompt */
  return (
    <ComponentWrapper style={{ display: "block" }}>
      <HcTitleTextField titleName="사원 그룹 관리" isBackIcon={false} />
      <div style={{ display: "flex", marginTop: "37px" }}>
        <TreeContainer>
          <HcTree
            items={items}
            title="사원 그룹"
            placeholder="검색"
            search={true}
            isCreate={isCreate}
            setIsCreates={setIsCreates}
          />
        </TreeContainer>
        <div
          className="table"
          style={{
            display: groupCreate == false ? "" : "none",
          }}
        >
          <HcButton
            styles="line"
            style={{
              display: checkedItem.length >= 1 ? "" : "none",
              marginBottom: "20px",
            }}
            size="medium"
            onClick={() => {
              setGroupCreate(true);
              setbarOpen(true);
              setWhen(true);
            }}
          >
            사원그룹생성
          </HcButton>
          <HcButton
            onClick={() => {
              console.log();
            }}
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
          {/*table*/}
          <HcTableContainer
            style={{
              width: 984,
              height: 814,
              marginTop: checkedItem.length >= 1 ? 0 : 52,
            }}
          >
            <HcTable>
              <thead>
                <tr>
                  <th style={{ width: "46px" }}>
                    <div style={{ paddingTop: 7 }}>
                      <HcCheckBox
                        checked={checkedItem.length > 0 ? true : false}
                        onChange={(e) => checkAllHandler(e.target.checked)}
                      />
                    </div>
                  </th>
                  <th style={{ width: "161px" }}>이름</th>
                  <th style={{ width: "162px" }}>조직</th>
                  <th style={{ width: "162px" }}>직책</th>
                  <th style={{ width: "162px" }}>직위</th>
                  <th style={{ width: "171px" }}>그룹명</th>
                  <th style={{ width: "120px" }}>-</th>
                </tr>
              </thead>

              {data.length > 0 ? (
                <tbody>
                  {data.map(({ id, action }) => (
                    <tr
                      style={{
                        background: checkedItem.includes(id) ? "#DFECFF" : "",
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
                      <td>리서치 1-4팀</td>
                      <td>팀원</td>
                      <td>연구원</td>
                      <td>리서치 1실</td>
                      <td>{action}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <NullTbody colspan={7} />
              )}
            </HcTable>
          </HcTableContainer>
        </div>

        <CreateContainer style={{ display: groupCreate == true ? "" : "none" }}>
          <HcTextFieldLabel
            titleName={""}
            style={{
              width: 284,
              marginBottom: 20,
              fontSize: "24px",
              height: 55,
              fontWeight: 500,
            }}
          >
            새 그룹
          </HcTextFieldLabel>
          <div style={{ display: "flex", marginBottom: 40 }}>
            <HcTextFieldLabel titleName={"설명"} style={{ width: 284 }}>
              시장 동향에 대해 조사하는 팀입니다.
            </HcTextFieldLabel>
            <HcTextFieldLabel
              style={{ marginLeft: 40, width: 284 }}
              titleName={"생성자"}
            >
              홍길동
            </HcTextFieldLabel>
            <HcTextFieldLabel
              style={{ marginLeft: 40, width: 284 }}
              titleName={"생성일자"}
            >
              2021.01.01
            </HcTextFieldLabel>
          </div>
          <SubHeading titleName={`구성원 ${data.length}`} />
          <div style={{ float: "left", marginTop: 20 }}>
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
            <HcTableContainer style={{ width: 936, height: 500 }}>
              <HcTable>
                <thead>
                  <tr>
                    <th style={{ width: "46px" }}>
                      <div style={{ paddingTop: 7 }}>
                        <HcCheckBox
                          checked={checkedItem.length > 0 ? true : false}
                          onChange={(e) => checkAllHandler(e.target.checked)}
                        />
                      </div>
                    </th>
                    <th style={{ width: "149px" }}>이름</th>
                    <th style={{ width: "150px" }}>조직</th>
                    <th style={{ width: "150px" }}>직책</th>
                    <th style={{ width: "150px" }}>직위</th>
                    <th style={{ width: "171px" }}>그룹명</th>
                    <th style={{ width: "120px" }}>-</th>
                  </tr>
                </thead>

                {data.length > 0 ? (
                  <tbody>
                    {data.map(({ id, action }) => (
                      <tr
                        style={{
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
                        <td>리서치 1-4팀</td>
                        <td>팀원</td>
                        <td>연구원</td>
                        <td>리서치 1실</td>
                        <td>{action}</td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <NullTbody colspan={7} />
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
          <Confirm
            when={when}
            leave={() => setWhen(false)}
            shouldBlockNavigation={() => {
              if (when) return true;
              else return false;
            }}
          />
          <HcBottomBar open={barOpen}>
            <>
              {" "}
              <HcButton
                onClick={() => {
                  setbarOpen(false);
                  setGroupCreate(false);
                  setWhen(false);
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
                  setGroupCreate(false);
                }}
                styles="line"
                size="big"
              >
                삭제
              </HcButton>
            </>
          </HcBottomBar>
        </CreateContainer>
      </div>
    </ComponentWrapper>
  );
};
export default HRManagement;
