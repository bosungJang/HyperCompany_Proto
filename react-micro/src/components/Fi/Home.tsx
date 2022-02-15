import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import {
  ComponentWrapper,
  MultiLayout,
  VariableMultiLayout,
} from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import OrganizationChart from "common/Chart/OrganizationChart";
import EmployeeChart from "common/Chart/OrganizationChartDemo";
import HcDropDownTable from "common/HcDropDownTable";

interface MatchParams {
  id: string;
}
const testData =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.";

const FiHome = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper>
        <HcTitleTextField titleName="경비 청구" isBackIcon={true} />
      </ComponentWrapper>
      <ComponentWrapper>
        <MultiLayout>
          <p>{testData}</p>
          <p>{testData}</p>
          <p>{testData}</p>
        </MultiLayout>
      </ComponentWrapper>
      <ComponentWrapper>
        <VariableMultiLayout>
          <p style={{ flexGrow: 1 }}>{testData}</p>
          <p style={{ flexGrow: 3 }}>{testData}</p>
          <p style={{ flexGrow: 1 }}>{testData}</p>
        </VariableMultiLayout>
      </ComponentWrapper>
      <ComponentWrapper>
        <div style={{ width: "100%" }}>
          <OrganizationChart />
        </div>
      </ComponentWrapper>

      <ComponentWrapper>
        <div style={{ width: "100%" }}>
          <EmployeeChart />
        </div>
      </ComponentWrapper>

      <ComponentWrapper>
        <div style={{ width: "100%" }}>
          <HcDropDownTable />
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default FiHome;
