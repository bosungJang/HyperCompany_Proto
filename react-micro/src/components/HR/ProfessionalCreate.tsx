import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcCheckBox from "common/HcCheckBox";
import HcTextField, {
  HcTitleTextField,
  HcSelect,
  SubHeading,
} from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { useLocation } from "react-router";
import "common/Table.css";
import HcToggleBtn from "common/HcToggleBtn";
import HcButton from "common/HcButton";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
const RadioTitle = styled.div`
  font-family: Noto Sans KR;
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
const Container = styled.div`
  background: #ffffff;
  width: 1320px;
  //   border: 1px solid #cecece;
  //   border-radius: 6px;
  //   padding: 20px 24px 30px 24px;
`;
const TableContainer = styled.div`
  width: 1320px;
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
const HRAppointmentCreate = () => {
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

  let num = 2020000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  const [data, setData] = useState({
    id: 1010,
    name: "",
    grade: "",
    type: "",
    comment: "",
    group: "",
  });
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
  const addData = Array(15)
    .fill(undefined)
    .map(() => ({
      name: "꽃분이",
      id: getId() + 15,
      organization: "EC2-4팀",
      responsibility: "팀장",
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
      addData.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  const onCreate = () => {
    const prev = tableData;
    const selected = addData.filter((x) => checkedItem.includes(x.id));
    setTableData(prev.concat(selected));
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
  const HRList = addData.map((data) => (
    <HRCard>
      <HcCheckBox
        checked={checkedItem.includes(data.id)}
        onChange={(e) => {
          checkHandler(e.target.checked, data.id);
        }}
      />
      {data.name}({data.organization}/{data.position})
    </HRCard>
  ));
  return (
    <>
      <ComponentWrapper
        style={{
          padding: 40,
          display: "block",
        }}
      >
        <HcTitleTextField titleName="직무 생성" isBackIcon={true} />
        <Container style={{ marginTop: 59, height: 258 }}>
          {/* <HcEditableTextField titleName="발령 번호" />
          <HcEditableTextField
            titleName="발령 내용"
            wraperStyle={{ marginLeft: 80, marginRight: 80 }}
            required
          />

          <HcSelect
            titleName="발령 종류"
            name="kinds"
            required
            style={{ width: 320 }}
          >
            <option value={"승진"}>승진</option>
            <option value={"입사"}>입사</option>
          </HcSelect>
          <HcEditableTextField titleName="발령자" />
          <HcEditableTextField
            titleName="발령일시"
            type="date"
            wraperStyle={{ marginLeft: 80, marginRight: 80 }}
            required
          />
          <HcEditableTextField titleName="시행일시" type="date" required /> */}
          <div
            className="first_block"
            style={{
              width: "387px",
              height: "100px",
              float: "left",
              marginRight: "80px",
            }}
          >
            <HcTextField
              titleName="생성자"
              name="name"
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "387px", marginBottom: 20 }}
              value={data.name}
              onChange={(e) => {
                setData((prevState: any) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
            />
            <HcTextField
              titleName="급여 형태"
              name="type"
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "387px", marginBottom: 20 }}
              value={data.type}
              onChange={(e) => {
                setData((prevState: any) => ({
                  ...prevState,
                  type: e.target.value,
                }));
              }}
            />
            <HcTextField
              titleName="설명"
              name="comment"
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "1320px", marginBottom: 20 }}
              value={data.comment}
              onChange={(e) => {
                setData((prevState: any) => ({
                  ...prevState,
                  comment: e.target.value,
                }));
              }}
            />
          </div>
          <div
            className="first_block"
            style={{
              width: "387px",
              height: "100px",
              float: "left",
              marginRight: "80px",
            }}
          >
            <HcSelect
              titleName="직무 그룹"
              style={{ width: "387px", marginBottom: 20 }}
              required
            >
              <option value="" hidden>
                {data.group}
              </option>
              <option value={" hc"}>{data.group}</option>
              <option value={"hc"}>개발</option>
            </HcSelect>
            <HcSelect
              titleName="급여 형태"
              style={{ width: "387px", marginBottom: 20 }}
              required
            >
              {" "}
              <option value="" hidden>
                {data.grade}
              </option>
              <option value={" hc"}>1등급</option>
              <option value={"hc"}>2등급</option>
            </HcSelect>
          </div>
          <div
            className="first_block"
            style={{
              width: "284px",
              height: "100px",
              float: "left",
              marginRight: "80px",
            }}
          >
            <RadioTitle>활성화 여부</RadioTitle>
            <HcRadioGroup
              defaultValue="true"
              onChange={(value) => console.log("value: ", value)}
            >
              <HcRadioButton value="true">
                <span style={{ marginRight: 47, marginLeft: 8 }}>활성화</span>
              </HcRadioButton>
              <HcRadioButton value="false">
                <span style={{ marginLeft: 8 }}>비활성화</span>
              </HcRadioButton>
            </HcRadioGroup>
          </div>
        </Container>
        <Container style={{ marginTop: 40, height: 404 }}>
          <SubHeading titleName="필요 역량" required />
          <HcButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            styles="secondary"
            style={{
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
            <SubHeading titleName="대상자 추가" />
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
              {checkedItem}
              {HRList}
            </div>
            <HcButton
              onClick={() => {
                onCreate();
              }}
              styles="secondary"
              style={{
                marginLeft: "16px",
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

export default HRAppointmentCreate;
