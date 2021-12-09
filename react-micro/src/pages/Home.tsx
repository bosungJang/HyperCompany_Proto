import React from "react";

import Counter from "components/counter/Counter";
import { useCounter } from "router/Root";
import HcTabs from "common/HcTabs";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import HcToggleBtn from "common/HcToggleBtn";
import HcTextField, { HcSelect } from "common/HcTextField";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";

const Home = () => {
  const myCounter = useCounter();

  /*CheckBox */
  const [checkedItem, setCheckedItem] = React.useState(false);
  /*CheckBox */

  /*ToggleBtn */
  const [isToggled, setIsToggled] = React.useState(false);
  /*ToggleBtn */

  return (
    <div>
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
            alert("click");
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
      <br />
    </div>
  );
};

export default Home;
