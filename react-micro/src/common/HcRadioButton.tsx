import React from "react";
import styled from "styled-components";

const RadioContext = React.createContext<any | undefined>(undefined);

function useRadioContext() {
  const context = React.useContext(RadioContext);
  if (context === undefined) {
    throw new Error(`Radio 버튼을 제시된 방법으로 사용해주세요`);
  }
  return context;
}

interface GroupProps {
  defaultValue: string;
  onChange: (value: string) => void;
}

const HcRadioGroup: React.FC<GroupProps> = ({
  children,
  defaultValue,
  onChange,
}) => {
  const [state, setState] = React.useState("");

  function handleOnChange(value: string) {
    setState(value);
    onChange(value);
  }

  React.useEffect(() => {
    setState(defaultValue);
  }, [defaultValue]);

  return (
    <RadioContext.Provider value={[state, handleOnChange]}>
      <div role="radiogroup">{children}</div>
    </RadioContext.Provider>
  );
};

const RadioButton = styled.input.attrs({ type: "radio" })`
  width: 16px;
  height: 16px;
`;

interface ButtonProps {
  value: string;
  children?: JSX.Element;
  disabled?: boolean;
}

export const HcRadioButton: React.FC<ButtonProps> = ({
  disabled,
  value,
  children,
}) => {
  const [state, onChange] = useRadioContext();
  const checked = value === state;
  return (
    <label>
      <RadioButton
        value={value}
        checked={checked}
        type="radio"
        onChange={({ target }) => onChange(target.value)}
        disabled={disabled}
        style={{ verticalAlign: "middle" }}
      />
      {children}
    </label>
  );
};

//HcRadioGroup.HcRadioButton = HcRadioButton;

export default HcRadioGroup;
