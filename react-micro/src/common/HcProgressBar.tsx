import styled from "styled-components";

const Bar = styled.div`
  height: 12px;
  width: 140px;
  background: #d9d9d9;
  border-radius: 2px;
`;
const PercentageBarCnt = styled.div`
  height: 12px;
  width: 140px;
  display: flex;
  border-radius: 17px;
  background: #ffc123;
`;
const StyledFiller = styled.div`
  background: linear-gradient(270deg, #0150c6 0%, #267dff 96.59%);
  height: 100%;
  border-radius: inherit;
  transition: 0.5s;
`;

const Filler = (props?: any) => {
  return (
    <StyledFiller
      style={Object.assign({ width: `${props.percentage}%` }, props.style)}
    />
  );
};

const ProgressBar = (props?: any) => {
  const { percentage, style } = props;
  return (
    <Bar style={style}>
      <Filler
        percentage={percentage}
        style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
      />
    </Bar>
  );
};
export default ProgressBar;

export const PercentageBar = (props?: any) => {
  const { first, second, third, style } = props;
  return (
    <PercentageBarCnt style={style}>
      <Filler
        percentage={first}
        style={{ background: "#257CFF", borderRadius: "17px 0px 0px 17px" }}
      />
      <Filler
        percentage={second}
        style={{ background: "#2BB3BC", borderRadius: 0 }}
      />
    </PercentageBarCnt>
  );
};
