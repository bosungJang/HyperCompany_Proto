import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField from "common/HcTextField";
import {
  HcTitleTextField,
  HcEditableTextField,
  HcTextFieldLabel,
  HcSelect,
  HcTagNoInput,
} from "common/HcTextField";
import { useLocation } from "react-router-dom";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import styled from "styled-components";
import HcButton from "common/HcButton";
import HcBottomBar from "common/HcBottomBar";
import InfoIconTooltip from "common/HcTooltip";
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

export default function DeductDetail() {
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
          titleName={edit === false ? "공제 항목 상세" : "공제 항목 수정"}
          isBackIcon={edit === false ? false : true}
        />

        <>
          <div
            style={{
              float: "left",
              width: 387,
              marginRight: 79,
              marginTop: 40,
            }}
          >
            {edit === false ? (
              <HcEditableTextField
                value={"동호회비"}
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
                value={"동호회비"}
                style={{
                  height: 60,
                  fontSize: "24px",
                  marginBottom: 20,
                  marginTop: -15,
                }}
              />
            )}
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
            {edit === false ? (
              <>
                <Title style={{ marginBottom: -20 }}>공제 유형</Title>
                <HcTextFieldLabel
                  titleName=""
                  style={{ marginBottom: 20, width: 387 }}
                >
                  공제율
                </HcTextFieldLabel>{" "}
                <Title>적용 대상자</Title>
                <HcTagNoInput
                  tags={tags2}
                  setTags={setTags2}
                  delete={false}
                  style={{
                    backgroundColor: "#ffffff",
                    minHeight: 26,
                    borderBottom: "1px solid #e0e0e0",
                  }}
                />
              </>
            ) : (
              <>
                <HcSelect
                  titleName="공제 유형"
                  style={{ marginBottom: 20, width: 387 }}
                >
                  <option>지급율</option>
                </HcSelect>
                <div style={{ display: "flex" }}>
                  <HcSelect
                    titleName="적용 대상자"
                    style={{ width: 100, marginRight: 10 }}
                  >
                    <option>조직</option>
                  </HcSelect>
                  <HcSelect titleName="" style={{ width: 276, marginTop: 0 }}>
                    <option>조직선택</option>
                  </HcSelect>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              float: "left",
              width: 387,
              marginRight: 77,
              marginTop: 60,
            }}
          >
            <Title style={{ marginBottom: 23, marginTop: 70 }}>공제 시기</Title>
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
              공제율
              <InfoIconTooltip
                message={"기본급의 지급 비율을 설정할 수 있습니다."}
              />
            </Title>
            {edit === false ? (
              <>
                <HcTextFieldLabel
                  titleName=""
                  style={{
                    marginBottom: 20,
                    width: 387,
                    position: "relative",
                    height: 36,
                  }}
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
