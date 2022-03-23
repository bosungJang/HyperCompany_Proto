import { useHistory } from "react-router-dom";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField, HcSelect } from "common/HcTextField";
import styled from "styled-components";
import "common/Table.css";
import HcButton from "common/HcButton";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import InfoIconTooltip from "common/HcTooltip";
const Container = styled.div`
  background: #ffffff;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 20px 40px 34px 30px;
  position: relative;
  height: 179px;
`;
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
const SubTitle = styled.div`
  height: fit-content;
  width: fit-content;
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #303030;
`;
const Amount = styled.div`
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  height: 33px;
  border-radius: 2px;
  padding: 4px, 6px, 4px, 6px;
  margin-right: 10px;
  margin-top: 19px;
  background: #f4f4f4;
  border-radius: 2px;
  float: left;
`;
const Chip = styled.div`
  justify-content: center;
  align-items: center;
  padding: 4px 12px 3px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #2d2d31;
  border-radius: 24px;
  max-width: 130px;
  height: 30px;
  line-height: 23px;
  display: inline-block;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const Settings = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  padding: 5.5px 10.5px;
  position: absolute;
  //   top: 22px;
  right: 0px;
  &:hover {
    background-color: #cecece;
  }
  &:active {
    background-color: #cecece;
  }
`;

const Tooltip = ({ children, message }: any) => {
  const Menucontainer = styled.div`
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 22px;
    right: 20px;
    &:hover > .tooltip,
    &:active > .tooltip {
      display: block;
      position: absolute;
    }
  `;

  const Content = styled.div`
    display: none;
    position: absolute;
    z-index: 200;
    width: fit-content;
    height: fit-content;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;
  const Items = styled.li`
    height: 42px;
    width: 170px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-top: 11px;
    color: #3c3c3c;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <Menucontainer>
      {children}
      <Content className="tooltip">
        <ul style={{ padding: "0px 0px 0px 12px", margin: 0 }}>
          <Items onClick={() => {}}>기본 설정 활성화</Items>
          <Items>수정</Items>
          <Items>삭제</Items>
        </ul>
      </Content>
    </Menucontainer>
  );
};
const data = [
  {
    id: 1,
    name: "근로 소득세",
    taxFree: false,
    amount: null,
    legallyreq: true,
    normalWage: false,
  },
  {
    id: 2,
    name: "4대 보험료",
    taxFree: false,
    amount: "통상임금의 50% 가산",
    legallyreq: true,
    normalWage: false,
  },
  {
    id: 3,
    name: "학자금 대출금",
    taxFree: false,
    amount: "매월 의무상환액의 1/2",
    legallyreq: true,
    normalWage: false,
  },
  {
    id: 4,
    name: "동호회비",
    taxFree: true,
    amount: "매월 100,000원",
    legallyreq: false,
    normalWage: true,
  },
];
const WorkManagement = () => {
  const history = useHistory();
  function Cards(
    id: number,
    name: {} | null | undefined,
    legallyreq: boolean,
    amount: {} | null | undefined,
    taxFree: boolean,
    normalWage: any
  ) {
    return (
      <Container
        onClick={() => {
          history.push({
            pathname: "/hr/ExtraPayDetail",
            state: {
              legallyreq: legallyreq,
              id: id,
              name: name,
              amount: amount,
              normalWage: normalWage,
              taxFree: taxFree,
            },
          });
        }}
        style={{
          marginTop: 24,
          height: 179,
          display: "block",
        }}
      >
        <Tooltip message="검색" direction="right">
          {" "}
          <Settings>
            <svg
              width="4"
              height="14"
              viewBox="0 0 4 14"
              fill="none"
              style={{ marginBottom: 3 }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM3.5 7C3.5 7.82843 2.82843 8.5 2 8.5C1.17157 8.5 0.5 7.82843 0.5 7C0.5 6.17157 1.17157 5.5 2 5.5C2.82843 5.5 3.5 6.17157 3.5 7ZM2 13.5C2.82843 13.5 3.5 12.8284 3.5 12C3.5 11.1716 2.82843 10.5 2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5Z"
                fill="#5D5D62"
              />
            </svg>
          </Settings>
        </Tooltip>
        <div>
          {" "}
          <SubTitle>{name}</SubTitle>
          {amount === null ? "" : <Amount> {amount}</Amount>}
        </div>
        <div style={{ position: "absolute", top: 78, right: 40 }}>
          {" "}
          {legallyreq === false ? "" : <Chip>법적 필수</Chip>}
          {taxFree === false ? (
            ""
          ) : (
            <Chip style={{ marginRight: 10 }}>비과세</Chip>
          )}
          {normalWage === false ? "" : <Chip>통상임금</Chip>}
        </div>

        <div
          style={{
            float: "left",
            color: "#838181",
            position: "absolute",
            top: 123,
            left: 40,
          }}
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1299 3.41015C15.1299 4.68769 14.0809 5.73705 12.7698 5.73705C11.4587 5.73705 10.4097 4.68769 10.4097 3.41015C10.4097 2.13261 11.4587 1.08325 12.7698 1.08325C14.0809 1.08325 15.1299 2.13261 15.1299 3.41015Z"
              stroke="#838181"
              stroke-width="1.5"
            />
            <path
              d="M8.62329 12.8333V9.5127C8.62329 8.40813 9.51872 7.5127 10.6233 7.5127H14.9169C16.0215 7.5127 16.9169 8.40813 16.9169 9.5127V12.8333"
              stroke="#838181"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M7.59036 3.41015C7.59036 4.68769 6.54131 5.73705 5.23024 5.73705C3.91917 5.73705 2.87012 4.68769 2.87012 3.41015C2.87012 2.13261 3.91917 1.08325 5.23024 1.08325C6.54131 1.08325 7.59036 2.13261 7.59036 3.41015Z"
              stroke="#838181"
              stroke-width="1.5"
            />
            <path
              d="M1.08337 12.8333V9.5127C1.08337 8.40813 1.9788 7.5127 3.08337 7.5127H6.73814"
              stroke="#838181"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>{" "}
          총 200명 적용
        </div>
      </Container>
    );
  }
  return (
    <>
      <ComponentWrapper
        style={{
          padding: 40,
          display: "block",
          zIndex: 300,
          overflow: "visible",
        }}
      >
        <HcTitleTextField titleName="공제 설정" isBackIcon={false} />
        <SubTitle style={{ marginTop: 59, marginBottom: 18 }}>
          근로소득세 계산 기준
        </SubTitle>
        <div
          style={{
            float: "left",
            width: 285,
          }}
        >
          <Title style={{ marginBottom: 22 }}>지급 시기</Title>
          <div style={{ marginBottom: 22 }}>
            <HcRadioGroup
              defaultValue="true"
              onChange={(value) => console.log("value: ", value)}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "fit-contnet",
                    height: "fit-content",
                    position: "relative",
                    display: "flex",
                  }}
                >
                  <HcRadioButton value="true">
                    <span style={{ marginRight: 47, marginLeft: 8 }}>
                      간이세액표
                      <InfoIconTooltip message="국세청에서 월 급여와 공제대상가족수에 따라 매월 원천징수하는 세액을 정한 표에 따라 계산됩니다." />
                    </span>
                  </HcRadioButton>
                </div>{" "}
                <div
                  style={{
                    width: "fit-contnet",
                    height: "fit-content",
                    position: "relative",
                    display: "flex",
                  }}
                >
                  <HcRadioButton value="false">
                    <span style={{ marginLeft: 8, height: 21, width: 90 }}>
                      근로소득세율
                      <InfoIconTooltip message="현행 소득세법과 4대보험 법령(국민연금법, 국민건강보험법, 고용보험법, 산업재해보상보험법)에 따라 계산됩니다." />
                    </span>
                  </HcRadioButton>
                </div>
              </div>
            </HcRadioGroup>
          </div>
        </div>

        <SubTitle style={{ marginTop: 40, marginBottom: 18 }}>
          수당 항목
        </SubTitle>
        <HcButton
          onClick={() => {
            history.push({
              pathname: "/hr/ExtraPayCreate",
            });
          }}
          styles="secondary"
          style={{
            marginBottom: "-4px",
          }}
          size="medium"
        >
          +생성
        </HcButton>

        {data
          .slice(0, 5)
          .map(({ id, name, legallyreq, amount, taxFree, normalWage }) =>
            Cards(id, name, legallyreq, amount, taxFree, normalWage)
          )}
      </ComponentWrapper>
    </>
  );
};

export default WorkManagement;
