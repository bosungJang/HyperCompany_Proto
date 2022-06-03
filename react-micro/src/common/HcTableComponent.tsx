import { parseInt } from "lodash";
import React from "react";
import styled from "styled-components";
import "./scroll.scss";
const StyledSelect = styled.select<{ disabled?: boolean }>`
  border: none;
  width: 100%;
  height: 46px;
  text-align: left;
  cursor: pointer;
  background: url(/images/Select_Arrow.png) no-repeat 95% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  option input {
    border: none;
    width: 100%;
    height: 46px;
    text-align: left;
  }

  &:focus {
    border: 1px solid #257cff;
    pointer-events: none;
  }
  &:focus-visible {
    border: 1px solid #257cff;
    pointer-events: none;
  }
  &:active {
    border: 1px solid #257cff;
    pointer-events: none;
  }
  &:after {
    border: 1px solid #257cff;
    pointer-events: none;
  }
`;
const TableContainer = styled.div`
  overflow-x: visible;
  overflow-y: overlay;

  &::-webkit-scrollbar-track {
    background: none;
    position: absolute;
    z-index: 1;
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
  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
    z-index: 3;
  }
`;

const StyledTable = styled.table`
  text-align: left;
  table-layout: fixed;

  td {
    cursor: pointer;
    border-bottom: 1px solid #e0e0e0;
    height: 46px;
    // padding-left: 12px;
    // padding-right: 12px;
    padding: 12px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    border-collapse: collapse !important;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
  tr > td {
    background-color: #ffffff;
  }
  tr:hover {
    background-color: #eff5ff;
    transition: all 0.3s ease;
    td {
      background-color: #eff5ff;
    }
  }
  tr:active {
    background-color: #cee2ff;
    transition: all 0.3s ease;
    td {
      background-color: #cee2ff;
    }
  }
  thead > tr:hover {
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
    font-family: Noto Sans KR;
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

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  line-height: 33px;
  display: inline-block;
  &:hover {
    background: #cee2ff;
  }

  &:active {
    background: #adceff;
  }
`;

export function TableSelect(props?: any) {
  const { children, style, disabled } = props;
  return (
    <StyledSelect style={style} disabled={disabled}>
      {children}
    </StyledSelect>
  );
}
export function HcTable({ children }: any) {
  return <StyledTable>{children}</StyledTable>;
}

export function NullTbody(props: any) {
  const toNum: number = +props.colspan;
  return (
    <tr>
      <td
        colSpan={toNum}
        style={Object.assign(
          {
            width: "100%",
            paddingLeft: "calc(50% - 60px)",
            backgroundColor: "#ffffff",
          },
          props.style
        )}
      >
        <svg
          width="120"
          height="141"
          viewBox="0 0 120 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="120" height="120" fill="url(#pattern0)" />
          <path
            d="M6.8087 126.942H10.3927V126.018H5.6747V134.012H6.4867C8.4887 134.012 9.7067 133.956 11.1347 133.648L11.0227 132.71C9.7067 132.99 8.5867 133.046 6.8087 133.06V126.942ZM12.2547 129.266H9.5527V130.218H12.2547V136.406H13.3327V124.786H12.2547V129.266ZM14.7747 124.478V137.036H15.8667V124.478H14.7747ZM27.2196 124.478V137.064H28.3676V124.478H27.2196ZM21.7456 125.444C19.8836 125.444 18.5536 127.152 18.5536 129.826C18.5536 132.5 19.8836 134.208 21.7456 134.208C23.6076 134.208 24.9376 132.5 24.9376 129.826C24.9376 127.152 23.6076 125.444 21.7456 125.444ZM21.7456 126.48C22.9636 126.48 23.8316 127.796 23.8316 129.826C23.8316 131.87 22.9636 133.186 21.7456 133.186C20.5136 133.186 19.6456 131.87 19.6456 129.826C19.6456 127.796 20.5136 126.48 21.7456 126.48ZM32.6925 130.078H36.8085V129.154H32.6925V126.564H37.3545V125.612H31.5445V134.026H32.5105C34.9045 134.026 36.4305 133.956 38.2505 133.634L38.1245 132.696C36.4165 133.004 34.9605 133.088 32.6925 133.088V130.078ZM40.1685 124.464V129.21H37.5785V130.162H40.1685V137.05H41.3165V124.464H40.1685ZM44.5214 125.822V126.774H49.1274C48.8614 129.742 47.1394 132.15 43.9334 133.76L44.5634 134.656C48.6234 132.626 50.2614 129.392 50.2614 125.822H44.5214ZM55.5254 129.574H53.5094V124.478H52.3614V137.036H53.5094V130.526H55.5254V129.574ZM64.5772 135.972H62.3652V134.278H64.5772V135.972ZM64.5772 133.424H62.3652V131.842H61.2872V136.868H65.6412V131.842H64.5772V133.424ZM63.2892 129.868C62.0432 129.868 61.1472 129.056 61.1472 127.922C61.1472 126.788 62.0432 125.99 63.2892 125.99C64.5352 125.99 65.4312 126.788 65.4312 127.922C65.4312 129.056 64.5352 129.868 63.2892 129.868ZM69.0432 128.37V131.128H70.2052V124.492H69.0432V127.432H66.4812C66.2432 125.99 64.9832 125.038 63.2892 125.038C61.4132 125.038 60.0552 126.2 60.0552 127.922C60.0552 129.644 61.4132 130.82 63.2892 130.82C65.0112 130.82 66.2712 129.84 66.4812 128.37H69.0432ZM69.1972 131.758H68.0772V132.822C68.0772 134.11 67.2932 135.468 65.7952 136.112L66.3832 136.98C67.4752 136.504 68.2312 135.636 68.6372 134.614C69.0152 135.65 69.7712 136.504 70.9052 136.98L71.4792 136.112C69.9812 135.524 69.1972 134.152 69.1972 132.822V131.758ZM83.4481 128.398C81.2221 128.118 79.0101 126.732 79.0101 125.178V124.618H77.8341V125.178C77.8341 126.774 75.6361 128.118 73.3821 128.398L73.8021 129.322C75.7621 129.014 77.6381 128.034 78.4221 126.634C79.2201 128.034 81.0821 129.014 83.0281 129.322L83.4481 128.398ZM81.4741 135.944H75.3001V134.348H81.4741V135.944ZM81.4741 133.466H75.3001V131.996H74.1661V136.868H82.6081V131.996H81.4741V133.466ZM72.7241 130.204V131.128H84.0921V130.204H72.7241ZM87.549 125.696H86.401V133.788H87.437C89.439 133.788 91.413 133.648 93.597 133.2L93.471 132.22C91.385 132.64 89.439 132.808 87.549 132.808V125.696ZM94.759 124.478V137.022H95.907V124.478H94.759ZM100.176 126.634H104.866V125.682H99.0279V133.928H100.022C102.388 133.928 104.04 133.844 105.958 133.48L105.832 132.528C104.012 132.85 102.402 132.948 100.176 132.948V126.634ZM110.228 129.434H108.156V124.478H107.008V137.064H108.156V130.386H110.228V129.434ZM112.579 136.182C113.083 136.182 113.503 135.79 113.503 135.216C113.503 134.642 113.083 134.222 112.579 134.222C112.075 134.222 111.655 134.642 111.655 135.216C111.655 135.79 112.075 136.182 112.579 136.182Z"
            fill="#A7A7A7"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1576_8364"
                transform="scale(0.00833333)"
              />
            </pattern>
            <image
              id="image0_1576_8364"
              width="120"
              height="120"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM4SURBVHgB7dw9TBNhGMDxp6VFvrXKIlHGOvrB5IRBEzUR40TEyUXCZsTNRXGHOPoxOZmwaGIHHUxwkaniSheJGFykKJRiob3z3kPRAolcT+Duuf8vIYFLrgn59+79SO5EAAAAAAAAAAAAAAAAAAAAAAAA9kpMfFh4nXpu27ErEgCWLcOpi/l7gipx8SEocY1YzO4WbOIrMIKPwMoRWDlfk6zvrw7aEizTolgsJi/azudveTpHfAhgYPX2X8h7asYtWjkCK5cQj+zJzpvya/1bXikLdk5ltSKlpRXxw3NgseSBk3nt5GSdYOfE4zHfgblFK0dg5QisHIGVI7ByBFaOwMoRWDkCK0dg5QisHIGVI7ByBFaOwMoRWDkCK0dg5QisHIGVI7ByBFaOwMoRWDkCK0dg5QisHIGVI7By3p8u3GVf5uIyOtYqs1/rJH20LEN9i9La5O/FAk9eNsv4h33O51hyo3dJutKrolWgA5u4gyMpmZ1be0w19znhHnt4+5vUanSsRZ69aVr/OztS73zevNrIgb5FT80k1+P+ls3VO5Frfy45M9G46dj4ZINoFejAheWt3zeyWPT17phICXTg7uMl6ThUqTp25kTJHYtrdbWnuOnYtXNF0SrQY7CZTJnx9nGmWXKfEtJ9siT9Pf5iDDiTKvPyqLeTfyZZhzd8iTTxfK+zs528G2uXWBVLCvnqLzTvyUKVwK+Dt8NMuszMOjeTkJZG2731mnHa73pZg1AHzkw0SOZdg7t02ooZW836dqC34PxuSRSFcgzOTiXl/tM2d43clV6RU8dWJX2kLB3ta5Mlc0XnnDX0+1zS3bEyLp3+EbrQ/2MMDl1gc8UOO3HN1Xn3+sI/d6DMrdvMws155pxHzq5VWCJHLrDZprx8p929Ws32opcx1oQeHDkgi8vOVufQvK+19G6J3CzaTKCG+gqe4xrm6jVr6tZGSwZHU+6XJQpC9V+aqP1nizXPjv+OvNWetEaR3Ogwk7AwLKHY6KhRlNbH7GQpR2DlCKwcgZUjsHIEVo7AyhFYOQIrR2DlCKxcLYGnBdth+/2xytaGY/ZHAQAAAAAAAAAAAAAAAAAAAABAk5+xpSCsGoDLoQAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      </td>
    </tr>
  );
}
export function HcTableContainer(props?: any) {
  const { children, style } = props;
  return <TableContainer style={style}>{children}</TableContainer>;
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
      <IconWrapper>
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
      </IconWrapper>
      <IconWrapper>
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
      </IconWrapper>
    </>
  );
}
