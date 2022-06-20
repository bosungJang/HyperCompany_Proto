import React, { Component } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Home,
  About,
  Posts,
  Table,
  Test,
  Finance,
  HumanResource,
  CustomerService,
} from "pages";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";
import { referenceEnhancer } from "mobx/dist/internal";
import HcCheckBox from "common/HcCheckBox";
import { ReactComponent as CollectiveIcon } from "resources/images/Collective_Registration_Icon.svg";
import { ReactComponent as ExportIcon } from "resources/images/Export_Icon.svg";
import { ReactComponent as ShareIcon } from "resources/images/Share_Icon.svg";
import { ReactComponent as PrintIcon } from "resources/images/Print_Icon.svg";
import InfoIconTooltip, { TooltipMessage } from "common/HcTooltip";
import { useCounter } from "router/Root";
import { autorun } from "mobx";
import { observer } from "mobx-react";

interface AppProps {
  setLNBMenu?: (menu: LNBArrayProps[]) => void;
  forwardRef?: any;
}
const IconWrapper = styled.div`
  margin-right: 16px;
  display: inline-block;
  cursor: pointer;
  &: hover {
    rect {
      fill: #ededed;
      transition: all 0.5s ease;
    }
    svg {
      background-color: #ededed;
      transition: all 0.5s ease;
    }
  }
`;

const ButtonWrapper = styled.div`
  height: 32px;
  padding: 7.5px 18px 6px 10px;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
  border: 1px solid #a7a7a7;
  border-radius: 2.5px;
  min-width: 76px;
  div {
    display: inline-block;
    font-family: Noto Sans KR;
    font-weight: 500;
    font-size: 13px;
    vertical-align: top;
    margin-left: 6px;
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

const App = observer((prop: AppProps) => {
  const [iconState, setIconState] = React.useState(false);
  const [topTitle, setTopTitle] = React.useState("");

  const myCounter = useCounter();
  autorun(() => {
    console.log("title", myCounter.myTitle);
  });
  return (
    <div
      style={{
        //backgroundColor: " white",
        width: "1400px",
        display: "inline-block",
        textAlign: "initial",
        borderRadius: "10px",
        marginTop: "60px",
      }}
      className="app"
    >
      <div
        style={{
          width: "inherit",
          height: "60px",
          background: "#FFFFFF",
          position: "absolute",
          opacity: 0,
          transition: "all 0.3s",
          padding: "14px 40px",
          border: "1px solid black",
          zIndex: 99,
          textAlign: "initial",
          //top: "-50px",
        }}
        ref={(el) => (prop.forwardRef.current[0] = el)}
      >
        <div
          style={{
            fontFamily: "Noto Sans KR",
            fontWeight: 700,
            fontSize: "18px",
            paddingTop: "2px",
            display: "inline-block",
          }}
        >
          {myCounter.myTitle}
        </div>
        <div style={{ float: "right", display: "inline-block" }}>
          {iconState == true ? (
            <>
              <IconWrapper
                onClick={() => {
                  setIconState(!iconState);
                }}
              >
                <ExportIcon />
              </IconWrapper>
              <IconWrapper>
                <TooltipMessage message={"일괄등록"} ItemHeight={18}>
                  <CollectiveIcon />
                </TooltipMessage>
              </IconWrapper>
              <IconWrapper>
                <PrintIcon />
              </IconWrapper>
              <IconWrapper style={{ marginRight: "0px" }}>
                <ShareIcon />
              </IconWrapper>
            </>
          ) : (
            <>
              <ButtonWrapper
                onClick={() => {
                  setIconState(!iconState);
                }}
              >
                <ExportIcon />
                <div>내보내기</div>
              </ButtonWrapper>
              <ButtonWrapper>
                <CollectiveIcon />
                <div>일괄등록</div>
              </ButtonWrapper>
              <ButtonWrapper>
                <PrintIcon />
                <div>인쇄</div>
              </ButtonWrapper>
              <ButtonWrapper style={{ marginRight: "0px" }}>
                <ShareIcon />
                <div>공유</div>
              </ButtonWrapper>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          width: "inherit",
          height: "fit-content",
          background: "#FFFFFF",
          position: "absolute",
          opacity: 0,
          //transition: "all 0.5s",
          //padding: "16px 40px",
          //border: "1px solid black",
          zIndex: 99,
          textAlign: "center",
          //top: "-50px",
          backgroundColor: "rgba( 255, 255, 255, 0 )",
        }}
        ref={(el) => (prop.forwardRef.current[1] = el)}
      >
        <div style={{ display: "inline-block" }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "33.63px" }}>
                  <HcCheckBox checked onChange={() => {}} />
                </th>
                <th>계좌명</th>
                <th>계좌 구분</th>
                <th>은행명</th>
                <th style={{ width: "252.56px" }}>계좌 번호</th>
                <th>예금주</th>
                <th>사용 여부</th>
                <th>개설일</th>
                <th>만기일</th>
                <th style={{ width: "95.1px" }}>-</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <Route
        exact
        path="/"
        component={(props: any) => (
          <Home setLNBMenu={prop.setLNBMenu} {...props} />
        )}
      />
      <Switch>
        <Route path="/about/:name" component={About} />
        <Route path="/about" component={About} />
      </Switch>
      <Route path="/posts" component={Posts} />
      <Route path="/table" component={Table} />
      <Route path="/test" component={Test} />
      <Route
        path="/fi"
        component={(props: any) => (
          <Finance
            setLNBMenu={prop.setLNBMenu}
            forwardRef={prop.forwardRef}
            setTopTitle={setTopTitle}
            {...props}
            ref={(el: any) => (prop.forwardRef.current[2] = el)}
          />
        )}
      />
      <Route
        path="/hr"
        component={(props: any) => (
          <HumanResource
            setLNBMenu={prop.setLNBMenu}
            setTopTitle={setTopTitle}
            {...props}
          />
        )}
      />
      <Route
        path="/crm"
        component={(props: any) => (
          <CustomerService
            setLNBMenu={prop.setLNBMenu}
            setTopTitle={setTopTitle}
            {...props}
          />
        )}
      />
    </div>
  );
});

export default App;
