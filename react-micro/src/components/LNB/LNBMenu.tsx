import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./LNBSubMenu";
import { IconContext } from "react-icons/lib";
import { ReactComponent as ArrrowIcon } from "../../resources/images/LNBArrowIcon.svg";
//test
import "./LNB.css";
//icon
import { ReactComponent as FinanceIcon } from "../../resources/images/Icon/Title/Finance_Title_Icon.svg";
import { ReactComponent as HRIcon } from "../../resources/images/Icon/Title/HR_Title_Icon.svg";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav<{ sidebar: boolean }>`
  background: #ffffff;
  width: ${({ sidebar }) => (sidebar ? "300px" : "68px")};
  height: calc(100vh - 68px);
  display: flex;
  justify-content: unset;
  position: absolute;
  top: 68px;
  transition: width 350ms;
  z-index: 10;
  padding-right: 4px;

  flex-direction: column;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  overflow: auto;
  margin-top: 10px;
`;

const SidebarButtonWrapper = styled.div<{ openSideBar: boolean }>`
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
  line-height: 70px;
  padding: 0px 18px;

  div {
    transform: ${({ openSideBar }) =>
      openSideBar ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 350ms;
  }
`;

const TitleIconWrap = styled.div<{ openSideBar: boolean }>`
  height: 80px;
  margin: ${({ openSideBar }) =>
    openSideBar ? "0px 12px 0px 16px" : "0px 2px 0px 6px"};
  border-bottom: 1px solid #cecece;
  display: flex;
`;

const TitleInside = styled.div<{ openSideBar: boolean }>`
  width: 100%;
  text-align: ${({ openSideBar }) => (openSideBar ? "unset" : "center")};
  transition: 350ms;
  display: flex;
  align-items: center;
  justify-content: ${({ openSideBar }) => (openSideBar ? "unset" : "center")};

  span {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 20px;
    color: #5d5d62;
    margin-left: 14px;
  }
`;

const Sidebar = (props: any) => {
  const [titleIcon, setTitleIcon] = useState("");

  //const showSidebar = () => setSidebar(!sidebar);
  const showSidebar = () => {
    if (props.openSideBar) {
      props.closeNav();
    } else {
      props.openNav();
    }
  };

  React.useEffect(() => {
    const path = window.location.pathname.split("/")[1];

    switch (path) {
      case "fi":
        setTitleIcon("fi");
        break;
      case "hr":
        setTitleIcon("hr");
        break;
      default:
        setTitleIcon("");
        break;
    }
  }, [props.LNBArray]);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={props.openSideBar}>
          <TitleIconWrap openSideBar={props.openSideBar}>
            <TitleInside openSideBar={props.openSideBar}>
              {
                {
                  fi: <FinanceIcon style={{ marginTop: "10px" }} />,
                  hr: <HRIcon style={{ marginTop: "10px" }} />,
                  "": <></>,
                }[titleIcon]
              }
              {props.openSideBar ? (
                {
                  fi: <span>재무 회계</span>,
                  hr: <span>인사</span>,
                  "": <></>,
                }[titleIcon]
              ) : (
                <></>
              )}
            </TitleInside>
          </TitleIconWrap>
          <SidebarWrap>
            {props.LNBArray.map((item: any, index: number) => {
              return (
                <SubMenu
                  item={item}
                  key={index}
                  openSideBar={props.openSideBar}
                />
              );
            })}
          </SidebarWrap>
          <SidebarButtonWrapper openSideBar={props.openSideBar}>
            <div
              onClick={showSidebar}
              style={{ float: "right", cursor: "pointer" }}
            >
              <ArrrowIcon />
            </div>
          </SidebarButtonWrapper>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
