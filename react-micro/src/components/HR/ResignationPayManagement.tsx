import { HcTable, HcTableContainer } from "common/HcTableComponent";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcButton from "common/HcButton";
import { HcTitleTextField } from "common/HcTextField";
import HcCheckBox from "common/HcCheckBox";
import React from "react";
import { Link, useHistory } from "react-router-dom";

let num = 2022110;
const getId = () => {
  num = num + 1;
  return num;
};
const data = Array(100)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    kind: ".",
    comment: ".",
    action: "-",
  }));
export default function ResignationPayManagement() {
  /*checkbox */
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
      data.forEach((i: any) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  const history = useHistory();
  function RowOnClick() {
    history.push({ pathname: "/hr/ResignationPayDetail", state: {} });
  }
  return (
    <ComponentWrapper style={{ display: "block" }}>
      <HcTitleTextField titleName="퇴직금 계산 / 관리" isBackIcon={false} />
      <Link to={"/hr/CalcResignationPay"}>
        {" "}
        <HcButton
          styles="secondary"
          size="medium"
          style={{ marginTop: 39, marginBottom: 20 }}
        >
          퇴직금 계산
        </HcButton>
      </Link>
      <HcTableContainer style={{ height: "unset", width: "1320px" }}>
        <HcTable>
          <thead>
            <tr>
              <th style={{ minWidth: 46, maxWidth: 46 }}>
                <div style={{ marginTop: 2 }}>
                  {" "}
                  <HcCheckBox
                    checked={checkedItem.length > 0 ? true : false}
                    onChange={(e) => checkAllHandler(e.target.checked)}
                  />
                </div>
              </th>
              <th style={{ minWidth: 120, maxWidth: 120 }}>이름</th>
              <th style={{ minWidth: 120, maxWidth: 120 }}>사원번호</th>
              <th style={{ minWidth: 120, maxWidth: 120 }}>법인회사</th>
              <th style={{ minWidth: 154, maxWidth: 154 }}>조직</th>
              <th style={{ minWidth: 120, maxWidth: 120 }}>직책</th>
              <th style={{ minWidth: 120, maxWidth: 120 }}>직위</th>
              <th style={{ minWidth: 120, maxWidth: 120 }}>입사일자</th>
              <th style={{ minWidth: 120, maxWidth: 120 }}>퇴사일자</th>
              <th style={{ minWidth: 80, maxWidth: 80 }}>근속연수</th>
              <th style={{ minWidth: 120, textAlign: "center", maxWidth: 120 }}>
                실지급액
              </th>
              <th style={{ minWidth: 80, maxWidth: 80 }}>-</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id }) => (
              <tr onClick={() => RowOnClick()}>
                <td onClick={(event) => event.stopPropagation()}>
                  <HcCheckBox
                    checked={checkedItem.includes(id)}
                    onChange={(e) => {
                      checkHandler(e.target.checked, id);
                    }}
                  />
                </td>
                <td>홍길동</td>
                <td>2022110</td>
                <td>티맥스에이아이</td>
                <td>AI본부 / AI 1-2팀</td>
                <td>팀장</td>
                <td>연구원</td>
                <td>2019.01.01</td>
                <td>2022.01.01</td>
                <td>3</td>
                <td style={{ textAlign: "right" }}>4,223,110</td>
                <td>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.25 3C2.25 2.0335 3.0335 1.25 4 1.25H20C20.9665 1.25 21.75 2.0335 21.75 3V21C21.75 21.9665 20.9665 22.75 20 22.75H4C3.0335 22.75 2.25 21.9665 2.25 21V3ZM4 2.75C3.86193 2.75 3.75 2.86193 3.75 3V21C3.75 21.1381 3.86193 21.25 4 21.25H20C20.1381 21.25 20.25 21.1381 20.25 21V3C20.25 2.86193 20.1381 2.75 20 2.75H4ZM15.5002 11.1767C15.7126 10.9622 15.6891 10.6079 15.4362 10.4431C14.8327 10.05 14.1558 9.74504 13.3099 9.59742C13.0571 9.55331 12.8622 9.34078 12.8622 9.08419V8.5C12.8622 8.22386 12.6383 8 12.3622 8H11.977C11.7009 8 11.477 8.22386 11.477 8.5V9.06992C11.477 9.32746 11.2804 9.54022 11.0267 9.58458C9.42451 9.86472 8.43816 10.7696 8.43816 12.068C8.43816 13.7019 10.2762 14.2387 11.8404 14.6955C12.9988 15.0338 14.0071 15.3282 14.0071 15.992C14.0071 16.688 13.3569 17.072 11.9293 17.072C11.0401 17.072 10.1304 16.8465 9.33931 16.3733C9.10569 16.2336 8.79835 16.2713 8.63023 16.4854L8.30212 16.9032C8.13421 17.1171 8.16731 17.4279 8.39917 17.5699C9.13884 18.0228 10.1281 18.3101 11.0197 18.4364C11.2773 18.4729 11.477 18.6882 11.477 18.9483V19.5C11.477 19.7761 11.7009 20 11.977 20H12.3622C12.6383 20 12.8622 19.7761 12.8622 19.5V18.8961C12.8622 18.6428 13.0527 18.4318 13.3018 18.3852C15.0447 18.0587 16 17.1014 16 15.836C16 14.1351 14.1052 13.6019 12.526 13.1575C11.398 12.8401 10.4311 12.568 10.4311 11.948C10.4311 11.264 11.1378 10.928 12.1979 10.928C13.0364 10.928 13.7809 11.1675 14.5032 11.6008C14.711 11.7254 14.9793 11.7026 15.1499 11.5304L15.5002 11.1767ZM7.75 5C7.33579 5 7 5.33579 7 5.75C7 6.16421 7.33579 6.5 7.75 6.5H16.25C16.6642 6.5 17 6.16421 17 5.75C17 5.33579 16.6642 5 16.25 5H7.75Z"
                      fill="#257CFF"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </HcTable>
      </HcTableContainer>
    </ComponentWrapper>
  );
}
