import React from "react";
import { Link, Route } from "react-router-dom";
import { HRHome, HRAppointment } from "pages";
import { RouteComponentProps } from "react-router-dom";

const HumanResourgcePage = ({ match }: RouteComponentProps) => {
  return (
    <div>
      <Route exact path={match.url} component={HRHome} />
      <Route path={`${match.url}/appointment`} component={HRAppointment} />
    </div>
  );
};

export default HumanResourgcePage;
