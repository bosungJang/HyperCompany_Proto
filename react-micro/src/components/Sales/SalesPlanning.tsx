import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import "common/Table.css";
import HcTextField, {
  HcTitleTextField,
  Wrapper,
  Title,
  HcSearchTextField,
  TextField,
  HcSelect,
  HcTextFieldLabel,
  StyledSelect,
} from "common/HcTextField";
import HcButton, { HcViewModeButton } from "common/HcButton";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import { ReactComponent as DropDownIcon } from "resources/images/dropDown_icon.svg";
import { useCounter } from "router/Root";
import HcCheckBox from "common/HcCheckBox";
import { ReactComponent as ListArrowIcon } from "resources/images/List_Arrow_Icon.svg";
import { VariableMultiLayout } from "common/HcCommonLayout";
import { ReactComponent as ArrowIcon } from "resources/images/RevenueDetailArrow_Icon.svg";
import HcFileUploader from "common/HcFileUploader";
import { ReactComponent as NoDataIcon } from "resources/images/No_Table_Data_Icon.svg";
import { ReactComponent as CloseIcon } from "resources/images/Close_Icon_White.svg";
import { ReactComponent as ListIcon } from "resources/images/List_Icon.svg";
import { HcDateRangePicker } from "common/HcDatePicker";

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
  z-index: 1;
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
  position: relative;

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

const PercetageLabel = styled.label`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #5d5d62;
`;

const PercentageNum = styled.div`
  display: inline-block;
  margin-left: 20px;
  position: relative;

  label {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #000000;
    position: relative;
    z-index: 1;
  }

  div {
    width: 100%;
    height: 12px;
    background: #ffe49d;
    position: absolute;
    bottom: 0px;
  }
`;

const ListViewTag = styled.div`
background: #F4F4F4;
border-radius: 2px;
width: fit-content;
display: inline-block;
height: 32px;
padding 4px 6px;
margin-right: 8px;

&:last-child {
  margin-right: 0px;
}

font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #838181;
`;

const StyledWrapper = styled.div<{ expand: boolean }>`
  transition: all 0.5s ease;
  overflow: hidden;
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 20px 24px;
  position: relative;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0px;
  }

  ${(props) =>
    props.expand === false
      ? `max-height: 68px; 
      .arrow_wrapper {
       svg{
    transform: rotate(90deg);
    transition: all 0.5s ease;
  }
  }`
      : `max-height: 900px;  
      .arrow_wrapper {
      svg{
    transform: rotate(270deg);
    transition: all 0.5s ease;
      }
  }`}
`;

const ApprovalWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px 10px;
`;

const ApprovalContent = styled.div`
  background: #f9f9f9;
  border-radius: 4px;
  //padding: 13px;
  height: 50px;
  margin-bottom: 6px;
  &: last-child {
    margin-bottom: 0;
  }
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 15px;
  font-family: Noto Sans KR;
  color: #5d5d62;
`;

const data = [
  {
    id: "1abc",
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
    id: "1abcd",
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
    id: "2abc",
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

const approvalLineData = [
  { state: "기안", name: "홍길동", position: "연구원", department: "AB2-4팀" },
  {
    state: "결재",
    name: "곱단이",
    position: "연구원(팀장)",
    department: "AB2-4팀",
  },
  {
    state: "합의(승인부서)",
    name: "차돌바위",
    position: "매니저",
    department: "인사팀",
  },
  {
    state: "결재(승인부서)",
    name: "호피",
    position: "매니저",
    department: "인사팀",
  },
];

interface MatchParams {
  id: string;
}

const SalesPlanning = ({ match }: RouteComponentProps<MatchParams>) => {
  const myCounter = useCounter();
  myCounter.myTitle = "영업 기회";

  const history = useHistory();

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
          style={props.style}
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

  const GeneralState = () => {
    return (
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
            <HcButton
              onClick={() => {
                history.push(`${match.url}/add`);
              }}
              styles="secondary"
              size="medium"
            >
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

                    <div style={{ marginLeft: "54px" }}>
                      <PercetageLabel>성공 확률</PercetageLabel>
                      <PercentageNum>
                        <label>{item.progress}%</label> <div></div>
                      </PercentageNum>
                    </div>
                  </div>
                  <div>
                    <div>
                      <ListViewTag>{item.customer}</ListViewTag>
                      <ListViewTag>{item.contact}</ListViewTag>
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <ListViewTag>{item.salesExpected}</ListViewTag>
                      <ListViewTag>
                        {item.dateStart} ~ {item.dateEnd}
                      </ListViewTag>
                      <ListViewTag>{item.manager}</ListViewTag>
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <ListViewTag>{item.product}</ListViewTag>
                    </div>
                  </div>
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
                    style={{ top: 22, right: 20, position: "absolute" }}
                  />
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
                      onClick={() => {
                        history.push({
                          pathname: `${match.url}/detail?id=${item.id}`,
                          state: { id: item.id },
                        });
                        alert(item);
                      }}
                    >
                      <td
                        style={{ width: 46, textAlign: "center" }}
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
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
    );
  };

  const CreateState = () => {
    const [inputVal, setInputVal] = React.useState("");
    const [file, setFile]: any = React.useState([]);
    const [productList, setProductList] = React.useState([]);
    const [enterpriseList, setEnterpriseList] = React.useState([]);
    const [supporterList, setSupporterList] = React.useState([]);

    const [approvalLineDatas, setApprovalLineDatas]: any =
      React.useState(approvalLineData);

    const DropDownList = (props: any) => {
      const [rowExpand, setRowExpand] = React.useState(true);
      return (
        <StyledWrapper expand={rowExpand}>
          <ListTitle>{props.title}</ListTitle>
          <div className="arrow_wrapper">
            <ArrowIcon
              onClick={() => {
                setRowExpand(!rowExpand);
              }}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: 20,
                right: 22,
              }}
            />
          </div>
          {props.children}
        </StyledWrapper>
      );
    };

    return (
      <div style={{ marginTop: "16px" }}>
        <HcTitleTextField
          titleName="영업기회 생성"
          isBackIcon={true}
          style={{ display: "inline-block" }}
        />
        <div style={{ marginTop: "37px", width: "inherit" }}>
          <ListWrapper style={{ height: "229px" }}>
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
              style={{ top: 22, right: 20, position: "absolute" }}
            />
            <ListTitle>기본 정보</ListTitle>
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                marginTop: "28px",
              }}
            >
              <VariableMultiLayout>
                <p
                  style={{
                    flexGrow: 1,
                    marginBlockStart: 0,
                    marginRight: "60px",
                  }}
                >
                  <TextField
                    placeholder="영업 기회 이름 입력"
                    style={{ marginBottom: "20px", width: "360px" }}
                  />
                  <HcSearchTextField
                    titleName="기업고객"
                    name="name"
                    value={inputVal}
                    placeholder="고객 조회"
                    onChange={(e) => {
                      const lengthOfInputValue = inputVal.split("").length;

                      if (lengthOfInputValue !== 10)
                        setInputVal(e.currentTarget.value);
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        inputVal.trim() !== "" /*&& props.tags.length < 4 */
                      ) {
                        setInputVal("");
                      }
                    }}
                    required
                    style={{ width: "360px" }}
                  />
                </p>
                <p
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "end",
                    marginRight: "60px",
                  }}
                >
                  <HcSearchTextField
                    titleName="기업컨택포인트"
                    name="name"
                    value={inputVal}
                    placeholder="고객 조회"
                    onChange={(e) => {
                      const lengthOfInputValue = inputVal.split("").length;

                      if (lengthOfInputValue !== 10)
                        setInputVal(e.currentTarget.value);
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        inputVal.trim() !== "" /*&& props.tags.length < 4 */
                      ) {
                        setInputVal("");
                      }
                    }}
                    required
                    style={{ width: "360px" }}
                  />
                </p>
                <p style={{ flexGrow: 1, display: "flex", alignItems: "end" }}>
                  <HcSelect
                    onChange={(e) => {}}
                    titleName="진행상태"
                    name={""}
                    style={{ width: "360px" }}
                  >
                    <option value="" hidden>
                      진행 상태 선택
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </HcSelect>
                </p>
              </VariableMultiLayout>
            </div>
          </ListWrapper>
          <DropDownList title="예상 정보">
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                marginTop: "28px",
              }}
            >
              <VariableMultiLayout>
                <p
                  style={{
                    flexGrow: 1,
                    marginBlockStart: 0,
                    marginRight: "60px",
                  }}
                >
                  <HcTextFieldLabel
                    titleName="예상 매출"
                    name="name"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "360px" }}
                  ></HcTextFieldLabel>
                </p>
                <p
                  style={{
                    flexGrow: 1,
                    marginBlockStart: 0,
                    marginRight: "60px",
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <HcTextField
                    titleName="예상 이익률"
                    name="name"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    placeholder="%"
                    style={{ width: "360px" }}
                  />
                </p>
                <p
                  style={{
                    flexGrow: 1,
                    marginBlockStart: 0,
                  }}
                >
                  <HcTextFieldLabel
                    titleName="예상 이익 금액"
                    name="name"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "360px" }}
                  ></HcTextFieldLabel>
                </p>
              </VariableMultiLayout>
            </div>
          </DropDownList>
          <DropDownList title="상세 정보">
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                marginTop: "28px",
              }}
            >
              <VariableMultiLayout>
                <p
                  style={{
                    flexGrow: 1,
                    marginBlockStart: 0,
                    marginRight: "80px",
                    display: "flex",
                    alignItems: "end",
                    flexDirection: "column",
                  }}
                >
                  <HcSelect
                    onChange={(e) => {}}
                    titleName="매출구분"
                    name={""}
                    style={{ width: "360px", marginBottom: "20px" }}
                    required
                  >
                    <option value="" hidden>
                      매출구분 선택
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </HcSelect>
                  <HcTextField
                    titleName="성공확률"
                    name="name"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    placeholder="%"
                    style={{ width: "360px" }}
                    disabled
                  />
                </p>
                <p
                  style={{
                    flexGrow: 1,
                    marginBlockStart: 0,
                    marginRight: "80px",
                    display: "flex",
                    alignItems: "end",
                    flexDirection: "column",
                  }}
                >
                  <HcSelect
                    onChange={(e) => {}}
                    titleName="영업 단계"
                    name={""}
                    style={{ width: "360px", marginBottom: "20px" }}
                    required
                  >
                    <option value="" hidden>
                      영업 단계 선택
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </HcSelect>
                  <div>
                    <Title>진행 기간</Title>
                    <HcDateRangePicker />
                  </div>
                </p>
                <p
                  style={{
                    flexGrow: 1,
                    marginBlockStart: 0,
                    display: "flex",
                    alignItems: "end",
                    flexDirection: "column",
                  }}
                >
                  <HcSelect
                    onChange={(e) => {}}
                    titleName="진행 단계"
                    name={""}
                    style={{ width: "360px", marginBottom: "20px" }}
                    required
                  >
                    <option value="" hidden>
                      진행 단계 선택
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </HcSelect>
                  <HcSearchTextField
                    titleName="담당자 입력"
                    name="name"
                    value={inputVal}
                    placeholder="담당자 조회"
                    onChange={(e) => {
                      const lengthOfInputValue = inputVal.split("").length;

                      if (lengthOfInputValue !== 10)
                        setInputVal(e.currentTarget.value);
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        inputVal.trim() !== "" /*&& props.tags.length < 4 */
                      ) {
                        setInputVal("");
                      }
                    }}
                    style={{ width: "360px" }}
                  />
                </p>
              </VariableMultiLayout>
              <VariableMultiLayout>
                <p
                  style={{
                    flexGrow: 1,
                    marginBlockStart: 0,
                    marginRight: "80px",
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <HcSelect
                    onChange={(e) => {}}
                    titleName="인지경로"
                    name={""}
                    style={{ width: "360px" }}
                    required
                  >
                    <option value="" hidden>
                      인지경로 선택
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                  </HcSelect>
                </p>
                <p
                  style={{
                    flexGrow: 2,
                    marginBlockStart: 0,
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <HcTextField
                    titleName="비고"
                    name="name"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    placeholder="비고 입력"
                    style={{ width: "802px" }}
                  />
                </p>
              </VariableMultiLayout>
            </div>
          </DropDownList>
          <DropDownList title="상품 정보(0)">
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                marginTop: "28px",
              }}
            >
              <HcButton onClick={() => {}} styles="secondary" size="medium">
                + 추가
              </HcButton>
              <TableContainer style={{ minHeight: "292px", marginTop: "12px" }}>
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
                      <th style={{ width: "234px" }}>{"이름"}</th>
                      <th style={{ width: "140px" }}>{"단가"}</th>
                      <th style={{ width: "140px" }}>{"수량"}</th>
                      <th style={{ width: "140px" }}>{"단위"}</th>
                      <th style={{ width: "140px" }}>{"판매단가"}</th>
                      <th style={{ width: "140px" }}>{"할인"}</th>
                      <th style={{ width: "140px" }}>{"제안금액합계"}</th>
                      <th style={{ width: "120px" }}>{"-"}</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      display: "block",
                      minHeight: 260,
                      overflow: "auto",
                    }}
                  >
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                      }}
                    >
                      {productList.length == 0 ? (
                        <td colSpan={9} style={{ padding: "unset" }}>
                          <div
                            style={{
                              width: "100%",
                              height: "377px",
                              background: "#FFFFFF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div>
                              <NoDataIcon />
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "#A7A7A7",
                                  fontWeight: 500,
                                }}
                              >
                                데이터가 없습니다.
                              </div>
                            </div>
                          </div>
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </div>
          </DropDownList>
          <DropDownList title="연관 기업 컨택포인트(0)">
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                marginTop: "28px",
              }}
            >
              <HcButton onClick={() => {}} styles="secondary" size="medium">
                + 추가
              </HcButton>
              <TableContainer style={{ minHeight: "292px", marginTop: "12px" }}>
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
                      <th style={{ width: "140px" }}>{"이름"}</th>
                      <th style={{ width: "184px" }}>{"기업"}</th>
                      <th style={{ width: "140px" }}>{"소속부서"}</th>
                      <th style={{ width: "140px" }}>{"직위"}</th>
                      <th style={{ width: "160px" }}>{"회사전화 번호"}</th>
                      <th style={{ width: "310px" }}>{"회사 이일"}</th>
                      <th style={{ width: "120px" }}>{"-"}</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      display: "block",
                      minHeight: 260,
                      overflow: "auto",
                    }}
                  >
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                      }}
                    >
                      {enterpriseList.length == 0 ? (
                        <td colSpan={9} style={{ padding: "unset" }}>
                          <div
                            style={{
                              width: "100%",
                              height: "377px",
                              background: "#FFFFFF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div>
                              <NoDataIcon />
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "#A7A7A7",
                                  fontWeight: 500,
                                }}
                              >
                                데이터가 없습니다.
                              </div>
                            </div>
                          </div>
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </div>
          </DropDownList>
          <DropDownList title="지원인력(0)">
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                marginTop: "28px",
              }}
            >
              <HcButton onClick={() => {}} styles="secondary" size="medium">
                + 추가
              </HcButton>
              <TableContainer style={{ minHeight: "292px", marginTop: "12px" }}>
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
                      <th style={{ width: "140px" }}>{"이름"}</th>
                      <th style={{ width: "184px" }}>{"소속부서"}</th>
                      <th style={{ width: "140px" }}>{"직위"}</th>
                      <th style={{ width: "140px" }}>{"역할구분"}</th>
                      <th style={{ width: "160px" }}>{"회사전화 번호"}</th>
                      <th style={{ width: "310px" }}>{"회사 이일"}</th>
                      <th style={{ width: "120px" }}>{"-"}</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      display: "block",
                      minHeight: 260,
                      overflow: "auto",
                    }}
                  >
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                      }}
                    >
                      {supporterList.length == 0 ? (
                        <td colSpan={9} style={{ padding: "unset" }}>
                          <div
                            style={{
                              width: "100%",
                              height: "377px",
                              background: "#FFFFFF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div>
                              <NoDataIcon />
                              <div
                                style={{
                                  fontSize: 14,
                                  color: "#A7A7A7",
                                  fontWeight: 500,
                                }}
                              >
                                데이터가 없습니다.
                              </div>
                            </div>
                          </div>
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </div>
          </DropDownList>
          <DropDownList title="첨부 파일">
            <div
              style={{
                marginTop: "18px",
              }}
            >
              <HcFileUploader file={file} setFile={setFile} style={{}} />
            </div>
          </DropDownList>

          <ListWrapper style={{ height: "480px", marginTop: "137px" }}>
            <ListTitle>결재선</ListTitle>
            <div style={{ marginTop: "10px", marginBottom: "14px" }}>
              <div style={{ marginTop: "10px", marginBottom: "14px" }}>
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: "Noto Sans KR",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#5D5D62",
                  }}
                >
                  결재선 지정
                </div>
              </div>
              <ApprovalWrapper>
                {approvalLineDatas.map((item: any, key: number) => (
                  <>
                    <ApprovalContent>
                      <div
                        style={{
                          display: "inline-table",
                          width: "50px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                      >
                        <ListIcon style={{ verticalAlign: "middle" }} />
                      </div>
                      <div style={{ display: "inline-block", width: "280px" }}>
                        {item.state}
                      </div>
                      <div style={{ display: "inline-table", width: "344px" }}>
                        <img
                          src="https://cdnweb01.wikitree.co.kr/webdata/editor/202110/06/img_20211006130837_bdb87ae2.webp"
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            marginRight: "8px",
                            verticalAlign: "middle",
                          }}
                          alt={item.name}
                        />
                        {item.name}
                      </div>
                      <div style={{ display: "inline-block", width: "319px" }}>
                        {item.position}
                      </div>
                      <div style={{ display: "inline-block", width: "208px" }}>
                        {item.department}
                      </div>
                      <div
                        style={{
                          display: "inline-table",
                          width: "50px",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          let temp = JSON.parse(
                            JSON.stringify(approvalLineDatas)
                          );
                          temp.splice(key, 1);
                          setApprovalLineDatas(temp);
                        }}
                      >
                        <CloseIcon style={{ verticalAlign: "middle" }} />
                      </div>
                    </ApprovalContent>
                  </>
                ))}
              </ApprovalWrapper>
              <div style={{ marginTop: "40px" }}>
                <div
                  style={{
                    fontFamily: "Noto Sans KR",
                    fontSize: "15px",
                    color: "#5D5D62",
                  }}
                >
                  결재 알림
                </div>
                <StyledSelect
                  style={{ width: "400px", fontWeight: 500, marginTop: "16px" }}
                  value={""}
                  onChange={(e) => {}}
                >
                  <option value="" hidden>
                    결재 요청(승인부서제외) + 완결 통보(기안, 통보자)
                  </option>
                  <option value={1}>
                    결재 요청(승인부서제외) + 완결 통보(기안, 통보자)
                  </option>
                </StyledSelect>
              </div>
            </div>
          </ListWrapper>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
        <div style={{ display: "block", width: "inherit" }}>
          <Route exact path={match.url} component={GeneralState} />
          <Route path={`${match.url}/add`} component={CreateState} />
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default SalesPlanning;
