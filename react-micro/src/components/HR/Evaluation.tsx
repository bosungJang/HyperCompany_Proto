/* eslint-disable jsx-a11y/alt-text */
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import { HcTableContainer, HcTable } from "common/HcTableComponent";
import {
  HcTitleTextField,
  HcTextFieldLabel,
  SubHeading,
  Title,
  HcTextArea,
} from "common/HcTextField";
import HcTree from "common/HcTree";
import styled from "styled-components";
import { useState } from "react";
import img from "common/img/Ellipse.png";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";

const TextFieldNoLabel = styled.div`
  padding: 2px 5px 5px 10px;
  border-bottom: 1px solid #cecece;
  width: 400px;
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
export function Items(props: { count: number }) {
  const items: any = [
    "전혀 아니다",
    "약간 아니다",
    "보통이다",
    "약간 그렇다",
    "매우 그렇다",
  ];
  const result: any[] = [];

  const field = () => {
    for (let i = 1; i <= props.count; i++) {
      result.push(
        <li
          style={{
            display: "flex",
            marginTop: i === 1 ? 26 : 12,
            position: "relative",
            marginLeft: 228,
          }}
        >
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
            <TextFieldNoLabel>{items[i - 1]}</TextFieldNoLabel>
          </>
        </li>
      );
    }
    return result;
  };
  return <ul style={{ padding: 0 }}>{field()}</ul>;
}
const items = [
  {
    id: "2",
    title: "홍길동",
    img: img,
  },
  {
    id: "3",
    title: "박지원",
    img: img,
  },
  {
    id: "4",
    title: "김민수",
    img: img,
  },
];
const ItemField = styled.div`
  width: 894px;
  padding: 13px 24px 30px 24px;
  background: #f9f9f9;
  border-radius: 6px;
`;
const TreeContainer = styled.div`
  height: 832px;
  width: 312px;
  float: left;
`;
const IdContainer = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
`;
const Name = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 50px;
  margin-left: 10px;
  text-transform: uppercase;
`;
const Position = styled(Name)`
  font-weight: 400;
  font-size: 16px;
  color: #5d5d62;
  line-height: 60px;
`;
export default function Evaluation() {
  /*Create */
  const [isCreate, setIsCreates] = useState(false);
  /*Create */
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  /* Current Data*/
  const [currentData, setcurrentData] = useState({
    id: "2",
    title: "홍길동",
    img: img,
  });
  /* Current Data*/
  return (
    <>
      <ComponentWrapper style={{ display: "block", height: 2275 }}>
        <HcTitleTextField titleName="평가 실시" isBackIcon />
        <div style={{ display: "flex", marginTop: "39px" }}>
          <TreeContainer>
            <HcTree
              items={items}
              title="조직도"
              search={true}
              isCreate={isCreate}
              setIsCreates={setIsCreates}
              placeholder="사원검색"
              currentData={currentData}
              setcurrentData={setcurrentData}
            />
          </TreeContainer>
          <div style={{ display: "block", marginLeft: "24px" }}>
            <IdContainer>
              <img
                src={items.find((x) => x.id === currentData.id)?.img}
                style={{
                  width: 40,
                  height: 40,

                  borderRadius: 100,
                  border: "1px solid #e0e0e0",
                }}
              />
              <Name>{currentData.title}</Name>
              <Position>티맥스 소프트 / CEO</Position>
            </IdContainer>
            <div
              style={{
                display: "flex",
                position: "relative",
                marginBottom: 24,
              }}
            >
              <HcTextFieldLabel
                titleName="평가자"
                style={{ width: 360, display: "flex" }}
              >
                <img
                  src={items.find((x) => x.id === currentData.id)?.img}
                  style={{
                    width: 28,
                    height: 28,
                    marginRight: 6,
                    borderRadius: 100,
                    border: "1px solid #e0e0e0",
                  }}
                />
                김지원
                <Title
                  style={{ fontSize: "12px", marginLeft: 8, marginTop: 5 }}
                >
                  PM본부 / Product실 / Product 1팀 / 팀장
                </Title>
              </HcTextFieldLabel>
            </div>
            <Container
              title="역량 평가"
              maxHeight={360}
              width={984}
            >
              <HcTableContainer
                style={{
                  maxHeight: 262,
                }}
              >
                <HcTable>
                  <thead>
                    <tr>
                      <th style={{ minWidth: 120 }}>역량명</th>
                      <th style={{ minWidth: 120 }}>역량그룹</th>
                      <th style={{ minWidth: 254 }}>역량설명</th>
                      <th style={{ minWidth: 70 }}>가중치</th>
                      <th style={{ minWidth: 140, textAlign: "center" }}>
                        평가 등급
                      </th>
                      <th style={{ minWidth: 200 }}>평가의견</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>경영 환경 분석</td>
                      <td>기획 역량</td>
                      <td
                        style={{
                          maxWidth: "254px",
                        }}
                      >
                        회사 비전을 설립하고11111223
                      </td>
                      <td>10%</td>
                      <td>평가 등급 선택</td>
                      <td>평가 의견 입력</td>
                    </tr>
                  </tbody>
                </HcTable>
              </HcTableContainer>
            </Container>
            <Container
              title="성과 평가"
              maxHeight={360}
              width={984}
            >
              <HcTableContainer
                style={{
                  maxHeight: 262,
                }}
              >
                <HcTable>
                  <thead>
                    <tr>
                      <th style={{ minWidth: 120 }}>목표 구분</th>
                      <th style={{ minWidth: 120 }}>목표명</th>
                      <th style={{ minWidth: 130 }}>상위 목표</th>
                      <th style={{ minWidth: 120 }}>KPI</th>
                      <th style={{ minWidth: 84 }}>목표 달성률</th>
                      <th style={{ minWidth: 70 }}>가중치</th>
                      <th style={{ minWidth: 140, textAlign: "center" }}>
                        평가 등급
                      </th>
                      <th style={{ minWidth: 120 }}>평가 의견</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>경영 환경 분석</td>
                      <td>기획 역량</td>
                      <td>전사 수익성 증대</td>
                      <td>신규 채널 수</td>
                      <td>100%</td>
                      <td>10%</td>
                      <td>평가 등급 선택</td>
                      <td>평가 의견 입력</td>
                    </tr>
                  </tbody>
                </HcTable>
              </HcTableContainer>
            </Container>
            <Container
              title="기타 평가"
              maxHeight={1026}
              width={984}
            >
              <ItemField>
                <SubHeading titleName="기타 평가 항목1" />
                <HcTextFieldLabel
                  titleName={""}
                  style={{ width: 200, marginRight: 24 }}
                >
                  척도
                </HcTextFieldLabel>
                <HcTextFieldLabel titleName={""} style={{ width: 622 }}>
                  우리 팀원은 누구든지 확고한 목적의식을 가지고 업무에 임하는
                  편이다.
                </HcTextFieldLabel>
                <Items count={5} />
              </ItemField>
              <ItemField style={{ marginTop: 24 }}>
                <SubHeading titleName="기타 평가 항목2" />
                <div style={{ display: "flex" }}>
                  {" "}
                  <HcTextFieldLabel
                    titleName={""}
                    style={{ width: 200, marginRight: 24 }}
                  >
                    주관식
                  </HcTextFieldLabel>
                  <TextFieldNoLabel
                    style={{
                      border: "none",
                      width: 321,
                      display: "block",
                      padding: 0,
                      marginTop: 21,
                    }}
                  >
                    <div> 해당 구성원에게 칭찬하고 싶은 점은 무엇인가요?</div>
                    <div style={{ color: "#CECECE" }}>
                      (구체적인 사례 혹은 이유도 함께 기재해주세요.)
                    </div>
                  </TextFieldNoLabel>
                </div>
                <TextFieldNoLabel
                  style={{
                    width: 594,
                    marginLeft: 224,
                    marginTop: 31,
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  담당 업무를 책임감 있게 수행해내고, 계획된 일을 일정에 따라
                  완성해냅니다. 표현이 간결하면서도 논점이 빠지지 않도록 문서를
                  만드는 능력이 출중합니다. 또한 논리적이면서 설득력 있는 말로
                  설명을 잘합니다.
                </TextFieldNoLabel>
              </ItemField>
              <ItemField style={{ marginTop: 24 }}>
                <SubHeading titleName="기타 평가 항목2" />
                <div style={{ display: "flex" }}>
                  {" "}
                  <HcTextFieldLabel
                    titleName={""}
                    style={{ width: 200, marginRight: 24 }}
                  >
                    주관식
                  </HcTextFieldLabel>
                  <TextFieldNoLabel
                    style={{
                      border: "none",
                      width: 321,
                      display: "block",
                      padding: 0,
                      marginTop: 21,
                    }}
                  >
                    <div> 해당 구성원에게 칭찬하고 싶은 점은 무엇인가요?</div>
                    <div style={{ color: "#CECECE" }}>
                      (구체적인 사례 혹은 이유도 함께 기재해주세요.)
                    </div>
                  </TextFieldNoLabel>
                </div>
                <HcTextArea
                  placeholder="답변 작성"
                  style={{
                    marginTop: 24,
                    width: 594,
                    height: 88,
                    marginLeft: 234,
                    fontSize: "14px",
                  }}
                  row={3}
                />
              </ItemField>
            </Container>
          </div>
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <>
          {" "}
          <HcButton
            onClick={() => {}}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            평가 완료
          </HcButton>
          <HcButton
            onClick={() => {}}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            임시 저장
          </HcButton>
          <HcButton
            onClick={() => {}}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            취소
          </HcButton>
        </>
      </HcBottomBar>
    </>
  );
}
