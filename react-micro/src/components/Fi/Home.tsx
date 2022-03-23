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
import BalkanChart from "common/Chart/BalkanOrganizationChart";
import ImageUploader from "common/HcUploader";
import HcCalendar from "common/Calendar/HcCalendar";

import HcFileUploader from "common/HcFileUploader";

interface MatchParams {
  id: string;
}
const testData =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.";

const calData = [
  { day: 3, month: 2, income: 10000, expense: 300000 },
  { day: 5, month: 4, income: 90000000000000000, expense: 20000 },
];

const FiHome = ({ match }: RouteComponentProps<MatchParams>) => {
  const sum = 100000;

  const [file, setFile]: any = React.useState([]);

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

      <ComponentWrapper>
        <div style={{ width: "100%" }}>
          <BalkanChart
            nodes={[
              {
                id: 1,
                name: "장보성",
                title: "본부장",
                position: "티맥스 소프트",
                department: "티맥스 소프트",
                number: 130,
                img: "https://cdn.balkan.app/shared/2.jpg",
              },
              {
                id: 2,
                pid: 1,
                name: "장보성",
                title: "본부장",
                position: "티맥스 소프트",
                department: "티맥스 소프트",
                number: 130,
                img: "https://cdn.balkan.app/shared/3.jpg",
              },
              {
                id: 3,
                pid: 1,
                name: "장보성",
                title: "본부장",
                position: "티맥스 소프트",
                department: "티맥스 소프트",
                number: 130,
                img: "https://cdn.balkan.app/shared/4.jpg",
              },
              {
                id: 4,
                pid: 2,
                name: "장보성",
                title: "본부장",
                position: "티맥스 소프트",
                department: "티맥스 소프트",
                number: 130,
                img: "https://cdn.balkan.app/shared/5.jpg",
              },
              {
                id: 5,
                pid: 2,
                name: "장보성",
                title: "본부장",
                position: "티맥스 소프트",
                department: "티맥스 소프트",
                number: 130,
                img: "https://cdn.balkan.app/shared/6.jpg",
              },
              {
                id: 6,
                pid: 3,
                name: "장보성",
                title: "본부장",
                position: "티맥스 소프트",
                department: "티맥스 소프트",
                number: 130,
                img: "https://cdn.balkan.app/shared/7.jpg",
              },
              {
                id: 7,
                pid: 3,
                name: "장보성",
                title: "본부장",
                position: "티맥스 소프트",
                department: "티맥스 소프트",
                number: 130,
                img: "https://cdn.balkan.app/shared/8.jpg",
              },
            ]}
          />
        </div>
      </ComponentWrapper>

      <ComponentWrapper>
        <HcFileUploader file={file} setFile={setFile} />
      </ComponentWrapper>

      <ComponentWrapper>
        <HcCalendar data={calData} sum={sum} />
      </ComponentWrapper>
    </div>
  );
};

export default FiHome;
