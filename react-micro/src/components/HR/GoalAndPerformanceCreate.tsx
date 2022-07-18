import { ComponentWrapper, Container } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  HcSelect,
  Title,
  SubHeading,
} from "common/HcTextField";
import { useState, useRef, useEffect } from "react";
import ProgressBar from "common/HcProgressBar";
import HcButton from "common/HcButton";
import { HcTable, HcTableContainer, NullTbody } from "common/HcTableComponent";
import styled from "styled-components";
import InfoIconTooltip from "common/HcTooltip";
import { HcDateRangePicker } from "common/HcDatePicker";
import HcBottomBar from "common/HcBottomBar";
import HcSideBar from "common/HcSideBar";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
const Item = styled.div`
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 15px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 10px;
  display: flex;
`;
const KPIs = Array(100)
  .fill(undefined)
  .map(() => "경영성과 적시 보고");

export default function GoalAndPerformanceCreate() {
  const [percentage, setPercentage] = useState(0);
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  /*side bar */
  const [sideBar, setSideBar] = useState(false);
  const modalEl: any = useRef();
  const handleClickOutside = ({ target }: any) => {
    if (sideBar && !modalEl.current.contains(target)) setSideBar(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /*side bar*/
  return (
    <>
      <ComponentWrapper
        style={{ display: "block", overflow: "visible", minHeight: 1598 }}
      >
        <HcTitleTextField titleName="목표 생성" isBackIcon />
        <Container title="목표 정보" width={1320} maxHeight={428}>
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
                  onClick={() => {
                    setSideBar(true);
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
          style={{ overflow: "visible" }}
        ></Container>
        <Container title="진행 현황" width={1320} maxHeight={428}>
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
      <HcSideBar open={sideBar} ref={modalEl}>
        <SubHeading titleName="KPI 선택" />
        <div style={{ display: "flex", marginBottom: 20 }}>
          {" "}
          <HcSelect
            titleName=""
            style={{ width: 190, height: 36, marginRight: 294 }}
          >
            <option>KPI그룹 선택</option>
          </HcSelect>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: 35 }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.45 3.49741C14.715 5.76245 14.715 9.43481 12.45 11.6999C10.185 13.9649 6.51261 13.9649 4.24757 11.6999C1.98253 9.43481 1.98253 5.76245 4.24757 3.49741C6.51261 1.23237 10.185 1.23237 12.45 3.49741ZM14.235 12.2477C16.5661 9.30381 16.3718 5.01503 13.6521 2.29533C10.7232 -0.6336 5.97442 -0.6336 3.04549 2.29533C0.116556 5.22426 0.116556 9.973 3.04549 12.9019C5.67321 15.5297 9.76569 15.7999 12.6947 13.7126L17.3199 18.3379C17.7349 18.7528 18.4076 18.7528 18.8225 18.3379C19.2375 17.9229 19.2375 17.2502 18.8225 16.8353L14.235 12.2477Z"
              fill="#5D5D62"
            />
          </svg>
        </div>
        <div style={{ width: 514, height: 614, overflowY: "auto" }}>
          {KPIs.map((KPI) => (
            <Item>
              {KPI}
              <div
                className="radioButton"
                style={{ marginLeft: 330, marginTop: -2, cursor: "pointer" }}
              >
                <HcRadioGroup
                  defaultValue="true"
                  onChange={(value) => console.log("value: ", value)}
                >
                  <HcRadioButton value="false" />
                </HcRadioGroup>
              </div>
            </Item>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 30, marginLeft: 364 }}>
          <HcButton
            size="medium"
            styles="secondary"
            onClick={() => setSideBar(false)}
            style={{ marginRight: 10 }}
          >
            선택
          </HcButton>
          <HcButton
            size="medium"
            styles="line"
            onClick={() => setSideBar(false)}
          >
            취소
          </HcButton>
        </div>
      </HcSideBar>
    </>
  );
}
