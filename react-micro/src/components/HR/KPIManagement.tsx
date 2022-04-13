import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import HcTree from "common/HcTree";
import HcButton from "common/HcButton";
import styled from "styled-components";
import {
  HcTableContainer,
  HcTable,
  TableSelect,
} from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import HcBottomBar from "common/HcBottomBar";
const items = [
  {
    id: "1",
    title: "전체",
  },
  {
    id: "2",
    title: "교육",
  },
  {
    id: "3",
    title: "사업/재무",
  },
  {
    id: "4",
    title: "고객/관리",
  },
  { id: "5", title: "업무 프로세스 개선" },
];
const TreeContainer = styled.div`
  height: 832px;
  width: 312px;
  float: left;
  margin-right: 24px;
`;
let num = 1;
const getId = () => {
  num = num + 1;
  return num;
};
export default function KPIManagement() {
  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  /*Create */
  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: "1",
    title: "전체",
  });
  /* Current Data*/
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(false);
  /*BottomBar */
  const [checkedItem, setCheckedItem]: any = React.useState([]);
  function checkHandler(checked: Boolean, id: Number) {
    if (checked == true) {
      setCheckedItem([...checkedItem, id]);
    } else {
      setCheckedItem(checkedItem.filter((i: number) => i != id));
    }
  }
  function checkAllHandler(checked: Boolean) {
    if (checked) {
      const ids: Number[] = [];
      tableData.forEach((i: any) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  const data = Array(10)
    .fill(undefined)
    .map(() => ({
      id: Number(getId),
      kpiName: "매출목표 달성률",
      group: "사업/재무",
      type: "합산",
      standard: "상향",
      unit: "%",
      comment: "달성한 매출액 / 목표",
    }));

  function Row({ id, kpiName, group, type, standard, unit, comment }: any) {
    return (
      <tr>
        <td>
          <HcCheckBox
            checked={checkedItem.includes(id)}
            onChange={(e) => {
              checkHandler(e.target.checked, id);
            }}
          />
        </td>
        <td>{kpiName}</td>
        <td>{group}</td>
        <td style={{ paddingRight: 0 }}>
          <TableSelect>
            <option>{type}</option>
          </TableSelect>
        </td>
        <td style={{ paddingRight: 0 }}>
          <TableSelect>
            <option>{standard}</option>
            <option>하향</option>
          </TableSelect>
        </td>
        <td style={{ paddingRight: 0 }}>
          <TableSelect>
            <option>{unit}</option>
            <option>%</option>
          </TableSelect>
        </td>
        <td>{comment}</td>
        <td>-</td>
      </tr>
    );
  }
  const [tableData, setTableData] = React.useState(data);
  const [rows, setRows]: any = React.useState(
    tableData.map((row) => (
      <Row
        id={row.id}
        kpiName={row.kpiName}
        group={row.group}
        type={row.type}
        standard={row.standard}
        unit={row.unit}
        comment={row.comment}
      />
    ))
  );

  const onCreate = () => {
    const prev = tableData;
    const prevTableData: any = prev.map((row) => (
      <Row
        id={row.id}
        kpiName={row.kpiName}
        group={row.group}
        type={row.type}
        standard={row.standard}
        unit={row.unit}
        comment={row.comment}
      />
    ));
    const newDataForm = {
      id: Number(getId),
      kpiName: "KPI명 선택",
      group: "사업/재무",
      type: "합산",
      standard: "상향",
      unit: "%",
      comment: "달성한 매출액 / 목표",
    };
    // const newData: any = prev.unshift({
    //   id: newDataForm.id,
    //   kpiName: newDataForm.kpiName,
    //   group: newDataForm.group,
    //   type: newDataForm.type,
    //   standard: newDataForm.standard,
    //   unit: newDataForm.unit,
    //   comment: newDataForm.comment,
    // });
    // setTableData(newData);
    prev.unshift({
      id: newDataForm.id,
      kpiName: newDataForm.kpiName,
      group: newDataForm.group,
      type: "합산",
      standard: "상향",
      unit: "%",
      comment: "달성한 매출액 / 목표",
    });
    setTableData(prev);
    prevTableData.unshift(
      <tr>
        <td>
          <HcCheckBox
            checked={checkedItem.includes(newDataForm.id)}
            onChange={(e: any) => {
              checkHandler(e.target.checked, newDataForm.id);
            }}
          />
        </td>
        <td>
          <TableSelect>
            <option>KPI명 선택</option>
          </TableSelect>
        </td>
        <td>
          <TableSelect>
            <option>KPI 그룹 선택</option>
          </TableSelect>
        </td>
        <td>
          <TableSelect>
            <option>달성 방식 선택</option>
          </TableSelect>
        </td>
        <td>
          <TableSelect>
            <option>기준 선택</option>
          </TableSelect>
        </td>
        <td>
          <TableSelect>
            <option>단위 선택</option>
          </TableSelect>
        </td>
        <td>달성한 매출액 / 목표</td>
        <td>-</td>
      </tr>
    );
    setRows(prevTableData);
  };
  return (
    <>
      <ComponentWrapper style={{ display: "block", position: "relative" }}>
        <HcTitleTextField titleName="KPI관리" isBackIcon={false} />
        <HcButton
          styles="line"
          size="medium"
          style={{ position: "absolute", top: 44, right: 144 }}
        >
          일괄 등록
        </HcButton>
        <HcButton
          styles="line"
          size="medium"
          style={{ position: "absolute", top: 44, right: 40 }}
        >
          내보내기
        </HcButton>
        <div style={{ display: "flex", marginTop: "37px" }}>
          <TreeContainer>
            <HcTree
              items={items}
              title="KPI그룹"
              search={true}
              isCreate={isCreate}
              setIsCreates={setIsCreates}
              placeholder="KPI 그룹 검색"
              currentData={currentData}
              setcurrentData={setcurrentData}
            />
          </TreeContainer>
          {/* table */}
          <div style={{ display: "block" }}>
            <HcButton
              onClick={() => {
                onCreate();
                setbarOpen(true);
              }}
              styles={"secondary"}
              size={"medium"}
              style={{ marginBottom: 20 }}
            >
              +생성
            </HcButton>
            <HcTableContainer style={{ width: 984, maxHeight: 538 }}>
              <HcTable>
                <thead>
                  <tr>
                    <th style={{ minWidth: "46px" }}>
                      <div style={{ paddingTop: 7 }}>
                        <HcCheckBox
                          checked={checkedItem.length > 0 ? true : false}
                          onChange={(e) => checkAllHandler(e.target.checked)}
                        />
                      </div>
                    </th>
                    <th style={{ minWidth: "200px" }}>KPI명</th>
                    <th style={{ minWidth: "130px" }}>KPI 그룹</th>
                    <th style={{ minWidth: "130px" }}>달성 방식</th>
                    <th style={{ minWidth: "130px" }}>기준</th>
                    <th style={{ minWidth: "100px" }}>단위</th>
                    <th style={{ minWidth: "168px" }}>설명</th>
                    <th style={{ minWidth: "80px" }}>-</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </HcTable>
            </HcTableContainer>
          </div>
          {/* table */}
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          <HcButton
            onClick={() => {}}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            저장
          </HcButton>
          <HcButton
            onClick={() => {
              setbarOpen(false);
            }}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            취소
          </HcButton>
        </div>
      </HcBottomBar>
    </>
  );
}
