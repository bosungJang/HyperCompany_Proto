import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import { CalendarIcon } from "common/HcDatePicker";
import HcTextField, {
  HcTagNoInput,
  HcTextFieldLabel,
  HcTitleTextField,
  Title,
  HcSelect,
} from "common/HcTextField";
import { useState } from "react";
import styled from "styled-components";
import HcButton from "common/HcButton";
import HcToggleBtn from "common/HcToggleBtn";
import InfoIconTooltip from "common/HcTooltip";
import HcBottomBar from "common/HcBottomBar";
import { HcDateRangePicker, HcDatePicker } from "common/HcDatePicker";

const Card = (props: any) => {
  const { name, type, start, end, percent, style, edit } = props;
  const StyledDiv = styled.div`
    background: #ffffff;
    width: 1272px;
    border: 1px solid #cecece;
    border-radius: 4px;
    padding: 19px 24px 24px 24px;
  `;
  const CheckField = styled(StyledDiv)`
    width: 378px;
    height: 70px;
    padding: 28px 16px 17px 20px;
    margin-top: 24px;
    float: left;
    display: flex;
    position: relative;
  `;
  const Name = styled.div`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-left: 16px;
    margin-top: -3px;
    width: fit-content;
    height: fit-content;
    float: left;
  `;
  const percentIcon = () => {
    return (
      <svg
        width="13"
        height="11"
        viewBox="0 0 13 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", left: 60, top: 17 }}
      >
        <path
          d="M3.09072 6.308C4.42972 6.308 5.33972 5.19 5.33972 3.266C5.33972 1.342 4.42972 0.249999 3.09072 0.249999C1.75172 0.249999 0.854719 1.342 0.854719 3.266C0.854719 5.19 1.75172 6.308 3.09072 6.308ZM3.09072 5.424C2.42772 5.424 1.94672 4.735 1.94672 3.266C1.94672 1.784 2.42772 1.134 3.09072 1.134C3.76672 1.134 4.24772 1.784 4.24772 3.266C4.24772 4.735 3.76672 5.424 3.09072 5.424ZM3.38972 10.169H4.32572L9.57772 0.249999H8.62872L3.38972 10.169ZM9.88972 10.169C11.2157 10.169 12.1257 9.064 12.1257 7.14C12.1257 5.216 11.2157 4.124 9.88972 4.124C8.55072 4.124 7.64072 5.216 7.64072 7.14C7.64072 9.064 8.55072 10.169 9.88972 10.169ZM9.88972 9.298C9.21372 9.298 8.73272 8.609 8.73272 7.14C8.73272 5.658 9.21372 5.008 9.88972 5.008C10.5527 5.008 11.0337 5.658 11.0337 7.14C11.0337 8.609 10.5527 9.298 9.88972 9.298Z"
          fill="#5D5D62"
        />
      </svg>
    );
  };
  const styles = {
    width: 80,
    position: "absolute",
    bottom: 14,
    left: 284,
    border: "1px solid #E0E0E0",
    background: edit === false ? "#F4F4F4" : "#fffff",
    borderRadius: "3px",
    fontSize: "14px",
    color: "#CECECE",
    fontWeight: 500,
  } as React.CSSProperties;
  return (
    <StyledDiv style={{ height: edit === true ? 278 : 232 }}>
      <div
        style={{
          fontFamily: "Noto Sans KR",
          fontWeight: 400,
          fontSize: "18px",
          color: " #2D2D31",
          marginBottom: 24,
        }}
      >
        평가 단계 설정
      </div>
      <div>
        {edit === false ? (
          <div style={{ marginTop: -23 }}>
            {" "}
            <HcTextFieldLabel
              style={{ width: 200, marginRight: 16 }}
              titleName=""
            >
              {type}
            </HcTextFieldLabel>
            <HcTextFieldLabel
              style={{ width: 486, marginRight: 40 }}
              titleName=""
            >
              {name}
            </HcTextFieldLabel>
            <HcTextFieldLabel
              style={{ width: 160, marginRight: 14, position: "relative" }}
              titleName=""
            >
              {start}
              <CalendarIcon style={{ left: 110 }} />
            </HcTextFieldLabel>
            ~
            <HcTextFieldLabel
              style={{ width: 160, marginLeft: 14, position: "relative" }}
              titleName=""
            >
              {end}
              <CalendarIcon style={{ left: 110 }} />
            </HcTextFieldLabel>
            <HcTextFieldLabel
              style={{
                width: 80,
                marginLeft: 35,
                position: "relative",
                marginTop: -63,
                height: 36,
              }}
              titleName=""
            >
              {percent}
              {percentIcon()}
            </HcTextFieldLabel>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            {" "}
            <div style={{ marginTop: -23 }}>
              <HcSelect titleName="" style={{ width: 200 }}>
                <option>본인 평가</option>
              </HcSelect>
              <HcTextField
                value="1차 본인 평가"
                titleName=""
                style={{
                  width: "480px",
                  marginLeft: 14,
                  marginRight: 35,
                }}
              />{" "}
            </div>
            <HcDateRangePicker />
            <HcTextFieldLabel
              style={{
                borderRadius: "3px",
                fontSize: "14px",
                color: "#CECECE",
                fontWeight: 500,
                border: "1px solid #E0E0E0",
                marginTop: -23,
                marginLeft: 30,
                width: 80,
                position: "relative",
              }}
              titleName=""
            >
              가중치{percentIcon()}
            </HcTextFieldLabel>
          </div>
        )}
      </div>
      <CheckField>
        <HcCheckBox
          checked={true}
          onChange={(e) => {}}
          disabled={edit === true ? false : true}
        />
        <Name>역량</Name>
        <HcTextFieldLabel
          style={{ width: 80, position: "absolute", bottom: 17, left: 284 }}
          titleName=""
        >
          100{percentIcon()}
        </HcTextFieldLabel>
      </CheckField>
      <CheckField style={{ marginLeft: 42 }}>
        <HcCheckBox
          checked={false}
          onChange={(e) => {}}
          disabled={edit === true ? false : true}
        />
        <Name>성과</Name>
        <HcTextFieldLabel style={styles} titleName="">
          가중치{percentIcon()}
        </HcTextFieldLabel>
      </CheckField>
      <CheckField style={{ marginLeft: 42 }}>
        <HcCheckBox
          checked={false}
          onChange={(e) => {}}
          disabled={edit === true ? false : true}
        />
        <Name>기타</Name>
        <HcButton
          size="medium"
          styles="line"
          style={{
            marginTop: -8,
            marginLeft: 6,
            display: edit === true ? "" : "none",
          }}
        >
          선택
        </HcButton>
        <HcTextFieldLabel style={styles} titleName="">
          가중치{percentIcon()}
        </HcTextFieldLabel>
      </CheckField>
      <div
        className="DeleteField"
        style={{
          width: 1270,
          height: "40px",
          backgroundColor: "#F9F9F9",
          marginTop: 122,
          marginLeft: "-24px",
          borderBottomRightRadius: "4px",
          borderBottomLeftRadius: "4px",
          display: edit === false ? "none" : "",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: 1238, marginTop: 8 }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4.75C8 4.33579 8.33579 4 8.75 4H15.25C15.6642 4 16 4.33579 16 4.75C16 5.16421 15.6642 5.5 15.25 5.5H8.75C8.33579 5.5 8 5.16421 8 4.75ZM4 7.25C4 6.83579 4.33579 6.5 4.75 6.5H19.25C19.6642 6.5 20 6.83579 20 7.25C20 7.66421 19.6642 8 19.25 8H18.75V17.5C18.75 18.7426 17.7426 19.75 16.5 19.75H8C6.75736 19.75 5.75 18.7426 5.75 17.5V8H4.75C4.33579 8 4 7.66421 4 7.25ZM7.25 8V17.5C7.25 17.9142 7.58579 18.25 8 18.25H16.5C16.9142 18.25 17.25 17.9142 17.25 17.5V8H7.25ZM10.75 9C10.3358 9 10 9.33579 10 9.75V15.25C10 15.6642 10.3358 16 10.75 16C11.1642 16 11.5 15.6642 11.5 15.25V9.75C11.5 9.33579 11.1642 9 10.75 9ZM13 9.75C13 9.33579 13.3358 9 13.75 9C14.1642 9 14.5 9.33579 14.5 9.75V15.25C14.5 15.6642 14.1642 16 13.75 16C13.3358 16 13 15.6642 13 15.25V9.75Z"
            fill="#5D5D62"
          />
        </svg>
      </div>
    </StyledDiv>
  );
};

export default function EvaluationPlanDetail() {
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */

  /*ToggleBtn */
  const [isToggled, setIsToggled] = useState(false);
  /*ToggleBtn */

  const [tag, setTag] = useState(["티맥스 엔터프라이즈"]);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <ComponentWrapper
        style={{
          display: "block",
          minHeight: 1300,
          position: "relative",
          zIndex: 1,
        }}
      >
        <HcTitleTextField
          titleName={edit === false ? "평가 계획 상세" : "평가 계획 수정"}
          isBackIcon
        />
        <Container
          title="평가 계획 정보"
          maxHeight={350}
          width={1320}
          style={{ marginTop: 39, overflow: "visible", zIndex: 2 }}
        >
          <div style={{ display: "flex" }}>
            {edit === false ? (
              <>
                <div style={{ marginRight: 80, display: "block", width: 360 }}>
                  <HcTextFieldLabel
                    titleName={"평가 계획명"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    1분기 평가
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName={"평가 대상 기간"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    2022.01.01~2022.01.01
                  </HcTextFieldLabel>
                  <Title>평가 대상자</Title>
                  <HcTagNoInput
                    tags={tag}
                    setTags={setTag}
                    style={{
                      background: "#FFFFFF",
                      maxWidth: "360px",
                      borderBottom: "1px solid #CECECE",
                      borderRadius: 0,
                      minHeight: 26,
                    }}
                    delete={false}
                  />
                </div>

                <div style={{ marginRight: 80, display: "block", width: 360 }}>
                  <HcTextFieldLabel
                    titleName={"평가 종류"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    분기 평가
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName={"평가 실시 기간"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    2022.01.01~2022.01.01
                  </HcTextFieldLabel>
                </div>
                <div style={{ display: "block", width: 360, marginTop: 85 }}>
                  <HcTextFieldLabel
                    titleName={"평가 결과 공개 일자"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    2022.03.01
                  </HcTextFieldLabel>
                </div>
              </>
            ) : (
              <>
                <div style={{ marginRight: 80, display: "block", width: 360 }}>
                  <HcTextField
                    value="2022년 1분기 평가"
                    titleName="평가 계획명"
                    style={{ width: 360, marginBottom: 20 }}
                  />
                  <Title>평가 대상 기간</Title>
                  <HcDateRangePicker />
                  <div
                    style={{ marginTop: 56, display: "flex", marginBottom: 10 }}
                  >
                    <HcSelect titleName="평가대상자" style={{ width: 160 }}>
                      <option>조직 개편일</option>
                    </HcSelect>
                    <HcSelect
                      titleName=""
                      style={{ width: 120, marginLeft: 10 }}
                    >
                      <option>조직</option>
                    </HcSelect>
                    <HcSelect
                      titleName=""
                      style={{ width: 300, marginLeft: 10 }}
                    >
                      <option>조직 선택</option>
                    </HcSelect>
                  </div>
                  <HcTagNoInput
                    tags={tag}
                    setTags={setTag}
                    style={{
                      background: "#FFFFFF",
                      maxWidth: "360px",
                      marginLeft: -10,
                      borderRadius: 0,
                      marginTop: -10,
                      minHeight: 36,
                    }}
                    delete
                  />
                </div>
                <div style={{ marginRight: 80, display: "block", width: 360 }}>
                  <HcSelect
                    titleName={"평가 종류"}
                    style={{ width: 360, marginBottom: 20 }}
                  >
                    <option>분기 평가</option>
                  </HcSelect>

                  <Title>평가 실시 기간</Title>
                  <HcDateRangePicker />
                </div>{" "}
                <div style={{ display: "block", width: 360, marginTop: 85 }}>
                  <Title>평가 결과 공개 일자</Title>
                  <HcDatePicker style={{ width: 360 }} />
                </div>
              </>
            )}
          </div>
        </Container>
        <Container
          title="평가 단계"
          maxHeight={370}
          width={1320}
          style={{
            zIndex: 1,
            maxHeight: "unset",
            minHeight: edit === false ? 370 : 422,
          }}
        >
          <div style={{ display: "block", marginLeft: -16 }}>
            <Card
              type={"본인평가"}
              name={"본인평가"}
              start={"2022.01.01"}
              end={"2022.01.01"}
              percent={100}
              edit={edit}
            />
            <HcButton size="medium" styles="line" style={{ marginTop: 20 }}>
              + 평가 단계 추가
            </HcButton>
          </div>
        </Container>
        <Container title="기타 설정" maxHeight={142} width={1320}>
          <div style={{ display: "flex" }}>
            {" "}
            <Title
              style={{
                display: "flex",
                marginRight: "50px",
                color: "#5D5D62",
                fontSize: "16px",
                position: "relative",
                lineHeight: "23px",
              }}
            >
              평가 안내 알림
              <div style={{ marginTop: "5px" }}>
                <InfoIconTooltip message="평가안내알림" />
              </div>
            </Title>
            <HcToggleBtn
              id="test-switch"
              toggled={isToggled}
              onChange={(e) => {
                if (edit === true) setIsToggled(e.target.checked);
              }}
            />
            <Title
              style={{ marginLeft: "6px", color: "#5D5D62", fontSize: "16px" }}
            >
              {isToggled == true ? "On" : "Off"}
            </Title>
          </div>
        </Container>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        {edit === false ? (
          <div>
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
              onClick={() => {
                setbarOpen(false);
              }}
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
          </div>
        ) : (
          <div>
            <HcButton
              onClick={() => {}}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              저장
            </HcButton>

            <HcButton
              onClick={() => {
                setEdit(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              취소
            </HcButton>
          </div>
        )}
      </HcBottomBar>
    </>
  );
}
