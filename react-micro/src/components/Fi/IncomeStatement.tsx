import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import "common/Table.css";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import { HcDatePicker, HcDateRangePicker } from "common/HcDatePicker";

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
    subject: "Ⅰ.매출액",
    currentAmount: "",
    priorAmount: "",
    total: "350,000,000",
    subMenu: [
      {
        subject: "제품 매출",
        currentAmount: "",
        priorAmount: "350,000,000",
        total: "350,000,000",
      },
    ],
  },
  {
    subject: "Ⅱ.매출원가",
    currentAmount: "",
    priorAmount: "",
    total: "57,500,000",
    subMenu: [
      {
        subject: "제품매출원가",
        currentAmount: "",
        priorAmount: "",
        total: "57,500,000",
        subMenu: [
          {
            subject: "기초제품재고액",
            currentAmount: "11,200,000",
            priorAmount: "10,000,000",
            total: "",
          },
          {
            subject: "당기제품제조원가",
            currentAmount: "",
            priorAmount: "58,700,000",
            total: "",
          },
        ],
      },
    ],
  },
  {
    subject: "Ⅲ.매출총이익",
    currentAmount: "",
    priorAmount: "",
    total: "292,500,000",
  },
  {
    subject: "Ⅳ.판매비와 관리비",
    currentAmount: "",
    priorAmount: "",
    total: "197,912,000",
    subMenu: [
      {
        subject: "급여",
        currentAmount: "",
        priorAmount: "10,000,000",
        total: "",
      },
      {
        subject: "복리후생비",
        currentAmount: "",
        priorAmount: "58,700,000",
        total: "",
      },
      {
        subject: "여비교통비",
        currentAmount: "",
        priorAmount: "10,000,000",
        total: "",
      },
    ],
  },
];

const IncomeStatement = () => {
  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */

  const tableBodySlot = (item: Object) => {
    function loop(items: any, depth: number) {
      return (
        <>
          {items.map((item: any) => (
            <>
              <tr style={depth == 1 ? { background: "#E7F7F7" } : {}}>
                <td style={{ paddingLeft: depth * 30 + 11 }}>{item.subject}</td>
                <td style={{ textAlign: "center" }}>{item.currentAmount}</td>
                <td
                  style={{
                    width: "220px",
                    textAlign: "end",
                    paddingRight: "11px",
                  }}
                >
                  {item.priorAmount}
                </td>
                <td
                  style={{
                    width: "220px",
                    textAlign: "end",
                    paddingRight: "11px",
                  }}
                >
                  {item.total}
                </td>
              </tr>
              {item.subMenu != null ? loop(item.subMenu, depth + 1) : null}
            </>
          ))}
        </>
      );
    }

    return (
      <>
        {data.map(({ subject, currentAmount, priorAmount, total, subMenu }) => (
          <>
            <tr style={{ background: "#B8E6E9" }}>
              <td style={{ paddingLeft: "11px" }}>{subject}</td>
              <td>{currentAmount}</td>
              <td
                style={{
                  width: "220px",
                  textAlign: "end",
                  paddingRight: "11px",
                }}
              >
                {priorAmount}
              </td>
              <td
                style={{
                  width: "220px",
                  textAlign: "end",
                  paddingRight: "11px",
                }}
              >
                {total}
              </td>
            </tr>
            {subMenu != null ? loop(subMenu, 1) : null}
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
          <div style={{ display: "block", width: "inherit" }}>
            <HcTitleTextField titleName="손익계산서" isBackIcon={false} />
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
                <HcDatePicker />
              </div>
              <div style={{ marginTop: "24px" }}>
                <HcTabsAdv
                  items={[
                    { to: "1", name: "관리용" },
                    { to: "2", name: "제출용" },
                    { to: "3", name: "포괄손익" },
                    { to: "4", name: "표준용" },
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
                            <table
                              className="table table-hover"
                              style={{ width: "inherit" }}
                            >
                              <thead>
                                <tr>
                                  <th style={{ width: "440px" }}>과목</th>
                                  <th style={{ width: "440px" }}>당기금액</th>
                                  <th colSpan={2} style={{ width: "440px" }}>
                                    전기금액
                                  </th>
                                </tr>
                              </thead>
                              <tbody>{tableBodySlot(data)}</tbody>
                            </table>
                          </TableContainer>
                        </>
                      ),
                      "2": (
                        <>
                          <div>2</div>
                        </>
                      ),
                      "3": (
                        <>
                          <div>3</div>
                        </>
                      ),
                      "4": (
                        <>
                          <div>4</div>
                        </>
                      ),
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

export default IncomeStatement;
