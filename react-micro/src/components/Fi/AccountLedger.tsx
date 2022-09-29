import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  Wrapper,
  Title,
  HcTitleTextField,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import HcTree from "common/HcTree";
import { HcDateRangePicker } from "common/HcDatePicker";
import { FilterButton, SettingButton } from "common/HcTableButton";

const TreeContArea = styled.div`
  width: 100%;
  min-height: 852px;
`;

const SearchAreaWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 30px 40px;
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
  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
`;

const columns = [
  "회계단위",
  "회계일자",
  "전표번호",
  "계정과목",
  "거래처명",
  "적요",
  "상세 적요",
  "차변",
  "대변",
  "잔액",
  "작성자",
];

const datas = Array(107)
  .fill(undefined)
  .map(() => ({
    unit: "티맥스비아이",
    date: "2022.1.10",
    number: "20220831-001",
    financeTitle: "현금",
    accountName: "우리은행",
    brief: "외상매출금",
    briefDetail: "외상매출금",
    debit: "1,000,000,000",
    credit: "0",
    remains: "3,000,000,000",
    writer: "홍길동",
  }));

const AccountLedger = () => {
  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  /*Create */

  /*Tree*/
  const [data, setData] = React.useState(datas);
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
            <HcTitleTextField titleName="계정별 원장" isBackIcon={false} />
            <div
              className="body_area"
              style={{ display: "block", marginTop: "39px" }}
            >
              <div>
                <TreeContArea>
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
                  <div style={{ marginTop: "26px", width: "inherit" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        float: "right",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <FilterButton style={{ marginRight: "6px" }} />
                      <SettingButton />
                    </div>
                    <TableContainer style={{ height: "732px" }}>
                      <table
                        className="table table-hover"
                        style={{ minHeight: "573px" }}
                      >
                        <thead>
                          <tr>
                            {columns.map((column: any) => (
                              <th key={column}>{column}</th>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          {data.length != 0 ? (
                            data.map(
                              ({
                                unit,
                                date,
                                number,
                                financeTitle,
                                accountName,
                                brief,
                                briefDetail,
                                debit,
                                credit,
                                remains,
                                writer,
                              }) => (
                                <tr
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <td>{unit}</td>
                                  <td>{date}</td>
                                  <td>
                                    <div
                                      style={{
                                        color: "#257CFF",
                                        textDecorationLine: "underline",
                                        cursor: "pointer",
                                      }}
                                    >
                                      {number}
                                    </div>
                                  </td>
                                  <td>{financeTitle}</td>
                                  <td>{accountName}</td>
                                  <td>{brief}</td>
                                  <td>{briefDetail}</td>
                                  <td>{debit}</td>
                                  <td>{credit}</td>
                                  <td>{remains}</td>
                                  <td>{writer}</td>
                                </tr>
                              )
                            )
                          ) : (
                            <tr>
                              <td colSpan={11} style={{ textAlign: "center" }}>
                                내역이 없습니다.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </TableContainer>
                  </div>
                </TreeContArea>
              </div>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default AccountLedger;
