import React, { CSSProperties, Fragment } from "react";
import styled, { keyframes } from "styled-components";
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
  border-radius: 3px;
  width: 400px;
  height: 36px;
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
    ${(props) => (props.required ? "content: *;" : "")}
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
  overflow-x: hidden;
  overflow-y: scroll;
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
  margin-bottom: 10px;

  ${(props) =>
    props.required ? "::after {    content: '*';    color: #ff4f4f; }" : ""}
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
  titleName?: string;
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
  row?: number;
  titleName?: string;
}
const InputGroup = styled.div<{
  placeholder?: string;
  required?: boolean;
  titleName?: string;
}>`
  position: relative;
  input {
    position: relative;
  }
  label {
    position: absolute;
    left: 10px;
    top: 7px;
    color: #a7a7a7;
    font-weight: 400;
    font-size: inherit;
  }
  label::after {
    content: "*";
    color: #ff4f4f;
  }
  input[required]:valid + label {
    display: none;
  }
`;
const HcTextField: React.FC<TextFieldIProps> = ({ titleName, ...props }) => {
  return (
    <Wrapper style={{ position: "relative" }}>
      <Title
        required={props.required}
        style={{ marginLeft: "5px", display: titleName ? "" : "none" }}
      >
        {titleName}
      </Title>
      <InputGroup
        required={props.required}
        titleName={titleName}
        placeholder={props.placeholder}
      >
        <TextField
          {...props}
          placeholder={
            !titleName && props.required && props.placeholder
              ? ""
              : props.placeholder
          }
          autoComplete="off"
        >
          {props.children}
        </TextField>
        <label
          style={{
            display:
              !titleName && props.required && props.placeholder ? "" : "none",
          }}
        >
          {props.placeholder}
        </label>
      </InputGroup>
    </Wrapper>
  );
};
export const HcTextArea: React.FC<TextAreaIProps> = ({ ...props }) => {
  return (
    <Wrapper>
      {props.titleName ? (
        <Title required={props.required} style={{ marginLeft: "5px" }}>
          {props.titleName}
        </Title>
      ) : (
        ""
      )}
      <TextArea {...props} autoComplete="off">
        {props.children}
      </TextArea>
    </Wrapper>
  );
};
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
  height: 36px;
  font-family: Noto Sans KR;
  color: #3c3c3c;
  background-color: inherit;
  padding-left: 11px;
  font-size: 16px;
  border: 1px solid #cecece;
  background: url(/images/Select_Arrow.png) no-repeat 95% 50%;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  option {
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    border-radius: 3px;
    height: 42px !important;
  }
  option:checked {
    background: #eff5ff;
  }
  option:checked {
    background: #eff5ff;
  }
  &::-ms-expand {
    display: none;
  }
  &:focus {
    border: 1px solid #257cff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
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
  const selectRef: any = React.useRef(null);
  return (
    <Wrapper style={{ width: "100%" }}>
      <Title
        required={props.required}
        style={{ display: props.titleName ? "" : "none", marginLeft: "5px" }}
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
  margin-top: 6px;
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
    <Wrapper style={Object.assign({ width: "100%" }, props.style)}>
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
  deleteAll?: boolean;
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
                display: props.deleteAll ? "" : "none",
              }}
            >
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
const SelectContainer = styled.ul<{ isOpen: boolean }>`
  height: fit-content;
  width: 100%;
  min-height: 36px;
  position: relative;
  border-radius: 3px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  background: #ffffff;
  margin:0;
  ${(props) =>
    props.isOpen
      ? " border: 1px solid #257cff; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  padding: 4px; z-index: 3;"
      : "border: 1px solid #CECECE; z-index: 1; padding:7px 35px 7px 10px;  &:hover{border: 1px solid #88B8FF;"}}
`;
const Li = styled.li<{ confirm?: boolean; edit?: boolean }>`
  width: 100%;
  height: 36px;
  background: #ffffff;
  padding: ${(props) =>
    props.edit
      ? "0"
      : props.confirm
      ? "7px 12px 7px 32px"
      : "7px 12px 7px 8px"};
  margin: 0px;
  color: ${(props) => (props.confirm ? "#257CFF" : "#3c3c3c")};
  ${(props) =>
    props.confirm
      ? "&:hover{text-decoration:underline;} position:relative;margin-top:36px;"
      : props.edit
      ? ""
      : "&:hover{background: #EFF5FF;}"};
`;
interface styledSelectProps {
  titleName?: string;
  required?: boolean;
  style?: React.CSSProperties;
  state: any;
  name?: string;
  setState: any;
  items: any[];
  value?: any;
  setItems?: any;
  placeholder?: string;
}
export const SelectBox = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Wrapper style={props.style}>
      <Title
        required={props.required}
        style={{ display: props.titleName ? "" : "none", marginLeft: "5px" }}
      >
        {props.titleName}
      </Title>
      <div
        style={{ position: "relative", overflow: "visible", height: "36px" }}
      >
        <SelectContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {" "}
          <svg
            style={{ position: "absolute", right: 6, top: 6 }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 16L6.80385 10L17.1962 10L12 16Z" fill="#5D5D62" />
          </svg>
          {isOpen ? (
            <>
              <Li
                style={{ color: "#A7A7A7", padding: "5px 12px 7px 8px" }}
                edit
              >
                {props.state ? props.state : props.titleName + "선택"}
              </Li>
              {props.items.map((item: any) => (
                <Li
                  onClick={() => {
                    props.setState(item);
                  }}
                >
                  <div>{item}</div>
                </Li>
              ))}
            </>
          ) : (
            <>
              {props.state === "" ? (
                <div style={{ color: "#A7A7A7" }}>{props.titleName} 선택</div>
              ) : (
                <>{props.state}</>
              )}
            </>
          )}
        </SelectContainer>
      </div>
    </Wrapper>
  );
};
const AddOption = styled.input`
  width: 100%;
  background: #f4f4f4;
  height: 36px;
  padding: 7px 30px 7px 10px;
  margin: 0px;
  border: none;
  border-right: 0px;
  border-top: 0px;
  boder-left: 0px;
  boder-bottom: 0px;
  placeholder {
    color: #a7a7a7;
  }
  &:focus {
    outline: none;
  }
`;

export const EditableSelect = (props: styledSelectProps) => {
  const [items, setItems] = React.useState(["사업부", "PM본부"]); //option array
  const inputRef: any = React.useRef(null);
  const [option, setOption] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Wrapper style={props.style}>
      <Title
        required={props.required}
        style={{ display: props.titleName ? "" : "none", marginLeft: "5px" }}
      >
        {props.titleName}
      </Title>
      <div
        style={{ position: "relative", overflow: "visible", height: "36px" }}
      >
        <SelectContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <>
              <Li
                edit
                onClick={(e: any) => e.stopPropagation()}
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                {" "}
                <svg
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setOption("");
                  }}
                  style={{ position: "absolute", right: 6, top: 6 }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16L6.80385 10L17.1962 10L12 16Z"
                    fill="#5D5D62"
                  />
                </svg>
                <AddOption
                  readOnly={false}
                  ref={inputRef}
                  placeholder={props.placeholder}
                  onKeyPress={(e: any) => {
                    if (e.key === "Enter") {
                      inputRef.current.readOnly = true;
                      setOption(inputRef.current.value);
                    }
                  }}
                />
              </Li>
              {option !== "" ? (
                <Li
                  confirm
                  onClick={(e: any) => {
                    let prev = props.items;
                    prev.push(option);
                    props.setItems(prev);
                    setOption("");
                    setIsOpen(false);
                    props.setState(option);
                    inputRef.current.value = null;
                    inputRef.current.readOnly = false;
                    e.stopPropagation();
                  }}
                >
                  <svg
                    style={{ position: "absolute", left: 8, top: 8 }}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="2" fill="white" />
                    <rect
                      x="9.16797"
                      y="4.16675"
                      width="1.66667"
                      height="11.6667"
                      rx="0.833333"
                      fill="#257CFF"
                    />
                    <rect
                      x="15.832"
                      y="9.16675"
                      width="1.66667"
                      height="11.6667"
                      rx="0.833333"
                      transform="rotate(90 15.832 9.16675)"
                      fill="#257CFF"
                    />
                  </svg>
                  “{option}” 추가 후 입력하기
                </Li>
              ) : (
                ""
              )}
              {props.items.map((item) => (
                <Li
                  onClick={() => {
                    props.setState(item);
                    setOption("");
                  }}
                >
                  {item}
                </Li>
              ))}
            </>
          ) : (
            <>
              <svg
                style={{ position: "absolute", right: 6, top: 6 }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16L6.80385 10L17.1962 10L12 16Z" fill="#5D5D62" />
              </svg>
              {props.state === "" ? (
                <div style={{ color: "#A7A7A7" }}>{props.titleName} 선택</div>
              ) : (
                <>{props.state}</>
              )}
            </>
          )}
        </SelectContainer>
      </div>
    </Wrapper>
  );
};

export const SearchSelect = (props: styledSelectProps) => {
  const inputRef: any = React.useRef(null);
  const [option, setOption] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const array = ["꽃분이", "홍길동", "김민수"];
  return (
    <Wrapper style={props.style}>
      <Title
        required={props.required}
        style={{ display: props.titleName ? "" : "none", marginLeft: "5px" }}
      >
        {props.titleName}
      </Title>
      <div
        style={{ position: "relative", overflow: "visible", height: "36px" }}
      >
        <SelectContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <>
              <Li
                edit
                onClick={(e: any) => e.stopPropagation()}
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                {" "}
                <svg
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setOption("");
                  }}
                  style={{ position: "absolute", right: 6, top: 6 }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16L6.80385 10L17.1962 10L12 16Z"
                    fill="#5D5D62"
                  />
                </svg>
                <AddOption
                  readOnly={false}
                  ref={inputRef}
                  placeholder={"검색"}
                  onChange={() => {
                    setOption(inputRef.current.value);
                  }}
                />
              </Li>
              <Li>현재 :{option}</Li>
              {option !== ""
                ? props.items
                    .filter(function (item) {
                      const str = String(item);
                      return str.includes(option) === true;
                    })
                    .map((item) => (
                      <>
                        {" "}
                        <Li
                          onClick={() => {
                            props.setState(item);
                            setOption("");
                          }}
                        >
                          {item}
                        </Li>
                      </>
                    ))
                : props.items.map((item) => (
                    <>
                      {" "}
                      <Li
                        onClick={() => {
                          props.setState(item);
                          setOption("");
                        }}
                      >
                        {item}
                      </Li>
                    </>
                  ))}
            </>
          ) : (
            <>
              <svg
                style={{ position: "absolute", right: 6, top: 6 }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16L6.80385 10L17.1962 10L12 16Z" fill="#5D5D62" />
              </svg>
              {props.state === "" ? (
                <div style={{ color: "#A7A7A7" }}>{props.titleName} 선택</div>
              ) : (
                <>{props.state}</>
              )}
            </>
          )}
        </SelectContainer>
      </div>
    </Wrapper>
  );
};

export default HcTextField;
