import React, { Fragment, useState } from "react";
import styled, { keyframes, Keyframes } from "styled-components";

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
    <TableContainer>
      <StyledTable>
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
      </StyledTable>
    </TableContainer>
  );
};

export default HcDropDownTable;
