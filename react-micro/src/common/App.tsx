import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Posts, Table, Test, Finance, HumanResource } from "pages";

class App extends Component {
  render() {
    return (
      <div
        style={{
          //backgroundColor: " white",
          width: "95rem",
          display: "inline-block",
          textAlign: "initial",
          borderRadius: "10px",
          marginTop: "60px",
        }}
      >
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/table" component={Table} />
        <Route path="/test" component={Test} />
        <Route path="/fi" component={Finance} />
        <Route path="/hr" component={HumanResource} />
      </div>
    );
  }
}

export default App;
