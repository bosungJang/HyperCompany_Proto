import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import { TableActionBtn } from "common/HcTableComponent";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcPopup } from "common/HcPopup";

import "common/bulkActionTest.scss";
import { HcTabsAdv } from "common/HcTabs";
import HcCheckBox from "common/HcCheckBox";

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
  font-family: Noto Sans KR;
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
  font-family: Noto Sans KR;
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
  font-family: Noto Sans KR;
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
    z-index: 5;
  }
  thead th tr {
    pading-left: 12px;
  }
  tbody tr td {
    pading-left: 12px;
  }
  tbody td {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: left;
    height: 46px !important;
    pading-left: 12px;
  }
`;

let num = 1000000;
const getId = () => {
  num = num + 1;
  return num;
};

const OrganizationType = () => {
  const history = useHistory();
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

  const columns = [
    " ??????",
    "??????",
    "??????",
    "??????",
    "????????????",
    "??????",
    "?????? ??????",
    "?????? ??????",
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

  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */

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
      tableData.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
          <div style={{ display: "block", width: "inheirt" }}>
            <div className="title" style={{ marginBottom: 47, marginTop: 20 }}>
              <HcTitleTextField titleName="?????? ??????" isBackIcon={false} />
            </div>

            <div style={{ marginTop: "39px" }}>
              <HcTabsAdv
                items={[
                  { to: "1", name: "?????? ??????" },
                  { to: "2", name: "?????? ??????" },
                ]}
                size="normal"
                TabNumber={Tabs}
                SetTabNumber={setTabs}
              />
            </div>
            <div style={{ display: "flex", marginTop: "32px" }}>
              {
                {
                  "1": (
                    <>
                      <TableContainer>
                        <table
                          className="table table-hover"
                          style={{
                            width: "inherit",
                            tableLayout: "fixed",
                          }}
                        >
                          <thead>
                            <tr>
                              {columns.map((column: any) => (
                                <th style={{ paddingLeft: 12 }} key={column}>
                                  {column}
                                </th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {tableData.map((x) => (
                              <tr
                                style={{
                                  textAlign: "center",
                                  height: 46,
                                }}
                                onClick={() => {
                                  console.log(
                                    tableData.filter((i) => i.id === x.id)
                                  );
                                  history.push({
                                    pathname: "/hr/tam/LeaveDetail",
                                  });
                                }}
                              >
                                {" "}
                                <td
                                  style={{
                                    width: 120,
                                    minWidth: 120,
                                    height: 46,
                                    paddingLeft: 12,
                                  }}
                                >
                                  ?????????
                                </td>
                                <td
                                  style={{
                                    width: 180,
                                    minWidth: 180,
                                    paddingLeft: 12,
                                  }}
                                >
                                  AB ?????? / AB2???
                                </td>
                                <td
                                  style={{
                                    width: 122,
                                    maxWidth: 122,
                                    paddingLeft: 12,
                                  }}
                                >
                                  ?????????
                                </td>
                                <td
                                  style={{
                                    width: 122,
                                    minWidth: 122,
                                    paddingLeft: 12,
                                  }}
                                >
                                  ?????????
                                </td>
                                <td
                                  style={{
                                    width: 122,
                                    maxWidth: 122,
                                    paddingLeft: 12,
                                  }}
                                >
                                  2022.01.02
                                </td>
                                <td
                                  style={{
                                    width: 232,
                                    maxWidth: 232,
                                    paddingLeft: 12,
                                  }}
                                >
                                  2022.01.04~2022.01.05
                                </td>
                                <td>??????</td>
                                <td
                                  style={{
                                    width: 122,
                                    maxWidth: 122,
                                    paddingLeft: 12,
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
                                </td>{" "}
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
                      </TableContainer>
                    </>
                  ),
                  "2": (
                    <div style={{ display: "block" }}>
                      <HcButton
                        styles={"line"}
                        size={"medium"}
                        style={{
                          marginBottom: "20px",
                          display: checkedItem.length > 0 ? "" : "none",
                        }}
                        onClick={() => {
                          history.push({ pathname: "/hr/tam/PromoteLeave" });
                        }}
                      >
                        ?????? ?????? ??????
                      </HcButton>
                      <TableContainer>
                        <table
                          className="table table-hover"
                          style={{
                            width: "inherit",
                            tableLayout: "fixed",
                          }}
                        >
                          <thead>
                            <tr>
                              <th style={{ paddingLeft: 12 }}>
                                <div style={{ paddingTop: 7 }}>
                                  <HcCheckBox
                                    checked={
                                      checkedItem.length > 0 ? true : false
                                    }
                                    onChange={(e) =>
                                      checkAllHandler(e.target.checked)
                                    }
                                  />
                                </div>
                              </th>
                              <th>??????</th>
                              <th>??????</th>
                              <th>??????</th>
                              <th>??????</th>
                              <th>?????????</th>
                              <th>?????? ??????</th>
                              <th>?????? ??????</th>
                              <th>??? ??????</th>
                              <th>?????? ??????</th>
                              <th>?????? ??????</th>
                            </tr>
                          </thead>

                          <tbody>
                            {tableData.map((x) => (
                              <tr
                                style={{
                                  textAlign: "center",
                                  height: 46,
                                }}
                              >
                                <td style={{ paddingLeft: 12 }}>
                                  <HcCheckBox
                                    checked={checkedItem.includes(x.id)}
                                    onChange={(e) => {
                                      checkHandler(e.target.checked, x.id);
                                    }}
                                  />
                                </td>
                                <td
                                  style={{
                                    width: 120,
                                    minWidth: 120,
                                    height: 46,
                                    paddingLeft: 12,
                                  }}
                                >
                                  ?????????
                                </td>
                                <td
                                  style={{
                                    width: 180,
                                    minWidth: 180,
                                    paddingLeft: 12,
                                  }}
                                >
                                  AB ?????? / AB2???
                                </td>
                                <td style={{}}>??????</td>
                                <td
                                  style={{
                                    width: 122,
                                    maxWidth: 122,
                                    paddingLeft: 12,
                                  }}
                                >
                                  ?????????
                                </td>
                                <td
                                  style={{
                                    width: 122,
                                    minWidth: 122,
                                    paddingLeft: 12,
                                  }}
                                >
                                  13???
                                </td>
                                <td
                                  style={{
                                    width: 122,
                                    maxWidth: 122,
                                    paddingLeft: 12,
                                    color: "#05A850",
                                    fontWeight: 700,
                                  }}
                                >
                                  10???
                                </td>
                                <td
                                  style={{
                                    width: 232,
                                    maxWidth: 232,
                                    paddingLeft: 12,
                                  }}
                                >
                                  3???
                                </td>
                                <td>5???</td>
                                <td
                                  style={{
                                    width: 122,
                                    maxWidth: 122,
                                    paddingLeft: 12,
                                  }}
                                >
                                  3???
                                </td>
                                <td
                                  style={{ color: "#05A850", fontWeight: 700 }}
                                >
                                  2???
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </TableContainer>
                    </div>
                  ),
                }[Tabs]
              }
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
