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
} from "common/HcTextField";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import { VariableMultiLayout } from "common/HcCommonLayout";
import HcBottomBar from "common/HcBottomBar";
import { HcPopup, HcContentPopupFi } from "common/HcPopup";
import ImageUploader from "common/HcUploader";
import { ReactComponent as CloseIcon } from "resources/images/Close_Icon_White.svg";
import { ReactComponent as ListIcon } from "resources/images/List_Icon.svg";

const TotalDataDiv = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

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

const ContentWrapper = styled.div`
  width: 100%;
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 30px 40px;
`;

const columns = [
  "비용청구번호",
  "작성일",
  "사용부서",
  "사용자",
  "비용청구유형",
  "명의구분",
  "증빙유형",
  "사용처",
  "신청금액(VAT포함)",
  "결재상태",
  "미결재자",
  "처리상태",
];
const aprrovalDataComlumn = [
  <div style={{ paddingTop: 7 }}>
    <HcCheckBox checked={false} onChange={(e) => {}} />
  </div>,
  "사용일자",
  "사용 시각",
  "승인번호",
  "결재구분",
  "승인금액",
  "사용처명",
];

const LabelPictureTextField = styled.div`
  height: 36px;
  width: 360px;
  border: 1px solid #cecece;
  text-overflow: ellipsis;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 3px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
`;
const ContentTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;
const ApprovalWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px 10px;
`;

const ApprovalContent = styled.div`
  background: #f9f9f9;
  border-radius: 4px;
  //padding: 13px;
  height: 50px;
  margin-bottom: 6px;
  &: last-child {
    margin-bottom: 0;
  }
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 15px;
  font-family: Noto Sans KR;
  color: #5d5d62;
`;

const CheckedItemTitle = styled.div`
  display: inline-block;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 20px;
  color: #303030;
`;

const CheckedItemSubTitle = styled.div`
  display: inline-block;
  font-family: Noto Sans KR;
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  color: #2d2d31;
  margin-left: 16px;
`;

const TextArea = styled.textarea`
  border: 1px solid #cecece;
  border-radius: 3px;
  width: 100%;
  min-height: 200px;
  resize: none;
  padding: 5px;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 16px;

  &: focus {
    outline: none;
  }
`;

const data1 = Array(43)
  .fill(undefined)
  .map(() => ({
    billingNumber: "T0-AAC-20220208-0002",
    date: "2022.01.01",
    department: "EC본부 / EC2-4팀",
    user: "홍길동",
    billingType: "일반 경비(법인카드)",
    classification: "법인(공용)",
    evidenceType: "카드 전표",
    placeUse: "죽전고봉삼계탕",
    requestAmount: "15,000",
    paymentStatus: "결재중",
    outstandingUser: "곱단이",
    processStatus: "경비 신청",
  }));

const data2 = Array(6)
  .fill(undefined)
  .map(() => ({
    billingNumber: "T0-AAC-20220208-0002",
    date: "2022.01.01",
    department: "EC본부 / EC2-4팀",
    user: "홍길동",
    billingType: "일반 경비(법인카드)",
    classification: "법인(공용)",
    evidenceType: "카드 전표",
    placeUse: "죽전고봉삼계탕",
    requestAmount: "15,000",
    paymentStatus: "결재중",
    outstandingUser: "곱단이",
    processStatus: "경비 신청",
  }));

const approvalData = [
  {
    id: 1,
    date: "2022.01.01",
    time: "03:48:59",
    approvalNumber: "76476597",
    paymentType: "일시불",
    amount: 15000,
    used: "후불하이패스",
  },
  {
    id: 2,
    date: "2022.01.01",
    time: "03:48:59",
    approvalNumber: "76476597",
    paymentType: "일시불",
    amount: 15000,
    used: "후불하이패스",
  },
  {
    id: 3,
    date: "2022.01.01",
    time: "03:48:59",
    approvalNumber: "76476597",
    paymentType: "일시불",
    amount: 15000,
    used: "후불하이패스",
  },
  {
    id: 4,
    date: "2022.01.01",
    time: "03:48:59",
    approvalNumber: "76476597",
    paymentType: "일시불",
    amount: 15000,
    used: "후불하이패스",
  },
  {
    id: 5,
    date: "2022.01.01",
    time: "03:48:59",
    approvalNumber: "76476597",
    paymentType: "일시불",
    amount: 15000,
    used: "후불하이패스",
  },
];
interface MatchParams {
  id: string;
}

const approvalLineData = [
  { state: "기안", name: "홍길동", position: "연구원", department: "AB2-4팀" },
  {
    state: "결재",
    name: "곱단이",
    position: "연구원(팀장)",
    department: "AB2-4팀",
  },
  {
    state: "합의(승인부서)",
    name: "차돌바위",
    position: "매니저",
    department: "인사팀",
  },
  {
    state: "결재(승인부서)",
    name: "호피",
    position: "매니저",
    department: "인사팀",
  },
];

const BillingCurrentStatus = ({ match }: RouteComponentProps<MatchParams>) => {
  const [adminYn, setAdminYn] = React.useState(false);
  const [data, setData] = React.useState(adminYn ? data2 : data1);
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (adminYn == true) {
      setData(data2);
    } else {
      setData(data1);
    }
    return () => {};
  }, [adminYn]);

  const history = useHistory();

  const [barOpen, setbarOpen] = React.useState(true);

  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const [tempItem, setTempItem]: any = React.useState(checkedItem);

  const [images, setImages]: any = React.useState([]);
  const [approvalLineDatas, setApprovalLineDatas]: any =
    React.useState(approvalLineData);

  React.useEffect(() => {
    console.log(images);
  }, [images]);

  function checkHandler(item: any) {
    const checked = tempItem.findIndex((v: any) => v.id === item.id);
    if (checked === -1) {
      setTempItem([...tempItem, item]);
    } else {
      var temptArray = JSON.parse(JSON.stringify(tempItem));
      temptArray.splice(checked, 1);
      setTempItem(temptArray);
    }
  }

  function checkAllHandler(checked: Boolean) {
    if (checked) {
      const ids: Number[] = [];
      approvalData.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  const [sum, setSum] = React.useState(0);

  React.useEffect(() => {
    let sum = 0;
    for (let i = 0; i < tempItem.length; i++) {
      sum += tempItem[i].amount;
      setSum(sum);
    }
    return () => {};
  }, [tempItem]);

  const GeneralState = () => {
    return (
      <>
        <div style={{ display: "block", width: "inherit", marginTop: "20px" }}>
          <div>
            <HcTitleTextField
              titleName="비용 청구 현황"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <HcButton
              onClick={() => {
                setAdminYn(!adminYn);
              }}
              styles="line"
              style={{ marginRight: "5px", float: "right" }}
              size="medium"
            >
              내보내기
            </HcButton>
          </div>
          <div style={{ marginTop: "59px", width: "inherit" }}>
            <TotalDataDiv>비용 청구 내역(137)</TotalDataDiv>
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
                style={
                  adminYn
                    ? { opacity: 1, transition: "opacity 0.5s ease" }
                    : { opacity: 0, transition: "opacity 0.5s ease" }
                }
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
                        billingNumber,
                        date,
                        department,
                        user,
                        billingType,
                        classification,
                        evidenceType,
                        placeUse,
                        requestAmount,
                        paymentStatus,
                        outstandingUser,
                        processStatus,
                      }) => (
                        <tr
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <td style={{ width: "200px" }}>
                            <Link
                              to={"#"}
                              style={{ textDecoration: "underline" }}
                            >
                              {billingNumber}
                            </Link>
                          </td>
                          <td style={{ width: "160px" }}>{date}</td>
                          <td style={{ width: "160px" }}>{department}</td>
                          <td style={{ width: "160px" }}>{user}</td>
                          <td style={{ width: "160px" }}>{billingType}</td>
                          <td style={{ width: "160px" }}>{classification}</td>
                          <td style={{ width: "160px" }}>{evidenceType}</td>
                          <td style={{ width: "180px" }}>{placeUse}</td>
                          <td style={{ width: "160px" }}>{requestAmount}</td>
                          <td style={{ width: "160px" }}>{paymentStatus}</td>
                          <td style={{ width: "160px" }}>{outstandingUser}</td>
                          <td style={{ width: "160px" }}>{processStatus}</td>
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
    return (
      <>
        <div style={{ display: "block", width: "inherit", marginTop: "20px" }}>
          <HcTitleTextField titleName="비용 정산 신청" isBackIcon={true} />
          <ContentWrapper style={{ marginTop: "49px" }}>
            <VariableMultiLayout>
              <p style={{ flexGrow: 1 }}>
                <Wrapper style={{ marginBottom: "20px" }}>
                  <Title required={false}>{"작성자"}</Title>
                  <LabelPictureTextField>{"홍길동"}</LabelPictureTextField>
                </Wrapper>
                <HcTextFieldLabel
                  titleName="작성일"
                  name="date"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      alert("SUCCESS");
                    }
                  }}
                  style={{ width: "360px" }}
                >
                  2022.01.01
                </HcTextFieldLabel>
              </p>
              <p style={{ flexGrow: 1 }}>
                <HcTextFieldLabel
                  titleName="직위"
                  name="title"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      alert("SUCCESS");
                    }
                  }}
                  style={{ width: "360px" }}
                >
                  연구원
                </HcTextFieldLabel>
              </p>
              <p style={{ flexGrow: 1 }}>
                <HcTextFieldLabel
                  titleName="부서"
                  name="department"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      alert("SUCCESS");
                    }
                  }}
                  style={{ width: "360px" }}
                >
                  EC 본부 / EC2-4팀
                </HcTextFieldLabel>
              </p>
            </VariableMultiLayout>
          </ContentWrapper>
          <ContentWrapper style={{ marginTop: "24px" }}>
            <VariableMultiLayout>
              <p style={{ flexGrow: 1 }}>
                <HcTextFieldLabel
                  titleName="비용청구번호"
                  name="department"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      alert("SUCCESS");
                    }
                  }}
                  style={{ width: "360px" }}
                >
                  T0-AAC-20220208-0002
                </HcTextFieldLabel>
              </p>
              <p style={{ flexGrow: 1 }}>
                <HcSelect
                  titleName="비용청구유형"
                  required
                  style={{ width: "360px" }}
                  value={""}
                  onChange={(e) => {}}
                >
                  <option value="" hidden>
                    일반경비(개인카드)
                  </option>
                  <option value={1}>일반경비(개인카드)</option>
                </HcSelect>
              </p>
              <p style={{ flexGrow: 1 }}></p>
            </VariableMultiLayout>
          </ContentWrapper>
          {checkedItem.length != 0 ? (
            checkedItem.map((item: any, key: number) => (
              <>
                <ContentWrapper style={{ marginTop: "45px" }}>
                  <div>
                    <CheckedItemTitle>{"내역" + key}</CheckedItemTitle>
                    <CheckedItemSubTitle>
                      {
                        "법인(공용) 1234-****-****-0000 (팀회식비카드/KB국민카드/박해성)"
                      }
                    </CheckedItemSubTitle>
                  </div>
                  <div style={{ marginTop: "38px" }}>
                    <VariableMultiLayout>
                      <p style={{ flexGrow: 1 }}>
                        <HcTextFieldLabel
                          titleName="정산 금액"
                          name="amount"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              alert("SUCCESS");
                            }
                          }}
                          style={{ width: "360px", marginBottom: "30px" }}
                        >
                          {item.amount}
                        </HcTextFieldLabel>
                        <HcTextFieldLabel
                          titleName="사용처"
                          name="used"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              alert("SUCCESS");
                            }
                          }}
                          style={{ width: "360px" }}
                        >
                          {item.used}
                        </HcTextFieldLabel>
                      </p>
                      <p style={{ flexGrow: 1 }}>
                        <HcTextFieldLabel
                          titleName="사용일"
                          name="date"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              alert("SUCCESS");
                            }
                          }}
                          style={{ width: "360px", marginBottom: "30px" }}
                        >
                          {item.date}
                        </HcTextFieldLabel>
                        <Wrapper>
                          <Title required={true}>{"비용항목"}</Title>
                          <LabelPictureTextField>{""}</LabelPictureTextField>
                        </Wrapper>
                      </p>
                      <p style={{ flexGrow: 1 }}>
                        <HcTextFieldLabel
                          titleName="승인번호"
                          name="approvalNumber"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              alert("SUCCESS");
                            }
                          }}
                          style={{ width: "360px", marginBottom: "30px" }}
                        >
                          {item.approvalNumber}
                        </HcTextFieldLabel>
                        <Wrapper>
                          <Title required={false}>{"적요"}</Title>
                          <LabelPictureTextField>{""}</LabelPictureTextField>
                        </Wrapper>
                      </p>
                    </VariableMultiLayout>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <div
                      style={{
                        fontFamily: "Noto Sans KR",
                        fontSize: "13px",
                        color: "#656565",
                      }}
                    >
                      영수증
                    </div>
                    <ImageUploader
                      imagesArray={images}
                      setImageArray={setImages}
                    />
                  </div>
                  <div style={{ marginTop: "53px" }}>
                    <div
                      style={{
                        fontFamily: "Noto Sans KR",
                        fontSize: "13px",
                        color: "#656565",
                      }}
                    >
                      상세 내용
                    </div>
                    <TextArea></TextArea>
                  </div>
                </ContentWrapper>
              </>
            ))
          ) : (
            <></>
          )}

          <HcButton
            onClick={() => {
              setModalOpen(true);
            }}
            styles="line"
            style={{
              width: "151px",
              marginTop: "24px",
              padding: "7px 18px 6px 18px",
              fontSize: "12px",
            }}
            size="medium"
          >
            + 카드 승인 내역 추가
          </HcButton>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#E0E0E0",
              marginTop: "16px",
              marginBottom: "24px",
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "Noto Sans KR",
                fontWeight: 500,
                fontSize: "14px",
                color: "black",
                display: "inline-block",
                marginRight: "14px",
              }}
            >
              총&nbsp;
              <span
                style={{
                  fontFamily: "Noto Sans KR",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#257CFF",
                }}
              >
                {checkedItem.length}
              </span>
              건
            </div>
            <div
              style={{
                fontFamily: "Noto Sans KR",
                fontWeight: 500,
                fontSize: "14px",
                color: "black",
                display: "inline-block",
              }}
            >
              합계&nbsp;
              <span
                style={{
                  fontFamily: "Noto Sans KR",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#257CFF",
                }}
              >
                {sum}
              </span>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#E0E0E0",
              marginTop: "16px",
              marginBottom: "24px",
            }}
          />
          <ContentWrapper style={{ padding: "20px 24px" }}>
            <ContentTitle>결재선</ContentTitle>
            <div style={{ marginTop: "10px", marginBottom: "14px" }}>
              <div
                style={{
                  display: "inline-block",
                  fontFamily: "Noto Sans KR",
                  fontSize: "15px",
                }}
              >
                결재선 지정
              </div>
            </div>
            <ApprovalWrapper>
              {approvalLineDatas.map((item: any, key: number) => (
                <>
                  <ApprovalContent>
                    <div
                      style={{
                        display: "inline-table",
                        width: "50px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <ListIcon style={{ verticalAlign: "middle" }} />
                    </div>
                    <div style={{ display: "inline-block", width: "280px" }}>
                      {item.state}
                    </div>
                    <div style={{ display: "inline-table", width: "344px" }}>
                      <img
                        src="https://cdnweb01.wikitree.co.kr/webdata/editor/202110/06/img_20211006130837_bdb87ae2.webp"
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          marginRight: "8px",
                          verticalAlign: "middle",
                        }}
                        alt={item.name}
                      />
                      {item.name}
                    </div>
                    <div style={{ display: "inline-block", width: "319px" }}>
                      {item.position}
                    </div>
                    <div style={{ display: "inline-block", width: "208px" }}>
                      {item.department}
                    </div>
                    <div
                      style={{
                        display: "inline-table",
                        width: "50px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        let temp = JSON.parse(
                          JSON.stringify(approvalLineDatas)
                        );
                        temp.splice(key, 1);
                        setApprovalLineDatas(temp);
                      }}
                    >
                      <CloseIcon style={{ verticalAlign: "middle" }} />
                    </div>
                  </ApprovalContent>
                </>
              ))}
            </ApprovalWrapper>
            <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  fontFamily: "Noto Sans KR",
                  fontSize: "15px",
                  color: "#5D5D62",
                }}
              >
                결재 알림
              </div>
              <StyledSelect
                style={{ width: "400px", fontWeight: 500, marginTop: "16px" }}
                value={""}
                onChange={(e) => {}}
              >
                <option value="" hidden>
                  결재 요청(승인부서제외) + 완결 통보(기안, 통보자)
                </option>
                <option value={1}>
                  결재 요청(승인부서제외) + 완결 통보(기안, 통보자)
                </option>
              </StyledSelect>
            </div>
          </ContentWrapper>
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
          <HcContentPopupFi
            open={modalOpen}
            close={() => {
              setModalOpen(false);
            }}
            confirm={() => {
              console.log(checkedItem);
              setCheckedItem(tempItem);
              setModalOpen(false);
            }}
            header="카드 승인 내역 추가"
            style={{ width: "946px", height: "878px", padding: "20px 30px" }}
          >
            <div>
              <HcSelect
                titleName="법인 카드"
                style={{ width: "600px" }}
                value={""}
                onChange={(e) => {}}
              >
                <option value="" hidden>
                  법인(공용) 1234-****-****-0000 (팀회식비카드/KB국민카드/홍길동
                </option>
                <option value={1}>
                  법인(공용) 1234-****-****-0000 (팀회식비카드/KB국민카드/홍길동
                </option>
              </HcSelect>
              <div style={{ marginTop: "40px" }}>
                <div
                  style={{
                    fontFamily: "Noto Sans KR",
                    color: "#2D2D31",
                    fontSize: "14px",
                    fontWeight: 500,
                    display: "inline-block",
                  }}
                >
                  카드 승인 내역(5)
                </div>
                <TableContainer>
                  <table
                    className="table table-hover"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        {aprrovalDataComlumn.map((column: any) => (
                          <th key={column}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {approvalData.map((item) => (
                        <tr
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <td>
                            <HcCheckBox
                              checked={
                                tempItem.findIndex(
                                  (v: any) => v.id === item.id
                                ) === -1
                                  ? false
                                  : true
                              }
                              onChange={(e) => {
                                checkHandler(item);
                              }}
                            />
                          </td>
                          <td>{item.date}</td>
                          <td>{item.time}</td>
                          <td>{item.approvalNumber}</td>
                          <td>{item.paymentType}</td>
                          <td>{item.amount}</td>
                          <td>{item.used}</td>
                        </tr>
                      ))}
                      <tr
                        style={{ background: "#EDEDED", textAlign: "center" }}
                      >
                        <td colSpan={4}>총 {tempItem.length}건</td>
                        <td colSpan={3}>합계 {sum}</td>
                      </tr>
                    </tbody>
                  </table>
                </TableContainer>
              </div>
            </div>
          </HcContentPopupFi>
        </ComponentWrapper>
        <HcBottomBar open={barOpen}>
          <div>
            <HcButton
              onClick={() => {
                //openModal();
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              승인
            </HcButton>

            <HcButton
              onClick={() => {
                setbarOpen(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              반려
            </HcButton>
          </div>
        </HcBottomBar>
      </div>
    </>
  );
};

export default BillingCurrentStatus;
