import React from "react";
import styled from "styled-components";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import HcTabs, { HcTabsAdv } from "common/HcTabs";
import { HcDropDownButton } from "common/HcButton";
import HcDropDownTable, {
  HcDropDownTableAnother,
} from "common/HcDropDownTable";
import HcCheckBox from "common/HcCheckBox";
import { ReactComponent as ArrowIcon } from "resources/images/RevenueDetailArrow_Icon.svg";
import { ReactComponent as DropDownIcon } from "resources/images/dropDown_icon.svg";

const ContentTitle = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 20px;
  color: #303030;
`;

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

const StyledRow = styled.li<{ rowExpand: boolean }>`
  transition: all 0.5s ease;
  overflow: hidden;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;

  ${(props) =>
    props.rowExpand === false
      ? ` border-left: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9; max-height: 46px;
    svg{
      transform: rotate(90deg);
      transition: all 0.5s ease;
    }
    `
      : `border: 1px solid #ADCEFF;
      background: rgba(239, 245, 255, 0.5); max-height: 359px;
      svg{
        transform: rotate(270deg);
        transition: all 0.5s ease;
      }
      `};
`;

const StyledRowDiv = styled.div`
  display: inline-block;
  padding: 12px;
  font-weight: 400;
  font-size: 14px;
  font-family: Noto Sans KR;
`;

const CustomerPage = () => {
  const [Tabs, setTabs] = React.useState("1");

  const [data, setData] = React.useState([{}, {}]);

  const ExpandableRow = () => {
    const [rowExpand, setRowExpand] = React.useState(false);

    return (
      <>
        <StyledRow rowExpand={rowExpand}>
          <div>
            <StyledRowDiv
              style={{
                width: 46,
              }}
            >
              <div
                style={{
                  paddingTop: 7,
                  textAlign: "center",
                }}
              >
                <HcCheckBox checked={false} onChange={() => {}} />
              </div>
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: 130,
                fontSize: "0.875rem",
              }}
            >
              홍길동
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "130px",
              }}
            >
              010-1234-5678
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "302px",
              }}
            >
              Kildong_hong@tmax.co.kr
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "140px",
              }}
            >
              개인
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "128px",
              }}
            >
              VIP
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "128px",
              }}
            >
              1
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "128px",
              }}
            >
              꽃분이
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "128px",
              }}
            >
              2020.01.01
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "57px",
              }}
            >
              <ArrowIcon
                onClick={() => {
                  setRowExpand(!rowExpand);
                }}
                style={{ cursor: "pointer" }}
              />
            </StyledRowDiv>
          </div>
          <div style={{ padding: "20px 40px 30px 40px" }}>
            <div style={{ display: "inline-block", width: "100%" }}>
              <div>
                <div style={{ display: "inline-block" }}>이메일 전송</div>
                <div style={{ display: "inline-block" }}>미팅 약속</div>
                <DropDownIcon style={{ float: "right" }} />
              </div>
            </div>
          </div>
        </StyledRow>
      </>
    );
  };

  return (
    <>
      <ComponentWrapper>
        <div style={{ display: "block" }}>
          <HcTitleTextField titleName="고객" isBackIcon={false} />
          <div style={{ marginTop: "39px" }}>
            <HcTabsAdv
              items={[
                { to: "1", name: "전체(100)" },
                { to: "2", name: "개인 고객(100)" },
                { to: "3", name: "기업 고객(100)" },
                { to: "4", name: "기업 컨택포인트(100)" },
              ]}
              size="normal"
              TabNumber={Tabs}
              SetTabNumber={setTabs}
            />
            <div
              className="body_area"
              style={{ display: "flex", marginTop: "20px" }}
            >
              {
                {
                  "1": (
                    <>
                      <div>
                        <HcDropDownButton
                          title="+ 생성"
                          dropDownMenu={[
                            {
                              title: "개인 고객 생성",
                              onClick: () => {
                                alert("개인 고객 생성");
                              },
                            },
                            {
                              title: "기업 고객 생성",
                              onClick: () => {
                                alert("기업 고객 생성");
                              },
                            },
                            {
                              title: "기업 컨택 포인트 생성",
                              onClick: () => {
                                alert("기업 컨택 포인트 생성");
                              },
                            },
                            {
                              title: "일괄 등록",
                              onClick: () => {
                                alert("일괄 등록");
                              },
                            },
                          ]}
                        />
                        <div style={{ marginTop: "20px" }}>
                          <TableContainer style={{ minHeight: "unset" }}>
                            <table
                              className="table table-hover"
                              style={{ borderSpacing: "0px" }}
                            >
                              <thead
                                style={{
                                  display: "table",
                                  width: "100%",
                                  tableLayout: "fixed",
                                }}
                              >
                                <tr>
                                  <th
                                    style={{
                                      width: "46px",
                                      textAlign: "start",
                                    }}
                                  >
                                    <div
                                      style={{
                                        paddingTop: 7,
                                        textAlign: "center",
                                      }}
                                    >
                                      <HcCheckBox
                                        checked={false}
                                        onChange={() => {}}
                                      />
                                    </div>
                                  </th>

                                  <th
                                    style={{
                                      width: "130px",
                                      textAlign: "start",
                                    }}
                                  >
                                    {"이름"}
                                  </th>
                                  <th
                                    style={{
                                      width: "130px",
                                      textAlign: "start",
                                    }}
                                  >
                                    {"전화 번호"}
                                  </th>
                                  <th style={{ width: "302px" }}>{"이메일"}</th>
                                  <th style={{ width: "140px" }}>{"유형"}</th>
                                  <th style={{ width: "128px" }}>
                                    {"고객 등급"}
                                  </th>
                                  <th
                                    style={{
                                      width: "128px",
                                      textAlign: "start",
                                    }}
                                  >
                                    {"관련 리드"}
                                  </th>
                                  <th style={{ width: "128px" }}>{"담당자"}</th>
                                  <th style={{ width: "128px" }}>
                                    {"생성날짜"}
                                  </th>
                                  <th style={{ width: "60px" }}></th>
                                </tr>
                              </thead>
                              <tbody
                                style={{
                                  display: "block",
                                }}
                              >
                                <ul
                                  style={{
                                    paddingInlineStart: "0px",
                                    marginBottom: "0px",
                                  }}
                                >
                                  {data.map(() => (
                                    <ExpandableRow />
                                  ))}
                                </ul>
                              </tbody>
                            </table>
                          </TableContainer>
                        </div>
                      </div>
                    </>
                  ),
                  "2": <>test</>,
                }[Tabs]
              }
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};
export default CustomerPage;
