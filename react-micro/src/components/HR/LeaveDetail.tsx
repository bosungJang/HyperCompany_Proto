import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import {
  HcTitleTextField,
  HcSelects,
  HcSelect,
  HcEditableTextField,
  HcTextFieldLabel,
} from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { useLocation } from "react-router";
import "common/Table.css";
import HcToggleBtn from "common/HcToggleBtn";
import HcButton from "common/HcButton";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
const Container = styled.div`
  background: #ffffff;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 20px 24px 30px 24px;
`;
const SubTitle = styled.div`
  height: 30px;
  width: 120px;
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #303030;
`;
const TableContainer = styled.div`
  width: 1240px;
  height: 290px;
  overflow-y: scroll;
  margin-top: 31px;
`;
const RadioTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-transform: uppercase;
  width: 70px;
  height: 20px;
  color: #656565;
  margin-bottom: 23px;
`;
const columns = ["결재 구분", "결재자", "조직", "직책", "직위"];

const LeaveDetail = () => {
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

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
    }));
  function Row({ name, id, organization, responsibility, position }: any) {
    return (
      <tr style={{ paddingLeft: 12 }}>
        <td style={{ textAlign: "left", width: 248, paddingLeft: 12 }}>{id}</td>
        <td style={{ textAlign: "left", width: 248, paddingLeft: 12 }}>
          {name}
        </td>
        <td style={{ textAlign: "left", width: 248, paddingLeft: 12 }}>
          {organization}
        </td>
        <td style={{ textAlign: "left", width: 248, paddingLeft: 12 }}>
          {responsibility}
        </td>
        <td style={{ textAlign: "left", width: 248, paddingLeft: 12 }}>
          {position}
        </td>
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
      />
    ))
  );

  /*ToggleBtn */
  const [isToggled, setIsToggled] = React.useState(false);
  /*ToggleBtn */

  const [state, setState] = useState(location.state);

  const styles = {
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
    <>
      <ComponentWrapper
        style={{
          padding: 40,
          display: "block",
        }}
      >
        <HcTitleTextField titleName="휴가 상세" isBackIcon={true} />
        <Container style={{ marginTop: 39, height: 258 }}>
          <SubTitle>휴가 대상자</SubTitle>
          <div style={{ marginTop: 28 }}>
            <HcEditableTextField
              titleName="발령번호"
              value={"id"}
              readonly={true}
              style={styles.detail}
            />

            <HcEditableTextField
              titleName="발령내용"
              value={"content"}
              onChange={setState}
              name="content"
              readonly={true}
              style={styles.detail}
              wraperStyle={{ marginRight: 80, marginLeft: 80 }}
            />
            <HcEditableTextField
              titleName="발령 종류"
              value="부서배치"
              name="kind"
              onChange={setState}
              style={styles.detail}
              readonly={true}
            />
            <HcEditableTextField
              titleName="발령자"
              value="홍길동"
              style={styles.detail}
              readonly={true}
              wraperStyle={{ marginTop: 20 }}
            />
            <HcEditableTextField
              titleName="발령일시"
              value={"start"}
              name="start"
              onChange={setState}
              style={styles.detail}
              wraperStyle={{ marginRight: 80, marginLeft: 80, marginTop: 20 }}
              readonly={true}
            />
            <HcEditableTextField
              titleName="시행일시"
              value={"end"}
              name="end"
              onChange={setState}
              style={styles.detail}
              readonly={true}
              wraperStyle={{ marginTop: 20 }}
            />
          </div>
        </Container>
        <Container style={{ marginTop: 24, height: 258 }}>
          <SubTitle>휴가 정보</SubTitle>
          <div style={{ marginTop: 28 }}>
            <HcEditableTextField
              titleName="발령번호"
              value={"id"}
              readonly={true}
              style={styles.detail}
            />

            <HcEditableTextField
              titleName="발령내용"
              value={"content"}
              onChange={setState}
              name="content"
              readonly={true}
              style={styles.detail}
              wraperStyle={{ marginRight: 80, marginLeft: 80 }}
            />
            <HcEditableTextField
              titleName="발령 종류"
              value="부서배치"
              name="kind"
              onChange={setState}
              style={styles.detail}
              readonly={true}
            />
            <HcEditableTextField
              titleName="발령자"
              value="홍길동"
              style={styles.detail}
              readonly={true}
              wraperStyle={{ marginTop: 20 }}
            />
            <HcEditableTextField
              titleName="발령일시"
              value={"start"}
              name="start"
              onChange={setState}
              style={styles.detail}
              wraperStyle={{ marginRight: 80, marginLeft: 80, marginTop: 20 }}
              readonly={true}
            />
            <HcEditableTextField
              titleName="시행일시"
              value={"end"}
              name="end"
              onChange={setState}
              style={styles.detail}
              readonly={true}
              wraperStyle={{ marginTop: 20 }}
            />
          </div>
        </Container>
        <Container style={{ marginTop: 24, height: 404 }}>
          <SubTitle>결재선</SubTitle>

          <TableContainer>
            <table className="table table-hover">
              <thead>
                <tr>
                  {columns.map((column: any) => (
                    <th
                      style={{ textAlign: "left", width: 248, paddingLeft: 12 }}
                      key={column}
                    >
                      {column}
                    </th>
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
        </Container>
        <Container
          style={{
            marginTop: 26,
            height: 142,
            float: "left",
            display: "inline",
          }}
        >
          <SubTitle>기타 설정</SubTitle>
          <div style={{ float: "left", display: "inline" }}>
            <span>결재 안내 메일 전송</span>
            <HcToggleBtn
              id="test-switch"
              toggled={isToggled}
              onChange={(e) => {
                setIsToggled(e.target.checked);
              }}
            />
            {isToggled == true ? "On" : "Off"}
          </div>
          <div style={{ float: "left", display: "inline" }}>
            <span>결재</span>
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
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
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
    </>
  );
};

export default LeaveDetail;
