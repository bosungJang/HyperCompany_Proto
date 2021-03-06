import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HcTextField, {
  HcSearchTextField,
  HcTitleTextField,
  Title,
} from "common/HcTextField";
import HcCheckBox from "common/HcCheckBox";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";
import { useCounter } from "router/Root";
import { HcContentPopupAdv } from "common/HcPopup";
import { ReactComponent as WarningIcon } from "resources/images/Warning_Icon.svg";
import "common/Table.css";
import { HcSelect } from "common/HcTextField";

const TableContainer = styled.div`
  width: 100%;
  overflow: overlay;
  overflow-x: hidden;
  margin-top: 20px;

  &::-webkit-scrollbar-track {
    background: none;

    position: absolute;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #f5f5f5;
    display: none;
    &:hover {
      display: inline;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }
`;

const RegisterTitle = styled.div`
  height: 60px;
  width: 400px;
  border-bottom: 1px solid #cecece;
  padding: 12px 14px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
`;

const RegiMidTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #2d2d31;
`;

const VATTable = styled.table`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-spacing: 0;
  border-collapse: collapse;

  tbody td {
    padding: 0px 12px;
    height: 46px;
    font-family: Noto Sans KR;
    font-weight: 400;
    font-size: 14px;
    max-width: unset;
  }

  tbody tr {
    border: 1px solid #d9d9d9;
  }
`;

const StyledTd = styled.td`
  background: #f4f4f4;
  white-space: pre-wrap;
  text-align: initial;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;

const SubInfoTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #5d5d62;

  span {
    color: #f06666;
  }
`;

const columns = [
  "????????????",
  "???????????????",
  "????????????",
  "?????????",
  "?????????",
  "????????????",
];

const OrgData = [
  {
    accountCode: "20002",
    accountName: "??????",
    assetsCode: "42420",
    assetsName: "?????? ??????",
    date: "2015.01.01",
    way: "?????????",
  },
  {
    accountCode: "20004",
    accountName: "?????????",
    assetsCode: "22512",
    assetsName: "?????????",
    date: "2015.01.01",
    way: "?????????",
  },
  {
    accountCode: "20006",
    accountName: "????????????",
    assetsCode: "89522",
    assetsName: "????????????_01",
    date: "2015.01.01",
    way: "?????????",
  },
  {
    accountCode: "20008",
    accountName: "???????????????",
    assetsCode: "14363",
    assetsName: "????????? ??????_K5",
    date: "2015.01.01",
    way: "?????????",
  },
  {
    accountCode: "20008",
    accountName: "???????????????",
    assetsCode: "14243",
    assetsName: "????????? ??????_???..",
    date: "2015.01.01",
    way: "?????????",
  },
  {
    accountCode: "20012",
    accountName: "??????",
    assetsCode: "22306",
    assetsName: "?????????_??????",
    date: "2015.01.01",
    way: "?????????",
  },
  {
    accountCode: "20012",
    accountName: "??????",
    assetsCode: "82723",
    assetsName: "?????????_?????????",
    date: "2015.01.01",
    way: "?????????",
  },
  {
    accountCode: "20040",
    accountName: "???????????????",
    assetsCode: "33828",
    assetsName: "??????????????????",
    date: "2015.01.01",
    way: "?????????",
  },
];

const unRegiData = Array(11)
  .fill(undefined)
  .map(() => ({
    slipDate: "2022.06.08",
    number: "2022 01111111",
    type: "????????????",
    regiDate: "2022.06.08",
    code: "200012",
    accountName: "??????",
    assetsCode: "000004",
    assetsName: "?????????",
    acquisitionDate: "2022.06.08",
    amortization: "?????????",
  }));

const FixedAssetsList = ({ match }: RouteComponentProps) => {
  const myCounter = useCounter();

  myCounter.myTitle = "???????????? ??????";

  const [Tabs, setTabs] = React.useState("1");
  const [openPop, setOpenPop] = React.useState(false);

  const [popUpType, setPopUpType] = React.useState(0);
  const [openPopUps, setOpenPopUps] = React.useState(false);
  const [data, setData] = React.useState(OrgData);

  const OpenPopUp = () => {
    return (
      <>
        <HcContentPopupAdv
          open={openPopUps}
          width={"600px"}
          height={"340px"}
          header={
            {
              0: "?????? ?????? ?????? ????????????",
              1: "?????? ?????? ??????",
              2: "?????? ?????? ??????",
            }[popUpType]
          }
          style={{
            width: "100%",
            position: "unset",
            top: "unset",
            right: "unset",
            marginTop: "24px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          close={() => {
            setOpenPopUps(false);
          }}
        >
          {
            {
              0: (
                <div style={{ marginLeft: "-10px" }}>
                  <SubInfoTitle>
                    ?????? ???????????? ?????? ????????? ?????????????????????????
                  </SubInfoTitle>
                  <SubInfoTitle style={{ marginTop: "8px" }}>
                    <WarningIcon style={{ verticalAlign: "bottom" }} />
                    {"<??????> ???????????? "}
                    <span>??????????????? ????????? ?????? ??????</span>
                    {"?????????."}
                  </SubInfoTitle>
                </div>
              ),
              1: (
                <div style={{ marginLeft: "-10px" }}>
                  <SubInfoTitle>
                    ???????????? ????????? ?????? ??????????????? ?????? ??????????????????.
                  </SubInfoTitle>
                </div>
              ),
              2: (
                <div style={{ marginLeft: "-10px" }}>
                  <SubInfoTitle>
                    ??? 3?????? ??????????????? ?????????????????????????
                  </SubInfoTitle>
                  <SubInfoTitle style={{ marginTop: "8px" }}>
                    ?????????1. ?????????2, ????????? 3
                  </SubInfoTitle>
                </div>
              ),
            }[popUpType]
          }
          <div>
            <div
              style={{
                float: "right",
                position: "absolute",
                bottom: "30px",
                right: "30px",
              }}
            >
              <HcButton
                onClick={() => {}}
                styles="primary"
                style={{ marginRight: "12px", height: "40px", width: "80px" }}
                size="medium"
              >
                ??????
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ height: "40px", width: "80px" }}
                size="medium"
              >
                ??????
              </HcButton>
            </div>
          </div>
        </HcContentPopupAdv>
      </>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <ComponentWrapper style={{ width: "100%", display: "block" }}>
        <div style={{ display: "block", width: "100%" }}>
          <div style={{ marginTop: "36px" }}>
            <HcTitleTextField
              titleName="???????????? ??????"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div style={{ float: "right" }}>
              <HcButton
                onClick={() => {
                  setPopUpType(0);
                  setOpenPopUps(true);
                }}
                styles="line"
                style={{ marginRight: "10px" }}
                size="medium"
              >
                ?????? ?????? ?????? ????????????
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ marginRight: "10px" }}
                size="medium"
              >
                ?????? ??????
              </HcButton>
              <HcButton
                onClick={() => {
                  setOpenPop(true);
                }}
                styles="line"
                style={{}}
                size="medium"
              >
                ?????? ??????
              </HcButton>
            </div>
            <div style={{ width: "100%", display: "block", marginTop: "37px" }}>
              <div
                style={{
                  width: "648px",
                  float: "left",
                  minHeight: "800px",
                  marginRight: "24px",
                }}
              >
                <div>
                  <HcButton
                    onClick={() => {
                      setData([
                        ...data,
                        {
                          accountCode: "",
                          accountName: "",
                          assetsCode: "",
                          assetsName: "",
                          date: "",
                          way: "",
                        },
                      ]);
                    }}
                    styles="secondary"
                    style={{ marginRight: "10px" }}
                    size="medium"
                  >
                    ??????
                  </HcButton>
                  <HcButton
                    onClick={() => {}}
                    styles="line"
                    style={{}}
                    size="medium"
                  >
                    ??????
                  </HcButton>
                </div>
                <TableContainer>
                  <table
                    className="table table-hover"
                    style={{ width: "100%" }}
                  >
                    <thead
                      style={{
                        display: "table",
                        width: "inherit",
                        tableLayout: "fixed",
                      }}
                    >
                      <tr>
                        {columns.map((column: any) => (
                          <th key={column}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        display: "block",
                        overflow: "overlay",
                      }}
                    >
                      {data.map((item) => (
                        <tr
                          style={{
                            display: "table",
                            width: "100%",
                            tableLayout: "fixed",
                            height: "46px",
                          }}
                        >
                          {item.accountCode != "" ? (
                            <>
                              <td style={{ width: "106px", fontSize: "14px" }}>
                                {item.accountCode}
                              </td>
                              <td style={{ width: "106px", fontSize: "14px" }}>
                                {item.accountName}
                              </td>
                            </>
                          ) : (
                            <>
                              <td style={{ fontSize: "14px" }} colSpan={2}>
                                <div>???????????? ??????*</div>
                              </td>
                            </>
                          )}
                          <td style={{ width: "106px", fontSize: "14px" }}>
                            {item.assetsCode != ""
                              ? item.assetsCode
                              : "0000001"}
                          </td>
                          <td style={{ width: "124px", fontSize: "14px" }}>
                            {item.assetsName != "" ? (
                              item.assetsName
                            ) : (
                              <div>????????? ??????*</div>
                            )}
                          </td>
                          <td style={{ width: "106px", fontSize: "14px" }}>
                            {item.date != "" ? item.date : <div>?????????</div>}
                          </td>
                          <td style={{ width: "100px", fontSize: "14px" }}>
                            {item.way != "" ? (
                              item.way
                            ) : (
                              <HcSelect
                                onChange={(e) => {}}
                                titleName=""
                                name={""}
                                style={{
                                  width: "100%",
                                  paddingLeft: "unset",
                                  minWidth: "unset",
                                  border: "unset",
                                }}
                              >
                                <option value="1">?????????</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                              </HcSelect>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableContainer>
              </div>
              <div
                style={{
                  width: "auto",
                  minHeight: "200px",
                  marginLeft: "672px",
                }}
              >
                <HcTabsAdv
                  items={[
                    { to: "1", name: "????????????" },
                    { to: "2", name: "??????????????????" },
                  ]}
                  size="normal"
                  TabNumber={Tabs}
                  SetTabNumber={setTabs}
                />
                {
                  {
                    "1": (
                      <div style={{ marginTop: "20px" }}>
                        <RegisterTitle>{"?????????_?????????"}</RegisterTitle>
                        <RegiMidTitle
                          style={{ marginTop: "24px", marginBottom: "14px" }}
                        >
                          ?????? ?????? ??????
                        </RegiMidTitle>
                        <VATTable>
                          <tbody>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                1.????????????
                              </StyledTd>
                              <td style={{ textAlign: "end" }}>0</td>
                              <StyledTd style={{ width: 162 }}>
                                15.?????????????????????
                              </StyledTd>
                              <td style={{ textAlign: "end" }}>0</td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                2.????????????????????????
                              </StyledTd>
                              <td style={{ textAlign: "end" }}>0</td>
                              <StyledTd style={{ width: 162 }}>
                                16.????????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                  background: "#F9F9F9",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                3.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                17.????????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                4.?????????????????????
                              </StyledTd>
                              <td style={{ textAlign: "end" }}>0</td>
                              <StyledTd style={{ width: 162 }}>
                                18.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                5.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                19.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                6.??????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                20.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                7.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}></StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                8.??????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                21.???????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                9.????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "initial",
                                  width: 162,
                                }}
                              >
                                <HcSelect
                                  onChange={(e) => {}}
                                  titleName=""
                                  name={""}
                                  style={{ width: "100%" }}
                                >
                                  <option value="1">?????????</option>
                                  <option value="2">BMW</option>
                                  <option value="3">Citroen</option>
                                  <option value="4">Ford</option>
                                </HcSelect>
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                22.???????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                10.????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                23.????????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                11.??????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                24.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                12.????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                25.????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "initial",
                                  width: 162,
                                }}
                              >
                                <HcSelect
                                  onChange={(e) => {}}
                                  titleName=""
                                  name={""}
                                  style={{ width: "100%" }}
                                >
                                  <option value="1">?????? ??????</option>
                                  <option value="2">BMW</option>
                                </HcSelect>
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                13.????????????/????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                ????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                14.??????????????????
                              </StyledTd>
                              <td
                                style={{
                                  background: "#F9F9F9",
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                26.????????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "initial",
                                }}
                              >
                                <HcSelect
                                  onChange={(e) => {}}
                                  titleName=""
                                  name={""}
                                  style={{ width: "100%" }}
                                >
                                  <option value="1">???</option>
                                  <option value="2">BMW</option>
                                </HcSelect>
                              </td>
                            </tr>
                          </tbody>
                        </VATTable>
                        <RegiMidTitle
                          style={{ marginTop: "24px", marginBottom: "14px" }}
                        >
                          ?????? ?????? ??????
                        </RegiMidTitle>
                        <VATTable>
                          <tbody>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                1.?????? ??????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                4.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                2.????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "initial",
                                  width: 162,
                                }}
                              >
                                <HcSelect
                                  onChange={(e) => {}}
                                  titleName=""
                                  name={""}
                                  style={{ width: "100%", border: "unset" }}
                                >
                                  <option value="1">800??????</option>
                                  <option value="2">BMW</option>
                                </HcSelect>
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                5.?????????????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                3.??????????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "initial",
                                }}
                              >
                                ?????? ??????
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                6.??????????????????
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "initial",
                                }}
                              >
                                ?????? ??????
                              </td>
                            </tr>
                          </tbody>
                        </VATTable>
                      </div>
                    ),
                    "2": <></>,
                  }[Tabs]
                }
              </div>
            </div>
          </div>
        </div>
        <HcContentPopupAdv
          open={openPop}
          width={"1326px"}
          height={"679px"}
          header={"????????? ???????????? ?????? ????????????"}
          style={{
            width: "100%",
            position: "unset",
            top: "unset",
            right: "unset",
            marginTop: "24px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          close={() => {
            setOpenPop(false);
          }}
        >
          <TableContainer>
            <table className="table table-hover" style={{ width: "100%" }}>
              <thead
                style={{
                  display: "table",
                  width: "100%",
                  tableLayout: "fixed",
                }}
              >
                <tr>
                  <th style={{ width: "46px" }}>
                    <div style={{ paddingTop: 7 }}>
                      <HcCheckBox checked={false} onChange={(e) => {}} />
                    </div>
                  </th>
                  <th>{"?????????"}</th>
                  <th>{"????????????"}</th>
                  <th>{"????????????"}</th>
                  <th>{"?????????"}</th>
                  <th>{"????????????"}</th>
                  <th>{"???????????????"}</th>
                  <th>{"????????????"}</th>
                  <th>{"?????????"}</th>
                  <th>{"?????????"}</th>
                  <th>{"????????????"}</th>
                </tr>
              </thead>

              <tbody
                style={{
                  display: "block",
                  height: 460,
                  overflow: "overlay",
                }}
              >
                {unRegiData.map((item) => (
                  <tr
                    style={{
                      display: "table",
                      width: "100%",
                      tableLayout: "fixed",
                      height: "46px",
                    }}
                  >
                    <td style={{ width: 46, textAlign: "center" }}>
                      <HcCheckBox checked={false} onChange={(e) => {}} />
                    </td>
                    <td>{item.slipDate}</td>
                    <td>{item.number}</td>
                    <td>{item.type}</td>
                    <td>{item.regiDate}</td>
                    <td>{item.code}</td>
                    <td>{item.accountName}</td>
                    <td>{item.assetsCode}</td>
                    <td>{item.assetsName}</td>
                    <td>{item.acquisitionDate}</td>
                    <td>{item.amortization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
          <div>
            <div
              style={{
                float: "right",
                position: "absolute",
                bottom: "30px",
                right: "30px",
              }}
            >
              <HcButton
                onClick={() => {
                  setPopUpType(1);
                  setOpenPopUps(true);
                }}
                styles="primary"
                style={{ marginRight: "10px", height: "40px" }}
                size="medium"
              >
                ???????????? ??????
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ height: "40px" }}
                size="medium"
              >
                ??????
              </HcButton>
            </div>
          </div>
        </HcContentPopupAdv>
        <OpenPopUp />
      </ComponentWrapper>
    </div>
  );
};

export default FixedAssetsList;
