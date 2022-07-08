import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import "common/Table.css";
import { HcTitleTextField } from "common/HcTextField";
import HcButton, { HcViewModeButton } from "common/HcButton";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import { ReactComponent as DropDownIcon } from "resources/images/dropDown_icon.svg";
import { useCounter } from "router/Root";
import HcCheckBox from "common/HcCheckBox";
import { ReactComponent as ListArrowIcon } from "resources/images/List_Arrow_Icon.svg";

const TableContainer = styled.div`
  width: 100%;
  min-height: 674px;
  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background: none;

    position: absolute;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #f5f5f5;
    display: none;
    &:hover {
      display: inline;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }
  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
`;

const DropDownIconWrapper = styled.div<{ menuOpen?: boolean }>`
  float: right;
  cursor: pointer;
  position: relative;

  svg {
    rect {
      fill: inherit;
    }
  }

  &:hover {
    svg {
      background: #cecece;
      border-radius: 2px;
      rect {
        fill: #cecece;
      }
    }
  }

  ${(props) =>
    props.menuOpen
      ? `svg {
    background: #cecece;
    border-radius: 2px;
    rect {
      fill: #cecece;
    }
  }`
      : ""};
`;

const HcDropDownMenu = styled("ul")`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  position: absolute;
  //display: none;
  width: 188px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: -12px;
  margin-left: -177px;
`;

const HcDropDownItem = styled("li")`
  padding: 11px;
  color: #3c3c3c;
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  height: 42px;
  line-height: 21px;

  &:hover {
    background: #eff5ff;
  }
`;

const StepWrapper = styled.div`
  height: 29px;
  background: #F4F4F4;
border-radius: 2px;
padding 4px;
display: inline-flex;
align-items: center;
width: fit-content;
`;

const StepColorBox = styled.div<{ step: number }>`
  width: 12px;
  height: 12px;
  border-radius: 1px;
  background: ${(props) => {
    switch (props.step) {
      case 1:
        return "#99D0B2";
      case 2:
        return "#A1DDE1";
      case 3:
        return "#5AC4CB";
      case 4:
        return "#5799FB";
      case 5:
        return "#257CFF";
      case 6:
        return "#8080B2";
      default:
        return "";
    }
  }};
  display: inline-block;
  margin-right: 4px;
`;

const StepTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
  color: #5d5d62;
  width: max-content;
`;

const ListWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 6px;
  width: 100%;
  height: 353px;
  margin-bottom: 24px;
  padding: 20px 24px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const ListTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #303030;
`;

const ListModeStepWrapper = styled.div`
  width: 120px;
  height: 46px;
  background: #f4f4f4;
  border-radius: 4px;
  margin-right: 10px;
  margin-left: 10px;
  display: inline-block;
  text-align: center;
  line-height: 46px;

  &:first-child {
    margin-left: 0px;
  }
`;

const StyledArrow = styled(ListArrowIcon)<{ color: string }>`
  path {
    fill: ${(props) => props.color};
  }
`;

const ListModeStepBox = styled.div<{ step: number }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => {
    switch (props.step) {
      case 1:
        return "#99D0B2";
      case 2:
        return "#A1DDE1";
      case 3:
        return "#5AC4CB";
      case 4:
        return "#5799FB";
      case 5:
        return "#257CFF";
      case 6:
        return "#8080B2";
      default:
        return "#CECECE";
    }
  }};
`;

const ListModeStepTitle = styled.div<{ color: string }>`
  display: inline-block;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.color};
  margin-left: 6px;
  line-height: initial;
`;

const data = [
  {
    name: "네이버페이 영업용 PC 구매",
    step: 1,
    progress: 10,
    customer: "네이버페이",
    contact: "홍길동",
    salesExpected: 12000000,
    dateStart: "2022.01.01",
    dateEnd: "2022.04.01",
    product: "2019 아이맥 27인치",
    manager: "홍길동",
  },
  {
    name: "에듀홈 영업용 PC 구매",
    step: 2,
    progress: 30,
    customer: "에듀홈",
    contact: "홍길동",
    salesExpected: 12000000,
    dateStart: "2022.01.01",
    dateEnd: "2022.04.01",
    product: "2019 아이맥 27인치",
    manager: "홍길동",
  },
  {
    name: "에듀홈 영업용 PC 구매",
    step: 6,
    progress: 50,
    customer: "에듀홈",
    contact: "홍길동",
    salesExpected: 12000000,
    dateStart: "2022.01.01",
    dateEnd: "2022.04.01",
    product: "2019 아이맥 27인치",
    manager: "홍길동",
  },
];

const SalesPlanning = () => {
  const myCounter = useCounter();
  myCounter.myTitle = "영업 기회";

  const [viewState, setViewState] = React.useState(false);

  const changeViewState = () => {
    setViewState(!viewState);
  };

  const DropDown = (props: any) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
      <>
        <DropDownIconWrapper
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        >
          <DropDownIcon />
          {menuOpen === true ? (
            <HcDropDownMenu>
              {props.menu.map((item: any) => (
                <HcDropDownItem>{item.title}</HcDropDownItem>
              ))}
            </HcDropDownMenu>
          ) : (
            <></>
          )}
        </DropDownIconWrapper>
      </>
    );
  };

  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
        <div style={{ display: "block", width: "inherit" }}>
          <div style={{ marginTop: "16px" }}>
            <HcTitleTextField
              titleName="영업기회(7, 총 34,000,000)"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div
              style={{
                display: "inline-block",
                float: "right",
                marginBottom: "20px",
              }}
            >
              <HcViewModeButton state={viewState} setState={changeViewState} />
            </div>

            <div
              className="table_area"
              style={{ marginTop: "37px", width: "inherit" }}
            >
              <div
                style={{
                  marginBottom: "20px",
                  width: "inherit",
                }}
              >
                <HcButton onClick={() => {}} styles="secondary" size="medium">
                  + 생성
                </HcButton>
                <div style={{ display: "inline-block", float: "right" }}></div>
              </div>
              {viewState ? (
                <div style={{ width: "100%" }}>
                  {data.map((item) => (
                    <ListWrapper>
                      <ListTitle>{"[진행중] " + item.name}</ListTitle>
                      <div
                        style={{
                          margin: "28px 6px 31px 6px",
                          borderBottom: "1px solid #D9D9D9",
                          width: "100%",
                          height: "106px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "30px",
                        }}
                      >
                        <ListModeStepWrapper>
                          <ListModeStepBox step={item.step >= 1 ? 1 : 0} />
                          <ListModeStepTitle
                            color={item.step >= 1 ? "#2D2D31" : "#CECECE"}
                          >
                            기회 인지
                          </ListModeStepTitle>
                        </ListModeStepWrapper>
                        <StyledArrow
                          color={item.step < 2 ? "#CECECE" : "#A1DDE1"}
                        />
                        <ListModeStepWrapper>
                          <ListModeStepBox step={item.step >= 2 ? 2 : 0} />
                          <ListModeStepTitle
                            color={item.step >= 2 ? "#2D2D31" : "#CECECE"}
                          >
                            제품 소개
                          </ListModeStepTitle>
                        </ListModeStepWrapper>
                        <StyledArrow
                          color={item.step < 3 ? "#CECECE" : "#5AC4CB"}
                        />
                        <ListModeStepWrapper>
                          <ListModeStepBox step={item.step >= 3 ? 3 : 0} />
                          <ListModeStepTitle
                            color={item.step >= 3 ? "#2D2D31" : "#CECECE"}
                          >
                            견적
                          </ListModeStepTitle>
                        </ListModeStepWrapper>
                        <StyledArrow
                          color={item.step < 4 ? "#CECECE" : "#5799FB"}
                        />
                        <ListModeStepWrapper>
                          <ListModeStepBox step={item.step >= 4 ? 4 : 0} />
                          <ListModeStepTitle
                            color={item.step >= 4 ? "#2D2D31" : "#CECECE"}
                          >
                            재견적
                          </ListModeStepTitle>
                        </ListModeStepWrapper>
                        <StyledArrow
                          color={item.step < 5 ? "#CECECE" : "#257CFF"}
                        />
                        <ListModeStepWrapper>
                          <ListModeStepBox step={item.step >= 5 ? 5 : 0} />
                          <ListModeStepTitle
                            color={item.step >= 5 ? "#2D2D31" : "#CECECE"}
                          >
                            협상
                          </ListModeStepTitle>
                        </ListModeStepWrapper>
                        <StyledArrow
                          color={item.step < 6 ? "#CECECE" : "#8080B2"}
                        />
                        <ListModeStepWrapper>
                          <ListModeStepBox step={item.step >= 6 ? 6 : 0} />
                          <ListModeStepTitle
                            color={item.step >= 6 ? "#2D2D31" : "#CECECE"}
                          >
                            계약
                          </ListModeStepTitle>
                        </ListModeStepWrapper>
                      </div>
                    </ListWrapper>
                  ))}
                </div>
              ) : (
                <TableContainer>
                  <table className="table table-hover">
                    <thead
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                      }}
                    >
                      <tr>
                        <th style={{ width: "46px", textAlign: "center" }}>
                          <div style={{ paddingTop: 7 }}>
                            <HcCheckBox checked={false} onChange={(e) => {}} />
                          </div>
                        </th>
                        <th style={{ width: "200px" }}>{"이름"}</th>
                        <th style={{ width: "100px" }}>{"단계"}</th>
                        <th style={{ width: "120px" }}>{"진행률"}</th>
                        <th style={{ width: "120px" }}>{"기업고객"}</th>
                        <th style={{ width: "120px" }}>{"기업컨택포인트"}</th>
                        <th style={{ width: "120px" }}>{"예상매출"}</th>
                        <th style={{ width: "200px" }}>{"진행기간"}</th>
                        <th style={{ width: "174px" }}>{"상품"}</th>
                        <th style={{ width: "120px" }}>{"담당자"}</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        display: "block",
                        height: 598,
                        overflow: "auto",
                      }}
                    >
                      {data.map((item) => (
                        <tr
                          style={{
                            display: "table",
                            width: "100%",
                            tableLayout: "fixed",
                          }}
                        >
                          <td style={{ width: 46, textAlign: "center" }}>
                            <HcCheckBox checked={false} onChange={(e) => {}} />
                          </td>
                          <td style={{ width: 200 }}>{item.name}</td>
                          <td style={{ width: 100 }}>
                            <StepWrapper>
                              <StepColorBox step={item.step} />
                              <StepTitle>
                                {
                                  {
                                    1: "기회 인지",
                                    2: "상품 소개",
                                    3: "견적",
                                    4: "재견적",
                                    5: "협상",
                                    6: "계약",
                                  }[item.step]
                                }
                              </StepTitle>
                            </StepWrapper>
                          </td>
                          <td style={{ width: 120 }}>{item.progress}%</td>
                          <td style={{ width: 120 }}>{item.customer}</td>
                          <td style={{ width: 120 }}>{item.contact}</td>
                          <td style={{ width: 120 }}>{item.salesExpected}</td>
                          <td style={{ width: 200 }}>
                            {item.dateStart} ~ {item.dateEnd}
                          </td>
                          <td style={{ width: 174 }}>{item.product}</td>
                          <td style={{ width: 120 }}>
                            {item.manager}

                            <DropDown
                              menu={[
                                { title: "영업활동 생성" },
                                { title: "견적 생성" },
                                { title: "계약 생성" },
                                { title: "매출 생성" },
                                { title: "복제" },
                                { title: "수정" },
                                { title: "삭제" },
                              ]}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableContainer>
              )}
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default SalesPlanning;
