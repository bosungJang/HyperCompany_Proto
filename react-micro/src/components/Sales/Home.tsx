import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";

interface MatchParams {
  id: string;
}

const SalesHome = ({ match }: RouteComponentProps<MatchParams>) => {
  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper>
        <HcTitleTextField titleName="영업 홈" isBackIcon={true} />
      </ComponentWrapper>
    </div>
  );
};

export default SalesHome;
