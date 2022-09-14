import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import { useState } from "react";
import { HcTitleTextField } from "common/HcTextField";
import { ComponentWrapper } from "common/HcCommonLayout";

export default function OrganizationHistory() {
  return (
    <ComponentWrapper
      style={{ height: "fit-content", minHeight: "972px", display: "block" }}
    >
      <HcTitleTextField titleName="조직 개편 이력" isBackIcon />
      <TableSetting
        style={{ margin: "47px 0px 20px 0px" }}
        search
        perPage={5}
        dataLength={10}
        now={1}
      />
      <HcTableContainer style={{ width: "100%" }}>
        <HcTable>
          <thead>
            <tr>
              <th style={{ width: 195 }}>조직 개편일</th>
              <th style={{ width: 240 }}>개편내용</th>
              <th style={{ width: 345 }}>개편 전 정보</th>
              <th style={{ width: 345 }}>개편 후 정보</th>
              <th style={{ width: 195 }}>수정일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021.01.01</td>
              <td>조직 생성</td>
              <td>-</td>
              <td>-</td>
              <td>2022.01.01</td>
            </tr>
          </tbody>
        </HcTable>
      </HcTableContainer>
    </ComponentWrapper>
  );
}
