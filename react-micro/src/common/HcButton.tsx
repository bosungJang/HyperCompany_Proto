import React, { Children } from "react";
import styled, { CSSProperties } from "styled-components";

const LineButton = styled.button<{ size: string }>`
  border: 1px solid #a7a7a7;
  box-sizing: border-box;
  border-radius: 4px;
  background: #ffffff;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  ${(props) => props.size}

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

const PrimaryButton = styled.button<{ size: string }>`
  border-radius: 4px;
  background: #438bf8;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: unset;
  ${(props) => props.size}

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

const SecondaryButton = styled.button<{ size: string }>`
  border-radius: 4px;
  background: #2d2d31;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: unset;
  ${(props) => props.size}

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

const TeriaryButton = styled.button<{ size: string }>`
  background: #ffffff;
  border: 1px solid #438bf8;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #438bf8;
  ${(props) => props.size}

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

const TextButton = styled.button<{ size: string }>`
  background: #ffffff;
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #438bf8;
  border: unset;
  ${(props) => props.size}

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
  size: "big" | "medium" | "small";
}

const handleSizeType = (size: string) => {
  switch (size) {
    case "medium":
      return "min-width: 78px; height: 34px;  font-size: 14px; line-height: 21px;";
    case "small":
      return "min-width: 60px; height: 28px; font-size: 12px; line-height: 18px;";
    default:
      return "min-width: 100px; height: 40px; font-size: 16px; line-height: 24px;";
  }
};

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
              size={handleSizeType(props.size)}
            >
              {props.children}
            </LineButton>
          ),
          primary: (
            <PrimaryButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
              size={handleSizeType(props.size)}
            >
              {props.children}
            </PrimaryButton>
          ),
          secondary: (
            <SecondaryButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
              size={handleSizeType(props.size)}
            >
              {props.children}
            </SecondaryButton>
          ),
          teriary: (
            <TeriaryButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
              size={handleSizeType(props.size)}
            >
              {props.children}
            </TeriaryButton>
          ),
          text: (
            <TextButton
              onClick={props.onClick}
              style={props.style}
              disabled={props.disabled}
              size={handleSizeType(props.size)}
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
