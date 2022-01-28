import { RouteComponentProps } from "react-router-dom";
import React, { useState } from "react";
import "common/Table.css";
import styled from "styled-components";
import { TableActionBtn } from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import HcTree from "common/HcTree";
import { HcTitleTextField } from "common/HcTextField";
import HcButton from "common/HcButton";
import { HRInfoDetail } from "pages";
import { Link, useHistory } from "react-router-dom";
import { checkServerIdentity } from "tls";

const TreeContainer = styled.div`
  height: 832px;
  width: 312px;
  margin-top: 39px;
  float: left;
`;

const TableContainer = styled.div`
  width: 989px;
  height: 700px;
  overflow-x: auto;
  overflow-y: auto;
  float: left;
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

  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
`;

const items = [
  {
    id: "1",
    title: "parent 1",
    items: [
      { id: "1-1", title: "child 1-1" },
      { id: "1-2", title: "child 1-2" },
    ],
  },
  {
    id: "2",
    title: "parent 2",
    items: [
      { id: "2-1", title: "child 2-1" },
      {
        id: "2-2",
        title: "child 2-2",
        items: [
          { id: "2-2-1", title: "child 1-2-1" },
          { id: "2-2-2", title: "child 1-2-2" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "parent 3",
    items: [
      { id: "3-1", title: "child 3-1" },
      { id: "3-2", title: "child 3-2" },
    ],
  },
  {
    id: "4",
    title: "parent 4",
    items: [
      { id: "4-1", title: "child 4-1" },
      { id: "4-2", title: "child 4-2" },
    ],
  },
  {
    id: "5",
    title: "parent 5",
    items: [
      { id: "5-1", title: "child 5-1" },
      {
        id: "5-2",
        title: "child 5-2",
        items: [
          { id: "5-2-1", title: "child 5-2-1" },
          { id: "5-2-2", title: "child 5-2-2" },
        ],
      },
    ],
  },
];

const HRManagement = () => {
  let num = 2020000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  const history = useHistory();
  const [checkedItem, setCheckedItem]: any = React.useState([]);

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
    "이름",
    "사원번호",
    "법인회사",
    "조직",
    "직책",
    "직위",
    "입사일",
    "회사전화",
  ];

  const testData = Array(15)
    .fill(undefined)
    .map(() => ({
      name: "홍길동",
      id: getId(),
      company: "티맥스에이엔씨",
      organization: "AB본부",
      responsibility: "사원",
      position: "연구원",
      telephone: "032-123-4567",
      entryDate: "2020.01.01",
    }));
  const [data, setData] = useState(testData);
  function onRemove(checked: any) {
    setData(data.filter((x) => checked.includes(x.id) == false));

    setCheckedItem([]);
  }

  return (
    <ComponentWrapper>
      <div style={{ display: "block" }}>
        <div className="title_area" style={{ marginTop: 20 }}>
          <HcTitleTextField titleName="인사 정보 관리" isBackIcon={false} />
        </div>
        <TreeContainer>
          <HcTree items={items} />
        </TreeContainer>
        <Link to={"/hr/hrInfoCreate"}>
          <HcButton
            onClick={() => {}}
            styles="secondary"
            style={{
              display: checkedItem.length >= 1 ? "none" : "",
              marginLeft: "19px",
              marginTop: "39px",
              marginBottom: "20px",
            }}
            size="medium"
          >
            +생성
          </HcButton>
        </Link>

        <HcButton
          onClick={() => {
            const sendData: any = data.find((e) => e.id == checkedItem[0]);
            history.push({
              pathname: "/hr/hrInfoDetail",

              state: {
                name: sendData.name,
                employeeNumber: sendData.id,
                organization: sendData.organization,
                entryDate: sendData.entryDate,
                position: sendData.position,
                responsibility: sendData.responsibility,
                telePhone: sendData.telephone,
                company: sendData.company,
              },
            });
          }}
          styles="line"
          style={{
            display: checkedItem.length == 1 ? "" : "none",
            marginLeft: "19px",
            marginTop: "39px",
            marginBottom: "20px",
          }}
          size="medium"
        >
          수정
        </HcButton>

        <HcButton
          onClick={() => {
            onRemove(checkedItem);
          }}
          styles="line"
          style={{
            display: checkedItem.length >= 1 ? "" : "none",
            marginLeft: checkedItem.length == 1 ? 10 : 19,
            marginTop: "39px",
            marginBottom: "20px",
          }}
          size="medium"
        >
          삭제
        </HcButton>
        <svg
          width="60"
          height="24"
          viewBox="0 0 60 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginLeft:
              checkedItem.length == 1
                ? checkedItem.length > 1
                  ? 785
                  : 708
                : 780,
            marginBottom: -10,
          }}
        >
          <path
            d="M41.158 5.422H39.702V11.96H41.158V5.422ZM33.794 7.382H35.53V10.35C34.956 10.378 34.354 10.392 33.794 10.406V7.382ZM38.61 10.098C38.064 10.168 37.504 10.224 36.93 10.266V7.382H38.05V6.234H31.26V7.382H32.408V10.434C31.89 10.448 31.386 10.448 30.924 10.448L31.078 11.624C33.276 11.61 36.174 11.54 38.68 11.134L38.61 10.098ZM34.242 16.832V15.726H41.158V12.534H32.786V13.654H39.73V14.676H32.8V17.966H41.578V16.832H34.242ZM45.5949 11.232H49.5009V10.084H45.5949V7.718H50.0189V6.528H44.1529V15.138H45.1469C47.4429 15.138 49.0249 15.082 50.8309 14.76L50.7049 13.598C49.0529 13.878 47.6109 13.948 45.5949 13.962V11.232ZM52.6369 5.408V10.056H50.2149V11.246H52.6369V18.092H54.0929V5.408H52.6369Z"
            fill="#5B5B5B"
          />
          <rect width="24" height="24" rx="3" fill="white" />
          <path
            d="M18.0284 5H5.97159C5.56491 5 5.32835 5.45969 5.56473 5.79062L9.90687 11.8696C9.96744 11.9544 10 12.056 10 12.1602V17.191C10 17.3804 10.107 17.5535 10.2764 17.6382L13.2764 19.1382C13.6088 19.3044 14 19.0627 14 18.691V12.1602C14 12.056 14.0326 11.9544 14.0931 11.8696L18.4353 5.79062C18.6717 5.45968 18.4351 5 18.0284 5Z"
            stroke="#5D5D62"
            stroke-width="1.5"
          />
        </svg>
        <svg
          width="58"
          height="24"
          viewBox="0 0 58 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: 14, marginBottom: -10 }}
        >
          <path
            d="M39.744 11.918H41.186V5.422H39.744V7.536H37.182V8.698H39.744V11.918ZM38.176 10.588C36.286 9.972 35.194 8.488 35.194 6.892V5.828H33.752V6.892C33.752 8.628 32.646 10.21 30.672 10.854L31.414 11.988C32.898 11.47 33.948 10.448 34.508 9.132C35.04 10.308 36.048 11.246 37.42 11.708L38.176 10.588ZM34.41 16.79V15.712H41.186V12.52H32.954V13.64H39.758V14.648H32.982V17.924H41.62V16.79H34.41ZM50.3829 8.614V9.79H52.6229V12.968H54.0649V5.436H52.6229V8.614H50.3829ZM51.1109 11.428C49.2209 10.77 48.1429 9.202 48.1429 7.62V7.452H50.7749V6.29H44.0129V7.452H46.6869V7.634C46.6869 9.37 45.5529 11.05 43.5929 11.75L44.3349 12.898C45.8329 12.366 46.8969 11.246 47.4569 9.86C47.9889 11.078 48.9969 12.072 50.3969 12.562L51.1109 11.428ZM49.8649 16.972C48.0589 16.972 47.0369 16.524 47.0369 15.698C47.0369 14.872 48.0589 14.424 49.8649 14.424C51.6429 14.424 52.6789 14.872 52.6789 15.698C52.6789 16.524 51.6429 16.972 49.8649 16.972ZM49.8649 13.304C47.2189 13.304 45.5949 14.2 45.5949 15.698C45.5949 17.21 47.2189 18.092 49.8649 18.092C52.4969 18.092 54.1209 17.21 54.1209 15.698C54.1209 14.2 52.4969 13.304 49.8649 13.304Z"
            fill="#5B5B5B"
          />
          <rect width="24" height="24" rx="3" fill="white" />
          <path
            d="M12.8309 20H11.1689C10.7355 20 10.3698 19.6896 10.2992 19.2622L10.0201 17.5696C9.83111 17.5019 9.64462 17.4246 9.46222 17.3376L8.0672 18.3373C7.72498 18.5825 7.22827 18.5411 6.93084 18.2449L5.75556 17.0695C5.44871 16.7621 5.40996 16.2841 5.66293 15.932L6.66258 14.5382C6.57564 14.3552 6.49813 14.1687 6.43058 13.9794L4.73849 13.7006C4.31022 13.6295 4 13.2631 4 12.8309V11.1695C4 10.7351 4.31058 10.3691 4.73849 10.299L6.4304 10.0202C6.49778 9.83161 6.57529 9.64511 6.66204 9.46253L5.66222 8.06796C5.41031 7.71505 5.44924 7.23698 5.75502 6.93083L6.92996 5.75601C7.2272 5.45839 7.72516 5.41715 8.06738 5.66285L9.46169 6.66255C9.64427 6.57561 9.83111 6.49827 10.0199 6.43089L10.2988 4.73782C10.3692 4.31042 10.7349 4 11.1685 4H12.8302C13.2636 4 13.6292 4.31042 13.7001 4.73782L13.9788 6.43089C14.168 6.49827 14.3541 6.57561 14.5372 6.66255L15.9317 5.66285C16.2745 5.41715 16.7724 5.45839 17.0695 5.75636L18.2437 6.93047C18.55 7.23645 18.5892 7.71452 18.3367 8.06725L17.3364 9.4627C17.4238 9.646 17.5013 9.8325 17.5684 10.0204L19.261 10.2996C19.6889 10.3691 20 10.7346 20 11.1688V12.8302C20 13.2649 19.6885 13.6306 19.2608 13.7001L17.5687 13.9796C17.5017 14.1679 17.4244 14.3545 17.3367 14.5377L18.3374 15.9322C18.5902 16.2849 18.5506 16.7628 18.2444 17.0693L17.0695 18.2436C16.9031 18.4104 16.6812 18.5023 16.4452 18.5023C16.2604 18.5023 16.083 18.4454 15.9323 18.3377L14.5371 17.3373C14.3545 17.4244 14.1684 17.5019 13.9797 17.5693L13.7003 19.262C13.6299 19.6896 13.2642 20 12.8309 20ZM9.42471 16.449C9.49049 16.449 9.55662 16.4643 9.61707 16.4967C9.9024 16.6478 10.2012 16.7721 10.506 16.8654C10.6549 16.9116 10.765 17.0377 10.7904 17.1911L11.1099 19.1283C11.1147 19.1575 11.1394 19.1786 11.1691 19.1786H12.8311C12.8603 19.1786 12.8857 19.1578 12.8901 19.1287L13.2103 17.1911C13.2354 17.0377 13.3458 16.9116 13.4944 16.8654C13.7972 16.7724 14.0965 16.648 14.3833 16.4963C14.5204 16.4227 14.6875 16.4348 14.8146 16.5255L16.411 17.6703C16.4572 17.6811 16.474 17.6783 16.4885 17.6633L17.6642 16.4887C17.6846 16.4679 17.6871 16.4345 17.6704 16.4103L16.5253 14.815C16.4343 14.6879 16.4229 14.5209 16.4962 14.3833C16.6485 14.0951 16.773 13.7961 16.8652 13.4944C16.9108 13.3451 17.0364 13.235 17.1906 13.2096L19.128 12.8897C19.1579 12.8849 19.179 12.8599 19.179 12.83V11.1686C19.179 11.1387 19.1575 11.114 19.1284 11.1096L17.1909 10.7901C17.0368 10.7646 16.9108 10.6544 16.8652 10.5052C16.7728 10.2041 16.6489 9.90486 16.4962 9.61667C16.4229 9.47924 16.4343 9.31176 16.525 9.18518L17.6697 7.58847C17.6868 7.56482 17.6843 7.53104 17.6638 7.51077L16.4889 6.33613C16.474 6.32137 16.458 6.31853 16.4466 6.31853L14.8146 7.47415C14.6871 7.56464 14.5202 7.57602 14.3826 7.50295C14.0969 7.3513 13.7982 7.22756 13.4948 7.13475C13.3454 7.08959 13.2347 6.96319 13.2096 6.80887L12.8901 4.87098C12.8857 4.842 12.8603 4.82085 12.8308 4.82085H11.1691C11.1394 4.82085 11.1147 4.842 11.1099 4.87134L10.7904 6.8094C10.765 6.96336 10.6544 7.08977 10.5052 7.13493C10.2016 7.22809 9.90293 7.35148 9.61742 7.50313C9.47964 7.5762 9.31236 7.56482 9.18578 7.47433L7.58916 6.32973C7.5424 6.31728 7.52604 6.32102 7.51147 6.33613L6.33653 7.51077C6.31556 7.53157 6.31307 7.56482 6.33049 7.58971L7.47467 9.18535C7.56516 9.31194 7.57671 9.47942 7.50382 9.61685C7.35236 9.90219 7.22862 10.2012 7.13511 10.5058C7.08924 10.6546 6.96302 10.7648 6.80924 10.7902L4.87182 11.1094C4.84231 11.1142 4.82133 11.1394 4.82133 11.1695V12.8309C4.82133 12.8604 4.84302 12.8862 4.87289 12.891L6.80907 13.2098C6.96284 13.2352 7.08924 13.3452 7.13493 13.4946C7.22827 13.7988 7.35218 14.0982 7.50364 14.3832C7.57671 14.5206 7.56551 14.6881 7.47449 14.8152L6.32996 16.4115C6.31271 16.4352 6.31573 16.4688 6.33636 16.4894L7.51129 17.6644C7.5264 17.6793 7.54453 17.6815 7.55396 17.6815L9.1856 16.5262C9.25653 16.4748 9.34044 16.449 9.42471 16.449ZM11.9996 14.8925C10.4044 14.8925 9.10702 13.5945 9.10702 11.9997C9.10702 10.4048 10.4044 9.10713 11.9996 9.10713C13.5948 9.10713 14.8924 10.4048 14.8924 11.9997C14.8924 13.5945 13.5948 14.8925 11.9996 14.8925ZM11.9996 9.92833C10.8574 9.92833 9.92818 10.8576 9.92818 11.9996C9.92818 13.1415 10.8576 14.0711 11.9996 14.0711C13.142 14.0711 14.0713 13.1415 14.0713 11.9996C14.0711 10.8576 13.142 9.92833 11.9996 9.92833Z"
            fill="#5D5D62"
            stroke="#5D5D62"
            stroke-width="0.4"
          />
        </svg>

        <div style={{ marginLeft: 19, float: "left" }}>
          <TableContainer>
            <table className="table table-hover">
              <thead>
                <tr>
                  {columns.map((column: any) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map(
                  ({
                    id,
                    name,
                    company,
                    entryDate,
                    telephone,
                    responsibility,
                    position,
                    organization,
                  }) => (
                    <tr
                      style={{
                        textAlign: "center",
                        backgroundColor: checkedItem.includes(id)
                          ? "#DFECFF"
                          : "",
                      }}
                    >
                      <td>
                        <HcCheckBox
                          checked={checkedItem.includes(id)}
                          onChange={(e) => {
                            checkHandler(e.target.checked, id);
                          }}
                        />
                      </td>
                      <td>{name}</td>
                      <td>{id}</td>
                      <td>{company}</td>
                      <td>{organization}</td>
                      <td>{responsibility}</td>
                      <td>{position}</td>
                      <td>{entryDate}</td>
                      <td>{telephone}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </TableContainer>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default HRManagement;
