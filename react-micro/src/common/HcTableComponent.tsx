import React from "react";
import styled from "styled-components";
import "./scroll.scss";
const StyledSelect = styled.select`
  border: none;
  width: 120px;
  height: 46;
  text-align: center;

  &:hover {
    background: #eff5ff;

    input {
      background: #eff5ff;
    }
  }
`;
const TableContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background: none;

    position: absolute;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #f5f5f5;
    display: none;
    &:hover {
      display: inline;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }
  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
`;

const StyledTable = styled.table`
  td {
    border-bottom: 1px solid #e0e0e0;
    height: 46px;
    padding-left: 12px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
  tr th {
    padding-left: 12px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: #636363;
    height: 32px;
  }
  tr &:hover {
    background-color: #eff5ff;
    transition: all 0.3s ease;
  }
  tr&:active {
    background-color: #cee2ff;
    transition: all 0.3s ease;
  }
  thead tr &:hover {
    background-color: #e0e0e0;
    transition: all 0.3s ease;
  }
  thead > tr:active {
    background-color: #cecece;
    transition: all 0.3s ease;
  }
  thead > tr {
    height: 32px;
    background-color: #ededed;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;

    color: #464646;
  }
  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  th:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: none;
    position: absolute;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: none;
    position: absolute;
  }
  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }
`;

const FixedTableContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: auto;
  overflow-x: auto;
  max-height: 200px;
  overflow-y: auto;
  table {
    width: 100%;
    margin: auto;
    border-collapse: separate;
    border-spacing: 0;
  }
  th {
    padding: 5px 10px;
    border: 1px solid #000;
    background: #fff;
    white-space: nowrap;
    vertical-align: top;
  }
  td {
    padding: 5px 10px;
    border: 1px solid #000;
    background: #fff;
    white-space: nowrap;
    vertical-align: top;
  }
  thead {
    background: #f9f9f9;
  }
`;
const FixedTableWrap = styled.div`
  width: 100%;
  overflow: auto;
`;
const FixedTable = styled.table`
  thead tr th {
    visibility: visible;
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
  tr th {
    border: 1px solid #000;

    visibility: visible;
    position: sticky;
    left: 0;
    top: 0;
  }
  th {
    border: 1px solid #000;
    visibility: visible;
    position: sticky;
    top: 0;
    left: 0;
  }
`;
export function TableSelect({ children }: any) {
  return <StyledSelect>{children}</StyledSelect>;
}
export function HcTable({ children }: any) {
  return <StyledTable>{children}</StyledTable>;
}
export function HcTableContainer({ children }: any) {
  return <TableContainer>{children}</TableContainer>;
}

const Wrapper = styled.div`
  position: relative;
  overflow: auto;
  white-space: nowrap;
`;
export function TableWrapper(props: any) {
  const { tableWidth, tableHeight, children } = props;
  const styles = {
    stickyCol: {
      // position: "-webkit-sticky",
      position: "sticky",
    },
    firstCol: {
      width: 160,
      minWidth: 160,
      maxWidth: 160,
      left: 0,
    },
    lastCol: {
      width: 150,
      minWidth: 150,
      maxWidth: 150,
      right: 0,
    },
    th: {
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    tr: { zIndex: 150 },
  };
  return (
    <div className="view" style={{ width: tableWidth }}>
      <Wrapper style={{ height: tableHeight, width: tableWidth }}>
        {children}
      </Wrapper>
    </div>
  );
}
export function TableActionBtn() {
  return (
    <>
      {/* <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: 10 }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM10 5C10 5.55228 9.55229 6 9 6C8.44771 6 8 5.55228 8 5C8 4.44772 8.44771 4 9 4C9.55229 4 10 4.44772 10 5ZM9 7C8.44771 7 8 7.44772 8 8V13C8 13.5523 8.44771 14 9 14C9.55229 14 10 13.5523 10 13V8C10 7.44772 9.55229 7 9 7Z"
          fill="#5D5D62"
        />
      </svg> */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: 10 }}
      >
        <path
          d="M11.5293 4.74316L11.5293 4.74317C11.2695 5.00295 11.2695 5.39722 11.5293 5.65699L14.3431 8.47079C14.4715 8.59921 14.6347 8.66557 14.8 8.66557H14.8C14.9651 8.66557 15.1283 8.59943 15.2569 8.4708L17.9053 5.82245L17.9053 5.82245C18.1651 5.56267 18.1651 5.16839 17.9053 4.90863L15.0915 2.09482L15.0915 2.09482C14.8317 1.83506 14.4374 1.83506 14.1776 2.09482L11.5293 4.74316ZM14.8 7.10008L12.9 5.2001L14.6343 3.46578L16.5343 5.36576L14.8 7.10008Z"
          fill="black"
          stroke="black"
          stroke-width="0.2"
        />
        <path
          d="M1.9 17.3848L1.90033 17.3848L2.14824 14.3542C2.14941 14.1852 2.22013 14.0521 2.34295 13.9291L2.34301 13.929L9.98434 6.28775C10.2441 6.02799 10.6384 6.02799 10.8982 6.28775L10.8985 6.28811L13.6843 9.10176C13.6844 9.1018 13.6844 9.10185 13.6845 9.1019C13.9441 9.36167 13.944 9.75584 13.6843 10.0156L6.04311 17.6843L6.04298 17.6845C5.93995 17.7875 5.77934 17.8481 5.63315 17.8773L5.6209 17.8797L5.62084 17.879L2.58628 18.0997L2.57903 18.1002V18.0999H2.5517H2.47683L2.47543 18.0951C2.33683 18.0779 2.20337 18.0137 2.09477 17.9051M1.9 17.3848L2.09477 17.9051M1.9 17.3848V17.393C1.9 17.5783 1.96151 17.7718 2.09477 17.9051M1.9 17.3848L2.16549 17.8344L2.09477 17.9051M10.4137 7.68652L12.3136 9.58636L5.29329 16.6066L3.26702 16.7605L3.42104 14.7064L10.4137 7.68652Z"
          fill="black"
          stroke="black"
          stroke-width="0.2"
        />
      </svg>

      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 2.75C6 2.33579 6.33579 2 6.75 2H13.25C13.6642 2 14 2.33579 14 2.75C14 3.16421 13.6642 3.5 13.25 3.5H6.75C6.33579 3.5 6 3.16421 6 2.75ZM2 5.25C2 4.83579 2.33579 4.5 2.75 4.5H17.25C17.6642 4.5 18 4.83579 18 5.25C18 5.66421 17.6642 6 17.25 6H16.75V15.5C16.75 16.7426 15.7426 17.75 14.5 17.75H6C4.75736 17.75 3.75 16.7426 3.75 15.5V6H2.75C2.33579 6 2 5.66421 2 5.25ZM5.25 6V15.5C5.25 15.9142 5.58579 16.25 6 16.25H14.5C14.9142 16.25 15.25 15.9142 15.25 15.5V6H5.25ZM8.75 7C8.33579 7 8 7.33579 8 7.75V13.25C8 13.6642 8.33579 14 8.75 14C9.16421 14 9.5 13.6642 9.5 13.25V7.75C9.5 7.33579 9.16421 7 8.75 7ZM11 7.75C11 7.33579 11.3358 7 11.75 7C12.1642 7 12.5 7.33579 12.5 7.75V13.25C12.5 13.6642 12.1642 14 11.75 14C11.3358 14 11 13.6642 11 13.25V7.75Z"
          fill="black"
        />
      </svg>
    </>
  );
}
