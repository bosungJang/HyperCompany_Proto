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
  const tableData = [
    {
      id: 1,
      name: "최초 가입 적립금",
      type: "적립",
      comment: "최초 가입 고객 혜택",
      target: "제품 카테고리",
      unit: "포인트",
      value: "10점",
      period: "2021.12.31 ~ 2022.12.31",
      state: "활성",
    },
  ];
  const history = useHistory();
  const Type = (name: string) => {
    const typeArray = [
      { name: "적립", background: "#E6F3EC", color: "#4DAD79" },
      { name: "할인", background: "#FFE9E9", color: "#F06666" },
      { name: "쿠폰", background: "#F7E9FA", color: "#CA68D9" },
    ];
    const index = typeArray.findIndex((i) => i.name === name);
    if (index === -1) return <div>name</div>;
    else
      return (
        <div
          style={{
            background: typeArray[index].background,
            width: 36,
            height: "100%",
            padding: "3px 0px 0px 5px",
            borderRadius: 2,
            fontSize: "13px",
            fontWeight: 700,
            color: typeArray[index].color,
          }}
        >
          {typeArray[index].name}
        </div>
      );
  };
  return (
    <ComponentWrapper style={{ display: "block" }}>
      <HcTitleTextField titleName="혜택" isBackIcon={false} />
      <div style={{ display: "flex", margin: "37px 0px 20px 0px" }}>
        <HcButton
          styles="secondary"
          size="medium"
          style={{ width: 77 }}
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
              <th style={{ width: 46 }}>
                {" "}
                <HcCheckBox checked={false} onChange={() => {}} />
              </th>
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
            {tableData.length > 0 ? (
              <tr
                onClick={() => {
                  history.push({ pathname: "/crm/benefitDetail" });
                }}
              >
                <td>
                  <HcCheckBox
                    checked={false}
                    onChange={(e: any) => {
                      e.preventDefault();
                    }}
                  />
                </td>
                <td>최초 가입 적립금</td>
                <td>{Type("쿠폰")}</td>
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
            ) : (
              <NullTbody colspan={10} style={{ height: 767 }} />
            )}
          </tbody>
        </HcTable>
      </HcTableContainer>
    </ComponentWrapper>
  );
}
