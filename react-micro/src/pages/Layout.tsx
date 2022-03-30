import React from "react";
import App from "../common/App";
import Header from "../components/header/Header";
import LNB from "components/LNB/LNB";
//import GNB from "components/GNB/GNB";
import { getCookie, setCookie } from "common/Storage";

import styled from "styled-components";
import ToastProvider from "common/Toast";
import HcBottomBar from "common/HcBottomBar";

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.6;
  z-index: 999;
`;

interface LNBArrayProps {
  icon: string;
  title: string;
  path: string;
  submenu?: ISubmenuProps[];
}

interface ISubmenuProps {
  title: string;
  path: string;
}

const Layout = () => {
  const [openSideBar, setopenSideBar] = React.useState(true);
  const [openGNBBar, setopenGNBBar] = React.useState(false);

  const [LNBArray, setLNBArray] = React.useState<LNBArrayProps[]>([]);

  const div = React.useRef<any>();

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

  const onScroll = () => {
    const mainScroll = document.getElementById("main")!.scrollTop;
    console.log(mainScroll);
    if (10 < mainScroll) {
      console.log("ok");
      /*
      div.current.style.position = "fixed";
      div.current.style.top = 0;
      div.current.style.left = 0;
      */
      div.current.style.opacity = 1;
    } else {
      //div.current!.style.position = "relative";
      div.current.style.opacity = 0;
    }
  };

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

  const setLNBMenu = (menu: LNBArrayProps[]) => {
    setLNBArray(menu);
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

  return (
    <>
      <Header openGNBBar={openGNBBar} setGNB={setGNB} />
      {/* <GNB openGNBBar={openGNBBar} setGNB={setGNB} />*/}
      <ToastProvider>
        <div
          style={{
            display: "block",
            backgroundColor: "#E5E5E5",
            marginTop: 68,
          }}
        >
          <LNB
            openSideBar={openSideBar}
            openNav={openNav}
            closeNav={closeNav}
            LNBArray={LNBArray}
          />
          <div
            id="main"
            style={
              openSideBar === false
                ? {
                    marginLeft: 68,
                    transition: "margin-left .5s",
                    backgroundColor: "#E5E5E5",
                    height: "calc(100vh - 68px)",
                    textAlign: "center",
                    marginTop: "68px",
                    overflow: "auto",
                    marginRight: "6px",
                    marginBottom: "6px",
                  }
                : {
                    marginLeft: 300,
                    transition: "margin-left .5s",
                    backgroundColor: "#E5E5E5",
                    height: "calc(100vh - 68px)",
                    textAlign: "center",
                    marginTop: "68px",
                    overflow: "auto",
                    marginRight: "6px",
                    marginBottom: "6px",
                  }
            }
            onScroll={onScroll}
          >
            <div
              style={{
                width: "100%",
                height: "60px",
                background: "#FFFFFF",
                position: "absolute",
                opacity: 0,
                transition: "opacity 0.5s",
                padding: "16px 40px",
                border: "1px solid black",
                zIndex: 99,
                textAlign: "initial",
              }}
              ref={div}
            >
              <div
                style={{
                  fontFamily: "Noto Sans KR",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                TYPE01. BTN
              </div>
            </div>
            <App setLNBMenu={setLNBMenu} />

            {openGNBBar ? <Mask /> : null}
          </div>
        </div>
      </ToastProvider>
    </>
  );
};
export default Layout;
