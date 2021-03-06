import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField, SubHeading } from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { HcTabsAdv } from "common/HcTabs";
import { Link } from "react-router-dom";
import HcButton from "common/HcButton";
const Container = styled.div`
  background: #ffffff;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 6px;
  position: relative;
  padding: 18px 23px 18px 20px;
`;

const Number = styled.div`
  height: fit-content;
  width: fit-content;
  top: 80px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  position: absolute;
  color: #2d2d31;
`;
const Name = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  height: fit-content;
  width: fit-content;
  color: #838181;
  top: 47px;
  position: absolute;
`;

const Table = styled.table`
  table-layout: fixed;
  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
  td {
    border-bottom: 1px solid #e0e0e0;
    height: 46px;
    padding-left: 12px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
  tr th {
    padding-left: 12px;
    padding-right: 12px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: #636363;
    height: 32px;
  }

  thead > tr {
    height: 32px;
    background-color: #ededed;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;

    color: #464646;
  }
  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  th:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const PayCalcDetail = () => {
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  const [edit, setEdit] = useState(false);
  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */
  return (
    <>
      <ComponentWrapper
        style={{
          padding: 40,
          display: "block",
          position: "relative",
          minHeight: 980,
          paddingBottom: 131,
        }}
      >
        <HcTitleTextField
          titleName={edit === false ? "?????? ?????? ??????" : "?????? ?????? ??????"}
          isBackIcon={true}
        />
        <Link to={"/hr/PayRoll"}>
          <HcButton
            style={{ position: "absolute", top: 44, left: 1242 }}
            styles={"line"}
            size={"small"}
          >
            ?????? ?????? ????????????
          </HcButton>
        </Link>
        {edit === false ? (
          <>
            <SubHeading
              titleName="7??? ?????? ?????? ??????"
              style={{ marginTop: 59, marginBottom: 28 }}
            />
            <Container style={{ height: 160 }}>
              <Name style={{ left: 80 }}>?????? ?????????</Name>
              <Number style={{ left: 80 }}>200???</Number>
              <div
                style={{
                  width: 1,
                  height: 60,
                  position: "absolute",
                  top: 50,
                  left: 218,
                  background: "#E0E0E0",
                }}
              />
              <Name style={{ left: 285 }}>??? ?????????</Name>
              <Number style={{ left: 285 }}>982,034,271???</Number>
              <div
                style={{
                  width: 1,
                  height: 60,
                  position: "absolute",
                  top: 50,
                  left: 517,
                  background: "#E0E0E0",
                }}
              />
              <Name style={{ left: 598 }}>?????? ??????(???)</Name>
              <Number style={{ left: 598 }}>752,034,271???</Number>
              <Name style={{ left: 843 }}>?????? ??????(???)</Name>
              <Number style={{ left: 843 }}>122,034,271???</Number>
              <Name style={{ left: 1088 }}>?????? ??????(???)</Name>
              <Number style={{ left: 1088 }}>122,034,271???</Number>
            </Container>
            <SubHeading
              titleName=" ?????? ??????"
              style={{ marginTop: 40, marginBottom: 28 }}
            />

            <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", width: 660 }}>?????? ??????</th>
                  <th style={{ textAlign: "center", width: 660 }}>
                    ?????? ??????(???)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>?????? ??????</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>920,954,922</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????????</td>
                  <td style={{ textAlign: "right" }}>920,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>??????</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????? ?????????</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????? ?????????</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????? ?????????</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>
                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>?????? ??????</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>605,000</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>??????????????????</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>???????????????</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>???????????????</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>????????????-???????????????</td>
                  <td style={{ textAlign: "right" }}>50,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>????????????</td>
                  <td style={{ textAlign: "right" }}>50,000</td>
                </tr>
                <tr style={{ background: " #EFF5FF" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>?????? ??????</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>981269107</b>
                  </td>
                </tr>
              </tbody>
            </Table>
            <SubHeading
              titleName="?????? ??????"
              style={{ marginTop: 44, marginBottom: 28 }}
            />

            <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", width: 660 }}>?????? ??????</th>
                  <th style={{ textAlign: "center", width: 660 }}>
                    ?????? ??????(???)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>?????? ??????</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>920,954,922</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????????</td>
                  <td style={{ textAlign: "right" }}>920,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>??????</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????? ?????????</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????? ?????????</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????? ?????????</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>
                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>?????? ??????</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>605,000</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>??????????????????</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>???????????????</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>???????????????</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>????????????-???????????????</td>
                  <td style={{ textAlign: "right" }}>50,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>????????????</td>
                  <td style={{ textAlign: "right" }}>50,000</td>
                </tr>
                <tr style={{ background: " #EFF5FF" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>?????? ??????</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>981269107</b>
                  </td>
                </tr>
              </tbody>
            </Table>
            <SubHeading
              titleName="4??? ?????????(?????? ??????)"
              style={{ marginTop: 44, marginBottom: 28 }}
            />
            <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", width: 660 }}>?????? ??????</th>
                  <th style={{ textAlign: "center", width: 660 }}>
                    ?????? ??????(???)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "left" }}>?????????</td>
                  <td style={{ textAlign: "right" }}>920,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>??????</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????? ?????????</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>?????? ?????????</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>

                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>?????? ??????</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>605,000</b>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        ) : (
          <>
            {" "}
            <div style={{ marginTop: "39px" }}>
              <HcTabsAdv
                items={[
                  { to: "1", name: "?????? ??????" },
                  { to: "2", name: "?????? ??????" },
                  { to: "3", name: "?????? ??????" },
                  { to: "4", name: "?????? ??????" },
                  { to: "5", name: "?????? ?????????" },
                ]}
                size="normal"
                TabNumber={Tabs}
                SetTabNumber={setTabs}
              />
            </div>
            {
              {
                "1": (
                  <>
                    <Container style={{ marginTop: 24, height: 404 }}>
                      <SubHeading titleName="??????/??????/?????? ?????????" />
                      <div
                        style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}
                      >
                        <HcButton
                          styles="secondary"
                          size="medium"
                          style={{ marginBottom: 12 }}
                        >
                          +??????
                        </HcButton>
                      </div>
                    </Container>
                    <Container style={{ marginTop: 24, height: 404 }}>
                      <SubHeading titleName="?????? ?????????" />
                      <div
                        style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}
                      >
                        <HcButton
                          styles="secondary"
                          size="medium"
                          style={{ marginBottom: 12 }}
                        >
                          +??????
                        </HcButton>
                      </div>
                    </Container>
                  </>
                ),
                "2": <></>,
              }[Tabs]
            }
          </>
        )}
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 50 }}>
        <div>
          <>
            <HcButton
              onClick={() => setEdit(true)}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
            <HcButton
              onClick={() => setEdit(false)}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
            <HcButton
              onClick={() => setbarOpen(false)}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
          </>
        </div>
      </HcBottomBar>
    </>
  );
};

export default PayCalcDetail;
