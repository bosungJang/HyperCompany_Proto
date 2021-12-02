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

const Title = styled.div`
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
`;

const Wrapper = styled.div`
  display: inline-table;
`;

interface IProps {
  titleName: string;
  disabled?: boolean;
  style?: CSSProperties;
  value?: string | number;
  maxlength?: string;
  id?: string;
  name?: string;
  onKeyDown?: (e: any) => void;
}

const HcTextField: React.FC<IProps> = ({ titleName, ...props }) => {
  return (
    <Wrapper>
      <Title>{titleName}</Title>
      <TextField {...props}>{props.children}</TextField>
    </Wrapper>
  );
};

export default HcTextField;
