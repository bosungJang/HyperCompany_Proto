import React from "react";

import Counter from "components/counter/Counter";
import { useCounter } from "router/Root";
import HcTabs from "common/HcTabs";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import HcToggleBtn from "common/HcToggleBtn";
import HcTextField, { HcSelect, HcTagInput } from "common/HcTextField";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcTree from "common/HcTree";
import HcFilter from "common/HcFilter";
import HcBottomBar from "common/HcBottomBar";

const items = [
  {
    id: "1",
    title: "parent 1",
    items: [
      { id: "1-1", title: "child 1-1" },
      { id: "1-2", title: "child 1-2" },
    ],
  },
  {
    id: "2",
    title: "parent 2",
    items: [
      { id: "2-1", title: "child 2-1" },
      {
        id: "2-2",
        title: "child 2-2",
        items: [
          { id: "2-2-1", title: "child 1-2-1" },
          { id: "2-2-2", title: "child 1-2-2" },
        ],
      },
    ],
  },
];

const Home = () => {
  const myCounter = useCounter();

  /*CheckBox */
  const [checkedItem, setCheckedItem] = React.useState(false);
  /*CheckBox */

  /*ToggleBtn */
  const [isToggled, setIsToggled] = React.useState(false);
  /*ToggleBtn */

  /*Select */
  const [multiValue, setmultiValue] = React.useState([]);

  const filterOptions = [
    { value: "foo", label: "Foo" },
    { value: "bar", label: "Bar" },
    { value: "bat", label: "Bat" },
  ];

  const handleMultiChange = (option: any) => {
    setmultiValue(option);
  };

  /*Select */

  /*TagInput */
  const [tags, setTags] = React.useState(["react"]);
  /*TagInput */

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(false);
  /*BottomBar */
  return (
    <div style={{ width: "inherit" }}>
      <h2>홈</h2>
      <Counter counter={myCounter} />
      <div>
        <br />
        <HcTabs
          items={[
            { to: "1", name: "Tab 1" },
            { to: "2", name: "Tab 2" },
            { to: "3", name: "Tab 3 Tab 3 Tab 3 Tab 3" },
            { to: "notNumber", name: "Not Number" },
            { to: "5", name: "Tab 5" },
          ]}
          size="normal"
        />
        <br />
        <HcTabs
          items={[
            { to: "1", name: "Tab 1" },
            { to: "2", name: "Tab 2" },
            { to: "3", name: "Tab 3 Tab 3 Tab 3 Tab 3" },
            { to: "notNumber", name: "Not Number" },
            { to: "5", name: "Tab 5" },
          ]}
          size="small"
        />
      </div>
      <br />
      <div>
        <HcButton
          onClick={() => {
            setbarOpen(true);
          }}
          styles="line"
          style={{ marginRight: "5px" }}
          size="big"
        >
          열기
        </HcButton>
        <HcButton
          onClick={() => {
            alert("click");
          }}
          styles="primary"
          style={{ marginRight: "5px" }}
          size="small"
        >
          닫기
        </HcButton>
        <HcButton
          onClick={() => {
            alert("click");
          }}
          styles="secondary"
          style={{ marginRight: "5px" }}
          size="medium"
        >
          open
        </HcButton>
        <HcButton
          onClick={() => {
            alert("click");
          }}
          styles="teriary"
          style={{ marginRight: "5px" }}
          size="medium"
        >
          close
        </HcButton>
        <HcButton
          styles="text"
          style={{ marginRight: "5px" }}
          size="big"
          onClick={() => {
            alert("click");
          }}
        >
          test
        </HcButton>
        <HcCheckBox
          checked={checkedItem}
          onChange={() => {
            setCheckedItem(!checkedItem);
          }}
        />
        <br />
      </div>
      <div>
        <HcToggleBtn
          id="test-switch"
          toggled={isToggled}
          onChange={(e) => {
            setIsToggled(e.target.checked);
          }}
        />{" "}
        <span>{String(isToggled)}</span>
        <br />
      </div>
      <div>
        <HcTextField
          titleName="TEXT"
          name="name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              alert("SUCCESS");
            }
          }}
          required
        />
      </div>
      <br />
      <div>
        <HcRadioGroup
          defaultValue="cat"
          onChange={(value) => console.log("value: ", value)}
        >
          <HcRadioButton value="cat">
            <span>cat</span>
          </HcRadioButton>
          <HcRadioButton value="dog">
            <span>dog</span>
          </HcRadioButton>
        </HcRadioGroup>
        <br />
      </div>
      <HcSelect titleName="TEXT" required>
        <option value="" hidden>
          Type
        </option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
      </HcSelect>
      <div style={{ height: 10, display: "block" }} />
      {/*
        formValue는 input에 입력되는 값 
        tags는 입력한 tag Array
      */}
      <HcTagInput titleName="title" tags={tags} setTags={setTags} />

      <div style={{ height: 10, display: "block" }} />

      <HcTree items={items} />

      <HcBottomBar open={barOpen}>
        <HcButton
          onClick={() => {
            setbarOpen(false);
          }}
          styles="primary"
          style={{ marginRight: "5px" }}
          size="big"
        >
          닫기
        </HcButton>
      </HcBottomBar>
    </div>
  );
};

export default Home;
