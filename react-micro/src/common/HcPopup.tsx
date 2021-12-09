import React from "react";
import styled from "styled-components";
import HcButton from "./HcButton";

const HcPopup = styled.div`
  width: 602px;
  height: 339px;
  background: #ffffff;
  border: 1px solid lightgray;
  position: relative;
  block: inline-block;
  float: left;
  margin: 20px;
`;

const Popup_Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #303030;
  top: 18px;
  left: 24px;
  position: absolute;
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

const Popup_Text2 = styled.p`
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

export default function Popup({ children }: any) {
  return (
    <>
      <HcPopup>
        <Popup_Title>Pop-up Title</Popup_Title>
        <div style={{ top: 18, right: 24, position: "absolute" }}>
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
        </div>
        <hr
          style={{
            position: "absolute",
            width: 554,
            height: 1,
            left: 24,
            top: 57,
            background: "#e0e0e0",
            border: "none",
            margin: 0,
          }}
        />
        <br />
        <Popup_Text> {children}</Popup_Text>
        <Popup_Buttons>
          <HcButton
            styles="secondary"
            style={{ marginRight: "12px" }}
            size="medium"
          >
            TEXT
          </HcButton>
          <HcButton styles="line" size="medium">
            TEXT
          </HcButton>
        </Popup_Buttons>
      </HcPopup>

      <HcPopup>
        <Popup_Title2>Pop-up Title</Popup_Title2>
        <div style={{ top: 26, right: 26, position: "absolute" }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0711 1.07108C14.6372 0.637166 13.9336 0.637166 13.4997 1.07108L8.00005 6.57077L2.50032 1.07103C2.0664 0.637117 1.36288 0.637117 0.928967 1.07103C0.495051 1.50495 0.495051 2.20847 0.928967 2.64238L6.4287 8.14212L0.928946 13.6419C0.495031 14.0758 0.495031 14.7793 0.928947 15.2132C1.36286 15.6471 2.06638 15.6471 2.50029 15.2132L8.00005 9.71346L13.4998 15.2132C13.9337 15.6471 14.6372 15.6471 15.0711 15.2132C15.505 14.7793 15.505 14.0757 15.0711 13.6418L9.5714 8.14212L15.0711 2.64243C15.505 2.20851 15.505 1.505 15.0711 1.07108Z"
              fill="#303030"
            />
          </svg>
        </div>

        <br />
        <Popup_Text2> {children}</Popup_Text2>
        <Popup_Buttons>
          <HcButton
            styles="secondary"
            style={{ marginRight: "12px" }}
            size="medium"
          >
            TEXT
          </HcButton>
          <HcButton styles="line" size="medium">
            TEXT
          </HcButton>
        </Popup_Buttons>
      </HcPopup>
    </>
  );
}
