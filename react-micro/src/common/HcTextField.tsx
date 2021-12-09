import React, { CSSProperties } from "react";
import styled from "styled-components";

const TextField = styled.input<{ disabled?: boolean }>`
  background: ${(props) => (props.disabled ? "#EDEDED" : "#ffffff")};
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 6px;
  width: 400px;
  height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: all 150ms;
  autocomplete: off;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-transform: uppercase;
  color: ${(props) => (props.disabled ? "#C0C0C0" : "#3c3c3c")};
  padding-left: 11px;

  &:focus-visible {
    outline: 1px solid #257cff;
  }
  &:hover {
    box-shadow: ${(props) => (props.disabled ? null : "0 0 5px #257cff")};
  }
`;

const Title = styled.div<{ required?: boolean }>`
  width: 33px;
  height: 21px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-transform: uppercase;
  color: #656565;
  margin-left: 11px;
  margin-bottom: 4px;

  ${(props) =>
    props.required ? "::after {    content: '*';    color: #ff4f4f; }" : ""}
`;

const Wrapper = styled.div`
  display: inline-table;
`;

interface TextFieldIProps {
  titleName: string;
  disabled?: boolean;
  style?: CSSProperties;
  value?: string | number;
  maxlength?: string;
  id?: string;
  name?: string;
  onKeyDown?: (e: any) => void;
  required?: boolean;
}

const HcTextField: React.FC<TextFieldIProps> = ({ titleName, ...props }) => {
  return (
    <Wrapper>
      <Title required={props.required}>{titleName}</Title>
      <TextField {...props}>{props.children}</TextField>
    </Wrapper>
  );
};

/*HcSelect */
const StyledSelect = styled.select`
  min-width: 410px;
  height: 40px;

  color: #3c3c3c;
  padding-left: 11px;
  font-size: 16px;
  border: 1px solid #cecece;
  background: url(/images/Select_Arrow.png) no-repeat 95% 50%;
  border-radius: 6px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  &::-ms-expand {
    display: none;
  }
`;

interface SelectIProps {
  titleName: string;
  disabled?: boolean;
  style?: CSSProperties;
  value?: string | number;
  required?: boolean;
}
export const HcSelect: React.FC<SelectIProps> = ({ titleName, ...props }) => {
  return (
    <Wrapper>
      <Title required={props.required}>{titleName}</Title>
      <StyledSelect {...props}>{props.children}</StyledSelect>
    </Wrapper>
  );
};

export default HcTextField;
