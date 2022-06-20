import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HcTextField, {
  HcSearchTextField,
  HcTitleTextField,
  Title,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";
import { useCounter } from "router/Root";
import "common/Table.css";

const TableContainer = styled.div`
  width: 100%;
  min-height: 674px;
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
  "계정코드",
  "계정과목명",
  "자산코드",
  "자산명",
  "취득일",
  "삼각방법",
];

const FixedAssetsList = ({ match }: RouteComponentProps) => {
  const myCounter = useCounter();

  myCounter.myTitle = "고정자산 목록";

  const [Tabs, setTabs] = React.useState("1");

  return (
    <div style={{ width: "100%" }}>
      <ComponentWrapper style={{ width: "100%", display: "block" }}>
        <div style={{ display: "block", width: "100%" }}>
          <div style={{ marginTop: "36px" }}>
            <HcTitleTextField
              titleName="고정자산 목록"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div style={{ float: "right" }}>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ marginRight: "10px" }}
                size="medium"
                disabled
              >
                전기 이월 정보 불러오기
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ marginRight: "10px" }}
                size="medium"
              >
                일괄 등록
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{}}
                size="medium"
              >
                전표 연동
              </HcButton>
            </div>
            <div style={{ width: "100%", display: "block", marginTop: "37px" }}>
              <div
                style={{
                  width: "648px",
                  float: "left",
                  minHeight: "800px",
                  marginRight: "24px",
                }}
              >
                <div>
                  <HcButton
                    onClick={() => {}}
                    styles="secondary"
                    style={{ marginRight: "10px" }}
                    size="medium"
                  >
                    확인
                  </HcButton>
                  <HcButton
                    onClick={() => {}}
                    styles="line"
                    style={{}}
                    size="medium"
                  >
                    확인
                  </HcButton>
                </div>
                <TableContainer>
                  <table
                    className="table table-hover"
                    style={{ width: "100%" }}
                  >
                    <thead
                      style={{
                        display: "table",
                        width: "inherit",
                        tableLayout: "fixed",
                      }}
                    >
                      <tr>
                        {columns.map((column: any) => (
                          <th key={column}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        display: "block",
                        height: 367,
                        overflow: "auto",
                      }}
                    ></tbody>
                  </table>
                </TableContainer>
              </div>
              <div
                style={{
                  width: "auto",
                  minHeight: "200px",
                  marginLeft: "648px",
                }}
              >
                <HcTabsAdv
                  items={[
                    { to: "1", name: "등록사항" },
                    { to: "2", name: "자산변동사항" },
                  ]}
                  size="normal"
                  TabNumber={Tabs}
                  SetTabNumber={setTabs}
                />
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default FixedAssetsList;
