import styled, { keyframes } from "styled-components";
import HcButton from "./HcButton";

const PopupShow = keyframes`
from {
  opacity: 0;
  top:-50px;
}
to {
  opacity: 1;
  top:0;
}
`;
const SideBarShow = keyframes`
from {
  opacity: 0;
  left:1846px;
}
to {
  opacity: 1;
  left:1346px;
}
`;
const PopupContainer = styled.div`
  min-width: 602px;
  min-height: 339px;
  background: #ffffff;
  border: 1px solid lightgray;
  border-radius: 6px;
  position: relative;
  margin: auto;
  animation: ${PopupShow} 0.3s;
  overflow: hidden;
`;
const SideBarContainer = styled.div`
  height: 800px;
  width: 574px;
  background: #ffffff;
  border: 1px solid lightgray;
  padding: 30px 30px 20px 30px;
  position: relative;
  left: 1346px;
  top: 68px;
  animation: ${SideBarShow} 0.3s;

  overflow: hidden;
`;
export const ContentContainer = styled.div`
  width: 730px;
  height: 630px;
  background: #ffffff;
  border: 1px solid lightgray;
  border-radius: 6px;
  position: relative;
  margin: auto;
  animation: ${PopupShow} 0.3s;
  overflow: hidden;
  z-index: 99;

  transition: width 0.5s, height 0.5s;
`;
const MailContainer = styled.div`
  width: 746px;
  height: 699px;
  background: #ffffff;
  border: 1px solid lightgray;
  border-radius: 6px;
  position: relative;
  margin: 120px 519px 72px 587px;
  animation: ${PopupShow} 0.3s;
  overflow: hidden;
  z-index: 99;
`;

const TreeContainer = styled.div`
  width: 315px;
  height: 526px;
  background: #ffffff;
  border: 1px solid lightgray;
  border-radius: 6px;
  position: relative;
  margin: auto;
  margin-top: 500px;
  overflow: scroll;
`;

const Popup_Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #303030;
  top: 18px;
  left: 24px;
  position: absolute;
`;

const Popup_Line = styled.hr`
position: absolute;
width: 554px;
height: 1px;
left: 24px;
top: 57px;
background #e0e0e0;
border: none;

margin:0;
`;
const Popup_Title2 = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  color: #303030;
  top: 20px;
  left: 30px;
  position: absolute;
`;

export const Popup_Buttons = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

const Popup_Text = styled.div`
  position: absolute;
  width: 509px;
  height: 363px;
  top: 81px;
  right: 69px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #717171;
`;

const Popup_Content = styled.div`
  position: absolute;
  width: 650px;
  height: fit-content;
  top: 83px;
  right: 40px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #717171;
`;
const Mail_Content = styled.div`
  position: absolute;
  width: 686px;
  height: fit-content;
  top: 65px;
  right: 30px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #717171;
`;

export const styles: any = {
  modal: {
    display: "none",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
  },

  openModal: {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    overflow: "scroll",
  },
  treeModal: {
    display: "none",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
  },

  openTreeModal: {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
};
export function HcPopup(props: any) {
  const { open, close, header } = props;

  return (
    <div style={open ? styles.openModal : styles.modal}>
      {open ? (
        <PopupContainer>
          <Popup_Title> {header}</Popup_Title>
          <button
            onClick={close}
            style={{
              top: 18,
              right: 24,
              position: "absolute",
              padding: 0,
              backgroundColor: "#fff",
              border: "none",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                fill="#303030"
              />
            </svg>
          </button>
          <Popup_Line />

          <Popup_Text> {props.children}</Popup_Text>
          <Popup_Buttons>
            <HcButton
              styles="secondary"
              style={{ marginRight: "12px" }}
              size="medium"
            >
              TEXT
            </HcButton>
            <HcButton
              styles="line"
              size="medium"
              style={{ border: "0.82197px solid #A7A7A7" }}
            >
              TEXT
            </HcButton>
          </Popup_Buttons>
        </PopupContainer>
      ) : null}
    </div>
  );
}
type PopupProps = {
  width: any;
  height: any;
};
export function ContentPopup(props: any) {
  const { open, close, header } = props;
  return (
    <div style={open ? styles.openModal : styles.modal}>
      {open ? (
        <PopupContainer style={{ width: 1320, height: 1443, marginTop: 120 }}>
          <Popup_Title style={{ fontSize: "22px", top: 20, left: 30 }}>
            {" "}
            {header}
          </Popup_Title>
          <button
            onClick={close}
            style={{
              top: 18,
              right: 24,
              position: "absolute",
              padding: 0,
              backgroundColor: "#fff",
              border: "none",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                fill="#303030"
              />
            </svg>
          </button>

          <div
            style={{
              width: 1290,
              height: 1320,
              position: "absolute",
              top: 77,
              // padding: "20px 37px 40px 37px",
              paddingLeft: 40,
            }}
          >
            {props.children}
          </div>
          <Popup_Buttons>
            <HcButton
              styles="primary"
              style={{ marginRight: "12px" }}
              size="medium"
            >
              급여 명세서 다운로드
            </HcButton>
            <HcButton
              styles="line"
              size="medium"
              style={{ border: "0.82197px solid #A7A7A7" }}
            >
              취소
            </HcButton>
          </Popup_Buttons>
        </PopupContainer>
      ) : null}
    </div>
  );
}
export function SideBar(props: any) {
  const { open, close, header } = props;

  return (
    <div style={open ? styles.openModal : styles.modal}>
      {open ? (
        <SideBarContainer>
          <div
            style={{
              fontSize: "20px",
              color: "#303030",
              fontWeight: "bold",
            }}
          >
            {" "}
            {header}
          </div>

          <div style={{ marginTop: 39 }}> {props.children}</div>
          <Popup_Buttons>
            <HcButton
              onClick={close}
              styles="secondary"
              style={{ marginRight: "12px" }}
              size="medium"
            >
              저장
            </HcButton>
            <HcButton
              onClick={close}
              styles="line"
              size="medium"
              style={{ border: "0.82197px solid #A7A7A7" }}
            >
              취소
            </HcButton>
          </Popup_Buttons>
        </SideBarContainer>
      ) : null}
    </div>
  );
}
export function HcContentPopup(props: any) {
  //팝업 창 크기, 버튼 내용 조절 가능한 팝업
  const { open, close, header, Containerheight, primaryBtn, secondBtn } = props;
  const style = {
    cnt: {
      height: Containerheight === "" ? "630px" : Containerheight,
      marginTop: (1080 - Containerheight) / 2,
    },
    primary: {
      display: primaryBtn === "" ? "none" : "",
      marginRight: "6px",
      marginBottom: 6,
    },
    second: {
      display: secondBtn === "" ? "none" : "",
      border: "0.82197px solid #A7A7A7",
    },
  };

  return (
    <div style={open ? styles.openModal : styles.modal}>
      {open ? (
        <ContentContainer style={style.cnt}>
          <Popup_Title2> {header}</Popup_Title2>
          <button
            onClick={close}
            style={{
              top: 26,
              right: 26,
              position: "absolute",
              padding: 0,
              backgroundColor: "#fff",
              border: "none",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                fill="#303030"
              />
            </svg>
          </button>

          <Popup_Content> {props.children}</Popup_Content>
          <Popup_Buttons>
            <HcButton
              styles="primary"
              style={style.primary}
              size="medium"
              onClick={close}
            >
              {primaryBtn}
            </HcButton>
            <HcButton styles="line" size="medium" style={style.second}>
              취소
            </HcButton>
          </Popup_Buttons>
        </ContentContainer>
      ) : null}
    </div>
  );
}

export function HcMailPopup(props: any) {
  const { open, close, header, save } = props;

  return (
    <div style={open ? styles.openModal : styles.modal}>
      {open ? (
        <MailContainer>
          <Popup_Title2> {header}</Popup_Title2>
          <button
            onClick={close}
            style={{
              top: 26,
              right: 26,
              position: "absolute",
              padding: 0,
              backgroundColor: "#fff",
              border: "none",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                fill="#303030"
              />
            </svg>
          </button>

          <Mail_Content> {props.children}</Mail_Content>
          <Popup_Buttons>
            <HcButton
              styles="primary"
              style={{ marginRight: "6px", marginBottom: 6 }}
              size="medium"
              onClick={save}
            >
              저장
            </HcButton>
            <HcButton
              styles="line"
              size="medium"
              onClick={close}
              style={{ border: "0.82197px solid #A7A7A7" }}
            >
              취소
            </HcButton>
          </Popup_Buttons>
        </MailContainer>
      ) : null}
    </div>
  );
}

export function HcTreePopup(props: any) {
  const { open, close, header } = props;

  return (
    <>
      <div style={open ? styles.openTreeModal : styles.treeModal}>
        {open ? (
          <TreeContainer>
            {props.children}

            <Popup_Buttons>
              <HcButton
                styles="secondary"
                style={{ marginRight: "6px" }}
                size="medium"
              >
                이동
              </HcButton>
              <HcButton
                styles="line"
                size="medium"
                style={{ border: "0.82197px solid #A7A7A7" }}
                onClick={close}
              >
                취소
              </HcButton>
            </Popup_Buttons>
          </TreeContainer>
        ) : null}
      </div>
    </>
  );
}

const PopupContainer2 = styled.div`
  width: 630px;
  height: 847px;
  background: #ffffff;
  border: 1px solid lightgray;
  border-radius: 6px;
  position: relative;
  margin: auto;
  animation: ${PopupShow} 0.3s;
  overflow: hidden;
  padding: 20px 30px;
`;

const PopupTitle2 = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 33px;
  color: #303030;
`;
export function HcTreePopupFi(props: any) {
  const { open, close, header } = props;

  return (
    <div style={open ? styles.openModal : styles.modal}>
      {open ? (
        <PopupContainer2>
          <PopupTitle2> {header}</PopupTitle2>
          <button
            onClick={close}
            style={{
              top: 18,
              right: 24,
              position: "absolute",
              padding: 0,
              backgroundColor: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                fill="#303030"
              />
            </svg>
          </button>
          <Popup_Text> {props.children}</Popup_Text>
        </PopupContainer2>
      ) : null}
    </div>
  );
}

export function HcContentPopupFi(props: any) {
  const { open, close, header, confirm } = props;

  return (
    <div style={open ? styles.openModal : styles.modal}>
      {open ? (
        <ContentContainer style={props.style}>
          <div style={{ width: "inheirt" }}>
            <div
              style={{
                fontFamily: "Noto Sans KR",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "22px",
                color: "#000000",
                display: "inline-block",
              }}
            >
              {header}
            </div>
            <button
              onClick={close}
              style={{
                padding: 0,
                backgroundColor: "#fff",
                border: "none",
                float: "right",
                cursor: "pointer",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6569 0.343378C11.3097 -0.00375531 10.7469 -0.00375487 10.3998 0.343378L6 4.74315L1.60023 0.343378C1.25309 -0.00375531 0.690279 -0.00375565 0.343146 0.343377C-0.00398638 0.69051 -0.00398644 1.25332 0.343146 1.60046L4.74292 6.00023L0.343146 10.4C-0.00398672 10.7471 -0.00398706 11.31 0.343146 11.6571C0.690279 12.0042 1.25309 12.0042 1.60023 11.6571L6 7.25731L10.3998 11.6571C10.7469 12.0042 11.3097 12.0042 11.6569 11.6571C12.004 11.31 12.004 10.7471 11.6569 10.4L7.25708 6.00023L11.6569 1.60046C12.004 1.25332 12.004 0.69051 11.6569 0.343378Z"
                  fill="#303030"
                />
              </svg>
            </button>
          </div>

          <div
            style={{
              width: "100%",
              height: "fit-content",
              marginTop: "30px",
            }}
          >
            {props.children}
          </div>
          <Popup_Buttons>
            <HcButton
              styles="primary"
              style={{ marginRight: "6px", marginBottom: 6 }}
              size="medium"
              onClick={confirm}
            >
              확인
            </HcButton>
            {/* <HcButton
              styles="line"
              size="medium"
              style={{ border: "0.82197px solid #A7A7A7" }}
            >
              취소
            </HcButton> */}
          </Popup_Buttons>
        </ContentContainer>
      ) : null}
    </div>
  );
}
