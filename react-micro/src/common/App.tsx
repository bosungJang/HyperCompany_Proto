import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Posts, Table, Test, Finance, HumanResource } from "pages";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";

interface AppProps {
  setLNBMenu?: (menu: LNBArrayProps[]) => void;
}

class App extends Component<AppProps> {
  render() {
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
            <Home setLNBMenu={this.props.setLNBMenu} {...props} />
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
            <Finance setLNBMenu={this.props.setLNBMenu} {...props} />
          )}
        />
        <Route
          path="/hr"
          component={(props: any) => (
            <HumanResource setLNBMenu={this.props.setLNBMenu} {...props} />
          )}
        />
      </div>
    );
  }
}

export default App;
