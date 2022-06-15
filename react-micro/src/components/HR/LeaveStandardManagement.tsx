import React from "react";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import { TableActionBtn } from "common/HcTableComponent";
import { useHistory } from "react-router-dom";
import HcCheckBox from "common/HcCheckBox";
import "common/bulkActionTest.scss";

import "common/bulkActionTest.scss";

const TableContainer = styled.div`
  width: 100%;
  height: 722px;
  margin-top: 52px;
  overflow-x: auto;
  overflow-y: auto;
  float: left;
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
    kind: "월급제",
    comment: "당월",
    month: "1일",
    year: "365일",
    date: "1일",
    action: <TableActionBtn />,
  }));

const LeaveStadards = () => {
  const history = useHistory();
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
      data.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  const columns = [
    <div style={{ marginTop: 7, marginLeft: 12 }}>
      {" "}
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "연월차 기준 코드",
    "급여 형태",
    "월차 발생 기준월",
    "월차 발생일",
    "연차 발생 최소일",
    "연차 발생일",
    "-",
  ];
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  const [modalOpen, setModalOpen] = React.useState(false);
  const [tableData, setTableData] = React.useState(data);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <div style={{ display: "block", width: 1320, paddingTop: 20 }}>
            <HcTitleTextField titleName="연월차 설정" isBackIcon={false} />

            <div style={{ display: "flex" }}>
              <TableContainer>
                <table
                  className="table table-hover"
                  style={{ width: "unset", tableLayout: "fixed" }}
                >
                  <thead>
                    <tr>
                      {columns.map((column: any) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  {/* <tbody>{rows}</tbody> */}
                  <tbody>
                    {tableData.map(
                      ({
                        id,
                        kind,
                        comment,
                        action,
                        month,
                        year,
                        date,
                      }: any) => (
                        <tr
                          style={{
                            textAlign: "center",
                          }}
                          onClick={() => {
                            history.push({
                              pathname: "/hr/hrLeaveStandardDetail",
                            });
                          }}
                        >
                          <td
                            style={{ width: 46, padding: "7px 16px 9px 12px" }}
                            onClick={(event) => event?.stopPropagation()}
                          >
                            <HcCheckBox
                              checked={checkedItem.includes(id)}
                              onChange={(e) => {
                                checkHandler(e.target.checked, id);
                              }}
                            />
                          </td>
                          <td style={{ width: 192, minWidth: 192, height: 46 }}>
                            {id}
                          </td>
                          <td style={{ width: 192, minWidth: 192 }}>{kind}</td>
                          <td style={{ width: 192, minWidth: 192 }}>
                            {comment}
                          </td>
                          <td style={{ width: 192, minWidth: 192, height: 46 }}>
                            {month}
                          </td>
                          <td style={{ width: 192, minWidth: 192, height: 46 }}>
                            {year}
                          </td>
                          <td style={{ width: 192, minWidth: 192, height: 46 }}>
                            {date}
                          </td>
                          <td style={{ width: 120, minWidth: 120, height: 46 }}>
                            {action}
                          </td>
                        </tr>
                      )
                    )}
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

export default LeaveStadards;
