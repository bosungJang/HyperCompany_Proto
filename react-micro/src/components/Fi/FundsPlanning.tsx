import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  Wrapper,
  Title,
  StyledSelect,
  HcSelect,
  HcTagNoInput,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import HcBottomBar from "common/HcBottomBar";
import HcCalendar from "common/Calendar/HcCalendar";
import { ContentContainer, styles, Popup_Buttons } from "common/HcPopup";
import { VariableMultiLayout } from "common/HcCommonLayout";
import { ReactComponent as ArrrowIcon } from "resources/images/DetailArrow_Icon.svg";
import { ReactComponent as BackIcon } from "resources/images/RevenueDetailArrow_Icon.svg";
interface MatchParams {
  id: string;
}

const DetailWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  height: 78px;
  margin-bottom: 12px;
  padding: 14px 20px 13px 16px;
  &: last-child {
    margin-bottom: 0;
  }
`;

const revenueDetailData = Array(6)
  .fill(undefined)
  .map(() => ({
    id: "1",
  }));

const calData = [
  { day: 3, month: 2, income: 10000, expense: 300000 },
  { day: 5, month: 4, income: 90000000000000000, expense: 20000 },
];

const FundsPlanning = ({ match }: RouteComponentProps<MatchParams>) => {
  const sum = 100000;
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalState, setModalState] = React.useState("new");
  const [tags2, setTags2] = React.useState(["설날 상여 지급"]);

  const CalendarClick = (day: number, month: number) => {
    setModalOpen(true);
    setModalState("detail");
  };

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
          <div
            style={{ display: "block", width: "inherit", marginTop: "20px" }}
          >
            <div>
              <HcTitleTextField
                titleName="자금 계획"
                isBackIcon={false}
                style={{ display: "inline-block" }}
              />
            </div>
            <div style={{ marginTop: "59px", width: "inherit" }}>
              <div
                style={{
                  marginTop: "18px",
                  marginBottom: "20px",
                  width: "inherit",
                }}
              >
                <HcButton
                  onClick={() => {
                    setModalOpen(true);
                    setModalState("new");
                  }}
                  styles="secondary"
                  size="medium"
                >
                  + 생성
                </HcButton>

                <div
                  style={{
                    display: "inline-block",
                    float: "right",
                    marginBottom: "20px",
                  }}
                >
                  <button className="table_manage" style={{ marginTop: 0 }}>
                    <svg
                      width="84"
                      height="21"
                      viewBox="0 0 84 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.716 5.892H29.274V13.886H30.114C31.43 13.886 32.886 13.816 34.58 13.508L34.426 12.276C33.054 12.528 31.836 12.626 30.716 12.654V5.892ZM38.094 4.436V9.462H36.596V4.688H35.238V16.448H36.596V10.652H38.094V17.078H39.466V4.436H38.094ZM44.3089 8.566H50.3009V10.638H44.3089V8.566ZM48.0189 14.348V11.8H51.7289V5.276H50.3009V7.404H44.3089V5.276H42.8809V11.8H46.5769V14.348H41.5929V15.538H53.0449V14.348H48.0189ZM56.4738 5.892H55.0318V13.886H55.8718C57.1878 13.886 58.6438 13.816 60.3378 13.508L60.1838 12.276C58.8118 12.528 57.5938 12.626 56.4738 12.654V5.892ZM63.8518 4.436V9.462H62.3538V4.688H60.9958V16.448H62.3538V10.652H63.8518V17.078H65.2238V4.436H63.8518ZM68.0647 5.766V6.942H72.5727C72.3207 9.854 70.7527 12.08 67.4347 13.676L68.2047 14.824C72.5447 12.724 74.0567 9.532 74.0567 5.766H68.0647ZM76.3387 4.436V17.078H77.7807V4.436H76.3387Z"
                        fill="#5B5B5B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.1207 3C12.1853 3 11.7168 4.131 12.3782 4.79246L13.8363 6.2505L9.94713 10.4932C9.66724 10.7985 9.68787 11.273 9.99321 11.5529C10.2985 11.8328 10.773 11.8121 11.0529 11.5068L14.8979 7.31216L16.2075 8.62175C16.869 9.28321 18 8.81474 18 7.87929V4.05C18 3.4701 17.5299 3 16.95 3H13.1207ZM2.25 5C2.25 4.0335 3.0335 3.25 4 3.25H9C9.41421 3.25 9.75 3.58579 9.75 4C9.75 4.41421 9.41421 4.75 9 4.75H4C3.86193 4.75 3.75 4.86193 3.75 5V17C3.75 17.1381 3.86193 17.25 4 17.25H16C16.1381 17.25 16.25 17.1381 16.25 17V12C16.25 11.5858 16.5858 11.25 17 11.25C17.4142 11.25 17.75 11.5858 17.75 12V17C17.75 17.9665 16.9665 18.75 16 18.75H4C3.0335 18.75 2.25 17.9665 2.25 17V5Z"
                        fill="#5B5B5B"
                      />
                    </svg>
                  </button>
                  <button className="table_manage" style={{ marginTop: 0 }}>
                    <svg
                      width="82"
                      height="21"
                      viewBox="0 0 82 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 2.25C3.0335 2.25 2.25 3.0335 2.25 4V16.0018C2.25 16.9683 3.0335 17.7518 4 17.7518H12.1739C12.5881 17.7518 12.9239 17.416 12.9239 17.0018C12.9239 16.5876 12.5881 16.2518 12.1739 16.2518H4C3.86193 16.2518 3.75 16.1399 3.75 16.0018V4C3.75 3.86193 3.86193 3.75 4 3.75H14C14.1381 3.75 14.25 3.86193 14.25 4V4.80036C14.25 5.21458 14.5858 5.55036 15 5.55036C15.4142 5.55036 15.75 5.21458 15.75 4.80036V4C15.75 3.0335 14.9665 2.25 14 2.25H4ZM6.75 5.79939C6.33579 5.79939 6 6.13518 6 6.54939C6 6.9636 6.33579 7.29939 6.75 7.29939H12.25C12.6642 7.29939 13 6.9636 13 6.54939C13 6.13518 12.6642 5.79939 12.25 5.79939H6.75ZM6 9.34981C6 8.9356 6.33579 8.59981 6.75 8.59981H12.25C12.6642 8.59981 13 8.9356 13 9.34981C13 9.76403 12.6642 10.0998 12.25 10.0998H6.75C6.33579 10.0998 6 9.76403 6 9.34981ZM16.0414 7.7887L15 10.1863V17.9343H18V10.1863L16.9586 7.7887C16.7844 7.38763 16.2156 7.38763 16.0414 7.7887Z"
                        fill="#5B5B5B"
                      />
                      <path
                        d="M37.13 4.422H35.688V10.848H37.13V4.422ZM28.352 7.698C28.352 6.69 29.164 6.032 30.256 6.032C31.362 6.032 32.188 6.69 32.188 7.698C32.188 8.706 31.362 9.364 30.256 9.364C29.164 9.364 28.352 8.706 28.352 7.698ZM33.588 7.698C33.588 6.032 32.174 4.842 30.256 4.842C28.352 4.842 26.952 6.032 26.952 7.698C26.952 9.364 28.352 10.54 30.256 10.54C32.174 10.54 33.588 9.364 33.588 7.698ZM30.284 15.79V14.67H37.13V11.422H28.842V12.556H35.702V13.606H28.87V16.924H37.508V15.79H30.284ZM46.2709 8.93C46.5649 7.544 46.5649 6.452 46.5649 5.724V5.052H40.2229V6.2H45.1509C45.1369 6.858 45.0949 7.684 44.8709 8.776L46.2709 8.93ZM47.3209 9.448C46.0609 9.616 44.7029 9.686 43.3869 9.742V7.614H41.9729V9.784C41.0909 9.798 40.2369 9.798 39.4669 9.798L39.6069 10.946C41.8609 10.946 44.7869 10.89 47.4189 10.456L47.3209 9.448ZM42.5609 14.782H49.5469V11.716H41.0909V12.794H48.1049V13.76H41.1189V16.966H49.9949V15.874H42.5609V14.782ZM49.5469 7.292V4.436H48.0909V11.212H49.5469V8.482H51.2269V7.292H49.5469ZM65.7383 8.132H58.4723V6.032H65.6543V4.87H57.0443V9.294H65.7383V8.132ZM61.3003 15.958C59.4523 15.958 58.4163 15.552 58.4163 14.768C58.4163 13.998 59.4523 13.578 61.3003 13.578C63.1483 13.578 64.1983 13.998 64.1983 14.768C64.1983 15.552 63.1483 15.958 61.3003 15.958ZM61.3003 12.472C58.5983 12.472 56.9463 13.312 56.9463 14.768C56.9463 16.238 58.5983 17.078 61.3003 17.078C64.0163 17.078 65.6543 16.238 65.6543 14.768C65.6543 13.312 64.0163 12.472 61.3003 12.472ZM55.6303 10.344V11.534H67.0543V10.344H55.6303ZM69.7693 14.488H77.1333V17.008H78.5753V13.326H69.7693V14.488ZM74.9353 11.31V10.162H78.7573V9.056H71.3653V7.936H78.5053V4.73H69.9233V5.836H77.0773V6.9H69.9513V10.162H73.4933V11.31H68.4813V12.472H79.9473V11.31H74.9353Z"
                        fill="#5B5B5B"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <HcCalendar
              data={calData}
              sum={sum}
              CalendarClick={CalendarClick}
            />
          </div>

          {/* Modal Popup */}
          <div style={modalOpen ? styles.openModal : styles.modal}>
            {modalOpen
              ? {
                  new: (
                    <ContentContainer
                      style={{
                        width: "460px",
                        height: "598px",
                        padding: "20px 30px",
                      }}
                    >
                      <div style={{ width: "inheirt" }}>
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "22px",
                            color: "#000000",
                            display: "inline-block",
                          }}
                        >
                          {"새"}
                          <StyledSelect
                            style={{
                              width: "80px",
                              fontWeight: 500,
                              height: "36px",
                              minWidth: "unset",
                              marginLeft: "5px",
                              marginRight: "5px",
                            }}
                            value={""}
                            onChange={(e) => {}}
                          >
                            <option value="" hidden>
                              수익
                            </option>
                            <option value={1}>지출</option>
                          </StyledSelect>
                          {"내역"}
                        </div>
                        <button
                          onClick={() => {
                            setModalOpen(false);
                            setModalState("new");
                          }}
                          style={{
                            padding: 0,
                            backgroundColor: "#fff",
                            border: "none",
                            float: "right",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                              fill="#303030"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        style={{
                          width: "100%",
                          height: "fit-content",
                          marginTop: "30px",
                        }}
                      >
                        <VariableMultiLayout>
                          <p style={{ flexGrow: 1, marginBottom: "20px" }}>
                            <HcTextFieldLabel
                              titleName="날짜"
                              name="date"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  alert("SUCCESS");
                                }
                              }}
                              style={{ width: "170px" }}
                            >
                              날짜선택
                            </HcTextFieldLabel>
                          </p>
                          <p
                            style={{
                              flexGrow: 1,
                              textAlign: "end",
                              marginBottom: "20px",
                            }}
                          >
                            <HcSelect
                              titleName=""
                              style={{ width: "170px", minWidth: "unset" }}
                              value={""}
                              onChange={(e) => {}}
                            >
                              <option value="" hidden>
                                반복 안 함
                              </option>
                              <option value={1}>매일</option>
                              <option value={2}>매주 수요일</option>
                              <option value={3}>매월 첫 번째 수요일</option>
                              <option value={4}>매년 3월 15일</option>
                              <option value={5}>주중 매일(월-금)</option>
                              <option value={6}>더보기...</option>
                            </HcSelect>
                          </p>
                        </VariableMultiLayout>
                        <HcTextField
                          titleName="금액"
                          required
                          style={{ width: "400px", marginBottom: "20px" }}
                        />
                        <HcTextField
                          titleName="계정과목"
                          required
                          style={{ width: "400px", marginBottom: "20px" }}
                        />
                        <HcTextField
                          titleName="적요"
                          style={{ width: "400px", marginBottom: "20px" }}
                        />
                        <HcTextField
                          titleName="거래처"
                          required
                          style={{ width: "400px" }}
                        />
                      </div>
                      <Popup_Buttons>
                        <HcButton
                          styles="primary"
                          style={{ marginRight: "6px", marginBottom: 6 }}
                          size="medium"
                          onClick={() => {
                            setModalState("confirm");
                          }}
                        >
                          생성
                        </HcButton>
                        <HcButton
                          styles="line"
                          size="medium"
                          style={{ border: "0.82197px solid #A7A7A7" }}
                          onClick={() => {
                            setModalOpen(false);
                            setModalState("new");
                          }}
                        >
                          취소
                        </HcButton>
                      </Popup_Buttons>
                    </ContentContainer>
                  ),
                  confirm: (
                    <ContentContainer
                      style={{
                        width: "460px",
                        height: "340px",
                        padding: "20px 30px",
                      }}
                    >
                      <div style={{ width: "inheirt" }}>
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "22px",
                            color: "#000000",
                            display: "inline-block",
                          }}
                        >
                          {"달력 저장"}
                        </div>
                        <button
                          onClick={() => {
                            setModalOpen(false);
                            setModalState("new");
                          }}
                          style={{
                            padding: 0,
                            backgroundColor: "#fff",
                            border: "none",
                            float: "right",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                              fill="#303030"
                            />
                          </svg>
                        </button>
                      </div>
                      <div style={{ marginTop: "32px" }}>
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontWeight: 500,
                            fontSize: "16px",
                            color: "#5D5D62",
                            marginBottom: "20px",
                          }}
                        >
                          {"저장할 달력의 이름을 입력하세요"}
                        </div>
                        <textarea
                          style={{
                            width: "414.15px",
                            height: "74px",
                            border: "1px solid #CECECE",
                            borderRadius: "3px",
                            padding: "8px 19.08px",
                            resize: "none",
                          }}
                          placeholder={"달력 이름 입력"}
                        ></textarea>
                      </div>
                      <Popup_Buttons>
                        <HcButton
                          styles="primary"
                          style={{ marginRight: "6px", marginBottom: 6 }}
                          size="medium"
                          onClick={() => {
                            setModalOpen(false);
                            setModalState("new");
                          }}
                        >
                          생성
                        </HcButton>
                        <HcButton
                          styles="line"
                          size="medium"
                          style={{ border: "0.82197px solid #A7A7A7" }}
                          onClick={() => {
                            setModalOpen(false);
                            setModalState("new");
                          }}
                        >
                          취소
                        </HcButton>
                      </Popup_Buttons>
                    </ContentContainer>
                  ),
                  detail: (
                    <ContentContainer
                      style={{
                        width: "460px",
                        height: "689px",
                        padding: "20px 30px",
                      }}
                    >
                      <div style={{ width: "inheirt" }}>
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "22px",
                            color: "#000000",
                            display: "inline-block",
                          }}
                        >
                          {"수익 내역"}
                        </div>
                        <button
                          onClick={() => {
                            setModalOpen(false);
                            setModalState("new");
                          }}
                          style={{
                            padding: 0,
                            backgroundColor: "#fff",
                            border: "none",
                            float: "right",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                              fill="#303030"
                            />
                          </svg>
                        </button>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          marginTop: "30px",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontWeight: 500,
                            fontSize: "16px",
                            display: "inline-block",
                          }}
                        >
                          총 수익
                        </div>
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontWeight: 700,
                            fontSize: "22px",
                            color: "#257CFF",
                            display: "inline-block",
                            float: "right",
                          }}
                        >
                          + 100,000,000
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          background: "#E0E0E0",
                          height: "1px",
                          marginTop: "12px",
                          marginBottom: "11px",
                        }}
                      />
                      <div
                        style={{
                          width: "100%",
                          height: "440px",
                          overflowX: "auto",
                        }}
                      >
                        {revenueDetailData.map((item) => (
                          <DetailWrapper>
                            <div style={{ position: "relative" }}>
                              <div
                                style={{
                                  fontFamily: "Noto Sans KR",
                                  fontWeight: 700,
                                  fontSize: "18px",
                                  color: "#257CFF",
                                }}
                              >
                                + 100,000,000
                              </div>
                              <div
                                style={{
                                  fontFamily: "Noto Sans KR",
                                  fontWeight: 400,
                                  fontSize: "12px",
                                  color: "#5D5D62",
                                  marginTop: "6px",
                                }}
                              >
                                매년 3월 201일 반복, (주)티맥스 소프트
                              </div>
                              <div
                                style={{
                                  display: "inline-block",
                                  position: "absolute",
                                  right: 0,
                                  top: "10px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  setModalState("detail2depth");
                                }}
                              >
                                <ArrrowIcon />
                              </div>
                            </div>
                          </DetailWrapper>
                        ))}
                      </div>
                      <Popup_Buttons style={{ right: "55px", bottom: "38px" }}>
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontWeight: 500,
                            fontSize: "16px",
                            color: "#000000",
                            cursor: "pointer",
                          }}
                        >
                          내역 전체 삭제
                        </div>
                      </Popup_Buttons>
                    </ContentContainer>
                  ),
                  detail2depth: (
                    <ContentContainer
                      style={{
                        width: "460px",
                        height: "598px",
                        padding: "20px 30px",
                      }}
                    >
                      <div style={{ width: "inheirt" }}>
                        <BackIcon
                          style={{
                            cursor: "pointer",
                            marginRight: "12px",
                            verticalAlign: "text-bottom",
                          }}
                          onClick={() => {
                            //history.goBack();
                            setModalState("detail");
                          }}
                        />
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "22px",
                            color: "#000000",
                            display: "inline-block",
                          }}
                        >
                          {"지출 상세 내역"}
                        </div>
                        <button
                          onClick={() => {
                            setModalOpen(false);
                            setModalState("new");
                          }}
                          style={{
                            padding: 0,
                            backgroundColor: "#fff",
                            border: "none",
                            float: "right",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                              fill="#303030"
                            />
                          </svg>
                        </button>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "fit-content",
                          marginTop: "30px",
                        }}
                      >
                        <VariableMultiLayout>
                          <p style={{ flexGrow: 1, marginBottom: "20px" }}>
                            <HcTextFieldLabel
                              titleName="날짜"
                              name="date"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  alert("SUCCESS");
                                }
                              }}
                              style={{ width: "170px" }}
                            >
                              날짜선택
                            </HcTextFieldLabel>
                          </p>
                          <p
                            style={{
                              flexGrow: 1,
                              textAlign: "end",
                              marginBottom: "20px",
                            }}
                          >
                            <HcSelect
                              titleName=""
                              style={{ width: "170px", minWidth: "unset" }}
                              value={""}
                              onChange={(e) => {}}
                            >
                              <option value="" hidden>
                                반복 안 함
                              </option>
                              <option value={1}>매일</option>
                              <option value={2}>매주 수요일</option>
                              <option value={3}>매월 첫 번째 수요일</option>
                              <option value={4}>매년 3월 15일</option>
                              <option value={5}>주중 매일(월-금)</option>
                              <option value={6}>더보기...</option>
                            </HcSelect>
                          </p>
                        </VariableMultiLayout>
                        <HcTextFieldLabel
                          titleName="금액"
                          name="price"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              alert("SUCCESS");
                            }
                          }}
                          style={{
                            width: "400px",
                            marginBottom: "20px",
                            textAlign: "end",
                          }}
                        >
                          {"-300,000"}
                        </HcTextFieldLabel>

                        <HcTextFieldLabel
                          titleName="계정과목"
                          name="subject"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              alert("SUCCESS");
                            }
                          }}
                          style={{ width: "400px", marginBottom: "20px" }}
                        >
                          {"상여금"}
                        </HcTextFieldLabel>
                        <div style={{ width: "100%", marginBottom: "20px" }}>
                          <Title>적요</Title>
                          <HcTagNoInput
                            tags={tags2}
                            setTags={setTags2}
                            style={{
                              width: "100%",
                              minHeight: "unset",
                              background: "#FFFFFF",
                              borderBottom: "1px solid #E0E0E0",
                            }}
                          />
                        </div>
                        <HcTextFieldLabel
                          titleName="거래처"
                          name="account"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              alert("SUCCESS");
                            }
                          }}
                          style={{ width: "400px", marginBottom: "20px" }}
                        >
                          {"티맥스 엔터프라이즈"}
                        </HcTextFieldLabel>
                      </div>
                      <Popup_Buttons>
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontWeight: 500,
                            fontSize: "16px",
                            color: "#000000",
                            cursor: "pointer",
                            display: "inline-block",
                            width: "80px",
                            height: "40px",
                            padding: "8px 25px",
                            marginRight: "12px",
                          }}
                        >
                          수정
                        </div>
                        <div
                          style={{
                            fontFamily: "Noto Sans KR",
                            fontWeight: 500,
                            fontSize: "16px",
                            color: "#000000",
                            cursor: "pointer",
                            display: "inline-block",
                            width: "80px",
                            height: "40px",
                            padding: "8px 25px",
                          }}
                        >
                          삭제
                        </div>
                      </Popup_Buttons>
                    </ContentContainer>
                  ),
                }[modalState]
              : null}
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default FundsPlanning;
