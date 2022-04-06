import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import {
  HcTitleTextField,
  HcTextFieldLabel,
  SubHeading,
} from "common/HcTextField";
import styled, { keyframes } from "styled-components";
import HcBottomBar from "common/HcBottomBar";
import { useHistory } from "react-router-dom";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import { HcTable } from "common/HcTableComponent";
import { ContentPopup } from "common/HcPopup";

const Info = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  height: fit-content;
  width: fit-content;
  color: #5d5d62;
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

interface BarProps {
  pay: number;
  deduction: number;
}

const Bar = styled.div<BarProps>`
  width: 1240px;
  height: 12px;
  border-radius: 17px;
  background: linear-gradient(to right, #5799fb 50%, #ffb84c 50%);
  background: ${(props) =>
    `linear-gradient(to right, #5799fb ${props.pay}%, #ffb84c ${props.deduction}%)`};
  transition: all 0.3s ease;
  margin-top: 15px;
`;
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

const PayRoll = () => {
  /* pop up */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* pop up */
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={openModal}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.25 3C2.25 2.0335 3.0335 1.25 4 1.25H20C20.9665 1.25 21.75 2.0335 21.75 3V21C21.75 21.9665 20.9665 22.75 20 22.75H4C3.0335 22.75 2.25 21.9665 2.25 21V3ZM4 2.75C3.86193 2.75 3.75 2.86193 3.75 3V21C3.75 21.1381 3.86193 21.25 4 21.25H20C20.1381 21.25 20.25 21.1381 20.25 21V3C20.25 2.86193 20.1381 2.75 20 2.75H4ZM15.5002 11.1767C15.7126 10.9622 15.6891 10.6079 15.4362 10.4431C14.8327 10.05 14.1558 9.74504 13.3099 9.59742C13.0571 9.55331 12.8622 9.34078 12.8622 9.08419V8.5C12.8622 8.22386 12.6383 8 12.3622 8H11.977C11.7009 8 11.477 8.22386 11.477 8.5V9.06992C11.477 9.32746 11.2804 9.54022 11.0267 9.58458C9.42451 9.86472 8.43816 10.7696 8.43816 12.068C8.43816 13.7019 10.2762 14.2387 11.8404 14.6955C12.9988 15.0338 14.0071 15.3282 14.0071 15.992C14.0071 16.688 13.3569 17.072 11.9293 17.072C11.0401 17.072 10.1304 16.8465 9.33931 16.3733C9.10569 16.2336 8.79835 16.2713 8.63023 16.4854L8.30212 16.9032C8.13421 17.1171 8.16731 17.4279 8.39917 17.5699C9.13884 18.0228 10.1281 18.3101 11.0197 18.4364C11.2773 18.4729 11.477 18.6882 11.477 18.9483V19.5C11.477 19.7761 11.7009 20 11.977 20H12.3622C12.6383 20 12.8622 19.7761 12.8622 19.5V18.8961C12.8622 18.6428 13.0527 18.4318 13.3018 18.3852C15.0447 18.0587 16 17.1014 16 15.836C16 14.1351 14.1052 13.6019 12.526 13.1575C11.398 12.8401 10.4311 12.568 10.4311 11.948C10.4311 11.264 11.1378 10.928 12.1979 10.928C13.0364 10.928 13.7809 11.1675 14.5032 11.6008C14.711 11.7254 14.9793 11.7026 15.1499 11.5304L15.5002 11.1767ZM7.75 5C7.33579 5 7 5.33579 7 5.75C7 6.16421 7.33579 6.5 7.75 6.5H16.25C16.6642 6.5 17 6.16421 17 5.75C17 5.33579 16.6642 5 16.25 5H7.75Z"
                      fill="#257CFF"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </HcTable>
      </TableContainer>
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
        <HcTitleTextField titleName="급여 대장 보기" isBackIcon={true} />
        <HcButton
          style={{ position: "absolute", top: 44, left: 1242 }}
          styles={"line"}
          size={"small"}
        >
          급여 대장 다운로드
        </HcButton>

        <>
          <SubHeading
            titleName="2022년 7월"
            style={{ marginTop: "59px", marginBottom: 10 }}
          />

          <p
            style={{
              fontSize: "15px",
              color: "#2D2D31",
              fontFamily: "Noto Sans KR",
              marginBottom: 66,
            }}
          >
            급여 지급일 : 2022년 7월 25일
          </p>
          <div style={{ display: "flex", marginBottom: 18 }}>
            <HcButton
              styles={"line"}
              size="medium"
              style={{ marginRight: "11px" }}
            >
              급여 명세 다운로드
            </HcButton>
            <HcButton
              styles={"line"}
              size="medium"
              onClick={() =>
                history.push({
                  pathname: "/hr/PayStubMail",
                })
              }
            >
              급여 명세 메일 전송
            </HcButton>
          </div>
          <TestTable width={1320} height={520} />

          <ContentPopup
            open={modalOpen}
            close={closeModal}
            header="급여 명세서 미리보기"
          >
            <SubHeading
              titleName="2022년 7월"
              style={{ marginTop: "20px", marginBottom: 10 }}
            />
            <p
              style={{
                fontSize: "15px",
                color: "#2D2D31",
                fontFamily: "Noto Sans KR",
                marginBottom: 46,
              }}
            >
              급여 지급일 : 2022년 7월 25일
            </p>
            <div style={{ display: "inherit" }}>
              <div
                className="first_block"
                style={{
                  width: "360px",
                  height: "fit-content",
                  float: "left",
                  marginRight: "80px",
                }}
              >
                <HcTextFieldLabel
                  titleName=""
                  name="id"
                  style={{
                    width: "360px",
                    marginBottom: 20,
                  }}
                >
                  홍길동
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="법인회사"
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  티맥스에이엔씨
                </HcTextFieldLabel>{" "}
                <HcTextFieldLabel
                  titleName="직책"
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  팀장
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="회사전화"
                  name="id"
                  style={{ width: "360px", marginBottom: 10 }}
                >
                  031-789-1124
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName=""
                  name="id"
                  style={{
                    width: "1240px",
                    marginBottom: 20,
                    marginTop: -20,
                    paddingTop: 0,
                  }}
                >
                  급여
                </HcTextFieldLabel>
              </div>
              <div
                className="first_block"
                style={{
                  width: "360px",
                  height: "fit-content",
                  float: "left",
                  marginRight: "80px",
                }}
              >
                <HcTextFieldLabel
                  titleName=""
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  2021001
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="조직"
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  AB본부/AB2-4팀
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="직위"
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  연구원
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="휴대전화"
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  010-1234-5678
                </HcTextFieldLabel>
              </div>
              <div
                className="first_block"
                style={{
                  width: "360px",
                  height: "fit-content",
                  float: "left",
                }}
              >
                <HcTextFieldLabel
                  titleName="입사일"
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  2021.01.01
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="담당업무"
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  UX설계
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="이메일"
                  name="id"
                  style={{ width: "360px", marginBottom: 20 }}
                >
                  Minsoo_Choi@tmax.co.kr
                </HcTextFieldLabel>
              </div>
              <Info style={{ marginBottom: 6, marginLeft: 10 }}>실 지급액</Info>
              <div
                style={{
                  fontSize: "30px",
                  fontFamily: "Noto Sans KR",
                  fontWeight: "bold",
                  marginBottom: 15,
                  color: "#000000",
                  height: "fit-content",
                  marginLeft: 10,
                }}
              >
                2,474,700원
              </div>
              <Bar deduction={21} pay={79} /> {/*공제 액계 / 지급 액계 */}
            </div>

            <div style={{ display: "flex", marginTop: 13 }}>
              <Info
                style={{
                  color: "#5799FB",
                  fontSize: "13px",
                  marginLeft: 10,
                }}
              >
                지급 액계 79%
              </Info>
              <Info
                style={{
                  color: "#FFA61F",
                  fontSize: "13px",
                  marginLeft: 1058,
                }}
              >
                공제 액계 21%
              </Info>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 4,
                marginLeft: 10,
              }}
            >
              <Info>2,250,000원</Info>
              <Info
                style={{
                  marginLeft: 1058,
                }}
              >
                232,240원
              </Info>
            </div>
            <Info
              style={{
                color: "#000000",
                fontSize: "16px",
                marginBottom: 14,
                marginTop: 60,
                marginLeft: 8,
              }}
            >
              지급 내역
            </Info>
            <div style={{ background: " #E0E0E0", width: 1240, height: 1 }} />
            <div
              style={{
                marginLeft: 10,
                display: "inherit",
                marginTop: 20,
                marginBottom: 60,
              }}
            >
              <div style={{ float: "left", width: 71, marginRight: 92 }}>
                <Info style={{ marginBottom: 16 }}>기본급</Info>
                <Info style={{ marginBottom: 16 }}>기본급</Info>
                <Info style={{ marginBottom: 16 }}>식비</Info>
                <Info
                  style={{
                    color: "#5799fb",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  지급액계
                </Info>
              </div>
              <div style={{ float: "left", width: 105 }}>
                <Info style={{ color: "#000000", marginBottom: 16 }}>
                  2,000,000원
                </Info>
                <Info style={{ color: "#000000", marginBottom: 16 }}>
                  2,000,000원
                </Info>
                <Info style={{ color: "#000000", marginBottom: 16 }}>
                  2,000,000원
                </Info>
                <Info
                  style={{
                    color: "#5799fb",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  2,250,000원
                </Info>
              </div>
            </div>
            <Info
              style={{
                color: "#000000",
                fontSize: "16px",
                marginBottom: 14,
                marginLeft: 8,
              }}
            >
              공제 내역
            </Info>
            <div style={{ background: " #E0E0E0", width: 1240, height: 1 }} />
            <div style={{ marginLeft: 10, display: "inherit", marginTop: 20 }}>
              <div style={{ float: "left", width: 91, marginRight: 72 }}>
                <Info style={{ marginBottom: 16 }}>국민연금</Info>
                <Info style={{ marginBottom: 16 }}>건강보험료</Info>
                <Info style={{ marginBottom: 16 }}>장기요양보험료</Info>
                <Info style={{ marginBottom: 16 }}>고용보험료</Info>
                <Info style={{ marginBottom: 16 }}>소득세</Info>
                <Info
                  style={{
                    color: "#FFA61F",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  지급액계
                </Info>
              </div>
              <div style={{ float: "left", width: 105 }}>
                <Info style={{ color: "#000000", marginBottom: 16 }}>
                  2,000,000원
                </Info>
                <Info style={{ color: "#000000", marginBottom: 16 }}>
                  2,000,000원
                </Info>
                <Info style={{ color: "#000000", marginBottom: 16 }}>
                  2,000,000원
                </Info>{" "}
                <Info style={{ color: "#000000", marginBottom: 16 }}>
                  2,000,000원
                </Info>{" "}
                <Info style={{ color: "#000000", marginBottom: 16 }}>
                  2,000,000원
                </Info>
                <Info
                  style={{
                    color: "#FFA61F",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  2,250,000원
                </Info>
              </div>
            </div>
          </ContentPopup>
        </>
      </ComponentWrapper>
    </>
  );
};

export default PayRoll;
