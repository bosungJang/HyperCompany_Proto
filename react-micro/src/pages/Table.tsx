import React from "react";
// import "./Table.css";
import HcTable from "common/HcTableC";
import styled from "styled-components";
const ComponentWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  display: block;
  padding: 40px 20px 20px 40px;
  width: 1400px;
`;
const Table = () => {
  return (
    <ComponentWrapper>
      <HcTable />
    </ComponentWrapper>
  );
};

export default Table;
