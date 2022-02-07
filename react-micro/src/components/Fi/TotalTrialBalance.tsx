import React from "react";
import { Link, Route } from "react-router-dom";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import { HcDateRangePicker } from "common/HcDatePicker";
import { HcTabsAdv } from "common/HcTabs";
import styled from "styled-components";
import "common/Table.css";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";

const TableContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
  overflow-x: hidden;

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

const data = [
  {
    debitBalance: "121,476,000",
    debitTotal: "121,476,000",
    accountSubject: "유동 자산",
    creditTotal: "106,000",
    creditBalance: "106,000",
  },
  {
    debitBalance: "110,976,000",
    debitTotal: "110,976,000",
    accountSubject: "당좌 자산",
  },
  {
    debitBalance: "12,800,000",
    debitTotal: "12,800,000",
    accountSubject: "현금",
  },
  {
    debitBalance: "38,950,000",
    debitTotal: "38,950,000",
    accountSubject: "당좌 예금",
  },
  {
    debitBalance: "41,626,000",
    debitTotal: "41,626,000",
    accountSubject: "보통 예금",
  },
  {
    debitBalance: "7,000,000",
    debitTotal: "7,000,000",
    accountSubject: "단기매매증권",
  },
  {
    debitBalance: "8,200,000",
    debitTotal: "8,200,000",
    accountSubject: "외상 매출금",
  },
  {
    accountSubject: "대손충당금",
    creditTotal: "106,000",
    creditBalance: "106,000",
  },
];

const TotalTrialBalance = () => {
  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
          <div style={{ display: "block", width: "inherit" }}>
            <HcTitleTextField titleName="합계잔액시산표" isBackIcon={false} />
            <div style={{ marginTop: "59px" }}>
              <div
                style={{
                  color: "#656565",
                  fontSize: "13px",
                  fontFamily: "Noto Sans KR",
                  fontWeight: 400,
                  marginBottom: "10px",
                }}
              >
                조회기간
              </div>
              <div style={{ display: "inline-flex" }}>
                <HcDateRangePicker />
              </div>
              <div style={{ marginTop: "24px" }}>
                <HcTabsAdv
                  items={[
                    { to: "1", name: "관리용" },
                    { to: "2", name: "제출용" },
                  ]}
                  size="normal"
                  TabNumber={Tabs}
                  SetTabNumber={setTabs}
                />
                <div
                  className="body_area"
                  style={{ display: "flex", marginTop: "20px" }}
                >
                  {
                    {
                      "1": (
                        <>
                          <TableContainer>
                            <table style={{ width: "inherit" }}>
                              <thead>
                                <tr>
                                  <th colSpan={2}>차변</th>
                                  <th rowSpan={2}>계정과목</th>
                                  <th colSpan={2}>대변</th>
                                </tr>
                                <tr>
                                  <th style={{ color: "#636363" }}>잔액</th>
                                  <th style={{ color: "#636363" }}>합계</th>
                                  <th style={{ color: "#636363" }}>잔액</th>
                                  <th style={{ color: "#636363" }}>합계</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.map(
                                  ({
                                    debitBalance,
                                    debitTotal,
                                    accountSubject,
                                    creditTotal,
                                    creditBalance,
                                  }) => (
                                    <tr
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      <td>
                                        {debitBalance != null
                                          ? debitBalance
                                          : ""}
                                      </td>
                                      <td>
                                        {debitTotal != null ? debitTotal : ""}
                                      </td>
                                      <td>{accountSubject}</td>
                                      <td>
                                        {creditTotal != null ? creditTotal : ""}
                                      </td>
                                      <td>
                                        {creditBalance != null
                                          ? creditBalance
                                          : ""}
                                      </td>
                                    </tr>
                                  )
                                )}
                                <tr
                                  style={{
                                    textAlign: "center",
                                    background: "#EDEDED",
                                    fontFamily: "Noto Sans KR",
                                    fontWeight: 400,
                                  }}
                                >
                                  <td>202,908,000</td>
                                  <td>202,908,000</td>
                                  <td>합계</td>
                                  <td>202,908,000</td>
                                  <td>202,908,000</td>
                                </tr>
                              </tbody>
                            </table>
                          </TableContainer>
                        </>
                      ),
                      "2": <div>제출용</div>,
                    }[Tabs]
                  }
                </div>
              </div>
            </div>
          </div>
        </ComponentWrapper>
        <HcBottomBar open={true}>
          <div>
            <HcButton
              onClick={() => {}}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              마감
            </HcButton>
          </div>
        </HcBottomBar>
      </div>
    </>
  );
};

export default TotalTrialBalance;
