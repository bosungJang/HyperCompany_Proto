import React, { useState } from "react";
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcCheckBox from "common/HcCheckBox";
import HcTextField, {
  HcTitleTextField,
  HcSelect,
  HcEditableTextField,
  HcTextFieldLabel,
  SubHeading,
  Title,
  SelectBox,
} from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { useLocation } from "react-router";
import InfoIconTooltip from "common/HcTooltip";
import HcToggleBtn from "common/HcToggleBtn";
import HcButton from "common/HcButton";

import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import { HcDatePicker } from "common/HcDatePicker";
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
  padding: 30px 30px 20px 30px;
  z-index: 500;
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
const OrderCreate = () => {
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  const [notice, setNotice] = useState(true);
  const [info, setInfo] = useState(true);
  const [target, setTarget] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [orderType, setrOrderType] = useState("");
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
  const testData = Array(15)
    .fill(undefined)
    .map(() => ({
      name: "홍길동",
      id: getId(),
      organization: "EC2-4팀",
      responsibility: "사원",
      position: "연구원",
      before: "AB2-4팀",
      after: "PK1-1팀",
    }));
  const addData = Array(15)
    .fill(undefined)
    .map(() => ({
      name: "꽃분이",
      id: getId() + 15,
      organization: "EC2-4팀",
      responsibility: "팀장",
      position: "연구원",
      before: "AB2-4팀",
      after: "PK1-1팀",
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
        <td onClick={(event) => event.stopPropagation()}>
          <HcCheckBox
            checked={checkedItem.includes(id)}
            onChange={(e) => {
              checkHandler(e.target.checked, id);
            }}
          />
        </td>
        <td>{id}</td>
        <td>{name}</td>
        <td>{organization}</td>
        <td>{responsibility}</td>
        <td>{position}</td>
        <td>{before}</td>
        <td>{after}</td>
        <td>
          <TableActionBtn />
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
      {" "}
      <ComponentWrapper
        style={{
          padding: 40,
          display: "block",
        }}
      >
        <HcTitleTextField titleName="발령 생성" isBackIcon={true} />
        <Container
          width={1320}
          maxHeight={259}
          state={info}
          setState={setInfo}
          title={"발령정보"}
          style={{ overflow: "visible", zIndex: 2, paddingTop: "20px" }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{ marginRight: "80px", display: "block", width: "360px" }}
            >
              {" "}
              <HcTextFieldLabel
                titleName="발령 번호"
                style={{ width: "360px", marginBottom: "12px" }}
              >
                0000001
              </HcTextFieldLabel>
              <HcTextFieldLabel titleName="발령자" style={{ width: "360px" }}>
                홍길동
              </HcTextFieldLabel>
            </div>
            <div
              style={{ marginRight: "80px", display: "block", width: "360px" }}
            >
              {" "}
              <HcTextField
                value=""
                titleName="발령 내용"
                required
                style={{ width: "360px", marginBottom: "25px" }}
              />
              <HcDatePicker
                titleName="발령 일시"
                required
                style={{ width: "360px" }}
              />
            </div>

            <div style={{ display: "block", width: "360px" }}>
              <SelectBox
                titleName="발령 종류"
                name="kinds"
                required
                placeholder="발령 종류 선택"
                items={["입사", "승진"]}
                state={orderType}
                setState={setrOrderType}
                style={{ width: "360px", marginBottom: "25px", zIndex: 2 }}
              />

              <HcDatePicker
                titleName="시행 일시"
                required
                style={{ width: "360px" }}
              />
            </div>
          </div>
        </Container>
        <Container
          width={1320}
          maxHeight={404}
          state={target}
          setState={setTarget}
          title={"발령 대상"}
        >
          <div
            style={{
              marginBottom: "12px",
              display: "flex",
            }}
          >
            <HcButton
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              styles="secondary"
              style={{ marginRight: 1020 }}
              size="medium"
            >
              +생성
            </HcButton>{" "}
            <TableSetting />
          </div>
          <HcTableContainer style={{ height: 290, width: 1240 }}>
            <HcTable>
              <thead>
                <tr>
                  <th style={{ width: "46px" }}>
                    <HcCheckBox
                      checked={checkedItem.length > 0 ? true : false}
                      onChange={(e) => checkAllHandler(e.target.checked)}
                    />
                  </th>
                  <th style={{ width: "153px" }}>사원번호</th>
                  <th style={{ width: "153px" }}>이름</th>
                  <th style={{ width: "153px" }}>조직</th>
                  <th style={{ width: "153px" }}>직책</th>
                  <th style={{ width: "153px" }}>직위</th>
                  <th style={{ width: "155px" }}>발령전 정보</th>
                  <th style={{ width: "155px" }}>발령 후 정보</th>
                  <th style={{ width: "120px" }}>-</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? <NullTbody colspan={9} /> : rows}
              </tbody>
            </HcTable>
          </HcTableContainer>
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
        <Container
          width={1320}
          maxHeight={142}
          state={notice}
          setState={setNotice}
          title={"기타설정"}
        >
          <div style={{ display: "flex", height: 23 }}>
            <Title style={{ fontWeight: 500 }}>전사공지</Title>
            <span
              style={{
                marginRight: 51,
                position: "relative",
                color: "#5D5D62",
              }}
            >
              <InfoIconTooltip message="발령완료 시점에 자동으로 전사 공지에 발령 내용이 등록됩니다." />
            </span>
            <HcToggleBtn
              id="test-switch"
              toggled={isToggled}
              onChange={(e) => {
                setIsToggled(e.target.checked);
              }}
            />

            <Title style={{ marginLeft: 6, fontWeight: 500 }}>
              {isToggled == true ? "On" : "Off"}
            </Title>
          </div>
        </Container>
      </ComponentWrapper>{" "}
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

export default OrderCreate;
