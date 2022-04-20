import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTableContainer, HcTable } from "common/HcTableComponent";
import { HcTitleTextField } from "common/HcTextField";
import { HcContentPopup } from "common/HcPopup";
import HcCheckBox from "common/HcCheckBox";
import React from "react";
import { useHistory } from "react-router-dom";
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
  /* pop up */
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* pop up */
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
        <HcTitleTextField titleName="평가자 관리" isBackIcon={false} />

        <HcTableContainer
          style={{ width: "100%", height: "unset", marginTop: "93px" }}
        >
          <HcTable>
            <thead>
              <tr>
                <th style={{ minWidth: 46 }}>
                  <div style={{ paddingTop: 7 }}>
                    <HcCheckBox
                      checked={checkedItem.length > 0 ? true : false}
                      onChange={(e) => checkAllHandler(e.target.checked)}
                    />
                  </div>
                </th>
                <th style={{ minWidth: 140 }}>이름</th>
                <th style={{ minWidth: 140 }}>사원번호</th>
                <th style={{ minWidth: 227 }}>법인회사</th>
                <th style={{ minWidth: 227 }}>조직</th>
                <th style={{ minWidth: 140 }}>직책</th>
                <th style={{ minWidth: 140 }}>직위</th>
                <th style={{ minWidth: 140 }}>평가계획</th>
                <th style={{ minWidth: 120 }}>-</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id }) => (
                <tr
                  onClick={() => {
                    // history.push({
                    //   pathname: "/hr/RaterDetail",
                    //   state: {},
                    // });
                    openModal();
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
                  <td>홍길동</td>
                  <td>2021778</td>
                  <td>티맥스에이엔씨</td>
                  <td>AB본부 / AB2-4팀</td>
                  <td>팀장</td>
                  <td>연구원</td>
                  <td>2</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </HcTable>
        </HcTableContainer>
      </ComponentWrapper>
      <HcContentPopup
        header="평가 계획"
        primaryBtn="확인"
        width={1060}
        height={735}
        open={modalOpen}
        close={closeModal}
        style={{ right: 30 }}
      >
        <HcTableContainer style={{ width: 1000, height: 492 }}>
          <HcTable>
            <thead>
              <tr>
                <th style={{ minWidth: "180px" }}>평가 계획명</th>
                <th style={{ minWidth: "140px" }}>평가 종류</th>
                <th style={{ minWidth: "140px" }}>평가 년도</th>
                <th style={{ minWidth: "200px" }}>평가 대상 기간</th>
                <th style={{ minWidth: "200px" }}>평가 실시 기간</th>
                <th style={{ minWidth: "140px" }}>평가 결과 공개일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020년 1분기 평가 계획</td>
                <td>연간평가</td>
                <td>2020</td>
                <td>2020.01.01 ~ 2020.03.01 </td>
                <td>2020.01.01 ~ 2020.03.01 </td>
                <td>2020.03.01</td>
              </tr>
            </tbody>
          </HcTable>
        </HcTableContainer>
      </HcContentPopup>
    </>
  );
}
