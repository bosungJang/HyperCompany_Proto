import React, { CSSProperties, useState } from "react";
import styled, { keyframes } from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HcButton from "./HcButton";
import "./react-datepicker.scss";
import ko from "date-fns/locale/ko";
import { getMonth, getYear, addDays, subDays } from "date-fns";
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
export const CustomDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ClickNext = () => {
    setStartDate(addDays(startDate, 1));
  };
  const ClickPrev = () => {
    setStartDate(subDays(startDate, 1));
  };
  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick }: any, ref: any) => (
      <div
        style={{
          display: "flex",
          msUserSelect: "none",
          MozUserSelect: "-moz-none",
          KhtmlUserSelect: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        <svg
          onClick={ClickPrev}
          style={{ marginRight: "16px", marginTop: "10px" }}
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.70711 0.707107C7.31658 0.316583 6.68342 0.316583 6.29289 0.707107L0.636154 6.36384L0.636038 6.36396C0.245513 6.75448 0.245514 7.38765 0.636038 7.77817C0.64036 7.7825 0.644711 7.78677 0.649092 7.791L6.29301 13.4349C6.68353 13.8254 7.3167 13.8254 7.70722 13.4349C8.09775 13.0444 8.09775 12.4112 7.70722 12.0207L2.75747 7.07095L7.70711 2.12132C8.09763 1.7308 8.09763 1.09763 7.70711 0.707107Z"
            fill="#5D5D62"
          />
        </svg>

        <p
          onClick={onClick}
          ref={ref}
          style={{
            fontSize: "22px",
            color: "#303030",
            backgroundColor: "none",
            fontWeight: 700,

            position: "relative",
            fontFamily: "Noto Sans KR",
          }}
        >
          {value}
          <svg
            style={{ position: "absolute", left: 175, top: 6 }}
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.66683 3.646C6.66683 3.19726 7.0306 2.8335 7.47933 2.8335C7.92806 2.8335 8.29183 3.19726 8.29183 3.646V5.00016H14.2502V3.646C14.2502 3.19726 14.6139 2.8335 15.0627 2.8335C15.5114 2.8335 15.8752 3.19726 15.8752 3.646V5.00016H17.6668C18.7714 5.00016 19.6668 5.89559 19.6668 7.00016V18.1668C19.6668 19.2714 18.7714 20.1668 17.6668 20.1668H4.3335C3.22893 20.1668 2.3335 19.2714 2.3335 18.1668V7.00016C2.3335 5.89559 3.22893 5.00016 4.3335 5.00016H6.66683V3.646ZM4.3335 6.50016H17.6668C17.943 6.50016 18.1668 6.72402 18.1668 7.00016V8.79183H3.8335V7.00016C3.8335 6.72402 4.05736 6.50016 4.3335 6.50016ZM3.8335 10.4168V18.1668C3.8335 18.443 4.05735 18.6668 4.3335 18.6668H17.6668C17.943 18.6668 18.1668 18.443 18.1668 18.1668V10.4168H3.8335Z"
              fill="black"
            />
          </svg>
        </p>
        <svg
          onClick={ClickNext}
          style={{ marginLeft: "36px", marginTop: "10px" }}
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.292893 13.7929C0.683418 14.1834 1.31658 14.1834 1.70711 13.7929L7.36385 8.13616L7.36396 8.13604C7.75449 7.74552 7.75449 7.11235 7.36396 6.72183C7.35964 6.7175 7.35529 6.71323 7.35091 6.709L1.70699 1.06509C1.31647 0.674563 0.683302 0.674562 0.292778 1.06509C-0.0977469 1.45561 -0.0977463 2.08878 0.292778 2.4793L5.24253 7.42905L0.292893 12.3787C-0.0976309 12.7692 -0.0976309 13.4024 0.292893 13.7929Z"
            fill="#5D5D62"
          />
        </svg>
        <HcButton
          onClick={() => {
            setStartDate(new Date());
          }}
          styles={"line"}
          size={"medium"}
          style={{ marginLeft: 15 }}
        >
          오늘
        </HcButton>
      </div>
    )
  );
  return (
    <div style={{ width: "fit-content", height: "fit-content" }}>
      {" "}
      <DatePicker
        selected={startDate}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(date: Date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};
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
