import React, { CSSProperties, useState } from "react";
import styled, { keyframes } from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import ko from "date-fns/locale/ko";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";

const DatePickerContainer = styled.div`
  // position: absolute;
  margin-top: 20;
`;
export function HcDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  registerLocale("ko", ko);
  return (
    <DatePickerContainer>
      <span style={{ marginLeft: 0 }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.2929 14.3989C1.9113 14.3989 1.6001 14.0875 1.6001 13.7049V6.41339L14.4001 6.41339V13.7049C14.4001 14.0875 14.0897 14.3989 13.7065 14.3989H2.2929ZM13.7065 3.19931C14.0897 3.19931 14.4001 3.51071 14.4001 3.89336V4.81236H1.6001V3.89336C1.6001 3.51071 1.9113 3.19931 2.2929 3.19931L13.7065 3.19931ZM12.4862 1.59833V0.758085C12.4862 0.341018 12.1446 -8.37645e-10 11.7278 -8.37645e-10H11.5934C11.1766 -8.37645e-10 10.8358 0.341018 10.8358 0.758085V1.59833H5.3119V0.782901C5.3119 0.365834 4.9703 0.0248159 4.5543 0.0248159H4.4199C4.0023 0.0248159 3.6615 0.365834 3.6615 0.782901V1.59833H2.2928C1.0288 1.59833 0 2.62779 0 3.8934V13.7049C0 14.9705 1.0288 16 2.2928 16H13.7064C14.9712 16 16 14.9705 16 13.7049V3.8934C16 2.62779 14.9712 1.59833 13.7064 1.59833H12.4862Z"
            fill="#A7A7A7"
          />
        </svg>
      </span>
      <DatePicker
        locale="ko"
        dateFormat="yyyy.MM.dd"
        disabledKeyboardNavigation
        customInput={
          <input
            style={{
              borderRadius: 3,
              height: 36,
              width: 400,
              border: "1px solid #CECECE",
              paddingLeft: 12,
            }}
          ></input>
        }
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </DatePickerContainer>
  );
}
const CustomInput = styled.input`
  border-radius: 3px;
  height: 36px;
  width: 170px;
  border: 1px solid #cecece;
  padding-left: 12px;
`;
export function HcDateRangePicker() {
  const [startDate, setStartDate] = useState(new Date()); //1
  const [endDate, setEndDate] = useState(new Date()); //1
  return (
    <>
      <div style={{ float: "left" }}>
        <DatePicker
          dateFormat="yyyy.MM.dd"
          customInput={<CustomInput />}
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <svg
        width="9"
        height="4"
        viewBox="0 0 9 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          float: "left",
          width: 12,
          height: 30,
          marginLeft: 24,
          marginRight: 24,
          marginTop: 4,
          color: "#656565",
        }}
      >
        <path
          d="M5.86593 3.108C6.62193 3.108 7.41993 2.674 8.13393 1.54L7.05593 0.728C6.71993 1.33 6.34193 1.638 5.89393 1.638C5.02593 1.638 4.43793 0.406 3.14993 0.406C2.37993 0.406 1.59593 0.84 0.86793 1.988L1.94593 2.8C2.28193 2.184 2.67393 1.876 3.10793 1.876C3.98993 1.876 4.56393 3.108 5.86593 3.108Z"
          fill="#3C3C3C"
        />
      </svg>
      <div style={{ float: "left" }}>
        <DatePicker
          dateFormat="yyyy.MM.dd"
          customInput={<CustomInput />}
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </>
  );
}
