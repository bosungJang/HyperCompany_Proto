import React from "react";
import App from "../common/App";
import Header from "../components/header/Header";
import LNB from "components/LNB/LNB";
import GNB from "components/GNB/GNB";
import { getCookie, setCookie } from "common/Storage";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcToggleBtn from "common/HcToggleBtn";

const Layout = () => {
  const [openSideBar, setopenSideBar] = React.useState(true);
  const [openGNBBar, setopenGNBBar] = React.useState(false);

  React.useEffect(() => {
    let sideBarOpen = getCookie("sideBar_open");
    if (sideBarOpen != null) {
      if (sideBarOpen === "false") {
        setopenSideBar(false);
      } else {
        setopenSideBar(true);
      }
    } else {
      setCookie("sideBar_open", "false");
    }

    return () => {
      console.log("unmount");
    };
  }, []);

  /* SideBar */
  function openNav() {
    setopenSideBar(true);
    setCookie("sideBar_open", "true");
  }

  function closeNav() {
    setopenSideBar(false);
    setCookie("sideBar_open", "false");
  }

  const setLNB = (open: boolean) => {
    setopenSideBar(open);
  };
  /* SideBar */

  /* GNB */
  function openGNB() {
    setopenGNBBar(true);
  }

  function closeGNB() {
    setopenGNBBar(false);
  }

  const setGNB = (open: boolean) => {
    setopenGNBBar(open);
  };
  /* GNB */

  /*CheckBox */
  const [checkedItem, setCheckedItem] = React.useState(false);
  /*CheckBox */

  /*ToggleBtn */
  const [isToggled, setIsToggled] = React.useState(false);
  /*ToggleBtn */

  return (
    <>
      <Header />
      <GNB openGNBBar={openGNBBar} setGNB={setGNB} />
      <div style={{ display: "block" }}>
        <LNB openSideBar={openSideBar} setLNB={setLNB} />
        <div
          id="main"
          style={
            openSideBar === false
              ? {
                  marginLeft: 80,
                  transition: "margin-left .5s",
                  backgroundColor: "#E5E5E5",
                  minHeight: "100vh",
                  textAlign: "center",
                  paddingTop: "4.25rem",
                }
              : {
                  marginLeft: 300,
                  transition: "margin-left .5s",
                  backgroundColor: "#E5E5E5",
                  minHeight: "100vh",
                  textAlign: "center",
                  paddingTop: "4.25rem",
                }
          }
        >
          <App />
          <div style={{ display: "block" }}>
            <HcButton
              onClick={openNav}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              열기
            </HcButton>
            <HcButton
              onClick={closeNav}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              닫기
            </HcButton>
            <HcButton
              onClick={openGNB}
              styles="secondary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              open
            </HcButton>
            <HcButton
              onClick={closeGNB}
              styles="teriary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              close
            </HcButton>
            <HcButton styles="text" style={{ marginRight: "5px" }} size="big">
              test
            </HcButton>
            <HcCheckBox
              checked={checkedItem}
              onChange={() => {
                setCheckedItem(!checkedItem);
              }}
            />
            <br /> <br />
            <HcButton
              onClick={openNav}
              styles="line"
              style={{ marginRight: "5px" }}
              size="small"
            >
              열기
            </HcButton>
            <HcButton
              onClick={closeNav}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="small"
            >
              닫기
            </HcButton>
            <HcButton
              onClick={openGNB}
              styles="secondary"
              style={{ marginRight: "5px" }}
              size="small"
            >
              open
            </HcButton>
            <HcButton
              onClick={closeGNB}
              styles="teriary"
              style={{ marginRight: "5px" }}
              size="small"
            >
              close
            </HcButton>
            <HcButton styles="text" style={{ marginRight: "5px" }} size="small">
              test
            </HcButton>
            <HcCheckBox
              checked={checkedItem}
              onChange={() => {
                setCheckedItem(!checkedItem);
              }}
            />
            <br /> <br />
            <HcButton
              onClick={openNav}
              styles="line"
              style={{ marginRight: "5px" }}
              size="medium"
            >
              열기
            </HcButton>
            <HcButton
              onClick={closeNav}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="medium"
            >
              닫기
            </HcButton>
            <HcButton
              onClick={openGNB}
              styles="secondary"
              style={{ marginRight: "5px" }}
              size="medium"
            >
              open
            </HcButton>
            <HcButton
              onClick={closeGNB}
              styles="teriary"
              style={{ marginRight: "5px" }}
              size="medium"
            >
              close
            </HcButton>
            <HcButton
              styles="text"
              style={{ marginRight: "5px" }}
              size="medium"
            >
              test
            </HcButton>
            <HcCheckBox
              checked={checkedItem}
              onChange={() => {
                setCheckedItem(!checkedItem);
              }}
            />
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
            </div>
            <HcToggleBtn
              id="test-switch"
              toggled={isToggled}
              onChange={(e) => {
                setIsToggled(e.target.checked);
              }}
            />{" "}
            <span>{String(isToggled)}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
