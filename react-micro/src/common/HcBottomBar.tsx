import React, { Children, CSSProperties } from "react";
import styled from "styled-components";

const BotBarWrapper = styled.div<{ open: boolean }>`
  height: ${(props) => (props.open ? "80px" : "0px")};
  width: inherit;
  background: #ffffff;
  box-shadow: 0px -1px 4px rgba(153, 153, 153, 0.55);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  transition: height 1s;
  z-index: 2;
`;
const BtnAreaWrapper = styled.div<{ open: boolean }>`
  margin-left: auto;
  margin-right: 25px;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: opacity 0.5s;
`;

interface HcBotBarProps {
  children: React.ReactChild;
  style?: CSSProperties;
  open: boolean;
}

const HcBottomBar: React.FC<HcBotBarProps> = ({ children, style, open }) => {
  return (
    <BotBarWrapper style={style} open={open}>
      <BtnAreaWrapper open={open}>{children}</BtnAreaWrapper>
    </BotBarWrapper>
  );
};

export default HcBottomBar;
