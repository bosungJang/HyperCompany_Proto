import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ComponentWrapper } from "common/HcCommonLayout";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
} from "common/HcTableComponent";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";
import HcCheckBox from "common/HcCheckBox";
import { HcTitleTextField } from "common/HcTextField";

let num = 1000000;
const getId = () => {
  num = num + 1;
  return num;
};

export default function EvaluationEnvironment() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(
    Array(10)
      .fill(undefined)
      .map(() => ({
        id: getId(),
        kind: "근무 배치",
        comment:
          "발령 이전과 비교해서 직책, 직급, 직위, 호봉 등이 변동이 있을때 사용하는 발령",
        action: <TableActionBtn />,
        isOpen: isOpen,
        selectedOption: "정상",
      }))
  );

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  const [modalOpen, setModalOpen] = React.useState(false);
  const [tableData, setTableData] = React.useState(data);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */

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
      tableData.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }

  return (
    <>
      <ComponentWrapper style={{ position: "relative", display: "block" }}>
        <HcTitleTextField titleName="평가 환경 설정" isBackIcon={false} />
        <HcButton
          size="medium"
          styles="line"
          style={{
            padding: "7px 18px 6px 10px",
            position: "absolute",
            top: 44,
            right: 40,
          }}
        >
          평가 환경 수정 이력
        </HcButton>
        <div style={{ marginTop: "39px" }}>
          <HcTabsAdv
            items={[
              { to: "1", name: "평가단계" },
              { to: "2", name: "기타평가" },
              { to: "3", name: "평가 등급" },
            ]}
            size="normal"
            TabNumber={Tabs}
            SetTabNumber={setTabs}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          {
            {
              "1": (
                <>
                  <HcButton
                    styles="secondary"
                    size="medium"
                    style={{ marginBottom: 24 }}
                    onClick={() =>
                      history.push({ pathname: "/hr/EvaluationStepCreate" })
                    }
                  >
                    +생성
                  </HcButton>
                  <HcTableContainer>
                    <HcTable>
                      <thead>
                        <tr
                          onClick={() =>
                            history.push({
                              pathname: "/hr/EvaluationStepDetail",
                            })
                          }
                        >
                          <th style={{ minWidth: 46 }}>
                            {" "}
                            <div style={{ paddingTop: 7 }}>
                              <HcCheckBox
                                checked={checkedItem.length > 0 ? true : false}
                                onChange={(e) =>
                                  checkAllHandler(e.target.checked)
                                }
                              />
                            </div>
                          </th>
                          <th style={{ minWidth: 220 }}>평가 단계명</th>
                          <th style={{ minWidth: 280 }}>평가 단계</th>
                          <th style={{ minWidth: 334 }}>설명</th>
                          <th style={{ minWidth: 160 }}>생성자</th>
                          <th style={{ minWidth: 160 }}>생성 일자</th>
                          <th style={{ minWidth: 120 }}>-</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            onClick={(event: any) => event.stopPropagation()}
                          ></td>
                          <td>평가 단계명_01</td>
                          <td>본인 평가, 동료 평가, 하향 평가</td>
                          <td>평가명에 대한 설정</td>
                          <td>홍길동</td>
                          <td>2022.01.01</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </HcTable>
                  </HcTableContainer>
                </>
              ),
              "2": (
                <>
                  <HcButton
                    styles="secondary"
                    size="medium"
                    style={{ marginBottom: 24 }}
                    onClick={() =>
                      history.push({
                        pathname: "/hr/EtcEvaluationCreate",
                      })
                    }
                  >
                    +생성
                  </HcButton>
                  <HcTableContainer>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}>
                            {" "}
                            <div style={{ paddingTop: 7 }}>
                              <HcCheckBox
                                checked={checkedItem.length > 0 ? true : false}
                                onChange={(e) =>
                                  checkAllHandler(e.target.checked)
                                }
                              />
                            </div>
                          </th>
                          <th style={{ width: 220 }}>기타 평가명</th>
                          <th style={{ width: 280 }}>직무</th>
                          <th style={{ width: 334 }}>설명</th>
                          <th style={{ width: 160 }}>생성자</th>
                          <th style={{ width: 160 }}>생성 일자</th>
                          <th style={{ width: 120 }}>-</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          onClick={() =>
                            history.push({
                              pathname: "/hr/EtcEvaluationDetail",
                            })
                          }
                        >
                          <td
                            onClick={(event: any) => event.stopPropagation()}
                          ></td>
                          <td>기타 단계명_01</td>
                          <td>기획</td>
                          <td>평가명에 대한 설정</td>
                          <td>홍길동</td>
                          <td>2022.01.01</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </HcTable>
                  </HcTableContainer>
                </>
              ),
              "3": (
                <>
                  <HcButton
                    styles="secondary"
                    size="medium"
                    style={{ marginBottom: 24 }}
                    onClick={() =>
                      history.push({
                        pathname: "/hr/EtcEvaluationCreate",
                      })
                    }
                  >
                    +생성
                  </HcButton>
                  <HcTableContainer>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ width: 46 }}>
                            {" "}
                            <div style={{ paddingTop: 7 }}>
                              <HcCheckBox
                                checked={checkedItem.length > 0 ? true : false}
                                onChange={(e) =>
                                  checkAllHandler(e.target.checked)
                                }
                              />
                            </div>
                          </th>
                          <th style={{ width: 220 }}>기타 평가명</th>
                          <th style={{ width: 280 }}>직무</th>
                          <th style={{ width: 334 }}>설명</th>
                          <th style={{ width: 160 }}>생성자</th>
                          <th style={{ width: 160 }}>생성 일자</th>
                          <th style={{ width: 120 }}>-</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          onClick={() =>
                            history.push({
                              pathname: "/hr/EtcEvaluationDetail",
                            })
                          }
                        >
                          <td
                            onClick={(event: any) => event.stopPropagation()}
                          ></td>
                          <td>기타 단계명_01</td>
                          <td>기획</td>
                          <td>평가명에 대한 설정</td>
                          <td>홍길동</td>
                          <td>2022.01.01</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </HcTable>
                  </HcTableContainer>
                </>
              ),
            }[Tabs]
          }
        </div>
      </ComponentWrapper>
    </>
  );
}
