import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Icon = styled.svg<{ disabled?: boolean }>`
  fill: none;
  stroke: ${(props) => (props.disabled ? "#C4C4C4" : "#257cff")};
  stroke-width: 3px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.disabled ? "#EDEDED" : "#ffffff")};
  border-radius: 2px;
  border: ${(props) =>
    props.disabled
      ? "1.5px solid #CECECE"
      : props.checked
      ? "1.5px solid #257CFF"
      : " 1.5px solid #a7a7a7;"};
  transition: all 150ms;

  ${HiddenCheckbox}:hover + & {
    ${(props) => (props.disabled ? null : "box-shadow: 0 0 0 1px #257cff")};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
  disabled?: boolean;
}

const Checkbox: React.FC<IProps> = ({
  className,
  checked,
  labelWrap = true,
  ...props
}) => {
  const content = (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} disabled={props.disabled}>
        <Icon viewBox="0 5 24 24" disabled={props.disabled}>
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return labelWrap ? <label>{content}</label> : <>{content}</>;
};

export default Checkbox;
