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

interface AppProps {
  setLNBMenu?: (menu: LNBArrayProps[]) => void;
}

const App = React.forwardRef((prop: AppProps, ref) => {
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
    >
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
          <Finance setLNBMenu={prop.setLNBMenu} {...props} ref={ref} />
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
});

export default App;
