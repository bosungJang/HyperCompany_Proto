import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import { HcTitleTextField, HcMainTitleField } from "common/HcTextField";

import HcCard from "common/HcCard";

import { ReactComponent as ArrrowIcon } from "../../resources/images/moreArrow.svg";
import DonutChart from "common/Chart/DonutChart";

const MainCompWrapper = styled.div`
  width: 648px;
  height: 330px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(153, 153, 153, 0.55);
  border-radius: 6px;

  padding: 20px 24px;
  float: left;
  margin-right: 24px;
  &:last-child {
    margin-right: 0px;
  }
`;

const CardCompWrapper = styled.div`
  float: left;
  margin-right: 24px;
  &:last-child {
    margin-right: 0px;
  }
`;

const MainCompTitleArea = styled.div`
  display: block;
  margin-bottom: 17px;
  line-height: 24px;
  label {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  div {
    float: right;
    font-size: 12px;
    color: #257cff;
    cursor: pointer;
  }
`;

const CardContent = styled.div<{ color?: string }>`
  width: 600px;
  height: 74px;
  background: #f9f9f9;
  border-radius: 6px;
  margin-bottom: 14px;
  padding-top: 13px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 15px;
  border-left: 6px solid
    ${(props) => (props.color != null ? props.color : "#ff9737")};
  &: last-child {
    margin-bottom: 0;
  }
`;

const CardContentTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const CardContentFooter = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  margin-top 7px;

  span {
    float: right;
  }
`;

const HcCardNumber = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  label {
    font-weight: 700;
    font-size: 36px;
  }
  span {
    font-weight: 700;
    font-size: 14px;
    margin-left: 10px;
    color: #ff7070;
  }
  svg {
    margin-left: 6px;
  }
`;

const MainContainer = styled.div`
  margin-top: 18px;
  display: inline-block;
`;

const NumLabel = styled.label`
  font-weight: 700;
  font-size: 16px;
`;

const ContLabel = styled.div`
  margin-left: 7px;
  font-weight: 400;
  font-size: 14px;
  color: #2e2e2e;
  width: 66px;
  display: inline-block;
`;

const widthChange = (x: string) => keyframes`
  from{
    width: 0px;
  }
  to{
    width: ${x}px
  }
`;

const GraphDiv = styled.div<{ width: string; color: string }>`
  display: inline-block;
  width: ${(props) => props.width};
  height: 11px;
  border-radius: 8px;
  background: ${(props) => props.color};
  margin-left: 19px;

  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-name: ${(props) => widthChange(props.width)};
  animation-fill-mode: forwards;
`;

const TagDiv = styled.div`
  background: #fff4cf;
  border: 1px solid #ffd752;
  box-sizing: border-box;
  border-radius: 14px;
  width: 56px;
  height: 19px;
  display: inline-block;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  line-height: 19px;
  float: right;
`;
const GraphContainer = styled.div`
  height: 24px;
  line-height: 19px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
interface MatchParams {
  id: string;
}
const donutData = [
  { name: "정규직", value: 700, fill: "#007FF5" },
  { name: "계약직", value: 300, fill: "#05B1BC" },
  { name: "임원", value: 200, fill: "#FFCC18" },
];

const HRHome = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <ComponentWrapper>
      <div style={{ display: "block" }}>
        <div className="title_area">
          <HcTitleTextField titleName="발령 관리" isBackIcon={false} />
        </div>
        <div className="main_area" style={{ marginTop: 59 }}>
          <HcMainTitleField titleName="체크리스트 현황" />
          <MainContainer>
            <MainCompWrapper>
              <MainCompTitleArea>
                <label>지연업무</label>
                <div>
                  더 보기 <ArrrowIcon style={{ marginLeft: "6px" }} />
                </div>
              </MainCompTitleArea>
              <div style={{ marginTop: "17px" }}>
                <CardContent>
                  <CardContentTitle>재직증명서 발급 요청</CardContentTitle>
                  <CardContentFooter>
                    AB2-4팀 홍길동연구원 재직증명서 발급 요청
                    <span>2021.10.26 ~ 2021.10.29</span>
                  </CardContentFooter>
                </CardContent>
                <CardContent>
                  <CardContentTitle>휴가 신청</CardContentTitle>
                  <CardContentFooter>
                    AB2-4팀 홍길동연구원 재직증명서 발급 요청
                    <span>2021.10.26 ~ 2021.10.29</span>
                  </CardContentFooter>
                </CardContent>
                <CardContent>
                  <CardContentTitle>경력 증명서 발급 요청</CardContentTitle>
                  <CardContentFooter>
                    AB2-4팀 홍길동연구원 재직증명서 발급 요청
                    <span>2021.10.26 ~ 2021.10.29</span>
                  </CardContentFooter>
                </CardContent>
              </div>
            </MainCompWrapper>
            <MainCompWrapper>
              <MainCompTitleArea>
                <label>진행 업무</label>
                <div>
                  더 보기
                  <ArrrowIcon style={{ marginLeft: "6px" }} />
                </div>
              </MainCompTitleArea>
              <div style={{ marginTop: "17px" }}>
                <CardContent color="#88B8FF">
                  <CardContentTitle>휴직 신청</CardContentTitle>
                  <CardContentFooter>
                    AB2-4팀 홍길동연구원 재직증명서 발급 요청
                    <span>2021.10.26 ~ 2021.10.29</span>
                  </CardContentFooter>
                </CardContent>
                <CardContent color="#88B8FF">
                  <CardContentTitle>경력 증명서 신청</CardContentTitle>
                  <CardContentFooter>
                    AB2-4팀 홍길동연구원 재직증명서 발급 요청
                    <span>2021.10.26 ~ 2021.10.29</span>
                  </CardContentFooter>
                </CardContent>
                <CardContent color="#88B8FF">
                  <CardContentTitle>급여 정산</CardContentTitle>
                  <CardContentFooter>
                    AB2-4팀 홍길동연구원 재직증명서 발급 요청
                    <span>2021.10.26 ~ 2021.10.29</span>
                  </CardContentFooter>
                </CardContent>
              </div>
            </MainCompWrapper>
          </MainContainer>
        </div>
        <div
          className="main_area_2nd"
          style={{ marginTop: "60px", marginBottom: "30px" }}
        >
          <HcMainTitleField titleName="대시보드" />
          <MainContainer>
            <CardCompWrapper>
              <HcCard
                title="전체 상품 수"
                date="주 단위 : 2021.10.11 ~ 2021 10.17"
                boxStyle="boxShadow"
              >
                <div
                  style={{
                    marginTop: 30,
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <HcCardNumber>
                    <label>321</label>
                    <span>52개</span>

                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83975 0.602051L10.9193 7.64051H0.760178L5.83975 0.602051Z"
                        fill="#FF7070"
                      />
                    </svg>
                  </HcCardNumber>
                </div>
              </HcCard>
            </CardCompWrapper>
            <CardCompWrapper>
              <HcCard
                title="Top5  판매 상품"
                date="주 단위 : 2021.10.11 ~ 2021 10.17"
                boxStyle="boxShadow"
              >
                <div style={{ marginTop: 30 }}>
                  <GraphContainer>
                    <NumLabel>1.</NumLabel>
                    <ContLabel>LTE 요금 A</ContLabel>
                    <GraphDiv width="100px" color="#013585" />
                    <TagDiv>2400명</TagDiv>
                  </GraphContainer>
                  <GraphContainer>
                    <NumLabel>2.</NumLabel>
                    <ContLabel>LTE 요금 B</ContLabel>
                    <GraphDiv width="81px" color="#007FF5" />
                    <TagDiv>1900명</TagDiv>
                  </GraphContainer>
                  <GraphContainer>
                    <NumLabel>3.</NumLabel>
                    <ContLabel>LTE 요금 C</ContLabel>
                    <GraphDiv width="68px" color="#05B1BC" />
                    <TagDiv>1700명</TagDiv>
                  </GraphContainer>
                  <GraphContainer>
                    <NumLabel>4.</NumLabel>
                    <ContLabel>LTE 요금 D</ContLabel>
                    <GraphDiv width="25px" color="#15D26C" />
                    <TagDiv>400명</TagDiv>
                  </GraphContainer>
                  <GraphContainer>
                    <NumLabel>5.</NumLabel>
                    <ContLabel>LTE 요금 E</ContLabel>
                    <GraphDiv width="15px" color="#FFCC18" />
                    <TagDiv>200명</TagDiv>
                  </GraphContainer>
                </div>
              </HcCard>
            </CardCompWrapper>
            <CardCompWrapper>
              <HcCard
                title="계약 유형별 비율"
                date="기준 : 재직 구성원"
                boxStyle="boxShadow"
              >
                <div style={{ marginTop: 30 }}>
                  <DonutChart data={donutData} />
                </div>
              </HcCard>
            </CardCompWrapper>
            <CardCompWrapper>
              <HcCard
                title="전체 상품 수"
                date="주 단위 : 2021.10.11 ~ 2021 10.17"
                boxStyle="boxShadow"
              >
                <div
                  style={{
                    marginTop: 30,
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <HcCardNumber>
                    <label>108</label>
                    <span>52개</span>

                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83975 0.602051L10.9193 7.64051H0.760178L5.83975 0.602051Z"
                        fill="#FF7070"
                      />
                    </svg>
                  </HcCardNumber>
                </div>
              </HcCard>
            </CardCompWrapper>
          </MainContainer>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default HRHome;
