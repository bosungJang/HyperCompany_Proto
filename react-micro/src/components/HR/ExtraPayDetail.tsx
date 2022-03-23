import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField from "common/HcTextField";
import {
  HcTitleTextField,
  HcEditableTextField,
  HcTextFieldLabel,
  HcSelect,
  HcTagNoInput,
  HcSearchTextField,
} from "common/HcTextField";
import { useLocation } from "react-router-dom";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import styled from "styled-components";
import HcButton from "common/HcButton";
import HcBottomBar from "common/HcBottomBar";
import InfoIconTooltip from "common/HcTooltip";
const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 13px;
  position: relative;
  line-height: 19px;
  text-transform: uppercase;
  width: fit-content;
  height: 20px;
  color: #656565;
`;

const Content = styled.div`
  background: #2d2d31;
  border-radius: 3px;
  height: 39px;
  width: max-content;
  color: #ffffff;
  position: absolute;
  display: block;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  clear: both;
  z-index: 50;
  bottom: 33px;
  margin-left: -10px;
  padding: 10px 14px 10px 14px;
`;

function InfoIcon(props: { message: string }) {
  const [style, setStyle] = useState({ display: "none" });
  return (
    <>
      <Content className="tooltip" style={style}>
        {props.message}
      </Content>
      <svg
        className="tooltip"
        xmlns="http://www.w3.org/2000/svg"
        style={Object.assign(
          {
            position: "absolute",
            bottom: 22,
            marginLeft: 5,
          } as React.CSSProperties,
          style
        )}
        width="17"
        height="12"
        viewBox="0 0 17 12"
        fill="none"
      >
        <path
          d="M8.20508 12L0.205078 0L16.2051 1.36279e-06L8.20508 12Z"
          fill="#2D2D31"
        />
      </svg>

      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: 3, position: "absolute" }}
        onMouseEnter={(e) => {
          setStyle({ display: "inline-block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <rect width="18" height="18" rx="2" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 14.25C11.8995 14.25 14.25 11.8995 14.25 9C14.25 6.10051 11.8995 3.75 9 3.75C6.10051 3.75 3.75 6.10051 3.75 9C3.75 11.8995 6.10051 14.25 9 14.25ZM9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM9.75 6C9.75 6.41421 9.41421 6.75 9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25C9.41421 5.25 9.75 5.58579 9.75 6ZM9 7.5C8.58579 7.5 8.25 7.83579 8.25 8.25V12C8.25 12.4142 8.58579 12.75 9 12.75C9.41421 12.75 9.75 12.4142 9.75 12V8.25C9.75 7.83579 9.41421 7.5 9 7.5Z"
          fill="#838181"
        />
      </svg>
    </>
  );
}
export default function ExtraPayDetail() {
  const [edit, setEdit] = useState(false);
  /*TagInput */
  const [tags2, setTags2] = React.useState(["티맥스엔터프라이즈"]);
  const [inputVal, setInputVal] = React.useState("");
  /*TagInput */

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  return (
    <>
      <ComponentWrapper style={{ display: "inherit", height: 1131 }}>
        <HcTitleTextField
          titleName={edit === false ? "수당/지급 항목 상세" : "수당/지급 수정"}
          isBackIcon={edit === false ? false : true}
        />

        <>
          <div
            style={{
              float: "left",
              width: 387,
              marginRight: 79,
              marginTop: 61,
            }}
          >
            {edit === false ? (
              <HcEditableTextField
                value={"식비"}
                titleName=""
                readonly
                style={{
                  borderBottom: "1px solid #E0E0E0",
                  width: 387,
                  height: 45,
                  fontSize: "24px",
                  fontStyle: "bold",
                  fontWeight: "bold",
                  paddingLeft: 13,
                  marginBottom: 20,
                }}
              />
            ) : (
              <HcTextField
                titleName={""}
                value={"식비"}
                style={{
                  height: 60,
                  fontSize: "24px",
                  marginBottom: 20,
                  marginTop: -15,
                }}
              />
            )}
            <Title style={{ marginBottom: 23 }}>지급 방식</Title>
            <div style={{ marginBottom: 22 }}>
              {" "}
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>정기</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>일시</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
            {edit === false ? (
              <>
                <Title style={{ marginBottom: -20 }}>지급 유형</Title>
                <HcTextFieldLabel
                  titleName=""
                  style={{ marginBottom: 20, width: 387 }}
                >
                  지급율
                </HcTextFieldLabel>{" "}
              </>
            ) : (
              <>
                <HcSelect
                  titleName="지급 유형"
                  style={{ marginBottom: 20, width: 387 }}
                >
                  <option>지급율</option>
                </HcSelect>
              </>
            )}
            <Title style={{ marginBottom: -20 }}>
              비과세 여부{" "}
              <InfoIconTooltip message="식사를 별도로 제공하지 않는 회사의 경우, 최대 월 10만원까지 세금을 부여하지 않습니다." />
            </Title>
            <HcTextFieldLabel
              titleName=" "
              style={{ marginBottom: 20, width: 387, position: "relative" }}
            >
              최대 월 10만원 비과세
            </HcTextFieldLabel>
            <Title style={{ marginBottom: 23 }}>
              입사월에 지급
              <InfoIconTooltip
                message={
                  "월 중간에 입사한 구성원의 경우, 해당 수당의 지급 방법을 선택합니다."
                }
              />
            </Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>
                    일할 계산 후
                  </span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>전액</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
            <HcSearchTextField
              titleName="적용 대상자"
              name="name"
              value={inputVal}
              placeholder="조직 검색"
              onChange={(e) => {
                const lengthOfInputValue = inputVal.split("").length;

                if (lengthOfInputValue !== 10)
                  setInputVal(e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  inputVal.trim() !== "" /*&& props.tags.length < 4 */
                ) {
                  setTags2([...tags2, e.currentTarget.value]);
                  setInputVal("");
                }
              }}
            />{" "}
            <br />
            <HcTagNoInput tags={tags2} setTags={setTags2} />
          </div>
          <div
            style={{
              float: "left",
              width: 387,
              marginRight: 77,
              marginTop: 61,
            }}
          >
            <Title style={{ marginBottom: 23, marginTop: 90 }}>지급 시기</Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>매월</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>매년</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>

            <Title style={{ marginBottom: -20 }}>
              지급율{" "}
              <InfoIconTooltip
                message={"기본급의 지급 비율을 설정할 수 있습니다."}
              />
            </Title>
            {edit === false ? (
              <>
                <HcTextFieldLabel
                  titleName=""
                  style={{ marginBottom: 20, width: 387, position: "relative" }}
                >
                  0
                  <div
                    style={{
                      marginLeft: 380,
                      position: "absolute",
                      right: 10,
                      top: 3,
                      fontSize: "13px",
                      color: "#5D5D62",
                    }}
                  >
                    %
                  </div>
                </HcTextFieldLabel>
              </>
            ) : (
              <>
                <HcTextField titleName="" value={"2"} style={{ width: 387 }} />
              </>
            )}
            <Title style={{ marginBottom: 23, marginTop: 20 }}>
              통상임금 포함 여부
              <InfoIconTooltip
                message={
                  "소정근로의 대가로 근로자에게 지급되는 금품으로 정기적ㆍ일률적ㆍ고정적으로 지급되는 임금입니다."
                }
              />
            </Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>포함</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>미포함</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
            <Title style={{ marginBottom: 23, marginTop: 20 }}>
              퇴사월에 지급
              <InfoIconTooltip
                message={
                  "월 중간에 퇴사한 구성원의 경우, 해당 수당의 지급 방법을 선택합니다."
                }
              />
            </Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>
                    일할 계산 후
                  </span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>전액</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
          </div>
          <div
            style={{
              float: "left",
              width: 387,
              marginTop: 61,
            }}
          >
            <Title style={{ marginBottom: 23, marginTop: 260 }}>
              연봉 포함 여부
            </Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>포함</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>미포함</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
          </div>
        </>
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
