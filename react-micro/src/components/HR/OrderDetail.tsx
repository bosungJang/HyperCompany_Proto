import React, { useEffect, useState } from "react";
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  SelectBox,
  Title,
  HcTagNoInput,
} from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { useLocation } from "react-router";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import HcToggleBtn from "common/HcToggleBtn";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import { HcDatePicker } from "common/HcDatePicker";
import InfoIconTooltip from "common/HcTooltip";
import { SideBar } from "common/HcPopup";

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
const OrderDetail = () => {
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  const [orderType, setrOrderType] = useState("인사 발령");
  const [group, setGroup] = useState("");
  const [organization, setOrganization] = useState("");
  const location = useLocation();
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
      data.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
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
    setIsOpen(false);
  };
  /*ToggleBtn */
  const [isToggled, setIsToggled] = useState(false); //전사공지
  const [signToggle, setSignToggle] = useState(true); //결재
  /*ToggleBtn */
  /*side bar */
  const [isOpen, setIsOpen] = useState(false);
  /*side bar*/
  /*TagInput */
  const [tags, setTags]: any[] = useState([]);
  useEffect(() => {
    if (tags.length === 0) setCheckedItem([]);
  }, [tags]);
  /*TagInput */
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
  const [state, setState] = useState(location.state);
  const [edit, setEdit] = useState(false);
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
    <>
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
        <Container
          width={1320}
          maxHeight={259}
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
              {edit ? (
                <>
                  <HcTextField
                    value="TmaxEnterprise 인사 발령"
                    titleName="발령 내용"
                    required
                    style={{ width: "360px", marginBottom: "25px" }}
                  />
                  <HcDatePicker
                    titleName="발령 일시"
                    required
                    style={{ width: "360px" }}
                  />
                </>
              ) : (
                <>
                  <HcTextFieldLabel
                    style={{ width: "360px", marginBottom: "25px" }}
                    titleName="발령 내용"
                    required
                  >
                    TmaxEnterprise 인사 발령
                  </HcTextFieldLabel>{" "}
                  <HcTextFieldLabel
                    titleName="발령 일시"
                    required
                    style={{ width: "360px" }}
                  >
                    2020.01.01
                  </HcTextFieldLabel>
                </>
              )}
            </div>

            <div style={{ display: "block", width: "360px" }}>
              <SelectBox
                titleName="발령 종류"
                name="kinds"
                required
                placeholder="발령 종류 선택"
                items={["입사", "승진", "인사발령"]}
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
        </Container>
        <Container
          width={1320}
          maxHeight={142}
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
              id="notice-switch"
              toggled={isToggled}
              onChange={() => {
                setIsToggled(!isToggled);
              }}
            />

            <Title style={{ marginLeft: 6, fontWeight: 500 }}>
              {isToggled == true ? "On" : "Off"}
            </Title>

            <Title style={{ fontWeight: 500, margin: "0px 61px 0px 150px" }}>
              결재
            </Title>

            <HcToggleBtn
              id="sign-switch"
              toggled={signToggle}
              onChange={() => {
                setSignToggle(!signToggle);
              }}
            />

            <Title style={{ marginLeft: 6, fontWeight: 500 }}>
              {signToggle == true ? "On" : "Off"}
            </Title>
          </div>
        </Container>
      </ComponentWrapper>{" "}
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          {edit === false ? (
            <>
              {" "}
              <HcButton
                onClick={() => {
                  setEdit(true);
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
                }}
                styles="line"
                style={{ marginRight: "5px" }}
                size="big"
              >
                삭제
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
            </>
          ) : (
            <>
              {" "}
              <HcButton
                onClick={() => {}}
                styles="primary"
                style={{ marginRight: "5px" }}
                size="big"
              >
                저장
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
            </>
          )}
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

export default OrderDetail;
