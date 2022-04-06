import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField, SubHeading } from "common/HcTextField";
import styled from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { useHistory, Link } from "react-router-dom";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import {
  HcTable,
  HcTableContainer,
  TableActionBtn,
} from "common/HcTableComponent";
const Container = styled.div`
  background: #ffffff;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 20px 24px 30px 24px;
`;

const TableCenter = styled.table`
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
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: #636363;
    height: 32px;
  }
  tr &:hover {
    background-color: #eff5ff;
    transition: all 0.3s ease;
  }
  tr&:active {
    background-color: #cee2ff;
    transition: all 0.3s ease;
  }
  thead tr &:hover {
    background-color: #e0e0e0;
    transition: all 0.3s ease;
  }
  thead > tr:active {
    background-color: #cecece;
    transition: all 0.3s ease;
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
const CenterContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
  z-index: 40;
  &::-webkit-scrollbar {
    position: absolute;
    z-index: 50;
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
  thead {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
`;
const TableContainer = styled(CenterContainer)`
  overflow-x: hidden;
  overflow-y: auto;
`;
const SvgCnt = styled.div`
  position: absolute;
  background: #257cff;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 6px;
  border: 2px solid #ffffff;
`;
const BgCnt = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 3px;
  position: relative;
  margin-left: 25%;
  text-align: center;
  align-items: center;
`;
const styles = {
  none: { background: "#E0E0E0" },
  noneBorder: { background: "#F4F4F4" },
  nowBorder: { background: "#88B8FF" },
  now: { background: "#257CFF" },
  prev: { background: "#88B8FF" },
  prevBorder: { background: "#ADCEFF" },
  p: {
    fontFamily: "Noto Sans KR",
    fontSize: "14px",
    position: "absolute",
    width: "80px",
    height: "fitContent",
  },
};

let num = 1000000;
const getId = () => {
  num = num + 1;
  return num;
};
const data = Array(15)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    action: "-",
  }));
const PayCalculation = () => {
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
  const history = useHistory();
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  /*steps */

  const [steps, setStpes] = useState([
    {
      state: "now",
      name: "1.근무시간",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0C4.0401 0 0 4.0401 0 9C0 13.9599 4.0401 18 9 18C13.9599 18 18 13.9599 18 9C18 4.0401 13.9599 0 9 0ZM9 1.8C12.9871 1.8 16.2 5.01289 16.2 9C16.2 12.9871 12.9871 16.2 9 16.2C5.01289 16.2 1.8 12.9871 1.8 9C1.8 5.01289 5.01289 1.8 9 1.8ZM9 3.6C8.50294 3.6 8.1 4.00294 8.1 4.5V9.37266L11.3273 12.6C11.6788 12.9514 12.2486 12.9514 12.6 12.6C12.9514 12.2486 12.9514 11.6788 12.6 11.3273L9.9 8.62734V4.5C9.9 4.00294 9.49706 3.6 9 3.6Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      state: "none",
      name: "2.소급 급여",
      icon: (
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.30683 4.09645C9.5227 3.8946 9.51848 3.54892 9.28474 3.36807C8.55277 2.80174 7.6995 2.3492 6.56228 2.15467C6.30995 2.11151 6.11607 1.89905 6.11607 1.64306V0.5C6.11607 0.223858 5.89221 0 5.61607 0H4.83036C4.55421 0 4.33036 0.223858 4.33036 0.5V1.67768C4.33036 1.92686 4.14617 2.13573 3.90232 2.18699C1.89392 2.60921 0.625 3.92038 0.625 5.73832C0.625 9.73832 7.52232 9.21495 7.52232 12.243C7.52232 13.4579 6.67411 14.1869 4.93304 14.1869C3.68674 14.1869 2.5807 13.7465 1.55277 13.0998C1.32929 12.9592 1.03361 13.0028 0.870442 13.2104L0.315346 13.9166C0.142233 14.1368 0.18313 14.4575 0.419245 14.6082C1.38734 15.2262 2.63923 15.6959 3.87352 15.8732C4.13085 15.9101 4.33036 16.1251 4.33036 16.3851V17.5C4.33036 17.7761 4.55421 18 4.83036 18H5.61607C5.89221 18 6.11607 17.7761 6.11607 17.5V16.302C6.11607 16.0535 6.29928 15.8448 6.54267 15.7947C8.73611 15.3432 10 13.9747 10 12.0935C10 7.73832 3.10268 8.37383 3.10268 5.64486C3.10268 4.50467 3.99554 3.83177 5.42411 3.83177C6.53468 3.83177 7.2541 4.14508 8.02771 4.70955C8.22804 4.85572 8.50474 4.84647 8.68587 4.6771L9.30683 4.09645Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      state: "none",
      name: "3.일시 수당",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13V8H13C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6H8V1C8 0.447715 7.55228 0 7 0C6.44771 0 6 0.447716 6 1V6H1C0.447715 6 0 6.44772 0 7C0 7.55228 0.447716 8 1 8H6V13Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      state: "none",
      name: "4.일시 공제",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="9" width="14" height="2" rx="1" fill="white" />
        </svg>
      ),
    },
    {
      state: "none",
      name: "5.평가",
      icon: (
        <svg
          style={{ marginTop: "-1px" }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.86206 6.02152L10 1.86007L12.1379 6.02152L12.894 5.6331L12.1379 6.02153C12.334 6.40307 12.6996 6.66876 13.1231 6.73728L17.7415 7.48462L14.4444 10.8039C14.1421 11.1082 14.0024 11.5381 14.0681 11.962L14.7845 16.5853L10.6089 14.4753C10.226 14.2818 9.774 14.2818 9.39114 14.4753L5.21547 16.5853L5.93188 11.962C5.99756 11.5381 5.85788 11.1082 5.55558 10.8039L2.25847 7.48462L6.87691 6.73728C7.30035 6.66876 7.66604 6.40307 7.86206 6.02152Z"
            stroke="white"
            stroke-width="1.7"
          />
        </svg>
      ),
    },
    {
      state: "none",
      name: "6.급여대상자",
      icon: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5ZM13 5C13 7.76142 10.7614 10 8 10C5.23858 10 3 7.76142 3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5ZM2 14C2 13.4477 2.44772 13 3 13H13C13.5523 13 14 13.4477 14 14V16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16V14C16 12.3431 14.6569 11 13 11H3C1.34315 11 0 12.3431 0 14V16C0 16.5523 0.447715 17 1 17C1.55228 17 2 16.5523 2 16V14Z"
            fill="white"
          />
        </svg>
      ),
    },
  ]);
  const StepProgress = steps.map((step) => (
    <li
      style={{
        float: "left",
        display: "block",
        alignItems: "center",
        textAlign: "center",
        marginRight:
          step.name === "5.평가"
            ? 170
            : step.name !== "6.급여대상자"
            ? 160
            : "",
      }}
    >
      <BgCnt
        style={
          step.state === "none"
            ? styles.noneBorder
            : step.state === "prev"
            ? styles.prevBorder
            : styles.nowBorder
        }
      >
        <SvgCnt
          style={
            step.state === "none"
              ? styles.none
              : step.state === "prev"
              ? styles.prev
              : styles.now
          }
        >
          {step.name !== "1.근무시간" ? (
            <div
              style={{
                width: 160,
                height: step.name === "1.근무 시간" ? 0 : 2,
                position: "absolute",
                right:
                  step.name === "1.근무 시간" || "3.일시 수당" || "5.평가"
                    ? 50
                    : step.name === "2.소급 급여"
                    ? 47
                    : 52,

                top: 19,
                background:
                  step.state === "none"
                    ? "#C4C4C4"
                    : step.state === "prev"
                    ? "#ADCEFF"
                    : `linear-gradient(to right, rgb(173, 206, 255) , rgb(87, 153, 251) )`,
              }}
            />
          ) : (
            ""
          )}

          {step.state !== "prev" ? (
            step.icon
          ) : (
            <svg
              style={{ marginTop: "-2px" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.7553 7.31328C18.3654 6.9221 17.7333 6.9221 17.3434 7.31328L10.051 14.63L6.72379 11.2916C6.33392 10.9005 5.70181 10.9005 5.31194 11.2916C4.92206 11.6828 4.92206 12.317 5.31194 12.7082L9.24491 16.6543C9.26234 16.6718 9.28026 16.6885 9.29863 16.7044C9.31353 16.7216 9.32911 16.7383 9.34536 16.7546C9.73524 17.1458 10.3673 17.1458 10.7572 16.7546L18.7553 8.72984C19.1452 8.33867 19.1452 7.70445 18.7553 7.31328Z"
                fill="white"
              />
            </svg>
          )}
        </SvgCnt>
      </BgCnt>{" "}
      <p
        style={{
          color:
            step.state === "none"
              ? "#A7A7A7"
              : step.state === "prev"
              ? "#5799FB"
              : "#257CFF",
          fontFamily: "Noto Sans KR",
          fontSize: "14px",
          width: "fitContent",
          height: "fitContent",
          fontWeight: "bold",
          marginTop: 5,
          paddingLeft: step.name === "5.평가" ? 8 : 0,
        }}
      >
        {step.name}
      </p>
    </li>
  ));
  const [now, setNow] = useState(0);
  const OnNext = () => {
    const Idx = steps.findIndex((x) => x.state === "now");
    if (Idx < 5) {
      const newSteps = [...steps];
      newSteps[Idx].state = "prev";
      newSteps[Idx + 1].state = "now";
      setStpes(newSteps);
      setNow(Idx + 1);
    } else if (now === 5) {
      history.push({ pathname: "/hr/PayCalcSummary" });
    }
  };
  const OnPrev = () => {
    const Idx = steps.findIndex((x) => x.state === "now");
    if (Idx > 0) {
      const newSteps = [...steps];
      newSteps[Idx].state = "none";
      newSteps[Idx - 1].state = "now";
      setNow(Idx - 1);
      setStpes(newSteps);
    }
  };

  /*steps */
  type TableProps = {
    width: any;
    height: any;
  };
  const TestTable = ({ width, height }: TableProps) => {
    // 화면 확인용
    return (
      <TableContainer style={{ width: width, height: height }}>
        <HcTable style={{ tableLayout: "fixed" }}>
          <thead>
            <tr style={{ textAlign: "left" }}>
              <th style={{ width: 46 }}>
                <div style={{ marginTop: 6, marginLeft: 4 }}>
                  <HcCheckBox
                    checked={checkedItem.length > 0 ? true : false}
                    onChange={(e) => checkAllHandler(e.target.checked)}
                  />
                </div>
              </th>
              <th style={{ width: 100 }}>이름</th>
              <th style={{ width: 100 }}>사원번호</th>
              <th style={{ width: 200 }}>법인회사</th>
              <th style={{ width: 160 }}>조직</th>
              <th style={{ width: 100 }}>직책</th>
              <th style={{ width: 100 }}>직위</th>
              <th style={{ width: 254 }}>소급 처리 이유</th>
              <th style={{ width: 140 }}>소급 금액</th>
              <th style={{ width: 120 }}>-</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr>
                <td>
                  <div style={{ marginTop: 7, marginLeft: 4 }}>
                    <HcCheckBox
                      checked={checkedItem.includes(x.id)}
                      onChange={(e) => {
                        checkHandler(e.target.checked, x.id);
                      }}
                    />
                  </div>
                </td>
                <td>홍길동</td>
                <td>{x.id}</td>
                <td>티맥스에이아이</td>
                <td>AI본부 / AI1-2팀</td>
                <td>팀장</td>
                <td>연구원</td>
                <td>신규입사 미정산 급여</td>
                <td>500,000</td>
                <td>
                  <TableActionBtn />
                </td>
              </tr>
            ))}
          </tbody>
        </HcTable>
      </TableContainer>
    );
  };
  const Table = () => {
    return (
      <div style={{ display: "flex", height: 492, overflowY: "auto" }}>
        <div className="table-left" style={{ position: "relative" }}>
          <TableCenter>
            <thead>
              <tr style={{ textAlign: "left" }}>
                <th style={{ width: 46 }}>
                  <div style={{ marginTop: 6, marginLeft: 4 }}>
                    <HcCheckBox
                      checked={checkedItem.length > 0 ? true : false}
                      onChange={(e) => checkAllHandler(e.target.checked)}
                    />
                  </div>
                </th>
                <th style={{ width: 120, minWidth: 120 }}> 이름</th>
                <th style={{ width: 120, minWidth: 120 }}>사원번호</th>
              </tr>
            </thead>

            <tbody>
              {data.map((x) => (
                <tr>
                  <td>
                    <div style={{ marginTop: 7, marginLeft: 4 }}>
                      <HcCheckBox
                        checked={checkedItem.includes(x.id)}
                        onChange={(e) => {
                          checkHandler(e.target.checked, x.id);
                        }}
                      />
                    </div>
                  </td>
                  <td>홍길동</td>
                  <td>{x.id}</td>
                </tr>
              ))}
            </tbody>
          </TableCenter>
        </div>
        <div className="table-center" style={{ width: 834 }}>
          {" "}
          <CenterContainer>
            <TableCenter>
              <thead>
                <tr style={{ textAlign: "left", position: "sticky", top: 0 }}>
                  <th
                    style={{
                      width: 160,
                      minWidth: 160,
                      position: "sticky",
                      top: 0,
                    }}
                  >
                    법인회사
                  </th>

                  <th
                    style={{
                      width: 160,
                      minWidth: 160,
                      position: "sticky",
                      top: 0,
                    }}
                  >
                    조직
                  </th>
                  <th
                    style={{
                      width: 160,
                      minWidth: 160,
                      position: "sticky",
                      top: 0,
                    }}
                  >
                    직책
                  </th>
                  <th
                    style={{
                      width: 160,
                      minWidth: 160,
                      position: "sticky",
                      top: 0,
                    }}
                  >
                    직위
                  </th>
                  <th
                    style={{
                      width: 160,
                      minWidth: 160,
                      position: "sticky",
                      top: 0,
                    }}
                  >
                    근무 상태
                  </th>

                  <th
                    style={{
                      width: 120,
                      minWidth: 120,
                      position: "sticky",
                      top: 0,
                    }}
                  >
                    근무일수
                  </th>
                  <th
                    style={{
                      width: 120,
                      minWidth: 120,
                      position: "sticky",
                      top: 0,
                    }}
                  >
                    기본 근무시간
                  </th>
                </tr>
              </thead>

              <tbody>
                {" "}
                {data.map((x) => (
                  <tr>
                    <td>티맥스에이아이</td>
                    <td>AI본부 / AI1-2팀</td>
                    <td>팀장</td>
                    <td>연구원</td>
                    <td>휴직</td>
                    <td>30</td>
                    <td>160</td>
                  </tr>
                ))}
              </tbody>
            </TableCenter>
          </CenterContainer>
        </div>
        <div className="table-right" style={{ position: "relative" }}>
          <TableCenter>
            <thead>
              {" "}
              <tr>
                <th style={{ width: 120, minWidth: 120 }}> 초과 근무 보상</th>
              </tr>
            </thead>
            <tbody>
              {" "}
              {data.map((x) => (
                <tr>
                  <td>502,000</td>
                </tr>
              ))}
            </tbody>
            {/* <tr>
              <td
                style={{
                  position: "absolute",
                  width: 1240,
                  zIndex: 30,
                  right: 0,
                }}
                colSpan={9}
              >
                총액
              </td>
            </tr> */}
          </TableCenter>
        </div>
      </div>
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
        }}
      >
        <HcTitleTextField titleName="급여 계산" isBackIcon={true} />
        <Link to={"/hr/PayRoll"}>
          <HcButton
            style={{ position: "absolute", top: 44, left: 1242 }}
            styles={"line"}
            size={"small"}
          >
            급여 대장 미리보기
          </HcButton>
        </Link>
        <div
          style={{
            width: 1320,
            height: 115,
            paddingTop: 10,
            marginTop: 59,
          }}
        >
          <ul style={{ marginLeft: 13 }}>{StepProgress}</ul>
        </div>
        <div
          style={{
            width: 1320,
            height: 1,
            background: "#e0e0e0",
          }}
        />
        {now === 0 ? (
          <>
            <Container style={{ marginTop: 24, height: 634 }}>
              <SubHeading titleName="입사/퇴직/휴직 근무자" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton
                  styles="secondary"
                  size="medium"
                  style={{ marginBottom: 12 }}
                >
                  +생성
                </HcButton>
                <Table />
              </div>
            </Container>
            <Container style={{ marginTop: 24, height: 634 }}>
              <SubHeading titleName="재직 근무자" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton styles="secondary" size="medium">
                  +생성
                </HcButton>
              </div>
            </Container>
          </>
        ) : (
          ""
        )}
        {now === 1 ? (
          <>
            <SubHeading
              titleName="소급 급여 대상자(4)"
              style={{ marginTop: "30px" }}
            />
            <HcButton
              styles="secondary"
              size="medium"
              style={{ marginTop: 18, marginBottom: 20 }}
            >
              급여 계산
            </HcButton>
            <TestTable width={1320} height={215} />
          </>
        ) : (
          ""
        )}
        {now === 2 ? (
          <>
            <SubHeading titleName="수당 항목" style={{ marginTop: "30px" }} />
            <Container style={{ marginTop: 18, height: 404 }}>
              <SubHeading titleName="식비" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton
                  styles="secondary"
                  size="medium"
                  style={{ marginBottom: 12 }}
                >
                  +생성
                </HcButton>
                <TestTable width={1240} height={261} />
              </div>
            </Container>
            <Container style={{ marginTop: 18, height: 404 }}>
              <SubHeading titleName="인재 추천비" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton
                  styles="secondary"
                  size="medium"
                  style={{ marginBottom: 12 }}
                >
                  +생성
                </HcButton>
                <TestTable width={1240} height={261} />
              </div>
            </Container>
            <Container style={{ marginTop: 18, height: 404 }}>
              <SubHeading titleName="차량 유지비" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton
                  styles="secondary"
                  size="medium"
                  style={{ marginBottom: 12 }}
                >
                  +생성
                </HcButton>
                <TestTable width={1240} height={261} />
              </div>
            </Container>
          </>
        ) : (
          ""
        )}
        {now === 3 ? (
          <>
            <SubHeading titleName="필수 공제" style={{ marginTop: "30px" }} />
            <Container style={{ marginTop: 18, height: 404 }}>
              <SubHeading titleName="근로 소득세" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton styles="secondary" size="medium">
                  +생성
                </HcButton>
              </div>
            </Container>
            <Container style={{ marginTop: 18, height: 404 }}>
              <SubHeading titleName="4대 보험료" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton styles="secondary" size="medium">
                  +생성
                </HcButton>
              </div>
            </Container>
            <Container style={{ marginTop: 18, height: 404 }}>
              <SubHeading titleName="학자금 대출금" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton styles="secondary" size="medium">
                  +생성
                </HcButton>
              </div>
            </Container>
            <Container style={{ marginTop: 18, height: 404 }}>
              <SubHeading titleName="선지급금 - 생일 축하금" />
              <div style={{ marginTop: 18, padding: "0px 16px 0px 16px" }}>
                <HcButton styles="secondary" size="medium">
                  +생성
                </HcButton>
              </div>
            </Container>
          </>
        ) : (
          ""
        )}
        {now === 5 ? (
          <>
            <SubHeading
              titleName="급여 대상자(200)"
              style={{ marginTop: "30px", marginBottom: 70 }}
            />

            <TestTable width={1320} height={520} />
          </>
        ) : (
          ""
        )}
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 50 }}>
        <div>
          <HcButton
            onClick={OnPrev}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            이전
          </HcButton>
          <HcButton
            onClick={OnNext}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            다음
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
    </>
  );
};

export default PayCalculation;
