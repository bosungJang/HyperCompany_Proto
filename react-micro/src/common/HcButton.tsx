import React, { Children } from "react";
import styled, { CSSProperties } from "styled-components";
import { ReactComponent as CardViewIcon } from "resources/images/Icon/Card_View_Icon.svg";
import { ReactComponent as ListViewIcon } from "resources/images/Icon/List_View_Icon.svg";

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
    border: 1px solid #ededed;
  }

  &:active {
    background: #a7a7a7;
    border: 1px solid #a7a7a7;
  }

  &:disabled {
    background: #dcdcdc;
    color: #ffffff;
    border: 1px solid #dcdcdc;
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
  type?: string;
  form?: string;
}

const handleSizeType = (size: string) => {
  switch (size) {
    case "medium":
      return "min-width: 66px; height: 32px;  font-size: 14px; line-height: 0px; padding: 9px 20px;";
    case "small":
      return "min-width: 48px; height: 24px; font-size: 11px; line-height: 0px; padding: 6px 13px;";
    default:
      return "min-width: 90px; height: 42px; font-size: 16px; line-height: 0px; padding: 12px 30px;";
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

const HcDropDownMenu = styled("ul")`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 32px;
  //display: none;
  width: 188px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  // margin-top: 7px;
  margin-left: -20px;
`;

const HcDropDownItem = styled("li")`
  padding: 11px;
  color: #3c3c3c;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  height: 42px;
  line-height: 21px;

  &:hover {
    background: #eff5ff;
  }
`;

const HcDropDownWrapper = styled("div")<{ open: boolean }>`
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
  min-width: 91px;
  height: 32px;
  font-size: 13px;
  line-height: 19px;
  padding: 7px 18px;
  display: flex;
  position: relative;
  ${HcDropDownMenu} {
    display: ${(props) => (props.open == true ? "block" : "none")};
  }
`;

interface HcDropDownButtonProps {
  title: string;
  dropDownMenu: any;
  style?: React.CSSProperties;
}

export const HcDropDownButton = (props: HcDropDownButtonProps) => {
  const el = React.useRef<any>();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <HcDropDownWrapper
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
        ref={el}
        style={props.style}
      >
        {props.title}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: 7, right: 7 }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.75588 7.74406C4.43044 8.06949 4.43044 8.59713 4.75588 8.92257L9.46983 13.6365L9.46993 13.6366C9.79536 13.9621 10.323 13.9621 10.6484 13.6366C10.652 13.633 10.6556 13.6294 10.6591 13.6257L15.3624 8.92247C15.6878 8.59704 15.6878 8.0694 15.3624 7.74396C15.037 7.41853 14.5093 7.41853 14.1839 7.74396L10.0591 11.8688L5.93439 7.74406C5.60896 7.41862 5.08132 7.41862 4.75588 7.74406Z"
            fill="white"
          />
        </svg>

        <HcDropDownMenu>
          {props.dropDownMenu.map((item: any) => (
            <HcDropDownItem onClick={item.onClick}>{item.title}</HcDropDownItem>
          ))}
        </HcDropDownMenu>
      </HcDropDownWrapper>
    </>
  );
};

export default HcButton;

const VieModeBtnWrapper = styled.div`
  width: 32px;
  height: 28px;
  background: #257cff;
  border-radius: 3px;
  text-align: center;
  padding 2px;
  cursor: pointer;

  &:hover {
    background: #88b8ff;
  }

  &:active {
    background: #0047b1;
  }
`;

interface HcViewModeBtnProps {
  state: boolean;
  setState: () => void;
}

export const HcViewModeButton = (props: HcViewModeBtnProps) => {
  return (
    <VieModeBtnWrapper onClick={props.setState}>
      {props.state ? <ListViewIcon /> : <CardViewIcon />}
    </VieModeBtnWrapper>
  );
};
