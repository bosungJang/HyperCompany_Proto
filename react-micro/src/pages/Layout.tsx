import React from "react";
import App from "../common/App";
import Header from "../components/header/Header";
import LNB from "components/LNB/LNB";
//import GNB from "components/GNB/GNB";
import { getCookie, setCookie } from "common/Storage";

import styled from "styled-components";
import ToastProvider from "common/Toast";
import HcBottomBar from "common/HcBottomBar";

//test
import LNBTest from "components/LNB/LNBMenu";

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

  const scrollRef = React.useRef<any>([]);

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

    console.log(scrollRef.current[3]);

    if (10 < mainScroll) {
      scrollRef.current[0].style.opacity = 1;
      scrollRef.current[0].style.top = "68px";
    } else {
      scrollRef.current[0].style.opacity = 0;
      scrollRef.current[0].style.top = "-50px";
    }
    if (scrollRef.current[2] != undefined) {
      if (scrollRef.current[2].getBoundingClientRect().top - 30 <= 0) {
        scrollRef.current[1].style.opacity = 1;
        scrollRef.current[1].style.top = "128px";
      } else {
        scrollRef.current[1].style.opacity = 0;
        scrollRef.current[1].style.top = "-50px";
      }
      if (scrollRef.current[2].getBoundingClientRect().bottom + 98 <= 0) {
        scrollRef.current[1].style.opacity = 0;
        scrollRef.current[1].style.top = "-50px";
      }
    } else {
      scrollRef.current[1].style.opacity = 0;
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
          {/* 
          <LNB
            openSideBar={openSideBar}
            openNav={openNav}
            closeNav={closeNav}
            LNBArray={LNBArray}
          />
*/}
          <LNBTest
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
            <App setLNBMenu={setLNBMenu} forwardRef={scrollRef} />

            {openGNBBar ? <Mask /> : null}
          </div>
        </div>
      </ToastProvider>
    </>
  );
};
export default Layout;
