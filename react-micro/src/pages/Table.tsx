import React from "react";
import "./Table.css";

const shortid = require("shortid");
const columns = ["header1", "header2", "header3", "header4", "header5"];
const data = Array(50)
  .fill(undefined)
  .map(() => ({
    row1: shortid.generate(),
    row2: shortid.generate(),
    row3: shortid.generate(),
    row4: shortid.generate(),
    row5: shortid.generate(),
  }));
const Table = () => {
  return (
    <div
      className="table"
      //   style={{
      //     backgroundColor: "#fafafa",
      //     borderRadius: "10px",
      //     margin: "5%",
      //   }}
    >
      <div
        style={{
          paddingTop: 30,
          margin: "auto",
          width: "95%",
        }}
      >
        <h2>
          <b>인사발령</b>
        </h2>
        <h4>
          <b>발령 현황</b>
        </h4>
        <button className="btn-15 custom-btn">효과</button>
        <button className="table_buttons_create" style={{ marginRight: 10 }}>
          +생성
        </button>
        <button className="table_buttons" style={{ marginRight: 10 }}>
          이동
        </button>

        <button className="table_buttons">삭제</button>
        <button className="table_manage">필터</button>
        <button className="table_manage">일괄등록</button>
        <button className="table_manage">내보내기</button>
        <button className="table_manage">설정</button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ row1, row2, row3, row4, row5 }) => (
            <tr
              key={row1 + row2 + row3 + row4 + row5}
              style={{ textAlign: "center" }}
            >
              <td>{row1}</td>
              <td>{row2}</td>
              <td>{row3}</td>
              <td>{row4}</td>
              <td>{row5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
