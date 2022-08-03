import { HcTabsAdv } from "common/HcTabs";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  SelectBox,
  HcSearchTextField,
  TextField,
  SubHeading,
} from "common/HcTextField";
import HcBottomBar from "common/HcBottomBar";
import { useRef, useState } from "react";
import {
  HcTableContainer,
  HcTable,
  TableSetting,
  TableActionBtn,
  NullTbody,
} from "common/HcTableComponent";
import styled from "styled-components";
import { Wrapper, TitleWrapper, TreeDotBtn, TreeIcon, Ul } from "common/HcTree";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import { SideBar, SideBarInnerContainer, SideBarItem } from "common/HcPopup";
const CreateWrapper = styled.div`
  background: #ffffff;
  width: 984px;
  height: fit-content;
  padding: 28px 24px;
  border: 1px solid #cecece;
  border-radius: 4px;
`;
const ClassStyle = styled.div`
  margin-top: 5px;
  margin-left: 6px;
  border-radius: 2px;
  padding: 3px 6px;
  width: fit-content;
  font-weight: 700;
`;
const ListWrapper = styled.div`
  position: relative;
  overflow: visible;
  z-index: 5;
  width: fit-content;
  height: fit-content;
  &:hover {
    .tooltip {
      display: block;
    }
  }
`;
const List = styled.div`
  display: none;
  &:hover {
    display: block;
  }
  background: #ffffff;
  border-radius: 4px;
  width: 129px;
  height: fit-content;
  position: absolute;
  top: 32px;
  border: 1px solid #257cff;
`;
const colorSet = {
  red: { color: "#F06666", background: "#FFE9E9" },
  yellow: { color: "#FFBB0B", background: "#FFF1CE" },
  orange: { color: "#FDA95C", background: "#FFF3E8" },
  blueGreen: { color: "#5AC4CB", background: "#E7F7F7" },
  blue: { color: "#5799FB", background: "#DFECFF" },
  green: { color: "#4DAD79", background: "#E6F3EC" },
  navy: { color: "#4D4D94", background: "#E6E6F0" },
  purple: { color: "#CA68D9", background: "#F7E9FA" },
  grey: { color: "#838181", background: "#CECECE" },
  black: { color: "#EDEDED", background: "#2D2D31" },
  none: { color: "#000000", background: "none", fontSize: "14px" },
};
const colorName = [
  { name: "빨간색", style: colorSet.red },
  { name: "노란색", style: colorSet.yellow },
  { name: "주황색", style: colorSet.orange },
  { name: "청록색", style: colorSet.blueGreen },
  { name: "초록색", style: colorSet.green },
  { name: "파란색", style: colorSet.blue },
  { name: "남색", style: colorSet.navy },
  { name: "보라색", style: colorSet.purple },
  { name: "회색", style: colorSet.grey },
  { name: "기본", style: colorSet.black },
];
const Li = styled.li`
  width: 100%;
  height: 42px;
  border-radius: 2px;
  background: #fffff;
  &:hover {
    background: #eff5ff;
  }
  padding-top: 3px;
`;

export default function CustomerClass() {
  /*BottomBar Sidebar*/
  const [barOpen, setbarOpen] = useState(true);
  const [sideOpen, setSideOpen] = useState(false);
  /*BottomBar ,Sidebar*/
  const [Tabs, setTabs] = useState("1");
  /* select box */
  const [customerSelect, setCustomerSelect] = useState(
    Tabs === "1" ? "개인 고객" : "기업 고객"
  );
  /* select box */
  const [customerData, setCustomerData] = useState<any[]>([
    {
      id: 1,
      name: "홍길동",
      class: "Bronze",
      purchase: 1000,
      point: 10,
      update: "2020.01.01",
    },
    {
      id: 2,
      name: "홍길동",
      class: "VIP",
      purchase: 100000,
      point: 1000,
      update: "2021.01.01",
    },
    {
      id: 3,
      name: "홍길동",
      class: "Silver",
      purchase: 1000000,
      point: 1000000,
      update: "2022.01.01",
    },
  ]);

  const [treeItems, setTreeItems]: any = useState([
    {
      id: "0",
      title: "전체",
      color: colorSet.none,
    },
    {
      id: "1",
      title: "VIP",
      color: colorSet.red,
    },
    {
      id: "2",
      title: "Gold",
      color: colorSet.yellow,
    },
    {
      id: "3",
      title: "Silver",
      color: colorSet.grey,
    },
    {
      id: "4",
      title: "Bronze",
      color: colorSet.orange,
    },
    {
      id: "5",
      title: "Family",
      color: colorSet.blue,
    },
  ]);
  const [currentTreeData, setCurrentTreeData] = useState({
    id: "0",
    title: "전체",
  });
  const [member, setMember]: any = useState([]); //구성원, 혜택 데이터
  const [checkedItem, setCheckedItem]: any = useState([]);
  const [sideBarChecked, setSideBarChecked]: any = useState([]); //side bar 체크박스 관리
  const sideBarData = [{ name: "Carroll Inc(VIP)", id: 1 }];
  function checkHandler(checked: Boolean, id: Number) {
    if (sideOpen) {
      if (checked == true) {
        setSideBarChecked([...sideBarChecked, id]);
      } else {
        setSideBarChecked(sideBarChecked.filter((i: number) => i != id));
      }
    } else {
      if (checked == true) {
        setCheckedItem([...checkedItem, id]);
      } else {
        setCheckedItem(checkedItem.filter((i: number) => i != id));
      }
    }
  }
  function checkAllHandler(checked: Boolean) {
    if (sideOpen) {
      if (checked) {
        const ids: Number[] = [];
        sideBarData.forEach((i: any) => ids.push(i.id));
        setSideBarChecked(ids);
      } else {
        setCheckedItem([]);
      }
    } else {
      if (checked) {
        const ids: Number[] = [];
        customerData.forEach((i: any) => ids.push(i.id));
        setCheckedItem(ids);
      } else {
        setCheckedItem([]);
      }
    }
  }
  const [isCreate, setIsCreate] = useState(false);
  const ContentTree = (props: any) => {
    const [inputVal, setInputVal] = useState("");

    const Select = (props: any) => {
      const Color = () => {
        return (
          <div
            style={{
              display: "flex",
              background: "none",
              position: "relative",
              overflow: "visible",
            }}
          >
            <div
              style={{
                display: "flex",
                background: "none",
                position: "relative",
              }}
            >
              색상 바꾸기
              <svg
                style={{ position: "absolute", left: 105, top: 4 }}
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.744241 11.2438C1.06968 11.5692 1.59731 11.5692 1.92275 11.2438L6.6367 6.5298L6.6368 6.52971C6.96223 6.20427 6.96223 5.67663 6.6368 5.3512C6.6332 5.3476 6.62958 5.34404 6.62593 5.34052L1.92266 0.637248C1.59722 0.311811 1.06958 0.311811 0.744145 0.637248C0.418708 0.962685 0.418707 1.49032 0.744144 1.81576L4.86893 5.94055L0.744241 10.0652C0.418804 10.3907 0.418804 10.9183 0.744241 11.2438Z"
                  fill="#838181"
                />
              </svg>
              <ul
                style={{
                  position: "absolute",
                  left: 130,
                  top: -5,
                  width: 140,
                  border: "1px solid #257CFF",
                  borderRadius: 3,
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  overflow: "hidden",
                  padding: 4,
                }}
              >
                {colorName.map((x) => (
                  <Li
                    onClick={() => {
                      const index = treeItems.findIndex(
                        (i: any) => i.id === props.id
                      );
                      let copy = [...treeItems];
                      if (index != -1) {
                        copy[index].color = x.style;
                        setTreeItems(copy);
                      }
                    }}
                  >
                    <ClassStyle
                      style={Object.assign(
                        {
                          height: 25,
                        },
                        x.style
                      )}
                    >
                      {x.name}
                    </ClassStyle>
                  </Li>
                ))}
              </ul>
            </div>
          </div>
        );
      };
      return (
        <>
          <SelectBox
            items={[<Color />, "수정", "삭제"]}
            placeholder="설정"
            style={{ width: 140, overflow: "visible" }}
            isOpen
          />
        </>
      );
    };
    return (
      <Wrapper style={{ ...props.style }}>
        <TitleWrapper>
          <span>{props.title}</span>
        </TitleWrapper>
        {props.search ? (
          <div style={{ marginBottom: "10px", marginLeft: "10px" }}>
            <HcSearchTextField
              name="name"
              value={inputVal}
              placeholder={props.placeholder ? props.placeholder : ""}
              style={{ width: "276px", height: "36px" }}
              onChange={(e) => {
                const lengthOfInputValue = inputVal.split("").length;

                if (lengthOfInputValue !== 10)
                  setInputVal(e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputVal.trim() !== "") {
                }
              }}
            />
          </div>
        ) : null}

        <Ul style={{ padding: 0, overflow: "visible" }}>
          {treeItems.map((item: any) => (
            <li
              style={{
                background:
                  String(item.id) === String(props.currentData.id)
                    ? "#EFF5FF"
                    : "#ffff",
                padding: "0px 6px 0px 10px",
                borderRadius: "2px",
                overflow: "visible",
              }}
            >
              <div
                className="inner_wrapperr"
                style={{
                  marginBottom: 6,
                  borderBottom: "1px solid #D9D9D9",
                  padding: "7px 0px 7px 30px",
                  position: "relative",
                  overflow: "visible",
                }}
                onClick={() => {
                  props.setcurrentData({ id: item.id, title: item.title });
                }}
              >
                <TreeIcon style={{ position: "absolute", left: 0, top: 10 }} />
                <div
                  className="inner_content"
                  style={Object.assign(
                    {
                      height: 25,
                      width: "fit-content",
                      padding: "3px 6px",
                      borderRadius: "2px",
                      fontSize: 13,
                      fontWeight: 700,
                    },
                    item.color
                  )}
                >
                  {item.title}

                  <TreeDotBtn>
                    <Select id={item.id} />
                  </TreeDotBtn>
                </div>
              </div>
            </li>
          ))}
        </Ul>
      </Wrapper>
    );
  };

  return (
    <>
      {" "}
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="고객 등급" isBackIcon={false} />
        <div style={{ marginTop: "39px" }}>
          <HcTabsAdv
            items={[
              { to: "1", name: "개인 고객 등급(00)" },
              { to: "2", name: "기업고객 등급(00)" },
            ]}
            size="normal"
            TabNumber={Tabs}
            SetTabNumber={setTabs}
          />
          {
            {
              "1": (
                <>
                  <div style={{ display: "flex", marginTop: 24 }}>
                    <ContentTree
                      items={treeItems}
                      setItems={setTreeItems}
                      title="개인 고객 등급"
                      search={true}
                      style={{ minHeight: "832px", marginRight: 24 }}
                      currentData={currentTreeData}
                      setcurrentData={setCurrentTreeData}
                      placeholder="검색"
                      innerStyle={{
                        position: "absolute",
                        top: 7,
                        borderRadius: "2px",
                        height: 25,
                        padding: "3px 6px",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    />

                    <div style={{ display: isCreate ? "none" : "" }}>
                      <div style={{ display: "flex" }}>
                        <HcButton
                          styles="line"
                          size="medium"
                          style={{
                            marginRight: checkedItem.length === 1 ? 0 : 721,
                          }}
                          onClick={() => {
                            setIsCreate(true);
                          }}
                        >
                          새 등급 생성
                        </HcButton>
                        <ListWrapper
                          style={{
                            marginLeft: 10,
                            marginRight: 615,
                            display: checkedItem.length === 1 ? "" : "none",
                          }}
                        >
                          <HcButton styles="line" size="medium">
                            등급 이동
                          </HcButton>
                          <List className="tooltip">
                            {" "}
                            {treeItems
                              .slice(1)
                              .reverse()
                              .map((x: any) => (
                                <div
                                  style={{
                                    height: 42,
                                    padding: "5px  8px 12px  8px",
                                    background: "#fffff",
                                  }}
                                >
                                  <ClassStyle
                                    onClick={() => {
                                      const index = checkedItem[0];
                                      let copy = [...customerData];
                                      if (index != -1) {
                                        copy[index - 1].class = x.title;
                                        setCustomerData(copy);
                                      }
                                    }}
                                    style={Object.assign(
                                      {
                                        height: 25,
                                      },
                                      x.color
                                    )}
                                  >
                                    {x.title}
                                  </ClassStyle>
                                </div>
                              ))}
                          </List>
                        </ListWrapper>
                        <TableSetting />
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <HcTableContainer
                          style={{ minHeight: "unset", width: "984x" }}
                        >
                          <HcTable>
                            <thead
                              style={{
                                tableLayout: "fixed",
                              }}
                            >
                              <tr>
                                <th
                                  style={{
                                    width: "46px",
                                  }}
                                >
                                  <div
                                    style={{
                                      paddingTop: 4,
                                    }}
                                  >
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

                                <th
                                  style={{
                                    width: "220px",
                                  }}
                                >
                                  고객 이름
                                </th>
                                <th
                                  style={{
                                    width: "150px",
                                  }}
                                >
                                  등급
                                </th>
                                <th
                                  style={{
                                    width: "150px",
                                    textAlign: "center",
                                  }}
                                >
                                  구매 금액
                                </th>
                                <th
                                  style={{
                                    width: "150px",
                                    textAlign: "center",
                                  }}
                                >
                                  포인트
                                </th>
                                <th style={{ width: "148px" }}>
                                  등급 부여 일자
                                </th>
                                <th style={{ width: "120px" }}>-</th>
                              </tr>
                            </thead>
                            <tbody>
                              {customerData.map((item: any) => (
                                <tr onClick={() => {}}>
                                  <td
                                    style={{ position: "relative" }}
                                    onClick={(e: any) => {
                                      e.stopPropagation();
                                    }}
                                  >
                                    <div style={{}}>
                                      <HcCheckBox
                                        checked={checkedItem.includes(item.id)}
                                        onChange={(e) => {
                                          checkHandler(
                                            e.target.checked,
                                            item.id
                                          );
                                        }}
                                      />
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: 10,
                                        left: 12,
                                        display: "flex",
                                      }}
                                    >
                                      {" "}
                                      <a
                                        href=""
                                        style={{
                                          color: "#257CFF",
                                          lineHeight: "26px",
                                          marginRight: "6px",
                                        }}
                                      >
                                        {item.name}
                                        {item.id}
                                      </a>
                                      <div
                                        style={{
                                          background: "#EDEDED",
                                          borderRadius: "2px",
                                          fontSize: "13px",
                                          color: "#838181",
                                          height: "26px",
                                          display: "flex",
                                          fontWeight: 700,
                                          padding: "3px 6px 3px 6px",
                                        }}
                                      >
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{ marginRight: 6 }}
                                        >
                                          <path
                                            d="M16.1299 6.41024C16.1299 7.68778 15.0809 8.73714 13.7698 8.73714C12.4587 8.73714 11.4097 7.68778 11.4097 6.41024C11.4097 5.1327 12.4587 4.08334 13.7698 4.08334C15.0809 4.08334 16.1299 5.1327 16.1299 6.41024Z"
                                            stroke="#838181"
                                            stroke-width="1.5"
                                          />
                                          <path
                                            d="M9.62317 15.8334V12.5128C9.62317 11.4082 10.5186 10.5128 11.6232 10.5128H15.9168C17.0214 10.5128 17.9168 11.4082 17.9168 12.5128V15.8334"
                                            stroke="#838181"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M8.59029 6.41024C8.59029 7.68778 7.54125 8.73714 6.23018 8.73714C4.9191 8.73714 3.87006 7.68778 3.87006 6.41024C3.87006 5.1327 4.9191 4.08334 6.23018 4.08334C7.54125 4.08334 8.59029 5.1327 8.59029 6.41024Z"
                                            stroke="#838181"
                                            stroke-width="1.5"
                                          />
                                          <path
                                            d="M2.08331 15.8334V12.5128C2.08331 11.4082 2.97874 10.5128 4.08331 10.5128H7.73808"
                                            stroke="#838181"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                          />
                                        </svg>
                                        개인
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: 9,
                                        left: 12,
                                        display: "flex",
                                      }}
                                    >
                                      <ClassStyle
                                        style={Object.assign(
                                          { height: "29px", margin: 0 },
                                          treeItems[
                                            treeItems.findIndex(
                                              (i: any) => i.title === item.class
                                            )
                                          ].color
                                        )}
                                      >
                                        {item.class}
                                      </ClassStyle>
                                    </div>
                                  </td>
                                  <td style={{ textAlign: "right" }}>
                                    {item.purchase}원
                                  </td>
                                  <td style={{ textAlign: "right" }}>
                                    {item.point}점
                                  </td>
                                  <td>{item.update}</td>
                                  <td>
                                    <TableActionBtn />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </HcTable>
                        </HcTableContainer>
                      </div>
                    </div>
                    <CreateWrapper
                      style={{ display: isCreate ? "block" : "none" }}
                    >
                      <TextField
                        value="새 등급"
                        style={{
                          width: 284,
                          height: 60,
                          fontSize: 24,
                          fontWeight: 500,
                        }}
                      />
                      <div
                        style={{ margin: "20px 0px 20px 0px", display: "flex" }}
                      >
                        <HcTextField
                          titleName="설명"
                          style={{ width: 284, marginRight: 42 }}
                          value=""
                        />
                        <HcTextField
                          titleName="생성자"
                          style={{ width: 284, marginRight: 42 }}
                          value="홍길동"
                          disabled
                        />
                        <HcTextField
                          titleName="생성일자"
                          style={{ width: 284 }}
                          value="2022.01.04"
                          disabled
                        />
                      </div>
                      <div
                        style={{ margin: "20px 0px 40px 0px", display: "flex" }}
                      >
                        <HcTextField
                          titleName="등급부여 최소 구매 금액"
                          style={{ width: 284, marginRight: 42 }}
                          value=""
                        />
                        <HcTextField
                          titleName="등급부여 최소 포인트"
                          style={{ width: 284, marginRight: 42 }}
                          value=""
                        />
                        <HcTextField
                          titleName="등급유효 최대기간"
                          style={{ width: 284 }}
                          value=""
                        />
                      </div>
                      <SubHeading titleName={`구성원(${0})`} />
                      <div
                        style={{ display: "flex", margin: "18px 0px 12px 0px" }}
                      >
                        <HcButton
                          size="medium"
                          styles="secondary"
                          style={{ marginRight: 715 }}
                          onClick={() => {
                            setSideOpen(true);
                          }}
                        >
                          +추가
                        </HcButton>
                        <TableSetting />
                      </div>
                      <HcTableContainer style={{ width: 936, minHeight: 352 }}>
                        <HcTable>
                          <thead>
                            <tr>
                              <th style={{ width: 46 }}></th>
                              <th style={{ width: 192 }}>고객 이름</th>
                              <th style={{ width: 192 }}>구매 금액</th>
                              <th style={{ width: 192 }}>포인트</th>
                              <th style={{ width: 194 }}>등급 부여 일자</th>
                              <th style={{ width: 120 }}>-</th>
                            </tr>
                          </thead>
                          <tbody>
                            {member.length > 0 ? (
                              member.map((i: any) => (
                                <tr>
                                  <td></td>
                                  <td>이름</td>
                                  <td>100000원</td>
                                  <td>100000포인트</td>
                                  <td>2020.01.01</td>
                                  <td>
                                    <TableActionBtn />
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <NullTbody colspan={6} style={{ height: 320 }} />
                            )}
                          </tbody>
                        </HcTable>
                      </HcTableContainer>
                      <SubHeading
                        titleName={`혜택(${0})`}
                        style={{ marginTop: 40 }}
                      />
                      <div
                        style={{ display: "flex", margin: "18px 0px 12px 0px" }}
                      >
                        <HcButton
                          size="medium"
                          styles="secondary"
                          style={{ marginRight: 715 }}
                        >
                          +추가
                        </HcButton>
                        <TableSetting />
                      </div>
                      <HcTableContainer style={{ width: 936, minHeight: 352 }}>
                        <HcTable>
                          <thead>
                            <tr>
                              <th style={{ width: 46 }}></th>
                              <th style={{ width: 192 }}>고객 이름</th>
                              <th style={{ width: 192 }}>구매 금액</th>
                              <th style={{ width: 192 }}>포인트</th>
                              <th style={{ width: 194 }}>등급 부여 일자</th>
                              <th style={{ width: 120 }}>-</th>
                            </tr>
                          </thead>
                          <tbody>
                            <NullTbody colspan={6} style={{ height: 320 }} />
                          </tbody>
                        </HcTable>
                      </HcTableContainer>
                    </CreateWrapper>
                  </div>
                </>
              ),
              "2": <></>,
            }[Tabs]
          }
        </div>
      </ComponentWrapper>{" "}
      <HcBottomBar open={barOpen && isCreate} style={{ width: 1400 }}>
        <div>
          <HcButton
            onClick={() => {
              setIsCreate(false);
            }}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            생성
          </HcButton>
          <HcButton
            onClick={() => {
              setbarOpen(false);
              setIsCreate(false);
            }}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            삭제
          </HcButton>
        </div>
      </HcBottomBar>
      <SideBar
        header={"구성원 추가"}
        open={sideOpen}
        close={() => {
          setSideOpen(false);
        }}
        style={{ display: "block" }}
        addFunc={() => {
          if (sideBarChecked.length > 0) {
            setMember([
              ...member,
              sideBarData.filter((i) => sideBarChecked.includes(i.id)),
            ]);
            setSideBarChecked([]);
            setSideOpen(false);
          }
        }}
      >
        <div style={{ display: "flex" }}>
          <SelectBox
            state={customerSelect}
            setState={setCustomerSelect}
            placeholder={"고객 선택"}
            items={["기업 고객", "개인 고객"]}
            style={{ width: 190, marginRight: 8 }}
          />
          <TextField placeholder="고객 검색" style={{ width: 276 }} />
        </div>
        <svg
          style={{ position: "absolute", top: 5, right: 0 }}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" rx="3" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.2869 8.18777C19.5384 10.8591 19.198 14.8499 16.5266 17.1013C13.8552 19.3528 9.86451 19.0124 7.61305 16.341C5.36159 13.6697 5.70199 9.67893 8.37336 7.42747C11.0447 5.17601 15.0355 5.51641 17.2869 8.18777ZM18.4159 17.8618C21.2216 14.8787 21.4079 10.2004 18.7046 6.9929C15.7933 3.53855 10.6328 3.09838 7.17848 6.00975C3.72413 8.92112 3.28396 14.0816 6.19533 17.5359C8.8074 20.6351 13.2299 21.3081 16.6063 19.3111L21.2035 24.7656C21.6159 25.2549 22.347 25.3173 22.8364 24.9049C23.3257 24.4924 23.3881 23.7614 22.9756 23.272L18.4159 17.8618Z"
            fill="#5D5D62"
          />
        </svg>{" "}
        <div
          style={{
            display: "flex",
            width: 514,
            color: "#4D4D4D",
            fontSize: "14px",
            height: 24,
            marginTop: 20,
          }}
        >
          총
          <div
            style={{
              color: "#000000",
              fontSize: "16px",
              fontWeight: 600,
              marginLeft: 3,
            }}
          >
            305
          </div>
          개
          <div style={{ marginLeft: 360, display: "flex" }}>
            전체 선택
            <div style={{ paddingTop: 2, marginLeft: 10 }}>
              <HcCheckBox
                checked={sideBarChecked.length > 0 ? true : false}
                onChange={(e) => checkAllHandler(e.target.checked)}
              />
            </div>
          </div>
        </div>
        <SideBarInnerContainer>
          {sideBarData.map((item) => (
            <SideBarItem checked={sideBarChecked.includes(item.id)}>
              {item.name}{" "}
              <HcCheckBox
                className="checkbox"
                onChange={(e) => {
                  checkHandler(e.target.checked, item.id);
                }}
                checked={sideBarChecked.includes(item.id)}
              />
            </SideBarItem>
          ))}
        </SideBarInnerContainer>
      </SideBar>
    </>
  );
}
