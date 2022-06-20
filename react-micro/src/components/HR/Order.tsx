import { RouteComponentProps, useHistory } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { TableSelect, TableActionBtn, HcTable } from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import HcTabs from "common/HcTabs";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import { HcTitleTextField, SubHeading } from "common/HcTextField";
import HcButton from "common/HcButton";
import HcSlider from "./HcSlider";
interface MatchParams {
  id: string;
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg<{ disabled?: boolean }>`
  fill: none;
  stroke: ${(props) => (props.disabled ? "#C4C4C4" : "#257cff")};
  stroke-width: 3px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const ContentContainer = styled.div`
  background: #ffffff;
  height: 401px;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 20px 24px 30px 24px;
`;

const SubContent = styled.div`
  width: 400px;
  height: 21px;
  margin-top: 18px;
  margin-bottom: 40px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  color: #717171;
`;
const SliderContainer = styled.div`
  height: 220px;
  width: 1110px;
`;

const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.disabled ? "#EDEDED" : "#ffffff")};
  border-radius: 2px;
  border: ${(props) =>
    props.disabled
      ? "1.5px solid #CECECE"
      : props.checked
      ? "1.5px solid #257CFF"
      : " 1.5px solid #a7a7a7;"};
  transition: all 150ms;

  ${HiddenCheckbox}:hover + & {
    ${(props) => (props.disabled ? null : "box-shadow: 0 0 0 1px #257cff")};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
  disabled?: boolean;
}

const Checkbox: React.FC<IProps> = ({
  className,
  checked,
  labelWrap = true,
  ...props
}) => {
  const content = (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} disabled={props.disabled}>
        <Icon viewBox="0 5 24 24" disabled={props.disabled}>
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return labelWrap ? <label>{content}</label> : <>{content}</>;
};

const styles = {
  checkbox: {
    background: "#ffffff",
    border: " 1.5px solid #a7a7a7",
    borderRadius: "1px",
    width: 14,
    height: 14,
  } as React.CSSProperties,
};

const PageButton = styled.button`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  background: white;
  border: none;
  &:hover {
    background-color: lightblue;
    border-radius: 55px;
  }
`;
const TableContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
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

const Order = ({ match }: RouteComponentProps<MatchParams>) => {
  const [tab, setTab] = React.useState(false);
  let num = 100000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const history = useHistory();

  function checkHandler(checked: Boolean, id: Number) {
    if (checked == true) {
      setCheckedItem([...checkedItem, id]);
    } else {
      setCheckedItem(checkedItem.filter((i: number) => i != id));
    }
  }
  function checkAllHandler(checked: Boolean) {
    if (checked) {
      const ids: Number[] = [];
      data.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  const columns = [
    <div style={{ paddingTop: 7 }}>
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "발령 번호",
    "발령 내용",
    "발령 인원",
    "발령 일시",
    "시행 일시",
    "액션 버튼",
  ];

  const data = Array(107)
    .fill(undefined)
    .map(() => ({
      id: getId(),
      content: "Tmax Enterprise 인사 이동",
      hc: Math.floor(Math.random() * 4) + 1,
      start: "2022.1.10",
      end: "2022.1.29",
      action: <TableActionBtn />,
    }));

  const [page, setPage] = useState(1);
  const rowsPerPage = 15;

  const pageclick = (num: number) => (event: any) => {
    setPage(num);
  };

  const firstPageClick = () => {
    setPage(1);
  };
  const lastPageClick = () => {
    setPage(totalPage);
  };
  const nextPageClick = () => {
    if (page + 1 <= totalPage) setPage(page + 1);
  };
  const prevPageClick = () => {
    if (page - 1 > 0) setPage(page - 1);
  };
  const range = []; //페이지 배열
  const totalPage = Math.ceil(data.length / rowsPerPage); //전체 페이지 수
  const remainder = Math.ceil(page / 5) - 1;

  if (totalPage <= 1) {
    range.push(1);
  } else if (totalPage < 5) {
    range.push(page);
  } else {
    for (let i = 1; i <= 5; i++) {
      if (i + 5 * remainder > totalPage) continue;

      range.push(i + 5 * remainder);
    }
  }

  return (
    <ComponentWrapper>
      <div
        style={{
          width: 1320,
        }}
      >
        <HcTitleTextField titleName="발령 관리" isBackIcon={false} />
        <HcButton
          size="medium"
          styles="line"
          style={{ position: "absolute", right: 400 }}
          onClick={() => {
            setTab(!tab);
          }}
        >
          {tab === true ? "발령 현황" : "발령 분석"}
        </HcButton>
        <div style={{ marginTop: 39 }}>
          <HcTabs
            items={[
              { to: "1", name: "발령 현황" },
              { to: "2", name: "발령 분석" },
            ]}
            size="normal"
          />
        </div>
        <div
          className="Order status"
          style={{ display: tab == false ? "" : "none" }}
        >
          {" "}
          <button
            className="table_buttons_create"
            style={{
              marginRight: 10,
              display: checkedItem.length == 0 ? "inline" : "none",
            }}
            onClick={() => {
              history.push({
                pathname: "/hr/pas/OrderCreate",
              });
            }}
          >
            +생성
          </button>
          <button
            className="table_buttons"
            style={{
              marginRight: 10,
              display: checkedItem.length == 1 ? "inline" : "none",
            }}
            onClick={() => {
              const sendData: any = data.find((e) => e.id == checkedItem[0]);
              console.log(sendData);
              history.push({
                pathname: "/hr/pas/OrderDetail",
                state: {
                  id: sendData.id,
                  content: sendData.content,
                  hc: sendData.hc,
                  start: sendData.start,
                  end: sendData.end,
                  edit: true,
                },
              });
            }}
          >
            수정
          </button>
          <button
            className="table_buttons"
            style={{ display: checkedItem.length > 0 ? "inline" : "none" }}
          >
            삭제
          </button>
          <button className="table_manage">
            <svg
              width="53"
              height="21"
              viewBox="0 0 53 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.744 10.918H36.186V4.422H34.744V6.536H32.182V7.698H34.744V10.918ZM33.176 9.588C31.286 8.972 30.194 7.488 30.194 5.892V4.828H28.752V5.892C28.752 7.628 27.646 9.21 25.672 9.854L26.414 10.988C27.898 10.47 28.948 9.448 29.508 8.132C30.04 9.308 31.048 10.246 32.42 10.708L33.176 9.588ZM29.41 15.79V14.712H36.186V11.52H27.954V12.64H34.758V13.648H27.982V16.924H36.62V15.79H29.41ZM45.3829 7.614V8.79H47.6229V11.968H49.0649V4.436H47.6229V7.614H45.3829ZM46.1109 10.428C44.2209 9.77 43.1429 8.202 43.1429 6.62V6.452H45.7749V5.29H39.0129V6.452H41.6869V6.634C41.6869 8.37 40.5529 10.05 38.5929 10.75L39.3349 11.898C40.8329 11.366 41.8969 10.246 42.4569 8.86C42.9889 10.078 43.9969 11.072 45.3969 11.562L46.1109 10.428ZM44.8649 15.972C43.0589 15.972 42.0369 15.524 42.0369 14.698C42.0369 13.872 43.0589 13.424 44.8649 13.424C46.6429 13.424 47.6789 13.872 47.6789 14.698C47.6789 15.524 46.6429 15.972 44.8649 15.972ZM44.8649 12.304C42.2189 12.304 40.5949 13.2 40.5949 14.698C40.5949 16.21 42.2189 17.092 44.8649 17.092C47.4969 17.092 49.1209 16.21 49.1209 14.698C49.1209 13.2 47.4969 12.304 44.8649 12.304Z"
                fill="#5B5B5B"
              />
              <path
                d="M10.8309 19H9.16889C8.73547 19 8.36978 18.6896 8.2992 18.2622L8.02009 16.5696C7.83111 16.5019 7.64462 16.4246 7.46222 16.3376L6.0672 17.3373C5.72498 17.5825 5.22827 17.5411 4.93084 17.2449L3.75556 16.0695C3.44871 15.7621 3.40996 15.2841 3.66293 14.932L4.66258 13.5382C4.57564 13.3552 4.49813 13.1687 4.43058 12.9794L2.73849 12.7006C2.31022 12.6295 2 12.2631 2 11.8309V10.1695C2 9.73513 2.31058 9.36906 2.73849 9.29902L4.4304 9.02025C4.49778 8.83161 4.57529 8.64511 4.66204 8.46253L3.66222 7.06796C3.41031 6.71505 3.44924 6.23698 3.75502 5.93083L4.92996 4.75601C5.2272 4.45839 5.72516 4.41715 6.06738 4.66285L7.46169 5.66255C7.64427 5.57561 7.83111 5.49827 8.01991 5.43089L8.29884 3.73782C8.36924 3.31042 8.73493 3 9.16853 3H10.8302C11.2636 3 11.6292 3.31042 11.7001 3.73782L11.9788 5.43089C12.168 5.49827 12.3541 5.57561 12.5372 5.66255L13.9317 4.66285C14.2745 4.41715 14.7724 4.45839 15.0695 4.75636L16.2437 5.93047C16.55 6.23645 16.5892 6.71452 16.3367 7.06725L15.3364 8.4627C15.4238 8.646 15.5013 8.8325 15.5684 9.02042L17.261 9.29955C17.6889 9.36907 18 9.7346 18 10.1688V11.8302C18 12.2649 17.6885 12.6306 17.2608 12.7001L15.5687 12.9796C15.5017 13.1679 15.4244 13.3545 15.3367 13.5377L16.3374 14.9322C16.5902 15.2849 16.5506 15.7628 16.2444 16.0693L15.0695 17.2436C14.9031 17.4104 14.6812 17.5023 14.4452 17.5023C14.2604 17.5023 14.083 17.4454 13.9323 17.3377L12.5371 16.3373C12.3545 16.4244 12.1684 16.5019 11.9797 16.5693L11.7003 18.262C11.6299 18.6896 11.2642 19 10.8309 19ZM7.42471 15.449C7.49049 15.449 7.55662 15.4643 7.61707 15.4967C7.9024 15.6478 8.20124 15.7721 8.50596 15.8654C8.65493 15.9116 8.76498 16.0377 8.7904 16.1911L9.10987 18.1283C9.11467 18.1575 9.13938 18.1786 9.16907 18.1786H10.8311C10.8603 18.1786 10.8857 18.1578 10.8901 18.1287L11.2103 16.1911C11.2354 16.0377 11.3458 15.9116 11.4944 15.8654C11.7972 15.7724 12.0965 15.648 12.3833 15.4963C12.5204 15.4227 12.6875 15.4348 12.8146 15.5255L14.411 16.6703C14.4572 16.6811 14.474 16.6783 14.4885 16.6633L15.6642 15.4887C15.6846 15.4679 15.6871 15.4345 15.6704 15.4103L14.5253 13.815C14.4343 13.6879 14.4229 13.5209 14.4962 13.3833C14.6485 13.0951 14.773 12.7961 14.8652 12.4944C14.9108 12.3451 15.0364 12.235 15.1906 12.2096L17.128 11.8897C17.1579 11.8849 17.179 11.8599 17.179 11.83V10.1686C17.179 10.1387 17.1575 10.114 17.1284 10.1096L15.1909 9.79007C15.0368 9.76464 14.9108 9.65441 14.8652 9.50525C14.7728 9.20408 14.6489 8.90486 14.4962 8.61667C14.4229 8.47924 14.4343 8.31176 14.525 8.18518L15.6697 6.58847C15.6868 6.56482 15.6843 6.53104 15.6638 6.51077L14.4889 5.33613C14.474 5.32137 14.458 5.31853 14.4466 5.31853L12.8146 6.47415C12.6871 6.56464 12.5202 6.57602 12.3826 6.50295C12.0969 6.3513 11.7982 6.22756 11.4948 6.13475C11.3454 6.08959 11.2347 5.96319 11.2096 5.80887L10.8901 3.87098C10.8857 3.842 10.8603 3.82085 10.8308 3.82085H9.16907C9.13938 3.82085 9.11467 3.842 9.10987 3.87134L8.7904 5.8094C8.76498 5.96336 8.6544 6.08977 8.50524 6.13493C8.2016 6.22809 7.90293 6.35148 7.61742 6.50313C7.47964 6.5762 7.31236 6.56482 7.18578 6.47433L5.58916 5.32973C5.5424 5.31728 5.52604 5.32102 5.51147 5.33613L4.33653 6.51077C4.31556 6.53157 4.31307 6.56482 4.33049 6.58971L5.47467 8.18535C5.56516 8.31194 5.57671 8.47942 5.50382 8.61685C5.35236 8.90219 5.22862 9.20123 5.13511 9.50578C5.08924 9.65459 4.96302 9.76482 4.80924 9.79024L2.87182 10.1094C2.84231 10.1142 2.82133 10.1394 2.82133 10.1695V11.8309C2.82133 11.8604 2.84302 11.8862 2.87289 11.891L4.80907 12.2098C4.96284 12.2352 5.08924 12.3452 5.13493 12.4946C5.22827 12.7988 5.35218 13.0982 5.50364 13.3832C5.57671 13.5206 5.56551 13.6881 5.47449 13.8152L4.32996 15.4115C4.31271 15.4352 4.31573 15.4688 4.33636 15.4894L5.51129 16.6644C5.5264 16.6793 5.54453 16.6815 5.55396 16.6815L7.1856 15.5262C7.25653 15.4748 7.34044 15.449 7.42471 15.449ZM9.99964 13.8925C8.40444 13.8925 7.10702 12.5945 7.10702 10.9997C7.10702 9.4048 8.40444 8.10713 9.99964 8.10713C11.5948 8.10713 12.8924 9.4048 12.8924 10.9997C12.8924 12.5945 11.5948 13.8925 9.99964 13.8925ZM9.99964 8.92833C8.85742 8.92833 7.92818 9.85763 7.92818 10.9996C7.92818 12.1415 8.8576 13.0711 9.99964 13.0711C11.142 13.0711 12.0713 12.1415 12.0713 10.9996C12.0711 9.85763 11.142 8.92833 9.99964 8.92833Z"
                fill="#5B5B5B"
                stroke="#5B5B5B"
                stroke-width="0.5"
              />
            </svg>
          </button>
          <button className="table_manage">
            <svg
              width="84"
              height="21"
              viewBox="0 0 84 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.716 5.892H29.274V13.886H30.114C31.43 13.886 32.886 13.816 34.58 13.508L34.426 12.276C33.054 12.528 31.836 12.626 30.716 12.654V5.892ZM38.094 4.436V9.462H36.596V4.688H35.238V16.448H36.596V10.652H38.094V17.078H39.466V4.436H38.094ZM44.3089 8.566H50.3009V10.638H44.3089V8.566ZM48.0189 14.348V11.8H51.7289V5.276H50.3009V7.404H44.3089V5.276H42.8809V11.8H46.5769V14.348H41.5929V15.538H53.0449V14.348H48.0189ZM56.4738 5.892H55.0318V13.886H55.8718C57.1878 13.886 58.6438 13.816 60.3378 13.508L60.1838 12.276C58.8118 12.528 57.5938 12.626 56.4738 12.654V5.892ZM63.8518 4.436V9.462H62.3538V4.688H60.9958V16.448H62.3538V10.652H63.8518V17.078H65.2238V4.436H63.8518ZM68.0647 5.766V6.942H72.5727C72.3207 9.854 70.7527 12.08 67.4347 13.676L68.2047 14.824C72.5447 12.724 74.0567 9.532 74.0567 5.766H68.0647ZM76.3387 4.436V17.078H77.7807V4.436H76.3387Z"
                fill="#5B5B5B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.1207 3C12.1853 3 11.7168 4.131 12.3782 4.79246L13.8363 6.2505L9.94713 10.4932C9.66724 10.7985 9.68787 11.273 9.99321 11.5529C10.2985 11.8328 10.773 11.8121 11.0529 11.5068L14.8979 7.31216L16.2075 8.62175C16.869 9.28321 18 8.81474 18 7.87929V4.05C18 3.4701 17.5299 3 16.95 3H13.1207ZM2.25 5C2.25 4.0335 3.0335 3.25 4 3.25H9C9.41421 3.25 9.75 3.58579 9.75 4C9.75 4.41421 9.41421 4.75 9 4.75H4C3.86193 4.75 3.75 4.86193 3.75 5V17C3.75 17.1381 3.86193 17.25 4 17.25H16C16.1381 17.25 16.25 17.1381 16.25 17V12C16.25 11.5858 16.5858 11.25 17 11.25C17.4142 11.25 17.75 11.5858 17.75 12V17C17.75 17.9665 16.9665 18.75 16 18.75H4C3.0335 18.75 2.25 17.9665 2.25 17V5Z"
                fill="#5B5B5B"
              />
            </svg>
          </button>
          <button className="table_manage">
            <svg
              width="82"
              height="21"
              viewBox="0 0 82 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 2.25C3.0335 2.25 2.25 3.0335 2.25 4V16.0018C2.25 16.9683 3.0335 17.7518 4 17.7518H12.1739C12.5881 17.7518 12.9239 17.416 12.9239 17.0018C12.9239 16.5876 12.5881 16.2518 12.1739 16.2518H4C3.86193 16.2518 3.75 16.1399 3.75 16.0018V4C3.75 3.86193 3.86193 3.75 4 3.75H14C14.1381 3.75 14.25 3.86193 14.25 4V4.80036C14.25 5.21458 14.5858 5.55036 15 5.55036C15.4142 5.55036 15.75 5.21458 15.75 4.80036V4C15.75 3.0335 14.9665 2.25 14 2.25H4ZM6.75 5.79939C6.33579 5.79939 6 6.13518 6 6.54939C6 6.9636 6.33579 7.29939 6.75 7.29939H12.25C12.6642 7.29939 13 6.9636 13 6.54939C13 6.13518 12.6642 5.79939 12.25 5.79939H6.75ZM6 9.34981C6 8.9356 6.33579 8.59981 6.75 8.59981H12.25C12.6642 8.59981 13 8.9356 13 9.34981C13 9.76403 12.6642 10.0998 12.25 10.0998H6.75C6.33579 10.0998 6 9.76403 6 9.34981ZM16.0414 7.7887L15 10.1863V17.9343H18V10.1863L16.9586 7.7887C16.7844 7.38763 16.2156 7.38763 16.0414 7.7887Z"
                fill="#5B5B5B"
              />
              <path
                d="M37.13 4.422H35.688V10.848H37.13V4.422ZM28.352 7.698C28.352 6.69 29.164 6.032 30.256 6.032C31.362 6.032 32.188 6.69 32.188 7.698C32.188 8.706 31.362 9.364 30.256 9.364C29.164 9.364 28.352 8.706 28.352 7.698ZM33.588 7.698C33.588 6.032 32.174 4.842 30.256 4.842C28.352 4.842 26.952 6.032 26.952 7.698C26.952 9.364 28.352 10.54 30.256 10.54C32.174 10.54 33.588 9.364 33.588 7.698ZM30.284 15.79V14.67H37.13V11.422H28.842V12.556H35.702V13.606H28.87V16.924H37.508V15.79H30.284ZM46.2709 8.93C46.5649 7.544 46.5649 6.452 46.5649 5.724V5.052H40.2229V6.2H45.1509C45.1369 6.858 45.0949 7.684 44.8709 8.776L46.2709 8.93ZM47.3209 9.448C46.0609 9.616 44.7029 9.686 43.3869 9.742V7.614H41.9729V9.784C41.0909 9.798 40.2369 9.798 39.4669 9.798L39.6069 10.946C41.8609 10.946 44.7869 10.89 47.4189 10.456L47.3209 9.448ZM42.5609 14.782H49.5469V11.716H41.0909V12.794H48.1049V13.76H41.1189V16.966H49.9949V15.874H42.5609V14.782ZM49.5469 7.292V4.436H48.0909V11.212H49.5469V8.482H51.2269V7.292H49.5469ZM65.7383 8.132H58.4723V6.032H65.6543V4.87H57.0443V9.294H65.7383V8.132ZM61.3003 15.958C59.4523 15.958 58.4163 15.552 58.4163 14.768C58.4163 13.998 59.4523 13.578 61.3003 13.578C63.1483 13.578 64.1983 13.998 64.1983 14.768C64.1983 15.552 63.1483 15.958 61.3003 15.958ZM61.3003 12.472C58.5983 12.472 56.9463 13.312 56.9463 14.768C56.9463 16.238 58.5983 17.078 61.3003 17.078C64.0163 17.078 65.6543 16.238 65.6543 14.768C65.6543 13.312 64.0163 12.472 61.3003 12.472ZM55.6303 10.344V11.534H67.0543V10.344H55.6303ZM69.7693 14.488H77.1333V17.008H78.5753V13.326H69.7693V14.488ZM74.9353 11.31V10.162H78.7573V9.056H71.3653V7.936H78.5053V4.73H69.9233V5.836H77.0773V6.9H69.9513V10.162H73.4933V11.31H68.4813V12.472H79.9473V11.31H74.9353Z"
                fill="#5B5B5B"
              />
            </svg>
          </button>
          <TableContainer>
            <HcTable style={{ width: "1320px" }}>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  {/* {columns.map((column: any) => (
                    <th key={column}>{column}</th>
                  ))} */}
                  <th style={{ width: 46, marginLeft: 4 }}>
                    <div style={{ paddingTop: 7 }}>
                      <HcCheckBox
                        checked={checkedItem.length > 0 ? true : false}
                        onChange={(e) => checkAllHandler(e.target.checked)}
                      />
                    </div>
                  </th>
                  <th style={{ width: 178 }}>발령 번호</th>
                  <th style={{ width: 336 }}>발령 내용</th>
                  <th style={{ width: 160 }}>발령 구분</th>
                  <th style={{ width: 160 }}>발령 인원</th>
                  <th style={{ width: 160 }}>발령 일시</th>
                  <th style={{ width: 160 }}>시행 일시</th>
                  <th style={{ width: 120 }}>액션 버튼</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .slice(rowsPerPage * (page - 1), page * rowsPerPage)
                  .map(({ id, content, hc, start, end, action }) => (
                    <tr
                      style={{
                        textAlign: "left",
                        backgroundColor: checkedItem.includes(id)
                          ? "#DFECFF"
                          : "",
                      }}
                      onClick={() => {
                        history.push({
                          pathname: "/hr/pas/OrderDetail",
                          state: {
                            id: id,
                            content: content,
                            hc: hc,
                            start: start,
                            end: end,
                            edit: false,
                          },
                        });
                      }}
                    >
                      <td
                        style={{ marginLeft: 4 }}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Checkbox
                          checked={checkedItem.includes(id)}
                          onChange={(e) => {
                            checkHandler(e.target.checked, id);
                          }}
                        />
                      </td>
                      <td>{id}</td>
                      <td>{content}</td>
                      <td>입사</td>
                      <td>{hc}</td>
                      <td>{start}</td>
                      <td>{end}</td>
                      <td>{action}</td>
                    </tr>
                  ))}
              </tbody>
            </HcTable>
          </TableContainer>
          <div>
            {/* pagination start */}
            <ul>
              <li style={{ float: "left" }}>
                <PageButton className="pageButtons" onClick={firstPageClick}>
                  first
                </PageButton>
              </li>
              <li style={{ float: "left" }}>
                <PageButton className="pageButtons" onClick={prevPageClick}>
                  prev
                </PageButton>
              </li>
              {range.map((item) => (
                <li style={{ float: "left" }}>
                  <PageButton
                    className="pageButtons"
                    onClick={pageclick(item)}
                    style={
                      item == page
                        ? { backgroundColor: "lightGray", borderRadius: 55 }
                        : {}
                    }
                  >
                    {item}
                  </PageButton>
                </li>
              ))}
              <li style={{ float: "left" }}>
                <PageButton className="pageButtons" onClick={nextPageClick}>
                  next
                </PageButton>
              </li>
              <li style={{ float: "left" }}>
                <PageButton className="pageButtons" onClick={lastPageClick}>
                  last
                </PageButton>
              </li>
            </ul>
            now {page}
          </div>{" "}
          {/* pagination end */}
        </div>
        {/*발령 현황 끝*/}
        <div style={{ display: tab == true ? "" : "none" }}>
          {/*발령 분석*/}
          <ContentContainer style={{ height: 401, marginTop: 24 }}>
            <SubHeading titleName="직책 후보자 추천" />
            <SubContent>
              직책별 후보자를 업무 성취도가 높은 구성원으로 추천합니다.
            </SubContent>
            <div style={{ marginTop: 40 }}>
              <HcSlider size="medium" />
            </div>
          </ContentContainer>
          <ContentContainer style={{ height: 788, marginTop: 23 }}>
            <SubHeading titleName="적합 부서 추천" />
            <SubContent>
              구성원의 역량을 기반으로 적합한 부서를 추천합니다.
            </SubContent>
            <div style={{ marginTop: 40 }}>
              <HcSlider size="large" />
            </div>
          </ContentContainer>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Order;
