import React, { useState } from "react";
import styled from "styled-components";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
} from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import HcTree from "common/HcTree";
import { HcTitleTextField } from "common/HcTextField";
import HcButton from "common/HcButton";
import { Link, useHistory } from "react-router-dom";

const TreeContainer = styled.div`
  height: 832px;
  width: 312px;
  margin-top: 39px;
  float: left;
`;

const TreeData = [
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
  let num = 2020000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  /*Create */
  const history = useHistory();
  const [checkedItem, setCheckedItem]: any = React.useState([]);

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
  const columns = [
    <div style={{ paddingTop: 7 }}>
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "이름",
    "사원번호",
    "법인회사",
    "조직",
    "직책",
    "직위",
    "입사일",
    "회사전화",
  ];

  const testData = Array(15)
    .fill(undefined)
    .map(() => ({
      name: "홍길동",
      id: getId(),
      company: "티맥스에이엔씨",
      organization: "AB본부",
      responsibility: "사원",
      position: "연구원",
      telephone: "032-123-4567",
      entryDate: "2020.01.01",
    }));
  const [data, setData] = useState(testData);
  function onRemove(checked: any) {
    setData(data.filter((x) => checked.includes(x.id) == false));

    setCheckedItem([]);
  }

  return (
    <ComponentWrapper>
      <div style={{ display: "block" }}>
        <div className="title_area" style={{ marginTop: 20 }}>
          <HcTitleTextField titleName="인사 정보 관리" isBackIcon={false} />
        </div>
        <TreeContainer>
          <HcTree
            items={TreeData}
            title="조직도"
            search={true}
            isCreate={isCreate}
            setIsCreates={setIsCreates}
            placeholder={"검색"}
          />
        </TreeContainer>
        <Link to={"/hr/pas/hrInfoCreate"}>
          <HcButton
            onClick={() => {}}
            styles="secondary"
            style={{
              display: checkedItem.length >= 1 ? "none" : "",
              marginLeft: "19px",
              marginTop: "39px",
              marginBottom: "20px",
            }}
            size="medium"
          >
            +생성
          </HcButton>
        </Link>

        <HcButton
          onClick={() => {
            const sendData: any = data.find((e) => e.id == checkedItem[0]);
            history.push({
              pathname: "/hr/pas/hrInfoDetail",

              state: {
                name: sendData.name,
                employeeNumber: sendData.id,
                organization: sendData.organization,
                entryDate: sendData.entryDate,
                position: sendData.position,
                responsibility: sendData.responsibility,
                telePhone: sendData.telephone,
                company: sendData.company,
              },
            });
          }}
          styles="line"
          style={{
            display: checkedItem.length == 1 ? "" : "none",
            marginLeft: "19px",
            marginTop: "39px",
            marginBottom: "20px",
          }}
          size="medium"
        >
          수정
        </HcButton>

        <HcButton
          onClick={() => {
            onRemove(checkedItem);
          }}
          styles="line"
          style={{
            display: checkedItem.length >= 1 ? "" : "none",
            marginLeft: checkedItem.length == 1 ? 10 : 19,
            marginTop: "39px",
            marginBottom: "20px",
          }}
          size="medium"
        >
          삭제
        </HcButton>

        <div style={{ marginLeft: 19, float: "left" }}>
          <HcTableContainer style={{ width: 984, overflow: "auto" }}>
            <HcTable>
              <thead>
                <tr>
                  <th style={{ width: 46 }}>
                    <div style={{ paddingTop: 7 }}>
                      <HcCheckBox
                        checked={checkedItem.length > 0 ? true : false}
                        onChange={(e) => checkAllHandler(e.target.checked)}
                      />
                    </div>
                  </th>
                  <th style={{ width: 120 }}>이름</th>
                  <th style={{ width: 120 }}>사원번호</th>
                  <th style={{ width: 120 }}>법인회사</th>
                  <th style={{ width: 120 }}>조직</th>
                  <th style={{ width: 120 }}>직책</th>
                  <th style={{ width: 120 }}>직위</th>
                  <th style={{ width: 120 }}>입사일</th>
                  <th style={{ width: 120 }}>회사전화</th>
                </tr>
              </thead>

              <tbody>
                {data.map(
                  ({
                    id,
                    name,
                    company,
                    entryDate,
                    telephone,
                    responsibility,
                    position,
                    organization,
                  }) => (
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
                      <td>{name}</td>
                      <td>{id}</td>
                      <td>{company}</td>
                      <td>{organization}</td>
                      <td>{responsibility}</td>
                      <td>{position}</td>
                      <td>{entryDate}</td>
                      <td>{telephone}</td>
                    </tr>
                  )
                )}
              </tbody>
            </HcTable>
          </HcTableContainer>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default HRManagement;
