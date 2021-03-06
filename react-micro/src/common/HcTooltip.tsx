import styled, { keyframes } from "styled-components";
import React from "react";
const MessageBox = styled.div`
  background: #2d2d31;
  border-radius: 3px;
  height: 39px;
  width: max-content;
  color: #ffffff;
  position: absolute;
  display: block;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  clear: both;
  z-index: 50;
  bottom: 31px;
  margin-left: -10px;
  padding: 10px 14px 10px 14px;
`;

export default function InfoIconTooltip(props: { message: string }) {
  const [styles, setStyle] = React.useState({ display: "none" });
  return (
    <>
      <MessageBox className="tooltip" style={Object.assign(styles)}>
        {props.message}
      </MessageBox>
      <svg
        className="arrow"
        xmlns="http://www.w3.org/2000/svg"
        style={Object.assign(
          {
            position: "absolute",
            bottom: 21,
            marginLeft: 5,
          } as React.CSSProperties,
          styles
        )}
        width="17"
        height="12"
        viewBox="0 0 17 12"
        fill="none"
      >
        <path
          d="M8.20508 12L0.205078 0L16.2051 1.36279e-06L8.20508 12Z"
          fill="#2D2D31"
        />
      </svg>

      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={Object.assign({ marginLeft: 3, position: "absolute", top: 2 })}
        onMouseEnter={(e) => {
          setStyle({ display: "inline-block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <rect width="18" height="18" rx="2" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 14.25C11.8995 14.25 14.25 11.8995 14.25 9C14.25 6.10051 11.8995 3.75 9 3.75C6.10051 3.75 3.75 6.10051 3.75 9C3.75 11.8995 6.10051 14.25 9 14.25ZM9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM9.75 6C9.75 6.41421 9.41421 6.75 9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25C9.41421 5.25 9.75 5.58579 9.75 6ZM9 7.5C8.58579 7.5 8.25 7.83579 8.25 8.25V12C8.25 12.4142 8.58579 12.75 9 12.75C9.41421 12.75 9.75 12.4142 9.75 12V8.25C9.75 7.83579 9.41421 7.5 9 7.5Z"
          fill="#838181"
        />
      </svg>
    </>
  );
}

export function TooltipMessage(props: {
  message: string;
  children: any;
  ItemHeight: number;
}) {
  const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    &:hover > .tooltip,
    &:active > .tooltip {
      display: block;
    }
  `;

  const Content = styled(MessageBox)`
    display: none;
    position: absolute;
    z-index: 200;
    bottom: 0;
    margin-left: 22%;
  `;
  const Arrow = styled.svg`
    display: none;
  `;
  return (
    <>
      <Container>
        <Content
          className="tooltip"
          style={{ marginBottom: props.ItemHeight + 15 }}
        >
          {props.message}
        </Content>
        <Arrow
          className="tooltip"
          xmlns="http://www.w3.org/2000/svg"
          style={Object.assign({
            position: "absolute",
            bottom: props.ItemHeight + 6,
            marginLeft: "45%",
          } as React.CSSProperties)}
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
        >
          <path
            d="M8.20508 12L0.205078 0L16.2051 1.36279e-06L8.20508 12Z"
            fill="#2D2D31"
          />
        </Arrow>
        {props.children}
      </Container>
    </>
  );
}
