import React from "react";
import App from "../common/App";
import Header from "../components/header/Header";
import LNB from "components/LNB/LNB";

const Layout = () => {
  function openNav() {
    (document.getElementById("lnb") as HTMLFormElement).style.width = "250px";
    (document.getElementById("main") as HTMLFormElement).style.marginLeft =
      "250px";
  }

  function closeNav() {
    (document.getElementById("lnb") as HTMLFormElement).style.width = "80px";
    (document.getElementById("main") as HTMLFormElement).style.marginLeft =
      "80px";
  }
  return (
    <>
      <LNB />
      <div id="main" style={{ marginLeft: 80, transition: "margin-left .5s" }}>
        <Header />

        <App />
        <button style={{ zIndex: 999 }} onClick={openNav}>
          open
        </button>
        <button style={{ zIndex: 999 }} onClick={closeNav}>
          close
        </button>
      </div>
    </>
  );
};
export default Layout;
