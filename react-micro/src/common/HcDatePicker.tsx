import React, { CSSProperties, useState } from "react";
import styled, { keyframes } from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HcButton from "./HcButton";
import "./react-datepicker.scss";
import ko from "date-fns/locale/ko";
import { getMonth, getYear, add, sub } from "date-fns";
import range from "lodash/range";
import { Title } from "../common/HcTextField";
const StyledInput = styled.input`
  border-radius: 3px;
  height: 36px;
  width: 387px;
  border: 1px solid #cecece;
  padding-left: 12px;
`;
const DatePickerContainer = styled.div`
  position: relative;
`;
interface DatePickerIProps {
  disabled?: boolean;
  style?: CSSProperties;
  startDate?: Date;
  setStartDate?: any;
  required?: boolean;
  titleName?: string;
}
export const HcDatePicker: React.FC<DatePickerIProps> = ({ ...props }) => {
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
      {props.titleName ? (
        <Title required={props.required ? true : false}>
          {props.titleName}
        </Title>
      ) : (
        ""
      )}
      <DatePicker
        locale="ko"
        dateFormat="yyyy.MM.dd"
        disabledKeyboardNavigation
        customInput={
          <StyledInput
            style={props.style}
            disabled={props.disabled}
          ></StyledInput>
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
        selected={props.startDate ? props.startDate : startDate}
        onChange={(date: Date) => {
          if (props.setStartDate) props.setStartDate(date);
          else setStartDate(date);
        }}
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          zIndex: 3,
          top: 34,
          right: 36,
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4.75C8 4.33579 8.33579 4 8.75 4C9.16421 4 9.5 4.33579 9.5 4.75V6H15V4.75C15 4.33579 15.3358 4 15.75 4C16.1642 4 16.5 4.33579 16.5 4.75V6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8C4 6.89543 4.89543 6 6 6H8V4.75ZM6 7.5H18C18.2761 7.5 18.5 7.72386 18.5 8V9.5H5.5V8C5.5 7.72386 5.72386 7.5 6 7.5ZM5.5 11V18C5.5 18.2761 5.72386 18.5 6 18.5H18C18.2761 18.5 18.5 18.2761 18.5 18V11H5.5Z"
          fill="#5D5D62"
        />
      </svg>
    </DatePickerContainer>
  );
};
const CustomInput = styled.input`
  border-radius: 3px;
  height: 40px;
  width: 160px;
  border: 1px solid #cecece;
  padding-left: 12px;
`;
export const CustomDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ClickNext = () => {
    setStartDate(add(startDate, { days: 1 }));
  };
  const ClickPrev = () => {
    setStartDate(sub(startDate, { days: 1 }));
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
export const DatePickerOption = (props?: any) => {
  const { date, setDate, option, style } = props; //option: day,year,all

  const ClickNext = () => {
    switch (option) {
      case "month":
        setDate(add(date, { months: 1 }));
        break;
      case "day":
        setDate(add(date, { days: 1 }));
        break;
      default:
        setDate(add(date, { years: 1 }));
        break;
    }
  };
  const ClickPrev = () => {
    switch (option) {
      case "month":
        setDate(sub(date, { months: 1 }));
        break;
      case "day":
        setDate(sub(date, { days: 1 }));
        break;
      default:
        setDate(sub(date, { years: 1 }));
        break;
    }
  };
  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick }: any, ref: any) => (
      <div
        style={Object.assign(
          {
            display: "flex",
            msUserSelect: "none",
            MozUserSelect: "-moz-none",
            KhtmlUserSelect: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
            position: "relative",
            width: "fit-content",
          },
          style
        )}
      >
        <svg
          onClick={ClickPrev}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: 10 }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7071 3.70711C12.3166 3.31658 11.6834 3.31658 11.2929 3.70711L5.63615 9.36384L5.63604 9.36396C5.24551 9.75448 5.24551 10.3876 5.63604 10.7782C5.64036 10.7825 5.64471 10.7868 5.64909 10.791L11.293 16.4349C11.6835 16.8254 12.3167 16.8254 12.7072 16.4349C13.0977 16.0444 13.0977 15.4112 12.7072 15.0207L7.75747 10.071L12.7071 5.12132C13.0976 4.7308 13.0976 4.09763 12.7071 3.70711Z"
            fill="#838181"
          />
        </svg>

        <div
          onClick={onClick}
          ref={ref}
          style={{
            fontSize: "15px",
            color: "#5D5D62",
            backgroundColor: "none",
            fontWeight: 500,
            position: "relative",
            bottom: 3,
            fontFamily: "Noto Sans KR",
            display: "flex",
            minWidth:
              option === "all" ? "150px" : option === "year" ? "70px" : "50px",
            maxWidth: "unset",
          }}
        >
          {value}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "relative", left: 8, top: 3 }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 0.75C4 0.335786 4.33579 0 4.75 0C5.16421 0 5.5 0.335786 5.5 0.75V2H11V0.75C11 0.335786 11.3358 0 11.75 0C12.1642 0 12.5 0.335786 12.5 0.75V2H14C15.1046 2 16 2.89543 16 4V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V4C0 2.89543 0.895431 2 2 2H4V0.75ZM2 3.5H14C14.2761 3.5 14.5 3.72386 14.5 4V5.5H1.5V4C1.5 3.72386 1.72386 3.5 2 3.5ZM1.5 7V14C1.5 14.2761 1.72386 14.5 2 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V7H1.5Z"
              fill="#5D5D62"
            />
          </svg>
        </div>
        <svg
          onClick={ClickNext}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginLeft: 14 }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.29289 16.2929C7.68342 16.6834 8.31658 16.6834 8.70711 16.2929L14.3638 10.6362L14.364 10.636C14.7545 10.2455 14.7545 9.61235 14.364 9.22183C14.3596 9.2175 14.3553 9.21323 14.3509 9.209L8.70699 3.56509C8.31647 3.17456 7.6833 3.17456 7.29278 3.56509C6.90225 3.95561 6.90225 4.58878 7.29278 4.9793L12.2425 9.92905L7.29289 14.8787C6.90237 15.2692 6.90237 15.9024 7.29289 16.2929Z"
            fill="#838181"
          />
        </svg>
      </div>
    )
  );
  return (
    <div style={{ width: "fit-content", height: "fit-content" }}>
      {" "}
      <DatePicker
        selected={date}
        dateFormat={
          option === "year"
            ? "yyyy년"
            : option === "month"
            ? "M월"
            : option === "day"
            ? "d일"
            : "yyyy년 MM월 dd일"
        }
        onChange={(date: Date) => setDate(date)}
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
          marginLeft: 14,
          marginRight: 14,
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

export const CalendarIcon = (props: any) => {
  const { style } = props;
  return (
    <svg
      style={Object.assign({ position: "absolute" }, style)}
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
        fill="#5D5D62"
      />
    </svg>
  );
};
