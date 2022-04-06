import { HcTitleTextField } from "common/HcTextField";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTable, HcTableContainer } from "common/HcTableComponent";
import { useHistory } from "react-router-dom";
export default function EvaluationManagement() {
  const history = useHistory();
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="평가 관리" isBackIcon={false} />
        <div style={{ marginTop: 95 }}>
          <HcTableContainer style={{ width: "100%", height: "unset" }}>
            <HcTable>
              <thead style={{ textAlign: "left" }}>
                <tr>
                  <th style={{ width: 298, minWidth: 298 }}>평가 계획명</th>
                  <th style={{ width: 192, minWidth: 192 }}>평가 종류</th>
                  <th style={{ width: 192, minWidth: 192 }}>평가 년도</th>
                  <th style={{ width: 259, minWidth: 259 }}>평가 대상 기간</th>
                  <th style={{ width: 259, minWidth: 259 }}>평가 실기 기간</th>
                  <th style={{ width: 120, minWidth: 120 }}>평가 상태</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onClick={() =>
                    history.push({ pathname: "/hr/EvaluationDetail" })
                  }
                >
                  <td>1분기 평가 계획</td>
                  <td>분기 평가</td>
                  <td>2022</td>
                  <td>2022.01.01~2022.01.01</td>
                  <td>2022.01.01~2022.01.01</td>
                  <td>진행중</td>
                </tr>
              </tbody>
            </HcTable>
          </HcTableContainer>
        </div>
      </ComponentWrapper>
    </>
  );
}
