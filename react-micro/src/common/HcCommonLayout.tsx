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
  min-height: 972px;
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

export const Container = (props?: any) => {
  const Arrow = styled.svg`
    transition: all 0.2s ease;
    &:active {
      transform: rotate(-180deg);
    }
  `;
  const ContainerStyle = styled.div<{
    state: boolean;
    arrow?: boolean;
    maxHeight: number;
  }>`
    background: #ffffff;
    width: 650px;
    margin-top: 24px;
    border-radius: 6px;
    border: 1px solid #cecece;
    padding-top: 18px;
    padding-left: 24px;
    position: relative;
    ${(props) =>
      props.state
        ? ` transition: all 0.5s ease; height: ${maxHeight}px; max-height:${maxHeight}px;`
        : `  transition: all 0.5s ease; height:68px; max-height:68px;`}
    overflow: hidden;
    z-index: 1;
    .arrow {
      right: 24px;
      position: absolute;
      ${(props) =>
        props.state
          ? `top: 22px; transition: all 0.5s ease; ;`
          : `top: 30px;   transform: rotate(-180deg); transition: all 0.5s ease; `}
    }
  `;

  const {
    defaultHeight,
    maxHeight,
    width,
    title,
    // state,
    // setState,
    style,
    arrow,
  } = props;
  const [state, setState] = React.useState(true);

  const styles = {
    cnt: {
      width: width,
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
      state={state}
      maxHeight={maxHeight}
      style={Object.assign(styles.cnt, style) as React.CSSProperties}
    >
      <div style={styles.title}>{title}</div>
      <div className="arrow" onClick={handleClick}>
        {" "}
        <Arrow
          // style={{
          //   top: state === false ? 30 : 23,
          //   right: 20,
          //   position: "absolute",
          //   transition: "all 0.2s ease",
          //   transform: state === false ? "rotate(-180deg)" : "rotate(180deg)",
          //   display: arrow === false ? "none" : "",
          // }}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2929 7.70711C13.6834 7.31658 13.6834 6.68342 13.2929 6.29289L7.63616 0.636155L7.63604 0.636039C7.24551 0.245514 6.61235 0.245515 6.22183 0.636039C6.2175 0.640361 6.21323 0.644712 6.209 0.649093L0.565087 6.29301C0.174562 6.68353 0.174563 7.3167 0.565087 7.70722C0.955611 8.09775 1.58878 8.09775 1.9793 7.70722L6.92905 2.75748L11.8787 7.70711C12.2692 8.09763 12.9024 8.09763 13.2929 7.70711Z"
            fill="#5D5D62"
          />
        </Arrow>
      </div>
      <div style={{ paddingTop: 28, paddingLeft: 16, paddingBottom: 30 }}>
        {state === true ? props.children : ""}
      </div>
    </ContainerStyle>
  );
};
