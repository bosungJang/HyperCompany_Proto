import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import HcButton from "common/HcButton";
import {
  HcTableContainer,
  HcTable,
  TableSetting,
  TableActionBtn,
  NullTbody,
} from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import { useHistory } from "react-router-dom";
export default function Benefit() {
  const history = useHistory();
  return (
    <ComponentWrapper style={{ display: "block" }}>
      <HcTitleTextField titleName="혜택" isBackIcon={false} />
      <div style={{ display: "flex", margin: "37px 0px 20px 0px" }}>
        <HcButton
          styles="secondary"
          size="medium"
          style={{ marginRight: 1100 }}
          onClick={() => {
            history.push({ pathname: "/crm/benefitCreate" });
          }}
        >
          +생성
        </HcButton>{" "}
        <TableSetting />
      </div>
      <HcTableContainer style={{ width: "100%" }}>
        <HcTable>
          <thead>
            <tr>
              <th style={{ width: 46 }}></th>
              <th style={{ width: 186 }}>혜택 이름</th>
              <th style={{ width: 100 }}>유형</th>
              <th style={{ width: 228 }}>설명</th>
              <th style={{ width: 120 }}>대상</th>
              <th style={{ width: 100 }}>단위</th>
              <th style={{ width: 120 }}>값</th>
              <th style={{ width: 200 }}>유효 기간</th>
              <th style={{ width: 100 }}>상태</th>
              <th style={{ width: 120 }}>-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>최초 가입 적립금</td>
              <td></td>
              <td>최초 가입 고객 혜택</td>
              <td>제품 카테고리</td>
              <td>포인트</td>
              <td>10점</td>
              <td>2020.12.31~2021.12.31</td>
              <td>활성</td>
              <td>
                <TableActionBtn />
              </td>
            </tr>
          </tbody>
        </HcTable>
      </HcTableContainer>
    </ComponentWrapper>
  );
}
