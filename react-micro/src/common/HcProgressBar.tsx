import styled from "styled-components";

const Bar = styled.div`
  height: 12px;
  width: 140px;
  background: #d9d9d9;
  border-radius: 2px;
`;
const StyledFiller = styled.div`
  background: linear-gradient(270deg, #005dea -8.23%, #5799fb 96.59%);
  height: 100%;
  border-radius: inherit;
  transition: 0.5s;
`;

const Filler = (props: any) => {
  return <StyledFiller style={{ width: `${props.percentage}%` }} />;
};

const ProgressBar = (props?: any) => {
  const { percentage, style } = props;
  return (
    <Bar style={style}>
      <Filler percentage={percentage} />
    </Bar>
  );
};
export default ProgressBar;
