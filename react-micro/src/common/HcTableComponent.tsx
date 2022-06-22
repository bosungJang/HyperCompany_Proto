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

const StyledTable = styled.table<{ checked?: boolean }>`
  text-align: left;
  table-layout: fixed;
  border-collapse: collapse;
  td {
    cursor: pointer;
    border-bottom: 1px solid #e0e0e0;
    height: 46px;
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
    background-color: #fffff;
  }
  tr:nth-child(even) {
    background-color: #f1f4f9;
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
const Btn = styled.div`
  border-radius: 2px;
  width: 68px;
  height: 28px;
  line-height: 28;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #EDEDED;
  }
  display: flex;
  padding-right:5px
  &:active {
    background: #CECECE;
  }
`;
export function TableSetting(props?: any) {
  return (
    <div style={Object.assign({ display: "flex", width: 142 }, props.style)}>
      <Btn style={{ marginRight: 6 }} onClick={props.filter}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1938 5.83301H6.80363C6.39694 5.83301 6.16038 6.29269 6.39676 6.62363L11.5722 13.8693C11.6328 13.9541 11.6654 14.0557 11.6654 14.1599V20.1073C11.6654 20.2967 11.7724 20.4698 11.9418 20.5545L15.6084 22.3879C15.9409 22.5541 16.332 22.3123 16.332 21.9407V14.1599C16.332 14.0557 16.3646 13.9541 16.4252 13.8693L21.6006 6.62363C21.837 6.29269 21.6005 5.83301 21.1938 5.83301Z"
            stroke="#5D5D62"
            stroke-width="1.5"
          ></path>
        </svg>
        <svg
          width="26"
          height="15"
          viewBox="0 0 26 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3573 0.595H9.79734V7.6H11.3573V0.595ZM3.46734 2.695H5.32734V5.875C4.71234 5.905 4.06734 5.92 3.46734 5.935V2.695ZM8.62734 5.605C8.04234 5.68 7.44234 5.74 6.82734 5.785V2.695H8.02734V1.465H0.752344V2.695H1.98234V5.965C1.42734 5.98 0.887344 5.98 0.392344 5.98L0.557344 7.24C2.91234 7.225 6.01734 7.15 8.70234 6.715L8.62734 5.605ZM3.94734 12.82V11.635H11.3573V8.215H2.38734V9.415H9.82734V10.51H2.40234V14.035H11.8073V12.82H3.94734ZM16.1112 6.82H20.2962V5.59H16.1112V3.055H20.8512V1.78H14.5662V11.005H15.6312C18.0912 11.005 19.7862 10.945 21.7212 10.6L21.5862 9.355C19.8162 9.655 18.2712 9.73 16.1112 9.745V6.82ZM23.6562 0.579999V5.56H21.0612V6.835H23.6562V14.17H25.2162V0.579999H23.6562Z"
            fill="#5B5B5B"
          />
        </svg>
      </Btn>
      <Btn onClick={props.setting}>
        {" "}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9668 23.3327H13.0278C12.5221 23.3327 12.0955 22.9705 12.0131 22.4719L11.6875 20.4973C11.467 20.4182 11.2495 20.328 11.0367 20.2266L9.40913 21.3929C9.00987 21.6789 8.43037 21.6306 8.08338 21.285L6.71221 19.9138C6.35423 19.5552 6.30901 18.9974 6.60415 18.5867L7.7704 16.9606C7.66898 16.7471 7.57855 16.5295 7.49974 16.3086L5.52563 15.9834C5.02599 15.9004 4.66406 15.473 4.66406 14.9687V13.0304C4.66406 12.5237 5.0264 12.0966 5.52563 12.0149L7.49953 11.6896C7.57814 11.4696 7.66857 11.252 7.76978 11.039L6.60332 9.41197C6.30943 9.00024 6.35485 8.44249 6.71159 8.08532L8.08234 6.71469C8.42913 6.36747 9.01008 6.31935 9.40934 6.606L11.036 7.77232C11.249 7.67089 11.467 7.58067 11.6873 7.50205L12.0127 5.5268C12.0948 5.02817 12.5215 4.66602 13.0274 4.66602H14.966C15.4716 4.66602 15.8981 5.02817 15.9808 5.5268L16.306 7.50205C16.5267 7.58067 16.7439 7.67089 16.9575 7.77232L18.5844 6.606C18.9843 6.31935 19.5652 6.36747 19.9118 6.71511L21.2818 8.0849C21.6391 8.44187 21.6847 8.99962 21.3902 9.41114L20.2231 11.0392C20.3252 11.253 20.4156 11.4706 20.4938 11.6898L22.4685 12.0155C22.9678 12.0966 23.3307 12.523 23.3307 13.0296V14.9679C23.3307 15.475 22.9673 15.9017 22.4683 15.9828L20.4942 16.3089C20.416 16.5285 20.3258 16.7463 20.2236 16.9599L21.3911 18.5869C21.686 18.9985 21.6397 19.556 21.2826 19.9136L19.9118 21.2836C19.7177 21.4781 19.4588 21.5854 19.1834 21.5854C18.9679 21.5854 18.7609 21.519 18.585 21.3933L16.9573 20.2262C16.7443 20.3278 16.5271 20.4182 16.3071 20.4968L15.981 22.4717C15.8989 22.9705 15.4723 23.3327 14.9668 23.3327ZM10.9929 19.1899C11.0696 19.1899 11.1468 19.2077 11.2173 19.2455C11.5502 19.4218 11.8988 19.5668 12.2543 19.6757C12.4282 19.7296 12.5565 19.8767 12.5862 20.0557L12.9589 22.3157C12.9645 22.3497 12.9933 22.3744 13.028 22.3744H14.967C15.001 22.3744 15.0307 22.3501 15.0359 22.3161L15.4094 20.0557C15.4387 19.8767 15.5675 19.7296 15.7409 19.6757C16.0941 19.5672 16.4433 19.422 16.7779 19.2451C16.9378 19.1592 17.1328 19.1733 17.2811 19.2791L19.1436 20.6147C19.1975 20.6273 19.217 20.624 19.234 20.6066L20.6056 19.2362C20.6295 19.2119 20.6324 19.1729 20.6129 19.1447L19.277 17.2835C19.1708 17.1352 19.1575 16.9404 19.2429 16.7799C19.4207 16.4437 19.5659 16.0948 19.6735 15.7428C19.7266 15.5686 19.8732 15.4402 20.0531 15.4105L22.3134 15.0374C22.3482 15.0318 22.3729 15.0025 22.3729 14.9677V13.0294C22.3729 12.9945 22.3478 12.9657 22.3138 12.9605L20.0535 12.5878C19.8737 12.5581 19.7266 12.4295 19.6735 12.2555C19.5657 11.9041 19.4211 11.555 19.2429 11.2188C19.1575 11.0585 19.1708 10.8631 19.2765 10.7154L20.612 8.85256C20.6319 8.82497 20.629 8.78556 20.6052 8.76192L19.2344 7.3915C19.217 7.37428 19.1983 7.37097 19.1851 7.37097L17.2811 8.71919C17.1324 8.82476 16.9376 8.83804 16.7771 8.75279C16.4438 8.57586 16.0953 8.4315 15.7413 8.32323C15.5671 8.27054 15.4378 8.12307 15.4086 7.94303L15.0359 5.68216C15.0307 5.64835 15.001 5.62367 14.9666 5.62367H13.028C12.9933 5.62367 12.9645 5.64835 12.9589 5.68258L12.5862 7.94365C12.5565 8.12327 12.4275 8.27075 12.2535 8.32343C11.8993 8.43212 11.5508 8.57607 11.2177 8.753C11.057 8.83825 10.8618 8.82497 10.7141 8.7194L8.85141 7.38403C8.79686 7.36951 8.77778 7.37387 8.76077 7.3915L7.39002 8.76192C7.36554 8.78618 7.36264 8.82497 7.38297 8.85401L8.71784 10.7156C8.82341 10.8633 8.83689 11.0587 8.75185 11.219C8.57514 11.5519 8.43079 11.9008 8.32169 12.2561C8.26818 12.4297 8.12092 12.5583 7.94151 12.588L5.68119 12.9603C5.64676 12.9659 5.62228 12.9953 5.62228 13.0304V14.9687C5.62228 15.0032 5.64759 15.0332 5.68243 15.0388L7.94131 15.4107C8.12071 15.4404 8.26818 15.5688 8.32148 15.743C8.43037 16.0979 8.57494 16.4472 8.75165 16.7797C8.83689 16.94 8.82383 17.1354 8.71763 17.2837L7.38234 19.1461C7.36223 19.1737 7.36575 19.2129 7.38981 19.237L8.76057 20.6078C8.7782 20.6252 8.79935 20.6277 8.81034 20.6277L10.7139 19.2799C10.7967 19.22 10.8946 19.1899 10.9929 19.1899ZM13.997 17.3739C12.1359 17.3739 10.6223 15.8596 10.6223 13.999C10.6223 12.1383 12.1359 10.6243 13.997 10.6243C15.858 10.6243 17.3719 12.1383 17.3719 13.999C17.3719 15.8596 15.858 17.3739 13.997 17.3739ZM13.997 11.5824C12.6644 11.5824 11.5803 12.6666 11.5803 13.9988C11.5803 15.3311 12.6646 16.4157 13.997 16.4157C15.3298 16.4157 16.4139 15.3311 16.4139 13.9988C16.4137 12.6666 15.3298 11.5824 13.997 11.5824Z"
            fill="#5D5D62"
            stroke="#5D5D62"
            stroke-width="0.5"
          />
        </svg>
        <svg
          width="26"
          height="15"
          viewBox="0 0 26 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.44 7.555H11.985V0.595H10.44V2.86H7.695V4.105H10.44V7.555ZM8.76 6.13C6.735 5.47 5.565 3.88 5.565 2.17V1.03H4.02V2.17C4.02 4.03 2.835 5.725 0.72 6.415L1.515 7.63C3.105 7.075 4.23 5.98 4.83 4.57C5.4 5.83 6.48 6.835 7.95 7.33L8.76 6.13ZM4.725 12.775V11.62H11.985V8.2H3.165V9.4H10.455V10.48H3.195V13.99H12.45V12.775H4.725ZM21.8388 4.015V5.275H24.2388V8.68H25.7838V0.609999H24.2388V4.015H21.8388ZM22.6188 7.03C20.5938 6.325 19.4388 4.645 19.4388 2.95V2.77H22.2588V1.525H15.0138V2.77H17.8788V2.965C17.8788 4.825 16.6638 6.625 14.5638 7.375L15.3588 8.605C16.9638 8.035 18.1038 6.835 18.7038 5.35C19.2738 6.655 20.3538 7.72 21.8538 8.245L22.6188 7.03ZM21.2838 12.97C19.3488 12.97 18.2538 12.49 18.2538 11.605C18.2538 10.72 19.3488 10.24 21.2838 10.24C23.1888 10.24 24.2988 10.72 24.2988 11.605C24.2988 12.49 23.1888 12.97 21.2838 12.97ZM21.2838 9.04C18.4488 9.04 16.7088 10 16.7088 11.605C16.7088 13.225 18.4488 14.17 21.2838 14.17C24.1038 14.17 25.8438 13.225 25.8438 11.605C25.8438 10 24.1038 9.04 21.2838 9.04Z"
            fill="#5B5B5B"
          />
        </svg>
      </Btn>
    </div>
  );
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
  return (
    <>
      <TableContainer style={style}>{children}</TableContainer>
    </>
  );
}

export function TableActionBtn() {
  return (
    <>
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
