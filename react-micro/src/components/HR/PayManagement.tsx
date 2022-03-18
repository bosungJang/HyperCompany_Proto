import React from "react";
import styled from "styled-components";
import "common/Table.css";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import { TableActionBtn } from "common/HcTableComponent";

import HcButton from "common/HcButton";
import { Link, useHistory } from "react-router-dom";
import HcCheckBox from "common/HcCheckBox";
import "common/bulkActionTest.scss";
import { HcTable, HcTableContainer } from "common/HcTableComponent";

let num = 1000000;
const getId = () => {
  num = num + 1;
  return num;
};
const UnderLine = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-decoration-line: underline;
  color: #257cff;
`;
const data = Array(10)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    kind: "근무 배치",
    comment:
      "발령 이전과 비교해서 직책, 직급, 직위, 호봉 등이 변동이 있을때 사용하는 발령",
    action: <TableActionBtn />,
  }));

const PayManagement = () => {
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
    <div style={{ marginTop: 7, marginLeft: 16 }}>
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "지급월",
    "계산 완료일",
    "급여 지급 대상자",
    "급여 지급액(원)",
    "급여 대장",
    "급여 이체",
    "-",
  ];

  const [tableData, setTableData] = React.useState(data);

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <div style={{ display: "block", width: 1320, height: 1080 }}>
            <HcTitleTextField titleName="급여 계산 / 관리" isBackIcon={false} />
            <Link to={"/hr/PayCalculation"}>
              {" "}
              <HcButton
                styles="secondary"
                style={{
                  marginTop: "39px",
                  marginBottom: "20px",
                }}
                size="medium"
              >
                급여 계산
              </HcButton>
            </Link>
            <div style={{ display: "flex" }}>
              <HcTableContainer style={{ width: 1320, height: 354 }}>
                <HcTable style={{ width: "unset", tableLayout: "fixed" }}>
                  <thead>
                    <tr style={{ textAlign: "left" }}>
                      <th style={{ width: 46 }}>
                        <div style={{ marginTop: 6, marginLeft: 4 }}>
                          <HcCheckBox
                            checked={checkedItem.length > 0 ? true : false}
                            onChange={(e) => checkAllHandler(e.target.checked)}
                          />
                        </div>
                      </th>
                      <th style={{ width: 190 }}>지급월</th>
                      <th style={{ width: 190 }}>계산 완료일</th>
                      <th style={{ width: 190 }}>급여 지급 대상자</th>
                      <th style={{ width: 190, textAlign: "center" }}>
                        급여 지급액(원)
                      </th>
                      <th style={{ width: 190 }}>급여 대장</th>
                      <th style={{ width: 197 }}>급여 이체</th>
                      <th style={{ width: 120 }}>-</th>
                    </tr>
                  </thead>
                  {/* <tbody>{rows}</tbody> */}
                  <tbody>
                    {tableData.map((x) => (
                      <tr
                        style={{
                          textAlign: "left",
                        }}
                        onClick={() => {}}
                      >
                        <td>
                          <div style={{ marginTop: 7, marginLeft: 4 }}>
                            <HcCheckBox
                              checked={checkedItem.includes(x.id)}
                              onChange={(e) => {
                                checkHandler(e.target.checked, x.id);
                              }}
                            />
                          </div>
                        </td>
                        <td
                          onClick={() =>
                            history.push({ pathname: "/hr/payCalcDetail" })
                          }
                        >
                          2021.06
                        </td>
                        <td
                          onClick={() =>
                            history.push({ pathname: "/hr/payCalcDetail" })
                          }
                        >
                          2021.07.15
                        </td>
                        <td
                          onClick={() =>
                            history.push({ pathname: "/hr/payCalcDetail" })
                          }
                        >
                          133명
                        </td>
                        <td
                          style={{ textAlign: "center" }}
                          onClick={() =>
                            history.push({ pathname: "/hr/payCalcDetail" })
                          }
                        >
                          523,654,223
                        </td>
                        <td>
                          <UnderLine>급여대장보기</UnderLine>
                        </td>
                        <td>
                          <UnderLine>급여 이체 리스트</UnderLine>
                        </td>
                        <td>{x.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </HcTable>
              </HcTableContainer>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default PayManagement;
