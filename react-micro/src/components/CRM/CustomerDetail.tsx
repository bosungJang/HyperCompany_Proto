import React, { useState } from "react";
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  SelectBox,
  HcSearchTextField,
  SearchSelect,
} from "common/HcTextField";
import styled from "styled-components";
import img from "common/img/bgimg.png";
import HcButton from "common/HcButton";
import { useHistory } from "react-router-dom";
import "common/Table.css";
import HcBottomBar from "common/HcBottomBar";
import { HcTabsAdv } from "common/HcTabs";
import { HcTable, HcTableContainer, NullTbody } from "common/HcTableComponent";
import { useLocation } from "react-router";
import { SideBar } from "common/HcPopup";
import HcCheckBox from "common/HcCheckBox";
import { HcDatePicker } from "common/HcDatePicker";
const BasicContainer = styled.div`
  width: 1250px;
  height: 300px;
  position: relative;
  overflow: visible;
  margin: 40px 40px 474px 40px;
`;
const PfUploadButton = styled.div`
  top: 135px;
  left: 135px;
  position: absolute;
`;
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
const CustomerDetail = () => {
  const location = useLocation();
  const state: string = location.state;
  /*side bar */
  const [isOpen, setIsOpen] = useState(false);
  /*side bar*/
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
      //   data.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  const [data, setData] = useState([
    // 추가정보-학력데이터
    {
      학교구분: "대학교",
      학교명: "서울대학교",
      전공: "경영학",
      학위: "학사",
      입학년월: "2008/01/01",
      졸업년월: "2008/01/01",
      소재지: "서울",
      주야: "주간",
      졸업구분: "졸업",
    },
  ]);
  const [PfImg, setPfImg] = useState(img); //프로필 사진

  const PfInput = React.useRef(null);
  const HRList = data.map(() => (
    <HRCard checked={false}>
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
          border: "3px solid #C4C4C4",
        }}
      />
      꽃분이 (AB2-1팀 / 연구원)
      <div style={{ marginLeft: 227, paddingTop: 3 }}>
        {" "}
        <HcCheckBox
          checked={false}
          onChange={(e) => {
            // checkHandler(e.target.checked, id);
          }}
        />
      </div>
    </HRCard>
  ));
  const [purchase, setPurchase] = useState(true);
  const [customerSupport, setCustomerSupport] = useState(true);
  const [addContactPoint, setAddContactPoint] = useState(true);
  const [addContract, setAddContract] = useState(true);
  const [fileInfo, setFileInfo] = useState(true);
  const [contractInfo, setContractInfo] = useState(true);
  const [manager, setManager] = useState("");
  const [priority, setPriority] = useState("");
  const [type, setType] = useState("");
  const [step, setStep] = useState("");
  const onCreate = () => {
    const prev = data;
    prev.push({
      학교구분: " ",
      학교명: "서울대학교",
      전공: "경영학",
      학위: "학사",
      입학년월: "2008/01/01",
      졸업년월: "2008/01/01",
      소재지: "서울",
      주야: "주간",
      졸업구분: "졸업",
    });
    setData(prev);
    setRows(
      prev.map((row) => (
        <Row
          학교구분={row.학교구분}
          학교명={row.학교명}
          전공={row.전공}
          학위={row.학위}
          입학년월={row.입학년월}
          졸업년월={row.졸업년월}
          주야={row.주야}
          소재지={row.소재지}
          졸업구분={row.졸업구분}
        />
      ))
    );
    console.log();
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

  function Row({
    학교구분,
    학교명,
    전공,
    학위,
    입학년월,
    졸업년월,
    소재지,
    주야,
    졸업구분,
  }: any) {
    return (
      <tr>
        <td></td>
        <td>{학교구분}</td>
        <td>{학교명}</td>
        <td>{전공}</td>
        <td>{학위}</td>
        <td>{입학년월}</td>
        <td>{졸업년월}</td>
        <td>{소재지}</td>
        <td>{주야}</td>
        <td>{졸업구분}</td>
        <td></td>
      </tr>
    );
  }

  const [rows, setRows] = useState(
    data.map((row) => (
      <Row
        학교구분={row.학교구분}
        학교명={row.학교명}
        전공={row.전공}
        학위={row.학위}
        입학년월={row.입학년월}
        졸업년월={row.졸업년월}
        주야={row.주야}
        소재지={row.소재지}
      />
    ))
  );
  const history = useHistory();

  const Grade = styled.div<{ grade: string }>`
    width: fit-content;
    height: 25px;
    padding: 4px;
    margin-top: -3px;
    font-size: 13px;
    border-radius: 2px;
    font-weight: 700;
    ${(props) =>
      props.grade === "VIP"
        ? "color: #FF7D7D; background: #FFE9E9;"
        : props.grade === "Gold"
        ? "background: #FFF1CE; color: #FFBB0B;"
        : props.grade === "Silver"
        ? "color: #838181; background: #D9D9D9;"
        : props.grade === "Bronze"
        ? "background: #FFF3E8; color: #FDA95C;"
        : "background: #DFECFF; color: #5799FB; "}
  `;

  const gradeItem = [
    <Grade grade="VIP">VIP</Grade>,
    <Grade grade="Gold">Gold</Grade>,
    <Grade grade="Silver">Silver</Grade>,
    <Grade grade="Bronze">Bronze</Grade>,
    <Grade grade="Family">Family</Grade>,
  ];
  const [gradeState, setGradeState] = useState("");
  return (
    <>
      {" "}
      <ComponentWrapper
        style={{
          display: "block",
          position: "relative",
          height: "fit-content",
        }}
      >
        <HcTitleTextField
          isBackIcon={true}
          titleName={
            state === "personal"
              ? "개인 고객 상세"
              : state === "enterprise"
              ? "기업 고객 상세"
              : "기업 컨택포인트 상세"
          }
        />

        <div style={{ marginTop: "37px" }}>
          <BasicContainer>
            <img
              src={PfImg}
              style={{
                position: "absolute",
                width: 170,
                height: 170,
                top: 0,
                left: 0,
                borderRadius: 100,
                border: "5px solid #ffffff",
              }}
            />
            <PfUploadButton>
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
            <div
              className="textfields"
              style={{
                marginTop: 4,
                marginLeft: 200,
                display: "flex",
              }}
            >
              {
                {
                  personal: (
                    <>
                      <div
                        style={{
                          display: "block",
                          marginRight: 40,
                          width: 320,
                        }}
                      >
                        <HcTextField
                          name="name"
                          onKeyDown={(e) => {}}
                          style={{
                            width: 320,
                            fontSize: 20,
                            marginBottom: 20,
                            height: 40,
                          }}
                          placeholder="이름 입력"
                          required
                        />{" "}
                        <HcTextField
                          titleName="휴대전화 번호"
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <SelectBox
                          titleName="고객 등급"
                          name="responsibility"
                          style={{ width: 320, marginBottom: 20 }}
                          items={gradeItem}
                          state={gradeState}
                          setState={setGradeState}
                          required
                        />{" "}
                        <HcSearchTextField
                          titleName="주소"
                          name="telePhone"
                          onKeyDown={(e) => {}}
                          style={{ width: 320 }}
                        />
                      </div>
                      <div
                        style={{
                          display: "block",
                          marginRight: 40,
                          width: 320,
                          marginTop: 60,
                        }}
                      >
                        <HcTextField
                          titleName="이메일"
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <HcTextField
                          titleName="추가 전화 번호"
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <HcTextField
                          titleName="상세 주소"
                          onKeyDown={(e) => {}}
                          style={{ width: 320 }}
                        />
                      </div>
                      <div style={{ display: "block", marginTop: 60 }}>
                        <HcSearchTextField
                          style={{ width: 320, marginBottom: 20 }}
                          titleName="고객 담당자"
                          placeholder="고객 담당자 조회"
                          onClick={() => {
                            setIsOpen(true);
                            console.log(isOpen);
                          }}
                        />

                        <HcTextField
                          titleName="추가 이메일"
                          name="email"
                          onKeyDown={(e) => {}}
                          style={{ width: 320 }}
                        />
                      </div>
                    </>
                  ),
                  enterprise: (
                    <>
                      <div
                        style={{
                          display: "block",
                          marginRight: 40,
                          width: 320,
                        }}
                      >
                        <HcTextField
                          name="name"
                          onKeyDown={(e) => {}}
                          style={{
                            width: 320,
                            fontSize: 20,
                            marginBottom: 20,
                            height: 40,
                          }}
                          placeholder="이름 입력"
                          required
                        />{" "}
                        <HcTextField
                          titleName="기업전화 번호"
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <SelectBox
                          titleName="고객 등급"
                          name="responsibility"
                          style={{ width: 320, marginBottom: 20 }}
                          items={gradeItem}
                          state={gradeState}
                          setState={setGradeState}
                        />
                        <SelectBox
                          titleName="업종"
                          name="responsibility"
                          style={{ width: 320, marginBottom: 20 }}
                          items={gradeItem}
                          state={gradeState}
                          setState={setGradeState}
                        />
                        <HcTextField
                          titleName="직원 수"
                          name="telePhone"
                          onKeyDown={(e) => {}}
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <HcTextField
                          titleName="기업 주소"
                          name="telePhone"
                          onKeyDown={(e) => {}}
                          style={{ width: 320 }}
                        />
                      </div>
                      <div
                        style={{
                          display: "block",
                          marginRight: 40,
                          width: 320,
                          marginTop: 60,
                        }}
                      >
                        <HcTextField
                          titleName="홈페이지"
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <SelectBox
                          titleName="신용평가 등급"
                          name="responsibility"
                          style={{ width: 320, marginBottom: 20 }}
                          items={gradeItem}
                          state={gradeState}
                          setState={setGradeState}
                        />
                        <SelectBox
                          titleName="업태"
                          name="responsibility"
                          style={{ width: 320, marginBottom: 20 }}
                          items={gradeItem}
                          state={gradeState}
                          setState={setGradeState}
                        />
                        <div
                          style={{
                            width: 320,
                            marginBottom: 20,
                            position: "relative",
                          }}
                        >
                          <HcTextField
                            titleName="기업 규모"
                            onKeyDown={(e) => {}}
                            style={{ width: 320, paddingRight: 28 }}
                          />
                          <label
                            style={{
                              color: "#A7A7A7",
                              position: "absolute",
                              top: 37,
                              right: 10,
                            }}
                          >
                            원
                          </label>
                        </div>
                        <HcTextField
                          titleName="상세 주소"
                          onKeyDown={(e) => {}}
                          style={{ width: 320 }}
                        />
                      </div>

                      <div style={{ display: "block", marginTop: 60 }}>
                        <HcSearchTextField
                          style={{ width: 320, marginBottom: 105 }}
                          titleName="고객 담당자"
                          placeholder="고객 담당자 조회"
                        />

                        <HcTextField
                          titleName="사업자등록번호"
                          name="email"
                          onKeyDown={(e) => {}}
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <HcTextField
                          titleName="설명"
                          name="comment"
                          onKeyDown={(e) => {}}
                          style={{ width: 320 }}
                        />
                      </div>
                    </>
                  ),
                  contact: (
                    <>
                      <div
                        style={{
                          display: "block",
                          marginRight: 40,
                          width: 320,
                        }}
                      >
                        <HcTextField
                          name="name"
                          onKeyDown={(e) => {}}
                          style={{
                            width: 320,
                            fontSize: 20,
                            marginBottom: 20,
                            height: 40,
                          }}
                          placeholder="이름 입력"
                          required
                        />{" "}
                        <HcTextField
                          titleName="휴대전화 번호"
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <SelectBox
                          titleName="직책"
                          name="responsibility"
                          style={{ width: 320, marginBottom: 20 }}
                          items={gradeItem}
                          state={gradeState}
                          setState={setGradeState}
                        />{" "}
                        <HcTextField
                          titleName="사내전화 번호"
                          onKeyDown={(e) => {}}
                          style={{ width: 320 }}
                        />
                      </div>
                      <div
                        style={{
                          display: "block",
                          marginRight: 40,
                          width: 320,
                          marginTop: 60,
                        }}
                      >
                        <HcTextField
                          titleName="이메일"
                          style={{ width: 320, marginBottom: 20 }}
                        />
                        <HcTextField
                          titleName="직위"
                          style={{ width: 320, marginBottom: 20 }}
                        />
                      </div>
                      <div style={{ display: "block", marginTop: 60 }}>
                        <HcSearchTextField
                          style={{ width: 320, marginBottom: 20 }}
                          titleName="고객 담당자"
                          placeholder="고객 담당자 조회"
                        />

                        <HcTextField
                          titleName="소속부서"
                          name="email"
                          onKeyDown={(e) => {}}
                          style={{ width: 320 }}
                        />
                      </div>
                    </>
                  ),
                }[state]
              }
            </div>
          </BasicContainer>
        </div>
      </ComponentWrapper>{" "}
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 55 }}>
        <div>
          <HcButton
            onClick={() => {
              history.push({
                pathname: "/hr/pas/hrInfoCreated",
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
        header={"고객 담당자 조회"}
        open={isOpen}
        close={() => {
          setIsOpen(false);
        }}
        addFunc={onCreate}
        style={{ display: "block" }}
      >
        <div style={{ float: "left", height: 36 }}>
          {/* <SelectBox
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
          /> */}
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
        <HRContainer style={{ height: 572 }}>
          {/* {checkedItem} */}
          {HRList}
        </HRContainer>
      </SideBar>
    </>
  );
};
export default CustomerDetail;
