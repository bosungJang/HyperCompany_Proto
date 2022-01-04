import React, { useState } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { useCounter } from "router/Root";
import { HcPopup } from "../common/HcPopup";
import HcCard from "../common/HcCard";
import HcFilter from "../common/HcFilter";
import { HcDatePicker, HcDateRangePicker } from "../common/HcDatePicker";
import styled from "styled-components";
interface MatchParams {
  name: string;
}

const ComponentWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  display: block;
  padding: 20px 40px;
`;
const About = ({ location, match }: RouteComponentProps<MatchParams>) => {
  const query = queryString.parse(location.search);

  const myCounter = useCounter();

  const detail = query.detail === "true";

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ComponentWrapper>
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
      {/* <br />
      <HcNavButton /> */}
      <button onClick={openModal}>click</button>
      <HcCard />
      <br />
      <HcDatePicker />
      <HcDateRangePicker />
      <HcFilter />

      <br />

      <HcPopup open={modalOpen} close={closeModal} header="Pop-up Title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est similique
        saepe officia, vel sed pariatur tenetur nobis placeat commodi, dolorum
        maiores deserunt odit asperiores perferendis animi alias totam, dolore
        laboriosam.
      </HcPopup>
    </ComponentWrapper>
  );
};

export default About;
