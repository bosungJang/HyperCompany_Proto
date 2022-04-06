import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcSelect, HcTitleTextField } from "common/HcTextField";
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

const DataGridContainer = styled.div`
  min-height: 630px;
  overflow: auto;
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
    name: "정상",
    Yn: "정상",
    comment:
      "집에 회사와 통신 회선으로 연결된 정보 통신 기기를 설치하여 놓고 집에서 회사의 업무를 보는 일.",

    action: <TableActionBtn />,
  }));

const WorkCategory = () => {
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
    "근무 항목 코드",
    "근무 항목명",
    "사용여부",
    "설명",
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
  const [rows, setRows] = React.useState(
    tableData.map((row) => (
      <Row
        id={row.id}
        name={row.name}
        yn={row.Yn}
        action={row.action}
        comment={row.comment}
      />
    ))
  );
  function Row({ id, comment, action, name, Yn }: any) {
    return (
      <tr
        style={{
          textAlign: "center",
          height: 32,
        }}
        onClick={() => {}}
      >
        <td style={{ width: 46, padding: "7px 16px 9px 16px" }}>
          <HcCheckBox
            checked={checkedItem.includes(id)}
            onChange={(e) => {
              checkHandler(e.target.checked, id);
            }}
          />
        </td>
        <td style={{ width: 332, minWidth: 332 }}>{id}</td>
        <td style={{ width: 332, minWidth: 332 }}>{name}</td>
        <td>{Yn}</td>
        <td
          style={{
            width: 510,
            maxWidth: "unset",
            minWidth: 510,
            overflow: "hidden",
            height: 46,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            wordBreak: "break-all",
          }}
        >
          {comment}
        </td>

        <td style={{ width: 120, minWidth: 120 }}>{action}</td>
      </tr>
    );
  }
  const onCreate = () => {
    const prev = tableData;
    prev.push({
      id: getId(),
      name: "정상",
      Yn: "사용 안함",
      comment: "발령 이전과 비교해서 근무지가 변동되었을때 사용",

      action: <TableActionBtn />,
    });
    setTableData(prev);
    setRows(
      prev.map((row) => (
        <Row
          id={row.id}
          name={row.name}
          yn={row.Yn}
          comment={row.comment}
          action={row.action}
        />
      ))
    );
  };

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <div style={{ display: "block", width: 1320 }}>
            <HcTitleTextField titleName="휴무일 설정" isBackIcon={false} />
            <HcButton
              onClick={onCreate}
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
                        <td style={{ width: 170, minWidth: 170 }}>
                          {" "}
                          <EditText defaultValue={String(x.id)} />
                        </td>
                        <td style={{ width: 170, minWidth: 170 }}>
                          {" "}
                          <EditText defaultValue={String(x.name)} />
                        </td>
                        <td style={{ width: 170, minWidth: 170 }}>
                          <select
                            style={{
                              width: 170,
                              height: 46,
                              border: "none",
                            }}
                          >
                            <option>사용</option>
                            <option>사용 안함</option>
                          </select>
                        </td>
                        <td
                          style={{
                            width: 644,
                            maxWidth: "unset",
                            minWidth: 644,
                            overflow: "hidden",
                          }}
                        >
                          <EditText
                            defaultValue={x.comment}
                            // onChange={() => {
                            //   setTableData({
                            //     ...tableData,
                            //     ...x,
                            //     [x.comment]: "hi",
                            //   });

                            // }}
                          />
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
          <HcPopup open={modalOpen} close={closeModal} header="저장">
            저장하시겠습니까?
          </HcPopup>
        </ComponentWrapper>
        <HcBottomBar open={barOpen} style={{ width: 1400 }}>
          <div>
            <HcButton
              onClick={() => {
                openModal();
              }}
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
      </div>
    </>
  );
};

export default WorkCategory;
