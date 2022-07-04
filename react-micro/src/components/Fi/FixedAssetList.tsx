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
  "계정코드",
  "계정과목명",
  "자산코드",
  "자산명",
  "취득일",
  "삼각방법",
];

const OrgData = [
  {
    accountCode: "20002",
    accountName: "건물",
    assetsCode: "42420",
    assetsName: "본사 건물",
    date: "2015.01.01",
    way: "정액법",
  },
  {
    accountCode: "20004",
    accountName: "구축물",
    assetsCode: "22512",
    assetsName: "구축물",
    date: "2015.01.01",
    way: "정액법",
  },
  {
    accountCode: "20006",
    accountName: "기계장치",
    assetsCode: "89522",
    assetsName: "기계장치_01",
    date: "2015.01.01",
    way: "정액법",
  },
  {
    accountCode: "20008",
    accountName: "차량운반구",
    assetsCode: "14363",
    assetsName: "업무용 차량_K5",
    date: "2015.01.01",
    way: "정액법",
  },
  {
    accountCode: "20008",
    accountName: "차량운반구",
    assetsCode: "14243",
    assetsName: "업무용 차량_제..",
    date: "2015.01.01",
    way: "정액법",
  },
  {
    accountCode: "20012",
    accountName: "비품",
    assetsCode: "22306",
    assetsName: "컴퓨터_의제",
    date: "2015.01.01",
    way: "정액법",
  },
  {
    accountCode: "20012",
    accountName: "비품",
    assetsCode: "82723",
    assetsName: "노트북_사업용",
    date: "2015.01.01",
    way: "정액법",
  },
  {
    accountCode: "20040",
    accountName: "소프트웨어",
    assetsCode: "33828",
    assetsName: "인사관리모듈",
    date: "2015.01.01",
    way: "정액법",
  },
];

const unRegiData = Array(11)
  .fill(undefined)
  .map(() => ({
    slipDate: "2022.06.08",
    number: "2022 01111111",
    type: "매입전표",
    regiDate: "2022.06.08",
    code: "200012",
    accountName: "비품",
    assetsCode: "000004",
    assetsName: "노트북",
    acquisitionDate: "2022.06.08",
    amortization: "정률법",
  }));

const FixedAssetsList = ({ match }: RouteComponentProps) => {
  const myCounter = useCounter();

  myCounter.myTitle = "고정자산 목록";

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
              0: "전기 이월 정보 불러오기",
              1: "필수 입력 확인",
              2: "전표 연동 확인",
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
                    전기 고정자산 등록 정보를 불러오시겠습니까?
                  </SubInfoTitle>
                  <SubInfoTitle style={{ marginTop: "8px" }}>
                    <WarningIcon style={{ verticalAlign: "bottom" }} />
                    {"<주의> 당해연도 "}
                    <span>신규등록한 자산은 삭제 처리</span>
                    {"됩니다."}
                  </SubInfoTitle>
                </div>
              ),
              1: (
                <div style={{ marginLeft: "-10px" }}>
                  <SubInfoTitle>
                    고정자산 등록을 위한 필수항목을 모두 입력해주세요.
                  </SubInfoTitle>
                </div>
              ),
              2: (
                <div style={{ marginLeft: "-10px" }}>
                  <SubInfoTitle>
                    총 3건의 고정자산을 등록하시겠습니까?
                  </SubInfoTitle>
                  <SubInfoTitle style={{ marginTop: "8px" }}>
                    자산명1. 자산명2, 자산명 3
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
                확인
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ height: "40px", width: "80px" }}
                size="medium"
              >
                취소
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
              titleName="고정자산 목록"
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
                전기 이월 정보 불러오기
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ marginRight: "10px" }}
                size="medium"
              >
                일괄 등록
              </HcButton>
              <HcButton
                onClick={() => {
                  setOpenPop(true);
                }}
                styles="line"
                style={{}}
                size="medium"
              >
                전표 연동
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
                    확인
                  </HcButton>
                  <HcButton
                    onClick={() => {}}
                    styles="line"
                    style={{}}
                    size="medium"
                  >
                    확인
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
                                <div>계정과목 조회*</div>
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
                              <div>자산명 입력*</div>
                            )}
                          </td>
                          <td style={{ width: "106px", fontSize: "14px" }}>
                            {item.date != "" ? item.date : <div>취득일</div>}
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
                                <option value="1">상각법</option>
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
                    { to: "1", name: "등록사항" },
                    { to: "2", name: "자산변동사항" },
                  ]}
                  size="normal"
                  TabNumber={Tabs}
                  SetTabNumber={setTabs}
                />
                {
                  {
                    "1": (
                      <div style={{ marginTop: "20px" }}>
                        <RegisterTitle>{"노트북_사업용"}</RegisterTitle>
                        <RegiMidTitle
                          style={{ marginTop: "24px", marginBottom: "14px" }}
                        >
                          주요 등록 사항
                        </RegiMidTitle>
                        <VATTable>
                          <tbody>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                1.기초가액
                              </StyledTd>
                              <td style={{ textAlign: "end" }}>0</td>
                              <StyledTd style={{ width: 162 }}>
                                15.전기말부인누계
                              </StyledTd>
                              <td style={{ textAlign: "end" }}>0</td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                2.전기말상각누계액
                              </StyledTd>
                              <td style={{ textAlign: "end" }}>0</td>
                              <StyledTd style={{ width: 162 }}>
                                16.전기말자본지출계
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
                                3.전기말장부가액
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
                                17.자본지출즉시상각
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
                                4.신규취득및증가
                              </StyledTd>
                              <td style={{ textAlign: "end" }}>0</td>
                              <StyledTd style={{ width: 162 }}>
                                18.전기말의제누계
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
                                5.부분매각및폐기
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
                                19.당기상각범위액
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
                                6.성실기초가액
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
                                20.회사계상상각비
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
                                7.성실상각누계액
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
                                8.상각기초가액
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
                                21.특별상각률
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
                                9.상각방법
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
                                  <option value="1">정률법</option>
                                  <option value="2">BMW</option>
                                  <option value="3">Citroen</option>
                                  <option value="4">Ford</option>
                                </HcSelect>
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                22.특별상각비
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
                                10.내용연수
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                23.당기말상각누계액
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
                                11.내용연수월수
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
                                24.당기말장부가액
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
                                12.상각상태
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
                                25.특례적용
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
                                  <option value="1">적용 안함</option>
                                  <option value="2">BMW</option>
                                </HcSelect>
                              </td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                13.성실경과/차감연수
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                특례년수
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                14.성실장부가액
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
                                26.업무용승용차여부
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
                                  <option value="1">부</option>
                                  <option value="2">BMW</option>
                                </HcSelect>
                              </td>
                            </tr>
                          </tbody>
                        </VATTable>
                        <RegiMidTitle
                          style={{ marginTop: "24px", marginBottom: "14px" }}
                        >
                          추가 등록 사항
                        </RegiMidTitle>
                        <VATTable>
                          <tbody>
                            <tr>
                              <StyledTd style={{ width: 162 }}>
                                1.취득 수량
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "end",
                                }}
                              >
                                0
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                4.최저한세부인액
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
                                2.경비구분
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
                                  <option value="1">800번대</option>
                                  <option value="2">BMW</option>
                                </HcSelect>
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                5.당기의제상각액
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
                                3.전체양도일자
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "initial",
                                }}
                              >
                                날짜 선택
                              </td>
                              <StyledTd style={{ width: 162 }}>
                                6.전체폐기일자
                              </StyledTd>
                              <td
                                style={{
                                  textAlign: "initial",
                                }}
                              >
                                날짜 선택
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
          header={"미등록 고정자산 전표 연동하기"}
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
                  <th>{"전표일"}</th>
                  <th>{"전표번호"}</th>
                  <th>{"전표유형"}</th>
                  <th>{"등록일"}</th>
                  <th>{"계정코드"}</th>
                  <th>{"계정과목명"}</th>
                  <th>{"자산코드"}</th>
                  <th>{"자산명"}</th>
                  <th>{"취득일"}</th>
                  <th>{"상각방법"}</th>
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
                고정자산 등록
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ height: "40px" }}
                size="medium"
              >
                취소
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
