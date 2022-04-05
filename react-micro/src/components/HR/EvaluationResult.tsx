/* eslint-disable jsx-a11y/alt-text */
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import { HcTableContainer, HcTable } from "common/HcTableComponent";
import { HcTitleTextField, HcTextFieldLabel } from "common/HcTextField";
import HcTree from "common/HcTree";
import styled from "styled-components";
import { useState } from "react";
import HcCard from "common/HcCard";
import img from "common/img/Ellipse.png";
import { HcContentPopup } from "common/HcPopup";
const items = [
  {
    id: "1",
    title: "전체 평가 대상자 보기",
  },
  {
    id: "2",
    title: "홍길동",
    img: img,
  },
  {
    id: "3",
    title: "박지원",
    img: img,
  },
  {
    id: "4",
    title: "김민수",
    img: img,
  },
];

const TreeContainer = styled.div`
  height: 832px;
  width: 312px;
  float: left;
`;
const IdContainer = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
`;
const Name = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 50px;
  margin-left: 10px;
  text-transform: uppercase;
`;
const Position = styled(Name)`
  font-weight: 400;
  font-size: 16px;
  color: #5d5d62;
  line-height: 60px;
`;
const Grades = styled.div`
  border: 2px solid rgba(173, 206, 255, 1);
  background: #ffffff;
  border-image-source: none;
  border: 2px solid #adceff;
  border-radius: 100px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 72px;
  width: 80px;
  height: 80px;
  text-align: center;
  paddding-top: 10px;
  color: #257cff;
  margin-left: 36px;
  margin-bottom: 20px;
  margin-top: 10px;
  float: left;
`;
const Subject = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: #838181;
`;
const Base = styled(Subject)`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #838181;
`;
const Score = styled(Base)`
  font-weight: 900;
  color: #2d2d31;
`;
const Grade = styled(Grades)`
  border: 2px solid transparent;

  color: #000000;
  background-image: linear-gradient(#ffff, #ffff),
    linear-gradient(
      to left,
      rgba(0, 93, 234, 1),
      rgba(87, 153, 251, 1),
      rgba(58, 206, 216, 1)
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export default function EvaluationResult() {
  /*Create */
  const [isCreate, setIsCreates] = useState(false);
  /*Create */
  /* Current Data*/
  const [currentData, setcurrentData] = useState({
    id: "2",
    title: "홍길동",
    img: img,
  });
  /* Current Data*/
  /* pop up */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* pop up */
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="평가 결과" isBackIcon />
        <div style={{ display: "flex", marginTop: "39px" }}>
          <TreeContainer>
            <HcTree
              items={items}
              title="조직도"
              search={true}
              isCreate={isCreate}
              setIsCreates={setIsCreates}
              placeholder="사원검색"
              currentData={currentData}
              setcurrentData={setcurrentData}
            />
          </TreeContainer>
          <div style={{ display: "block", marginLeft: "24px" }}>
            {currentData.id !== "1" ? (
              <>
                {" "}
                <IdContainer>
                  <img
                    src={items.find((x) => x.id === currentData.id)?.img}
                    style={{
                      width: 40,
                      height: 40,
                      top: 150,
                      left: 40,
                      borderRadius: 100,
                      border: "1px solid #e0e0e0",
                    }}
                  />
                  <Name>{currentData.title}</Name>
                  <Position>티맥스 소프트 / CEO</Position>
                </IdContainer>
                <div>평가 요약(2022년 1분기 평가)</div>
                {/*card */}
                <div
                  style={{ display: "flex", marginTop: 18, marginBottom: 44 }}
                >
                  <HcCard style={{ width: 200, height: 210 }} boxStyle="solid">
                    <Grade>A</Grade>
                    <Subject>종합점수</Subject>
                    <div
                      style={{ display: "flex", marginTop: 6, margin: "auto" }}
                    >
                      <Score>95점</Score>
                      <Base>/ 100점</Base>
                    </div>
                  </HcCard>
                  <HcCard
                    style={{ width: 200, height: 210, marginLeft: 17 }}
                    boxStyle="solid"
                  >
                    <Grade>1</Grade>
                    <Subject>평가 순위</Subject>

                    <div
                      style={{ display: "flex", marginTop: 6, margin: "auto" }}
                    >
                      <Score>1위</Score>
                      <Base>/ 50명</Base>
                    </div>
                  </HcCard>
                  <HcCard
                    style={{
                      width: 552,
                      height: 210,
                      marginLeft: 15,
                    }}
                    boxStyle="solid"
                  >
                    <div style={{ display: "flex", float: "left" }}>
                      <Grades style={{ marginLeft: 31 }}>A</Grades>
                      <Grades style={{ marginLeft: 107 }}>A</Grades>
                      <Grades style={{ marginLeft: 95 }}>A</Grades>
                    </div>
                    <div style={{ display: "flex", float: "left" }}>
                      <Subject style={{ marginLeft: 47 }}>역량점수</Subject>
                      <Subject style={{ marginLeft: 136 }}>성과점수</Subject>
                      <Subject style={{ marginLeft: 130 }}>기타점수</Subject>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        float: "left",
                        marginTop: 6,
                        height: "30px",
                      }}
                    >
                      <div
                        style={{ display: "flex", marginLeft: 14, width: 125 }}
                      >
                        <Score>100점</Score>
                        <Base>/ 100점</Base>
                      </div>
                      <div
                        style={{ display: "flex", marginLeft: 63, width: 125 }}
                      >
                        <Score>100점</Score>
                        <Base>/ 100점</Base>
                      </div>
                      <div
                        style={{ display: "flex", marginLeft: 65, width: 125 }}
                      >
                        <Score>100점</Score>
                        <Base>/ 100점</Base>
                      </div>
                    </div>
                  </HcCard>
                </div>
                {/*card */}
                <HcTableContainer
                  style={{
                    maxHeight: 400,
                  }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ minWidth: 120 }}>역량명</th>
                        <th style={{ minWidth: 120 }}>역량그룹</th>
                        <th style={{ minWidth: 194 }}>역량설명</th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          종합점수
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          본인평가
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          동료평가
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          상향평가
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          하향평가
                        </th>
                        <th style={{ minWidth: 100 }}>평가의견</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>경영 환경 분석</td>
                        <td>기획 역량</td>
                        <td
                          style={{
                            maxWidth: "194px",
                          }}
                        >
                          회사 비전을 설립하고11111223
                        </td>
                        <td style={{ textAlign: "center" }}>A</td>
                        <td style={{ textAlign: "center" }}>A</td>
                        <td style={{ textAlign: "center" }}>A</td>
                        <td style={{ textAlign: "center" }}>A</td>
                        <td style={{ textAlign: "center" }}>A</td>
                        <td onClick={openModal}>
                          <a
                            style={{
                              textDecoration: "underLine",
                              color: "#257CFF",
                            }}
                          >
                            평가의견
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </HcTable>
                </HcTableContainer>
                <HcTableContainer
                  style={{
                    maxHeight: 400,
                  }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ minWidth: 100 }}>목표구분</th>
                        <th style={{ minWidth: 180 }}>목표명</th>
                        <th style={{ minWidth: 100 }}>상위목표</th>
                        <th style={{ minWidth: 160 }}>KPI</th>
                        <th style={{ minWidth: 90 }}>목표달성률</th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          종합점수
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          본인평가
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          동료평가
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          상향평가
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          하향평가
                        </th>
                        <th style={{ minWidth: 100 }}>평가의견</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </HcTable>
                </HcTableContainer>
                <HcTableContainer
                  style={{
                    maxHeight: 400,
                    width: "984px",
                    overFlowX: "scroll",
                    marginTop: 100,
                  }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ minWidth: 500, left: 0, zIndex: 3 }}>
                          평가질문
                        </th>
                        <th style={{ minWidth: 120, left: 500, zIndex: 3 }}>
                          질문유형
                        </th>
                        <th style={{ minWidth: 90, left: 620, zIndex: 3 }}>
                          종합점수
                        </th>
                        <th style={{ minWidth: 90, zIndex: 1 }}>본인평가</th>
                        <th style={{ minWidth: 90, zIndex: 1 }}>동료평가</th>
                        <th style={{ minWidth: 90, zIndex: 1 }}>상향평가</th>
                        <th style={{ minWidth: 90, zIndex: 1 }}>하향평가</th>
                        <th style={{ minWidth: 100, zIndex: 1 }}>평가의견</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ left: 0, zIndex: 2, position: "sticky" }}>
                          사원목표
                        </td>
                        <td
                          style={{ left: 500, zIndex: 2, position: "sticky" }}
                        >
                          사원목표
                        </td>
                        <td
                          style={{
                            left: 620,
                            zIndex: 2,
                            position: "sticky",
                          }}
                        >
                          사원목표
                        </td>
                        <td style={{ zIndex: 1 }}>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                      </tr>
                      <tr>
                        <td style={{ left: 0, zIndex: 2, position: "sticky" }}>
                          사원목표
                        </td>
                        <td
                          style={{ left: 500, zIndex: 2, position: "sticky" }}
                        >
                          사원목표
                        </td>
                        <td
                          style={{
                            left: 620,
                            zIndex: 2,
                            position: "sticky",
                          }}
                        >
                          사원목표
                        </td>
                        <td style={{ zIndex: 1 }}>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                      </tr>
                      <tr>
                        <td style={{ left: 0, zIndex: 2, position: "sticky" }}>
                          사원목표
                        </td>
                        <td
                          style={{ left: 500, zIndex: 2, position: "sticky" }}
                        >
                          사원목표
                        </td>
                        <td
                          style={{
                            left: 620,
                            zIndex: 2,
                            position: "sticky",
                          }}
                        >
                          사원목표
                        </td>
                        <td style={{ zIndex: 1 }}>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                        <td>사원목표</td>
                      </tr>
                    </tbody>
                  </HcTable>
                </HcTableContainer>
              </>
            ) : (
              <>
                {" "}
                <HcTableContainer
                  style={{
                    maxHeight: 399,
                    width: "984px",
                    overFlowX: "scroll",
                  }}
                >
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ minWidth: 120 }}>평가대상자</th>
                        <th style={{ minWidth: 100 }}>사원번호</th>
                        <th style={{ minWidth: 140 }}>법인회사</th>
                        <th style={{ minWidth: 120 }}>조직</th>
                        <th style={{ minWidth: 80 }}>직책</th>
                        <th style={{ minWidth: 80 }}>직위</th>
                        <th style={{ minWidth: 80 }}>평가상태</th>
                        <th style={{ minWidth: 80, textAlign: "center" }}>
                          종합점수
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          상향평가
                        </th>
                        <th style={{ minWidth: 90, textAlign: "center" }}>
                          하향평가
                        </th>
                        <th style={{ minWidth: 100 }}>평가의견</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>홍길동</td>
                        <td>2021232</td>
                        <td>티맥스엔터프라이즈</td>
                        <td>AB본부</td>
                        <td>팀장</td>
                        <td>연구원</td>
                        <td>진행중</td>
                        <td style={{ textAlign: "center" }}>A</td>
                        <td style={{ textAlign: "center" }}>A</td>
                        <td style={{ textAlign: "center" }}>A</td>
                        <td onClick={openModal}>
                          <a
                            style={{
                              textDecoration: "underLine",
                              color: "#257CFF",
                            }}
                          >
                            평가의견
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </HcTable>
                </HcTableContainer>
              </>
            )}
          </div>
        </div>
      </ComponentWrapper>
      <HcContentPopup
        open={modalOpen}
        close={closeModal}
        header="평가 의견"
        height={563}
        primaryBtn={"확인"}
        width={1060}
        style={{ display: "block", left: 30 }}
      >
        <div
          style={{
            color: "#5D5D62",
            fontFamily: "Noto Sans KR",
            fontWeight: 500,
            fontSize: 16,
            marginBottom: 24,
          }}
        >
          커뮤니케이션 / 기획 역량
        </div>
        <HcTextFieldLabel
          titleName="본인평가"
          style={{ width: 1000, marginBottom: 20 }}
        >
          홍길동님은 경영환경 분석을적극적으로 잘 진행해주고 있습니다.
        </HcTextFieldLabel>
        <HcTextFieldLabel
          titleName="동료평가"
          style={{ width: 1000, marginBottom: 20 }}
        >
          홍길동님은 경영환경 분석을적극적으로 잘 진행해주고 있습니다.
        </HcTextFieldLabel>
        <HcTextFieldLabel
          titleName="상향평가"
          style={{ width: 1000, marginBottom: 20 }}
        >
          홍길동님은 경영환경 분석을적극적으로 잘 진행해주고 있습니다.
        </HcTextFieldLabel>
        <HcTextFieldLabel titleName="하향평가" style={{ width: 1000 }}>
          홍길동님은 경영환경 분석을적극적으로 잘 진행해주고 있습니다.
        </HcTextFieldLabel>
      </HcContentPopup>
    </>
  );
}
