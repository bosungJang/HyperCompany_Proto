import React, { Fragment } from "react";
import ProgressBar from "common/HcProgressBar";
import { useHistory, Link } from "react-router-dom";
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

const data2 = Array(17)
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
const data = [
  {
    subject: "자산",
    currentAmount: "",
    priorAmount: "",
    total: "",
    subMenu: [
      {
        subject: "1. 유동자산",
        currentAmount: "",
        priorAmount: "",
        total: "350,000,000",
        subMenu: [
          {
            subject: "제품 매출",
            currentAmount: "",
            priorAmount: "350,000,000",
            total: "350,000,000",
          },
        ],
      },
    ],
  },
  {
    subject: "Ⅱ.매출원가",
    currentAmount: "",
    priorAmount: "",
    total: "57,500,000",
    subMenu: [
      {
        subject: "제품매출원가",
        currentAmount: "",
        priorAmount: "",
        total: "57,500,000",
        subMenu: [
          {
            subject: "기초제품재고액",
            currentAmount: "11,200,000",
            priorAmount: "10,000,000",
            total: "",
          },
          {
            subject: "당기제품제조원가",
            currentAmount: "",
            priorAmount: "58,700,000",
            total: "",
          },
        ],
      },
    ],
  },
  {
    subject: "Ⅲ.매출총이익",
    currentAmount: "",
    priorAmount: "",
    total: "292,500,000",
  },
  {
    subject: "Ⅳ.판매비와 관리비",
    currentAmount: "",
    priorAmount: "",
    total: "197,912,000",
    subMenu: [
      {
        subject: "급여",
        currentAmount: "",
        priorAmount: "10,000,000",
        total: "",
      },
      {
        subject: "복리후생비",
        currentAmount: "",
        priorAmount: "58,700,000",
        total: "",
      },
      {
        subject: "여비교통비",
        currentAmount: "",
        priorAmount: "10,000,000",
        total: "",
      },
    ],
  },
];
export function arrowBtn() {
  return (
    <div style={{ marginTop: 5 }}>
      <svg
        style={{ marginRight: 5 }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.74412 14.2447C7.06956 14.5702 7.59719 14.5702 7.92263 14.2447L12.6366 9.53078L12.6367 9.53068C12.9621 9.20525 12.9621 8.67761 12.6367 8.35217C12.6331 8.34856 12.6294 8.34499 12.6258 8.34146L7.92253 3.63822C7.5971 3.31279 7.06946 3.31279 6.74402 3.63822C6.41859 3.96366 6.41859 4.4913 6.74402 4.81673L10.8688 8.94153L6.74412 13.0662C6.41868 13.3917 6.41868 13.9193 6.74412 14.2447Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
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

  const [data, setData] = React.useState([
    {
      id: getId(),
      subject: "전사 수익성 증가",
      type: "정량",
      period: "2022.01.01 ~ 2022.03.01",
      weight: "50%",
      achievement: 100,
      subMenu: [
        {
          id: getId(),
          subject: "신규 고객 확보",
          type: "정량",
          period: "2022.01.01 ~ 2022.03.01",
          weight: "50%",
          achievement: 70,
          subMenu: [
            {
              id: getId(),
              subject: "온라인 프로모션",
              type: "정량",
              period: "2022.01.01 ~ 2022.03.01",
              weight: "50%",
              achievement: 50,
              subMenu: [],
              toggle: true,
            },
          ],
          toggle: true,
        },
      ],
      toggle: true,
    },
  ]);

  const tableBodySlot = (item: Object) => {
    function loop(items: any, depth: number) {
      return (
        <>
          {items.map((item: any) => (
            <>
              <tr
                style={{ borderCollapse: "collapse" }}
                onClick={() =>
                  history.push({ pathname: "/hr/GoalAndPerformanceDetail" })
                }
              >
                <td>
                  <div style={{ paddingTop: 6 }}>
                    <HcCheckBox
                      checked={checkedItem.includes(item.id)}
                      onChange={(e: any) => {
                        checkHandler(e.target.checked, item.id);
                      }}
                    />
                  </div>
                </td>
                <td
                  style={{
                    paddingLeft: (depth + 1) * 30 + 11,
                    display: "flex",
                  }}
                >
                  {item.subMenu.length > 0 ? arrowBtn() : <></>} {item.subject}
                </td>
                <td>{item.type}</td>
                <td>{item.weight}</td>
                <td>{item.period}</td>
                <td
                  style={{
                    position: "relative",
                    display: "flex",
                    paddingTop: 13,
                    top: 5,
                  }}
                >
                  <ProgressBar
                    percentage={item.achievement}
                    style={{ marginTop: 4, marginRight: 10 }}
                  />
                  {item.achievement}%
                </td>
                <td>-</td>
              </tr>
              {item.subMenu != null ? loop(item.subMenu, depth + 1) : null}
            </>
          ))}
        </>
      );
    }

    return (
      <>
        {data.map(
          (
            { id, subject, type, period, weight, achievement, toggle, subMenu },
            index
          ) => (
            <>
              <Fragment key={`${index}${subject}`}>
                <tr
                  className="drop_down_row"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push({ pathname: "/hr/GoalAndPerformanceDetail" });
                    //var $current = e.target;
                    var current =
                      document.getElementsByClassName("drop_down_row");
                  }}
                >
                  <td>
                    <div style={{ paddingTop: 6 }}>
                      <HcCheckBox
                        checked={checkedItem.includes(id)}
                        onChange={(e: any) => {
                          checkHandler(e.target.checked, id);
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    {" "}
                    {subMenu.length > 0 ? arrowBtn() : <></>} {subject}
                  </td>
                  <td>{type}</td>
                  <td>{weight}</td>
                  <td>{period}</td>
                  <td
                    style={{
                      position: "relative",
                      display: "flex",
                      paddingTop: 13,
                      top: 1,
                    }}
                  >
                    <ProgressBar
                      percentage={achievement}
                      style={{ marginTop: 4, marginRight: 10 }}
                    />
                    {achievement}%
                  </td>
                  <td>-</td>
                </tr>
                {subMenu != null ? loop(subMenu, 0) : null}
              </Fragment>
            </>
          )
        )}
      </>
    );
  };
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
              { to: "2", name: "사원 목표" },
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
                  <div style={{ display: "block", marginLeft: 24 }}>
                    <Link to="/hr/GoalAndPerformanceCreate">
                      <HcButton styles="secondary" size="medium">
                        +생성
                      </HcButton>
                    </Link>
                    <HcTableContainer style={{ height: 984, marginTop: 20 }}>
                      <HcTable>
                        <thead>
                          <tr>
                            <th style={{ minWidth: 46 }}>
                              <div style={{ paddingTop: 7 }}>
                                <HcCheckBox
                                  checked={
                                    checkedItem.length > 0 ? true : false
                                  }
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
                        <tbody>{tableBodySlot(data)}</tbody>
                      </HcTable>
                    </HcTableContainer>
                  </div>
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
