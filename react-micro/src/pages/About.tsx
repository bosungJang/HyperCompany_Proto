import React from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { useCounter } from "router/Root";
import Popup from "../common/HcPopup";
import HcCard from "../common/HcCard";

interface MatchParams {
  name: string;
}

const About = ({ location, match }: RouteComponentProps<MatchParams>) => {
  const query = queryString.parse(location.search);

  const myCounter = useCounter();

  const detail = query.detail === "true";

  return (
    <div>
      <span
        style={{
          fontFamily: "Noto Sans KR",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 32,
        }}
      >
        인사 발령 {match.params.name}
      </span>
      <hr />
      {detail && "detail: blahblah"}
      {myCounter.number}
      <Popup>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ad ratione
        ea id odit magnam commodi, aperiam, quo similique dolorem qui eos neque.
        Repellendus pariatur, vel reiciendis corrupti neque dolorum?
      </Popup>
      <HcCard />
    </div>
  );
};

export default About;
