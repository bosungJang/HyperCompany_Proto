import React, { useCallback, useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import {
  TableActionBtn,
  HcTableContainer,
  HcTable,
} from "common/HcTableComponent";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcPopup } from "common/HcPopup";
import HcCheckBox from "common/HcCheckBox";
import { EditText, EditTextarea } from "react-edit-text";
import "common/bulkActionTest.scss";

const DropDownContainer = styled("div")`
  width: 122px;
  height: 46px;
  position: relative;

  padding-top: 8px;
`;

const DropDownHeader = styled("div")`
  height: 46px;
  width: 122px;
  background: #f4f4f4;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  padding-top: 13px;
  padding-left: 12px;
  /* identical to box height */

  text-transform: uppercase;
`;
const State = styled.div`
  width: 37px;
  height: 29px;
  padding: 4px;
  border-radius: 2px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
`;
const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  width: 120px;
  position: absolute;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  z-index: 1;
`;

const ListItem = styled("li")`
  //   list-style: none;
  //   margin-bottom: 0.8em;
  background: #ffffff;
  border-radius: 4px;
  height: 42px;
  width: 122px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #3c3c3c;
  &:hover {
    background: #dfecff;
  }
`;
const styles = {
  normal: {
    color: "#09BB5B",
    backgroundColor: "#E7FFF2",
  } as React.CSSProperties,
  leave: {
    color: "#257CFF",
    backgroundColor: "#DFECFF",
  } as React.CSSProperties,
  late: {
    color: "#FFA51F",
    backgroundColor: "#FFF0BB",
  } as React.CSSProperties,
  absent: {
    color: "#FF7D7D",
    backgroundColor: "#FFE9E9",
  } as React.CSSProperties,
};
const options = ["??????", "??????", "??????", "??????", "??????", "??????"];

let num = 1000000;
const getId = () => {
  num = num + 1;
  return num;
};

const OrganizationType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState(
    Array(10)
      .fill(undefined)
      .map(() => ({
        id: getId(),
        kind: "?????? ??????",
        comment:
          "?????? ????????? ???????????? ??????, ??????, ??????, ?????? ?????? ????????? ????????? ???????????? ??????",
        action: <TableActionBtn />,
        isOpen: isOpen,
        selectedOption: "??????",
      }))
  );
  /*select */

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  /*select */
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
    <div style={{ marginTop: 6, marginLeft: 4, width: 46, textAlign: "left" }}>
      {" "}
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    " ??????",
    "??????",
    "??????",
    "??????",
    "?????????",
    "?????? ??????",
    "?????? ??????",
    "?????? ??????",
    "?????? ??????",
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
          <div style={{ display: "block", width: 1320 }}>
            <div className="title" style={{ marginBottom: 47, marginTop: 20 }}>
              {" "}
              <HcTitleTextField titleName="?????? ??????" isBackIcon={false} />
            </div>
            {/* <HcButton
              
              styles="secondary"
              style={{
                marginTop: "39px",
                marginBottom: "20px",
              }}
              size="medium"
            >
              +??????
            </HcButton> */}
            <div style={{ display: "flex" }}>
              <HcTableContainer style={{ height: 722, width: "100%" }}>
                <HcTable style={{ width: 1320, tableLayout: "fixed" }}>
                  <thead style={{ textAlign: "left" }}>
                    <tr>
                      {columns.map((column: any) => (
                        <th key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {tableData.map((x) => (
                      <tr
                        style={{
                          height: 46,
                        }}
                        onClick={() => {
                          console.log(data.filter((i) => i.id === x.id));
                        }}
                      >
                        <td
                          style={{
                            width: 46,
                            padding: "7px 16px 9px 16px",
                            height: 46,
                          }}
                        >
                          <HcCheckBox
                            checked={checkedItem.includes(x.id)}
                            onChange={(e) => {
                              checkHandler(e.target.checked, x.id);
                            }}
                          />
                        </td>
                        <td style={{ minWidth: 120 }}>?????????</td>
                        <td style={{ minWidth: 180 }}>AB ?????? / AB2???</td>
                        <td
                          style={{
                            maxWidth: 122,
                          }}
                        >
                          ?????????
                        </td>
                        <td style={{ minWidth: 122 }}>?????????</td>
                        <td
                          style={{
                            maxWidth: 122,
                          }}
                        >
                          2022.01.02
                        </td>
                        <td
                          style={{
                            maxWidth: 122,
                          }}
                        >
                          <DropDownContainer>
                            {x.isOpen === false ? (
                              <State
                                onClick={() => !x.isOpen}
                                style={
                                  x.selectedOption == "??????"
                                    ? styles.normal
                                    : selectedOption == "??????"
                                    ? styles.late
                                    : selectedOption == "??????"
                                    ? styles.leave
                                    : selectedOption == "??????"
                                    ? styles.absent
                                    : { backgroundColor: "none" }
                                }
                              >
                                {x.selectedOption || "??????"}
                              </State>
                            ) : (
                              <DropDownHeader onClick={() => !x.isOpen}>
                                {x.selectedOption || "??????"}
                              </DropDownHeader>
                            )}
                            {x.isOpen && (
                              <DropDownListContainer>
                                <DropDownList>
                                  {options.map((option) => (
                                    <ListItem
                                      onClick={onOptionClicked(option)}
                                      key={option}
                                    >
                                      {option}
                                    </ListItem>
                                  ))}
                                </DropDownList>
                              </DropDownListContainer>
                            )}
                          </DropDownContainer>
                        </td>
                        <td
                          style={{
                            width: 122,
                            maxWidth: 122,
                          }}
                        >
                          09:00
                        </td>
                        <td
                          style={{
                            width: 122,
                            maxWidth: 122,
                          }}
                        >
                          18:00
                        </td>
                        <td
                          style={{
                            width: 122,
                            maxWidth: 122,
                          }}
                        >
                          9??????00???
                        </td>
                        <td
                          style={{
                            width: 120,
                            maxWidth: 120,
                          }}
                        >
                          {x.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </HcTable>
                <DropDownContainer>
                  {isOpen === false ? (
                    <State
                      style={
                        selectedOption == "??????"
                          ? styles.normal
                          : selectedOption == "??????"
                          ? styles.late
                          : selectedOption == "??????"
                          ? styles.leave
                          : selectedOption == "??????"
                          ? styles.absent
                          : { backgroundColor: "none" }
                      }
                      onClick={toggling}
                    >
                      {selectedOption || "??????"}
                    </State>
                  ) : (
                    <DropDownHeader onClick={toggling}>
                      {selectedOption || "??????"}
                    </DropDownHeader>
                  )}
                  {isOpen && (
                    <DropDownListContainer>
                      <DropDownList>
                        {options.map((option) => (
                          <ListItem
                            onClick={onOptionClicked(option)}
                            key={option}
                          >
                            {option}
                          </ListItem>
                        ))}
                      </DropDownList>
                    </DropDownListContainer>
                  )}
                </DropDownContainer>
              </HcTableContainer>
            </div>
          </div>
          <HcPopup open={modalOpen} close={closeModal} header="??????">
            ?????????????????????????
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
              ??????
            </HcButton>
            <HcButton
              onClick={() => {
                setbarOpen(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
          </div>
        </HcBottomBar>
      </div>
    </>
  );
};

export default OrganizationType;
