import React from "react";
import ReactDOM from "react-dom";
import { StickyTable, Row, Cell } from "react-sticky-table";
import styled from "styled-components";
import "common/HcStickyTable.scss";

function HcStickyTable(props) {
  console.log(props.data[0]);
  var rows = [];
  var cells;

  /* header */
  if (props.columns.length != 0) {
    cells = [];
    for (var i = 0; i < props.columns.length; i++) {
      cells.push(
        <Cell key={i} style={{ backgroundColor: "beige" }}>
          {props.columns[i]}
        </Cell>
      );
    }
    rows.push(<Row key={-1}>{cells}</Row>);
  }
  /* header */

  for (var r = 0; r < props.data.length; r++) {
    cells = [];

    if (props.data[r] != null) {
      cells.push(<Cell key={r}>{props.data[r].billNumber}</Cell>);
      cells.push(<Cell key={r}>{props.data[r].billAmount}</Cell>);
      cells.push(<Cell key={r}>{props.data[r].balance}</Cell>);
      cells.push(<Cell key={r}>{props.data[r].date}</Cell>);
      cells.push(<Cell key={r}>{props.data[r].billType}</Cell>);
      cells.push(<Cell key={r}>{props.data[r].receptionType}</Cell>);
      cells.push(<Cell key={r}>{props.data[r].publisher}</Cell>);
      cells.push(<Cell key={r}>{props.data[r].endorser}</Cell>);
      cells.push(<Cell key={r}>{props.data[r].bankName}</Cell>);
    }

    rows.push(<Row key={r}>{cells}</Row>);
  }

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{ width: "100%", height: "500px" }}
        className="stickyTable_wrapper"
      >
        <StickyTable
          stickyHeaderCount={props.headerCount}
          leftStickyColumnCount={props.columnCount}
        >
          {rows}
        </StickyTable>
      </div>
    </div>
  );
}

export function TestTable() {
  var rows = [];
  var cells;

  for (var r = 0; r < 50; r++) {
    cells = [];

    for (var c = 0; c < 20; c++) {
      cells.push(<Cell key={c}>{(r === 0 ? "Header " : "Cell ") + c}</Cell>);
    }

    rows.push(<Row key={r}>{cells}</Row>);
  }

  return (
    <div>
      <div style={{ width: "1300px", height: "500px" }}>
        <StickyTable
          stickyHeaderCount={1}
          leftStickyColumnCount={1}
          rightStickyColumnCount={1}
          stickyFooterCount={1}
        >
          {rows}
        </StickyTable>
      </div>
    </div>
  );
}

export default HcStickyTable;
