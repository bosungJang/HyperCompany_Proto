import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import {
  HcTitleTextField,
  HcSelects,
  HcSelect,
  HcEditableTextField,
  SubHeading,
} from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { useLocation } from "react-router";
import "common/Table.css";
import HcToggleBtn from "common/HcToggleBtn";
import HcButton from "common/HcButton";
const Container = styled.div`
  background: #ffffff;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 20px 24px 30px 24px;
`;
const TableContainer = styled.div`
  width: 1239px;
  height: 290px;
  overflow: scroll;
`;
const columns = [
  "사원 번호",
  "이름",
  "조직",
  "직책",
  "직위",
  "발령전 정보",
  "발령 후 정보",
  "-",
];

const styles: any = {
  modal: {
    display: "none",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
  },

  openModal: {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
};
const SideBar = styled.div`
  height: 1010px;
  width: 574px;
  position: absolute !important;
  bottom: 0px;
  background-color: white;
  transition: 0.5s;
  padding: 20px 30px 20px 24px;
`;
const HRCard = styled.div`
  height: 54px;
  width: 514px;
  // background: #f5f9ff;
  border: 1px solid #ededed;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-style: bold;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;

  text-transform: uppercase;

  color: #000000;
`;
const HRAppointDetail = () => {
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
  const location = useLocation();
  let num = 2020000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  const testData = Array(15)
    .fill(undefined)
    .map(() => ({
      name: "홍길동",
      id: getId(),
      organization: "EC2-4팀",
      responsibility: "사원",
      position: "연구원",
      before: "-",
      after: "-",
    }));
  function Row({
    name,
    id,
    organization,
    responsibility,
    position,
    before,
    after,
  }: any) {
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{organization}</td>
        <td>{responsibility}</td>
        <td>{position}</td>
        <td>{before}</td>
        <td>{after}</td>
      </tr>
    );
  }
  const [tableData, setTableData] = useState(testData);
  const [rows, setRows]: any = useState(
    tableData.map((row) => (
      <Row
        id={row.id}
        name={row.name}
        organization={row.organization}
        responsibility={row.responsibility}
        position={row.position}
        before={row.before}
        after={row.after}
      />
    ))
  );

  const onCreate = () => {
    const prev = tableData;
    prev.push({
      name: "꽃분이",
      id: getId(),
      organization: "EC2-4팀",
      responsibility: "사원",
      position: "팀장",
      before: "-",
      after: "-",
    });
    setTableData(prev);
    setRows(
      prev.map((row) => (
        <Row
          id={row.id}
          name={row.name}
          organization={row.organization}
          responsibility={row.responsibility}
          position={row.position}
          before={row.before}
          after={row.after}
        />
      ))
    );
    console.log();
  };
  /*ToggleBtn */
  const [isToggled, setIsToggled] = React.useState(false);
  /*ToggleBtn */
  /*side bar */
  const [isOpen, setIsOpen] = React.useState(false);
  /*side bar*/
  const HRList = testData.map((data) => (
    <HRCard>
      {data.name}({data.organization}/{data.position})
    </HRCard>
  ));
  const [state, setState] = useState(location.state);
  const handleChange = (e: any) => {
    // console.log(setState({ ...state, [e.target.name]: e.target.value }));

    console.log(e.target);
    console.log(state);
    // setState({ ...state, [e.target.name]: e.target.value });
  };
  const styles = {
    edit: {
      border: "1px solid #E0E0E0",
      width: 360,
      height: 38,
      fontSize: "16px",
      fontStyle: "bold",
      fontWeight: "bold",
      borderRadius: "3px",
      padding: "5px 12px 7px 12px",
    } as React.CSSProperties,
    detail: {
      borderBottom: "1px solid #E0E0E0",
      width: 360,
      height: 38,
      fontSize: "16px",
      fontStyle: "bold",
      fontWeight: "bold",
      padding: "5px 12px 7px 12px",
    } as React.CSSProperties,
  };
  return (
    <ComponentWrapper
      style={{
        padding: 40,
        display: "block",
      }}
    >
      <HcTitleTextField
        titleName={state.edit == true ? "발령 수정" : "발령 상세"}
        isBackIcon={true}
      />
      <Container style={{ marginTop: 39, height: 258 }}>
        <SubHeading titleName="발령 정보" />
        <div style={{ marginTop: 28 }}>
          <HcEditableTextField
            titleName="발령번호"
            value={state.id}
            readonly={true}
            style={styles.detail}
          />

          <HcEditableTextField
            titleName="발령내용"
            value={state.content}
            onChange={state.edit == true ? setState : () => {}}
            name="content"
            readonly={state.edit === false ? true : false}
            style={state.edit == true ? styles.edit : styles.detail}
            wraperStyle={{ marginRight: 80, marginLeft: 80 }}
          />
          <HcEditableTextField
            titleName="발령 종류"
            value="부서배치"
            name="kind"
            onChange={state.edit == true ? setState : () => {}}
            style={state.edit == true ? styles.edit : styles.detail}
            readonly={state.edit === false ? true : false}
          />
          <HcEditableTextField
            titleName="발령자"
            value="홍길동"
            style={styles.detail}
            readonly={true}
          />
          <HcEditableTextField
            titleName="발령일시"
            value={state.start}
            name="start"
            onChange={state.edit == true ? setState : () => {}}
            style={state.edit == true ? styles.edit : styles.detail}
            wraperStyle={{ marginRight: 80, marginLeft: 80 }}
            readonly={state.edit === false ? true : false}
          />
          <HcEditableTextField
            titleName="시행일시"
            value={state.end}
            name="end"
            onChange={state.edit == true ? setState : () => {}}
            style={state.edit == true ? styles.edit : styles.detail}
            readonly={state.edit === false ? true : false}
          />
        </div>
      </Container>
      <Container style={{ marginTop: 24, height: 404 }}>
        <SubHeading titleName="발령 대상" />
        <HcButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          styles="secondary"
          style={{
            marginLeft: "16px",
            marginTop: "18px",
            marginBottom: "12px",
          }}
          size="medium"
        >
          +생성
        </HcButton>
        <TableContainer>
          <table className="table table-hover">
            <thead>
              <tr>
                {columns.map((column: any) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody
              style={{
                overflow: " scroll",
              }}
            >
              {rows}
            </tbody>
          </table>
        </TableContainer>
        <SideBar
          style={{
            right: isOpen == true ? 0 : "-600px",
          }}
        >
          <SubHeading titleName="대상자 추가 " />
          <div style={{ float: "left" }}>
            {" "}
            <HcSelect titleName="" name="kinds" style={{ width: 190 }}>
              {" "}
              <option value="" hidden>
                조직 선택
              </option>
              <option value={" hc"}>HC</option>
              <option value={"hc"}>AB</option>
            </HcSelect>{" "}
            <HcSelect titleName="" name="kinds" style={{ width: 272 }}>
              {" "}
              <option value="" hidden>
                사원 그룹 선택
              </option>
              <option value={"연구원"}>연구원</option>
              <option value={"매니저"}>매니저</option>
            </HcSelect>
          </div>
          <div
            style={{
              marginTop: 130,
              width: 514,
              height: 772,
              overflow: "scroll",
            }}
          >
            {HRList}
          </div>
          <HcButton
            onClick={() => {
              onCreate();
            }}
            styles="secondary"
            style={{
              marginLeft: "16px",
              right: 10,
              marginTop: "18px",
              marginBottom: "12px",
            }}
            size="medium"
          >
            추가
          </HcButton>
          <HcButton
            onClick={() => {
              setIsOpen(false);
            }}
            styles="line"
            size="medium"
          >
            취소
          </HcButton>
        </SideBar>
      </Container>
      <Container style={{ marginTop: 26, height: 142 }}>
        <SubHeading titleName="기타 설정" />
        <div>
          <HcToggleBtn
            id="test-switch"
            toggled={isToggled}
            onChange={(e) => {
              setIsToggled(e.target.checked);
            }}
          />

          {isToggled == true ? "On" : "Off"}
        </div>
      </Container>
      <HcBottomBar open={barOpen} style={{ width: 1620, right: 320 }}>
        <div>
          <HcButton
            onClick={() => {}}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            생성
          </HcButton>
          <HcButton
            onClick={() => {
              setbarOpen(false);
            }}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            취소
          </HcButton>
        </div>
      </HcBottomBar>
    </ComponentWrapper>
  );
};

export default HRAppointDetail;
