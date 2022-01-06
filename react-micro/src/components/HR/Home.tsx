import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import { HcTitleTextField, HcMainTitleField } from "common/HcTextField";
/*
import {
  Card,
  Card_title,
  Card_date,
  Card_numberOf,
  Card_count,
} from "common/HcCard";
*/
import { ReactComponent as ArrrowIcon } from "../../fonts/images/moreArrow.svg";

const MainCompWrapper = styled.p`
  width: 648px;
  height: 330px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(153, 153, 153, 0.55);
  border-radius: 6px;

  padding: 20px 24px;
`;

const CardCompWrapper = styled.p``;

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

interface MatchParams {
  id: string;
}

const HRHome = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <ComponentWrapper>
      <div style={{ display: "block" }}>
        <div className="title_area">
          <HcTitleTextField titleName="발령 관리" isBackIcon={false} />
        </div>
        <div className="main_area" style={{ marginTop: 59 }}>
          <HcMainTitleField titleName="체크리스트 현황" />
          <MultiLayout
            columCnt={2}
            columnGap="24px"
            style={{ marginTop: "18px" }}
          >
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
          </MultiLayout>
        </div>
        <div
          className="main_area_2nd"
          style={{ marginTop: "60px", marginBottom: "30px" }}
        >
          <HcMainTitleField titleName="대시보드" />
          <div style={{ marginTop: "18px" }}>
            <MultiLayout columCnt={4} columnGap="24px" columnWidth="0">
              <CardCompWrapper>
                <div></div>
              </CardCompWrapper>
              <CardCompWrapper>
                <div></div>
              </CardCompWrapper>
              <CardCompWrapper>
                <div></div>
              </CardCompWrapper>
              <CardCompWrapper>
                <div></div>
              </CardCompWrapper>
            </MultiLayout>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default HRHome;
