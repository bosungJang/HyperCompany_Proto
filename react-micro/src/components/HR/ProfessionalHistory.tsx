import React from "react";

import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import { TableActionBtn } from "common/HcTableComponent";

import "common/bulkActionTest.scss";

const TableContainer = styled.div`
  width: 100%;
  height: 722px;
  overflow-x: auto;
  overflow-y: auto;
  float: left;
  margin-top: 101px;
  &::-webkit-scrollbar-track {
    background: none;
    position: absolute;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: none;
    position: absolute;
  }
  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }

  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
    text-align: left;
    height: 32px;
  }
  tbody td {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: left;
    height: 46px !important;
  }
`;

let num = 1000000;
const getId = () => {
  num = num + 1;
  return num;
};

const data = Array(10)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    kind: "근무 배치",
    comment:
      "발령 이전과 비교해서 직책, 직급, 직위, 호봉 등이 변동이 있을때 사용하는 발령",
    action: <TableActionBtn />,
  }));

const OrganizationType = () => {
  const columns = ["수정직능", "개편내용", "수정일"];

  const [tableData, setTableData] = React.useState(data);

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <div style={{ display: "block", width: 1320, marginTop: 20 }}>
            <HcTitleTextField titleName="직능 수정 이력" isBackIcon />

            <div style={{ display: "flex" }}>
              <TableContainer>
                <table
                  className="table table-hover"
                  style={{ width: "unset", tableLayout: "fixed" }}
                >
                  <thead>
                    <tr style={{ paddingLeft: 12 }}>
                      {columns.map((column: any) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  {/* <tbody>{rows}</tbody> */}
                  <tbody>
                    {tableData.map((x) => (
                      <tr
                        style={{
                          //   textAlign: "center",
                          height: 137,
                          paddingLeft: 12,
                        }}
                        onClick={() => {}}
                      >
                        <td style={{ width: 160, minWidth: 160 }}>직무</td>
                        <td style={{ width: 1000, minWidth: 1000 }}>
                          전략 기획 직무 삭제 디자인 / 기타 → 디자인 / 연구 개발
                          직무 유형 수정 기술 영업 직무 생성
                        </td>
                        <td
                          style={{
                            width: 160,
                            maxWidth: "unset",
                            minWidth: 160,
                            overflow: "hidden",
                          }}
                        >
                          2021.01.01
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableContainer>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default OrganizationType;
