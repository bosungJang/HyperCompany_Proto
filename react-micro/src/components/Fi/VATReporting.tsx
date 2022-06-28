import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HcTextField, {
  HcSearchTextField,
  HcTitleTextField,
  Title,
} from "common/HcTextField";
import { HcDateRangePicker } from "common/HcDatePicker";
import "common/Table.css";
import { HcTableContainer } from "common/HcTableComponent";
import HcButton from "common/HcButton";

const BorderWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  width: 100%;
  padding: 30px 40px;
`;

const ContentTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #303030;
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
    font-weight: 400;
    font-size: 13px;
  }
  tbody td {
    padding: 0px 12px;
    font-family: Noto Sans KR;
    font-weight: 400;
    font-size: 14px;
  }
`;

const StyledTd = styled.td`
  background: #f4f4f4;
  border: 1px solid #d9d9d9;
  white-space: pre-wrap;
  text-align: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #5d5d62;

  span {
    color: #257cff;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

const PopupShow = keyframes`
from {
  opacity: 0;
  top:-50px;
}
to {
  opacity: 1;
  top:50%;
  transform: translateY(-50%);
}
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const PopupInner = styled.div<{ popUpType: string }>`
  position: absolute;
  animation: ${PopupShow} 0.5s;
  margin: auto;
  border-radius: 3px;
  background: white;
  width: ${(props) => handleSize(props.popUpType).width};
  height: ${(props) => handleSize(props.popUpType).height};
  top: 50%;
  transform: translateY(-50%);
  padding: 20px 24px 30px 30px;
`;

const handleSize = (type: string) => {
  switch (type) {
    case "2":
      return { width: "860px", height: "587px" };
    case "5":
      return { width: "900px", height: "633px" };
    case "6":
      return { width: "900px", height: "403px" };
    case "7":
      return { width: "900px", height: "541px" };
    case "11":
      return { width: "1674px", height: "909px" };
    default:
      return { width: "860px", height: "587px" };
  }
};

const PopupTitle = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 22px;
  color: #000000;
  display: inline-block;
`;

const VATTable = styled.table`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-spacing: 0;
  border-collapse: collapse;

  tbody tr {
    border: 1px solid #d9d9d9;
  }

  tbody td {
    padding: 0px 12px;
    height: 46px;
    font-family: Noto Sans KR;
    font-weight: 400;
    font-size: 14px;
    max-width: unset;
  }
`;

const data = Array(17)
  .fill(undefined)
  .map(() => ({
    voucherType: "매입매출",
    detail: "사업자발급분",
    taxType: "과세",
    numberCase: 10,
    supplyPrice: 117912,
    VAT: 11792,
  }));

const taxData = [
  { type: "신용매출전표수취/일반", num: 41, price: 0, taxRate: 0, texation: 0 },
  { type: "신용매출전표수취/고정", num: 42, price: 0, taxRate: 0, texation: 0 },
  {
    type: "의제매입세액/평창,광주",
    num: 43,
    price: 0,
    taxRate: 0,
    texation: 0,
  },
  {
    type: "재활용폐자원등매입세액",
    num: 44,
    price: 0,
    taxRate: 0,
    texation: 0,
  },
  { type: "과세사업전환매입세액", num: 45, price: 0, taxRate: 0, texation: 0 },
  { type: "재고매입세액", num: 46, price: 0, taxRate: 0, texation: 0 },
  { type: "변제대손세액", num: 47, price: 0, taxRate: 0, texation: 0 },
  { type: "외국인관광객환급세액", num: 48, price: 0, taxRate: 0, texation: 0 },
];

const taxData2 = [
  {
    type: "공제받지 못할 매입 세액",
    num: 50,
    price: 0,
    taxRate: 0,
    texation: 0,
  },
  {
    type: "공통 매입 세액 면세 사업",
    num: 51,
    price: 0,
    taxRate: 0,
    texation: 0,
  },
  { type: "대손 처분 받은 세액", num: 52, price: 0, taxRate: 0, texation: 0 },
];

const taxData3 = [
  { type: "전자신고 세액 공제", num: 54, price: 0, taxRate: 0, texation: 0 },
  { type: "전자세금발급 세액", num: 55, price: 0, taxRate: 0, texation: 0 },
  {
    type: "택시 운송사업자 경감 세액",
    num: 56,
    price: 0,
    taxRate: 0,
    texation: 0,
  },
  { type: "대리납부 세액 공제", num: 57, price: 0, taxRate: 0, texation: 0 },
  {
    type: "현금영수증 사업자 세액",
    num: 58,
    price: 0,
    taxRate: 0,
    texation: 0,
  },
  { type: "기타", num: 59, price: 0, taxRate: 0, texation: 0 },
];

const taxData4 = [
  { type: "사업자미등록", num: 61, price: 0, taxRate: "1/100", texation: 0 },
  {
    type: "세금계산서 지연 발급 등",
    num: 62,
    price: 0,
    taxRate: "1/100",
    texation: 0,
  },
  {
    type: "세금계산서 지연 수취",
    num: 63,
    price: 0,
    taxRate: "0.5/100",
    texation: 0,
  },
  { type: "세금계산서 미발급 등", num: 64, price: 0, taxRate: "", texation: 0 },
  {
    type: "전자 세금계산서 지연 전송",
    num: 65,
    price: 0,
    taxRate: "0.3/100",
    texation: 0,
  },
  {
    type: "전자 세금계산서 미전송",
    num: 66,
    price: 0,
    taxRate: "0.5/100",
    texation: 0,
  },
  {
    type: "세금계산서 합계표 불성실",
    num: 67,
    price: 0,
    taxRate: "",
    texation: 0,
  },
  { type: "신고 불성실", num: 69, price: 0, taxRate: "", texation: 0 },
  { type: "납부 지연", num: 73, price: 0, taxRate: "", texation: 0 },
  {
    type: "영세율 과세표준 신고 불성실",
    num: 74,
    price: 0,
    taxRate: "0.5/100",
    texation: 0,
  },
  {
    type: "현금 매출명세서 미제출",
    num: 75,
    price: 0,
    taxRate: "1/100",
    texation: 0,
  },
  {
    type: "부동산임대명세서 불성실",
    num: 76,
    price: 0,
    taxRate: "1/100",
    texation: 0,
  },
  {
    type: "매입자 거래계좌 미사용",
    num: 77,
    price: 0,
    taxRate: "",
    texation: 0,
  },
  {
    type: "매입자 거래계좌 지연 입금",
    num: 78,
    price: 0,
    taxRate: "",
    texation: 0,
  },
];

const VATReporting = ({ match }: RouteComponentProps) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = React.useState(false);
  const [popUpType, setPopUpType] = React.useState("2");

  const OpenPopUps = () => {
    return (
      <>
        {isOpen ? (
          <PopupContainer>
            <PopupInner popUpType={popUpType}>
              <div>
                <PopupTitle>
                  {
                    {
                      "2": "예정 신고 누락분",
                      "5": "기타 공제 매입 세액 명세",
                      "6": "공제받지 못할 세액 명세",
                      "7": "그 밖의 경감 / 공제 새액 명세",
                      "11": "가산세 명세",
                    }[popUpType]
                  }
                </PopupTitle>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  style={{
                    backgroundColor: "#ffff",
                    border: "none",
                    cursor: "pointer",
                    float: "right",
                    marginTop: "4px",
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
                  marginTop: "24px",
                  marginRight: "16px",
                  marginLeft: "10px",
                }}
              >
                {
                  {
                    "2": (
                      <VATTable>
                        <thead>
                          <tr>
                            <th
                              colSpan={4}
                              style={{ borderRight: "1px solid #D9D9D9" }}
                            >
                              구분
                            </th>
                            <th>금액</th>
                            <th>세율</th>
                            <th>세액</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <StyledTd
                              rowSpan={5}
                              style={{ width: "96px", fontWeight: 500 }}
                            >
                              {"매출"}
                            </StyledTd>
                            <StyledTd rowSpan={2}>과세</StyledTd>
                            <StyledTd style={{ width: 178 }}>
                              세금 계산서 발급분
                            </StyledTd>
                            <StyledTd style={{ width: "50px" }}>(33)</StyledTd>
                            <td style={{ textAlign: "end" }}>0</td>
                            <td>10/100</td>
                            <td style={{ textAlign: "end" }}>0</td>
                          </tr>
                          <tr>
                            <StyledTd>기타</StyledTd>
                            <StyledTd>(34)</StyledTd>
                            <td style={{ textAlign: "end" }}>0</td>
                            <td>10/100</td>
                            <td style={{ textAlign: "end" }}>0</td>
                          </tr>
                          <tr>
                            <StyledTd rowSpan={2}>영세</StyledTd>
                            <StyledTd>세금 계산서 발급분</StyledTd>
                            <StyledTd>(35)</StyledTd>
                            <td style={{ textAlign: "end" }}>0</td>
                            <td>10/100</td>
                            <td style={{ textAlign: "end" }}>0</td>
                          </tr>
                          <tr>
                            <StyledTd>기타</StyledTd>
                            <StyledTd>(36)</StyledTd>
                            <td style={{ textAlign: "end" }}>0</td>
                            <td>10/100</td>
                            <td style={{ textAlign: "end" }}>0</td>
                          </tr>
                          <tr>
                            <StyledTd colSpan={2}>합계</StyledTd>
                            <StyledTd>(37)</StyledTd>
                            <td style={{ textAlign: "end" }}>0</td>
                            <td></td>
                            <td style={{ textAlign: "end" }}>0</td>
                          </tr>
                          <tr>
                            <StyledTd rowSpan={3} style={{ fontWeight: 500 }}>
                              {"매입"}
                            </StyledTd>
                            <StyledTd colSpan={2}>세금계산서 발급분</StyledTd>

                            <StyledTd style={{ width: "50px" }}>(38)</StyledTd>
                            <td style={{ textAlign: "end" }}>0</td>
                            <td></td>
                            <td style={{ textAlign: "end" }}>0</td>
                          </tr>
                          <tr>
                            <StyledTd colSpan={2}>기타 공제 매입 세액</StyledTd>
                            <StyledTd style={{ width: "50px" }}>(39)</StyledTd>
                            <td style={{ textAlign: "end" }}>0</td>
                            <td></td>
                            <td style={{ textAlign: "end" }}>0</td>
                          </tr>
                          <tr>
                            <StyledTd colSpan={2}>합계</StyledTd>
                            <StyledTd style={{ width: "50px" }}>(40)</StyledTd>
                            <td style={{ textAlign: "end" }}>0</td>
                            <td></td>
                            <td style={{ textAlign: "end" }}>0</td>
                          </tr>
                        </tbody>
                      </VATTable>
                    ),
                    "5": (
                      <TableContainer style={{ height: "unset" }}>
                        <table
                          className="table table-hover"
                          style={{ width: "100%" }}
                        >
                          <thead
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <tr>
                              <th colSpan={2}>구분</th>
                              <th>금액</th>
                              <th>세율</th>
                              <th>세액</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              display: "block",
                            }}
                          >
                            {taxData.map((item) => (
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                  height: "46px",
                                }}
                              >
                                <td style={{ width: "430px" }}>{item.type}</td>
                                <td>({item.num})</td>
                                <td>{item.price}</td>
                                <td>{item.taxRate}</td>
                                <td>{item.texation}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                              background: "#F4F4F4",
                            }}
                          >
                            <td>합계</td>
                            <td>(49)</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </table>
                      </TableContainer>
                    ),
                    "6": (
                      <TableContainer style={{ height: "unset" }}>
                        <table
                          className="table table-hover"
                          style={{ width: "100%" }}
                        >
                          <thead
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <tr>
                              <th colSpan={2}>구분</th>
                              <th>금액</th>
                              <th>세율</th>
                              <th>세액</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              display: "block",
                            }}
                          >
                            {taxData2.map((item) => (
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                  height: "46px",
                                }}
                              >
                                <td style={{ width: "430px" }}>{item.type}</td>
                                <td>{item.num}</td>
                                <td>{item.price}</td>
                                <td>{item.taxRate}</td>
                                <td>{item.texation}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                              background: "#F4F4F4",
                            }}
                          >
                            <td>합계</td>
                            <td>(53)</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </table>
                      </TableContainer>
                    ),
                    "7": (
                      <TableContainer style={{ height: "unset" }}>
                        <table
                          className="table table-hover"
                          style={{ width: "100%" }}
                        >
                          <thead
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                            }}
                          >
                            <tr>
                              <th colSpan={2}>구분</th>
                              <th>금액</th>
                              <th>세율</th>
                              <th>세액</th>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              display: "block",
                            }}
                          >
                            {taxData3.map((item) => (
                              <tr
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                  height: "46px",
                                }}
                              >
                                <td style={{ width: "430px" }}>{item.type}</td>
                                <td>{item.num}</td>
                                <td>{item.price}</td>
                                <td>{item.taxRate}</td>
                                <td>{item.texation}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tr
                            style={{
                              display: "table",
                              width: "100%",
                              tableLayout: "fixed",
                              background: "#F4F4F4",
                            }}
                          >
                            <td>합계</td>
                            <td>(60)</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </table>
                      </TableContainer>
                    ),
                    "11": (
                      <div style={{ display: "flow-root" }}>
                        <div
                          style={{
                            width: "811px",
                            float: "left",
                            paddingRight: "31px",
                          }}
                        >
                          <VATTable>
                            <thead>
                              <tr>
                                <th
                                  colSpan={3}
                                  style={{ borderRight: "1px solid #D9D9D9" }}
                                >
                                  구분
                                </th>
                                <th>금액</th>
                                <th>세율</th>
                                <th>세액</th>
                              </tr>
                            </thead>
                            <tbody>
                              {taxData4.map((item, key) => (
                                <tr>
                                  {key == 0 ? (
                                    <StyledTd
                                      rowSpan={15}
                                      style={{ width: "96px", fontWeight: 500 }}
                                    >
                                      {"가산세\n명세"}
                                    </StyledTd>
                                  ) : (
                                    <></>
                                  )}
                                  <StyledTd style={{ width: "274px" }}>
                                    {item.type}
                                  </StyledTd>
                                  <StyledTd style={{ width: "50px" }}>
                                    ({item.num})
                                  </StyledTd>
                                  <td style={{ width: "120px" }}>
                                    {item.price}
                                  </td>
                                  <td style={{ width: "120px" }}>
                                    {item.taxRate}
                                  </td>
                                  <td style={{ width: "120px" }}>
                                    {item.texation}
                                  </td>
                                </tr>
                              ))}

                              <tr style={{ background: "#F4F4F4" }}>
                                <StyledTd>합계</StyledTd>
                                <StyledTd style={{ width: "50px" }}>
                                  (79)
                                </StyledTd>
                                <td>0</td>
                                <td></td>
                                <td>0</td>
                              </tr>
                            </tbody>
                          </VATTable>
                        </div>
                        <div
                          style={{
                            width: "auto",
                            marginLeft: "811px",
                            //paddingLeft: "12px",
                          }}
                        >
                          <VATTable>
                            <thead>
                              <tr>
                                <th
                                  colSpan={2}
                                  style={{
                                    borderRight: "1px solid #D9D9D9",
                                    width: "420px",
                                  }}
                                >
                                  구분
                                </th>
                                <th>금액</th>
                                <th>세율</th>
                                <th>세액</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <StyledTd style={{ width: "96px" }} rowSpan={4}>
                                  {"세금계산서\n합계표\n불성실"}
                                </StyledTd>
                                <StyledTd style={{ width: "324px" }}>
                                  미제출
                                </StyledTd>
                                <td style={{ width: "120px" }}>{0}</td>
                                <td style={{ width: "120px" }}>{"0.5/100"}</td>
                                <td style={{ width: "120px" }}>{"0"}</td>
                              </tr>
                              <tr>
                                <StyledTd style={{ width: "324px" }}>
                                  부실 기재
                                </StyledTd>
                                <td>{0}</td>
                                <td>{"0.5/100"}</td>
                                <td>{"0"}</td>
                              </tr>
                              <tr>
                                <StyledTd style={{ width: "324px" }}>
                                  지연 제출
                                </StyledTd>
                                <td>{0}</td>
                                <td>{"0.5/100"}</td>
                                <td>{"0"}</td>
                              </tr>
                              <tr style={{ background: "#F4F4F4" }}>
                                <StyledTd style={{ width: "324px" }}>
                                  합계
                                </StyledTd>
                                <td>{0}</td>
                                <td>{""}</td>
                                <td>{"0"}</td>
                              </tr>
                            </tbody>
                          </VATTable>

                          <VATTable style={{ marginTop: "24px" }}>
                            <tbody>
                              <tr>
                                <StyledTd style={{ width: "96px" }} rowSpan={5}>
                                  {"신고\n불성실"}
                                </StyledTd>
                                <StyledTd style={{ width: "324px" }}>
                                  무신고(일반)
                                </StyledTd>
                                <td>{0}</td>
                                <td>{""}</td>
                                <td>{"0"}</td>
                              </tr>
                              <tr>
                                <StyledTd style={{ width: "324px" }}>
                                  무신고(부당)
                                </StyledTd>
                                <td>{0}</td>
                                <td>{""}</td>
                                <td>{"0"}</td>
                              </tr>
                              <tr>
                                <StyledTd style={{ width: "324px" }}>
                                  과소/초과환급신고(일반)
                                </StyledTd>
                                <td>{0}</td>
                                <td>{""}</td>
                                <td>{"0"}</td>
                              </tr>
                              <tr>
                                <StyledTd style={{ width: "324px" }}>
                                  과소/초과환급신고(일반)
                                </StyledTd>
                                <td>{0}</td>
                                <td>{""}</td>
                                <td>{"0"}</td>
                              </tr>
                              <tr style={{ background: "#F4F4F4" }}>
                                <StyledTd style={{ width: "324px" }}>
                                  합계
                                </StyledTd>
                                <td>{0}</td>
                                <td>{""}</td>
                                <td>{"0"}</td>
                              </tr>
                            </tbody>
                          </VATTable>
                        </div>
                      </div>
                    ),
                  }[popUpType]
                }
              </div>
              <div
                style={{
                  marginTop: "40px",
                  float: "right",
                  marginRight: "6px",
                }}
              >
                <HcButton
                  styles="primary"
                  style={{ marginRight: "12px" }}
                  size="big"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  확인
                </HcButton>
                <HcButton
                  styles="line"
                  size="big"
                  style={{ border: "0.82197px solid #A7A7A7" }}
                >
                  취소
                </HcButton>
              </div>
            </PopupInner>
          </PopupContainer>
        ) : (
          <></>
        )}
      </>
    );
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <ComponentWrapper style={{ width: "100%", display: "block" }}>
          <div style={{ display: "block", width: "100%" }}>
            <HcTitleTextField titleName="부가세 신고" isBackIcon={false} />
            <div style={{ marginTop: "37px" }}>
              <BorderWrapper>
                <div style={{ display: "inline-block" }}>
                  <Title>조회 기간</Title>
                  <div>
                    <HcDateRangePicker />
                  </div>
                </div>
              </BorderWrapper>
              <div
                style={{ width: "100%", display: "block", marginTop: "24px" }}
              >
                <div
                  style={{
                    width: "790px",
                    float: "left",
                    minHeight: "800px",
                    borderRight: "1px solid #CECECE",
                    paddingRight: "11px",
                  }}
                >
                  <VATTable>
                    <thead>
                      <tr>
                        <th
                          colSpan={4}
                          style={{ borderRight: "1px solid #D9D9D9" }}
                        >
                          구분
                        </th>
                        <th>금액</th>
                        <th>세율</th>
                        <th>세액</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: "#F9F9F9" }}>
                        <StyledTd
                          rowSpan={9}
                          style={{ width: "96px", fontWeight: 500 }}
                        >
                          {"과세 표준\n및\n매출 세액"}
                        </StyledTd>
                        <StyledTd rowSpan={4}>과세</StyledTd>
                        <StyledTd style={{ width: 177 }}>
                          세금 계산서 발급분
                        </StyledTd>
                        <StyledTd style={{ width: "50px" }}>(1)</StyledTd>
                        <td style={{ textAlign: "end" }}>117,912</td>
                        <td>10/100</td>
                        <td style={{ textAlign: "end", width: "120px" }}>
                          11,792
                        </td>
                      </tr>
                      <tr>
                        <StyledTd>매입자 발행 세금계산서</StyledTd>
                        <StyledTd>(2)</StyledTd>
                        <td style={{ textAlign: "end" }}>0</td>
                        <td>10/100</td>
                        <td style={{ textAlign: "end" }}>0</td>
                      </tr>
                      <tr>
                        <StyledTd>{"신용카드 / 현금영수증\n발행분"}</StyledTd>
                        <StyledTd>(3)</StyledTd>
                        <td style={{ textAlign: "end" }}>0</td>
                        <td>10/100</td>
                        <td style={{ textAlign: "end" }}>0</td>
                      </tr>
                      <tr>
                        <StyledTd>{"기타\n(정규 영수증 외 매출분)"}</StyledTd>
                        <StyledTd>(4)</StyledTd>
                        <td style={{ textAlign: "end" }}>0</td>
                        <td>10/100</td>
                        <td style={{ textAlign: "end" }}>0</td>
                      </tr>
                      <tr>
                        <StyledTd rowSpan={2}>영세</StyledTd>
                        <StyledTd>세금계산서 발급분</StyledTd>
                        <StyledTd>(5)</StyledTd>
                        <td style={{ textAlign: "end" }}>117,912</td>
                        <td>0/100</td>
                        <td style={{ background: "#F9F9F9" }}></td>
                      </tr>
                      <tr>
                        <StyledTd>기타</StyledTd>
                        <StyledTd>(6)</StyledTd>
                        <td style={{ textAlign: "end" }}>117,912</td>
                        <td>0/100</td>
                        <td style={{ background: "#F9F9F9" }}></td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={2}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("2");
                            }}
                          >
                            예정 신고 누락분
                          </span>
                        </StyledTd>
                        <StyledTd>(7)</StyledTd>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("2");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("2");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={2}>대손 세액 가감</StyledTd>
                        <StyledTd>(8)</StyledTd>
                        <td style={{ textAlign: "end" }}>0</td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>0</td>
                      </tr>
                      <tr style={{ background: "#F4F4F4" }}>
                        <StyledTd colSpan={2}>합계</StyledTd>
                        <StyledTd>(9)</StyledTd>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          117,912
                        </td>
                        <td style={{ fontWeight: 700 }}>(가)</td>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          11,792
                        </td>
                      </tr>
                      {/*매입 세액 */}
                      <tr>
                        <StyledTd
                          rowSpan={9}
                          style={{ width: "96px", fontWeight: 500 }}
                        >
                          {"매입 세액"}
                        </StyledTd>
                        <StyledTd rowSpan={3}>{"세금계산서\n수취분"}</StyledTd>
                        <StyledTd>일반매입</StyledTd>
                        <StyledTd>(10)</StyledTd>
                        <td style={{ textAlign: "end" }}>52,151,000</td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>52,151,000</td>
                      </tr>
                      <tr>
                        <StyledTd>수출기업 수입분 납부 유예</StyledTd>
                        <StyledTd>(10-1)</StyledTd>
                        <td style={{ background: "#F4F4F4" }}></td>
                        <td style={{ background: "#F4F4F4" }}></td>
                        <td>
                          <input
                            style={{
                              width: "108px",
                              height: "32px",
                              textAlign: "right",
                              padding: "5px",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <StyledTd>고정자산 매입</StyledTd>
                        <StyledTd>(11)</StyledTd>
                        <td style={{ textAlign: "end" }}>0</td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>0</td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={2}>{"예정 신고 누락분"}</StyledTd>
                        <StyledTd>(12)</StyledTd>
                        <td style={{ textAlign: "end" }}>
                          <Link to={"#"}>{"0"}</Link>
                        </td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>
                          <Link to={"#"}>{"0"}</Link>
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={2}>
                          {"매입자 발행 세금 계산서"}
                        </StyledTd>
                        <StyledTd>(13)</StyledTd>
                        <td style={{ textAlign: "end" }}>{"0"}</td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>{"0"}</td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={2}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("5");
                            }}
                          >
                            기타 공제 매입 세액
                          </span>
                        </StyledTd>
                        <StyledTd>(14)</StyledTd>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("5");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("5");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={2}>
                          {"합계[{(10)-(10-1)}+(11)+(12)+(13)+(14)]"}
                        </StyledTd>
                        <StyledTd>(15)</StyledTd>
                        <td style={{ textAlign: "end" }}>{"52,151,000"}</td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>{"52,151,000"}</td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={2}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("6");
                            }}
                          >
                            공제 받지 못할 매입 세액
                          </span>
                        </StyledTd>
                        <StyledTd>(16)</StyledTd>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("6");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("6");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                      </tr>
                      <tr style={{ background: "#F4F4F4" }}>
                        <StyledTd colSpan={2}>{"차감계[(15)-(16)]"}</StyledTd>
                        <StyledTd>(17)</StyledTd>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          {"52,151,000"}
                        </td>
                        <td style={{ fontWeight: 700 }}>{"(나)"}</td>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          {"52,151,000"}
                        </td>
                      </tr>
                      <tr style={{ background: "#F4F4F4" }}>
                        <StyledTd colSpan={5}>
                          {"납부(환급) 세액 [매출세액 (가) - 매입세액 (나)]"}
                        </StyledTd>
                        <td style={{ fontWeight: 700 }}>{"(다)"}</td>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          {"-52,151,000"}
                        </td>
                      </tr>
                      {/*경감 공제 세액 */}
                      <tr>
                        <StyledTd rowSpan={3} style={{ fontWeight: 500 }}>
                          {"경감\n공제\n세액"}
                        </StyledTd>
                        <StyledTd colSpan={2}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("7");
                            }}
                          >
                            그 밖의 경감 / 공제 세액
                          </span>
                        </StyledTd>
                        <StyledTd>(18)</StyledTd>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("7");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                        <td></td>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("7");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={2}>
                          {"신용카드 매출 전표 등 발행 공제 등"}
                        </StyledTd>
                        <StyledTd>(19)</StyledTd>
                        <td style={{ textAlign: "end" }}>{"0"}</td>
                        <td></td>
                        <td>
                          {" "}
                          <input
                            style={{
                              width: "108px",
                              height: "32px",
                              textAlign: "right",
                              padding: "5px",
                            }}
                          />
                        </td>
                      </tr>
                      <tr style={{ background: "#F4F4F4" }}>
                        <StyledTd colSpan={2}>{"합계"}</StyledTd>
                        <StyledTd>(20)</StyledTd>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          {"0"}
                        </td>
                        <td style={{ fontWeight: 700 }}>{"(라)"}</td>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          {"0"}
                        </td>
                      </tr>
                      {/*20번 이후 */}
                      <tr>
                        <StyledTd colSpan={3}>
                          {"소규모 개인 사업자 부가가치세 감면 세액"}
                        </StyledTd>
                        <StyledTd>(20-1)</StyledTd>
                        <td style={{ textAlign: "end" }}>{"0"}</td>
                        <td>{"(마)"}</td>
                        <td style={{ textAlign: "end" }}>{"0"}</td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={3}>
                          {"예정 신고 미환급 세액"}
                        </StyledTd>
                        <StyledTd>(21)</StyledTd>
                        <td style={{ background: "#F9F9F9" }}></td>
                        <td>{"(바)"}</td>
                        <td>
                          {" "}
                          <input
                            style={{
                              width: "108px",
                              height: "32px",
                              textAlign: "right",
                              padding: "5px",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={3}>{"예정 고지 세액"}</StyledTd>
                        <StyledTd>(22)</StyledTd>
                        <td style={{ background: "#F9F9F9" }}></td>
                        <td>{"(사)"}</td>
                        <td>
                          {" "}
                          <input
                            style={{
                              width: "108px",
                              height: "32px",
                              textAlign: "right",
                              padding: "5px",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={3}>
                          {"사업 양수자의 대리 납부 기납부 세액"}
                        </StyledTd>
                        <StyledTd>(23)</StyledTd>
                        <td style={{ background: "#F9F9F9" }}></td>
                        <td>{"(아)"}</td>
                        <td>
                          {" "}
                          <input
                            style={{
                              width: "108px",
                              height: "32px",
                              textAlign: "right",
                              padding: "5px",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={3}>
                          {"매입자 납부 특례 기납부 세액"}
                        </StyledTd>
                        <StyledTd>(24)</StyledTd>
                        <td style={{ background: "#F9F9F9" }}></td>
                        <td>{"(자)"}</td>
                        <td>
                          {" "}
                          <input
                            style={{
                              width: "108px",
                              height: "32px",
                              textAlign: "right",
                              padding: "5px",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={3}>
                          {"신용카드 업자의 대리 납부 기납부 세액"}
                        </StyledTd>
                        <StyledTd>(25)</StyledTd>
                        <td style={{ background: "#F9F9F9" }}></td>
                        <td>{"(차)"}</td>
                        <td>
                          {" "}
                          <input
                            style={{
                              width: "108px",
                              height: "32px",
                              textAlign: "right",
                              padding: "5px",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <StyledTd colSpan={3}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("11");
                            }}
                          >
                            가산 세액계
                          </span>
                        </StyledTd>
                        <StyledTd>(26)</StyledTd>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("11");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                        <td>{"(카)"}</td>
                        <td style={{ textAlign: "end" }}>
                          <span
                            onClick={() => {
                              //history.push(`${match.url}/# `);
                              setIsOpen(true);
                              setPopUpType("11");
                            }}
                            style={{
                              color: " #257cff",
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            0
                          </span>
                        </td>
                      </tr>
                      <tr style={{ height: "64px", background: "#F4F4F4" }}>
                        <StyledTd colSpan={5}>
                          {
                            "차감 / 가감하여 납부할 세액(환급받을 세액)\n[(다)-(라)-(마)-(바)-(사)-(아)-(자)-(차)-(카)]"
                          }
                        </StyledTd>
                        <td style={{ fontWeight: 700 }}>{"(27)"}</td>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          {"-5,203,308"}
                        </td>
                      </tr>
                      <tr style={{ height: "46px", background: "#F4F4F4" }}>
                        <StyledTd colSpan={6} style={{ borderRight: "unset" }}>
                          {"총괄 납부 사업자가 납부할 세액"}
                        </StyledTd>
                        <td style={{ textAlign: "end", fontWeight: 700 }}>
                          {"0"}
                        </td>
                      </tr>
                    </tbody>
                  </VATTable>
                </div>
                <div
                  style={{
                    width: "auto",
                    minHeight: "200px",
                    marginLeft: "790px",
                    paddingLeft: "12px",
                  }}
                >
                  <ContentTitle>전표 내역</ContentTitle>
                  <div
                    style={{
                      marginTop: "4px",
                      width: "inherit",
                    }}
                  >
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
                      <table
                        className="table table-hover"
                        style={{ width: "100%" }}
                      >
                        <thead
                          style={{
                            display: "table",
                            width: "100%",
                            tableLayout: "fixed",
                          }}
                        >
                          <tr>
                            <th style={{ width: "85px" }}>전표 유형</th>
                            <th style={{ width: "101px" }}>상세</th>
                            <th style={{ width: "85px" }}>과세 유형</th>
                            <th style={{ width: "69px" }}>건수</th>
                            <th style={{ width: "85px" }}>공급가액</th>
                            <th style={{ width: "85px" }}>부가세액</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{
                            display: "block",
                            height: 229,
                            overflowX: "hidden",
                          }}
                        >
                          {data.map((item) => (
                            <tr
                              style={{
                                display: "table",
                                width: "100%",
                                tableLayout: "fixed",
                                height: "46px",
                              }}
                            >
                              <td style={{ width: "86px", fontSize: "14px" }}>
                                {item.voucherType}
                              </td>
                              <td style={{ width: "102px", fontSize: "14px" }}>
                                {item.detail}
                              </td>
                              <td style={{ width: "86px", fontSize: "14px" }}>
                                {item.taxType}
                              </td>
                              <td style={{ width: "70px", fontSize: "14px" }}>
                                {item.numberCase}
                              </td>
                              <td style={{ width: "86px", fontSize: "14px" }}>
                                {item.supplyPrice}
                              </td>
                              <td style={{ width: "86px", fontSize: "14px" }}>
                                {item.VAT}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tr
                          style={{
                            display: "table",
                            width: "100%",
                            tableLayout: "fixed",
                            background: "#F4F4F4",
                          }}
                        >
                          <td colSpan={3}>합계</td>
                          <td>50</td>
                          <td>589,560</td>
                          <td>58,960</td>
                        </tr>
                      </table>
                    </TableContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </div>
      <OpenPopUps />
    </>
  );
};

export default VATReporting;
