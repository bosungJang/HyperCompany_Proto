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
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import { useHistory } from "react-router-dom";
const StyledRow = styled.li<{ rowExpand: boolean }>`
  transition: all 0.2s ease;
  overflow: hidden;
  border-bottom: 1px solid #d9d9d9;
  padding: 0;
  ${(props) =>
    props.rowExpand === false
      ? `
    border-bottom: 1px solid #d9d9d9; max-height: 46px;
    .arrow {
      transform: rotate(90deg);
      transition: all 0.5s ease;
    }
    `
      : `border: 1px solid #ADCEFF;
      background: rgba(239, 245, 255, 0.5); max-height: 359px;
      .arrow {
        transform: rotate(270deg);
        transition: all 0.5s ease;
      }
      `};
`;

const StyledRowDiv = styled.div`
  display: inline-block;
  padding: 12px 12px 10px 12px;
  font-weight: 400;
  line-height: 21px;
  height: 46px;
  font-size: 14px;
  font-family: Noto Sans KR;
`;
export const Rating = styled.div<{ rating: string }>`
  width: fit-content;
  height: fit-content;
  padding: 4px;
  margin-top: -3px;
  border-radius: 2px;
  font-weight: 700;
  ${(props) =>
    props.rating === "VIP"
      ? "color: #FF7D7D; background: #FFE9E9;"
      : props.rating == "Gold"
      ? "background: #FFF1CE; color: #FFBB0B;"
      : props.rating === "Silver"
      ? "color: #838181; background: #D9D9D9;"
      : props.rating === "Bronze"
      ? "background: #FFF3E8; color: #FDA95C;"
      : "background: #DFECFF; color: #5799FB; "}
`;
const CustomerPage = () => {
  const [Tabs, setTabs] = React.useState("1");
  const history = useHistory();
  const [data, setData] = React.useState<dataType[]>([
    {
      name: "홍길동",
      phone: "010-1234-5678",
      email: "kildong_hong@tamx.co.kr",
      type: "enterprise",
      credit: "eB",
      rating: "VIP",
      lead: 1,
      manager: "꽃분이",
      create: "2020.01.01",
    },
    {
      name: "홍길동",
      phone: "010-9876-5432",
      email: "kildong_hong@tamx.co.kr",
      type: "personal",
      rating: "Gold",
      lead: 0,
      manager: "꽃분이",
      create: "2021.06.01",
    },
    {
      name: "꽃분이",
      phone: "010-9876-5432",
      email: "kildong_hong@tamx.co.kr",
      type: "contact",
      rating: "Silver",
      lead: 0,
      manager: "홍길동",
      create: "2021.06.01",
    },
  ]);
  interface dataType {
    name: string;
    phone: string;
    email: string;
    rating: string;
    type: string;
    lead: number;
    manager: string;
    create: string;
    credit?: string;
  }
  const ExpandableRow = ({ props }: { props: dataType }): JSX.Element => {
    const [rowExpand, setRowExpand] = React.useState(false);
    const { name, phone, email, rating, type, lead, manager, create } = props;
    return (
      <>
        <StyledRow
          rowExpand={rowExpand}
          onClick={() => {
            history.push({
              pathname: "/crm/customerDetail",
              state: type,
            });
          }}
        >
          <div style={{ display: "flex" }}>
            <StyledRowDiv
              style={{
                width: 46,
              }}
            >
              <div style={{}}>
                <HcCheckBox checked={false} onChange={() => {}} />
              </div>
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: 130,
                fontSize: "0.875rem",
              }}
            >
              {name}
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "130px",
              }}
            >
              {phone}
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "302px",
              }}
            >
              {email}
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "140px",
              }}
            >
              {type}
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "128px",
              }}
            >
              <Rating rating={rating}>{rating}</Rating>
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "128px",
              }}
            >
              {lead > 0 ? (
                <a href="" style={{ color: "#257CFF" }}>
                  {lead}
                </a>
              ) : (
                lead
              )}
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "128px",
              }}
            >
              {manager}
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "128px",
              }}
            >
              {create}
            </StyledRowDiv>
            <StyledRowDiv
              style={{
                width: "57px",
              }}
              onClick={(e: any) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <ArrowIcon
                className="arrow"
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
                <div
                  style={{
                    display: "flex",
                    height: "22px",
                    width: "100%",
                  }}
                >
                  이메일 전송{" "}
                  <div
                    style={{
                      margin: "1px 0px 0px 6px",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.2779 6.5H5.88852L11.6617 10.9148C12.1326 11.2749 12.7917 11.2547 13.2397 10.8665L18.2779 6.5ZM4.5 7.32651V17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17V7.4258L14.2221 12C13.2365 12.8542 11.7865 12.8986 10.7505 12.1063L4.5 7.32651ZM3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
                        fill="#5D5D62"
                      />
                    </svg>
                  </div>
                  <DropDownIcon style={{ float: "right" }} />
                </div>

                <div style={{ display: "inline-block" }}>미팅 약속</div>
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
                        <div style={{ display: "flex" }}>
                          <HcDropDownButton
                            title="+ 생성"
                            style={{ zIndex: 5, width: 91, marginRight: 1080 }}
                            dropDownMenu={[
                              {
                                title: "개인 고객 생성",
                                onClick: () => {
                                  history.push({
                                    pathname: "/crm/customerCreate",
                                    state: "personal",
                                  });
                                },
                              },
                              {
                                title: "기업 고객 생성",
                                onClick: () => {
                                  history.push({
                                    pathname: "/crm/customerCreate",
                                    state: "enterprise",
                                  });
                                },
                              },
                              {
                                title: "기업 컨택 포인트 생성",
                                onClick: () => {
                                  history.push({
                                    pathname: "/crm/customerCreate",
                                    state: "contact",
                                  });
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
                          <TableSetting />
                        </div>
                        <div style={{ marginTop: "20px" }}>
                          <HcTableContainer style={{ minHeight: "unset" }}>
                            <HcTable>
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
                                    }}
                                  >
                                    <div
                                      style={{
                                        paddingTop: 4,
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
                                    }}
                                  >
                                    {"이름"}
                                  </th>
                                  <th
                                    style={{
                                      width: "130px",
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
                                    margin: 0,
                                  }}
                                >
                                  {data.map((item: dataType) => (
                                    <ExpandableRow props={item} />
                                  ))}
                                </ul>
                              </tbody>
                            </HcTable>
                          </HcTableContainer>
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
