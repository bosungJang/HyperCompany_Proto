import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  HcTextArea,
  HcSearchTextField,
  HcSelect,
  Title,
} from "common/HcTextField";
import { useState } from "react";
import ProgressBar from "common/HcProgressBar";
import HcButton from "common/HcButton";
import { HcTable, HcTableContainer, NullTbody } from "common/HcTableComponent";
import styled from "styled-components";
import InfoIconTooltip from "common/HcTooltip";
import { HcDateRangePicker } from "common/HcDatePicker";
import HcBottomBar from "common/HcBottomBar";
const FeedBackBox = styled.div`
  height: 527px;
  width: 1240px;
  overflow-y: scroll;
  overflow-x: visible !important;
`;
const Settings = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  padding: 5.5px 10.5px;
  position: absolute;
  //   top: 22px;
  right: 0px;
  &:hover {
    background-color: #cecece;
  }
  &:active {
    background-color: #cecece;
  }
`;

const Option = ({ children, message }: any) => {
  const Menucontainer = styled.div`
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 18px;
    right: 14px;
    &:hover > .tooltip,
    &:active > .tooltip {
      display: block;
      position: absolute;
    }
    overflow: visible;
  `;

  const Content = styled.div`
    display: none;
    position: absolute;
    z-index: 200;
    width: fit-content;
    height: fit-content;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;
  const Items = styled.li`
    height: 42px;
    width: 170px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-top: 11px;
    color: #3c3c3c;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <Menucontainer>
      {children}
      <Content className="tooltip">
        <ul style={{ padding: "0px 0px 0px 12px", margin: 0 }}>
          <Items onClick={() => {}}>기본 설정 활성화</Items>
          <Items>수정</Items>
          <Items>삭제</Items>
        </ul>
      </Content>
    </Menucontainer>
  );
};
const Img = styled.div`
  width: 50px;
  height: 50px;
  left: 20px;
  top: 20px;
  position: absolute;
  border: 1px solid #cecece;
  border-radius: 50%;

  background: url(smiling-asian-man-sitting-desk-front-laptop-office-looking-camera-face.jpg);
`;
const FeedBackCnt = styled.div`
  width: 1200px;
  height: fit-content;
  border-bottom: 1px solid #a7a7a7;
  padding: 21px 21px 28px 84px;
  position: relative;
  margin-bottom: 16px;
  margin-left: 15px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: justify;
  color: #2d2d31;
  overflowx: visible;
`;

const FeedBackField = () => {
  return (
    <FeedBackCnt>
      <Img />
      <Option message="검색" direction="right">
        {" "}
        <Settings>
          <svg
            width="4"
            height="14"
            viewBox="0 0 4 14"
            fill="none"
            style={{ marginBottom: 3 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM3.5 7C3.5 7.82843 2.82843 8.5 2 8.5C1.17157 8.5 0.5 7.82843 0.5 7C0.5 6.17157 1.17157 5.5 2 5.5C2.82843 5.5 3.5 6.17157 3.5 7ZM2 13.5C2.82843 13.5 3.5 12.8284 3.5 12C3.5 11.1716 2.82843 10.5 2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5Z"
              fill="#5D5D62"
            />
          </svg>
        </Settings>
      </Option>
      <div style={{ display: "flex", marginBottom: "7px" }}>
        <div className="name" style={{ fontWeight: 500, marginRight: "6px" }}>
          홍길동
        </div>
        <div className="date" style={{ fontSize: "12px", color: "#5D5D62" }}>
          2022.01.01
        </div>
      </div>
      <div
        className="position"
        style={{ fontSize: "12px", color: "#838181", marginBottom: "18px" }}
      >
        PM 본부 / Product실 / 실장
      </div>
      <div className="comment" style={{ maxHeight: "70px;" }}>
        현재 적극적이고 주체적으로 업무를 진행 잘하고 있습니다.
        <br />
        추가적으로 블로그 이외에 페이스북, 트위터 마케팅 채널도 고려해주세요.
      </div>
    </FeedBackCnt>
  );
};

export default function GoalAndPerformanceDetail() {
  const [edit, setEdit] = useState(false);
  const [percentage, setPercentage] = useState(50);
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  return (
    <>
      <ComponentWrapper style={{ display: "block", overflow: "visible" }}>
        <HcTitleTextField
          titleName={edit === false ? "목표 상세" : "목표 수정"}
          isBackIcon={true}
        />
        <Container
          title="목표 정보"
          width={1320}
          maxHeight={428}
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 80, display: "block", width: 360 }}>
              {edit === false ? (
                <>
                  {" "}
                  <HcTextFieldLabel
                    titleName={"목표명"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    마케팅 채널 3개 구축
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName={"목표 유형"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    정량 목표
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName={"성과 달성 방식"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    합산
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName={"목표 수치"}
                    style={{ width: 360, textAlign: "right" }}
                  >
                    1,000,000
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  {" "}
                  <HcTextField
                    titleName={"목표명"}
                    style={{ width: 360, marginBottom: 20 }}
                    value="마케팅 채널 3개 구축"
                    required
                  />
                  <HcSelect
                    titleName={"목표 유형"}
                    style={{ width: 360, marginBottom: 20 }}
                    required
                  >
                    <option>정량 목표</option>
                  </HcSelect>
                  <HcSelect
                    titleName={"성과 달성 방식"}
                    style={{ width: 360, marginBottom: 20 }}
                    required
                  >
                    <option>합산</option>
                  </HcSelect>
                  <HcTextField
                    titleName={"목표 수치"}
                    style={{ width: 360, textAlign: "right" }}
                    value="1,000,000"
                    required
                  />
                </>
              )}
            </div>
            <div style={{ marginRight: 80, display: "block", width: 360 }}>
              {edit === false ? (
                <>
                  <HcTextFieldLabel
                    titleName={"상위 목표"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    신규 고객확보
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName={"KPI명"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    신규 채널 수
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName={"측정 기준"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    상향
                  </HcTextFieldLabel>
                  <HcTextFieldLabel titleName={"가중치"} style={{ width: 360 }}>
                    40
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  <HcSelect
                    titleName={"상위 목표"}
                    style={{ width: 360, marginBottom: 20 }}
                    required
                  >
                    <option>신규 고객 확보</option>
                  </HcSelect>
                  <div style={{ display: "flex", marginBottom: 20 }}>
                    <HcTextField
                      titleName="KPI명"
                      required
                      value="신규 채널 수"
                      style={{ width: 290 }}
                    />
                    <HcButton
                      size="medium"
                      styles="line"
                      style={{
                        marginTop: 27,
                        marginLeft: 10,
                        height: 36,
                        padding: "7px 18px 6px",
                      }}
                    >
                      선택
                    </HcButton>
                  </div>
                  <HcSelect
                    titleName={"측정 기준"}
                    style={{ width: 360, marginBottom: 20 }}
                    required
                  >
                    <option>상향</option>
                  </HcSelect>
                  <HcTextField
                    titleName={"가중치"}
                    style={{ width: 360 }}
                    value="40"
                    required
                  />
                </>
              )}
            </div>
            <div style={{ display: "block", width: 360 }}>
              {edit === false ? (
                <>
                  <HcTextFieldLabel
                    titleName={"목표 기간"}
                    style={{ width: 360, marginBottom: 105 }}
                  >
                    2022.01.01 ~ 2022.03.01
                  </HcTextFieldLabel>
                  <HcTextFieldLabel titleName={"단위"} style={{ width: 360 }}>
                    원
                  </HcTextFieldLabel>
                </>
              ) : (
                <>
                  <div style={{ display: "block", marginBottom: 155 }}>
                    <Title required>목표 기간</Title>
                    <HcDateRangePicker />
                  </div>
                  <HcSelect titleName={"단위"} style={{ width: 360 }} required>
                    <option>원</option>
                  </HcSelect>
                </>
              )}
            </div>
          </div>
        </Container>
        <Container
          title={
            <div
              style={{
                width: "fit-contnet",
                height: "fit-content",
                position: "relative",
                display: "flex",
              }}
            >
              피드백 대상
              <div
                style={{
                  position: "absolute",
                  left: 97,
                  top: 5,
                  width: 24,
                  height: 24,
                }}
              >
                {" "}
                <InfoIconTooltip message="목표에 대해 피드백 받을 대상자를 추가합니다." />
              </div>
            </div>
          }
          width={1320}
          maxHeight={428}
          style={{ overflow: "visible" }}
        ></Container>
        <Container
          title="진행 현황"
          width={1320}
          maxHeight={428}
        >
          {edit === false ? (
            <div style={{ display: "flex" }}>
              <ProgressBar
                percentage={percentage}
                style={{ width: 560, marginRight: 40, marginTop: 14 }}
              />
              <HcTextFieldLabel
                titleName={""}
                style={{ width: 80, marginTop: -20 }}
              >
                {percentage}
              </HcTextFieldLabel>{" "}
            </div>
          ) : (
            <div style={{ display: "flex", marginTop: -10 }}>
              <ProgressBar
                percentage={percentage}
                style={{ width: 560, marginRight: 40, marginTop: 27 }}
              />
              <HcTextField
                value={percentage}
                titleName=""
                style={{ width: 80, marginTop: -20 }}
                onChange={(e: any) => {
                  if (e.target.value < 100) setPercentage(e.target.value);
                  else if (e.target.value >= 0) setPercentage(e.target.vlaue);
                  else {
                    if (e.target.value > 100) {
                      setPercentage(100);
                      e.target.value = 100;
                    } else if (e.taret.vlaue <= 0) {
                      setPercentage(0);
                      e.target.vlaue = 0;
                    }
                  }
                }}
              />{" "}
            </div>
          )}

          <HcButton
            size="medium"
            styles="secondary"
            style={{ marginTop: 40, marginBottom: 18 }}
          >
            +생성
          </HcButton>
          <HcTableContainer style={{ width: 1240, maxHeight: 200 }}>
            <HcTable>
              <thead>
                <tr>
                  <th style={{ width: 46 }}></th>
                  <th style={{ width: 240 }}>진행 기간</th>
                  <th style={{ width: 240 }}>진행 사항</th>
                  <th style={{ width: 594 }}>설명</th>
                  <th style={{ width: 120 }}>-</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>2022.01.01 ~ 2022.03.01</td>
                  <td>자사 현황 조사</td>
                  <td>자사의 서비스 구조를 조사합니다.</td>
                  <td>-</td>
                </tr>
                {/*   <NullTbody colspan="5" />*/}
              </tbody>
            </HcTable>
          </HcTableContainer>
        </Container>
        <Container
          title="피드백"
          width={1320}
          maxHeight={763}
          style={{ overflow: "visible" }}
        >
          <div style={{ position: "relative", marginBottom: 20 }}>
            <HcTextArea
              row={3}
              style={{ width: 1240, height: 108 }}
              placeholder="목표 및 진행 상황에 대한 피드백 입력"
            />
            <HcButton
              size="small"
              styles="secondary"
              style={{ left: 1181, position: "absolute", top: 74 }}
            >
              완료
            </HcButton>
          </div>
          <FeedBackBox>
            <FeedBackField />
            <FeedBackField />
            <FeedBackField />
          </FeedBackBox>
        </Container>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          {edit == false ? (
            <>
              {" "}
              <HcButton
                onClick={() => {
                  setEdit(true);
                }}
                styles="primary"
                style={{ marginRight: "5px" }}
                size="big"
              >
                수정
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ marginRight: "5px" }}
                size="big"
              >
                삭제
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
            </>
          ) : (
            <>
              {" "}
              <HcButton
                onClick={() => {
                  setEdit(false);
                }}
                styles="primary"
                style={{ marginRight: "5px" }}
                size="big"
              >
                저장
              </HcButton>
              <HcButton
                onClick={() => {
                  setbarOpen(false);
                  setEdit(false);
                }}
                styles="line"
                style={{ marginRight: "5px" }}
                size="big"
              >
                취소
              </HcButton>
            </>
          )}
        </div>
      </HcBottomBar>
    </>
  );
}
