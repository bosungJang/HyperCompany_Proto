import { HcTable, HcTableContainer } from "common/HcTableComponent";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcButton from "common/HcButton";
import HcTextField, {
  HcTitleTextField,
  HcSelect,
  SubHeading,
} from "common/HcTextField";
import React from "react";
import HcBottomBar from "common/HcBottomBar";
import { HcDateRangePicker, HcDatePicker } from "common/HcDatePicker";
const Title = styled.div`
  font-family: Noto Sans KR;
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  position: relative;
  line-height: 19px;
  text-transform: uppercase;
  width: fit-content;
  height: 20px;
  color: #656565;
  margin-left: 5px;
  margin-bottom: 5px;
`;
const Container = styled.div`
  display: block;
  width: 387px;
  margin-right: 80px;
`;
export default function CalcResignationPay() {
  const setStart = "";
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="퇴직금 계산" isBackIcon />
        <div style={{ display: "flex" }}>
          <Container style={{ marginTop: 59 }}>
            <HcSelect style={{ width: 376 }} titleName={"적용 대상자"}>
              <option>조직선택</option>
            </HcSelect>

            <Title style={{ marginTop: 20 }}>
              입사 일자<b style={{ color: "red" }}>*</b>
            </Title>
            <HcDatePicker />
          </Container>
          <Container style={{ marginTop: 144 }}>
            <Title>
              퇴직 일자<b style={{ color: "red" }}>*</b>
            </Title>
            <HcDatePicker />
          </Container>
          <Container style={{ marginTop: 144, display: "flex" }}>
            <HcTextField
              titleName={"재직 일수"}
              value={""}
              style={{
                width: 280,
                marginRight: 10,
                height: 36,
                borderRadius: "3px",
              }}
            />
            <HcButton
              styles={"line"}
              size={"medium"}
              style={{
                width: 95,
                marginTop: 25,
                padding: "9px 18px 8px 18px",
                height: 36,
              }}
            >
              기간 조회
            </HcButton>
          </Container>
        </div>
        <SubHeading titleName="3개월 급여 내역" required={false} />
      </ComponentWrapper>
    </>
  );
}
