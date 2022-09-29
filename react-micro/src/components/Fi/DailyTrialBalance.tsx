import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  Wrapper,
  Title,
  HcTitleTextField,
} from "common/HcTextField";
import { HcDateRangePicker } from "common/HcDatePicker";

const SearchAreaWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 30px 40px;
  margin-bottom: 24px;
`;

const TableContainer = styled.div`
  width: 100%;
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

const datas = Array(11)
  .fill(undefined)
  .map(() => ({
    accountTitle: "당좌예금",
    debit: {
      total: 556456000,
      transfer: 131643510,
      cash: 433821490,
    },
    crdit: {
      total: 236510000,
      transfer: 131643510,
      cash: 104866490,
    },
  }));

const DailyTrialBalance = () => {
  const [data, setData] = React.useState([]);
  const [sumData, setSumData] = React.useState({
    debitTotalSum: 0,
    debitTransferSum: 0,
    debitCashSum: 0,
    creditTotalSum: 0,
    creditTransferSum: 0,
    creditCashSum: 0,
  });
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper
          style={{ width: "inheirt", display: "block", paddingTop: "36px" }}
        >
          <div style={{ display: "block", width: "inherit" }}>
            <HcTitleTextField titleName="합계잔액 시산표" isBackIcon={false} />
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
                    <Wrapper>
                      <Title required={false}>{"기수 적용 기간"}</Title>
                      <div style={{ marginTop: "5px", width: "360px" }}>
                        <HcDateRangePicker />
                      </div>
                    </Wrapper>
                  </div>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                    }}
                  ></div>
                </VariableMultiLayout>
              </SearchAreaWrapper>
              <div
                className="body_area"
                style={{ display: "block", marginTop: "24px" }}
              >
                <TableContainer>
                  <table
                    style={{
                      width: "inherit",
                      marginTop: "20px",
                      border: "1px solid #D9D9D9",
                    }}
                    //className="table table-hover"
                  >
                    <thead>
                      <tr>
                        <th colSpan={3}>{"차변"}</th>
                        <th rowSpan={2}>{"계정 과목"}</th>
                        <th colSpan={3}>{"대변"}</th>
                      </tr>
                      <tr>
                        <th>{"합계"}</th>
                        <th>{"대체"}</th>
                        <th>{"현금"}</th>

                        <th>{"합계"}</th>
                        <th>{"대체"}</th>
                        <th>{"현금"}</th>
                      </tr>
                    </thead>

                    {data.length == 0 ? (
                      <tbody style={{ height: "551px" }}>
                        <tr
                          style={{
                            background: "#FFFFFF",
                          }}
                        >
                          <td colSpan={7} style={{ textAlign: "center" }}>
                            내역이 없습니다.
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {datas.map((item) => {
                          return (
                            <tr
                              style={{ textAlign: "end", background: "white" }}
                            >
                              <td>{item.debit.total}</td>
                              <td>{item.debit.transfer}</td>
                              <td>{item.debit.cash}</td>
                              <td style={{ textAlign: "center" }}>
                                <span>{item.accountTitle}</span>
                              </td>
                              <td>{item.crdit.total}</td>
                              <td>{item.crdit.transfer}</td>
                              <td>{item.crdit.cash}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    )}
                    <tr
                      style={{
                        background: "#F4F4F4",
                        height: " 46px",
                        textAlign: "end",
                      }}
                    >
                      <td>{data.length == 0 ? "" : sumData.debitTotalSum}</td>
                      <td>
                        {data.length == 0 ? "" : sumData.debitTransferSum}
                      </td>
                      <td>{data.length == 0 ? "" : sumData.debitCashSum}</td>
                      <td style={{ textAlign: "center" }}>합계</td>
                      <td>{data.length == 0 ? "" : sumData.creditTotalSum}</td>
                      <td>
                        {data.length == 0 ? "" : sumData.creditTransferSum}
                      </td>
                      <td>{data.length == 0 ? "" : sumData.creditCashSum}</td>
                    </tr>
                  </table>
                </TableContainer>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default DailyTrialBalance;
