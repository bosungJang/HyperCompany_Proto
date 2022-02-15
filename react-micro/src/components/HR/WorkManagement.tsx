import { useHistory } from "react-router-dom";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import styled from "styled-components";
import "common/Table.css";
import HcButton from "common/HcButton";
const Container = styled.div`
  background: #ffffff;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 30px 30px 24px 40px;
  position: relative;
`;
const SubTitle = styled.div`
  height: 30px;
  width: 130px;
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #303030;
`;
const WorkTime = styled.div`
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
  margin-top: 19px;
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
const Basic = styled.div`
  justify-content: center;
  align-items: center;
  padding: 4px 12px 3px;
  width: 55px;
  height: 30px;
  background: #2d2d31;
  border-radius: 24px;
  color: white;
  display: inline-block;
  margin-left: 10px;
  margin-top: -5px;
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
    name: "기본",
    workingTime: 9,
    startend: "10:00 ~ 19:00",
    type: "고정",
    basic: true,
    perWeek: 52,
  },
  {
    id: 2,
    name: "시차 출퇴근",
    workingTime: 9,
    startend: "10:00 ~",
    type: "시차",
    basic: false,
    perWeek: 52,
  },
  {
    id: 3,
    name: "선택적 출퇴근",
    workingTime: 9,
    startend: "none",
    type: "선택적",
    basic: false,
    perWeek: 52,
  },
];
const WorkManagement = () => {
  const history = useHistory();
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
        <HcTitleTextField titleName="근무 유형 설정" isBackIcon={false} />

        <HcButton
          styles="secondary"
          style={{
            marginTop: "39px",
            marginBottom: "-4px",
          }}
          size="medium"
        >
          +생성
        </HcButton>

        {data.map(
          ({ id, name, workingTime, startend, type, basic, perWeek }) => (
            <Container
              onClick={() => {
                history.push({
                  pathname: "/hr/hrWorkManageDetail",
                  state: {
                    type: type,
                    id: id,
                    name: name,
                    basic: basic,
                    perWeek: perWeek,
                    startend: startend,
                    workingTime: workingTime,
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
                {startend !== "none" ? (
                  <WorkTime>출퇴근-{startend}</WorkTime>
                ) : (
                  ""
                )}
                <WorkTime>근무시간 - {workingTime}시간</WorkTime>
                <WorkTime>주 {perWeek}시간 근무</WorkTime>
              </div>
              <Chip
                style={{
                  marginLeft:
                    type === "고정"
                      ? 683
                      : type === "시차"
                      ? 785
                      : type === "선택적"
                      ? 888
                      : 785,
                }}
              >
                {type} 출퇴근
              </Chip>
              {basic == true ? <Basic>기본</Basic> : ""}
              <div
                style={{
                  float: "left",
                  color: "#838181",
                  marginRight: 1100,
                  marginTop: 25,
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
          )
        )}
      </ComponentWrapper>
    </>
  );
};

export default WorkManagement;
