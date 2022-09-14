import React from "react";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";

let num = 1000000;
const getId = () => {
  num = num + 1;
  return num;
};

const data = Array(10)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    content: "직무 생성",
    before: ["-"],
    after: ["기능직/조장", "기능직/공장장"],
    date: "2022.01.01",
  }));

const ProfessionalHistory = () => {
  const [tableData, setTableData] = React.useState(data);

  return (
    <>
      {" "}
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="직능 수정 이력" isBackIcon />
        <TableSetting
          search
          perPage={10}
          dataLength={tableData.length}
          now={1}
          style={{ marginTop: "47px" }}
        />
        <HcTableContainer style={{ marginTop: "20px", width: "100%" }}>
          <HcTable style={{ width: "unset", tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "330px" }}>수정 내용</th>
                <th style={{ width: "330px" }}>수정 전 정보</th>
                <th style={{ width: "330px" }}>수정 후 정보</th>
                <th style={{ width: "330px" }}>수정일</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 1 ? (
                tableData.map(({ date, after, before, content }) => (
                  <tr
                    style={{
                      minHeight: "46px",
                      maxHeight: "fit-content",
                    }}
                    onClick={() => {}}
                  >
                    <td>{content}</td>
                    <td>
                      {before.length > 1
                        ? before.map((i) => <p>{i}</p>)
                        : before}
                    </td>
                    <td>
                      {after.length > 1
                        ? after.map((i) => <p>• {i}</p>)
                        : after}
                    </td>
                    <td>{date}</td>
                  </tr>
                ))
              ) : (
                <NullTbody colspan={4} />
              )}
            </tbody>
          </HcTable>
        </HcTableContainer>
      </ComponentWrapper>
    </>
  );
};

export default ProfessionalHistory;
