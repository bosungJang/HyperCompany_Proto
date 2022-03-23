import { concat } from "lodash";
import React, { useState, useCallback } from "react";
import {
  getWeekdays,
  getShortMonthName,
  getDaysInWeeksInMonth,
} from "./getDays";

import { StyledSelect } from "common/HcTextField";

/* Styles */
const dayStyle = {
  borderRadius: "50%",
  cursor: "pointer",
  display: "block",
  fontSize: 14,
  height: 30,
  lineHeight: "30px",
  width: 30,
  transition: "background-color .2s ease-out",
};

const selectedDayStyle = {
  color: "white",
  backgroundColor: "#000",
};

const selectedTodayStyle = {
  color: "white",
  backgroundColor: "#ff3b30",
};

const todayStyle = {
  color: "#ff3b30",
};

const gotoToday = {
  color: "#ff3b30",
  cursor: "pointer",
  fontWeight: 500,
  fontSize: 14,
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const today = new Date();

const initialState = {
  year: today.getFullYear(),
  month: today.getMonth(),
  day: today.getDate(),
};

const Calendar = ({ debug = false, data, sum }) => {
  const [selectedDate, setDate] = useState({
    ...initialState,
  });

  const [total, setTotal] = useState(sum);

  const previousMonth = () => {
    setDate(({ year, month }) => ({
      year: month > 0 ? year : year - 1,
      month: month > 0 ? month - 1 : 11,
      day: month === today.getMonth() ? today.getDate() : 1,
    }));
  };

  const nextMonth = () => {
    setDate(({ year, month }) => ({
      year: month === 11 ? year + 1 : year,
      month: month === 11 ? 0 : month + 1,
      day: month === today.getMonth() ? today.getDate() : 1,
    }));
  };

  const selectDay = ({ target }) => {
    const { day, month, year } = target.dataset;

    setDate({
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });
  };

  const setToday = () => {
    selectDay.call(null, {
      target: {
        dataset: {
          ...initialState,
        },
      },
    });
  };

  const setFinance = (d, w) => {
    let tempArray = [];
    var tempSum = 0;

    data.forEach(function (v, i) {
      if (v.month === w + 1) {
        tempArray.push(data[i]);
      }
    });

    if (tempArray.findIndex((x) => x.day === d) != -1) {
      tempSum =
        total +
        tempArray[tempArray.findIndex((x) => x.day === d)].income -
        tempArray[tempArray.findIndex((x) => x.day === d)].expense;

      return (
        <>
          <div
            style={{
              color: "#FC8416",
              fontWeight: 700,
              fontSize: "14px",
              fontFamily: "Noto Sans KR",
              textAlign: "end",
              marginTop: "14px",
            }}
          >
            -{tempArray[tempArray.findIndex((x) => x.day === d)].expense}
          </div>
          <div
            style={{
              color: "#257CFF",
              fontWeight: 700,
              fontSize: "14px",
              fontFamily: "Noto Sans KR",
              textAlign: "end",
              marginTop: "11px",
            }}
          >
            +{tempArray[tempArray.findIndex((x) => x.day === d)].income}
          </div>
        </>
      );
    }
  };

  const SetSumFinance = (d, w) => {
    let tempArray = [];
    var tempSum = 0;

    data.forEach(function (v, i) {
      if (v.month === w + 1) {
        tempArray.push(data[i]);
      }
    });

    let income = 0;
    let expense = 0;

    if (tempArray[tempArray.findIndex((x) => x.day === d)] != null) {
      income = tempArray[tempArray.findIndex((x) => x.day === d)].income;
      expense = tempArray[tempArray.findIndex((x) => x.day === d)].expense;
    }

    return (
      <>
        <div style={{ height: "18px" }}>
          <span
            style={{
              color: "#257CFF",
              fontSize: "12px",
              fontWeight: 500,
              fontFamily: "Noto Sans KR",
              float: "right",
            }}
          >
            {income - expense > 0
              ? concat("+", income - expense)
              : income - expense}
          </span>
        </div>
        <div style={{ height: "18px", marginTop: "4px" }}>
          <span
            style={{
              color: "#2D2D31",
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: "Noto Sans KR",
              float: "right",
            }}
          >
            {total}
          </span>
        </div>
      </>
    );
  };

  const changeChar = (d) => {
    switch (d) {
      case "Monday":
        return "월";
      case "Tuesday":
        return "화";
      case "Wednesday":
        return "수";
      case "Thursday":
        return "목";
      case "Friday":
        return "금";
      case "Saturday":
        return "토";
      case "Sunday":
        return "일";
      default:
        return d;
    }
  };

  return (
    <>
      <div style={{ width: "inherit" }}>
        <div>
          <div
            style={{
              color: "#303030",
              fontWeight: 500,
              userSelect: "none",
              width: "max-content",
              fontSize: "20px",
              fontFamily: "Noto Sans KR",
              marginBottom: "16px",
              display: "inline-block",
            }}
          >
            <span
              onClick={previousMonth}
              style={{
                display: "inline-block",
                float: "left",
                cursor: "pointer",
                marginRight: "8px",
              }}
            >
              ❮
            </span>
            <span>{`${getShortMonthName(selectedDate.month)} ${
              selectedDate.year
            }`}</span>
            <span
              onClick={nextMonth}
              style={{
                display: "inline-block",
                float: "right",
                cursor: "pointer",
                marginLeft: "8px",
              }}
            >
              ❯
            </span>
          </div>
          <div style={{ position: "relative", display: "inline-block" }}>
            <StyledSelect
              style={{
                width: "220px",
                display: "inline-block",
                height: "36px",
                marginLeft: "18px",
              }}
            >
              <option value="" hidden>
                회계 달력
              </option>
              <option value={1}>회계 달력1</option>
            </StyledSelect>
            <div style={{ position: "absolute", left: "160px", top: "8px" }}>
              연동됨
            </div>
          </div>
        </div>
        <table
          role="grid"
          style={{
            backgroundColor: "#FFFFFF",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            width: "100%",
            margin: "auto",
          }}
        >
          <thead
            style={{
              borderBottom: "1px solid #e1e1e1",
            }}
          >
            <tr>
              {getWeekdays().map((d, i) => {
                const isWeekend = i > 4;
                const weekendStyle = {
                  color: "#5D5D62",
                };

                return (
                  <th
                    key={d}
                    scope="col"
                    role="columnheader"
                    aria-label={d}
                    style={{
                      fontFamily: "Noto Sans KR",
                      fontSize: 16,
                      fontWeight: 500,
                      padding: "16px 11px",
                      textAlign: "end",
                      ...(isWeekend ? weekendStyle : { color: "black" }),
                    }}
                  >
                    {changeChar(d)}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {getDaysInWeeksInMonth(selectedDate.year, selectedDate.month).map(
              (w, i) => (
                <tr
                  key={`week_${i}`}
                  style={{
                    borderBottom: "1px solid #e1e1e1",
                    height: "184px",
                  }}
                >
                  {w.map((d, i) => {
                    const date = new Date();
                    const isToday =
                      d === date.getDate() &&
                      selectedDate.month === date.getMonth();
                    const isSelectedDay = d === selectedDate.day;
                    const isWeekend = i > 4;
                    const weekendStyle = {
                      color: "#a4a4a4",
                    };

                    return (
                      <td
                        key={`day_${i}`}
                        style={{
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            height: "132px",
                            padding: "7px 8px",
                            ...(isWeekend ? { background: "#F9F9F9" } : {}),
                            ...(d == null ? { background: "#F9F9F9" } : {}),
                          }}
                        >
                          <div style={{ display: "flow-root" }}>
                            <span
                              onClick={selectDay}
                              data-day={d}
                              data-month={selectedDate.month}
                              data-year={selectedDate.year}
                              style={{
                                /*
                              ...dayStyle,
                              ...(isWeekend ? weekendStyle : {}),
                              ...(isToday && isSelectedDay
                                ? selectedTodayStyle
                                : isSelectedDay
                                ? selectedDayStyle
                                : isToday && !isSelectedDay
                                ? todayStyle
                                : null),
                                */
                                fontFamily: "Noto Sans KR",
                                fontWeight: 400,
                                fontSize: "14px",
                                color: "#5D5D62",
                                float: "right",
                              }}
                            >
                              {!!d && d}
                              {d != null ? "일" : ""}
                            </span>
                          </div>
                          <div>{setFinance(d, selectedDate.month)}</div>
                        </div>
                        <div
                          style={{
                            height: "52px",
                            background: "#EFF5FF",
                            padding: "6px 7px",
                          }}
                        >
                          {SetSumFinance(d, selectedDate.month)}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              )
            )}
          </tbody>
          {/*
          <tfoot>
            <tr>
              <td style={gotoToday} onClick={setToday}>
                Today
              </td>
            </tr>

            {debug && (
              <tr>
                <td>
                  <pre>
                    {JSON.stringify(
                      getDaysInWeeksInMonth(
                        selectedDate.year,
                        selectedDate.month
                      ),
                      null,
                      8
                    )}
                    {console.log(
                      getDaysInWeeksInMonth(
                        selectedDate.year,
                        selectedDate.month
                      ),
                      null,
                      8
                    )}
                  </pre>
                </td>
              </tr>
            )}
          </tfoot>
          */}
        </table>
      </div>
    </>
  );
};

export default Calendar;
