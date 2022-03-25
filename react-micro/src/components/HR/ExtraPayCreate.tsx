import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField from "common/HcTextField";
import {
  HcTitleTextField,
  HcSelect,
  HcTagNoInput,
  HcSearchTextField,
  HcTextFieldLabel,
} from "common/HcTextField";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import styled from "styled-components";
import HcButton from "common/HcButton";
import HcBottomBar from "common/HcBottomBar";
import InfoIconTooltip, { TooltipMessage } from "common/HcTooltip";
import { HcContentPopup } from "common/HcPopup";
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
const CalcButton = styled.button`
  background: #f4f4f4;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 4px 2px 4px 2px;
  height: 42px;
  width: 88px;
  border: none;
  &:active {
    transform: translateY(2px);
    box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.2),
      inset 4px 4px 6px 1px rgba(0, 0, 0, 0.1);
  }
`;
const StyledLi = styled.li`
  padding: 7px 8px 6px 8px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  height: 42px;
  color: #3c3c3c;
  &:hover {
    background-color: #eff5ff;
  }
`;
export default function ExtraPayCreate() {
  const [objClick, setObjClick] = React.useState(false);
  const [toolClick, setToolClick] = React.useState(true);
  const Container = (props: any) => {
    const Arrow = styled.svg`
      transition: all 0.2s ease;
      &:active {
        transform: rotate(-180deg);
      }
    `;
    const ContainerStyle = styled.div`
      background: #ffffff;
      width: 650px;
      margin-top: 24px;
      border-radius: 6px;
      border: 1px solid #cecece;
      padding-top: 20px;
      padding-left: 24px;
      position: relative;
      transition: all 0.7s ease;
    `;

    const { defaultHeight, maxHeight, width, title, state, setState } = props;
    const style = {
      cnt: {
        width: width,
        height: state === true ? maxHeight : defaultHeight,
      },
      title: {
        width: "fit-content",
        color: "#303030",
        fontSize: "20px",
        fontFamily: "Noto Sans KR",
      },
    };
    const handleClick = () => {
      if (state === false) {
        setState(true);
        if (title === "계산 항목") setObjClick(true);
        else setObjClick(false);
      } else setState(false);
    };

    return (
      <ContainerStyle style={style.cnt}>
        <div style={style.title}>{title}</div>
        <Arrow
          onClick={handleClick}
          style={{
            top: 22,
            right: 20,
            position: "absolute",
            transition: "all 0.7s ease",
            transform: state === true ? "rotate(-180deg)" : "",
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.3642 15.6368C18.7547 15.2463 18.7547 14.6131 18.3642 14.2226L12.7074 8.56584L12.7073 8.56573C12.3168 8.1752 11.6836 8.1752 11.2931 8.56573C11.2888 8.57005 11.2845 8.5744 11.2803 8.57878L5.63638 14.2227C5.24585 14.6132 5.24585 15.2464 5.63638 15.6369C6.0269 16.0274 6.66007 16.0274 7.05059 15.6369L12.0003 10.6872L16.95 15.6368C17.3405 16.0273 17.9737 16.0273 18.3642 15.6368Z"
            fill="#5D5D62"
          />
        </Arrow>
        {state === true ? props.children : ""}
      </ContainerStyle>
    );
  };
  /* pop up */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* pop up */

  /*TagInput */
  const [tags2, setTags2] = React.useState(["티맥스엔터프라이즈"]);
  const [calc, setCalc]: any[] = React.useState([]);
  const CalcBtnClick = (value: string) => {
    const prev = calc;
    setCalc([...calc, value]);
  };
  const [inputVal, setInputVal] = React.useState("");
  /*TagInput */
  const [selected, setSelected] = React.useState("none");
  const handleChangeSelect = (e: any) => {
    setSelected(e.target.value);
    if (selected === "calc") setModalOpen(true);
  };
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  const arry = [
    "건강보험보수월액(기타 설정)",
    "건강보험보수월액(기타 설정)",
    "건강보험보수월액(기타 설정)",
    "건강보험보수월액(기타 설정)",
  ];
  return (
    <>
      <ComponentWrapper style={{ display: "inherit", height: 1131 }}>
        <HcTitleTextField titleName="수당/지급 생성" isBackIcon={true} />

        <>
          <div
            style={{
              float: "left",
              width: 387,
              marginRight: 79,
              marginTop: 61,
            }}
          >
            <HcTextField
              titleName={""}
              value={""}
              style={{
                height: 60,
                fontSize: "24px",
                marginBottom: 20,
                marginTop: -15,
              }}
            />

            <Title style={{ marginBottom: 23 }}>지급 방식</Title>
            <div style={{ marginBottom: 22 }}>
              {" "}
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>정기</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>일시</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>

            <HcSelect
              titleName="지급 유형"
              style={{ marginBottom: 20, width: 387 }}
              onChange={handleChangeSelect}
              value={selected}
            >
              <option value="none">지급 유형 선택</option>
              <option value="calc">계산식</option>
            </HcSelect>

            <Title style={{ marginBottom: -20 }}>
              비과세 여부{" "}
              <InfoIconTooltip message="식사를 별도로 제공하지 않는 회사의 경우, 최대 월 10만원까지 세금을 부여하지 않습니다." />
            </Title>
            <HcSelect titleName="" style={{ marginBottom: 20, width: 387 }}>
              <option value="none">해당 없음</option>
              <option>바과세</option>
            </HcSelect>
            <Title style={{ marginBottom: 23 }}>
              입사월에 지급
              <InfoIconTooltip
                message={
                  "월 중간에 입사한 구성원의 경우, 해당 수당의 지급 방법을 선택합니다."
                }
              />
            </Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>
                    일할 계산 후
                  </span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>전액</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
            <HcSearchTextField
              titleName="적용 대상자"
              name="name"
              value={inputVal}
              placeholder="조직 검색"
              onChange={(e) => {
                const lengthOfInputValue = inputVal.split("").length;

                if (lengthOfInputValue !== 10)
                  setInputVal(e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  inputVal.trim() !== "" /*&& props.tags.length < 4 */
                ) {
                  setTags2([...tags2, e.currentTarget.value]);
                  setInputVal("");
                }
              }}
            />
            <br />
            <HcTagNoInput tags={tags2} setTags={setTags2} />
          </div>
          <div
            style={{
              float: "left",
              width: 387,
              marginRight: 77,
              marginTop: 61,
            }}
          >
            <Title style={{ marginBottom: 23, marginTop: 90 }}>지급 시기</Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>매월</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>매년</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
            <Title style={{ marginBottom: 23, marginTop: 107 }}>
              통상임금 포함 여부
              <InfoIconTooltip
                message={
                  "소정근로의 대가로 근로자에게 지급되는 금품으로 정기적ㆍ일률적ㆍ고정적으로 지급되는 임금입니다."
                }
              />
            </Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>포함</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>미포함</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
            <Title style={{ marginBottom: 23, marginTop: 20 }}>
              퇴사월에 지급
              <InfoIconTooltip
                message={
                  "월 중간에 퇴사한 구성원의 경우, 해당 수당의 지급 방법을 선택합니다."
                }
              />
            </Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>
                    일할 계산 후
                  </span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>전액</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
          </div>
          <div
            style={{
              float: "left",
              width: 387,
              marginTop: 61,
            }}
          >
            <Title style={{ marginBottom: 23, marginTop: 260 }}>
              연봉 포함 여부
            </Title>
            <div style={{ marginBottom: 22 }}>
              <HcRadioGroup
                defaultValue="true"
                onChange={(value) => console.log("value: ", value)}
              >
                <HcRadioButton value="true">
                  <span style={{ marginRight: 47, marginLeft: 8 }}>포함</span>
                </HcRadioButton>
                <HcRadioButton value="false">
                  <span style={{ marginLeft: 8 }}>미포함</span>
                </HcRadioButton>
              </HcRadioGroup>
            </div>
          </div>
        </>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          <>
            {" "}
            <HcButton
              onClick={() => {}}
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
          </>
        </div>
      </HcBottomBar>
      <HcContentPopup
        header="계산식 설정"
        open={modalOpen}
        close={closeModal}
        Containerheight={objClick === false ? 836 : 1153}
        primaryBtn={"저장"}
        secondBtn={"취소"}
      >
        <HcTextFieldLabel
          titleName={"수당 항목명"}
          style={{ width: 650, color: "#000000" }}
        >
          name
        </HcTextFieldLabel>

        <div style={{ display: "flex" }}>
          <HcSearchTextField
            titleName=""
            name="name"
            value={inputVal}
            placeholder="수당 항목 검색"
            onChange={(e) => {
              const lengthOfInputValue = inputVal.split("").length;

              if (lengthOfInputValue !== 10) setInputVal(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                inputVal.trim() !== "" /*&& props.tags.length < 4 */
              ) {
                setCalc([...calc, e.currentTarget.value]);
                setInputVal("");
              }
            }}
          />
          <HcButton
            size="small"
            styles="line"
            onClick={() => setCalc([])}
            style={{ width: 80, marginTop: 30 }}
          >
            전체 취소
          </HcButton>
        </div>
        <HcTagNoInput
          tags={calc}
          setTags={setCalc}
          style={{ width: 650, maxHeight: 178, overflowY: "scroll" }}
        />
        <Container
          defaultHeight={68}
          maxHeight={336}
          width={650}
          title={"계산 도구"}
          state={toolClick}
          setState={setToolClick}
        >
          <div style={{ display: "flex", marginTop: 28 }}>
            <div style={{ display: "block", width: 88, marginLeft: 32 }}>
              {" "}
              <TooltipMessage message={"괄호열기"} ItemHeight={44}>
                <CalcButton
                  onClick={() => {
                    setCalc([...calc, "("]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47 27L45.6685 26.8349C44.6721 26.7091 43.6667 26.4182 42.6522 25.9623C41.6377 25.5063 40.7228 24.9088 39.9076 24.1698C39.0924 23.4308 38.4583 22.5896 38.0054 21.6462C37.6793 20.9387 37.4257 20.1997 37.2446 19.4292C37.0815 18.6431 37 17.8333 37 17C37 15.522 37.2536 14.1541 37.7609 12.8962C38.2681 11.6226 38.9746 10.5928 39.8804 9.8066C40.4964 9.27201 41.1214 8.8239 41.7554 8.46226C42.4076 8.0849 43.1504 7.7783 43.9837 7.54245C44.8351 7.29088 45.8406 7.11006 47 7V7.51887C46.4928 7.56604 45.9221 7.7783 45.288 8.15566C44.6721 8.51729 44.0562 9.02044 43.4402 9.66509C42.8424 10.294 42.3261 11.0566 41.8913 11.9528C41.2391 13.2893 40.913 14.9717 40.913 17C40.913 18.9497 41.221 20.5928 41.837 21.9292C42.4529 23.25 43.2591 24.3192 44.2554 25.1368C45.2518 25.9387 46.1667 26.3868 47 26.4811V27Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>{" "}
              </TooltipMessage>{" "}
              <TooltipMessage message={"더하기"} ItemHeight={44}>
                <CalcButton
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    setCalc([...calc, "+"]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M43 15C42.7239 15 42.5 14.7761 42.5 14.5V8C42.5 7.72386 42.2761 7.5 42 7.5H40C39.7239 7.5 39.5 7.72386 39.5 8L39.5 14.5C39.5 14.7761 39.2761 15 39 15H32.5C32.2239 15 32 15.2239 32 15.5V17.5C32 17.7761 32.2239 18 32.5 18H39C39.2761 18 39.5 18.2239 39.5 18.5L39.5 25C39.5 25.2761 39.7239 25.5 40 25.5H42C42.2761 25.5 42.5 25.2761 42.5 25V18.5C42.5 18.2239 42.7239 18 43 18H49.5C49.7761 18 50 17.7761 50 17.5V15.5C50 15.2239 49.7761 15 49.5 15H43Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>
              <TooltipMessage message={"반올림"} ItemHeight={44}>
                <CalcButton
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    setCalc([...calc, "R("]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55 27L53.7018 26.8349C52.7303 26.7091 51.75 26.4182 50.7609 25.9623C49.7717 25.5063 48.8798 24.9088 48.0849 24.1698C47.2901 23.4308 46.6719 22.5896 46.2303 21.6462C45.9124 20.9387 45.6651 20.1997 45.4885 19.4292C45.3295 18.6431 45.25 17.8333 45.25 17C45.25 15.522 45.4973 14.1541 45.9918 12.8962C46.4864 11.6226 47.1753 10.5928 48.0584 9.8066C48.659 9.27201 49.2683 8.8239 49.8865 8.46226C50.5224 8.0849 51.2466 7.7783 52.0591 7.54245C52.8893 7.29088 53.8696 7.11006 55 7V7.51887C54.5054 7.56604 53.949 7.7783 53.3308 8.15566C52.7303 8.51729 52.1298 9.02044 51.5292 9.66509C50.9463 10.294 50.4429 11.0566 50.019 11.9528C49.3832 13.2893 49.0652 14.9717 49.0652 17C49.0652 18.9497 49.3655 20.5928 49.966 21.9292C50.5666 23.25 51.3526 24.3192 52.324 25.1368C53.2955 25.9387 54.1875 26.3868 55 26.4811V27Z"
                      fill="#838181"
                    />
                    <path
                      d="M31.8293 11.447H34.5366C37.1463 11.447 38.561 12.1598 38.561 14.2062C38.561 16.2526 37.1463 17.2643 34.5366 17.2643H31.8293V11.447ZM42 26.2317L37.6098 19.0578C39.878 18.391 41.3659 16.8274 41.3659 14.2062C41.3659 10.5502 38.5854 9.30859 34.878 9.30859H29V26.2317H31.8293V19.4027H34.7317L38.8049 26.2317H42Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>
              <CalcButton
                style={{ marginTop: 20 }}
                onClick={() => {
                  setCalc([...calc, ","]);
                }}
              >
                <svg
                  width="84"
                  height="34"
                  viewBox="0 0 84 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.5485 26C42.9723 24.659 45 21.8739 45 18.2636C45 15.616 43.903 14 42.0416 14C40.5789 14 39.3823 14.9971 39.3823 16.5444C39.3823 18.1948 40.5789 19.0888 41.9418 19.0888C42.0748 19.0888 42.1745 19.0888 42.3075 19.0544C42.2742 21.0831 41.2604 23.5372 39 24.5L39.5485 26Z"
                    fill="#838181"
                  />
                </svg>
              </CalcButton>
            </div>
            <div style={{ display: "block", width: 88, marginLeft: 62 }}>
              {" "}
              <TooltipMessage message={"괄호 닫기"} ItemHeight={44}>
                <CalcButton
                  onClick={() => {
                    setCalc([...calc, ")"]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37 27L38.3315 26.8349C39.3279 26.7091 40.3333 26.4182 41.3478 25.9623C42.3623 25.5063 43.2772 24.9088 44.0924 24.1698C44.9076 23.4308 45.5417 22.5896 45.9946 21.6462C46.3207 20.9387 46.5743 20.1997 46.7554 19.4292C46.9185 18.6431 47 17.8333 47 17C47 15.522 46.7464 14.1541 46.2391 12.8962C45.7319 11.6226 45.0254 10.5928 44.1196 9.8066C43.5036 9.27201 42.8786 8.8239 42.2446 8.46226C41.5924 8.0849 40.8496 7.7783 40.0163 7.54245C39.1649 7.29088 38.1594 7.11006 37 7V7.51887C37.5072 7.56604 38.0779 7.7783 38.712 8.15566C39.3279 8.51729 39.9438 9.02044 40.5598 9.66509C41.1576 10.294 41.6739 11.0566 42.1087 11.9528C42.7609 13.2893 43.087 14.9717 43.087 17C43.087 18.9497 42.779 20.5928 42.163 21.9292C41.5471 23.25 40.7409 24.3192 39.7446 25.1368C38.7482 25.9387 37.8333 26.3868 37 26.4811V27Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>{" "}
              </TooltipMessage>{" "}
              <TooltipMessage message={"빼기"} ItemHeight={44}>
                <CalcButton
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    setCalc([...calc, "-"]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 15.5C32 15.2239 32.2239 15 32.5 15H49.5C49.7761 15 50 15.2239 50 15.5V17.5C50 17.7761 49.7761 18 49.5 18H32.5C32.2239 18 32 17.7761 32 17.5V15.5Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>{" "}
              </TooltipMessage>{" "}
              <TooltipMessage message={"절상"} ItemHeight={44}>
                <CalcButton
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    setCalc([...calc, "C("]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.6457 25.4621C38.8669 25.4621 40.6205 24.6193 42 23.1111L40.5504 21.492C39.5216 22.5566 38.3058 23.222 36.7392 23.222C33.6996 23.222 31.7824 20.8488 31.7824 16.9673C31.7824 13.1303 33.8399 10.7792 36.8094 10.7792C38.2122 10.7792 39.2878 11.3781 40.1763 12.2431L41.6493 10.6018C40.5971 9.51497 38.9137 8.53906 36.7626 8.53906C32.4137 8.53906 29 11.7329 29 17.0561C29 22.4013 32.3201 25.4621 36.6457 25.4621Z"
                      fill="#838181"
                    />
                    <path
                      d="M55 27L53.7018 26.8349C52.7303 26.7091 51.75 26.4182 50.7609 25.9623C49.7717 25.5063 48.8798 24.9088 48.0849 24.1698C47.2901 23.4308 46.6719 22.5896 46.2303 21.6462C45.9124 20.9387 45.6651 20.1997 45.4885 19.4292C45.3295 18.6431 45.25 17.8333 45.25 17C45.25 15.522 45.4973 14.1541 45.9918 12.8962C46.4864 11.6226 47.1753 10.5928 48.0584 9.8066C48.659 9.27201 49.2683 8.8239 49.8865 8.46226C50.5224 8.0849 51.2466 7.7783 52.0591 7.54245C52.8893 7.29088 53.8696 7.11006 55 7V7.51887C54.5054 7.56604 53.949 7.7783 53.3308 8.15566C52.7303 8.51729 52.1298 9.02044 51.5292 9.66509C50.9463 10.294 50.4429 11.0566 50.019 11.9528C49.3832 13.2893 49.0652 14.9717 49.0652 17C49.0652 18.9497 49.3655 20.5928 49.966 21.9292C50.5666 23.25 51.3526 24.3192 52.324 25.1368C53.2955 25.9387 54.1875 26.3868 55 26.4811V27Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>{" "}
              <TooltipMessage message={"조건부 합계"} ItemHeight={44}>
                <CalcButton
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    setCalc([...calc, "SUMIFS("]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.97317 24.0755C12.0292 24.0755 13.8894 22.2642 13.8894 20.0377C13.8894 18 12.6936 16.9811 11.0422 16.283L9.12503 15.4717C7.98613 15.0189 6.86622 14.566 6.86622 13.3774C6.86622 12.2642 7.79632 11.5849 9.21993 11.5849C10.4537 11.5849 11.4218 12.0566 12.2949 12.8302L13.4528 11.434C12.3899 10.3585 10.8523 9.67924 9.21993 9.67924C6.56251 9.67924 4.62639 11.3208 4.62639 13.5094C4.62639 15.5283 6.12594 16.5849 7.47363 17.1509L9.40975 17.9811C10.7005 18.5472 11.6496 18.9434 11.6496 20.2075C11.6496 21.3774 10.7005 22.1698 9.01114 22.1698C7.66344 22.1698 6.29677 21.5283 5.29075 20.5283L4 22.0377C5.27177 23.3208 7.05603 24.0755 8.97317 24.0755Z"
                      fill="#838181"
                    />
                    <path
                      d="M21.6604 24.0755C24.7544 24.0755 26.8424 22.3962 26.8424 17.8679V9.9434H24.7165V18.0189C24.7165 21.1509 23.4257 22.1698 21.6604 22.1698C19.9141 22.1698 18.6613 21.1509 18.6613 18.0189V9.9434H16.4595V17.8679C16.4595 22.3962 18.5664 24.0755 21.6604 24.0755Z"
                      fill="#838181"
                    />
                    <path
                      d="M30.4565 23.8302H32.4305V16.9623C32.4305 15.717 32.2597 13.9245 32.1648 12.6604H32.2407L33.3417 15.8679L35.7903 22.4906H37.157L39.5866 15.8679L40.7065 12.6604H40.7824C40.6685 13.9245 40.4977 15.717 40.4977 16.9623V23.8302H42.5477V9.9434H40.0042L37.4796 16.9623C37.157 17.8868 36.8912 18.8302 36.5685 19.7736H36.4736C36.1509 18.8302 35.8662 17.8868 35.5435 16.9623L32.981 9.9434H30.4565V23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M46.2127 23.8302H48.4145V9.9434H46.2127V23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M52.0702 23.8302H54.2721V17.8491H59.4351V16.0189H54.2721V11.7736H60.3462V9.9434H52.0702V23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M66.3257 24.0755C69.3817 24.0755 71.2419 22.2642 71.2419 20.0377C71.2419 18 70.0461 16.9811 68.3947 16.283L66.4776 15.4717C65.3387 15.0189 64.2188 14.566 64.2188 13.3774C64.2188 12.2642 65.1488 11.5849 66.5725 11.5849C67.8063 11.5849 68.7743 12.0566 69.6475 12.8302L70.8054 11.434C69.7424 10.3585 68.2049 9.67924 66.5725 9.67924C63.915 9.67924 61.9789 11.3208 61.9789 13.5094C61.9789 15.5283 63.4785 16.5849 64.8262 17.1509L66.7623 17.9811C68.053 18.5472 69.0021 18.9434 69.0021 20.2075C69.0021 21.3774 68.053 22.1698 66.3637 22.1698C65.016 22.1698 63.6493 21.5283 62.6433 20.5283L61.3525 22.0377C62.6243 23.3208 64.4086 24.0755 66.3257 24.0755Z"
                      fill="#838181"
                    />
                    <path
                      d="M80 25L79.0699 24.8679C78.3739 24.7673 77.6716 24.5346 76.963 24.1698C76.2543 23.805 75.6153 23.327 75.0458 22.7358C74.4764 22.1447 74.0335 21.4717 73.7171 20.717C73.4893 20.1509 73.3122 19.5597 73.1856 18.9434C73.0717 18.3145 73.0148 17.6667 73.0148 17C73.0148 15.8176 73.1919 14.7233 73.5463 13.717C73.9006 12.6981 74.3941 11.8742 75.0268 11.2453C75.4571 10.8176 75.8937 10.4591 76.3366 10.1698C76.7921 9.86792 77.311 9.62264 77.8931 9.43396C78.4878 9.2327 79.1901 9.08805 80 9V9.41509C79.6457 9.45283 79.2471 9.62264 78.8042 9.92453C78.3739 10.2138 77.9437 10.6164 77.5134 11.1321C77.0958 11.6352 76.7352 12.2453 76.4315 12.9623C75.9759 14.0314 75.7481 15.3774 75.7481 17C75.7481 18.5597 75.9632 19.8742 76.3935 20.9434C76.8238 22 77.3869 22.8553 78.0829 23.5094C78.7789 24.1509 79.4179 24.5094 80 24.5849V25Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>
            </div>
            <div
              style={{
                display: "block",
                width: 88,
                marginLeft: 62,
                marginTop: 62,
              }}
            >
              {" "}
              <TooltipMessage message={"나누기"} ItemHeight={44}>
                <CalcButton
                  onClick={() => {
                    setCalc([...calc, "/"]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.5529 25.7835C34.1686 25.7835 33.928 25.3681 34.1191 25.0348L43.6238 8.45639C43.713 8.30095 43.8784 8.20508 44.0576 8.20508L46.354 8.20508C46.7372 8.20508 46.978 8.61853 46.7888 8.95185L37.3809 25.5303C37.2921 25.6868 37.126 25.7835 36.946 25.7835H34.5529Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>
              <TooltipMessage message={"절사"} ItemHeight={44}>
                <CalcButton
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    setCalc([...calc, "F("]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 25.4621H31.9646V18.1733H38.9161V15.9429H31.9646V10.7694H40.1429V8.53906H29V25.4621Z"
                      fill="#838181"
                    />
                    <path
                      d="M55 27L53.5163 26.8349C52.406 26.7091 51.2857 26.4182 50.1553 25.9623C49.0248 25.5063 48.0054 24.9088 47.097 24.1698C46.1886 23.4308 45.4821 22.5896 44.9775 21.6462C44.6141 20.9387 44.3315 20.1997 44.1296 19.4292C43.948 18.6431 43.8571 17.8333 43.8571 17C43.8571 15.522 44.1397 14.1541 44.7049 12.8962C45.2702 11.6226 46.0574 10.5928 47.0667 9.8066C47.7531 9.27201 48.4495 8.8239 49.156 8.46226C49.8827 8.0849 50.7104 7.7783 51.639 7.54245C52.5877 7.29088 53.708 7.11006 55 7V7.51887C54.4348 7.56604 53.7989 7.7783 53.0924 8.15566C52.406 8.51729 51.7197 9.02044 51.0334 9.66509C50.3672 10.294 49.7919 11.0566 49.3074 11.9528C48.5807 13.2893 48.2174 14.9717 48.2174 17C48.2174 18.9497 48.5605 20.5928 49.2469 21.9292C49.9332 23.25 50.8315 24.3192 51.9417 25.1368C53.052 25.9387 54.0714 26.3868 55 26.4811V27Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>
              <TooltipMessage message={"최소값"} ItemHeight={44}>
                <CalcButton
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    setCalc([...calc, "MIN("]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 23.8302H20.2742V16.9623C20.2742 15.717 20.0774 13.9245 19.9681 12.6604H20.0555L21.3238 15.8679L24.1447 22.4906H25.7192L28.5182 15.8679L29.8084 12.6604H29.8959C29.7647 13.9245 29.5679 15.717 29.5679 16.9623V23.8302H31.9295V9.9434H28.9993L26.0909 16.9623C25.7192 17.8868 25.4131 18.8302 25.0413 19.7736H24.932C24.5602 18.8302 24.2322 17.8868 23.8605 16.9623L20.9084 9.9434H18V23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M36.1517 23.8302H38.6883V9.9434H36.1517V23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M42.8998 23.8302H45.3052V17.283C45.3052 15.7736 45.1084 14.1698 44.9772 12.7358H45.0866L46.7703 15.6415L52.106 23.8302H54.7082V9.9434H52.3028V16.4151C52.3028 17.9245 52.4996 19.6038 52.6308 21.0377H52.5215L50.8377 18.0943L45.502 9.9434H42.8998V23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M66 25L64.9285 24.8679C64.1267 24.7673 63.3176 24.5346 62.5012 24.1698C61.6848 23.805 60.9486 23.327 60.2926 22.7358C59.6366 22.1447 59.1263 21.4717 58.7619 20.717C58.4995 20.1509 58.2954 19.5597 58.1496 18.9434C58.0184 18.3145 57.9528 17.6667 57.9528 17C57.9528 15.8176 58.1569 14.7233 58.5651 13.717C58.9733 12.6981 59.5418 11.8742 60.2707 11.2453C60.7664 10.8176 61.2694 10.4591 61.7796 10.1698C62.3044 9.86792 62.9021 9.62264 63.5727 9.43396C64.2579 9.2327 65.067 9.08805 66 9V9.41509C65.5918 9.45283 65.1326 9.62264 64.6223 9.92453C64.1267 10.2138 63.631 10.6164 63.1354 11.1321C62.6543 11.6352 62.2388 12.2453 61.8889 12.9623C61.3641 14.0314 61.1017 15.3774 61.1017 17C61.1017 18.5597 61.3495 19.8742 61.8452 20.9434C62.3409 22 62.9896 22.8553 63.7914 23.5094C64.5932 24.1509 65.3294 24.5094 66 24.5849V25Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>
            </div>
            <div
              style={{
                display: "block",
                width: 88,
                marginLeft: 62,
                marginTop: 62,
              }}
            >
              {" "}
              <TooltipMessage message={"곱하기"} ItemHeight={44}>
                <CalcButton
                  onClick={() => {
                    setCalc([...calc, "*"]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.0938 23L42 20.1054L44.9375 23L47.2187 21.4824L45.0625 18.1382L49 16.5082L48.125 14.0632L43.9063 14.8782L43.4687 11H40.5625L40.0938 14.8782L35.9063 14.0632L35 16.5082L38.9063 18.1382L36.7813 21.4824L39.0938 23Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>
              <TooltipMessage message={"최대값"} ItemHeight={44}>
                <CalcButton
                  style={{ marginTop: 90 }}
                  onClick={() => {
                    setCalc([...calc, "MAX("]);
                  }}
                >
                  <svg
                    width="84"
                    height="34"
                    viewBox="0 0 84 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 23.8302H20.1065V16.9623C20.1065 15.717 19.9242 13.9245 19.8229 12.6604H19.9039L21.0787 15.8679L23.6915 22.4906H25.1498L27.7424 15.8679L28.9374 12.6604H29.0184C28.8969 13.9245 28.7146 15.717 28.7146 16.9623V23.8302H30.9021V9.9434H28.188L25.4941 16.9623C25.1498 17.8868 24.8663 18.8302 24.5219 19.7736H24.4207C24.0763 18.8302 23.7725 17.8868 23.4282 16.9623L20.6938 9.9434H18V23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M37.061 18.1509L37.6686 16.283C38.1547 14.7736 38.6206 13.2453 39.0459 11.6604H39.127C39.5928 13.2264 40.0384 14.7736 40.5448 16.283L41.1321 18.1509H37.061ZM42.955 23.8302H45.4463L40.5043 9.9434H37.7902L32.8481 23.8302H35.2381L36.5141 19.8679H41.6993L42.955 23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M45.7718 23.8302H48.2631L50.167 20.3774C50.5316 19.6792 50.8962 18.9623 51.3215 18.1132H51.4026C51.8684 18.9623 52.2533 19.6792 52.6381 20.3774L54.6028 23.8302H57.2156L52.9216 16.7736L56.932 9.9434H54.461L52.6988 13.1887C52.3545 13.8302 52.071 14.4528 51.6861 15.283H51.5849C51.1393 14.4528 50.8152 13.8302 50.4506 13.1887L48.648 9.9434H46.0351L50.0455 16.6604L45.7718 23.8302Z"
                      fill="#838181"
                    />
                    <path
                      d="M66 25L65.0075 24.8679C64.2649 24.7673 63.5155 24.5346 62.7593 24.1698C62.0031 23.805 61.3212 23.327 60.7136 22.7358C60.106 22.1447 59.6334 21.4717 59.2958 20.717C59.0527 20.1509 58.8637 19.5597 58.7287 18.9434C58.6071 18.3145 58.5464 17.6667 58.5464 17C58.5464 15.8176 58.7354 14.7233 59.1135 13.717C59.4916 12.6981 60.0182 11.8742 60.6933 11.2453C61.1524 10.8176 61.6183 10.4591 62.0909 10.1698C62.577 9.86792 63.1306 9.62264 63.7518 9.43396C64.3864 9.2327 65.1358 9.08805 66 9V9.41509C65.6219 9.45283 65.1966 9.62264 64.724 9.92453C64.2649 10.2138 63.8058 10.6164 63.3467 11.1321C62.9011 11.6352 62.5162 12.2453 62.1922 12.9623C61.7061 14.0314 61.463 15.3774 61.463 17C61.463 18.5597 61.6926 19.8742 62.1517 20.9434C62.6108 22 63.2116 22.8553 63.9543 23.5094C64.697 24.1509 65.3789 24.5094 66 24.5849V25Z"
                      fill="#838181"
                    />
                  </svg>
                </CalcButton>
              </TooltipMessage>
            </div>
          </div>
        </Container>
        <Container
          title="계산 항목"
          defaultHeight={68}
          maxHeight={283}
          state={objClick}
          setState={setObjClick}
        >
          <div
            style={{
              height: 214,
              width: 602,
              marginTop: 18,
              borderTop: "1px solid #e0e0e0",
              overflowY: "auto",
            }}
          >
            <ul style={{ padding: 0 }}>
              {arry.map((ary) => (
                <StyledLi onClick={() => setCalc([...calc, ary])}>
                  {ary}
                </StyledLi>
              ))}
            </ul>
          </div>
        </Container>
      </HcContentPopup>
    </>
  );
}
