import { HcTable, HcTableContainer } from "common/HcTableComponent";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcButton from "common/HcButton";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  SubHeading,
  Title,
  HcTagNoInput,
  HcSelect,
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
  const [edit, setEdit] = React.useState(false);
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  const [tag, setTag] = React.useState(["홍길동(AI1-4팀, 연구원)"]);
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="퇴직금 상세" isBackIcon />
        <div style={{ display: "flex" }}>
          {edit === false ? (
            <>
              <Container style={{ marginTop: 59 }}>
                {" "}
                <Title>적용 대상자</Title>
                <HcTagNoInput
                  tags={tag}
                  setTags={setTag}
                  style={{
                    background: "#FFFFFF",
                    maxWidth: "360px",
                    borderBottom: "1px solid #CECECE",
                    borderRadius: 0,
                    minHeight: 36,
                    marginBottom: "20px",
                    marginTop: -5,
                  }}
                  delete={false}
                />
                <HcTextFieldLabel
                  titleName={"입사 일자"}
                  style={{
                    width: 387,
                    marginRight: 80,
                    height: 36,
                  }}
                >
                  2022.01.01
                </HcTextFieldLabel>
              </Container>
              <Container style={{ marginTop: 145 }}>
                <HcTextFieldLabel
                  titleName={"퇴직 일자"}
                  style={{
                    width: 387,
                    marginRight: 80,
                    height: 36,
                  }}
                >
                  2022.01.01
                </HcTextFieldLabel>
              </Container>
              <Container style={{ marginTop: 145, display: "flex" }}>
                <HcTextFieldLabel
                  titleName={"재직 일수"}
                  style={{
                    width: 386,
                    height: 36,
                  }}
                >
                  1096
                </HcTextFieldLabel>
              </Container>
            </>
          ) : (
            <>
              <Container style={{ marginTop: 59 }}>
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
                <HcTagNoInput
                  tags={tag}
                  setTags={setTag}
                  style={{
                    background: "#FFFFFF",
                    maxWidth: "360px",
                    border: "none",
                    minHeight: 26,
                    marginLeft: -5,
                  }}
                  delete
                />

                <Title style={{ marginTop: 20 }} required>
                  입사 일자
                </Title>
                <HcDatePicker />
              </Container>
              <Container style={{ marginTop: 195 }}>
                <Title required>퇴직 일자</Title>
                <HcDatePicker />
              </Container>
              <Container style={{ marginTop: 195, display: "flex" }}>
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
            </>
          )}
        </div>
        <SubHeading
          titleName="3개월 급여 내역"
          required={false}
          style={{ marginTop: 60, marginBottom: 70 }}
        />
        <HcTableContainer style={{ width: "1320px", maxHeight: "266px" }}>
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
                <td>2019.03</td>
                <td>30</td>
                <td style={{ textAlign: "right" }}>4,000,000</td>
              </tr>
              <tr>
                <td>2019.03</td>
                <td>30</td>
                <td style={{ textAlign: "right" }}>4,000,000</td>
              </tr>
              <tr>
                <td>2019.03</td>
                <td>30</td>
                <td style={{ textAlign: "right" }}>4,000,000</td>
              </tr>
              <tr>
                <td>2019.03</td>
                <td>30</td>
                <td style={{ textAlign: "right" }}>4,000,000</td>
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
          {edit === true ? (
            <>
              {" "}
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
            </>
          ) : (
            <>
              <HcTextFieldLabel
                titleName="연간상여금 총액"
                style={{ width: 387, marginRight: 80, height: 36 }}
              >
                1,000,000
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="연차 수당"
                style={{ width: 387, marginRight: 80, height: 36 }}
              >
                1,000,000
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="지급 일자"
                style={{ width: 386, height: 36 }}
              >
                2022.03.01
              </HcTextFieldLabel>
            </>
          )}
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 55 }}>
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
            </HcButton>{" "}
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
                setEdit(false);
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
