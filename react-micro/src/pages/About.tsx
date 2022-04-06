import React, { useState } from "react";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { useCounter } from "router/Root";
import { HcPopup } from "../common/HcPopup";
import HcCard from "../common/HcCard";
import HcFilter from "../common/HcFilter";
import {
  HcDatePicker,
  HcDateRangePicker,
  CustomDatepicker,
} from "../common/HcDatePicker";
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
  height: fit-content;
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
      <HcCard
        title="전체 상품 수"
        date="주 단위 : 2021.10.11~2021.1"
        boxStyle="solid"
      >
        content
      </HcCard>
      <HcCard
        title="전체 상품 수"
        date="주 단위 : 2021.10.11~2021.10.17"
        boxStyle="boxShadow"
      >
        content
      </HcCard>
      <br />
      <HcDatePicker style={{ width: 387 }} />
      <HcDateRangePicker />
      <CustomDatepicker />
      <HcFilter />
      <br /> <br /> <br />
      <table style={{ top: 770 }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #CECECE", minWidth: 30 }}></th>
            <th style={{ border: "1px solid #CECECE", minWidth: 30 }}>1</th>
            <th style={{ border: "1px solid #CECECE", minWidth: 30 }}>2</th>
            <th style={{ border: "1px solid #CECECE", minWidth: 30 }}>3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #CECECE", zIndex: 1, padding: 3 }}>
              <b> 홍길동</b>
            </td>
            <td
              style={{
                position: "relative",
                border: "1px solid #CECECE",
                zIndex: 1,
                borderCollapse: "collapse",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  borderLeft: "3px solid #EE75FF",
                  width: 53,
                  borderRadius: 3,
                  top: 3,
                  backgroundColor: "#F9E9FC",
                }}
              >
                test
              </div>
            </td>
            <td style={{ border: "1px solid #CECECE", zIndex: 1, padding: 3 }}>
              1
            </td>
            <td style={{ border: "1px solid #CECECE", zIndex: 1, padding: 3 }}>
              0
            </td>
          </tr>
        </tbody>
      </table>
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
