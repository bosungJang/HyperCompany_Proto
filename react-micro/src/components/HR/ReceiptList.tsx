import { ComponentWrapper } from "common/HcCommonLayout";
import HcTree from "common/HcTree";
import React from "react";
import { HcTitleTextField } from "common/HcTextField";
import HcButton from "common/HcButton";
import { HcTable, HcTableContainer } from "common/HcTableComponent";
import { useHistory } from "react-router-dom";
export default function ReceiptList() {
  /*Tree*/
  const [items, setItems] = React.useState([
    {
      id: "0",
      title: "전체",
    },
    {
      id: 1,
      title: "사업부",
    },
    {
      id: 2,
      title: "PM본부",
    },
  ]);
  const [isSelect, setIsSelect] = React.useState("1");
  /*Tree*/
  const [isCreate, setIsCreates] = React.useState(false);
  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: 0,
    title: "",
  });
  /* Current Data*/
  const history = useHistory();
  return (
    <>
      <ComponentWrapper style={{ display: "block", position: "relative" }}>
        <HcTitleTextField titleName={"원천징수 영수증"} isBackIcon={false} />
        <div style={{ position: "absolute", top: 44, right: 40 }}>
          <HcButton styles="line" size="medium">
            전체 원천징수 영수증 다운로드
          </HcButton>
          <HcButton styles="line" size="medium" style={{ marginLeft: "10px" }}>
            전체 소득공제신고서 다운로드
          </HcButton>
        </div>
        <div style={{ display: "flex", marginTop: "39px" }}>
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
          />
          <div className="table" style={{ marginLeft: "24px" }}>
            <HcButton
              styles="secondary"
              size="medium"
              style={{ marginBottom: "20px" }}
            >
              +생성
            </HcButton>
            <HcTableContainer
              style={{ overflow: "scroll", width: "984px", maxHeight: "" }}
            >
              <HcTable>
                <thead>
                  <tr>
                    <th style={{ minWidth: "46px" }}></th>
                    <th style={{ minWidth: "120px" }}>이름</th>
                    <th style={{ minWidth: "120px" }}>사원번호</th>
                    <th style={{ minWidth: "140px" }}>법인회사</th>
                    <th style={{ minWidth: "140px" }}>조직</th>
                    <th style={{ minWidth: "120px" }}>직책</th>
                    <th style={{ minWidth: "120px" }}>직위</th>
                    <th style={{ minWidth: "120px" }}>입사일</th>
                    <th style={{ minWidth: "120px" }}>회사전화</th>
                    <th style={{ minWidth: "120px" }}>휴대전화</th>
                    <th style={{ minWidth: "320px" }}>이메일</th>
                    <th style={{ minWidth: "120px" }}>-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={() => history.push({ pathname: "/hr/Receipt" })}>
                    <td></td>
                    <td>홍길동</td>
                    <td>2020001</td>
                    <td>티맥스에이앤씨</td>
                    <td>AB본부/AB2-4팀</td>
                    <td>팀장</td>
                    <td>연구원</td>
                    <td>2020.01.01</td>
                    <td>031-112-4567</td>
                    <td>010-1234-5678</td>
                    <td>Kildong_hong@tmax.co.kr</td>
                    <td></td>
                  </tr>
                </tbody>
              </HcTable>
            </HcTableContainer>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
}
