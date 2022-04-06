import React from "react";
import App from "../common/App";
import Header from "../components/header/Header";
import LNB from "components/LNB/LNB";
//import GNB from "components/GNB/GNB";
import { getCookie, setCookie } from "common/Storage";

import styled from "styled-components";
import ToastProvider from "common/Toast";
import HcBottomBar from "common/HcBottomBar";
import HcCheckBox from "common/HcCheckBox";

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
  const scroll = React.useRef<any>();
  const tableRef = React.useRef<any>();

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

  let before = 0;

  const onScroll = () => {
    const mainScroll = document.getElementById("main")!.scrollTop;
    /*
    if (before < document.getElementById("main")!.scrollTop) {
      if (10 < mainScroll) {
        div.current.style.opacity = 1;
        div.current.style.top = "68px";
        
        div.current.style.position = "fixed";
        div.current.style.top = 0;
        div.current.style.left = 0;
        
        if (
          document.getElementById("main")!.scrollHeight -
            document.getElementById("main")!.scrollTop >=
          document.getElementById("main")!.offsetHeight
        ) {
          
          scroll.current.style.width = "100%";
          scroll.current.style.height = "100%";
          scroll.current.style.position = "fixed";
          scroll.current.style.top = "0";
          scroll.current.style.left = "0";
          scroll.current.style.paddingTop = "264px";
          scroll.current.style.paddingLeft = "684px";
          
          //alert("끝도착");
        }
      
      } else {
        //div.current!.style.position = "relative";
        div.current.style.opacity = 0;
        div.current.style.top = "-50px";
      }
      if (scroll != null || scroll != undefined) {
        if (scroll.current.getBoundingClientRect().top - 30 <= 0) {
          tableRef.current.style.opacity = 1;
          tableRef.current.style.top = "128px";
        } else {
          tableRef.current.style.opacity = 0;
          tableRef.current.style.top = "-50px";
        }
        if (scroll.current.getBoundingClientRect().bottom + 98 <= 0) {
          tableRef.current.style.opacity = 0;
          tableRef.current.style.top = "-50px";
        }
      }
    } else {
      if (10 < mainScroll) {
   
        div.current.style.position = "fixed";
        div.current.style.top = 0;
        div.current.style.left = 0;
        
        div.current.style.opacity = 1;
        div.current.style.top = "68px";
      } else {
        //div.current!.style.position = "relative";
        div.current.style.opacity = 0;
        div.current.style.top = "-50px";
      }
      if (scroll != null || scroll != undefined) {
        if (scroll.current.getBoundingClientRect().top <= 0) {
          tableRef.current.style.opacity = 1;
          tableRef.current.style.top = "128px";
        } else {
          tableRef.current.style.opacity = 0;
        }
      }
    }
    before = document.getElementById("main")!.scrollTop;
    */
    if (10 < mainScroll) {
      div.current.style.opacity = 1;
      div.current.style.top = "68px";
    } else {
      div.current.style.opacity = 0;
      div.current.style.top = "-50px";
    }
    if (scroll.current != undefined) {
      if (scroll.current.getBoundingClientRect().top - 30 <= 0) {
        tableRef.current.style.opacity = 1;
        tableRef.current.style.top = "128px";
      } else {
        tableRef.current.style.opacity = 0;
        tableRef.current.style.top = "-50px";
      }
      if (scroll.current.getBoundingClientRect().bottom + 98 <= 0) {
        tableRef.current.style.opacity = 0;
        tableRef.current.style.top = "-50px";
      }
    } else {
      tableRef.current.style.opacity = 0;
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
                transition: "all 0.3s",
                padding: "16px 40px",
                border: "1px solid black",
                zIndex: 99,
                textAlign: "initial",
                //top: "-50px",
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
            <div
              style={{
                width: "100%",
                height: "fit-content",
                background: "#FFFFFF",
                position: "absolute",
                opacity: 0,
                //transition: "all 0.5s",
                //padding: "16px 40px",
                //border: "1px solid black",
                zIndex: 99,
                textAlign: "center",
                //top: "-50px",
                backgroundColor: "rgba( 255, 255, 255, 0 )",
              }}
              ref={tableRef}
            >
              <div style={{ display: "inline-block", marginRight: "314px" }}>
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: "33.63px" }}>
                        <HcCheckBox checked onChange={() => {}} />
                      </th>
                      <th>계좌명</th>
                      <th>계좌 구분</th>
                      <th>은행명</th>
                      <th style={{ width: "252.56px" }}>계좌 번호</th>
                      <th>예금주</th>
                      <th>사용 여부</th>
                      <th>개설일</th>
                      <th>만기일</th>
                      <th style={{ width: "95.1px" }}>-</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <App setLNBMenu={setLNBMenu} ref={scroll} />

            {openGNBBar ? <Mask /> : null}
          </div>
        </div>
      </ToastProvider>
    </>
  );
};
export default Layout;
