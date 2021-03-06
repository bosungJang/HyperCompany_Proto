import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField, SubHeading } from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";

import HcButton from "common/HcButton";
const Container = styled.div`
  background: #ffffff;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 6px;
  position: relative;
  padding: 18px 23px 18px 20px;
`;
const Card = styled.div`
  height: 110px;
  width: 620px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(153, 153, 153, 0.75);
  border-radius: 4px;
  padding: 25px 35px 26px 24px;
  position: relative;
`;
const Shortcuts = styled.div`
  position: absolute;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  top: 18px;
  left: 1206px;
  color: #257cff;
  height: fit-content;
  width: fit-content;
`;

const TaxWon = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 38px;
  position: absolute;
  height: fit-content;
  width: fit-content;
  left: 1118px;
  top: 50px;
  color: #2d2d31;
`;
const Info = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  height: fit-content;
  display: flex;
  width: fit-content;
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
const StyledP = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  text-transform: uppercase;
  color: #2d2d31;
  margin-top: 10px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 10;
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
const PayCalcSummary = () => {
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  const [Complete, setComplete] = useState(false);
  const ShortCutIcon = () => {
    return (
      <>
        {" "}
        <svg
          style={{ marginLeft: 5 }}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.41955 9.67077C4.64736 9.89858 5.01671 9.89858 5.24451 9.67077L8.54427 6.37101L8.54434 6.37094C8.77215 6.14314 8.77215 5.77379 8.54434 5.54598C8.54181 5.54345 8.53925 5.54094 8.53668 5.53846L5.24444 2.24622C5.01664 2.01841 4.64729 2.01841 4.41948 2.24622C4.19168 2.47402 4.19168 2.84337 4.41948 3.07118L7.30684 5.95853L4.41955 8.84582C4.19175 9.07362 4.19175 9.44297 4.41955 9.67077Z"
            fill="#257CFF"
          />
        </svg>
      </>
    );
  };
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
        {Complete === false ? (
          <>
            <HcTitleTextField titleName="?????? ?????? ??????" isBackIcon={true} />
            <HcButton
              style={{ position: "absolute", top: 44, left: 1242 }}
              styles={"line"}
              size={"small"}
            >
              ?????? ?????? ????????????
            </HcButton>
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
              titleName="?????? ??????"
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
          </>
        ) : (
          <>
            <HcTitleTextField
              titleName="?????? ?????? ?????????????????????."
              isBackIcon={false}
            />
            <svg
              style={{ position: "absolute", top: 39, left: 345 }}
              width="44"
              height="42"
              viewBox="0 0 44 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8145 14.9323L27.8873 30.3427L6.29486 36.221L3.77664 32.3684L17.8145 14.9323Z"
                fill="#FF6666"
              />
              <path
                d="M41.6482 26.3733C37.2618 25.553 32.9148 24.9476 28.9057 25.5636C32.8458 26.2588 36.6545 26.3662 41.0362 28.5998C41.1539 27.8588 41.6298 27.2533 41.6482 26.3733Z"
                fill="#FFC738"
              />
              <path
                d="M43.8436 15.2791C42.6446 14.5217 42.1559 14.5627 40.9276 13.7407C37.8654 19.8556 30.2506 22.2693 27.36 23.5617C32.782 22.6922 38.2505 21.4052 43.8436 15.2791Z"
                fill="#00CBD8"
              />
              <path
                d="M24.5735 21.3565C32.2215 18.2982 37.0148 8.81473 37.2968 1.86954C34.558 2.54489 32.8588 2.74214 30.954 1.56399C32.8351 7.50075 30.6364 14.3168 23.9534 21.2251C23.9534 21.2251 23.7979 21.6109 24.5735 21.3565Z"
                fill="#257CFF"
              />
              <path
                d="M23.1425 18.0346C25.3659 14.3867 26.9787 10.6501 26.0098 6.64063C25.0689 7.03884 24.6185 7.56819 23.1624 7.67512C24.6262 11.2746 23.549 14.6207 23.1425 18.0346Z"
                fill="#EF3DA8"
              />
            </svg>
            <Shortcuts style={{ top: 137, left: 1273 }}>
              ?????? ????????????
              <ShortCutIcon />
            </Shortcuts>
            <div style={{ marginTop: 59, marginBottom: 10, display: "flex" }}>
              <SubHeading titleName="?????? ??????" />

              <SubHeading titleName="?????? ??????" style={{ marginLeft: 581 }} />
            </div>
            <div style={{ display: "flex" }}>
              <StyledP>7??? ??????????????? ????????? ??? ????????????.</StyledP>
              <StyledP style={{ marginLeft: 450 }}>
                ???????????? ?????? ????????? ??? ???????????? ????????? ??? ????????????.
                <br />
                ???????????? ?????? ?????? ????????? ?????? ???????????? ????????? ??????????????? ??????
                ????????? ???????????????.
              </StyledP>
            </div>
            <div style={{ display: "flex" }}>
              <Card>
                <SubHeading titleName="7??? ?????? ??????" />
                <svg
                  style={{ top: 35, left: 545, position: "absolute" }}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19.25"
                    stroke="#257CFF"
                    stroke-width="1.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.9726 18.1235C25.2655 18.4164 25.2655 18.8912 24.9726 19.1841L20.3769 23.7799L20.3765 23.7802L20.3764 23.7803C20.0835 24.0732 19.6086 24.0732 19.3157 23.7803L19.3047 23.769L14.7197 19.184C14.4268 18.8911 14.4268 18.4163 14.7197 18.1234C15.0126 17.8305 15.4874 17.8305 15.7803 18.1234L19 21.343L19 11.75C19 11.3358 19.3358 11 19.75 11C20.1642 11 20.5 11.3358 20.5 11.75L20.5 21.5354L23.9119 18.1235C24.2048 17.8306 24.6797 17.8306 24.9726 18.1235ZM13.75 26.3018C13.3358 26.3018 13 26.6375 13 27.0518C13 27.466 13.3358 27.8018 13.75 27.8018H26.25C26.6642 27.8018 27 27.466 27 27.0518C27 26.6375 26.6642 26.3018 26.25 26.3018H13.75Z"
                    fill="#257CFF"
                  />
                </svg>

                <Info style={{ color: "#5D5D62", marginTop: 8 }}>
                  ????????? : 2022.07.25
                </Info>
              </Card>
              <Card style={{ marginLeft: 50 }}>
                <SubHeading titleName="7??? ?????? ?????? ?????? ?????????" />
                <svg
                  style={{ top: 35, left: 545, position: "absolute" }}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19.25"
                    stroke="#257CFF"
                    stroke-width="1.5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.9726 18.1235C25.2655 18.4164 25.2655 18.8912 24.9726 19.1841L20.3769 23.7799L20.3765 23.7802L20.3764 23.7803C20.0835 24.0732 19.6086 24.0732 19.3157 23.7803L19.3047 23.769L14.7197 19.184C14.4268 18.8911 14.4268 18.4163 14.7197 18.1234C15.0126 17.8305 15.4874 17.8305 15.7803 18.1234L19 21.343L19 11.75C19 11.3358 19.3358 11 19.75 11C20.1642 11 20.5 11.3358 20.5 11.75L20.5 21.5354L23.9119 18.1235C24.2048 17.8306 24.6797 17.8306 24.9726 18.1235ZM13.75 26.3018C13.3358 26.3018 13 26.6375 13 27.0518C13 27.466 13.3358 27.8018 13.75 27.8018H26.25C26.6642 27.8018 27 27.466 27 27.0518C27 26.6375 26.6642 26.3018 26.25 26.3018H13.75Z"
                    fill="#257CFF"
                  />
                </svg>
                <Info style={{ color: "#5D5D62", marginTop: 8 }}>
                  ????????? : 2022.07.25
                </Info>
              </Card>
            </div>
            <SubHeading
              titleName="?????? ????????? ??????"
              style={{ marginTop: 60, marginBottom: 18 }}
            />
            <Container style={{ height: 106, marginBottom: 12 }}>
              <SubHeading titleName="?????????" style={{ fontSize: "18px" }} />
              <TaxWon>122,034,271???</TaxWon>
              <Shortcuts>
                ????????? ????????????
                <ShortCutIcon />
              </Shortcuts>
              <Info style={{ color: "#F93737", marginTop: 22 }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: 1, marginRight: 8 }}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.8327 8.99996C15.8327 12.7739 12.7733 15.8333 8.99935 15.8333C5.2254 15.8333 2.16602 12.7739 2.16602 8.99996C2.16602 5.22601 5.2254 2.16663 8.99935 2.16663C12.7733 2.16663 15.8327 5.22601 15.8327 8.99996ZM17.3327 8.99996C17.3327 13.6023 13.6017 17.3333 8.99935 17.3333C4.39698 17.3333 0.666016 13.6023 0.666016 8.99996C0.666016 4.39759 4.39698 0.666626 8.99935 0.666626C13.6017 0.666626 17.3327 4.39759 17.3327 8.99996ZM9.8847 9.83491C9.85548 10.3024 9.4678 10.6666 8.99938 10.6666C8.53097 10.6666 8.14329 10.3024 8.11407 9.83491L7.81578 5.06234C7.7798 4.48664 8.23701 3.99996 8.81383 3.99996H9.18493C9.76175 3.99996 10.219 4.48664 10.183 5.06234L9.8847 9.83491ZM10.2493 12.75C10.2493 13.4403 9.6897 14 8.99935 14C8.30899 14 7.74935 13.4403 7.74935 12.75C7.74935 12.0596 8.30899 11.5 8.99935 11.5C9.6897 11.5 10.2493 12.0596 10.2493 12.75Z"
                    fill="#F93737"
                  />
                </svg>
                ????????? 10????????? ?????? ?????????.
              </Info>
            </Container>
            <Container style={{ height: 106, marginBottom: 12 }}>
              <SubHeading
                titleName="?????? ?????????"
                style={{ fontSize: "18px" }}
              />
              <TaxWon>122,034,271???</TaxWon>
              <Shortcuts>
                ????????? ????????????
                <ShortCutIcon />
              </Shortcuts>
              <Info style={{ color: "#F93737", marginTop: 22 }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: 1, marginRight: 8 }}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.8327 8.99996C15.8327 12.7739 12.7733 15.8333 8.99935 15.8333C5.2254 15.8333 2.16602 12.7739 2.16602 8.99996C2.16602 5.22601 5.2254 2.16663 8.99935 2.16663C12.7733 2.16663 15.8327 5.22601 15.8327 8.99996ZM17.3327 8.99996C17.3327 13.6023 13.6017 17.3333 8.99935 17.3333C4.39698 17.3333 0.666016 13.6023 0.666016 8.99996C0.666016 4.39759 4.39698 0.666626 8.99935 0.666626C13.6017 0.666626 17.3327 4.39759 17.3327 8.99996ZM9.8847 9.83491C9.85548 10.3024 9.4678 10.6666 8.99938 10.6666C8.53097 10.6666 8.14329 10.3024 8.11407 9.83491L7.81578 5.06234C7.7798 4.48664 8.23701 3.99996 8.81383 3.99996H9.18493C9.76175 3.99996 10.219 4.48664 10.183 5.06234L9.8847 9.83491ZM10.2493 12.75C10.2493 13.4403 9.6897 14 8.99935 14C8.30899 14 7.74935 13.4403 7.74935 12.75C7.74935 12.0596 8.30899 11.5 8.99935 11.5C9.6897 11.5 10.2493 12.0596 10.2493 12.75Z"
                    fill="#F93737"
                  />
                </svg>
                ????????? 10????????? ?????? ?????????.
              </Info>
            </Container>
            <Container style={{ height: 106 }}>
              <SubHeading titleName="4??? ?????????" style={{ fontSize: "18px" }} />
              <TaxWon>122,034,271???</TaxWon>
              <Info style={{ color: "#F93737", marginTop: 22 }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: 1, marginRight: 8 }}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.8327 8.99996C15.8327 12.7739 12.7733 15.8333 8.99935 15.8333C5.2254 15.8333 2.16602 12.7739 2.16602 8.99996C2.16602 5.22601 5.2254 2.16663 8.99935 2.16663C12.7733 2.16663 15.8327 5.22601 15.8327 8.99996ZM17.3327 8.99996C17.3327 13.6023 13.6017 17.3333 8.99935 17.3333C4.39698 17.3333 0.666016 13.6023 0.666016 8.99996C0.666016 4.39759 4.39698 0.666626 8.99935 0.666626C13.6017 0.666626 17.3327 4.39759 17.3327 8.99996ZM9.8847 9.83491C9.85548 10.3024 9.4678 10.6666 8.99938 10.6666C8.53097 10.6666 8.14329 10.3024 8.11407 9.83491L7.81578 5.06234C7.7798 4.48664 8.23701 3.99996 8.81383 3.99996H9.18493C9.76175 3.99996 10.219 4.48664 10.183 5.06234L9.8847 9.83491ZM10.2493 12.75C10.2493 13.4403 9.6897 14 8.99935 14C8.30899 14 7.74935 13.4403 7.74935 12.75C7.74935 12.0596 8.30899 11.5 8.99935 11.5C9.6897 11.5 10.2493 12.0596 10.2493 12.75Z"
                    fill="#F93737"
                  />
                </svg>
                ????????? 10????????? ?????? ?????????.
              </Info>
            </Container>
          </>
        )}
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 50 }}>
        <div>
          {Complete === false ? (
            <>
              <HcButton
                onClick={() => setComplete(true)}
                styles="primary"
                style={{ marginRight: "5px" }}
                size="big"
              >
                ?????? ?????? ??????
              </HcButton>
              <HcButton
                onClick={() => {
                  setbarOpen(true);
                }}
                styles="line"
                style={{ marginRight: "5px" }}
                size="big"
              >
                ??????
              </HcButton>
            </>
          ) : (
            <HcButton
              onClick={() => {}}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
          )}
        </div>
      </HcBottomBar>
    </>
  );
};

export default PayCalcSummary;
