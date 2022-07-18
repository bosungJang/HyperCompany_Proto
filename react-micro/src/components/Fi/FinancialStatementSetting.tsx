import React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import { HcTitleTextField, Wrapper, Title } from "common/HcTextField";
import { ReactComponent as AddIcon } from "resources/images/Add_Icon_Blue.svg";
import { ReactComponent as DropDownIcon } from "resources/images/dropDown_icon.svg";
import FinancailStatementSettingDetail from "./FinancialStatementSettingDetail";

const DropDownIconWrapper = styled.div<{ menuOpen?: boolean }>`
  float: right;
  cursor: pointer;
  position: relative;
  display: none;

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

const ContentTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #303030;
  display: inline-block;
  margin-bottom: 18px;
`;

const Wrappers = styled.div`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const CardWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  width: 312px;
  height: 180px;
  display: inline-block;
  margin-right: 24px;
  padding: 14px 16px;
  position: relative;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    ${DropDownIconWrapper} {
      display: unset;
    }
  }
`;

const CardTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const CardCont = styled.label`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #5d5d62;
`;

const CardBottom = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #5d5d62;

  position: absolute;
  bottom: 14px;
`;

const RepresentTag = styled.div`
  width: 48px;
  height: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #2d2d31;
  border-radius: 24px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;

  position: absolute;
  left: 16px;
  bottom: 47px;
`;

const data = [
  {
    title: "합계잔액시산표",
    data: [
      {
        title: "합계잔액시산표_기본",
        id: "A0001",
        represent: true,
        startDate: "2022.07.01",
        endDate: "2022.12.31",
      },
      {
        title: "합계잔액시산표_내부용",
        id: "A0002",
        represent: false,
        startDate: "2022.07.01",
        endDate: "2022.12.31",
      },
      {
        title: "합계잔액시산표_제출용",
        id: "A0003",
        represent: false,
        startDate: "2022.07.01",
        endDate: "2022.12.31",
      },
    ],
  },
  {
    title: "재무상태표",
    data: [
      {
        title: "재무상태표_기본",
        id: "B0001",
        represent: true,
        startDate: "2022.07.01",
        endDate: "2022.12.31",
      },
      {
        title: "재무상태표_내부용",
        id: "B0002",
        represent: false,
        startDate: "2022.07.01",
        endDate: "2022.12.31",
      },
      {
        title: "재무상태표_제출용",
        id: "B0003",
        represent: false,
        startDate: "2022.07.01",
        endDate: "2022.12.31",
      },
    ],
  },
];

const FinancailStatementSetting = ({ match }: RouteComponentProps) => {
  const history = useHistory();

  const Content = (props: any) => {
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
                {props.menu.map((item: any, index: any) => (
                  <HcDropDownItem
                    key={index}
                    onClick={() => {
                      item.onClick();
                    }}
                  >
                    {item.title}
                  </HcDropDownItem>
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
      <Wrappers>
        <ContentTitle>{props.item.title}</ContentTitle>
        <div style={{ display: "flex" }}>
          {props.item.data.map((items: any, index: any) => (
            <CardWrapper key={index}>
              <CardTitle>{items.title}</CardTitle>
              <CardCont>{items.id}</CardCont>
              <CardBottom>
                {items.startDate} ~ {items.endDate}
              </CardBottom>
              {items.represent ? <RepresentTag>기본</RepresentTag> : <></>}
              <DropDown
                menu={[
                  { title: "복사하여 생성" },
                  {
                    title: "수정",
                    onClick: () => {
                      history.push(`${match.url}/detail?id=${items.id}`);
                    },
                  },
                  { title: "삭제" },
                ]}
                style={{ top: 16, right: 12, position: "absolute" }}
              />
            </CardWrapper>
          ))}
          <CardWrapper
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            <AddIcon />
            <CardCont>새 양식 생성</CardCont>
          </CardWrapper>
        </div>
      </Wrappers>
    );
  };

  const GeneralState = () => {
    return (
      <div style={{ display: "block", width: "100%", marginTop: "16px" }}>
        <HcTitleTextField
          titleName="재무제표 양식 설정"
          isBackIcon={false}
          style={{ display: "inline-block" }}
        />
        <div style={{ marginTop: "57px" }}>
          {data.map((item, index) => (
            <Content key={index} item={item}></Content>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div style={{ width: "100%" }}>
      <ComponentWrapper style={{ width: "100%", display: "block" }}>
        <Route exact path={match.url} component={GeneralState} />
        <Route
          path={`${match.url}/detail`}
          component={FinancailStatementSettingDetail}
        />
      </ComponentWrapper>
    </div>
  );
};

export default FinancailStatementSetting;
