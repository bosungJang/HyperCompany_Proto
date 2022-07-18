import React from "react";
import styled, { CSSProperties } from "styled-components";
import { ReactComponent as FilterIcon } from "resources/images/Filter_Icon.svg";
import { ReactComponent as SettingIcon } from "resources/images/Setting_Icon.svg";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactChild;
  style?: CSSProperties;
  disabled?: boolean;
}

const ButtonWrapper = styled.button`
  width: 68px;
  height: 28px;
  display: inline-flex;
  background: #ffffff;
  border-radius: 2px;
  border: none;
  cursor: pointer;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #5b5b5b;
  align-items: center;
  justify-content: center;
`;

export const FilterButton = (props: ButtonProps) => {
  return (
    <ButtonWrapper>
      <FilterIcon />
      필터
    </ButtonWrapper>
  );
};

export const SettingButton = (props: ButtonProps) => {
  return (
    <ButtonWrapper>
      <SettingIcon />
      설정
    </ButtonWrapper>
  );
};
