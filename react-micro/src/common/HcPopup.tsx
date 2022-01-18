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
const PopupContainer = styled.div`
  width: 602px;
  height: 339px;
  background: #ffffff;
  border: 1px solid lightgray;
  border-radius: 6px;
  position: relative;
  margin: auto;
  animation: ${PopupShow} 0.3s;
  overflow: hidden;
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
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 33px;
  color: #303030;
  top: 18px;
  left: 24px;
  position: absolute;
`;

const Popup_Buttons = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

const Popup_Text = styled.p`
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

const Popup_Text2 = styled.div`
  position: absolute;
  width: 509px;
  height: 363px;
  top: 108px;
  right: 63px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #717171;
`;
const styles: any = {
  modal: {
    display: "none",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  openModal: {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  treeModal: {
    display: "none",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
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
                style={{ marginRight: "12px" }}
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
