import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcTree from "common/HcTree";
import React from "react";
import { HcTitleTextField } from "common/HcTextField";
import { CustomDatepicker } from "common/HcDatePicker";
const TimeTable = styled.table`
  height: fit-content;
  width: 986px;
  background-color: #ffffff !important;
  th,
  td {
    border: 1px solid #cecece;
    border-collapse: collapse;
  }
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-transform: uppercase;
  padding: 0;
  color: #5d5d62;
  th {
    height: 30px;
    align-items: center;
    text-align: center;
  }

  tbody tr td {
    position: relative;
    height: 70px;
  }
  tbody tr {
    &:hover {
      background-color: #ffffff;
    }
    &:active {
      background-color: #ffffff;
    }
  }
`;
const WeekTable = styled(TimeTable)`
  th {
    height: 50px;
    align-items: center;
    text-align: center;
  }
`;
const MonthTable = styled(TimeTable)``;
const weekData = [
  {
    name: "이고은",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "선택",
    work: ["정상", "정상", "연차", "정상", "정상", "정상", "정상"],
  },
  {
    name: "홍길동",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "고정",
    work: ["정상", "연차", "정상", "정상", "정상", "연차", "정상"],
  },
  {
    name: "꽃분이",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "시차",
    work: ["정상", "결근", "정상", "정상", "정상", "정상", "정상"],
  },
];
const TimeEvent = styled.div`
  height: 57px;
  padding-left: 11px;
  padding-top: 8px;
  border-radius: 2px;

  left: 6px;
  top: 6px;
  position: absolute;
`;
const DayEvent = styled(TimeEvent)`
  padding-left: 8px;
`;
const Name = styled.p`
  font-family: Noto Sans KR;
  font-size: 16px;
  color: #000000;
  margin: 0;
`;
const Position = styled.p`
  font-family: Noto Sans KR;
  font-size: 11px;
  color: #5d5d62;
`;
const Status = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 12px;
`;
const CustomSelect = styled.select`
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 3px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  height: 36px;
  width: 100px;
  border-radius: 3px;

  padding: 8px 14px 7px 7px;
`;

const timedata = [
  {
    name: "이고은",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "선택",
    start: 10,
    end: 19,
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
    type: "시차",
    start: 0,
    end: 0,
    leave: "연차",
  },
  {
    name: "홍길동",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "시차",
    start: 9,
    end: 12,
    leave: "오후반차",
  },
  {
    name: "곱단이",
    organization: "PM본부/EC2-4팀",
    responsibility: "사원",
    position: "UX연구원",
    type: "선택",
    start: 0,
    end: 0,
    leave: "해당없음",
  },
];
const MonthData = [
  {
    type: "선택",
    work: ["정상", "정상", "연차", "정상", "정상", "정상", "정상"],
  },
  {
    type: "고정",
    work: ["정상", "연차", "정상", "정상", "정상", "연차", "정상"],
  },
  {
    type: "시차",
    work: ["정상", "결근", "정상", "정상", "정상", "정상", "정상"],
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
const dayCol: number[] = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const weekCol = ["", "월", "화", "수", "목", "금", "토", "일"];
const styles = {
  pink: {
    background: "#F9E9FC",
    borderLeft: "3px solid #EE75FF",
    color: "#EE75FF",
  },
  yellow: {
    background: "#FFF6D7",
    borderLeft: "3px solid #FFA51F",
    color: "#FFA51F",
  },
  blue: {
    background: "#EFF5FF",
    borderLeft: "3px solid #5799FB",
    color: "#5799FB",
  },
  pink2: {
    background: "#F9E9FC",
    borderTop: "3px solid #EE75FF",
    color: "#EE75FF",
  },
  yellow2: {
    background: "#FFF6D7",
    borderTop: "3px solid #FFA51F",
    color: "#FFA51F",
  },
  blue2: {
    background: "#EFF5FF",
    borderTop: "3px solid #5799FB",
    color: "#5799FB",
  },
  leave: {
    color: "#A7A7A7",
    border: "1px dashed #A7A7A7",
    background: "#ffffff",
    fontSize: "12px",
  },
  absent: {
    color: "#FC5B5B",
    background: "#FFE9E9",
    border: "1px dashed #FC5B5B",
  },
};
const ContentContainer = styled.div`
  display: flex;
`;
const StyledSvg = styled.svg`
  margin-top: 6px;
`;
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
  const [isSelect, setIsSelect] = React.useState("1");
  /*Tree*/
  const [isCreate, setIsCreates] = React.useState(false);
  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: 0,
    title: "",
  });
  /* Current Data*/
  const today = new Date();
  const month = today.getMonth().toString;
  var thismonth = today.getFullYear() + "-" + { month };
  return (
    <>
      <ComponentWrapper
        style={{ position: "relative", paddingTop: "40px", display: "block" }}
      >
        <div style={{ marginBottom: "39px" }}>
          <HcTitleTextField titleName={"근무 스케쥴"} isBackIcon={false} />
        </div>
        <ContentContainer>
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
            style={{
              top: 136,
              left: 1188,
              display: "flex",
              position: "absolute",
            }}
          >
            <CustomSelect
              onChange={(e: any) => {
                setIsSelect(e.target.value);
              }}
            >
              <option value="1" key={1}>
                일
              </option>
              <option value="2" key={2}>
                주
              </option>
              <option value="3" key={3}>
                월
              </option>
            </CustomSelect>
            <StyledSvg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 14 }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 5C5.77614 5 6 5.22386 6 5.5V6C6 6.27614 5.77614 6.5 5.5 6.5H4C3.72386 6.5 3.5 6.27614 3.5 6V5.5C3.5 5.22386 3.72386 5 4 5H5.5ZM8.5 5C8.22386 5 8 5.22386 8 5.5V6C8 6.27614 8.22386 6.5 8.5 6.5H19.5C19.7761 6.5 20 6.27614 20 6V5.5C20 5.22386 19.7761 5 19.5 5H8.5ZM8 9.5C8 9.22386 8.22386 9 8.5 9H19.5C19.7761 9 20 9.22386 20 9.5V10C20 10.2761 19.7761 10.5 19.5 10.5H8.5C8.22386 10.5 8 10.2761 8 10V9.5ZM5.5 9C5.77614 9 6 9.22386 6 9.5V10C6 10.2761 5.77614 10.5 5.5 10.5H4C3.72386 10.5 3.5 10.2761 3.5 10V9.5C3.5 9.22386 3.72386 9 4 9H5.5ZM8 13.5C8 13.2239 8.22386 13 8.5 13H19.5C19.7761 13 20 13.2239 20 13.5V14C20 14.2761 19.7761 14.5 19.5 14.5H8.5C8.22386 14.5 8 14.2761 8 14V13.5ZM5.5 13C5.77614 13 6 13.2239 6 13.5V14C6 14.2761 5.77614 14.5 5.5 14.5H4C3.72386 14.5 3.5 14.2761 3.5 14V13.5C3.5 13.2239 3.72386 13 4 13H5.5ZM8 17.5C8 17.2239 8.22386 17 8.5 17H19.5C19.7761 17 20 17.2239 20 17.5V18C20 18.2761 19.7761 18.5 19.5 18.5H8.5C8.22386 18.5 8 18.2761 8 18V17.5ZM5.5 17C5.77614 17 6 17.2239 6 17.5V18C6 18.2761 5.77614 18.5 5.5 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V17.5C3.5 17.2239 3.72386 17 4 17H5.5Z"
                fill="#5D5D62"
              />
            </StyledSvg>
            <StyledSvg
              style={{ marginLeft: 10 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4.75C8 4.33579 8.33579 4 8.75 4C9.16421 4 9.5 4.33579 9.5 4.75V6H15V4.75C15 4.33579 15.3358 4 15.75 4C16.1642 4 16.5 4.33579 16.5 4.75V6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8C4 6.89543 4.89543 6 6 6H8V4.75ZM6 7.5H18C18.2761 7.5 18.5 7.72386 18.5 8V9.5H5.5V8C5.5 7.72386 5.72386 7.5 6 7.5ZM5.5 11V18C5.5 18.2761 5.72386 18.5 6 18.5H18C18.2761 18.5 18.5 18.2761 18.5 18V11H5.5Z"
                fill="#CECECE"
              />
            </StyledSvg>
          </div>
          <div
            style={{
              display: "block",
              paddingLeft: "24px",
              paddingTop: "18px",
            }}
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
            <input type="month" defaultValue={thismonth} />
            <TimeTable
              style={{
                marginTop: "69px",
                display: isSelect === "1" ? "inline" : "none",
              }}
            >
              <thead>
                <tr>
                  {timeCol.map((column) => (
                    <th
                      style={{ width: column === "" ? 171 : 34 }}
                      key={column}
                    >
                      {column === 0 ? "00" : column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timedata.map(
                  ({
                    type,
                    start,
                    end,
                    leave,
                    name,
                    organization,
                    position,
                  }) => (
                    <tr>
                      {timeCol.map((column) =>
                        column === "" ? (
                          <td style={{ paddingLeft: 12, paddingTop: 9 }}>
                            <Name>{name}</Name>
                            <Position>
                              ({organization}/{position})
                            </Position>
                          </td>
                        ) : column === 9 && leave === "오전반차" ? (
                          <td>
                            <TimeEvent
                              style={Object.assign(
                                { width: 123 },
                                styles.leave
                              )}
                            >
                              오전 반차
                            </TimeEvent>
                          </td>
                        ) : column === 13 && leave === "오후반차" ? (
                          <td>
                            <TimeEvent
                              style={Object.assign(
                                { width: 191 },
                                styles.leave
                              )}
                            >
                              오후 반차
                            </TimeEvent>
                          </td>
                        ) : column === start ? (
                          <td>
                            <TimeEvent
                              style={Object.assign(
                                {
                                  width:
                                    end - start > 0
                                      ? 55 + (end - start - 1) * 34
                                      : 802,
                                },

                                leave === "연차"
                                  ? styles.leave
                                  : start === 0
                                  ? styles.absent
                                  : type === "고정"
                                  ? styles.blue
                                  : type === "시차"
                                  ? styles.pink
                                  : type === "선택"
                                  ? styles.yellow
                                  : ""
                              )}
                            >
                              {leave == "연차" ? (
                                "연차 휴가"
                              ) : start === 0 ? (
                                <Status>결근</Status>
                              ) : (
                                <>
                                  <Status>정상</Status>
                                  <p style={{ fontSize: "10px" }}>
                                    {start}:00 ~ {end}:00
                                  </p>
                                </>
                              )}
                            </TimeEvent>
                          </td>
                        ) : (
                          <td></td>
                        )
                      )}
                    </tr>
                  )
                )}
              </tbody>
            </TimeTable>
            <WeekTable
              style={{
                marginTop: "69px",
                display: isSelect === "2" ? "inline" : "none",
              }}
            >
              <thead>
                <tr>
                  {weekCol.map((column) => (
                    <th
                      style={{
                        width: column === "" ? 173 : 116,
                        color: column === "일" ? "#F93737" : "#5D5D62",
                      }}
                      key={column}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weekData.map(
                  ({ name, position, organization, work, type }) => (
                    <tr>
                      {" "}
                      <td style={{ paddingLeft: 12, paddingTop: 9 }}>
                        <Name>{name}</Name>
                        <Position>
                          ({organization}/{position})
                        </Position>
                      </td>
                      {work.map((day) => (
                        <td>
                          <DayEvent
                            style={Object.assign(
                              {
                                width: "103px",
                              },

                              day === "연차"
                                ? styles.leave
                                : day == "결근"
                                ? styles.absent
                                : type === "고정"
                                ? styles.blue2
                                : type === "시차"
                                ? styles.pink2
                                : type === "선택"
                                ? styles.yellow2
                                : ""
                            )}
                          >
                            {day === "연차" ? (
                              "연차 휴가"
                            ) : day === "결근" ? (
                              "결근"
                            ) : (
                              <>
                                <Status>{day}</Status>
                                <p style={{ fontSize: "10px" }}>
                                  09:00 ~ 18:00
                                </p>
                              </>
                            )}
                          </DayEvent>
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </WeekTable>
            <MonthTable
              style={{
                marginTop: "69px",
                display: isSelect === "3" ? "inline" : "none",
              }}
            >
              <thead>
                <tr>
                  {dayCol.map((column) => (
                    <th style={{ width: column === 0 ? 179 : 26 }} key={column}>
                      {column === 0 ? "" : column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weekData.map(
                  ({ name, position, organization, work, type }) => (
                    <tr>
                      {" "}
                      <td style={{ paddingLeft: 12, paddingTop: 9 }}>
                        <Name>{name}</Name>
                        <Position>
                          ({organization}/{position})
                        </Position>
                      </td>
                      {work.map((day) => (
                        <td>{work.indexOf(day)}</td>
                      ))}
                      {dayCol.slice(work.length + 1, dayCol.length).map(() => (
                        <td></td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </MonthTable>
          </div>
        </ContentContainer>
      </ComponentWrapper>
    </>
  );
};
export default WorkSchedule;
