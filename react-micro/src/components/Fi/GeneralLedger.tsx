import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import "common/Table.css";
import HcTextField, {
  Wrapper,
  Title,
  HcTitleTextField,
} from "common/HcTextField";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import { HcTabsAdv } from "common/HcTabs";
import HcTree from "common/HcTree";
import { FilterButton, SettingButton } from "common/HcTableButton";
import { HcDateRangePicker } from "common/HcDatePicker";

const TreeContArea = styled.div`
  width: 100%;
  min-height: 852px;
`;
const SearchAreaWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 30px 40px;
  margin-bottom: 24px;
`;

const TreeContTitle = styled.div`
  font-family: Noto Sans KR;
  font-weight: 400;
  font-size: 20px;
  display: inline-block;
  color: #303030;
  margin-top: 20px;
`;

const TableContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
  overflow-x: hidden;
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
  table {
    border-collapse: collapse;
  }
  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
    height: 32px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #5d5d62;
  }
  tbody tr {
    height: 46px;
    background: #f4f4f4;
  }
  tbody tr td {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    padding: 0px 12px;
  }
`;

const columns = ["회계일자", "차변", "대변", "잔액"];

const data = [
  {
    date: "1월 합계",
    debit: "2,761,400,000",
    credit: "1,000,000",
    remains: "2,760,400,000",
  },
  {
    date: "2월 합계",
    debit: "1,000,000,000",
    credit: "500,000",
    remains: "999,500,000",
  },
];

const accumulateData = [
  {
    date: "1월 누계",
    debit: "2,761,400,000",
    credit: "1,000,000",
    remains: "2,760,400,000",
    detailData: [
      {
        date: "2021.01.03",
        debit: "2,761,400,000",
        credit: "1,000,000",
        remains: "2,760,400,000",
      },
    ],
  },
  {
    date: "2월 누계",
    debit: "1,000,000,000",
    credit: "500,000",
    remains: "999,500,000",
    detailData: [
      {
        date: "2021.02.12",
        debit: "2,761,400,000",
        credit: "1,000,000",
        remains: "2,760,400,000",
      },
      {
        date: "2021.02.24",
        debit: "2,761,400,000",
        credit: "1,000,000",
        remains: "2,760,400,000",
      },
    ],
  },
];

const GeneralLedger = () => {
  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */

  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  /*Create */

  /*Tree*/
  const [items, setItems] = React.useState([
    {
      id: "1000000",
      title: "[1000000] 자산",
      items: [
        {
          id: "110000",
          title: "[110000] 유동 자산",
          items: [
            {
              id: "110001",
              title: "[110001] 현금",
            },
            {
              id: "110002",
              title: "[110002] 현금성 자산",
            },
          ],
        },
        {
          id: "120000",
          title: "[120000] 비유동자산",
          items: [
            {
              id: "120001",
              title: "[120001] 장기금융상품",
            },
            {
              id: "120002",
              title: "[120002] 장기 매출 채권 및 기타 유동채권",
            },
          ],
        },
      ],
    },
    {
      id: "200000",
      title: "[200000] 부채",
      items: [
        { id: "2-1", title: "child 2-1" },
        {
          id: "2-2",
          title: "child 2-2",
        },
      ],
    },
    {
      id: "300000",
      title: "[300000] 자본",
    },
    {
      id: "400000",
      title: "[400000] 매출",
    },
    {
      id: "500000",
      title: "[500000] 매출 원가",
    },
  ]);
  /*Tree*/

  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: "",
    title: "",
  });
  /* Current Data*/

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper
          style={{ width: "inheirt", display: "block", paddingTop: "36px" }}
        >
          <div style={{ display: "block", width: "inherit" }}>
            <HcTitleTextField titleName="총계정 원장" isBackIcon={false} />
            <div style={{ marginTop: "39px" }}>
              <SearchAreaWrapper>
                <VariableMultiLayout>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                      marginRight: "80px",
                    }}
                  >
                    <HcTextField
                      titleName="회계단위"
                      name="financeUnit"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          alert("SUCCESS");
                        }
                      }}
                      placeholder="회계단위 입력"
                      style={{ width: "360px", marginBottom: 20 }}
                      required
                      value={""}
                      onChange={(e) => {
                        /*
                            setcreateData((prevState) => ({
                              ...prevState,
                              accountName: e.target.value,
                            }));
                            */
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                      marginRight: "80px",
                    }}
                  >
                    <HcTextField
                      titleName="계정과목"
                      name="accountTitle"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          alert("SUCCESS");
                        }
                      }}
                      placeholder="계정코드 또는 계정과목명 입력"
                      style={{ width: "360px", marginBottom: 20 }}
                      required
                      value={""}
                      onChange={(e) => {
                        /*
                            setcreateData((prevState) => ({
                              ...prevState,
                              accountName: e.target.value,
                            }));
                            */
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    <Wrapper>
                      <Title required={false}>{"기수 적용 기간"}</Title>
                      <div style={{ marginTop: "5px", width: "360px" }}>
                        <HcDateRangePicker />
                      </div>
                    </Wrapper>
                  </div>
                </VariableMultiLayout>
              </SearchAreaWrapper>
              <HcTabsAdv
                items={[
                  { to: "1", name: "월별 누계" },
                  { to: "2", name: "일별 누계" },
                ]}
                size="normal"
                TabNumber={Tabs}
                SetTabNumber={setTabs}
              />
              <div
                className="body_area"
                style={{ display: "block", marginTop: "24px" }}
              >
                {
                  {
                    "1": (
                      <div>
                        <TreeContArea>
                          <div style={{ marginTop: "29px", width: "inherit" }}>
                            <div
                              style={{
                                display: "inline-flex",
                                float: "right",
                                alignItems: "center",
                              }}
                            >
                              <FilterButton style={{ marginRight: "6px" }} />
                              <SettingButton />
                            </div>
                            <TableContainer>
                              <table
                                style={{ width: "inherit", marginTop: "20px" }}
                                //className="table table-hover"
                              >
                                <thead>
                                  {columns.map((column: any, key) => (
                                    <th key={column}>{column}</th>
                                  ))}
                                </thead>
                                <tbody>
                                  {data.map(
                                    ({ date, debit, credit, remains }) => (
                                      <tr>
                                        <td
                                          style={{
                                            textAlign: "initial",
                                          }}
                                        >
                                          {date}
                                        </td>
                                        <td
                                          style={{
                                            textAlign: "end",
                                          }}
                                        >
                                          {debit}
                                        </td>
                                        <td
                                          style={{
                                            textAlign: "end",
                                          }}
                                        >
                                          {credit}
                                        </td>
                                        <td
                                          style={{
                                            textAlign: "end",
                                          }}
                                        >
                                          {remains}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                  <tr>
                                    <td
                                      style={{
                                        textAlign: "initial",
                                      }}
                                    >
                                      총합계
                                    </td>
                                    <td
                                      style={{
                                        textAlign: "end",
                                      }}
                                    >
                                      3,761,400,000
                                    </td>
                                    <td
                                      style={{
                                        textAlign: "end",
                                      }}
                                    >
                                      1,500,000
                                    </td>
                                    <td
                                      style={{
                                        textAlign: "end",
                                      }}
                                    >
                                      3,759,900,000
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </TableContainer>
                          </div>
                        </TreeContArea>
                      </div>
                    ),
                    "2": (
                      <div>
                        <TreeContArea>
                          <div style={{ marginTop: "29px", width: "inherit" }}>
                            <div
                              style={{
                                display: "inline-flex",
                                float: "right",
                                alignItems: "center",
                              }}
                            >
                              <FilterButton style={{ marginRight: "6px" }} />
                              <SettingButton />
                            </div>
                            <TableContainer>
                              <table
                                style={{ width: "inherit", marginTop: "20px" }}
                              >
                                <thead>
                                  {columns.map((column: any) => (
                                    <th key={column}>{column}</th>
                                  ))}
                                </thead>

                                <tbody>
                                  {accumulateData.map(
                                    ({
                                      date,
                                      debit,
                                      credit,
                                      remains,
                                      detailData,
                                    }) => (
                                      <>
                                        {detailData.map(
                                          ({
                                            date,
                                            debit,
                                            credit,
                                            remains,
                                          }) => (
                                            <>
                                              <tr
                                                style={{ background: "white" }}
                                              >
                                                <td
                                                  style={{
                                                    textAlign: "initial",
                                                    textDecorationLine:
                                                      "underline",
                                                    color: "#257CFF",
                                                  }}
                                                >
                                                  {date}
                                                </td>
                                                <td
                                                  style={{
                                                    textAlign: "end",
                                                  }}
                                                >
                                                  {debit}
                                                </td>
                                                <td
                                                  style={{
                                                    textAlign: "end",
                                                  }}
                                                >
                                                  {credit}
                                                </td>
                                                <td
                                                  style={{
                                                    textAlign: "end",
                                                  }}
                                                >
                                                  {remains}
                                                </td>
                                              </tr>
                                            </>
                                          )
                                        )}
                                        <tr>
                                          <td
                                            style={{
                                              textAlign: "initial",
                                            }}
                                          >
                                            {date}
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "end",
                                            }}
                                          >
                                            {debit}
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "end",
                                            }}
                                          >
                                            {credit}
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "end",
                                            }}
                                          >
                                            {remains}
                                          </td>
                                        </tr>
                                      </>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </TableContainer>
                          </div>
                        </TreeContArea>
                      </div>
                    ),
                  }[Tabs]
                }
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default GeneralLedger;
