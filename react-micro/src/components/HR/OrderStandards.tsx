import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcPopup } from "common/HcPopup";
import HcCheckBox from "common/HcCheckBox";

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

const OrderStadards = () => {
  const [test, setTest] = useState("test");
  const [focusedType, setFocusedType] = useState("");
  const [focusedComment, setFocusedComment] = useState("");
  const typeInputRef = useRef<any>(null);
  const [isTypeEdit, setIsTypeEdit] = useState(true);
  const [checkedItem, setCheckedItem]: any = useState([]);
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
        <td>
          <div style={{ paddingTop: 4 }}>
            <HcCheckBox
              checked={checkedItem.includes(id)}
              onChange={(e) => {
                checkHandler(e.target.checked, id);
              }}
            />
          </div>
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
    prev.unshift({
      id: getId(),
      kind: " ",
      comment: "",
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

  const handleTypeChange = (index: any, e: any) => {
    let prev = [...tableData];
    prev[index].kind = e.target.value;
    setTableData(prev);
  };
  const handleCommentChange = (index: any, e: any) => {
    let prev = [...tableData];
    prev[index].comment = e.target.value;
    setTableData(prev);
  };
  const renderRows = () => {
    return tableData.map(({ id, kind, comment, action }, index) => (
      <tr style={{ backgroundColor: "none" }}>
        <td>
          <div style={{ paddingTop: 4 }}>
            <HcCheckBox
              checked={checkedItem.includes(id)}
              onChange={(e) => {
                checkHandler(e.target.checked, id);
                onCreate();
              }}
            />
          </div>
        </td>
        <td>{id}</td>
        <td
          style={{ maxWidth: 322, position: "relative" }}
          onClick={() => {
            if (!isTypeEdit) setIsTypeEdit(true);
          }}
        >
          <EditInput
            placeholder="정보를 입력하세요"
            value={kind}
            onChange={(e) => {
              handleTypeChange(index, e);
            }}
            style={{
              border:
                focusedType === String(index) ? "1px solid #257CFF" : "none",
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                // e.target.blur();
              }
            }}
            onFocus={() => setFocusedType(String(index))}
            onBlur={() => {
              setFocusedType("");
            }}
          />
        </td>
        <td
          style={{
            width: 510,
            position: "relative",
          }}
        >
          <EditInput
            placeholder="정보를 입력하세요"
            value={comment}
            onChange={(e) => {
              handleCommentChange(index, e);
            }}
            style={{
              border:
                focusedComment === String(index) ? "1px solid #257CFF" : "none",
            }}
            onFocus={() => setFocusedComment(String(index))}
            onBlur={() => {
              setFocusedComment("");
            }}
          />
        </td>
        <td>{action}</td>
      </tr>
    ));
  };
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <div style={{ display: "block", width: 1320 }}>
            <HcTitleTextField titleName="발령 기준 설정" isBackIcon={false} />
            <div
              style={{
                display: "flex",
                marginTop: "39px",
                marginBottom: "20px",
              }}
            >
              <HcButton
                onClick={onCreate}
                styles="secondary"
                style={{
                  marginRight: 1100,
                }}
                size="medium"
              >
                +생성
              </HcButton>

              <TableSetting />
            </div>
            <div style={{ display: "flex" }}>
              <HcTableContainer style={{ width: 1320 }}>
                <HcTable>
                  <thead>
                    <tr>
                      <th style={{ width: 46 }}>
                        <div style={{ paddingTop: 4 }}>
                          <HcCheckBox
                            checked={checkedItem.length > 0 ? true : false}
                            onChange={(e) => checkAllHandler(e.target.checked)}
                          />
                        </div>
                      </th>
                      <th style={{ width: 322 }}>발명 종류 코드</th>
                      <th style={{ width: 322 }}>발령 종류명</th>
                      <th style={{ width: 510 }}>설명</th>
                      <th style={{ width: 120 }}>-</th>
                    </tr>
                  </thead>
                  {/* <tbody>{rows}</tbody> */}
                  <tbody>{renderRows()}</tbody>
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

export default OrderStadards;
