import React, { Children } from "react";
import styled, { CSSProperties } from "styled-components";

const LineButton = styled.button`
  border: 1px solid #a7a7a7;
  box-sizing: border-box;
  border-radius: 4px;
  background: #ffffff;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  min-width: 80px;
  height: 40px;
  padding: 8px 20px;

  transition: background-color 0.5s;

  &:hover {
    background-color: #ededed;
    border: unset;
  }

  &:active {
    background: #a7a7a7;
    border: unset;
  }

  &:disabled {
    background: #dcdcdc;
    color: #ffffff;
    border: unset;
  }
`;

const PrimaryButton = styled.button`
  border-radius: 4px;
  background: #438bf8;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: unset;
  min-width: 80px;
  height: 40px;
  padding: 8px 30px;

  transition: background-color 0.5s;

  &:hover {
    background-color: #88b8ff;
  }

  &:active {
    background: #0e6dfc;
  }

  &:disabled {
    background: #dcdcdc;
  }
`;

const SecondaryButton = styled.button`
  border-radius: 4px;
  background: #2d2d31;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: unset;
  min-width: 80px;
  height: 40px;
  padding: 8px 30px;

  transition: background-color 0.5s;

  &:hover {
    background-color: #5d5d62;
  }

  &:active {
    background: #2d2d31;
  }

  &:disabled {
    background: #dcdcdc;
  }
`;

const TeriaryButton = styled.button`
  background: #ffffff;
  border: 1px solid #438bf8;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #438bf8;
  min-width: 80px;
  height: 40px;
  padding: 8px 30px;

  transition: background-color 0.5s;

  &:hover {
    background-color: #88b8ff;
    color: #ffffff;
    border: 1px solid #88b8ff;
  }

  &:active {
    background: #0e6dfc;
    color: #ffffff;
  }

  &:disabled {
    background: #dcdcdc;
    border: unset;
    color: #ffffff;
  }
`;

const TextButton = styled.button`
  background: #ffffff;
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #438bf8;
  min-width: 80px;
  height: 40px;
  border: unset;
  padding: 8px 30px;

  transition: background-color 0.5s;

  &:hover {
    background-color: #cee2ff;
    color: #438bf8;
  }

  &:active {
    background: #88b8ff;
    color: #438bf8;
  }

  &:disabled {
    background: unset;
    border: unset;
    color: #b4b4b4;
  }
`;

interface HcButtonProps {
  onClick?: () => void;
  children: React.ReactChild;
  styles: "line" | "primary" | "secondary" | "teriary" | "text";
  style?: CSSProperties;
  disabled?: boolean;
}

const HcButton = (props: HcButtonProps) => {
  return (
    <>
      {
        {
          line: (
            <LineButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
            >
              {props.children}
            </LineButton>
          ),
          primary: (
            <PrimaryButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
            >
              {props.children}
            </PrimaryButton>
          ),
          secondary: (
            <SecondaryButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
            >
              {props.children}
            </SecondaryButton>
          ),
          teriary: (
            <TeriaryButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
            >
              {props.children}
            </TeriaryButton>
          ),
          text: (
            <TextButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
            >
              {props.children}
            </TextButton>
          ),
        }[props.styles]
      }
    </>
  );
};

export default HcButton;
