import { HcTable, HcTableContainer } from "common/HcTableComponent";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcButton from "common/HcButton";
import HcTextField, {
  HcTitleTextField,
  HcSelect,
  SubHeading,
  Title,
} from "common/HcTextField";
import React from "react";
import HcBottomBar from "common/HcBottomBar";
import { HcDateRangePicker, HcDatePicker } from "common/HcDatePicker";

const Container = styled.div`
  display: block;
  width: 387px;
  margin-right: 80px;
`;
export default function CalcResignationPay() {
  const setStart = "";
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="퇴직금 상세" isBackIcon />
        <div style={{ display: "flex" }}>
          <Container style={{ marginTop: 59 }}>
            <HcSelect style={{ width: 376 }} titleName={"적용 대상자"}>
              <option>조직선택</option>
            </HcSelect>

            <Title style={{ marginTop: 20 }} required>
              입사 일자
            </Title>
            <HcDatePicker />
          </Container>
          <Container style={{ marginTop: 144 }}>
            <Title required>퇴직 일자</Title>
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
        <SubHeading
          titleName="3개월 급여 내역"
          required={false}
          style={{ marginTop: 60, marginBottom: 70 }}
        />
        <HcTableContainer style={{ width: "1320px", maxHeight: "261px" }}>
          <HcTable>
            <thead>
              <tr>
                <th style={{ minWidth: 440 }}>근무연월</th>
                <th style={{ minWidth: 440 }}>근무일수</th>
                <th style={{ minWidth: 440 }}>급여 금액(원)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>0</td>
                <td style={{ textAlign: "right" }}>0</td>
              </tr>
              <tr>
                <td></td>
                <td>0</td>
                <td style={{ textAlign: "right" }}>0</td>
              </tr>

              {/*하단고정 */}
              <tr style={{ backgroundColor: "#EFF5FF" }}>
                <td>합계</td>
                <td>0</td>
                <td style={{ textAlign: "right" }}>0</td>
              </tr>
            </tbody>
          </HcTable>{" "}
        </HcTableContainer>
        <div
          style={{ display: "float", marginTop: "40px", marginBottom: "155px" }}
        >
          <HcTextField
            titleName="연간상여금 총액"
            value={""}
            style={{ width: 387, marginRight: 80, height: 36 }}
          />
          <HcTextField
            titleName="연차 수당"
            value={""}
            style={{ width: 386, marginRight: 10, height: 36 }}
          />
          <div style={{ width: 386, float: "right" }}>
            <Title required>지급 일자</Title>
            <HcDatePicker style={{ width: "386px" }} />
          </div>
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 55 }}>
        <div>
          <HcButton
            onClick={() => {
              setbarOpen(false);
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
