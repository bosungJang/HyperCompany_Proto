import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { ComponentWrapper } from "common/HcCommonLayout";
import { TableActionBtn } from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import HcTree from "common/HcTree";
import { HcTitleTextField } from "common/HcTextField";
import { HcTable, HcTableContainer } from "common/HcTableComponent";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";

let num = 100000;
const getId = () => {
  num = num + 1;
  return num;
};

const data = Array(17)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    name: "회계",
    group: "경영지원",
    comment: "재무나 회계에 대한 업무를 하는 직무입니다.",
    type: "연봉제",
    grade: "1등급",
    ability: ["협상능력", "설득능력", "대인관계력", "어학능력", "분석력"],
    date: "2021.01.01",
    action: <TableActionBtn />,
  }));

const GoalAndPerformance = () => {
  const history = useHistory();
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
      data.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }

  /*checkbox */
  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  /*Create */

  /*Search */
  const [searchVal, setsearchVal] = React.useState("");
  /*Search */

  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: 0,
    title: "",
  });

  /* Current Data*/

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  /*Tree*/
  const [items, setItems] = React.useState([
    {
      id: "0", //table
      title: "티맥스 소프트",
    },
    {
      id: 1,
      title: "사업부",
    },
    {
      id: 2,
      title: "PM본부",
    },
  ]);
  /*Tree*/

  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */

  return (
    <>
      <ComponentWrapper style={{ display: "block", position: "relative" }}>
        <HcTitleTextField titleName="목표 및 성과 관리" isBackIcon={false} />
        <HcButton
          styles="line"
          size="medium"
          style={{ position: "absolute", top: 44, right: 40 }}
        >
          내보내기
        </HcButton>
        <div style={{ marginTop: "39px" }}>
          <HcTabsAdv
            items={[
              { to: "1", name: "조직 목표" },
              { to: "2", name: "Text" },
            ]}
            size="normal"
            TabNumber={Tabs}
            SetTabNumber={setTabs}
          />
        </div>
        <div
          className="body_area"
          style={{ display: "flex", marginTop: "32px" }}
        >
          {
            {
              "1": (
                <>
                  <HcTree
                    items={items}
                    title="조직도"
                    search={true}
                    style={{ minHeight: "832px" }}
                    isCreate={isCreate}
                    setIsCreates={setIsCreates}
                    currentData={currentData}
                    setcurrentData={setcurrentData}
                    placeholder="조직 검색"
                  />
                  <HcTableContainer style={{ height: 984, marginLeft: 24 }}>
                    <HcTable>
                      <thead>
                        <tr>
                          <th style={{ minWidth: 46 }}>
                            <div style={{ paddingTop: 7 }}>
                              <HcCheckBox
                                checked={checkedItem.length > 0 ? true : false}
                                onChange={(e) =>
                                  checkAllHandler(e.target.checked)
                                }
                              />
                            </div>
                          </th>
                          <th style={{ minWidth: 258 }}>목표명</th>
                          <th style={{ minWidth: 80 }}>목표 유형</th>
                          <th style={{ minWidth: 80 }}>가중치</th>
                          <th style={{ minWidth: 200 }}>목표기간</th>
                          <th style={{ minWidth: 200 }}>목표 달성률</th>
                          <th style={{ minWidth: 120 }}>-</th>
                        </tr>
                      </thead>
                    </HcTable>
                  </HcTableContainer>
                </>
              ),
              "2": (
                <>
                  <HcTree
                    items={items}
                    title="조직도"
                    search={true}
                    style={{ minHeight: "832px" }}
                    isCreate={isCreate}
                    setIsCreates={setIsCreates}
                    currentData={currentData}
                    setcurrentData={setcurrentData}
                    placeholder="조직 검색"
                  />
                </>
              ),
            }[Tabs]
          }
        </div>
      </ComponentWrapper>
    </>
  );
};

export default GoalAndPerformance;
