import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcTree from "common/HcTree";
import React from "react";
import { CustomDatepicker } from "common/HcDatePicker";
const TimeTable = styled.table`
  height: fit-content;
  width: 986px;
  background-color: #ffffff;
  border: 1px solid #cecece;
  border-collapse: collapse;
  thead tr th {
    border: 1px solid #cecece;
    border-collapse: collapse;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    height: 30px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    padding: 0;
    color: #5d5d62;
  }
  tbody tr td {
    position: relative;
    border: 1px solid #cecece;
    border-collapse: collapse;
    height: 70px;
  }
`;

interface EventType {
  type: String;
  start: Number | String;
  end: Number | String;
  leave: String;
}
const TimeEvent = styled.div<EventType>`
  height: 57px;
  padding-left: 11px;
  padding-top: 8px;
  border-radius: 2px;
  border: ${(props) =>
    `${props.leave !== "해당없음" ? "1px dashed #A7A7A7" : "none"}`};
  border-left: ${(props) =>
    `${
      props.leave === "해당없음" ? "3px solid #EE75FF" : "1px dashed #A7A7A7"
    }`};

  left: 6px;
  top: 6px;
  position: absolute;
  background-color: ${(props) =>
    `${
      props.leave !== "해당없음"
        ? "white"
        : props.type === "고정"
        ? "#EFF5FF"
        : props.type === "시차"
        ? "#F9E9FC"
        : "#FFF6D7"
    }`};
`;
const Name = styled.p`
  font-family: Noto Sans KR;
  font-style: bold;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;

  color: #000000;
`;
const timedata = [
  {
    name: "이고은",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "시차",
    start: 9,
    end: 18,
    leave: "해당없음",
  },
  {
    name: "홍길동",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "고정",
    start: 13,
    end: 18,
    leave: "오전반차",
  },
  {
    name: "꽃분이",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "선택",
    start: 0,
    end: 0,
    leave: "연차",
  },
];
const timeCol = [
  "",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];

const WorkSchedule = () => {
  /*Tree*/
  const [items, setItems] = React.useState([
    {
      id: "0", //table
      title: "전체",
    },
    {
      id: 1,
      title: "경영 지원",
    },
    {
      id: 2,
      title: "영업 및 마케팅",
    },
    {
      id: 3,
      title: "연구 개발",
    },
    {
      id: 4,
      title: "전산 IT",
    },
  ]);
  /*Tree*/
  const [isCreate, setIsCreates] = React.useState(false);
  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: 0,
    title: "",
  });
  /* Current Data*/
  return (
    <>
      <ComponentWrapper>
        <HcTree
          items={items}
          title="계정과목"
          search={true}
          style={{ minHeight: "832px" }}
          isCreate={isCreate}
          setIsCreates={setIsCreates}
          currentData={currentData}
          setcurrentData={setcurrentData}
        />
        <div
          style={{ display: "block", paddingLeft: "24px", paddingTop: "18px;" }}
        >
          <CustomDatepicker />
          <input
            type="week"
            name="week"
            id="camp-week"
            min="2018-W1"
            max="2030-W26"
            required
          />

          <TimeTable>
            <thead>
              <tr>
                {timeCol.map((column) => (
                  <th style={{ width: column === "" ? 171 : 34 }} key={column}>
                    {column === 0 ? "00" : column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timedata.map((data) => (
                <tr>
                  {timeCol.map((column) =>
                    column === data.start ? (
                      <td>
                        <TimeEvent
                          type={data.type}
                          start={data.start}
                          end={data.end}
                          leave={data.leave}
                          style={{
                            width: data.start === 0 ? 802 : 123,
                          }}
                        >
                          {data.leave == "해당없음" && data.start !== 0
                            ? "정상"
                            : data.leave == "오후반차"
                            ? "오후 반차"
                            : data.leave == "오전반차"
                            ? "오전 반차"
                            : data.leave == "연차"
                            ? "연차 휴가"
                            : "결근"}
                        </TimeEvent>
                      </td>
                    ) : column === "" ? (
                      <td style={{ paddingLeft: 12 }}>
                        <Name>{data.name}</Name>
                      </td>
                    ) : (
                      <td></td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </TimeTable>
        </div>
      </ComponentWrapper>
    </>
  );
};
export default WorkSchedule;
