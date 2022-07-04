import React, { useState, CSSProperties } from "react";
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  TextField,
  HcTextFieldLabel,
  HcSelect,
  Title,
  SubHeading,
  HcTextArea,
  EditableSelect,
  SelectBox,
} from "common/HcTextField";
import { useLocation } from "react-router";
import img from "common/img/bgimg.png";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcFileUploader from "common/HcFileUploader";
import {
  HcDatePicker,
  HcDateRangePicker,
  DatePickerOption,
} from "common/HcDatePicker";
import { HcTable, HcTableContainer } from "common/HcTableComponent";
import ProgressBar, { PercentageBar } from "common/HcProgressBar";
import { HcContentPopup } from "common/HcPopup";
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
  const [bgImg, setBgImg] = useState(img); //배경사진
  const [PfImg, setPfImg] = useState(img); //프로필 사진W
  const fileInput = React.useRef(null);
  const PfInput = React.useRef(null);
  const [edit, setEdit] = useState(false);
  /* info */
  const [basic, setBasic] = useState(true);
  const [edu, setEdu] = useState(true);
  const [career, setCareer] = useState(true);
  const [study, setStudy] = useState(true);
  const [language, setLanguage] = useState(true);
  const [certificate, setCertificate] = useState(true);
  const [activity, setActivity] = useState(true);
  const [family, setFamily] = useState(true);
  const [contract, setContract] = useState(true);
  const [contractFile, setContractFile] = useState(true);
  const [welfare, setWelfare] = useState(true);
  const [mediCheck, setMediCheck] = useState(true);
  const [file, setFile]: any = useState([]);
  const [document, setDocument] = useState(true);
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
      //업로드 취소할 시
      setBgImg(img);
      return;
    }
    //화면에 사진 표시
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
      //업로드 취소할 시
      setPfImg(img);
      return;
    }
    //화면에 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPfImg(String(reader.result));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const [date, setDate] = useState(new Date());
  const type = ["정규직", "계약직", "파견직", "프리렌서"];
  const position = ["매니저", "연구원", "UX연구원"];
  const disability = ["해당", "비해당"];
  const military = ["비해당", "군필", "미필", "면제"];
  const marriage = ["기혼", "미혼"];
  const TaxReduction = ["대상", "비대상"];
  const nationality = ["대한민국"];
  const responsibility = ["팀장"];
  const gender = ["여성", "남성"];
  const work = ["UX설계"];
  const [typeState, setTypeState] = useState("정규직");
  const [taxReductionState, setTaxReductionState] = useState("대상");
  const [marriageState, setMarriageState] = useState("미혼");
  const [nationalityState, setNationalityState] = useState("대한민국");
  const [genderState, setGenderState] = useState("여성");
  const [disabilityState, setDisabilityState] = useState("비해당");
  const [militaryState, setMilitaryState] = useState("군필");
  const [positionState, setPositionState] = useState("연구원");
  const [responsibilityState, setResponsibility] = useState("팀장");
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
          <HcTitleTextField titleName="인사 정보 상세" isBackIcon={true} />

          <HcButton
            styles="line"
            size="medium"
            style={{
              marginLeft: 575,
            }}
          >
            일괄 등록
          </HcButton>
          <HcButton
            styles="line"
            size="medium"
            style={{
              marginLeft: 10,
            }}
          >
            내보내기
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
                titleName="법인 회사"
                style={{ width: 320, marginBottom: 20 }}
              >
                {data.company}
              </HcTextFieldLabel>
              {edit === false ? (
                <>
                  <HcTextFieldLabel
                    titleName="조직"
                    style={{ width: 320, marginBottom: 20 }}
                  >
                    {data.position}
                  </HcTextFieldLabel>
                  <HcTextFieldLabel titleName="조직" style={{ width: 320 }}>
                    {data.telePhone}
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  <SelectBox
                    titleName="직책"
                    style={{ width: 320, marginBottom: 20 }}
                    required
                    items={responsibility}
                    setState={setResponsibility}
                    state={responsibility}
                  />
                  <HcTextField
                    titleName="회사 전화"
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
                titleName="조직"
                style={{ width: 320, marginBottom: 20 }}
              >
                {data.organization}
              </HcTextFieldLabel>
              {edit === false ? (
                <>
                  <HcTextFieldLabel
                    titleName="직위"
                    style={{ width: 320, marginBottom: 20 }}
                  >
                    {data.position}
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName="휴대 전화"
                    style={{ width: 320 }}
                  >
                    010-1234-6789
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  <SelectBox
                    titleName="직위"
                    style={{ width: 320, marginBottom: 20 }}
                    items={position}
                    state={positionState}
                    setState={setPositionState}
                  />
                  <HcTextField
                    titleName="휴대 전화"
                    value={"010-1234-5678"}
                    style={{ width: 320 }}
                  />
                </>
              )}
            </div>
            <div style={{ display: "block", marginTop: 70 }}>
              <HcTextFieldLabel
                titleName="입사일"
                style={{ width: 320, marginBottom: 20 }}
              >
                {data.entryData}
              </HcTextFieldLabel>
              {edit === false ? (
                <>
                  <HcTextFieldLabel
                    titleName="담당 업무"
                    style={{ width: 320, marginBottom: 20 }}
                  >
                    UX설계
                  </HcTextFieldLabel>
                  <HcTextFieldLabel titleName="이메일" style={{ width: 320 }}>
                    Minsoo_Choi@tmax.co.kr
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  <SelectBox
                    titleName="담당업무"
                    name="duty"
                    required
                    items={work}
                    state={workState}
                    setState={setWorkState}
                    style={{ width: 320, marginBottom: 20 }}
                  />
                  <HcTextField
                    titleName="이메일"
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
                  ? "최민수님은 현재 일반 휴직중입니다."
                  : "최민수님은 퇴직 예정자입니다."}
              </Info>
              {resign}
              {radio}
              <Info style={{ marginRight: 30 }}>
                휴직 기간 : 2022.01.01 ~ 2023.01.01
              </Info>
              <Info style={{ marginRight: 30 }}>
                비고 : 개인 사유로 인한 휴직입니다.
              </Info>
            </div>
          )}
        </BasicContainer>
        <HcTabsAdv
          items={[
            { to: "1", name: "인사정보" },
            { to: "2", name: "계약정보" },
            { to: "3", name: "급여정보" },
            { to: "4", name: "휴가정보" },
            { to: "5", name: "발령정보" },
            { to: "6", name: "성과 및 평가" },
            { to: "7", name: "교육" },
            { to: "8", name: "활동" },
            { to: "9", name: "증명서 발급" },
            { to: "10", name: "복리후생" },
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
                  title="기본 정보"
                  defaultHeight={68}
                  maxHeight={448}
                  width={1320}
                  state={basic}
                  setState={setBasic}
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
                            titleName="생년월일"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            1980.01.01
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="집 주소"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            서울특별시 강남구 삼성동
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="결혼 여부"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            {marriageState}
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="중소기업 소득세 감면 여부"
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
                            titleName="성별"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            {genderState}
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="상세 주소"
                            style={{ width: 360, marginBottom: 20 }}
                          >
                            101동501호
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="장애 여부"
                            style={{ width: 360 }}
                          >
                            {disabilityState}
                          </HcTextFieldLabel>
                        </div>
                        <div style={{ display: "block", width: 360 }}>
                          <HcTextFieldLabel
                            titleName="국적"
                            style={{ width: 360, marginBottom: 105 }}
                          >
                            {nationalityState}
                          </HcTextFieldLabel>
                          <HcTextFieldLabel
                            titleName="군필 여부"
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
                          <Title>생년월일</Title>
                          <HcDatePicker
                            style={{ width: 360, marginBottom: 20 }}
                          />
                          <HcTextField
                            titleName="집 주소"
                            style={{ width: 360, marginBottom: 20 }}
                            value="서울특별시 강남구 삼성동"
                          />
                          <SelectBox
                            titleName="결혼 여부"
                            style={{ width: 360, marginBottom: 20 }}
                            items={marriage}
                            state={marriageState}
                            setState={setMarriageState}
                          />
                          <SelectBox
                            titleName="중소기업 소득세 감면 여부"
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
                            titleName="성별"
                            style={{ width: 360, marginBottom: 20 }}
                            items={gender}
                            state={genderState}
                            setState={setGenderState}
                          />
                          <HcTextField
                            titleName="상세 주소"
                            style={{ width: 360, marginBottom: 20 }}
                            value="101동501호"
                          />
                          <SelectBox
                            titleName="장애 여부"
                            style={{ width: 360, marginBottom: 20 }}
                            items={disability}
                            state={disabilityState}
                            setState={setDisabilityState}
                          />
                        </div>
                        <div style={{ display: "block" }}>
                          <SelectBox
                            titleName="국적"
                            style={{ width: 360, marginBottom: 20 }}
                            items={nationality}
                            state={nationalityState}
                            setState={setNationalityState}
                          />
                          <SelectBox
                            titleName="군필 여부"
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
                  title="학력"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={study}
                  setState={setStudy}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 125 }}>학교 구분</th>
                          <th style={{ width: 130 }}>학교명</th>
                          <th style={{ width: 120 }}>전공</th>
                          <th style={{ width: 120 }}>학위</th>
                          <th style={{ width: 130 }}>입학년월</th>
                          <th style={{ width: 130 }}>졸업년월</th>
                          <th style={{ width: 120 }}>소재지</th>
                          <th style={{ width: 120 }}>주/야</th>
                          <th style={{ width: 120 }}>졸업 구분</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="경력"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={career}
                  setState={setCareer}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 165 }}>회사명</th>
                          <th style={{ width: 170 }}>직무</th>
                          <th style={{ width: 160 }}>직책</th>
                          <th style={{ width: 150 }}>계약유형</th>
                          <th style={{ width: 160 }}>입사년월</th>
                          <th style={{ width: 160 }}>퇴직년월</th>
                          <th style={{ width: 150 }}>퇴사 사유</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="교육"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={edu}
                  setState={setEdu}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 220 }}>교육 구분</th>
                          <th style={{ width: 220 }}>교육명</th>
                          <th style={{ width: 210 }}>교육기관</th>
                          <th style={{ width: 255 }}>교육기간</th>
                          <th style={{ width: 210 }}>비고</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="어학"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={language}
                  setState={setLanguage}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 185 }}>언어</th>
                          <th style={{ width: 185 }}>시험명</th>
                          <th style={{ width: 185 }}>점수(등급)</th>
                          <th style={{ width: 185 }}>인증기관</th>
                          <th style={{ width: 185 }}>취득일자</th>
                          <th style={{ width: 190 }}>비고</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="자격증"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={certificate}
                  setState={setCertificate}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>자격증명</th>
                          <th style={{ width: 150 }}>자격증 번호</th>
                          <th style={{ width: 150 }}>등급</th>
                          <th style={{ width: 150 }}>점수</th>
                          <th style={{ width: 215 }}>인증기관</th>
                          <th style={{ width: 150 }}>취득일자</th>
                          <th style={{ width: 150 }}>만료일자</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="가족"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={family}
                  setState={setFamily}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 160 }}>이름</th>
                          <th style={{ width: 160 }}>주민등록번호</th>
                          <th style={{ width: 160 }}>관계</th>
                          <th style={{ width: 160 }}>부양여부</th>
                          <th style={{ width: 160 }}>장애여부</th>
                          <th style={{ width: 160 }}>기본공제</th>
                          <th style={{ width: 155 }}>자녀공제</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="활동"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={activity}
                  setState={setActivity}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 220 }}>활동 구분</th>
                          <th style={{ width: 220 }}>활동명</th>
                          <th style={{ width: 210 }}>기관</th>
                          <th style={{ width: 255 }}>기간</th>
                          <th style={{ width: 210 }}>비고</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>
                <Container
                  title="증빙 서류"
                  defaultHeight={68}
                  maxHeight={497}
                  width={1320}
                  state={document}
                  setState={setDocument}
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
                  title="계약 정보"
                  defaultHeight={68}
                  maxHeight={173}
                  width={1320}
                  state={contract}
                  setState={setContract}
                  style={{ marginTop: 20, overflow: "visible", zIndex: 5 }}
                >
                  <div style={{ display: "flex" }}>
                    <SelectBox
                      titleName="계약 유형"
                      style={{ width: 360, marginRight: 80 }}
                      state={typeState}
                      setState={setTypeState}
                      items={type}
                    />
                    <div style={{ width: 400, marginRight: 30 }}>
                      <Title>근로 계약 기간</Title>
                      <HcDateRangePicker />
                    </div>
                    <HcTextField
                      value="정규직입니다."
                      titleName="비고"
                      style={{ width: 360 }}
                    />
                  </div>
                </Container>
                <Container
                  title="계약서"
                  defaultHeight={68}
                  maxHeight={316}
                  width={1320}
                  state={contractFile}
                  setState={setContractFile}
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
                <SubHeading titleName="2022년 1월" />
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
                      급여 지급일
                    </Info>
                    <Info>2022년 1월 25일</Info>
                  </div>
                  <div style={{ display: "block", marginRight: 32 }}>
                    <Info
                      style={{
                        color: "#838181",
                        fontWeight: 500,
                        marginBottom: 2,
                      }}
                    >
                      급여 계좌
                    </Info>
                    <Info>신한은행 887-112-123456</Info>
                  </div>
                </div>
                <HcButton
                  style={{ position: "absolute", top: 30, left: 1173 }}
                  styles={"line"}
                  size={"small"}
                >
                  급여 명세서 다운로드
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
                  급여
                </HcTextFieldLabel>
                <Info style={{ marginBottom: 6, marginLeft: 10 }}>
                  실 지급액
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
                  2,474,700원
                </div>
                <Bar deduction={90} pay={10} /> {/*공제 액계 / 지급 액계 */}
                <div style={{ display: "flex", marginTop: 13 }}>
                  <Info
                    style={{
                      color: "#5799FB",
                      fontSize: "13px",
                      marginLeft: 10,
                    }}
                  >
                    지급 액계 79%
                  </Info>
                  <Info
                    style={{
                      color: "#FFA61F",
                      fontSize: "13px",
                      marginLeft: 1058,
                    }}
                  >
                    공제 액계 21%
                  </Info>
                </div>
                <HcTextFieldLabel
                  titleName=""
                  style={{ width: 1240, marginTop: 30 }}
                >
                  지급 내역
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
                    <Info style={{ marginBottom: 16 }}>기본급</Info>
                    <Info style={{ marginBottom: 16 }}>기본급</Info>
                    <Info style={{ marginBottom: 16 }}>식비</Info>
                    <Info
                      style={{
                        color: "#5799fb",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      지급액계
                    </Info>
                  </div>
                  <div style={{ float: "left", width: 105 }}>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000원
                    </Info>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000원
                    </Info>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000원
                    </Info>
                    <Info
                      style={{
                        color: "#5799fb",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      2,250,000원
                    </Info>
                  </div>
                </div>
                <HcTextFieldLabel
                  titleName=""
                  style={{ width: 1240, marginTop: 30 }}
                >
                  공제 내역
                </HcTextFieldLabel>
                <div
                  style={{ marginLeft: 10, display: "inherit", marginTop: 20 }}
                >
                  <div style={{ float: "left", width: 91, marginRight: 72 }}>
                    <Info style={{ marginBottom: 16 }}>국민연금</Info>
                    <Info style={{ marginBottom: 16 }}>건강보험료</Info>
                    <Info style={{ marginBottom: 16 }}>장기요양보험료</Info>
                    <Info style={{ marginBottom: 16 }}>고용보험료</Info>
                    <Info style={{ marginBottom: 16 }}>소득세</Info>
                    <Info
                      style={{
                        color: "#FFA61F",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      공제 액계
                    </Info>
                  </div>
                  <div style={{ float: "left", width: 105 }}>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000원
                    </Info>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000원
                    </Info>
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000원
                    </Info>{" "}
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000원
                    </Info>{" "}
                    <Info style={{ color: "#000000", marginBottom: 16 }}>
                      2,000,000원
                    </Info>
                    <Info
                      style={{
                        color: "#FFA61F",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      2,250,000원
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
                      titleName={`${String(date.getFullYear())}년 ${String(
                        date.getMonth()
                      )}월`}
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
                        titleName="총연차"
                        style={{ width: 360, marginBottom: 20 }}
                      >
                        13일(3년 근속)
                      </HcTextFieldLabel>
                      <HcTextFieldLabel
                        titleName="총월차"
                        style={{ width: 360 }}
                      >
                        5일
                      </HcTextFieldLabel>
                    </div>
                    <div style={{ display: "block", marginLeft: 80 }}>
                      <HcTextFieldLabel
                        titleName="사용연차"
                        style={{ width: 360, marginBottom: 20 }}
                      >
                        10일
                      </HcTextFieldLabel>
                      <HcTextFieldLabel
                        titleName="사용월차"
                        style={{ width: 360 }}
                      >
                        3일
                      </HcTextFieldLabel>
                    </div>
                    <div style={{ display: "block", marginLeft: 80 }}>
                      <HcTextFieldLabel
                        titleName="총연차"
                        style={{ width: 360, marginBottom: 20 }}
                      >
                        3일
                      </HcTextFieldLabel>
                      <HcTextFieldLabel
                        titleName="총월차"
                        style={{ width: 360 }}
                      >
                        2일
                      </HcTextFieldLabel>
                    </div>
                  </div>
                  <SubHeading titleName="휴가 사용 내역" />
                  <HcTableContainer style={{ marginTop: "28px" }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: "310px" }}>휴가 종류</th>
                          <th style={{ width: "310px" }}>신청 일시</th>
                          <th style={{ width: "310px" }}>휴가 종류</th>
                          <th style={{ width: "310px" }}>결재 상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>연차</td>
                          <td>2021.01.01</td>
                          <td>2021.01.01 ~ 2021.01.02</td>
                          <td>승인</td>
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
                  titleName="발령내역"
                  style={{ marginLeft: "24px", marginTop: "40px" }}
                />
                <HcButton
                  size="medium"
                  styles="secondary"
                  style={{ marginLeft: "40px", marginTop: "18px" }}
                >
                  +생성
                </HcButton>
                <HcTableContainer
                  style={{ marginTop: "12px", marginLeft: "40px" }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ width: 46 }}></th>
                        <th style={{ width: 120 }}>발령 번호</th>
                        <th style={{ width: 254 }}>발령 내용</th>
                        <th style={{ width: 140 }}>발령 구분</th>
                        <th style={{ width: 140 }}>부서명</th>
                        <th style={{ width: 140 }}>직책</th>
                        <th style={{ width: 140 }}>발령 전 정보</th>
                        <th style={{ width: 140 }}>발령 후 정보</th>
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
                  title="평가 내역"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={certificate}
                  setState={setCertificate}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>자격증명</th>
                          <th style={{ width: 150 }}>자격증 번호</th>
                          <th style={{ width: 150 }}>등급</th>
                          <th style={{ width: 150 }}>점수</th>
                          <th style={{ width: 215 }}>인증기관</th>
                          <th style={{ width: 150 }}>취득일자</th>
                          <th style={{ width: 150 }}>만료일자</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>{" "}
                <Container
                  title="보상 내역"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={certificate}
                  setState={setCertificate}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>자격증명</th>
                          <th style={{ width: 150 }}>자격증 번호</th>
                          <th style={{ width: 150 }}>등급</th>
                          <th style={{ width: 150 }}>점수</th>
                          <th style={{ width: 215 }}>인증기관</th>
                          <th style={{ width: 150 }}>취득일자</th>
                          <th style={{ width: 150 }}>만료일자</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>{" "}
                <Container
                  title="징계 내역"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={certificate}
                  setState={setCertificate}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>자격증명</th>
                          <th style={{ width: 150 }}>자격증 번호</th>
                          <th style={{ width: 150 }}>등급</th>
                          <th style={{ width: 150 }}>점수</th>
                          <th style={{ width: 215 }}>인증기관</th>
                          <th style={{ width: 150 }}>취득일자</th>
                          <th style={{ width: 150 }}>만료일자</th>
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
                  titleName={`${String(date.getFullYear())}년 ${String(
                    date.getMonth() + 1
                  )}월`}
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
                    총 교육
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
                    15개
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
                      <Title style={{ color: "#257CFF" }}>완료 66%</Title>
                      <Title style={{ color: "#5D5D62" }}>10개</Title>
                    </div>
                    <div style={{ display: "block", width: "21%" }}>
                      <Title style={{ color: "#13ABB4" }}>진행중 21%</Title>
                      <Title style={{ color: "#5D5D62" }}>3개</Title>
                    </div>
                    <div style={{ display: "block" }}>
                      <Title style={{ color: "#FFC123" }}>예정 13%</Title>
                      <Title style={{ color: "#5D5D62" }}>2개</Title>
                    </div>
                  </div>
                  <HcTextFieldLabel
                    titleName=""
                    style={{
                      width: "1240px",
                      marginBottom: "20px",
                    }}
                  >
                    진행중인 교육
                  </HcTextFieldLabel>
                  <div style={{ display: "block", marginLeft: "10px" }}>
                    <div style={{ display: "flex" }}>
                      <Title style={{ marginRight: "50px" }}>
                        UX디자인 프로세스
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
                      <Title style={{ marginRight: "102px" }}>AI UX기획</Title>
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
                      <Title style={{ marginRight: "95px" }}>데이터 분석</Title>
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
                  <SubHeading titleName="교육" style={{ marginTop: "61px" }} />
                  <HcButton
                    size="medium"
                    styles="secondary"
                    style={{ marginLeft: "16px", marginTop: "18px" }}
                  >
                    +생성
                  </HcButton>
                  <HcTableContainer
                    style={{ marginTop: "12px", marginLeft: "16px" }}
                  >
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 220 }}>교육 구분</th>
                          <th style={{ width: 220 }}>교육명</th>
                          <th style={{ width: 210 }}>교육기관</th>
                          <th style={{ width: 255 }}>교육기간</th>
                          <th style={{ width: 210 }}>비고</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>사내교육</td>
                          <td>UX 디자인 프로세스</td>
                          <td>네이버</td>
                          <td>2002.01.01 ~ 2008.01.01</td>
                          <td>역량 개발</td>
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
                  titleName="사내 활동 내역"
                  style={{ marginLeft: "24px", marginTop: "40px" }}
                />
                <HcButton
                  size="medium"
                  styles="secondary"
                  style={{ marginLeft: "40px", marginTop: "18px" }}
                >
                  +생성
                </HcButton>
                <HcTableContainer
                  style={{ marginTop: "12px", marginLeft: "40px" }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ width: 46 }}></th>
                        <th style={{ width: 220 }}>활동 구분</th>
                        <th style={{ width: 176 }}>활동 명</th>
                        <th style={{ width: 249 }}>기관</th>
                        <th style={{ width: 203 }}>기간</th>
                        <th style={{ width: 226 }}>비고</th>
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
                  titleName="증명서 발급 내역"
                  style={{ marginLeft: "24px", marginTop: "40px" }}
                />
                <HcButton
                  size="medium"
                  styles="secondary"
                  style={{ marginLeft: "40px", marginTop: "18px" }}
                >
                  +생성
                </HcButton>
                <HcTableContainer
                  style={{ marginTop: "12px", marginLeft: "40px" }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ width: 205 }}>발급 번호</th>
                        <th style={{ width: 205 }}>증명서 종류</th>
                        <th style={{ width: 205 }}>발급매수</th>
                        <th style={{ width: 215 }}>신청사유</th>
                        <th style={{ width: 205 }}>발급 상태</th>
                        <th style={{ width: 205 }}>발급 신청일</th>
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
                  title="복리후생 내역"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={welfare}
                  setState={setWelfare}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>자격증명</th>
                          <th style={{ width: 150 }}>자격증 번호</th>
                          <th style={{ width: 150 }}>등급</th>
                          <th style={{ width: 150 }}>점수</th>
                          <th style={{ width: 215 }}>인증기관</th>
                          <th style={{ width: 150 }}>취득일자</th>
                          <th style={{ width: 150 }}>만료일자</th>
                          <th style={{ width: 80 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </Container>{" "}
                <Container
                  title="건강검진 내역"
                  defaultHeight={68}
                  maxHeight={404}
                  width={1320}
                  state={mediCheck}
                  setState={setMediCheck}
                  style={{ marginTop: 24 }}
                >
                  <HcButton size="medium" styles="secondary">
                    +생성
                  </HcButton>
                  <HcTableContainer style={{ marginTop: 12 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}></th>
                          <th style={{ width: 150 }}>자격증명</th>
                          <th style={{ width: 150 }}>자격증 번호</th>
                          <th style={{ width: 150 }}>등급</th>
                          <th style={{ width: 150 }}>점수</th>
                          <th style={{ width: 215 }}>인증기관</th>
                          <th style={{ width: 150 }}>취득일자</th>
                          <th style={{ width: 150 }}>만료일자</th>
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
              수정
            </HcButton>{" "}
            <HcButton
              onClick={() => {}}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              삭제
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
              취소
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
              저장
            </HcButton>
            <HcButton
              onClick={() => {
                setEdit(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              취소
            </HcButton>
          </div>
        )}
      </HcBottomBar>
      {/*
      <HcContentPopup
        header={"휴직 / 퇴직"}
        primaryBtn="적용"
        secondBtn="취소"
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
          <Title>휴/퇴직 구분</Title>
          <div style={{ marginBottom: 20 }}>
            <HcRadioGroup
              defaultValue={radio}
              onChange={(value) => setRadio(value)}
            >
              <HcRadioButton value="leave">
                <span style={{ marginRight: 60, marginLeft: 8 }}>휴직</span>
              </HcRadioButton>
              <HcRadioButton value="quite">
                <span style={{ marginLeft: 8 }}>퇴직</span>
              </HcRadioButton>
            </HcRadioGroup>
            {radio}
          </div>
          {radio === "leave" ? (
            <>
              <div style={{ display: "block" }}>
                <HcSelect
                  titleName="휴직 유형"
                  style={{ width: 360, marginBottom: 20 }}
                >
                  <option>일반 휴직</option>
                  <option>업무상 부상/질병 휴직</option>
                  <option>육아 휴직</option>
                  <option>가족돌봄휴직</option>
                </HcSelect>
                <div style={{ display: "flex", marginBottom: 20 }}>
                  <HcDatePicker
                    style={{ width: 360, marginRight: 40 }}
                    titleName="휴직 시작 일자"
                    required
                    startDate={date}
                    setStartDate={setDate}
                  />
                  <HcDatePicker
                    style={{ width: 360 }}
                    titleName="휴직 종료 일자"
                    required
                    startDate={date}
                    setStartDate={setDate}
                  />
                </div>
                <HcSelect
                  titleName="급여 지급"
                  style={{ width: 360, marginBottom: 20 }}
                >
                  <option>지급 안함</option>
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
                titleName="비고"
              />
            </>
          ) : (
            <>
              {" "}
              <div style={{ display: "flex", marginBottom: 20 }}>
                <HcDatePicker
                  style={{ width: 360, marginRight: 40 }}
                  titleName="퇴직"
                  required
                  startDate={date}
                  setStartDate={setDate}
                />
                <HcDatePicker
                  style={{ width: 360 }}
                  titleName="Super Company 사용 종료 일자"
                  required
                  startDate={date}
                  setStartDate={setDate}
                />
              </div>{" "}
              <HcTextArea
                row={9}
                style={{ width: 760, height: 200 }}
                titleName="비고"
              />
            </>
          )}
        </div>
      </HcContentPopup>

      <HcContentPopup
        header={resign === "leave" ? "휴직 취소" : "퇴직 취소"}
        primaryBtn={resign === "leave" ? "휴직 취소" : "퇴직 취소"}
        secondBtn="취소"
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
            ? "휴직을 취소하시겠습니까?"
            : "퇴직을 취소하시겠습니까?"}
        </Title>
      </HcContentPopup>*/}
    </>
  );
};
export default HRInfoDetail;
