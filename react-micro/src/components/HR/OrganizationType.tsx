import React from "react";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";

import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcPopup } from "common/HcPopup";
import HcCheckBox from "common/HcCheckBox";
import { EditText, EditTextarea } from "react-edit-text";

import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
const EditInput = styled.input`
  box-sizing: border-box;
  background: #ffffff;
  width: 100%;
  height: 100%;
  border: 1px solid #257cff;
  position: absolute;
  top: 0;
  left: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    // background: #eff5ff;
  }
  &:focus {
    outline: none;
  }
  &:placeholder {
    color: #a7a7a7;
  }
  ::selection {
    background: #cee2ff;
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
    <HcCheckBox
      checked={checkedItem.length > 0 ? true : false}
      onChange={(e) => checkAllHandler(e.target.checked)}
    />,
    "조직 유형 코드",
    "조직 유형명",
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
        kind={row.kind}
        action={row.comment}
        comment={row.action}
      />
    ))
  );
  function Row({ id, kind, comment, action }: any) {
    return (
      <tr
        style={{
          textAlign: "center",
          height: 46,
        }}
        onClick={() => {}}
      >
        <td style={{ width: 46, padding: "7px 16px 9px 16px", height: 46 }}>
          <HcCheckBox
            checked={checkedItem.includes(id)}
            onChange={(e) => {
              checkHandler(e.target.checked, id);
            }}
          />
        </td>
        <td style={{ width: 332, minWidth: 332, height: 46 }}>{id}</td>
        <td style={{ width: 332, minWidth: 332 }}>{kind}</td>
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
        <td style={{ width: 120, minWidth: 120, height: 46 }}>{action}</td>
      </tr>
    );
  }
  const onCreate = () => {
    const prev = tableData;
    prev.push({
      id: getId(),
      kind: " ",
      comment: "발령 이전과 비교해서 근무지가 변동되었을때 사용",
      action: <TableActionBtn />,
    });
    setTableData(prev);
    setRows(
      prev.map((row) => (
        <Row
          id={row.id}
          kind={row.kind}
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
            <HcTitleTextField titleName="조직 유형 설정" isBackIcon={false} />
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
              <HcTableContainer style={{ width: "100%" }}>
                <HcTable>
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
                        <td style={{ width: 332, minWidth: 332 }}>
                          {" "}
                          <EditText defaultValue={String(x.id)} />
                        </td>
                        <td style={{ width: 332, minWidth: 332 }}>
                          {" "}
                          <EditText defaultValue={x.kind} />
                        </td>
                        <td
                          style={{
                            width: 510,
                            maxWidth: "unset",
                            minWidth: 510,
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
                </HcTable>
              </HcTableContainer>
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

export default OrganizationType;
