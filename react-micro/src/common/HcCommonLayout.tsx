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
