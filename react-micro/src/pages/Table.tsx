import React from "react";
// import "./Table.css";
import HcTable from "common/HcTable";
import styled from "styled-components";
const ComponentWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  display: block;
  padding: 20px 40px;
`;
const Table = () => {
  return (
    <ComponentWrapper>
      <HcTable />
    </ComponentWrapper>
  );
};

export default Table;
