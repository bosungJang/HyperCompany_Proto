import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  id: string;
}

const Appointment = ({ match }: RouteComponentProps<MatchParams>) => {
  return <div>Appointment</div>;
};

export default Appointment;
