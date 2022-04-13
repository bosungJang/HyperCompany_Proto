import tag from "antd/lib/tag";
import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper, Container } from "common/HcCommonLayout";
import { CalendarIcon } from "common/HcDatePicker";
import {
  HcTagNoInput,
  HcTextFieldLabel,
  HcTitleTextField,
  Title,
} from "common/HcTextField";
import { useState } from "react";
import styled from "styled-components";
const Card = (props: any) => {
  const { name, type, start, end, percent, reOrganization, superior, style } =
    props;
  const StyledDiv = styled.div`
    background: #ffffff;
    width: 1272px;
    border: 1px solid #cecece;
    border-radius: 4px;
    padding: 19px 24px 24px 24px;
  `;
  const CheckField = styled(StyledDiv)`
    width: 378px;
    height: 70px;
    padding: 28px 16px 17px 20px;
    margin-top: 24px;
    float: left;
    display: flex;
    position: relative;
  `;
  const Name = styled.div`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-left: 16px;
    margin-top: -3px;
    width: fit-content;
    height: fit-content;
    float: left;
  `;
  const percentIcon = () => {
    return (
      <svg
        width="13"
        height="11"
        viewBox="0 0 13 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", left: 60, top: 17 }}
      >
        <path
          d="M3.09072 6.308C4.42972 6.308 5.33972 5.19 5.33972 3.266C5.33972 1.342 4.42972 0.249999 3.09072 0.249999C1.75172 0.249999 0.854719 1.342 0.854719 3.266C0.854719 5.19 1.75172 6.308 3.09072 6.308ZM3.09072 5.424C2.42772 5.424 1.94672 4.735 1.94672 3.266C1.94672 1.784 2.42772 1.134 3.09072 1.134C3.76672 1.134 4.24772 1.784 4.24772 3.266C4.24772 4.735 3.76672 5.424 3.09072 5.424ZM3.38972 10.169H4.32572L9.57772 0.249999H8.62872L3.38972 10.169ZM9.88972 10.169C11.2157 10.169 12.1257 9.064 12.1257 7.14C12.1257 5.216 11.2157 4.124 9.88972 4.124C8.55072 4.124 7.64072 5.216 7.64072 7.14C7.64072 9.064 8.55072 10.169 9.88972 10.169ZM9.88972 9.298C9.21372 9.298 8.73272 8.609 8.73272 7.14C8.73272 5.658 9.21372 5.008 9.88972 5.008C10.5527 5.008 11.0337 5.658 11.0337 7.14C11.0337 8.609 10.5527 9.298 9.88972 9.298Z"
          fill="#5D5D62"
        />
      </svg>
    );
  };
  const styles = {
    width: 80,
    position: "absolute",
    bottom: 14,
    left: 204,
    border: "1px solid #E0E0E0",
    background: "#F4F4F4",
    borderRadius: "3px",
    color: "#CECECE",
  } as React.CSSProperties;
  return (
    <StyledDiv style={{ height: superior ? 244 : 184 }}>
      <div style={{ marginTop: -23 }}>
        <HcTextFieldLabel style={{ width: 200, marginRight: 16 }} titleName="">
          {type}
        </HcTextFieldLabel>
        <HcTextFieldLabel style={{ width: 486, marginRight: 40 }} titleName="">
          {name}
        </HcTextFieldLabel>
        <HcTextFieldLabel
          style={{ width: 160, marginRight: 14, position: "relative" }}
          titleName=""
        >
          {start}
          <CalendarIcon style={{ left: 110 }} />
        </HcTextFieldLabel>
        ~
        <HcTextFieldLabel
          style={{ width: 160, marginLeft: 14, position: "relative" }}
          titleName=""
        >
          {end}
          <CalendarIcon style={{ left: 110 }} />
        </HcTextFieldLabel>
        <HcTextFieldLabel
          style={{
            width: 80,
            marginLeft: 35,
            position: "relative",
            marginTop: -63,
          }}
          titleName=""
        >
          {percent}
          {percentIcon()}
        </HcTextFieldLabel>
      </div>
      <CheckField>
        <HcCheckBox checked={true} onChange={(e) => {}} disabled />
        <Name>역량</Name>
        <HcTextFieldLabel
          style={{ width: 80, position: "absolute", bottom: 17, left: 204 }}
          titleName=""
        >
          100{percentIcon()}
        </HcTextFieldLabel>
      </CheckField>
      <CheckField style={{ marginLeft: 42 }}>
        <HcCheckBox checked={false} onChange={(e) => {}} disabled />
        <Name>성과</Name>
        <HcTextFieldLabel style={styles} titleName="">
          가중치{percentIcon()}
        </HcTextFieldLabel>
      </CheckField>
      <CheckField style={{ marginLeft: 42 }}>
        <HcCheckBox checked={false} onChange={(e) => {}} disabled />
        <Name>기타</Name>
        <HcTextFieldLabel style={styles} titleName="">
          가중치{percentIcon()}
        </HcTextFieldLabel>
      </CheckField>
      {reOrganization ? (
        <div style={{}}>
          <HcTextFieldLabel
            style={{
              width: 200,
              marginRight: 10,
              marginTop: -8,
            }}
            titleName=""
          >
            {reOrganization}
          </HcTextFieldLabel>
          <HcTextFieldLabel
            style={{
              width: 200,
              marginTop: -8,
              marginRight: 40,
            }}
            titleName=""
          >
            {superior}
          </HcTextFieldLabel>
          <HcCheckBox checked={false} onChange={(e) => {}} />
          <svg
            width="139"
            height="14"
            viewBox="0 0 139 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: 10 }}
          >
            <path
              d="M8.66 0.422V13.106H10.116V0.422H8.66ZM3.382 1.36C1.506 1.36 0.134 3.096 0.134 5.812C0.134 8.556 1.506 10.278 3.382 10.278C5.272 10.278 6.644 8.556 6.644 5.812C6.644 3.096 5.272 1.36 3.382 1.36ZM3.382 2.662C4.488 2.662 5.258 3.852 5.258 5.812C5.258 7.8 4.488 8.99 3.382 8.99C2.29 8.99 1.52 7.8 1.52 5.812C1.52 3.852 2.29 2.662 3.382 2.662ZM19.3269 3.824V5.014H21.6229V9.69H23.0649V0.449999H21.6229V3.824H19.3269ZM20.1109 6.778C18.2209 6.12 17.1429 4.538 17.1429 2.984V2.55H19.7749V1.388H13.0129V2.55H15.6869V2.984C15.6869 4.692 14.5389 6.358 12.5789 7.044L13.3209 8.178C14.8189 7.66 15.8829 6.554 16.4429 5.182C16.9749 6.428 17.9969 7.422 19.3969 7.898L20.1109 6.778ZM16.3169 11.664V8.892H14.8749V12.84H23.3869V11.664H16.3169ZM37.6463 8.206H39.0883V0.436H37.6463V2.592H35.8123V3.754H37.6463V4.902H35.8123V6.064H37.6463V8.206ZM31.4863 2.508H33.0963V6.316C32.5503 6.344 32.0183 6.358 31.4863 6.372V2.508ZM35.9103 6.092C35.4483 6.148 34.9723 6.204 34.4823 6.218V2.508H35.6163V1.332H28.9523V2.508H30.1003V6.4C29.5823 6.4 29.0783 6.4 28.6163 6.4L28.7843 7.59C30.8143 7.59 33.6143 7.548 35.9943 7.142L35.9103 6.092ZM34.8743 11.972C33.0683 11.972 32.0603 11.538 32.0603 10.768C32.0603 9.97 33.0683 9.55 34.8743 9.55C36.6803 9.55 37.7023 9.97 37.7023 10.768C37.7023 11.538 36.6803 11.972 34.8743 11.972ZM34.8743 8.43C32.2283 8.43 30.6183 9.284 30.6183 10.768C30.6183 12.224 32.2283 13.078 34.8743 13.078C37.5203 13.078 39.1443 12.224 39.1443 10.768C39.1443 9.284 37.5203 8.43 34.8743 8.43ZM42.1113 1.766V2.942H46.5353C46.2413 5.854 44.5753 8.08 41.4813 9.662L42.2793 10.768C46.4093 8.682 47.9772 5.434 47.9772 1.766H42.1113ZM53.1993 5.42H51.2813V0.422H49.8393V13.064H51.2813V6.624H53.1993V5.42ZM64.7567 5.826C63.2307 6.148 61.8727 6.218 59.4787 6.232V2.648H63.6647V1.472H58.0367V7.422H59.0587C61.7747 7.422 63.2587 7.338 64.8967 6.988L64.7567 5.826ZM60.8367 8.654H59.3807V12.84H67.8927V11.664H60.8367V8.654ZM67.3887 4.048V0.422H65.9467V9.578H67.3887V5.238H69.1807V4.048H67.3887ZM77.2716 3.852H75.6756C75.7736 3.264 75.8156 2.634 75.8156 1.99H70.9296V3.152H74.3876C74.1776 5.742 72.9176 7.8 70.3136 9.382L71.1396 10.404C73.5056 8.99 74.8356 7.156 75.4236 5.028H77.2716V7.03H75.1996V8.206H77.2716V12.462H78.6156V0.744H77.2716V3.852ZM79.8196 0.436V13.078H81.2056V0.436H79.8196ZM95.451 3.278V4.58H92.357V5.7H95.451V6.848H96.893V0.436H95.451V2.158H92.833C92.903 1.794 92.931 1.402 92.931 0.996H87.275V2.158H91.335C91.139 3.922 89.585 5.308 86.589 5.952L87.093 7.128C89.879 6.498 91.741 5.21 92.525 3.278H95.451ZM90.131 11.804V10.642H96.893V7.366H88.661V8.514H95.451V9.564H88.689V12.966H97.243V11.804H90.131ZM105.922 7.548C106.272 5.308 106.272 3.712 106.272 2.606V1.766H99.8459V2.928H104.858C104.858 3.992 104.83 5.462 104.508 7.422L105.922 7.548ZM103.094 5.392H101.68V9.2C100.798 9.214 99.9439 9.228 99.1739 9.228L99.3279 10.418C101.54 10.418 104.438 10.362 107.042 9.928L106.972 8.864C105.74 9.032 104.41 9.102 103.094 9.158V5.392ZM110.962 5.63H109.1V0.436H107.644V13.078H109.1V6.848H110.962V5.63ZM118.039 4.566H124.031V6.638H118.039V4.566ZM121.749 10.348V7.8H125.459V1.276H124.031V3.404H118.039V1.276H116.611V7.8H120.307V10.348H115.323V11.538H126.775V10.348H121.749ZM128.916 1.766V2.942H133.424C133.172 5.854 131.604 8.08 128.286 9.676L129.056 10.824C133.396 8.724 134.908 5.532 134.908 1.766H128.916ZM137.19 0.436V13.078H138.632V0.436H137.19Z"
              fill="#5D5D62"
            />
          </svg>
        </div>
      ) : (
        ""
      )}
    </StyledDiv>
  );
};

export default function EvaluationPlanDetail() {
  /* pop up */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* pop up */
  const [tag, setTag] = useState(["티맥스 엔터프라이즈"]);
  const [openInfo, setInfo] = useState(true);
  const [openSteps, setSteps] = useState(true);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <ComponentWrapper style={{ display: "block", minHeight: 1000 }}>
        <HcTitleTextField
          titleName={edit === false ? "평가 계획 상세" : "평가 계획 수정"}
          isBackIcon
        />
        <Container
          title="평가 계획 정보"
          defaultHeight={68}
          maxHeight={350}
          width={1320}
          state={openInfo}
          setState={setInfo}
          style={{ marginTop: 39 }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 80, display: "block", width: 360 }}>
              <HcTextFieldLabel
                titleName={"평가 계획명"}
                style={{ width: 360, marginBottom: 20 }}
              >
                1분기 평가
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName={"평가 대상 기간"}
                style={{ width: 360, marginBottom: 20 }}
              >
                2022.01.01~2022.01.01
              </HcTextFieldLabel>
              <Title>평가 대상자</Title>
              <HcTagNoInput
                tags={tag}
                setTags={setTag}
                style={{
                  background: "#FFFFFF",
                  maxWidth: "360px",
                  borderBottom: "1px solid #CECECE",
                  borderRadius: 0,
                  minHeight: 26,
                }}
                delete={false}
              />
            </div>
            <div style={{ marginRight: 80, display: "block", width: 360 }}>
              <HcTextFieldLabel
                titleName={"평가 종류"}
                style={{ width: 360, marginBottom: 20 }}
              >
                분기 평가
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName={"평가 실시 기간"}
                style={{ width: 360, marginBottom: 20 }}
              >
                2022.01.01~2022.01.01
              </HcTextFieldLabel>
            </div>
            <div style={{ display: "block", width: 360, marginTop: 85 }}>
              <HcTextFieldLabel
                titleName={"평가 결과 공개 일자"}
                style={{ width: 360, marginBottom: 20 }}
              >
                2022.03.01
              </HcTextFieldLabel>
            </div>
          </div>
        </Container>
        <Container
          title="평가 단계"
          maxHeight={376}
          width={1320}
          state={openSteps}
          setState={setSteps}
        >
          <div style={{ display: "block", marginLeft: -16 }}>
            {" "}
            <Card
              type={"본인평가"}
              name={"본인평가"}
              start={"2022.01.01"}
              end={"2022.01.01"}
              percent={100}
            />
          </div>
        </Container>
      </ComponentWrapper>
    </>
  );
}
