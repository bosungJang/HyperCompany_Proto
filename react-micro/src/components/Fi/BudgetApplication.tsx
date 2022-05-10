import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import "common/Table.css";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  Wrapper,
  Title,
  StyledSelect,
  HcSelect,
  HcSearchTextField,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import { VariableMultiLayout } from "common/HcCommonLayout";
import HcBottomBar from "common/HcBottomBar";
import { HcPopup, HcContentPopupFi } from "common/HcPopup";
import ImageUploader from "common/HcUploader";
import { ReactComponent as CloseIcon } from "resources/images/Close_Icon_White.svg";
import { ReactComponent as ListIcon } from "resources/images/List_Icon.svg";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";

interface MatchParams {
  id: string;
}

const TableContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
  overflow-x: auto;
  margin-top: 20px;

  &::-webkit-scrollbar-track {
    background: none;

    position: absolute;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #f5f5f5;
    display: none;
    &:hover {
      display: inline;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }
  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
`;

const TotalDataDiv = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const ColumnTd = styled.td`
  width: 80px;
  background: #f9f9f9;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 16px;
  color: #5d5d62;
  text-align: center;
  border-bottom: unset;
  border: 1px solid #cecece;
`;

const InfoTd = styled.td`
  width: 224px;
  background: #ffffff;
  border-bottom: unset;
  max-width: unset;

  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  border: 1px solid #cecece;
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 30px 40px;
`;

const StyledInput = styled.input`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 24px;
  padding: 10px;
  border: 1px solid #cecece;
  border-radius: 3px;
  margin-top: 47px;
  ::placeholder {
    color: #000000;
  }
  ::placeholder::after {
    content: " *";
    color: red;
  }
  &:focus-visible {
    outline: 1px solid #257cff;
  }
  &:hover {
    box-shadow: ${(props) => (props.disabled ? null : "0 0 5px #257cff")};
  }
`;

const LabelPictureTextField = styled.div`
  font-size: 20px;
  color: #303030;
  display: inline-block;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
`;

const TableInput = styled.input`
  width: 200px;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 10px;
  border: 1px solid #cecece;
  border-radius: 3px;

  ::placeholder {
    color: #a7a7a7;
  }

  &:focus-visible {
    outline: 1px solid #257cff;
  }
  &:hover {
    box-shadow: ${(props) => (props.disabled ? null : "0 0 5px #257cff")};
  }
`;

const columns = [
  "귀속 부서",
  "예산 과목",
  "예산명",
  "이월 여부",
  "배정금액",
  "1월",
  "2월",
  "3월",
  "4월",
];

const data = Array(43)
  .fill(undefined)
  .map(() => ({
    department: "EC본부 / EC2-4팀",
    budgetCategory: "복리후생비",
    budgetName: "UX팀 회식비",
    carryOverYn: "허용",
    amount: "36,000,000",
    JAN: "300,000",
    FEB: "300,000",
    MAR: "300,000",
    APR: "300,000",
  }));

const BudgetApplication = ({ match }: RouteComponentProps<MatchParams>) => {
  const history = useHistory();
  const [openBottomBar, setOpenBottomBar] = React.useState(true);

  const GeneralState = () => {
    return (
      <>
        <div style={{ display: "block", width: "inherit", marginTop: "20px" }}>
          <div>
            <HcTitleTextField
              titleName="예산 신청"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <HcButton
              onClick={() => {}}
              styles="line"
              style={{ marginRight: "5px", float: "right" }}
              size="medium"
            >
              내보내기
            </HcButton>
          </div>
          <div style={{ marginTop: "59px", width: "inherit" }}>
            <TotalDataDiv>예산 배정금액 목록(137)</TotalDataDiv>
            <div
              style={{
                marginTop: "18px",
                marginBottom: "20px",
                width: "inherit",
              }}
            >
              <HcButton
                onClick={() => {
                  history.push(`${match.url}/add`);
                }}
                styles="secondary"
                size="medium"
                /*
                        style={
                          adminYn
                            ? { opacity: 1, transition: "opacity 0.5s ease" }
                            : { opacity: 0, transition: "opacity 0.5s ease" }
                        }
                        */
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
              <TableContainer>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      {columns.map((column: any) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(
                      ({
                        department,
                        budgetCategory,
                        budgetName,
                        carryOverYn,
                        amount,
                        JAN,
                        FEB,
                        MAR,
                        APR,
                      }) => (
                        <tr
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <td style={{}}>{department}</td>
                          <td style={{}}>{budgetCategory}</td>
                          <td style={{}}>{budgetName}</td>
                          <td style={{}}>{carryOverYn}</td>
                          <td style={{}}>{amount}</td>
                          <td style={{}}>{JAN}</td>
                          <td style={{}}>{FEB}</td>
                          <td style={{}}>{MAR}</td>
                          <td style={{}}>{APR}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </TableContainer>
            </div>
          </div>
        </div>
      </>
    );
  };

  const CreateState = () => {
    const [departVal, setDepartVal] = React.useState("");
    const [budgetCateVal, setbudgetCateVal] = React.useState("");
    const [useYn, setUseYn] = React.useState("Y");

    const [budgetData, setBudgetData] = React.useState({
      jan: "",
      feb: "",
      mar: "",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    });

    const NumberChange = (value: string) => {
      if (isNaN(parseInt(value))) {
        return 0;
      } else {
        return parseInt(value);
      }
    };

    const NumFormat = (value: any) => {
      return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
      <>
        <div style={{ display: "block", width: "inherit", marginTop: "20px" }}>
          <div>
            <HcTitleTextField
              titleName="새 예산 신청"
              isBackIcon={true}
              style={{ display: "inline-block" }}
            />
            <div>
              <StyledInput type="text" placeholder="새 예산명" />
              <ContentWrapper style={{ marginTop: "49px" }}>
                <VariableMultiLayout>
                  <p style={{ flexGrow: 1, marginRight: "80px" }}>
                    <HcSearchTextField
                      titleName="부서"
                      name="department"
                      value={departVal}
                      placeholder="부서 조회"
                      onChange={(e) => {
                        const lengthOfInputValue = departVal.split("").length;

                        if (lengthOfInputValue !== 10)
                          setDepartVal(e.currentTarget.value);
                      }}
                      style={{ width: "360px" }}
                      onKeyDown={(e) => {}}
                      required
                    />
                  </p>
                  <p style={{ flexGrow: 1, marginRight: "86px" }}>
                    <HcSearchTextField
                      titleName="예산과목명"
                      name="department"
                      value={budgetCateVal}
                      placeholder="계정과목 조회"
                      onChange={(e) => {
                        const lengthOfInputValue =
                          budgetCateVal.split("").length;

                        if (lengthOfInputValue !== 10)
                          setbudgetCateVal(e.currentTarget.value);
                      }}
                      onKeyDown={(e) => {}}
                      style={{ width: "360px" }}
                      required
                    />
                  </p>
                  <p style={{ flexGrow: 1 }}>
                    <Title required={false}>{"이월 여부"}</Title>
                    <div style={{ marginTop: "20px" }}>
                      <HcRadioGroup
                        defaultValue={useYn}
                        onChange={(value) => {
                          setUseYn(value);
                          console.log(useYn);
                        }}
                      >
                        <HcRadioButton value="Y">
                          <span
                            style={{
                              marginLeft: "8px",
                              fontFamily: "Noto Sans KR",
                              fontSize: "14px",
                              marginRight: "60px",
                            }}
                          >
                            허용
                          </span>
                        </HcRadioButton>
                        <HcRadioButton value="N">
                          <span
                            style={{
                              marginLeft: "8px",
                              fontFamily: "Noto Sans KR",
                              fontSize: "14px",
                            }}
                          >
                            허용 안함
                          </span>
                        </HcRadioButton>
                      </HcRadioGroup>
                    </div>
                  </p>
                </VariableMultiLayout>
              </ContentWrapper>
              <ContentWrapper
                style={{ marginTop: "24px", padding: "20px 24px" }}
              >
                <LabelPictureTextField>당기 예산 배정</LabelPictureTextField>
                <div
                  style={{
                    marginTop: "28px",
                    marginLeft: "16px",
                    marginBottom: "10px",
                  }}
                >
                  <table style={{ width: "unset" }}>
                    <tr style={{ height: "60px" }}>
                      <ColumnTd>1월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="1월 예산 입력"
                          value={budgetData.jan}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                jan: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd>2월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="2월 예산 입력"
                          value={budgetData.feb}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                feb: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd>3월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="3월 예산 입력"
                          value={budgetData.mar}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                mar: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd style={{ width: "128px" }}>
                        1분기 배정 합계
                      </ColumnTd>
                      <InfoTd
                        style={{ textAlign: "end", paddingRight: "11px" }}
                      >
                        {NumFormat(
                          NumberChange(budgetData.jan) +
                            NumberChange(budgetData.feb) +
                            NumberChange(budgetData.mar)
                        )}
                      </InfoTd>
                    </tr>
                    <tr style={{ height: "60px" }}>
                      <ColumnTd>4월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="4월 예산 입력"
                          value={budgetData.apr}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                apr: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd>5월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="5월 예산 입력"
                          value={budgetData.may}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                may: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd>6월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="6월 예산 입력"
                          value={budgetData.jun}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                jun: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd style={{ width: "128px" }}>
                        2분기 배정 합계
                      </ColumnTd>
                      <InfoTd
                        style={{ textAlign: "end", paddingRight: "11px" }}
                      >
                        {NumFormat(
                          NumberChange(budgetData.apr) +
                            NumberChange(budgetData.may) +
                            NumberChange(budgetData.jun)
                        )}
                      </InfoTd>
                    </tr>
                    <tr style={{ height: "60px" }}>
                      <ColumnTd>7월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="7월 예산 입력"
                          value={budgetData.jul}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                jul: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd>8월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="8월 예산 입력"
                          value={budgetData.aug}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                aug: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd>9월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="9월 예산 입력"
                          value={budgetData.sep}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                sep: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd style={{ width: "128px" }}>
                        3분기 배정 합계
                      </ColumnTd>
                      <InfoTd
                        style={{ textAlign: "end", paddingRight: "11px" }}
                      >
                        {NumFormat(
                          NumberChange(budgetData.jul) +
                            NumberChange(budgetData.aug) +
                            NumberChange(budgetData.sep)
                        )}
                      </InfoTd>
                    </tr>
                    <tr style={{ height: "60px" }}>
                      <ColumnTd>10월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="10월 예산 입력"
                          value={budgetData.oct}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                oct: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd>11월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="11월 예산 입력"
                          value={budgetData.nov}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                nov: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd>12월</ColumnTd>
                      <InfoTd>
                        <TableInput
                          placeholder="12월 예산 입력"
                          value={budgetData.dec}
                          onChange={(e) => {
                            const regex = /^[0-9\b -]{0,13}$/;
                            if (regex.test(e.target.value)) {
                              setBudgetData((prev) => ({
                                ...prev,
                                dec: e.target.value,
                              }));
                            }
                          }}
                        />
                      </InfoTd>
                      <ColumnTd style={{ width: "128px" }}>
                        4분기 배정 합계
                      </ColumnTd>
                      <InfoTd
                        style={{ textAlign: "end", paddingRight: "11px" }}
                      >
                        {NumFormat(
                          NumberChange(budgetData.oct) +
                            NumberChange(budgetData.nov) +
                            NumberChange(budgetData.dec)
                        )}
                      </InfoTd>
                    </tr>
                    <tr>
                      <ColumnTd
                        colSpan={8}
                        style={{ color: "#2D2D31", fontSize: "18px" }}
                      >
                        총{" "}
                        {NumFormat(
                          NumberChange(budgetData.jan) +
                            NumberChange(budgetData.feb) +
                            NumberChange(budgetData.mar) +
                            NumberChange(budgetData.apr) +
                            NumberChange(budgetData.may) +
                            NumberChange(budgetData.jun) +
                            NumberChange(budgetData.jul) +
                            NumberChange(budgetData.aug) +
                            NumberChange(budgetData.sep) +
                            NumberChange(budgetData.oct) +
                            NumberChange(budgetData.nov) +
                            NumberChange(budgetData.dec)
                        )}
                      </ColumnTd>
                    </tr>
                  </table>
                </div>
              </ContentWrapper>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
          <Route exact path={match.url} component={GeneralState} />
          <Route path={`${match.url}/add`} component={CreateState} />
        </ComponentWrapper>
      </div>
    </>
  );
};

export default BudgetApplication;
