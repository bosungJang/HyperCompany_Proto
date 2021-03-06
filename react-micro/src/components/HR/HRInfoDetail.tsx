import React, { useState, CSSProperties } from "react";
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  TextField,
  HcTextFieldLabel,
  Title,
  SubHeading,
  SelectBox,
} from "common/HcTextField";
import { useLocation } from "react-router";
import img from "common/img/bgimg.png";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";
import HcFileUploader from "common/HcFileUploader";
import {
  HcDatePicker,
  HcDateRangePicker,
  DatePickerOption,
} from "common/HcDatePicker";
import { HcTable, HcTableContainer } from "common/HcTableComponent";
import ProgressBar, { PercentageBar } from "common/HcProgressBar";
const Info = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  height: fit-content;
  width: fit-content;
  color: #5d5d62;
`;

interface BarProps {
  pay: number;
  deduction: number;
}
const Bar = styled.div<BarProps>`
  width: 1240px;
  height: 12px;
  border-radius: 17px;
  background: ${(props) =>
    `linear-gradient(to right, #5799fb ${props.pay}%,  #5799fb 0.1% ,#ffb84c  ${props.pay}%)`};
  transition: all 0.3s ease;
  margin-top: 15px;
`;
const BasicContainer = styled.div`
  margin-top: 20px;
  width: 1320px;
  height: 475px;
  position: relative;
`;
const TextBoxField = styled.div`
  width: 1040px;
  height: 315px;
  position: absolute;
  left: 240px;
  display: flex;
`;
const IdField = styled.div`
  height: 70;
  border-bottom: 1px solid #cecece;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  width: 320px;
  padding: 0px 0px 10px 10px;
`;
const BgUploadButton = styled.div`
  position: absolute;
  top: 102px;
  left: 1282px;
`;
const PfUploadButton = styled.div`
  top: 238px;
  left: 168px;
  position: absolute;
`;

const HRInfoDetail = () => {
  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */

  /* pop up */
  const [modalOpen, setModalOpen] = useState(false);
  const [modifyOpen, setModifyOpen] = useState(false);
  const openModal = () => {
    if (resign !== "none") setModifyOpen(true);
    else setModalOpen(true);
  };
  const closeModal = () => {
    if (resign !== "none") setModifyOpen(false);
    else setModalOpen(false);
  };
  const [resign, setResign] = useState("leave");
  const [radio, setRadio] = useState("true");
  /* pop up */

  const location = useLocation();
  const [bgImg, setBgImg] = useState(img); //????????????
  const [PfImg, setPfImg] = useState(img); //????????? ??????W
  const fileInput = React.useRef(null);
  const PfInput = React.useRef(null);
  const [edit, setEdit] = useState(false);
  /* info */
  const [file, setFile]: any = useState([]);

  /* info */
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  const [data, setData] = useState({
    name: location.state.name,
    employeeNumber: location.state.employeeNumber,
    telePhone: location.state.telePhone,
    responsibility: location.state.responsibility,
    organization: location.state.organization,
    company: location.state.company,
    entryData: location.state.entryDate,
    position: location.state.position,
  });
  const onChange = (e: any) => {
    if (e.target.files[0]) {
      setBgImg(e.target.files[0]);
    } else {
      //????????? ????????? ???
      setBgImg(img);
      return;
    }
    //????????? ?????? ??????
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBgImg(String(reader.result));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const onPfChange = (e: any) => {
    if (e.target.files[0]) {
      setPfImg(e.target.files[0]);
    } else {
      //????????? ????????? ???
      setPfImg(img);
      return;
    }
    //????????? ?????? ??????
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPfImg(String(reader.result));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const [date, setDate] = useState(new Date());
  const type = ["?????????", "?????????", "?????????", "????????????"];
  const position = ["?????????", "?????????", "UX?????????"];
  const disability = ["??????", "?????????"];
  const military = ["?????????", "??????", "??????", "??????"];
  const marriage = ["??????", "??????"];
  const TaxReduction = ["??????", "?????????"];
  const nationality = ["????????????"];
  const responsibility = ["??????"];
  const gender = ["??????", "??????"];
  const work = ["UX??????"];
  const [typeState, setTypeState] = useState("?????????");
  const [taxReductionState, setTaxReductionState] = useState("??????");
  const [marriageState, setMarriageState] = useState("??????");
  const [nationalityState, setNationalityState] = useState("????????????");
  const [genderState, setGenderState] = useState("??????");
  const [disabilityState, setDisabilityState] = useState("?????????");
  const [militaryState, setMilitaryState] = useState("??????");
  const [positionState, setPositionState] = useState("?????????");
  const [responsibilityState, setResponsibility] = useState("??????");
  const [workState, setWorkState] = useState("");

  return (
    <>
      <ComponentWrapper
        style={{
          padding: 40,
          display: "block",
          position: "relative",
          // height: Tabs === "1" ? 4678 : 3080,
          height: "fit-content",
        }}
      >
        <div
          style={{
            marginBottom: 39,
            display: "flex",
          }}
        >
          <HcTitleTextField titleName="?????? ?????? ??????" isBackIcon={true} />

          <HcButton
            styles="line"
            size="medium"
            style={{
              marginLeft: 575,
            }}
          >
            ?????? ??????
          </HcButton>
          <HcButton
            styles="line"
            size="medium"
            style={{
              marginLeft: 10,
            }}
          >
            ????????????
          </HcButton>
        </div>

        <BasicContainer
          style={{ marginTop: 37, marginBottom: resign === "none" ? 40 : 250 }}
        >
          <img
            src={bgImg}
            style={{ width: 1320, height: 140, position: "relative" }}
            className=""
          />
          <BgUploadButton style={{ display: edit === true ? "" : "none" }}>
            <label htmlFor="input-file" style={{ cursor: "pointer" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2Z"
                  fill="#2D2D31"
                />
                <path
                  d="M13.5284 6.74316L13.5284 6.74317C13.2687 7.00295 13.2687 7.39722 13.5284 7.65699L16.3422 10.4708C16.4707 10.5992 16.6338 10.6656 16.7992 10.6656H16.7992C16.9643 10.6656 17.1274 10.5994 17.2561 10.4708L19.9044 7.82245L19.9044 7.82245C20.1642 7.56267 20.1642 7.16839 19.9044 6.90863L17.0906 4.09482L17.0906 4.09482C16.8308 3.83506 16.4365 3.83506 16.1768 4.09482L13.5284 6.74316ZM16.7992 9.10008L14.8992 7.2001L16.6335 5.46578L18.5335 7.36576L16.7992 9.10008Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.2"
                />
                <path
                  d="M3.9 19.3852L3.90033 19.3852L4.14824 16.3546C4.14941 16.1857 4.22013 16.0525 4.34295 15.9295L4.34301 15.9295L11.9843 8.28818C12.2441 8.02842 12.6384 8.02842 12.8982 8.28818L12.8985 8.28853L15.6843 11.1022C15.6844 11.1022 15.6844 11.1023 15.6845 11.1023C15.9441 11.3621 15.944 11.7563 15.6843 12.016L8.04311 19.6848L8.04298 19.6849C7.93995 19.7879 7.77934 19.8486 7.63315 19.8777L7.6209 19.8802L7.62084 19.8794L4.58628 20.1001L4.57903 20.1006V20.1004H4.5517H4.47683L4.47543 20.0956C4.33683 20.0783 4.20337 20.0141 4.09477 19.9055M3.9 19.3852L4.09477 19.9055M3.9 19.3852V19.3934C3.9 19.5787 3.96151 19.7723 4.09477 19.9055M3.9 19.3852L4.16549 19.8348L4.09477 19.9055M12.4137 9.68694L14.3136 11.5868L7.29329 18.607L5.26702 18.7609L5.42104 16.7069L12.4137 9.68694Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.2"
                />
              </svg>
            </label>
            <input
              type="file"
              id="input-file"
              style={{ display: "none" }}
              accept="image/jpg,impge/png,image/jpeg"
              onChange={onChange}
              ref={fileInput}
            />
          </BgUploadButton>
          <img
            src={PfImg}
            style={{
              position: "absolute",
              width: 170,
              height: 170,
              top: 105,
              left: 40,
              borderRadius: 100,
              border: "5px solid #ffffff",
            }}
          />
          <PfUploadButton style={{ display: edit === true ? "" : "none" }}>
            <label htmlFor="input-Pffile" style={{ cursor: "pointer" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2Z"
                  fill="#2D2D31"
                />
                <path
                  d="M13.5284 6.74316L13.5284 6.74317C13.2687 7.00295 13.2687 7.39722 13.5284 7.65699L16.3422 10.4708C16.4707 10.5992 16.6338 10.6656 16.7992 10.6656H16.7992C16.9643 10.6656 17.1274 10.5994 17.2561 10.4708L19.9044 7.82245L19.9044 7.82245C20.1642 7.56267 20.1642 7.16839 19.9044 6.90863L17.0906 4.09482L17.0906 4.09482C16.8308 3.83506 16.4365 3.83506 16.1768 4.09482L13.5284 6.74316ZM16.7992 9.10008L14.8992 7.2001L16.6335 5.46578L18.5335 7.36576L16.7992 9.10008Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.2"
                />
                <path
                  d="M3.9 19.3852L3.90033 19.3852L4.14824 16.3546C4.14941 16.1857 4.22013 16.0525 4.34295 15.9295L4.34301 15.9295L11.9843 8.28818C12.2441 8.02842 12.6384 8.02842 12.8982 8.28818L12.8985 8.28853L15.6843 11.1022C15.6844 11.1022 15.6844 11.1023 15.6845 11.1023C15.9441 11.3621 15.944 11.7563 15.6843 12.016L8.04311 19.6848L8.04298 19.6849C7.93995 19.7879 7.77934 19.8486 7.63315 19.8777L7.6209 19.8802L7.62084 19.8794L4.58628 20.1001L4.57903 20.1006V20.1004H4.5517H4.47683L4.47543 20.0956C4.33683 20.0783 4.20337 20.0141 4.09477 19.9055M3.9 19.3852L4.09477 19.9055M3.9 19.3852V19.3934C3.9 19.5787 3.96151 19.7723 4.09477 19.9055M3.9 19.3852L4.16549 19.8348L4.09477 19.9055M12.4137 9.68694L14.3136 11.5868L7.29329 18.607L5.26702 18.7609L5.42104 16.7069L12.4137 9.68694Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.2"
                />
              </svg>
            </label>
            <input
              type="file"
              id="input-Pffile"
              style={{ display: "none" }}
              accept="image/jpg,impge/png,image/jpeg"
              onChange={onPfChange}
              ref={PfInput}
            />
          </PfUploadButton>
          <TextBoxField style={{ top: 179 }}>
            <div
              style={{
                display: "block",
                marginRight: 40,
                width: 320,
                marginTop: edit === false ? 8 : 12,
              }}
            >
              {edit === false ? (
                <IdField style={{ height: 40, marginBottom: 20 }}>
                  {data.name}
                </IdField>
              ) : (
                <TextField
                  value={data.name}
                  style={{
                    width: 320,
                    fontSize: "20px",
                    fontWeight: 500,
                    marginBottom: 20,
                  }}
                />
              )}
              <HcTextFieldLabel
                titleName="?????? ??????"
                style={{ width: 320, marginBottom: 20 }}
              >
                {data.company}
              </HcTextFieldLabel>
              {edit === false ? (
                <>
                  <HcTextFieldLabel
                    titleName="??????"
                    style={{ width: 320, marginBottom: 20 }}
                  >
                    {data.position}
                  </HcTextFieldLabel>
                  <HcTextFieldLabel titleName="??????" style={{ width: 320 }}>
                    {data.telePhone}
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  <SelectBox
                    titleName="??????"
                    style={{ width: 320, marginBottom: 20 }}
                    required
                    items={responsibility}
                    setState={setResponsibility}
                    state={responsibility}
                  />
                  <HcTextField
                    titleName="?????? ??????"
                    value={data.telePhone}
                    style={{ width: 320 }}
                  />
                </>
              )}
            </div>
            <div style={{ display: "block", marginRight: 40 }}>
              <IdField style={{ marginBottom: 20 }}>
                {data.employeeNumber}
              </IdField>
              <HcTextFieldLabel
                titleName="??????"
                style={{ width: 320, marginBottom: 20 }}
              >
                {data.organization}
              </HcTextFieldLabel>
              {edit === false ? (
                <>
                  <HcTextFieldLabel
                    titleName="??????"
                    style={{ width: 320, marginBottom: 20 }}
                  >
                    {data.position}
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName="?????? ??????"
                    style={{ width: 320 }}
                  >
                    010-1234-6789
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  <SelectBox
                    titleName="??????"
                    style={{ width: 320, marginBottom: 20 }}
                    items={position}
                    state={positionState}
                    setState={setPositionState}
                  />
                  <HcTextField
                    titleName="?????? ??????"
                    value={"010-1234-5678"}
                    style={{ width: 320 }}
                  />
                </>
              )}
            </div>
            <div style={{ display: "block", marginTop: 70 }}>
              <HcTextFieldLabel
                titleName="?????????"
                style={{ width: 320, marginBottom: 20 }}
              >
                {data.entryData}
              </HcTextFieldLabel>
              {edit === false ? (
                <>
                  <HcTextFieldLabel
                    titleName="?????? ??????"
                    style={{ width: 320, marginBottom: 20 }}
                  >
                    UX??????
                  </HcTextFieldLabel>
                  <HcTextFieldLabel titleName="?????????" style={{ width: 320 }}>
                    Minsoo_Choi@tmax.co.kr
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  <SelectBox
                    titleName="????????????"
                    name="duty"
                    required
                    items={work}
                    state={workState}
                    setState={setWorkState}
                    style={{ width: 320, marginBottom: 20 }}
                  />
                  <HcTextField
                    titleName="?????????"
                    value={"Minsoo_Choi@tmax.co.kr"}
                    style={{ width: 320 }}
                  />
                </>
              )}
            </div>
          </TextBoxField>
          {resign === "none" ? (
            ""
          ) : (
            <div
              className="isLeaved"
              style={{
                padding: 30,
                width: 1320,
                height: 170,
                background: "#f4f4f4",
                marginTop: 375,
                borderRadius: 6,
              }}
            >
              <Info
                style={{
                  fontSize: "16px",
                  color: "#2D2D31",
                  display: "flex",
                  marginBottom: 16,
                }}
              >
                <svg
                  style={{ marginRight: 6 }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10C11.4477 10 11 10.4477 11 11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V11C13 10.4477 12.5523 10 12 10Z"
                    fill="#2D2D31"
                  />
                </svg>
                {resign === "leave"
                  ? "??????????????? ?????? ?????? ??????????????????."
                  : "??????????????? ?????? ??????????????????."}
              </Info>
              {resign}
              {radio}
              <Info style={{ marginRight: 30 }}>
                ?????? ?????? : 2022.01.01 ~ 2023.01.01
              </Info>
              <Info style={{ marginRight: 30 }}>
                ?????? : ?????? ????????? ?????? ???????????????.
              </Info>
            </div>
          )}
        </BasicContainer>
        <HcTabsAdv
          items={[
            { to: "1", name: "????????????" },
            { to: "2", name: "????????????" },
            { to: "3", name: "????????????" },
            { to: "4", name: "????????????" },
            { to: "5", name: "????????????" },
            { to: "6", name: "?????? ??? ??????" },
            { to: "7", name: "??????" },
            { to: "8", name: "??????" },
            { to: "9", name: "????????? ??????" },
            { to: "10", name: "????????????" },
          ]}
          size="normal"
          TabNumber={Tabs}
          SetTabNumber={setTabs}
        />
        {
          {
            "1": (
              <>
                <Container
                  title="?????? ??????"
                  maxHeight={448}
                  width={1320}
                  style={{ marginTop: 20, zIndex: 3, overflow: "visible" }}
                >
                  <div style={{ display: "flex" }}>
                    {edit === false ? (
                      <>
                        <div
                          style={{
                            marginRight: 80,
                            display: "block",
                            width: 360,
                          }}
                        >
                          <HcTextFieldLabel
                            titleName="????????????"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            1980.01.01
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="??? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            ??????????????? ????????? ?????????
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="?????? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            {marriageState}
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="???????????? ????????? ?????? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            {taxReductionState}
                          </HcTextFieldLabel>
                        </div>
                        <div
                          style={{
                            marginRight: 80,
                            display: "block",
                            width: 360,
                          }}
                        >
                          <HcTextFieldLabel
                            titleName="??????"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            {genderState}
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="?????? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            101???501???
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="?????? ??????"
                            style={{ width: 360 }}
                          >
                            {disabilityState}
                          </HcTextFieldLabel>
                        </div>
                        <div style={{ display: "block", width: 360 }}>
                          <HcTextFieldLabel
                            titleName="??????"
                            style={{ width: 360, marginBottom: 105 }}
                          >
                            {nationalityState}
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="?????? ??????"
                            style={{ width: 360 }}
                          >
                            {militaryState}
                          </HcTextFieldLabel>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            marginRight: 80,
                            display: "block",
                            width: 360,
                          }}
                        >
                          <Title>????????????</Title>
                          <HcDatePicker
                            style={{ width: 360, marginBottom: 20 }}
                          />
                          <HcTextField
                            titleName="??? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                            value="??????????????? ????????? ?????????"
                          />
                          <SelectBox
                            titleName="?????? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                            items={marriage}
                            state={marriageState}
                            setState={setMarriageState}
                          />
                          <SelectBox
                            titleName="???????????? ????????? ?????? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                            items={TaxReduction}
                            state={taxReductionState}
                            setState={setTaxReductionState}
                          />
                        </div>
                        <div
                          style={{
                            marginRight: 80,
                            display: "block",
                            width: 360,
                          }}
                        >
                          <SelectBox
                            titleName="??????"
                            style={{ width: 360, marginBottom: 20 }}
                            items={gender}
                            state={genderState}
                            setState={setGenderState}
                          />
                          <HcTextField
                            titleName="?????? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                            value="101???501???"
                          />
                          <SelectBox
                            titleName="?????? ??????"
                            style={{ width: 360, marginBottom: 20 }}
                            items={disability}
                            state={disabilityState}
                            setState={setDisabilityState}
                          />
                        </div>
                        <div style={{ display: "block" }}>
                          <SelectBox
                            titleName="??????"
                            style={{ width: 360, marginBottom: 20 }}
                            items={nationality}
                            state={nationalityState}
                            setState={setNationalityState}
                          />
                          <SelectBox
                            titleName="?????? ??????"
                            style={{ width: 360, marginTop: 105 }}
                            items={military}
                            state={militaryState}
                            setState={setMilitaryState}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </Container>
                <Container
                  title="??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 125 }}>?????? ??????</th>
                          <th style={{ width: 130 }}>?????????</th>
                          <th style={{ width: 120 }}>??????</th>
                          <th style={{ width: 120 }}>??????</th>
                          <th style={{ width: 130 }}>????????????</th>
                          <th style={{ width: 130 }}>????????????</th>
                          <th style={{ width: 120 }}>?????????</th>
                          <th style={{ width: 120 }}>???/???</th>
                          <th style={{ width: 120 }}>?????? ??????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 165 }}>?????????</th>
                          <th style={{ width: 170 }}>??????</th>
                          <th style={{ width: 160 }}>??????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 160 }}>????????????</th>
                          <th style={{ width: 160 }}>????????????</th>
                          <th style={{ width: 150 }}>?????? ??????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 220 }}>?????? ??????</th>
                          <th style={{ width: 220 }}>?????????</th>
                          <th style={{ width: 210 }}>????????????</th>
                          <th style={{ width: 255 }}>????????????</th>
                          <th style={{ width: 210 }}>??????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 185 }}>??????</th>
                          <th style={{ width: 185 }}>?????????</th>
                          <th style={{ width: 185 }}>??????(??????)</th>
                          <th style={{ width: 185 }}>????????????</th>
                          <th style={{ width: 185 }}>????????????</th>
                          <th style={{ width: 190 }}>??????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="?????????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????? ??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 215 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 160 }}>??????</th>
                          <th style={{ width: 160 }}>??????????????????</th>
                          <th style={{ width: 160 }}>??????</th>
                          <th style={{ width: 160 }}>????????????</th>
                          <th style={{ width: 160 }}>????????????</th>
                          <th style={{ width: 160 }}>????????????</th>
                          <th style={{ width: 155 }}>????????????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 220 }}>?????? ??????</th>
                          <th style={{ width: 220 }}>?????????</th>
                          <th style={{ width: 210 }}>??????</th>
                          <th style={{ width: 255 }}>??????</th>
                          <th style={{ width: 210 }}>??????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="?????? ??????"
                  maxHeight={497}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <div style={{ left: 24, position: "absolute", width: 1272 }}>
                    <HcFileUploader file={file} setFile={setFile} />
                  </div>
                </Container>
              </>
            ),
            "2": (
              <>
                <Container
                  title="?????? ??????"
                  maxHeight={173}
                  width={1320}
                  style={{ marginTop: 20, overflow: "visible", zIndex: 5 }}
                >
                  <div style={{ display: "flex" }}>
                    <SelectBox
                      titleName="?????? ??????"
                      style={{ width: 360, marginRight: 80 }}
                      state={typeState}
                      setState={setTypeState}
                      items={type}
                    />
                    <div style={{ width: 400, marginRight: 30 }}>
                      <Title>?????? ?????? ??????</Title>
                      <HcDateRangePicker />
                    </div>
                    <HcTextField
                      value="??????????????????."
                      titleName="??????"
                      style={{ width: 360 }}
                    />
                  </div>
                </Container>
                <Container
                  title="?????????"
                  maxHeight={316}
                  width={1320}
                  style={{ marginTop: 24, marginBottom: 120 }}
                >
                  <div
                    style={{
                      left: 24,
                      position: "absolute",
                      width: 1272,
                    }}
                  >
                    <HcFileUploader
                      file={file}
                      setFile={setFile}
                      style={{ height: 172, minHeight: 172 }}
                    />
                  </div>
                </Container>
              </>
            ),
            /*3 end*/
            "3": (
              <div
                style={{
                  border: "1px solid #cecece",
                  borderRadius: "6px",
                  padding: "20px 30px 30px 24px",
                  width: 1320,
                  height: 908,
                  marginTop: 20,
                  position: "relative",
                }}
              >
                <SubHeading titleName="2022??? 1???" />
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    top: 68,
                    left: 33,
                  }}
                >
                  <div style={{ display: "block", marginRight: 32 }}>
                    <Info
                      style={{
                        color: "#838181",
                        fontWeight: 500,
                        marginBottom: 2,
                      }}
                    >
                      ?????? ?????????
                    </Info>
                    <Info>2022??? 1??? 25???</Info>
                  </div>
                  <div style={{ display: "block", marginRight: 32 }}>
                    <Info
                      style={{
                        color: "#838181",
                        fontWeight: 500,
                        marginBottom: 2,
                      }}
                    >
                      ?????? ??????
                    </Info>
                    <Info>???????????? 887-112-123456</Info>
                  </div>
                </div>
                <HcButton
                  style={{ position: "absolute", top: 30, left: 1173 }}
                  styles={"line"}
                  size={"small"}
                >
                  ?????? ????????? ????????????
                </HcButton>
                <div style={{ padding: "28px 0px 0px 1145px" }}>
                  <DatePickerOption
                    option="month"
                    date={date}
                    setDate={setDate}
                  />
                </div>
                <HcTextFieldLabel
                  titleName=""
                  style={{ width: 1240, marginBottom: 17 }}
                >
                  ??????
                </HcTextFieldLabel>
                <Info style={{ marginBottom: 6, marginLeft: 10 }}>
                  ??? ?????????
                </Info>
                <div
                  style={{
                    fontSize: "30px",
                    fontFamily: "Noto Sans KR",
                    fontWeight: "bold",
                    marginBottom: 15,
                    color: "#000000",
                    height: "fit-content",
                    marginLeft: 10,
                  }}
                >
                  2,474,700???
                </div>
                <Bar deduction={90} pay={10} /> {/*?????? ?????? / ?????? ?????? */}
                <div style={{ display: "flex", marginTop: 13 }}>
                  <Info
                    style={{
                      color: "#5799FB",
                      fontSize: "13px",
                      marginLeft: 10,
                    }}
                  >
                    ?????? ?????? 79%
                  </Info>
                  <Info
                    style={{
                      color: "#FFA61F",
                      fontSize: "13px",
                      marginLeft: 1058,
                    }}
                  >
                    ?????? ?????? 21%
                  </Info>
                </div>
                <HcTextFieldLabel
                  titleName=""
                  style={{ width: 1240, marginTop: 30 }}
                >
                  ?????? ??????
                </HcTextFieldLabel>
                <div
                  style={{
                    marginLeft: 10,
                    display: "inherit",
                    marginTop: 20,
                    marginBottom: 30,
                  }}
                >
                  <div style={{ float: "left", width: 71, marginRight: 92 }}>
                    <Info style={{ marginBottom: 16 }}>?????????</Info>
                    <Info style={{ marginBottom: 16 }}>?????????</Info>
                    <Info style={{ marginBottom: 16 }}>??????</Info>
                    <Info
                      style={{
                        color: "#5799fb",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      ????????????
                    </Info>
                  </div>
                  <div style={{ float: "left", width: 105 }}>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000???
                    </Info>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000???
                    </Info>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000???
                    </Info>
                    <Info
                      style={{
                        color: "#5799fb",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      2,250,000???
                    </Info>
                  </div>
                </div>
                <HcTextFieldLabel
                  titleName=""
                  style={{ width: 1240, marginTop: 30 }}
                >
                  ?????? ??????
                </HcTextFieldLabel>
                <div
                  style={{ marginLeft: 10, display: "inherit", marginTop: 20 }}
                >
                  <div style={{ float: "left", width: 91, marginRight: 72 }}>
                    <Info style={{ marginBottom: 16 }}>????????????</Info>
                    <Info style={{ marginBottom: 16 }}>???????????????</Info>
                    <Info style={{ marginBottom: 16 }}>?????????????????????</Info>
                    <Info style={{ marginBottom: 16 }}>???????????????</Info>
                    <Info style={{ marginBottom: 16 }}>?????????</Info>
                    <Info
                      style={{
                        color: "#FFA61F",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      ?????? ??????
                    </Info>
                  </div>
                  <div style={{ float: "left", width: 105 }}>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000???
                    </Info>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000???
                    </Info>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000???
                    </Info>{" "}
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000???
                    </Info>{" "}
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000???
                    </Info>
                    <Info
                      style={{
                        color: "#FFA61F",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      2,250,000???
                    </Info>
                  </div>
                </div>
              </div>
            ),
            "4": (
              <>
                <div
                  style={{
                    marginTop: "20px",
                    padding: "20px 0px 0px 24px",
                  }}
                >
                  <div style={{ display: "flex", marginBottom: 28 }}>
                    <SubHeading
                      titleName={`${String(date.getFullYear())}??? ${String(
                        date.getMonth()
                      )}???`}
                      style={{ marginRight: 1030 }}
                    />
                    <DatePickerOption
                      option="yearMonth"
                      date={date}
                      setDate={setDate}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "16px",
                      marginBottom: "50px",
                    }}
                  >
                    <div style={{ display: "block" }}>
                      <HcTextFieldLabel
                        titleName="?????????"
                        style={{ width: 360, marginBottom: 20 }}
                      >
                        13???(3??? ??????)
                      </HcTextFieldLabel>
                      <HcTextFieldLabel
                        titleName="?????????"
                        style={{ width: 360 }}
                      >
                        5???
                      </HcTextFieldLabel>
                    </div>
                    <div style={{ display: "block", marginLeft: 80 }}>
                      <HcTextFieldLabel
                        titleName="????????????"
                        style={{ width: 360, marginBottom: 20 }}
                      >
                        10???
                      </HcTextFieldLabel>
                      <HcTextFieldLabel
                        titleName="????????????"
                        style={{ width: 360 }}
                      >
                        3???
                      </HcTextFieldLabel>
                    </div>
                    <div style={{ display: "block", marginLeft: 80 }}>
                      <HcTextFieldLabel
                        titleName="?????????"
                        style={{ width: 360, marginBottom: 20 }}
                      >
                        3???
                      </HcTextFieldLabel>
                      <HcTextFieldLabel
                        titleName="?????????"
                        style={{ width: 360 }}
                      >
                        2???
                      </HcTextFieldLabel>
                    </div>
                  </div>
                  <SubHeading titleName="?????? ?????? ??????" />
                  <HcTableContainer style={{ marginTop: "28px" }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: "310px" }}>?????? ??????</th>
                          <th style={{ width: "310px" }}>?????? ??????</th>
                          <th style={{ width: "310px" }}>?????? ??????</th>
                          <th style={{ width: "310px" }}>?????? ??????</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>??????</td>
                          <td>2021.01.01</td>
                          <td>2021.01.01 ~ 2021.01.02</td>
                          <td>??????</td>
                        </tr>
                      </tbody>
                    </HcTable>
                  </HcTableContainer>
                </div>
              </>
            ),
            "5": (
              <>
                <SubHeading
                  titleName="????????????"
                  style={{ marginLeft: "24px", marginTop: "40px" }}
                />
                <HcButton
                  size="medium"
                  styles="secondary"
                  style={{ marginLeft: "40px", marginTop: "18px" }}
                >
                  +??????
                </HcButton>
                <HcTableContainer
                  style={{ marginTop: "12px", marginLeft: "40px" }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ width: 46 }}></th>
                        <th style={{ width: 120 }}>?????? ??????</th>
                        <th style={{ width: 254 }}>?????? ??????</th>
                        <th style={{ width: 140 }}>?????? ??????</th>
                        <th style={{ width: 140 }}>?????????</th>
                        <th style={{ width: 140 }}>??????</th>
                        <th style={{ width: 140 }}>?????? ??? ??????</th>
                        <th style={{ width: 140 }}>?????? ??? ??????</th>
                        <th style={{ width: 120 }}>-</th>
                      </tr>
                    </thead>
                  </HcTable>
                </HcTableContainer>
              </>
            ),
            "6": (
              <>
                {" "}
                <Container
                  title="?????? ??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????? ??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 215 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>{" "}
                <Container
                  title="?????? ??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????? ??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 215 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>{" "}
                <Container
                  title="?????? ??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????? ??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 215 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
              </>
            ),
            "7": (
              <>
                <SubHeading
                  titleName={`${String(date.getFullYear())}??? ${String(
                    date.getMonth() + 1
                  )}???`}
                  style={{ margin: "40px 0px 33px 24px" }}
                />
                <div style={{ padding: "0px 0px 0px 1145px" }}>
                  <DatePickerOption
                    option="month"
                    date={date}
                    setDate={setDate}
                  />
                </div>
                <div style={{ marginLeft: "40px" }}>
                  <HcTextFieldLabel
                    titleName=""
                    style={{ width: "1240px", marginBottom: "20px" }}
                  >
                    ??? ??????
                  </HcTextFieldLabel>
                  <div
                    style={{
                      fontSize: "30px",
                      fontFamily: "Noto Sans KR",
                      fontWeight: "bold",
                      marginBottom: 15,
                      color: "#000000",
                      height: "fit-content",
                      marginLeft: 10,
                    }}
                  >
                    15???
                  </div>
                  <PercentageBar
                    first={66}
                    second={21}
                    style={{ width: 1240 }}
                  />
                  <div
                    style={{
                      display: "flex",
                      margin: "13px 0px 61px 10px",
                      width: "1230px",
                    }}
                  >
                    <div style={{ display: "block", width: "66%" }}>
                      <Title style={{ color: "#257CFF" }}>?????? 66%</Title>
                      <Title style={{ color: "#5D5D62" }}>10???</Title>
                    </div>
                    <div style={{ display: "block", width: "21%" }}>
                      <Title style={{ color: "#13ABB4" }}>????????? 21%</Title>
                      <Title style={{ color: "#5D5D62" }}>3???</Title>
                    </div>
                    <div style={{ display: "block" }}>
                      <Title style={{ color: "#FFC123" }}>?????? 13%</Title>
                      <Title style={{ color: "#5D5D62" }}>2???</Title>
                    </div>
                  </div>
                  <HcTextFieldLabel
                    titleName=""
                    style={{
                      width: "1240px",
                      marginBottom: "20px",
                    }}
                  >
                    ???????????? ??????
                  </HcTextFieldLabel>
                  <div style={{ display: "block", marginLeft: "10px" }}>
                    <div style={{ display: "flex" }}>
                      <Title style={{ marginRight: "50px" }}>
                        UX????????? ????????????
                      </Title>
                      <Title style={{ color: "#000000" }}>50%</Title>
                      <ProgressBar
                        percentage={50}
                        style={{
                          width: "398px",
                          marginLeft: "20px",
                          borderRadius: 17,
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", marginTop: "17px" }}>
                      <Title style={{ marginRight: "102px" }}>AI UX??????</Title>
                      <Title style={{ color: "#000000" }}>80%</Title>
                      <ProgressBar
                        percentage={80}
                        style={{
                          width: "398px",
                          marginLeft: "20px",
                          borderRadius: 17,
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", marginTop: "17px" }}>
                      <Title style={{ marginRight: "95px" }}>????????? ??????</Title>
                      <Title style={{ color: "#000000" }}>20%</Title>
                      <ProgressBar
                        percentage={20}
                        style={{
                          width: "398px",
                          marginLeft: "20px",
                          borderRadius: 17,
                        }}
                      />
                    </div>
                  </div>
                  <SubHeading titleName="??????" style={{ marginTop: "61px" }} />
                  <HcButton
                    size="medium"
                    styles="secondary"
                    style={{ marginLeft: "16px", marginTop: "18px" }}
                  >
                    +??????
                  </HcButton>
                  <HcTableContainer
                    style={{ marginTop: "12px", marginLeft: "16px" }}
                  >
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 220 }}>?????? ??????</th>
                          <th style={{ width: 220 }}>?????????</th>
                          <th style={{ width: 210 }}>????????????</th>
                          <th style={{ width: 255 }}>????????????</th>
                          <th style={{ width: 210 }}>??????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>????????????</td>
                          <td>UX ????????? ????????????</td>
                          <td>?????????</td>
                          <td>2002.01.01 ~ 2008.01.01</td>
                          <td>?????? ??????</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </HcTable>
                  </HcTableContainer>
                </div>
              </>
            ),
            "8": (
              <>
                <SubHeading
                  titleName="?????? ?????? ??????"
                  style={{ marginLeft: "24px", marginTop: "40px" }}
                />
                <HcButton
                  size="medium"
                  styles="secondary"
                  style={{ marginLeft: "40px", marginTop: "18px" }}
                >
                  +??????
                </HcButton>
                <HcTableContainer
                  style={{ marginTop: "12px", marginLeft: "40px" }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ width: 46 }}></th>
                        <th style={{ width: 220 }}>?????? ??????</th>
                        <th style={{ width: 176 }}>?????? ???</th>
                        <th style={{ width: 249 }}>??????</th>
                        <th style={{ width: 203 }}>??????</th>
                        <th style={{ width: 226 }}>??????</th>
                        <th style={{ width: 120 }}>-</th>
                      </tr>
                    </thead>
                  </HcTable>
                </HcTableContainer>
              </>
            ),
            "9": (
              <>
                <SubHeading
                  titleName="????????? ?????? ??????"
                  style={{ marginLeft: "24px", marginTop: "40px" }}
                />
                <HcButton
                  size="medium"
                  styles="secondary"
                  style={{ marginLeft: "40px", marginTop: "18px" }}
                >
                  +??????
                </HcButton>
                <HcTableContainer
                  style={{ marginTop: "12px", marginLeft: "40px" }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ width: 205 }}>?????? ??????</th>
                        <th style={{ width: 205 }}>????????? ??????</th>
                        <th style={{ width: 205 }}>????????????</th>
                        <th style={{ width: 215 }}>????????????</th>
                        <th style={{ width: 205 }}>?????? ??????</th>
                        <th style={{ width: 205 }}>?????? ?????????</th>
                      </tr>
                    </thead>
                  </HcTable>
                </HcTableContainer>
              </>
            ),
            "10": (
              <>
                {" "}
                <Container
                  title="???????????? ??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????? ??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 215 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>{" "}
                <Container
                  title="???????????? ??????"
                  maxHeight={404}
                  width={1320}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +??????
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????? ??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 150 }}>??????</th>
                          <th style={{ width: 215 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 150 }}>????????????</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
              </>
            ),
          }[Tabs]
        }
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 55 }}>
        {edit === false ? (
          <div>
            <HcButton
              onClick={() => {
                setEdit(true);
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>{" "}
            <HcButton
              onClick={() => {}}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
            <HcButton
              onClick={() => {
                setbarOpen(false);
                setEdit(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
          </div>
        ) : (
          <div>
            {" "}
            <HcButton
              onClick={() => {
                setEdit(false);
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
            <HcButton
              onClick={() => {
                setEdit(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
          </div>
        )}
      </HcBottomBar>
      {/*
      <HcContentPopup
        header={"?????? / ??????"}
        primaryBtn="??????"
        secondBtn="??????"
        open={modalOpen}
        close={closeModal}
        height={762}
        width={840}
        primaryFunc={() => {
          setModalOpen(false);
          setResign(radio);
        }}
      >
        <div style={{ display: "block", left: 40 }}>
          <Title>???/?????? ??????</Title>
          <div style={{ marginBottom: 20 }}>
            <HcRadioGroup
              defaultValue={radio}
              onChange={(value) => setRadio(value)}
            >
              <HcRadioButton value="leave">
                <span style={{ marginRight: 60, marginLeft: 8 }}>??????</span>
              </HcRadioButton>
              <HcRadioButton value="quite">
                <span style={{ marginLeft: 8 }}>??????</span>
              </HcRadioButton>
            </HcRadioGroup>
            {radio}
          </div>
          {radio === "leave" ? (
            <>
              <div style={{ display: "block" }}>
                <HcSelect
                  titleName="?????? ??????"
                  style={{ width: 360, marginBottom: 20 }}
                >
                  <option>?????? ??????</option>
                  <option>????????? ??????/?????? ??????</option>
                  <option>?????? ??????</option>
                  <option>??????????????????</option>
                </HcSelect>
                <div style={{ display: "flex", marginBottom: 20 }}>
                  <HcDatePicker
                    style={{ width: 360, marginRight: 40 }}
                    titleName="?????? ?????? ??????"
                    required
                    startDate={date}
                    setStartDate={setDate}
                  />
                  <HcDatePicker
                    style={{ width: 360 }}
                    titleName="?????? ?????? ??????"
                    required
                    startDate={date}
                    setStartDate={setDate}
                  />
                </div>
                <HcSelect
                  titleName="?????? ??????"
                  style={{ width: 360, marginBottom: 20 }}
                >
                  <option>?????? ??????</option>
                  <option>100%</option>
                  <option>90%</option>
                  <option>80%</option>
                  <option>70%</option>
                  <option>60%</option>
                  <option>50%</option>
                  <option>40%</option>
                  <option>30%</option>
                  <option>20%</option>
                  <option>10%</option>
                </HcSelect>
              </div>
              <HcTextArea
                row={9}
                style={{ width: 760, height: 200 }}
                titleName="??????"
              />
            </>
          ) : (
            <>
              {" "}
              <div style={{ display: "flex", marginBottom: 20 }}>
                <HcDatePicker
                  style={{ width: 360, marginRight: 40 }}
                  titleName="??????"
                  required
                  startDate={date}
                  setStartDate={setDate}
                />
                <HcDatePicker
                  style={{ width: 360 }}
                  titleName="Super Company ?????? ?????? ??????"
                  required
                  startDate={date}
                  setStartDate={setDate}
                />
              </div>{" "}
              <HcTextArea
                row={9}
                style={{ width: 760, height: 200 }}
                titleName="??????"
              />
            </>
          )}
        </div>
      </HcContentPopup>

      <HcContentPopup
        header={resign === "leave" ? "?????? ??????" : "?????? ??????"}
        primaryBtn={resign === "leave" ? "?????? ??????" : "?????? ??????"}
        secondBtn="??????"
        open={modifyOpen}
        close={closeModal}
        height={292}
        width={520}
        style={{ left: 40 }}
        primaryFunc={() => {
          setModifyOpen(false);
          setResign("none");
        }}
      >
        <Title style={{ fontSize: "16px", color: "#656565" }}>
          {resign === "leave"
            ? "????????? ?????????????????????????"
            : "????????? ?????????????????????????"}
        </Title>
      </HcContentPopup>*/}
    </>
  );
};
export default HRInfoDetail;
