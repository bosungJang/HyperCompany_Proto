import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Posts, Table } from "pages";

class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: " white",
          width: "95rem",
          display: "inline-block",
          textAlign: "initial",
          marginTop: "60px",
          borderRadius: "10px",
        }}
      >
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/table" component={Table} />
      </div>
    );
  }
}

export default App;
