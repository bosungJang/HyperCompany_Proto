import React from "react";
import ReactDOM from "react-dom";
import dragula from "react-dragula";
import "./dragula.css";
import { SteppedLineTo } from "react-lineto";

class DnDTempt extends React.Component {
  componentDidMount() {
    let left = document.getElementById("left");
    let middle = document.getElementById("middle");
    let right = document.getElementById("right");
    dragula([left, middle, right]);
  }

  render() {
    return (
      <div className="outer_container">
        <SteppedLineTo
          delay={100}
          from="장보성1"
          to="김건우2"
          orientation="h"
        />
        <div id="left" className="container">
          <Card body="장보성1" className="장보성1" />
          <Card body="장보성2" />
        </div>
        <div id="middle" className="container">
          <Card body="김건우1" />
          <Card body="김건우2" className="김건우2" />
        </div>
        <div id="right" className="container">
          <Card body="송유종1" />
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"card " + this.props.className}>
        <div className="card-header">
          <span>결재</span>
        </div>
        <div className="card-body">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default DnDTempt;
