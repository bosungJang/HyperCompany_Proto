import React, { CSSProperties } from "react";
import styled from "styled-components";

import Select from "react-select";
import { DoubleLeftOutlined } from "@ant-design/icons";
//import "react-select/dist/react-select.css";

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
  min-width: 224px;
  height: 40px;

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

interface SelectsIProps {
  titleName: string;
  required?: boolean;
  name: string;
  placeholder: string;
  multiValue: any;
  filterOptions: any;
  handleMultiChange: (option: any) => void;
}

export const HcSelects: React.FC<SelectsIProps> = ({ titleName, ...props }) => {
  return (
    <Wrapper>
      <Title required={props.required}>{titleName}</Title>
      <Select
        name={props.name}
        placeholder={props.placeholder}
        value={props.multiValue}
        options={props.filterOptions}
        onChange={props.handleMultiChange}
      />
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
        {children}{" "}
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

export default HcTextField;
