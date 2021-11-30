import React from "react";
import styled from "styled-components";

const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const ToggleLabel = styled.label<{ toggled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 46px;
  height: 24px;
  border-radius: 32px;
  background: ${(props) => (props.toggled ? " #257CFF" : "#a7a7a7")};
  position: relative;
  transition: background-color 0.2s;
`;

const ToggleButton = styled.span<{ toggled: boolean }>`
  content: "";
  position: absolute;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 45px;
  transition: 0.2s;
  background: #ffffff;

  ${(props) =>
    props.toggled
      ? "left: calc(100% - 2px); transform: translateX(-100%);"
      : null}
`;

interface IProps {
  id: string;
  toggled: boolean;
  onChange: (e: any) => void;
}

const HcToggleBtn: React.FC<IProps> = ({ id, toggled, onChange }) => {
  return (
    <>
      <ToggleInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <ToggleLabel className="switch-label" htmlFor={id} toggled={toggled}>
        <ToggleButton className="switch-button" toggled={toggled} />
      </ToggleLabel>
    </>
  );
};

export default HcToggleBtn;
