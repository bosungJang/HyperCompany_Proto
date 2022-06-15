import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./LNBSubMenu";
import { IconContext } from "react-icons/lib";

//test
import "./LNB.css";

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
  justify-content: center;
  position: absolute;
  top: 68px;
  transition: 350ms;
  z-index: 10;
  overflow: auto;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = (props: any) => {
  const [sidebar, setSidebar] = useState(false);

  //const showSidebar = () => setSidebar(!sidebar);
  const showSidebar = () => props.setopenSideBar(!props.openSideBar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={props.openSideBar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
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
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
