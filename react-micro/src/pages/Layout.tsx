import React from "react";
import App from "../common/App";
import Header from "../components/header/Header";
import LNB from "components/LNB/LNB";
import { getCookie, setCookie } from "common/Storage";

const Layout = () => {
  const [openSideBar, setopenSideBar] = React.useState(true);

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

  return (
    <>
      <Header />
      <div style={{ display: "block" }}>
        <LNB openSideBar={openSideBar} setLNB={setLNB} />
        <div
          id="main"
          style={
            openSideBar === false
              ? { marginLeft: 80, transition: "margin-left .5s" }
              : { marginLeft: 250, transition: "margin-left .5s" }
          }
        >
          <App />
          <button onClick={openNav}>open</button>
          <button onClick={closeNav}>close</button>
        </div>
      </div>
    </>
  );
};
export default Layout;
