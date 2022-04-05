import React from "react";
import styled from "styled-components";

export const ComponentWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  padding: 20px 40px;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: auto;
`;

export const MultiLayout = styled.div<{
  columCnt?: number;
  columnGap?: string;
  columnWidth?: string;
}>`
  column-count: ${(props) => (props.columCnt != null ? props.columCnt : "3")};
  column-gap: ${(props) =>
    props.columnGap != null ? props.columnGap : "50px"};
  column-width: ${(props) =>
    props.columnWidth != null ? props.columnWidth : "2px"};
`;

export const VariableMultiLayout = styled.div`
  display: flex;
  p {
    margin-right: 20px;
    flex-basis: 100px;
    &: last-child {
      margin-right: 0px;
    }
  }
`;

export const Container = (props: any) => {
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

  const { defaultHeight, maxHeight, width, title, state, setState, style } =
    props;
  const styles = {
    cnt: {
      width: width,
      height: state === true ? maxHeight : defaultHeight,
    },
    title: {
      width: "fit-content",
      color: "#303030",
      fontSize: "20px",
      fontWeight: 500,
      fontFamily: "Noto Sans KR",
    },
  };
  const handleClick = () => {
    if (state === false) setState(true);
    else setState(false);
  };

  return (
    <ContainerStyle
      style={Object.assign(styles.cnt, style) as React.CSSProperties}
    >
      <div style={styles.title}>{title}</div>
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
      <div style={{ paddingTop: 28, paddingLeft: 16, paddingBottom: 30 }}>
        {state === true ? props.children : ""}
      </div>
    </ContainerStyle>
  );
};
