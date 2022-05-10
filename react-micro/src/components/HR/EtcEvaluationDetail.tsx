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

const TextFieldNoLabel = styled.div`
  padding: 2px 5px 5px 10px;
  border-bottom: 1px solid #cecece;
  width: fit-content;
  height: fit-content;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000000;
`;
interface ItemProps {
  scale: number;
  edit: boolean;
}

export function Items(props: ItemProps) {
  const items: any = [
    "전혀 아니다",
    "약간 아니다",
    "보통이다",
    "약간 그렇다",
    "매우 그렇다",
  ];
  let index = 1;
  return (
    <ul>
      {items.slice(0, props.scale).map((item: any) => (
        <li
          style={{
            display: "flex",
            marginTop: 10,
            position: "relative",
            marginLeft: 270,
          }}
        >
          <Index>{index++}.</Index>
          {props.edit === false ? (
            <TextFieldNoLabel style={{ width: 400 }}>{item}</TextFieldNoLabel>
          ) : (
            <TextField value={item} style={{}} />
          )}
        </li>
      ))}
    </ul>
  );
}
export default function EtcEvaluationDetail() {
  const [edit, setEdit] = useState(false);
  const [scale, setScale] = useState(5);
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */

  function Counter() {
    const Scales = styled.div`
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
        <Scales>
          {scale}
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
            onClick={() => setScale(scale + 1)}
          >
            <path
              d="M8 5.33301L11.4641 9.33301L4.5359 9.33301L8 5.33301Z"
              fill="#5D5D62"
            />
          </svg>
          <svg
            onClick={() => setScale(scale - 1)}
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
        </Scales>
      </>
    );
  }
  return (
    <>
      <ComponentWrapper style={{ display: "block", minHeight: 1120 }}>
        <HcTitleTextField
          titleName={edit === false ? "기타 평가 상세" : "기타 평가 수정"}
          isBackIcon
        />
        {edit === false ? (
          <>
            <div
              style={{
                width: 400,
                fontSize: "24px",
                fontWeight: 500,
                borderBottom: "1px solid #CECECE",
                fontFamily: "Noto Sans KR",
                marginTop: 37,
                marginBottom: 20,
                padding: 11,
              }}
            >
              기획_평가 단계
            </div>{" "}
            <HcTextFieldLabel
              titleName="직무"
              style={{ width: 400, marginBottom: 44 }}
            >
              기획
            </HcTextFieldLabel>
          </>
        ) : (
          <>
            <TextField
              value="기획_평가 단계"
              style={{
                marginTop: 37,
                width: 400,
                fontSize: "24px",
                fontWeight: 500,
                marginBottom: 20,
                height: "60px",
              }}
            />
            <br />
            <HcSelect titleName="직무" style={{ width: 400, marginBottom: 44 }}>
              <option>기획</option>
              <option>경영지원</option>
              <option>인사</option>
              <option selected>재무</option>
            </HcSelect>
          </>
        )}
        <SubHeading titleName="평가 문항" style={{ marginBottom: 18 }} />
        <Container style={{ paddingBottom: edit === true ? 0 : 40 }}>
          <SubHeading titleName="기타 평가 항목 1" style={{}} />

          {edit === false ? (
            <div style={{ display: "flex" }}>
              <HcTextFieldLabel
                titleName=""
                style={{ width: 200, marginRight: 24 }}
              >
                척도
              </HcTextFieldLabel>
              <HcTextFieldLabel titleName="" style={{ width: 1046 }}>
                우리 팀원은 누구든지 확고한 목적의식을 가지고 업무에 임하는
                편이다.
              </HcTextFieldLabel>
            </div>
          ) : (
            <div style={{ display: "flex", marginTop: 25 }}>
              <HcSelect titleName="" style={{ width: 200, marginRight: 24 }}>
                <option>객관식</option>
                <option>주관식</option>
                <option>등급</option>
                <option>척도</option>
              </HcSelect>
              <TextField
                style={{ width: 1046 }}
                value="우리 팀원은 누구든지 확고한 목적의식을 가지고 업무에 임하는
                편이다."
              />
            </div>
          )}

          <div style={{ display: "flex", marginTop: 14, marginBottom: 24 }}>
            <Title style={{ marginLeft: 224, marginRight: 20, marginTop: 8 }}>
              척도 항목
            </Title>
            {edit === false ? (
              <TextFieldNoLabel style={{ width: 90 }}>
                {scale}
                <Title style={{ fontSize: 13, marginTop: 6, marginLeft: 55 }}>
                  개
                </Title>
              </TextFieldNoLabel>
            ) : (
              Counter()
            )}
          </div>
          <Items scale={scale} edit={edit} />
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
              display: edit === false ? "none" : "",
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
