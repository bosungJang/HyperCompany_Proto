import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import "common/Table.css";
import { RouteComponentProps, Route, useHistory } from "react-router-dom";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import { ReactComponent as DropDownIcon } from "resources/images/dropDown_icon.svg";

const BodyContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 4px;
`;

const CardWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  padding: 20px 22px 20px 24px;
  width: 100%;
  height: 179px;
  margin-bottom: 24px;
  position: relative;
  &: last-child {
    margin-bottom: 0;
  }
  div {
    font-family: Noto Sans KR;
    font-weight: 500;
    font-size: 20px;
    color: #303030;
  }
`;

const CardBodyText = styled.div`
  background: #f4f4f4;
  border-radius: 2px;
  height: 33px;
  margin-left: 6px;
  margin-top: 14px;
  display: table;
  padding-left: 4px;
  padding-right: 4px;

  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #838181;
  }
`;

const DropDownIconWrapper = styled.div<{ menuOpen?: boolean }>`
  float: right;
  cursor: pointer;

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

const DropDwonMenu = styled.nav<{ menuOpen: boolean }>`
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  display: inline-block;
  position: absolute;
  right: -119px;
  top: 47px;
  opacity: ${(props) => (props.menuOpen ? "1" : "0")};

  -webkit-transition: opacity 0.5s ease;
  -moz-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  -o-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  ul {
    padding-left: 0;
    margin-bottom: 0;

    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.25);
    li {
      min-width: 140px;
      height: 42px;
      padding: 11px 12px 10px 12px;
      cursor: pointer;

      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;

      -webkit-transition: background 0.5s ease;
      -moz-transition: background 0.5s ease;
      -ms-transition: background 0.5s ease;
      -o-transition: background 0.5s ease;
      transition: background 0.5s ease;

      &:hover {
        background: #cecece;
      }
    }
  }
`;

interface MatchParams {
  id: string;
}

const BillingType = ({ match }: RouteComponentProps<MatchParams>) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const history = useHistory();

  const GeneralState = () => {
    return (
      <>
        <div style={{ display: "block", width: "inherit", marginTop: "20px" }}>
          <HcTitleTextField
            titleName="비용 청구 유형 설정"
            isBackIcon={false}
            style={{ display: "inline-block" }}
          />
          <div style={{ marginTop: "39px", width: "inherit" }}>
            <div
              style={{
                marginTop: "18px",
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
              <BodyContainer>
                <CardWrapper>
                  <div>
                    {"일반경비(법인카드)"}

                    <DropDownIconWrapper
                      onClick={() => setMenuOpen(!menuOpen)}
                      menuOpen={menuOpen}
                    >
                      <DropDownIcon />
                    </DropDownIconWrapper>
                    <DropDwonMenu menuOpen={menuOpen}>
                      <ul>
                        <li>{"수정"}</li>
                        <li>{"삭제"}</li>
                      </ul>
                    </DropDwonMenu>
                  </div>
                  <CardBodyText>
                    <span>{"비용항목에 추가된 계정 과목3"}</span>
                  </CardBodyText>
                  <CardBodyText>
                    <span>{"추가 입력항목 0"}</span>
                  </CardBodyText>
                </CardWrapper>
                <CardWrapper>
                  <div>
                    {"일반경비(법인카드)"}
                    <DropDownIconWrapper>
                      <DropDownIcon />
                    </DropDownIconWrapper>
                  </div>
                  <CardBodyText>
                    <span>{"비용항목에 추가된 계정 과목3"}</span>
                  </CardBodyText>
                  <CardBodyText>
                    <span>{"추가 입력항목 0"}</span>
                  </CardBodyText>
                </CardWrapper>
                <CardWrapper>
                  <div>
                    {"일반경비(법인카드)"}
                    <DropDownIconWrapper>
                      <DropDownIcon />
                    </DropDownIconWrapper>
                  </div>
                  <CardBodyText>
                    <span>{"비용항목에 추가된 계정 과목3"}</span>
                  </CardBodyText>
                  <CardBodyText>
                    <span>{"추가 입력항목 0"}</span>
                  </CardBodyText>
                </CardWrapper>
              </BodyContainer>
            </div>
          </div>
        </div>
      </>
    );
  };

  const CreateState = () => {
    return (
      <>
        <div style={{ display: "block", width: "inherit", marginTop: "20px" }}>
          <HcTitleTextField titleName="비용 청구 유형 생성" isBackIcon={true} />
        </div>
      </>
    );
  };
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper
          style={{ width: "inheirt", display: "block", overflowX: "unset" }}
        >
          <Route exact path={match.url} component={GeneralState} />
          <Route path={`${match.url}/add`} component={CreateState} />
        </ComponentWrapper>
      </div>
    </>
  );
};

export default BillingType;
