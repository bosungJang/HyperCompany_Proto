import React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  Wrapper,
  Title,
  HcSelect,
} from "common/HcTextField";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcDateRangePicker } from "common/HcDatePicker";

const ContentTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #303030;
  display: inline-block;
  margin-bottom: 28px;
`;

const LabelPictureTextField = styled.div`
  height: 45px;
  width: 360px;
  border-bottom: 1px solid #cecece;
  text-overflow: ellipsis;
  font-size: 16px;
  padding: 8px 12px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  color: #000000;
`;

const FinancialSystemSetting = ({ match }: RouteComponentProps) => {
  const [barOpen, setbarOpen] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState(false);

  return (
    <div style={{ width: "100%" }}>
      <ComponentWrapper style={{ width: "100%", display: "block" }}>
        <div style={{ display: "block", width: "100%", marginTop: "16px" }}>
          <HcTitleTextField
            titleName="회계 환경 설정"
            isBackIcon={false}
            style={{ display: "inline-block" }}
          />
          <div style={{ marginTop: "57px" }}>
            <ContentTitle>회계 기수 및 기준</ContentTitle>
            <div>
              {isEdit == false ? (
                <VariableMultiLayout>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    <Wrapper>
                      <Title required={false}>{"당기 회계  기수"}</Title>
                      <LabelPictureTextField>{"2기"}</LabelPictureTextField>
                    </Wrapper>
                  </div>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    <Wrapper>
                      <Title required={false}>{"기수 적용 기간"}</Title>
                      <LabelPictureTextField>
                        {"2022.01.01 ~ 2022.12.31"}
                      </LabelPictureTextField>
                    </Wrapper>
                  </div>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    <Wrapper>
                      <Title required={false}>{"회계 기준"}</Title>
                      <LabelPictureTextField>{"K-IFRS"}</LabelPictureTextField>
                    </Wrapper>
                  </div>
                </VariableMultiLayout>
              ) : (
                <VariableMultiLayout>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    <HcTextField
                      titleName="당기 회계 기수"
                      name="accountName"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          alert("SUCCESS");
                        }
                      }}
                      style={{ width: "284px", marginBottom: 20 }}
                      required
                      value={"2"}
                      onChange={(e) => {}}
                    />
                  </div>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    <Wrapper>
                      <Title required={false}>{"기수 적용 기간"}</Title>
                      <div style={{ marginTop: "5px" }}>
                        <HcDateRangePicker />
                      </div>
                    </Wrapper>
                  </div>
                  <div
                    style={{
                      flexGrow: 1,
                      marginBlockStart: "0px",
                      marginBlockEnd: "0px",
                    }}
                  >
                    <HcSelect
                      titleName="
                      회계 기준"
                      required
                      style={{ width: "284px", marginBottom: 20 }}
                      value={1}
                      name={""}
                      onChange={(e) => {
                        /*
                setcreateData((prevState) => ({
                  ...prevState,
                  accountType: e.target.value,
                }));
                */
                      }}
                    >
                      <option value="" hidden>
                        회계 기준
                      </option>
                      <option value={1}>K-IFRS</option>
                      <option value={2}>IFRS</option>
                      <option value={3}>중소기업회계기준</option>
                      <option value={4}>일반기업회계기준</option>
                    </HcSelect>
                  </div>
                </VariableMultiLayout>
              )}
            </div>
          </div>
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          {isEdit == false ? (
            <HcButton
              onClick={() => {
                setIsEdit(true);
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              수정
            </HcButton>
          ) : (
            <>
              <HcButton
                onClick={() => {
                  setIsEdit(false);
                }}
                styles="primary"
                style={{ marginRight: "12px" }}
                size="big"
              >
                저장
              </HcButton>
              <HcButton
                onClick={() => {
                  setbarOpen(false);
                  setIsEdit(false);
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
    </div>
  );
};

export default FinancialSystemSetting;
