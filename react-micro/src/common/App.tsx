import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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

interface AppProps {
  setLNBMenu?: (menu: LNBArrayProps[]) => void;
  forwardRef?: any;
}

const App = (prop: AppProps) => {
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
          padding: "16px 40px",
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
          }}
        >
          TYPE01. BTN
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
            {...props}
            ref={(el: any) => (prop.forwardRef.current[2] = el)}
          />
        )}
      />
      <Route
        path="/hr"
        component={(props: any) => (
          <HumanResource setLNBMenu={prop.setLNBMenu} {...props} />
        )}
      />
      <Route
        path="/crm"
        component={(props: any) => (
          <CustomerService setLNBMenu={prop.setLNBMenu} {...props} />
        )}
      />
    </div>
  );
};

export default App;
