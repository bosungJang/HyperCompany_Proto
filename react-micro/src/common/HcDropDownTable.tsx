import React, { Fragment, useState } from "react";
import styled, { keyframes, Keyframes } from "styled-components";
// import "common/Table.css";
import { HcTable, HcTableContainer } from "common/HcTableComponent";
const TableContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const boxFade = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;

const StyledTr = styled.tr`
  opacity: 1;
  animation: ${boxFade} 3s;
`;

const data: any = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Centro comercial Moctezuma",
    contact: "Maria Anders",
    country: "Mexico",
  },
];
const HcDropDownTable = () => {
  const [state, setState] = useState(0);

  const handleClick = (index: number) => {
    const updatedState = data[index];

    if (updatedState.other) {
      delete updatedState.other;
      setState((pre) => {
        return pre + 1;
      });
    } else {
      updatedState.other = {
        description: "Hello there", //or data from api
      };
      setState((pre) => {
        return pre + 1;
      });
    }
  };

  return (
    <HcTableContainer>
      <HcTable>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, index: number) => (
            <Fragment key={`${index}${row.company}`}>
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(index)}
              >
                <td>{row.company}</td>
                <td>{row.contact}</td>
                <td>{row.country}</td>
              </tr>
              {row.other ? (
                <>
                  <StyledTr>
                    <td colSpan={3}>{row.other.description}</td>
                  </StyledTr>
                  <StyledTr>
                    <td colSpan={3}>{row.other.description}</td>
                  </StyledTr>
                  <StyledTr>
                    <td colSpan={3}>{row.other.description}</td>
                  </StyledTr>
                </>
              ) : null}
            </Fragment>
          ))}
        </tbody>
      </HcTable>
    </HcTableContainer>
  );
};

export default HcDropDownTable;

export const HcDropDownTableAnother = () => {
  const [expandedRows, setExpandedRows] = useState<number | null>(null);

  const handleExpandRow = (userId: number) => {
    let currentExpandedRows = null;
    const isRowExpanded = currentExpandedRows === userId ? userId : null;
    const newExpandedRows = isRowExpanded
      ? null
      : (currentExpandedRows = userId);
    if (expandedRows !== userId) {
      setExpandedRows(newExpandedRows);
    } else {
      setExpandedRows(null);
    }
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>S.no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
        </tr>
      </thead>
      {data.map((item: any, index: number) => (
        <tbody>
          <tr key={index} onClick={() => handleExpandRow(index)}>
            <td>{index + 1}</td>
            <td>{item.company}</td>
            <td>{item.contact}</td>
            <td>{item.country}</td>
          </tr>
          {expandedRows === index ? (
            <tr>
              <td colSpan={4} className="collaps-viewer">
                <div className="no-data"> No activity found! </div>
              </td>
            </tr>
          ) : null}
        </tbody>
      ))}
    </table>
  );
};
