import React from "react";

import Counter from "components/counter/Counter";
import { useCounter } from "router/Root";
import HcTabs from "common/HcTabs";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import HcToggleBtn from "common/HcToggleBtn";
import HcTextField, {
  HcSelect,
  HcTagInput,
  HcSearchTextField,
  HcTagNoInput,
  HcTitleTextField,
} from "common/HcTextField";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcTree from "common/HcTree";
import HcBottomBar from "common/HcBottomBar";
import HcPopOver from "common/HcPopOver";
import { ToastContext } from "common/Toast";
import styled from "styled-components";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";
import { useTranslation } from "react-i18next";

const ComponentWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  display: block;
  padding: 20px 40px;
`;

const items = [
  {
    id: "1",
    title: "parent 1",
    items: [
      {
        id: "1-1",
        title: "child 1-1",
        items: [
          {
            id: "1-1-1",
            title: "child 1-1-1",
            items: [
              { id: "1-1-1-1", title: "child 1-1-1-1" },
              {
                id: "1-1-1-2",
                title: "child 1-1-1-2",
                items: [{ id: "1-1-1-1-1", title: "child 1-1-1-1-1" }],
              },
            ],
          },
        ],
      },
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
  {
    id: "3",
    title: "parent 3",
  },
];
const testArray = [
  { icon: "Home_Icon", title: "home", path: "/" },
  { icon: "Team_Icon", title: "About", path: "/about" },
  {
    icon: "Knowledge_Icon",
    title: "Board",
    path: "/test",
    submenu: [
      { title: "item2-1", path: "/test" },
      { title: "item2-2", path: "/table" },
      { title: "item2-3", path: "/fi" },
    ],
  },
  {
    icon: "Welfare_Icon",
    title: "인사",
    path: "/hr",
    submenu: [
      { title: "인사홈", path: "/hr" },
      { title: "인사발령", path: "/hr/appointment" },
    ],
  },
];

interface HomeProps {
  match: any;
  setLNBMenu: (menu: LNBArrayProps[]) => void;
}

const Home = (props: HomeProps) => {
  const myCounter = useCounter();

  React.useEffect(() => {
    props.setLNBMenu(testArray);
  }, []);

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

  /*TagInput */
  const [tags2, setTags2] = React.useState(["react"]);
  const [inputVal, setInputVal] = React.useState("");
  /*TagInput */

  /*popOver */
  const [isPopOver, setIsPopOver] = React.useState(false);
  /*popOver */

  /*Toast */
  const { message, cancelAction } = React.useContext(ToastContext);
  /*Toast */

  /*language*/
  const { t, i18n } = useTranslation();
  /*language*/

  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <HcPopOver
            isPopOver={isPopOver}
            setIsPopOver={setIsPopOver}
            titleName="대상자 추가"
          >
            <HcSearchTextField
              titleName="TEXT"
              name="name"
              value={inputVal}
              placeholder="사원 / 부서 검색"
              onChange={(e) => {
                const lengthOfInputValue = inputVal.split("").length;

                if (lengthOfInputValue !== 10)
                  setInputVal(e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  inputVal.trim() !== "" /*&& props.tags.length < 4 */
                ) {
                  setTags2([...tags2, e.currentTarget.value]);
                  setInputVal("");
                }
              }}
            />
            <br />
            <HcTagNoInput tags={tags2} setTags={setTags2} />
          </HcPopOver>

          <HcTitleTextField titleName={t("test")} isBackIcon={true} />
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
                message("TOAST POPUP", "test");
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="small"
            >
              닫기
            </HcButton>
            <HcButton
              onClick={() => {
                setIsPopOver(!isPopOver);
              }}
              styles="secondary"
              style={{ marginRight: "5px" }}
              size="medium"
            >
              open
            </HcButton>
            <HcButton
              onClick={() => {
                i18n.changeLanguage("en-US");
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
                i18n.changeLanguage("ko-KR");
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
          <br />
          <HcSearchTextField
            titleName="TEXT"
            name="name"
            value={inputVal}
            placeholder="사원 / 부서 검색"
            onChange={(e) => {
              const lengthOfInputValue = inputVal.split("").length;

              if (lengthOfInputValue !== 10) setInputVal(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                inputVal.trim() !== "" /*&& props.tags.length < 4 */
              ) {
                setTags2([...tags2, e.currentTarget.value]);
                setInputVal("");
              }
            }}
          />
          <br />
          <HcTagNoInput tags={tags2} setTags={setTags2} />
          <div style={{ height: 10, display: "block" }} />

          <HcTree items={items} />
        </ComponentWrapper>
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
    </>
  );
};

export default Home;
