import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTableContainer, HcTable } from "common/HcTableComponent";
import { HcTitleTextField } from "common/HcTextField";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import React from "react";
import { useHistory, Link } from "react-router-dom";
let num = 100000;
const getId = () => {
  num = num + 1;
  return num;
};
const data = Array(17)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    name: "2022 1분기 평가 계획",
    type: "분기 평가",
    date: "2022.01.01 ~ 2022.01.01",
  }));
export default function EvaluationPlan() {
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
  const history = useHistory();
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="평가 계획" isBackIcon={false} />
        <Link to="/hr/EvaluationPlanCreate">
          <HcButton
            styles="secondary"
            size="medium"
            style={{ marginTop: "37px", marginBottom: "24px" }}
          >
            +생성
          </HcButton>
        </Link>
        <HcTableContainer style={{ width: "100%", height: "unset" }}>
          <HcTable>
            <thead>
              <tr>
                <th style={{ minWidth: 46 }}>
                  {" "}
                  <div style={{ paddingTop: 7 }}>
                    <HcCheckBox
                      checked={checkedItem.length > 0 ? true : false}
                      onChange={(e) => checkAllHandler(e.target.checked)}
                    />
                  </div>
                </th>
                <th style={{ minWidth: 220 }}>평가 계획명</th>
                <th style={{ minWidth: 160 }}>평가 종류</th>
                <th style={{ minWidth: 160 }}>평가 년도</th>
                <th style={{ minWidth: 227 }}>평가 대상 기간</th>
                <th style={{ minWidth: 227 }}>평가 실기 기간</th>
                <th style={{ minWidth: 160 }}>평가 결과 공개 일자</th>
                <th style={{ minWidth: 120 }}>-</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id }) => (
                <tr
                  onClick={() => {
                    history.push({
                      pathname: "/hr/EvaluationPlanDetail",
                      state: {},
                    });
                  }}
                >
                  <td onClick={(event) => event.stopPropagation()}>
                    <HcCheckBox
                      checked={checkedItem.includes(id)}
                      onChange={(e) => {
                        checkHandler(e.target.checked, id);
                      }}
                    />
                  </td>
                  <td>2022 1분기 평가 계획</td>
                  <td>분기 평가</td>
                  <td>2022</td>
                  <td>2022.01.01 ~ 2022.01.01</td>
                  <td>2022.01.01 ~ 2022.01.01</td>
                  <td>2022.01.01</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </HcTable>
        </HcTableContainer>
      </ComponentWrapper>
    </>
  );
}
