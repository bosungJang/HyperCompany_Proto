import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  SubHeading,
  HcTextFieldLabel,
  Title,
  HcTextArea,
  HcSelect,
  TextField,
} from "common/HcTextField";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import styled from "styled-components";
import { useState } from "react";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
const Container = styled.div`
  width: 1320px;
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 19px 24px 0px 24px;
  display: block;
  height: fit-content;
`;
const Index = styled(Title)`
  font-size: 20px;
`;

interface ItemProps {
  count: number;
  option: number;
}

export function Items(props: ItemProps) {
  const items: any = [
    "전혀 아니다",
    "약간 아니다",
    "보통이다",
    "약간 그렇다",
    "매우 그렇다",
  ];
  const result: any[] = [];
  let index = 1;
  const field = () => {
    for (let i = 1; i <= props.count; i++) {
      result.push(
        <li
          style={{
            display: "flex",
            marginTop: 10,
            position: "relative",
            marginLeft: 270,
          }}
        >
          {
            {
              1: (
                <>
                  <div
                    className="radioButton"
                    style={{ marginTop: 7, cursor: "pointer", marginRight: 14 }}
                  >
                    <HcRadioGroup
                      defaultValue="true"
                      onChange={(value) => console.log("value: ", value)}
                    >
                      <HcRadioButton value="false" />
                    </HcRadioGroup>
                  </div>
                  <TextField value={""} style={{ width: 400 }} />
                </>
              ),

              4: (
                <>
                  <Index>{index++}.</Index>
                  <TextField value={""} style={{ width: 400 }} />
                </>
              ),
            }[props.option]
          }
        </li>
      );
    }
    return result;
  };
  return <ul>{field()}</ul>;
}
export default function EtcEvaluationDetail() {
  const [count, setCount] = useState(5);
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */

  function Counter() {
    const Count = styled.div`
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      border: 1px solid #cecece;
      border-radius: 3px;
      width: 90px;
      height: 36px;
      position: relative;
      padding: 6px 0px 7px 10px;
    `;
    const Grid = styled.div`
      background: #cecece;
      position: absolute;
      left: 66px;
    `;
    return (
      <>
        <Count>
          {count}
          <Title
            style={{ fontSize: 13, position: "absolute", top: 7, left: 50 }}
          >
            개
          </Title>
          <Grid style={{ width: 1, height: 35, top: 0 }} />
          <Grid style={{ width: 23, height: 1, top: 18 }} />
          <svg
            style={{ position: "absolute", top: 1, left: 70 }}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setCount(count + 1)}
          >
            <path
              d="M8 5.33301L11.4641 9.33301L4.5359 9.33301L8 5.33301Z"
              fill="#5D5D62"
            />
          </svg>
          <svg
            onClick={() => setCount(count - 1)}
            style={{ position: "absolute", top: 18, left: 70 }}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10.667L4.5359 6.66699L11.4641 6.66699L8 10.667Z"
              fill="#5D5D62"
            />
          </svg>
        </Count>
      </>
    );
  }
  const [option, setOption] = useState(4);
  const handleSelect = (e: any) => {
    setOption(e.target.value);
  };

  return (
    <>
      <ComponentWrapper style={{ display: "block", minHeight: 1120 }}>
        <HcTitleTextField titleName="기타 평가 생성" isBackIcon />

        <TextField
          style={{
            marginTop: 37,
            width: 400,
            fontSize: "24px",
            fontWeight: 500,
            marginBottom: 20,
            height: "60px",
          }}
          placeholder="기타 평가명 입력
          "
        />
        <br />
        <HcSelect titleName="직무" style={{ width: 400, marginBottom: 44 }}>
          <option selected>직무 선택</option>
          <option>기획</option>
          <option>경영지원</option>
          <option>인사</option>
          <option>재무</option>
        </HcSelect>

        <SubHeading titleName="평가 문항" style={{ marginBottom: 18 }} />
        <Container style={{ paddingBottom: 0 }}>
          <SubHeading titleName="기타 평가 항목 1" style={{}} />

          <div style={{ display: "flex", marginTop: 25 }}>
            <HcSelect
              titleName=""
              style={{ width: 200, marginRight: 24 }}
              value={option}
              onChange={handleSelect}
            >
              <option value={1}>객관식</option>
              <option value={2}>주관식</option>
              <option value={3}>등급</option>
              <option value={4}>척도</option>
            </HcSelect>
            <TextField style={{ width: 1046 }} placeholder="질문 입력" />
          </div>

          <div style={{ display: "flex", marginTop: 14, marginBottom: 24 }}>
            <Title style={{ marginLeft: 224, marginRight: 20, marginTop: 8 }}>
              {
                {
                  1: "답변 항목 갯수",
                  2: "최대 글자수",
                  3: "등급 항목",
                  4: "척도 항목",
                }[option]
              }
            </Title>
            {Counter()}
          </div>
          <Items count={count} option={option} />
          <div
            className="DeleteField"
            style={{
              width: 1318,
              height: "40px",
              backgroundColor: "#F9F9F9",
              marginTop: 0,
              marginLeft: "-24px",
              borderBottomRightRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 1288, marginTop: 8 }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4.75C8 4.33579 8.33579 4 8.75 4H15.25C15.6642 4 16 4.33579 16 4.75C16 5.16421 15.6642 5.5 15.25 5.5H8.75C8.33579 5.5 8 5.16421 8 4.75ZM4 7.25C4 6.83579 4.33579 6.5 4.75 6.5H19.25C19.6642 6.5 20 6.83579 20 7.25C20 7.66421 19.6642 8 19.25 8H18.75V17.5C18.75 18.7426 17.7426 19.75 16.5 19.75H8C6.75736 19.75 5.75 18.7426 5.75 17.5V8H4.75C4.33579 8 4 7.66421 4 7.25ZM7.25 8V17.5C7.25 17.9142 7.58579 18.25 8 18.25H16.5C16.9142 18.25 17.25 17.9142 17.25 17.5V8H7.25ZM10.75 9C10.3358 9 10 9.33579 10 9.75V15.25C10 15.6642 10.3358 16 10.75 16C11.1642 16 11.5 15.6642 11.5 15.25V9.75C11.5 9.33579 11.1642 9 10.75 9ZM13 9.75C13 9.33579 13.3358 9 13.75 9C14.1642 9 14.5 9.33579 14.5 9.75V15.25C14.5 15.6642 14.1642 16 13.75 16C13.3358 16 13 15.6642 13 15.25V9.75Z"
                fill="#5D5D62"
              />
            </svg>
          </div>
        </Container>
        <HcButton size="medium" styles="line" style={{ marginTop: 20 }}>
          + 평가 단계 추가
        </HcButton>
        <Title style={{ marginTop: 24, marginLeft: 8, marginBottom: 10 }}>
          설명
        </Title>
        <HcTextArea
          style={{
            width: 1320,
            height: 88,
            marginBottom: 340,
          }}
          row={3}
        />
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          <HcButton
            onClick={() => {}}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            생성
          </HcButton>

          <HcButton
            onClick={() => {}}
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
