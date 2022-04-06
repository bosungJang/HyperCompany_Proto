import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import { TableActionBtn } from "common/HcTableComponent";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcPopup } from "common/HcPopup";
import HcCheckBox from "common/HcCheckBox";
import { EditText, EditTextarea } from "react-edit-text";
import "common/bulkActionTest.scss";

const startEditActions = ["click", "dblClick"];
const TableContainer = styled.div`
  width: 100%;
  height: 722px;
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
    name: "신정",
    kind: "근무 배치",
    comment:
      "발령 이전과 비교해서 직책, 직급, 직위, 호봉 등이 변동이 있을때 사용하는 발령",
    note: "-",
    action: <TableActionBtn />,
  }));

const LeaveSetting = () => {
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
    <div style={{ marginTop: 7, marginLeft: 16 }}>
      {" "}
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "휴가 구분",
    "휴가 항목 코드",
    "휴가 항목명",
    "사용여부",
    "설명",
    "-",
  ];
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  const [tableData, setTableData] = React.useState(data);

  const history = useHistory();
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <div style={{ display: "block", width: 1320 }}>
            <HcTitleTextField titleName="휴무일 설정" isBackIcon={false} />
            <HcButton
              onClick={() => {
                history.push({
                  pathname: "/hr/hrLeaveSettingCreate",
                });
              }}
              styles="secondary"
              style={{
                marginTop: "39px",
                marginBottom: "20px",
              }}
              size="medium"
            >
              +생성
            </HcButton>
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
                    {tableData.map((x) => (
                      <tr
                        style={{
                          textAlign: "center",
                          backgroundColor: checkedItem.includes(x.id)
                            ? "#DFECFF"
                            : "",
                        }}
                        onClick={() => {}}
                      >
                        <td style={{ width: 46, padding: "7px 16px 9px 16px" }}>
                          <HcCheckBox
                            checked={checkedItem.includes(x.id)}
                            onChange={(e) => {
                              checkHandler(e.target.checked, x.id);
                            }}
                          />
                        </td>
                        <td
                          style={{ width: 140, minWidth: 140 }}
                          onClick={() => {
                            history.push({
                              pathname: "/hr/hrLeaveSettingDetail",
                            });
                          }}
                        >
                          회사 지정 휴가
                        </td>
                        <td
                          onClick={() => {
                            history.push({
                              pathname: "/hr/hrLeaveSettingDetail",
                            });
                          }}
                          style={{ width: 140, minWidth: 140 }}
                        >
                          1000001
                        </td>
                        <td
                          onClick={() => {
                            history.push({
                              pathname: "/hr/hrLeaveSettingDetail",
                            });
                          }}
                          style={{ width: 140, minWidth: 140 }}
                        >
                          리프레시
                        </td>
                        <td
                          onClick={() => {
                            history.push({
                              pathname: "/hr/hrLeaveSettingDetail",
                            });
                          }}
                          style={{ width: 120, minWidth: 120 }}
                        >
                          사용{" "}
                        </td>
                        <td
                          onClick={() => {
                            history.push({
                              pathname: "/hr/hrLeaveSettingDetail",
                            });
                          }}
                          style={{
                            width: 614,
                            maxWidth: "unset",
                            minWidth: 614,
                            overflow: "hidden",
                            height: 46,
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            wordBreak: "break-all",
                          }}
                        >
                          피로한 몸과 마음에 활력을 주기 위해 갖는 장기 유급휴가
                        </td>
                        <td style={{ width: 120, minWidth: 120 }}>
                          {x.action}
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

export default LeaveSetting;
