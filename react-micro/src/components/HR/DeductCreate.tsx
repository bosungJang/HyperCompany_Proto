import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField from "common/HcTextField";
import {
  HcTitleTextField,
  HcSelect,
  HcTagNoInput,
  HcSearchTextField,
  HcTextFieldLabel,
} from "common/HcTextField";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import styled from "styled-components";
import HcButton from "common/HcButton";
import HcBottomBar from "common/HcBottomBar";
const Title = styled.div`
  font-family: Noto Sans KR;
  font-size: 13px;
  position: relative;
  line-height: 19px;
  text-transform: uppercase;
  width: fit-content;
  height: 20px;
  color: #656565;
`;

export default function DeductCreate() {
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
        <HcTitleTextField titleName="공제 항목 생성" isBackIcon={true} />

        <>
          <div
            style={{
              float: "left",
              width: 387,
              marginRight: 79,
              marginTop: 40,
            }}
          >
            <HcTextField
              titleName={""}
              value={""}
              style={{
                height: 60,
                fontSize: "24px",
                marginBottom: 20,
                marginTop: -15,
              }}
            />

            <Title style={{ marginBottom: 23 }}>공제 방식</Title>
            <div style={{ marginBottom: 22 }}>
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

            <HcSelect
              titleName="공제 유형"
              style={{ marginBottom: 20, width: 387 }}
              onChange={() => {}}
            >
              <option value="none">공제 유형 선택</option>
            </HcSelect>

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
            />
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
            <Title style={{ marginBottom: 23, marginTop: 70 }}>공제 시기</Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>지정</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>미정</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
          </div>
          <div
            style={{
              float: "left",
              width: 387,
              marginTop: 151,
            }}
          >
            <HcSelect titleName="공제 연월" style={{ width: 386 }}>
              <option>지급 연월 선택</option>
            </HcSelect>
          </div>
        </>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          <>
            {" "}
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
                setbarOpen(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              취소
            </HcButton>
          </>
        </div>
      </HcBottomBar>
    </>
  );
}
