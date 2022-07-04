import React, { useEffect, useState } from "react";
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
  HcTagNoInput,
} from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { useLocation, useHistory } from "react-router";
import InfoIconTooltip from "common/HcTooltip";
import HcToggleBtn from "common/HcToggleBtn";
import HcButton from "common/HcButton";
import { SideBar } from "common/HcPopup";
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

const HRCard = styled.div<{ checked: boolean }>`
  height: 54px;
  width: 510px;
  ${(props) =>
    props.checked === false
      ? "border :1px solid #CECECE;"
      : "border:1px solid #5799FB; background: #F5F9FF;"};
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  font-family: Noto Sans KR;
  font-style: bold;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  padding: 13px 20px 15px 56px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 10px;
  display: flex;
  &:hover {
    border: 1px solid #5799fb;
  }
`;
const HRContainer = styled.div`
  display: block;
  width: fit-content;
  overflow-y: scroll;
  overflow-x: visible;
  margin-top: 16px;
  &::-webkit-scrollbar-track {
    background: none;
    position: absolute;
    z-index: 1;
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

  background: /* Shadow covers */ linear-gradient(
      white 30%,
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    /* Shadows */
      radial-gradient(
        farthest-side at 50% 0,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-repeat: no-repeat;
`;
const OrderCreate = () => {
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */

  const [notice, setNotice] = useState(true);
  const [info, setInfo] = useState(true);
  const [target, setTarget] = useState(true);
  const [group, setGroup] = useState("");
  const [organization, setOrganization] = useState("");
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
  const data = Array(15)
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
  const [tableData, setTableData] = useState(data);
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
  const [isToggled, setIsToggled] = useState(false);
  /*ToggleBtn */
  /*TagInput */
  const [tags, setTags]: any[] = useState([]);
  useEffect(() => {
    if (tags.length === 0) setCheckedItem([]);
  }, [tags]);
  /*TagInput */
  /*side bar */
  const [isOpen, setIsOpen] = useState(false);
  /*side bar*/
  const history = useHistory();
  const HRList = data.map(({ name, organization, position, id }) => (
    <HRCard checked={checkedItem.includes(id)}>
      <img
        src=""
        style={{
          marginRight: 12,
          width: 32,
          height: 32,
          borderRadius: "50%",
          position: "absolute",
          left: 12,
          top: 11,
        }}
      />
      {name}({organization}/{position}){" "}
      <div style={{ marginLeft: 247, paddingTop: 3 }}>
        {" "}
        <HcCheckBox
          checked={checkedItem.includes(id)}
          onChange={(e) => {
            checkHandler(e.target.checked, id);
            setTags([...tags, name]);
          }}
        />
      </div>
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
            onClick={() => {
              history.push({
                pathname: "/hr/pas/OrderCreated",
              });
            }}
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
      <SideBar
        header={"대상자 추가"}
        open={isOpen}
        close={() => {
          setIsOpen(false);
        }}
        addFunc={onCreate}
        style={{ display: "block" }}
      >
        <div style={{ float: "left", height: 36 }}>
          <SelectBox
            state={organization}
            setState={setOrganization}
            items={["사업부", "PM본부", "연구본부"]}
            style={{ width: 190 }}
          />
          <SelectBox
            state={group}
            setState={setGroup}
            items={["사업부", "PM본부", "연구본부"]}
            style={{ width: 278, marginLeft: 8 }}
          />
          <svg
            style={{ position: "absolute", top: 5, right: 0 }}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" rx="3" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.2869 8.18777C19.5384 10.8591 19.198 14.8499 16.5266 17.1013C13.8552 19.3528 9.86451 19.0124 7.61305 16.341C5.36159 13.6697 5.70199 9.67893 8.37336 7.42747C11.0447 5.17601 15.0355 5.51641 17.2869 8.18777ZM18.4159 17.8618C21.2216 14.8787 21.4079 10.2004 18.7046 6.9929C15.7933 3.53855 10.6328 3.09838 7.17848 6.00975C3.72413 8.92112 3.28396 14.0816 6.19533 17.5359C8.8074 20.6351 13.2299 21.3081 16.6063 19.3111L21.2035 24.7656C21.6159 25.2549 22.347 25.3173 22.8364 24.9049C23.3257 24.4924 23.3881 23.7614 22.9756 23.272L18.4159 17.8618Z"
              fill="#5D5D62"
            />
          </svg>
        </div>
        <HcTagNoInput
          tags={tags}
          setTags={setTags}
          delete
          deleteAll
          style={{
            backgroundColor: "#F4F4F4",
            height: 76,
            marginTop: 16,
            display: tags.length === 0 ? "none" : "",
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 20,
            width: 514,
            color: "#4D4D4D",
            fontSize: "14px",
            height: 30,
          }}
        >
          총
          <div
            style={{
              color: "#000000",
              fontSize: "16px",
              fontWeight: 600,
              marginLeft: 3,
            }}
          >
            {data.length}
          </div>
          명<div style={{ marginLeft: 351, marginRight: 10 }}>전체 선택</div>{" "}
          <div style={{ paddingTop: 3 }}>
            {" "}
            <HcCheckBox
              checked={checkedItem.length > 0 ? true : false}
              onChange={(e) => checkAllHandler(e.target.checked)}
            />
          </div>
        </div>
        <HRContainer style={{ height: tags.length === 0 ? 572 : 480 }}>
          {/* {checkedItem} */}
          {HRList}
        </HRContainer>
      </SideBar>
    </>
  );
};

export default OrderCreate;
