import styled from "styled-components";

const SvgCnt = styled.div`
  position: absolute;
  background: #257cff;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 6px;
  border: 2px solid #ffffff;
`;
const BgCnt = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 3px 2px 3px 3.2px;
  position: relative;

  text-align: center;
  align-items: center;
`;
const styles = {
  none: { background: "#E0E0E0" },
  noneBorder: { background: "#F4F4F4" },
  nowBorder: { background: "#88B8FF" },
  now: { background: "#257CFF" },
  prev: { background: "#88B8FF" },
  prevBorder: { background: "#ADCEFF" },
  p: {
    fontFamily: "Noto Sans KR",
    fontSize: "14px",
    position: "absolute",
    width: "80px",
    height: "fitContent",
  },
};

export function HcSteps(props: any) {
  const { style, steps } = props;

  const StepProgress = steps.map((step: any) => (
    <li
      style={{
        float: "left",
        position: "relative",
        marginRight: step.id !== 5 ? 180 : 0,
      }}
    >
      <BgCnt
        style={
          step.state === "none"
            ? styles.noneBorder
            : step.state === "prev"
            ? styles.prevBorder
            : styles.nowBorder
        }
      >
        <SvgCnt
          style={
            step.state === "none"
              ? styles.none
              : step.state === "prev"
              ? styles.prev
              : styles.now
          }
        >
          {step.id !== 6 ? (
            <div
              style={{
                width: 160,
                height: step.id === 1 ? 0 : 2,
                position: "absolute",
                top: 15,
                right: 45,
                background:
                  step.state === "none"
                    ? "#C4C4C4"
                    : step.state === "prev"
                    ? "#ADCEFF"
                    : `linear-gradient(to right, rgb(173, 206, 255) , rgb(87, 153, 251) )`,
              }}
            />
          ) : (
            ""
          )}

          {step.state !== "prev" ? (
            step.icon
          ) : (
            <svg
              style={{ marginTop: "-2px" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.7553 7.31328C18.3654 6.9221 17.7333 6.9221 17.3434 7.31328L10.051 14.63L6.72379 11.2916C6.33392 10.9005 5.70181 10.9005 5.31194 11.2916C4.92206 11.6828 4.92206 12.317 5.31194 12.7082L9.24491 16.6543C9.26234 16.6718 9.28026 16.6885 9.29863 16.7044C9.31353 16.7216 9.32911 16.7383 9.34536 16.7546C9.73524 17.1458 10.3673 17.1458 10.7572 16.7546L18.7553 8.72984C19.1452 8.33867 19.1452 7.70445 18.7553 7.31328Z"
                fill="white"
              />
            </svg>
          )}
        </SvgCnt>
      </BgCnt>
      <p
        style={{
          color:
            step.state === "none"
              ? "#A7A7A7"
              : step.state === "prev"
              ? "#5799FB"
              : "#257CFF",
          fontFamily: "Noto Sans KR",
          fontSize: "14px",
          width: "fitContent",
          height: "fitContent",
          fontWeight: 700,
          marginTop: 5,
          whiteSpace: "nowrap",
          position: "absolute",
          left: step.id < 4 ? "-20%" : "-50%",
        }}
      >
        {step.name}
      </p>
      <p
        style={{
          color:
            step.state === "none"
              ? "#A7A7A7"
              : step.state === "prev"
              ? "#838181"
              : "#000000",
          fontFamily: "Noto Sans KR",
          fontSize: "11px",
          fontWeight: 400,
          marginTop: -15,
          position: "absolute",
          whiteSpace: "nowrap",
          marginLeft: -40,
          top: 80,
        }}
      >
        {step.period}
      </p>
    </li>
  ));

  return (
    <div
      style={Object.assign(
        {
          width: 1240,
          height: 129,
          padding: "10px 0px 36px 0",
          display: "block",
          borderBottom: "1px solid #E0E0E0",
        },
        style
      )}
    >
      <ul style={{ padding: "0px 162px 0px 158px" }}>{StepProgress}</ul>
    </div>
  );
}

export function HcVerticalSteps(props: any) {
  const { style, steps } = props;

  const StepProgress = steps.map((step: any) => (
    <li
      style={{
        position: "relative",
        marginBottom: step.id !== 5 ? 186 : 0,
      }}
    >
      <BgCnt
        style={
          step.state === "none"
            ? styles.noneBorder
            : step.state === "prev"
            ? styles.prevBorder
            : styles.nowBorder
        }
      >
        <SvgCnt
          style={
            step.state === "none"
              ? styles.none
              : step.state === "prev"
              ? styles.prev
              : styles.now
          }
        >
          {step.id !== 6 ? (
            <div
              style={{
                height: 120,
                width: step.id === 1 ? 0 : 2,
                position: "absolute",
                bottom: 45,
                left: 16,
                background:
                  step.state === "none"
                    ? "#C4C4C4"
                    : step.state === "prev"
                    ? "#ADCEFF"
                    : `linear-gradient(to right, rgb(173, 206, 255) , rgb(87, 153, 251) )`,
              }}
            />
          ) : (
            ""
          )}

          {step.state !== "prev" ? (
            step.icon
          ) : (
            <svg
              style={{ marginTop: "-2px" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.7553 7.31328C18.3654 6.9221 17.7333 6.9221 17.3434 7.31328L10.051 14.63L6.72379 11.2916C6.33392 10.9005 5.70181 10.9005 5.31194 11.2916C4.92206 11.6828 4.92206 12.317 5.31194 12.7082L9.24491 16.6543C9.26234 16.6718 9.28026 16.6885 9.29863 16.7044C9.31353 16.7216 9.32911 16.7383 9.34536 16.7546C9.73524 17.1458 10.3673 17.1458 10.7572 16.7546L18.7553 8.72984C19.1452 8.33867 19.1452 7.70445 18.7553 7.31328Z"
                fill="white"
              />
            </svg>
          )}
        </SvgCnt>
      </BgCnt>
      <p
        style={{
          color:
            step.state === "none"
              ? "#A7A7A7"
              : step.state === "prev"
              ? "#5799FB"
              : "#257CFF",
          fontFamily: "Noto Sans KR",
          fontSize: "14px",
          width: "fitContent",
          height: "fitContent",
          fontWeight: 700,
          marginTop: 5,
          whiteSpace: "nowrap",
          position: "absolute",
          right: step.id < 4 ? "48%" : "30%",
        }}
      >
        {step.name}
      </p>
      <p
        style={{
          color:
            step.state === "none"
              ? "#A7A7A7"
              : step.state === "prev"
              ? "#838181"
              : "#000000",
          fontFamily: "Noto Sans KR",
          fontSize: "11px",
          fontWeight: 400,
          marginTop: -15,
          position: "absolute",
          whiteSpace: "nowrap",
          marginLeft: -40,
          top: 80,
        }}
      >
        {step.period}
      </p>
    </li>
  ));

  return (
    <ul style={{ padding: "10px 0px 0px 46px", width: "100%", height: "100%" }}>
      {StepProgress}
    </ul>
  );
}
