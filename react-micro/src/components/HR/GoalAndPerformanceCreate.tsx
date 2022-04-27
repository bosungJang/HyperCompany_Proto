import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
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

export default function GoalAndPerformanceCreate() {
  const [info, openInfo] = useState(true);
  const [subject, openSubject] = useState(false);
  const [progress, openProgress] = useState(true);
  const [percentage, setPercentage] = useState(0);
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  return (
    <>
      <ComponentWrapper
        style={{ display: "block", overflow: "visible", minHeight: 1598 }}
      >
        <HcTitleTextField titleName="목표 생성" isBackIcon />
        <Container
          title="목표 정보"
          width={1320}
          maxHeight={428}
          state={info}
          setState={openInfo}
          defaultHeight={68}
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 80, display: "block", width: 360 }}>
              <HcTextField
                titleName={"목표명"}
                style={{ width: 360, marginBottom: 20 }}
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
                <option>성과 달성 방식 선택</option>
              </HcSelect>
              <HcTextField
                titleName={"목표 수치"}
                style={{ width: 360, textAlign: "right" }}
                value="1,000,000"
                required
              />
            </div>
            <div style={{ marginRight: 80, display: "block", width: 360 }}>
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
                <option>측정 기준 선택</option>
              </HcSelect>
              <HcTextField
                titleName={"가중치"}
                style={{ width: 360 }}
                value="40"
                required
              />
            </div>
            <div style={{ display: "block", width: 360 }}>
              <div style={{ display: "block", marginBottom: 155 }}>
                <Title required>목표 기간</Title>
                <HcDateRangePicker />
              </div>
              <HcSelect titleName={"단위"} style={{ width: 360 }} required>
                <option>단위 선택</option>
              </HcSelect>
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
          state={subject}
          setState={openSubject}
          defaultHeight={68}
          style={{ overflow: "visible" }}
        ></Container>
        <Container
          title="진행 현황"
          width={1320}
          maxHeight={428}
          state={progress}
          setState={openProgress}
          defaultHeight={68}
        >
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
                <NullTbody colspan="5" />
              </tbody>
            </HcTable>
          </HcTableContainer>
        </Container>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          <HcButton styles="primary" style={{ marginRight: "5px" }} size="big">
            생성
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
}
