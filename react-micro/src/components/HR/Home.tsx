import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  id: string;
}

const HRHome = ({ match }: RouteComponentProps<MatchParams>) => {
  return <div>포스트</div>;
};

export default HRHome;
