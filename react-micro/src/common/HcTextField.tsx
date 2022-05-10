import React, { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";

import Select from "react-select";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { ReactComponent as IconSearch } from "../resources/images/SearchIcon.svg";
import { ReactComponent as BackIcon } from "../resources/images/TitleArrowIcon2.svg";
import HcButton from "./HcButton";
import { useHistory } from "react-router-dom";
import { Any } from "@react-spring/types";
import { EditText, EditTextarea } from "react-edit-text";
import { findProps } from "devextreme-react/core/template";
//import "react-select/dist/react-select.css";

export const TextField = styled.input<{ disabled?: boolean }>`
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
  //text-transform: uppercase;
  color: ${(props) => (props.disabled ? "#C0C0C0" : "#3c3c3c")};
  padding-left: 11px;

  &:focus-visible {
    outline: 1px solid #257cff;
  }
  &:hover {
    box-shadow: ${(props) => (props.disabled ? null : "0 0 5px #257cff")};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #b5b5b5;
  }
  :-ms-input-placeholder {
    color: #b5b5b5;
  }
`;

const TextArea = styled.textarea<{ disabled?: boolean }>`
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
  resize: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: ${(props) => (props.disabled ? "#C0C0C0" : "#3c3c3c")};
  padding-left: 11px;

  &:focus-visible {
    outline: 1px solid #257cff;
  }
  &:hover {
    box-shadow: ${(props) => (props.disabled ? null : "0 0 5px #257cff")};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #b5b5b5;
  }
  :-ms-input-placeholder {
    color: #b5b5b5;
  }
`;

export const Title = styled.div<{ required?: boolean }>`
  min-width: 33px;
  height: 21px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-transform: uppercase;
  color: #656565;
  //margin-left: 11px;
  margin-bottom: 4px;

  ${(props) =>
    props.required ? "::after {    content: '*';    color: #ff4f4f; }" : ""}
`;

const StyledDiv = styled.div`
  height: 30px;
  width: 100px;
  font-family: Noto Sans KR;
  font-style: bold;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #303030;
`;
export const Wrapper = styled.div`
  display: inline-table;
`;

const LabelTextField = styled.div`
  height: 40px;
  border-bottom: 1px solid #e0e0e0;
  text-overflow: ellipsis;
  font-size: 16px;
  padding: 8px 12px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
`;

interface TextFieldIProps {
  titleName: string;
  disabled?: boolean;
  style?: CSSProperties;
  value?: string | number;
  maxlength?: string;
  id?: string;
  name?: string;
  type?: any;
  onKeyDown?: (e: any) => void;
  required?: boolean;
  onChange?: (e: any) => void;
  placeholder?: string;
}
interface TextAreaIProps {
  disabled?: boolean;
  style?: CSSProperties;
  value?: string | number;
  maxlength?: string;
  id?: string;
  name?: string;
  type?: any;
  onKeyDown?: (e: any) => void;
  required?: boolean;
  onChange?: (e: any) => void;
  placeholder?: string;
  row: number;
}
const HcTextField: React.FC<TextFieldIProps> = ({ titleName, ...props }) => {
  return (
    <Wrapper>
      <Title required={props.required} style={{ marginLeft: "5px" }}>
        {titleName}
      </Title>
      <TextField {...props} autoComplete="off">
        {props.children}
      </TextField>
    </Wrapper>
  );
};
export const HcTextArea: React.FC<TextAreaIProps> = ({ ...props }) => {
  return (
    <Wrapper>
      <TextArea {...props} autoComplete="off">
        {props.children}
      </TextArea>
    </Wrapper>
  );
};
interface HeaddingIProps {
  titleName: string;

  style?: CSSProperties;

  required?: boolean;
}
export const SubHeading: React.FC<TextFieldIProps> = ({
  titleName,
  ...props
}) => {
  const SubHeadingField = styled.div<{ required?: boolean }>`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    width: fit-content;
    height: fit-content;
    color: #303030;
    ${(props) =>
      props.required ? "::after {    content: '*';    color: #ff4f4f; }" : ""}
  `;
  return (
    <>
      <SubHeadingField {...props}>{titleName}</SubHeadingField>
    </>
  );
};
interface EditTextFieldIProps {
  titleName: string;
  style?: CSSProperties;
  value?: string;
  maxlength?: string;
  id?: string;
  name?: string;
  type?: any;
  onKeyDown?: (e: any) => void;
  onSave?: (e: any) => void;
  required?: boolean;
  onChange?: (e: any) => void;
  onEditMode?: (e: any) => void;
  wraperStyle?: CSSProperties;
  readonly?: any;
}

export const HcEditableTextField: React.FC<EditTextFieldIProps> = ({
  titleName,
  ...props
}) => {
  return (
    <Wrapper style={props.wraperStyle}>
      <Title required={props.required}>{titleName}</Title>
      <EditText
        style={{
          borderBottom: "1px solid #E0E0E0",
          width: 360,
          height: 38,
          fontSize: "16px",
          fontStyle: "bold",
          fontWeight: "bold",
          paddingLeft: 13,
        }}
        {...props}
      />
    </Wrapper>
  );
};
export const HcTextFieldLabel: React.FC<TextFieldIProps> = ({
  titleName,
  ...props
}) => {
  return (
    <Wrapper>
      <Title required={props.required}>{titleName}</Title>
      <LabelTextField {...props}>{props.children}</LabelTextField>
    </Wrapper>
  );
};

/*HcSelect */
export const StyledSelect = styled.select`
  min-width: 100px;
  height: 40px;

  font-family: Noto Sans KR;
  color: #3c3c3c;
  background-color: white !important;
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
    border-radius: 6px;
  }
  &::-ms-expand {
    display: none;
  }
`;

interface SelectIProps {
  titleName?: string;
  disabled?: boolean;
  style?: CSSProperties;
  value?: string | number;
  required?: boolean;
  onChange?: (e: any) => void;
  name?: string;
}
export const HcSelect: React.FC<SelectIProps> = ({ ...props }) => {
  return (
    <Wrapper>
      <Title
        required={props.required}
        style={{ display: props.titleName ? "" : "none" }}
      >
        {props.titleName}
      </Title>
      <StyledSelect {...props} style={props.style}>
        {props.children}
      </StyledSelect>
    </Wrapper>
  );
};

interface SelectsIProps {
  titleName: string;
  required?: boolean;
  name: string;
  placeholder: string;
  multiValue: any;
  filterOptions: any;
  style?: CSSProperties;
  handleMultiChange: (option: any) => void;
}

export const HcSelects: React.FC<SelectsIProps> = ({ titleName, ...props }) => {
  return (
    <Wrapper>
      <Title required={props.required}>{titleName}</Title>
      <StyledSelect {...props}>{props.children}</StyledSelect>
    </Wrapper>
  );
};
/*HcSearchInput */
const SearchIcon = styled.div`
  position: absolute;
  margin-left: 9px;
  margin-top: 10px;
  z-index: 1;
  color: #4f5b66;
  svg {
    path {
      fill: #3b3b3b;
    }
  }
`;
interface SearchInputIProps {
  titleName?: string;
  disabled?: boolean;
  style?: CSSProperties;
  value?: string | number;
  maxlength?: string;
  id?: string;
  name?: string;
  onKeyDown?: (e: any) => void;
  onChange?: (e: any) => void;
  required?: boolean;
  placeholder?: string;
  onClick?: () => void;
}

export const HcSearchTextField: React.FC<SearchInputIProps> = ({
  titleName,
  ...props
}) => {
  return (
    <Wrapper style={{ width: "100%" }}>
      {titleName != null ? (
        <Title required={props.required}>{titleName}</Title>
      ) : null}
      <div style={{ position: "relative", width: "inherit" }}>
        <SearchIcon>
          <IconSearch />
        </SearchIcon>
        <TextField
          {...props}
          style={{ paddingLeft: "32px", ...props.style }}
          placeholder={props.placeholder}
          autoComplete="off"
        >
          {props.children}
        </TextField>
      </div>
    </Wrapper>
  );
};

export const HcSearchBtnInputField: React.FC<SearchInputIProps> = ({
  titleName,
  ...props
}) => {
  return (
    <Wrapper>
      {titleName != null ? (
        <Title required={props.required}>{titleName}</Title>
      ) : null}
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            marginTop: "8px",
          }}
        >
          <HcButton
            onClick={() => {
              if (props.onClick) {
                props.onClick();
              }
            }}
            styles="line"
            style={{ marginRight: "5px" }}
            size="small"
          >
            조회
          </HcButton>
        </div>
        <TextField
          {...props}
          style={{ paddingLeft: "12px", width: "284px", ...props.style }}
          placeholder={props.placeholder}
          autoComplete="off"
        >
          {props.children}
        </TextField>
      </div>
    </Wrapper>
  );
};

/*HcTagInput */
const TagWrapper = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  background: #fff4ce;
  border: 1px solid #fecf88;
  // box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  padding: 0.3em 0.5em;
  border-radius: 6px;
  margin: 3px 3px;
  height: 28px;
  width: fit-content;
  //min-width: 144px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const TagDelete = styled.span`
  font-size: 10px;
  cursor: pointer;
  margin-left: 15px;
  font-weight: 900;
`;
const InputFieldWrapper = styled.div`
  width: 400px;
  min-height: 40px;
  background: white;
  border: 2px solid #ddd;
  border-radius: 0.2em;
  cursor: text;
  margin-top: 0.5em;
`;

const InputTagInput = styled.input<{ maxTag: number }>`
  box-sizing: content-box;
  background: white;
  text-indent: 0.5em;
  border: none;
  height: 70%;
  width: 6em;
  outline: 0;
  margin: 0 0.3em;
  display: inline-block;
  //display:  ${(props) => (props.maxTag >= 4 ? "none" : "inline-block")};
  border-bottom: 1px solid #cecece;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

interface TagInputIProps {
  titleName: string;
  required?: boolean;
  tags: string[];
  setTags: (value: string[]) => void;
  style?: CSSProperties;
}

export const HcTagInput: React.FC<TagInputIProps> = ({
  titleName,
  ...props
}) => {
  const [formValue, setFormValue] = React.useState("");
  interface TagProps {
    children: React.ReactNode;
    tags: string[];
    setTags: (value: string[]) => void;
    tagIndex: number;
  }
  const Tag = ({ children, tags, setTags, tagIndex }: TagProps) => {
    return (
      <TagWrapper>
        {children}
        <TagDelete
          role="img"
          aria-label="remove-tag"
          onClick={(e) => {
            const updatedTags = tags.filter(
              (_: any, i: number) => i !== tagIndex
            );
            setTags([...updatedTags]);
          }}
        >
          &#10005;
        </TagDelete>
      </TagWrapper>
    );
  };

  return (
    <Wrapper>
      <Title required={props.required}>{titleName}</Title>
      <div>
        <InputFieldWrapper>
          <div
            style={{ display: "block", alignItems: "center", height: "100%" }}
          >
            {props.tags.length !== 0 &&
              props.tags.map((tag: string, i: number) => {
                return (
                  <Tag
                    key={i}
                    tagIndex={i}
                    tags={props.tags}
                    setTags={props.setTags}
                  >
                    {tag}
                  </Tag>
                );
              })}
            <InputTagInput
              value={formValue}
              type="text"
              id="tags"
              onChange={(e) => {
                const lengthOfInputValue = formValue.split("").length;

                if (lengthOfInputValue !== 10)
                  setFormValue(e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  formValue.trim() !== "" /*&& props.tags.length < 4 */
                ) {
                  props.setTags([...props.tags, e.currentTarget.value]);
                  setFormValue("");
                  document.getElementById("tags")?.focus();
                } else if (
                  (e.key === "Delete" || e.key === "Backspace") &&
                  formValue.trim() === "" /*&& props.tags.length < 4 */
                ) {
                  const tempArr = props.tags.slice();
                  tempArr.pop();
                  props.setTags(tempArr);
                  document.getElementById("tags")?.focus();
                }
              }}
              maxTag={props.tags.length}
            />
          </div>
        </InputFieldWrapper>
      </div>
    </Wrapper>
  );
};

const boxFade = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const NoInputFieldWrapper = styled.div`
  width: 491px;
  min-height: 76px;
  background: #f4f4f4;
  border-radius: 6px;
  margin-top: 0.5em;
  position: relative;
  padding: 5px;
`;

const TagWrapperNo = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  background: #2d2d31;
  color: white;
  padding: 3px 13px;
  border-radius: 34.41px;
  margin: 3px 3px;
  height: 28px;
  width: fit-content;
  &:last-child {
    //animation: ${boxFade} 3s;
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

interface TagNoInputIProps {
  tags: string[];
  setTags: (value: string[]) => void;
  style?: CSSProperties;
  delete?: boolean;
}

export const HcTagNoInput: React.FC<TagNoInputIProps> = React.memo(
  ({ ...props }) => {
    interface TagProps {
      children: React.ReactNode;
      tags: string[];
      setTags: (value: string[]) => void;
      tagIndex: number;
    }
    const Tag = ({ children, tags, setTags, tagIndex }: TagProps) => {
      return (
        <TagWrapperNo>
          {children}
          {props.delete === true ? (
            <TagDelete
              role="img"
              aria-label="remove-tag"
              onClick={(e) => {
                const updatedTags = tags.filter(
                  (_: any, i: number) => i !== tagIndex
                );
                setTags([...updatedTags]);
              }}
            >
              &#10005;
            </TagDelete>
          ) : null}
        </TagWrapperNo>
      );
    };

    return (
      <Wrapper style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <NoInputFieldWrapper style={{ ...props.style }}>
            <div
              style={{ display: "block", alignItems: "center", height: "100%" }}
            >
              {props.tags.length !== 0 &&
                props.tags.map((tag: string, i: number) => {
                  return (
                    <Tag
                      key={i}
                      tagIndex={i}
                      tags={props.tags}
                      setTags={props.setTags}
                    >
                      {tag}
                    </Tag>
                  );
                })}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              {/* 
              <HcButton
                onClick={() => {
                  props.setTags([]);
                }}
                styles="line"
                style={{ marginRight: "5px" }}
                size="small"
              >
                전체 취소
              </HcButton>
              */}
            </div>
          </NoInputFieldWrapper>
        </div>
      </Wrapper>
    );
  }
);

interface TagNoInputObjectIProps {
  tags: string[];
  setTags: (value: any) => void;
  style?: CSSProperties;
  delete?: boolean;
}

export const HcTagNoInputObject: React.FC<TagNoInputObjectIProps> = React.memo(
  ({ ...props }) => {
    interface TagProps {
      children: React.ReactNode;
      tags: string[];
      setTags: (value: any) => void;
      tagIndex: number;
    }
    const Tag = ({ children, tags, setTags, tagIndex }: TagProps) => {
      return (
        <TagWrapperNo>
          {children}{" "}
          {props.delete === true ? (
            <TagDelete
              role="img"
              aria-label="remove-tag"
              onClick={(e) => {
                const updatedTags = tags.filter(
                  (_: any, i: number) => i !== tagIndex
                );
                setTags((prevState: any) => ({
                  ...prevState,
                  tags: [...updatedTags],
                }));
              }}
            >
              &#10005;
            </TagDelete>
          ) : null}
        </TagWrapperNo>
      );
    };

    return (
      <Wrapper>
        <div>
          <NoInputFieldWrapper style={{ ...props.style }}>
            <div
              style={{ display: "block", alignItems: "center", height: "100%" }}
            >
              {props.tags.length !== 0 &&
                props.tags.map((tag: string, i: number) => {
                  return (
                    <Tag
                      key={i}
                      tagIndex={i}
                      tags={props.tags}
                      setTags={props.setTags}
                    >
                      {tag}
                    </Tag>
                  );
                })}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              {/* 
              <HcButton
                onClick={() => {
                  props.setTags([]);
                }}
                styles="line"
                style={{ marginRight: "5px" }}
                size="small"
              >
                전체 취소
              </HcButton>
              */}
            </div>
          </NoInputFieldWrapper>
        </div>
      </Wrapper>
    );
  }
);

/*HcTitleText */
const TitleFieldWrapper = styled.div`
  min-width: 433px;
  //height: 120px;
  background: #ffffff;
  border-radius: 10px;
  display: table-cell;
  vertical-align: middle;
`;

const TitleField = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  display: inline-block;
`;
interface TitleTextFieldIProps {
  titleName: string;
  isBackIcon: boolean;
  style?: CSSProperties;
}

export const HcTitleTextField: React.FC<TitleTextFieldIProps> = ({
  titleName,
  ...props
}) => {
  const history = useHistory();
  return (
    <TitleFieldWrapper style={props.style}>
      {props.isBackIcon ? (
        <BackIcon
          style={{ cursor: "pointer", marginRight: "16px" }}
          onClick={() => {
            history.goBack();
          }}
        />
      ) : null}
      <TitleField>{titleName}</TitleField>
    </TitleFieldWrapper>
  );
};

const MainTitleField = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  display: inline-block;
`;

interface MainTitleFieldIProps {
  titleName: string;
}

export const HcMainTitleField: React.FC<MainTitleFieldIProps> = ({
  titleName,
  ...props
}) => {
  return <MainTitleField>{titleName}</MainTitleField>;
};

export default HcTextField;
