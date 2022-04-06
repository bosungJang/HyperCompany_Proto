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
          titleName={edit === false ? "급여 계산 상세" : "급여 계산 수정"}
          isBackIcon={true}
        />
        <Link to={"/hr/PayRoll"}>
          <HcButton
            style={{ position: "absolute", top: 44, left: 1242 }}
            styles={"line"}
            size={"small"}
          >
            급여 대장 미리보기
          </HcButton>
        </Link>
        {edit === false ? (
          <>
            <SubHeading
              titleName="7월 급여 계산 요약"
              style={{ marginTop: 59, marginBottom: 28 }}
            />
            <Container style={{ height: 160 }}>
              <Name style={{ left: 80 }}>급여 대상자</Name>
              <Number style={{ left: 80 }}>200명</Number>
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
              <Name style={{ left: 285 }}>실 지급액</Name>
              <Number style={{ left: 285 }}>982,034,271원</Number>
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
              <Name style={{ left: 598 }}>지급 금액(원)</Name>
              <Number style={{ left: 598 }}>752,034,271원</Number>
              <Name style={{ left: 843 }}>수당 금액(원)</Name>
              <Number style={{ left: 843 }}>122,034,271원</Number>
              <Name style={{ left: 1088 }}>공제 금액(원)</Name>
              <Number style={{ left: 1088 }}>122,034,271원</Number>
            </Container>
            <SubHeading
              titleName=" 지급 내역"
              style={{ marginTop: 40, marginBottom: 28 }}
            />

            <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", width: 660 }}>지급 항목</th>
                  <th style={{ textAlign: "center", width: 660 }}>
                    지급 금액(원)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>고정 급여</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>920,954,922</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>기본급</td>
                  <td style={{ textAlign: "right" }}>920,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>식비</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>연구 보조비</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>명절 상여금</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>체력 단련비</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>
                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>변동 급여</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>605,000</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>초과근무수당</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>체력단련비</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>인재추천비</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>선지급금-생일축하금</td>
                  <td style={{ textAlign: "right" }}>50,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>기타수당</td>
                  <td style={{ textAlign: "right" }}>50,000</td>
                </tr>
                <tr style={{ background: " #EFF5FF" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>지급 총액</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>981269107</b>
                  </td>
                </tr>
              </tbody>
            </Table>
            <SubHeading
              titleName="공제 내역"
              style={{ marginTop: 44, marginBottom: 28 }}
            />

            <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", width: 660 }}>지급 항목</th>
                  <th style={{ textAlign: "center", width: 660 }}>
                    지급 금액(원)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>고정 급여</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>920,954,922</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>기본급</td>
                  <td style={{ textAlign: "right" }}>920,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>식비</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>연구 보조비</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>명절 상여금</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>체력 단련비</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>
                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>변동 급여</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>605,000</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>초과근무수당</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>체력단련비</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>인재추천비</td>
                  <td style={{ textAlign: "right" }}>605,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>선지급금-생일축하금</td>
                  <td style={{ textAlign: "right" }}>50,000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>기타수당</td>
                  <td style={{ textAlign: "right" }}>50,000</td>
                </tr>
                <tr style={{ background: " #EFF5FF" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>지급 총액</b>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <b>981269107</b>
                  </td>
                </tr>
              </tbody>
            </Table>
            <SubHeading
              titleName="4대 보험료(회사 부담)"
              style={{ marginTop: 44, marginBottom: 28 }}
            />
            <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", width: 660 }}>지급 항목</th>
                  <th style={{ textAlign: "center", width: 660 }}>
                    지급 금액(원)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "left" }}>기본급</td>
                  <td style={{ textAlign: "right" }}>920,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>식비</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>연구 보조비</td>
                  <td style={{ textAlign: "right" }}>1,954,922</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>명절 상여금</td>
                  <td style={{ textAlign: "right" }}>0</td>
                </tr>

                <tr style={{ background: "#F9F9F9" }}>
                  <td style={{ textAlign: "left" }}>
                    <b>변동 급여</b>
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
                  { to: "1", name: "근무 시간" },
                  { to: "2", name: "소급 급여" },
                  { to: "3", name: "일시 수당" },
                  { to: "4", name: "일시 공제" },
                  { to: "5", name: "급여 대상자" },
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
                      <SubHeading titleName="입사/퇴직/휴직 근무자" />
                      <div
                        style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}
                      >
                        <HcButton
                          styles="secondary"
                          size="medium"
                          style={{ marginBottom: 12 }}
                        >
                          +생성
                        </HcButton>
                      </div>
                    </Container>
                    <Container style={{ marginTop: 24, height: 404 }}>
                      <SubHeading titleName="재직 근무자" />
                      <div
                        style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}
                      >
                        <HcButton
                          styles="secondary"
                          size="medium"
                          style={{ marginBottom: 12 }}
                        >
                          +생성
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
              수정
            </HcButton>
            <HcButton
              onClick={() => setEdit(false)}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              삭제
            </HcButton>
            <HcButton
              onClick={() => setbarOpen(false)}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              취소
            </HcButton>
          </>
        </div>
      </HcBottomBar>
    </>
  );
};

export default PayCalcDetail;
