import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const SidebarLink = styled(Link)`
  display: flex;
  color: #838181 !important;
  justify-content: space-between;
  align-items: center;
  padding: 13px 17px;
  list-style: none;#FFFFFF;
  height: 34px !important;
  text-decoration: none;

  font-size: 16px;
  font-family: 'Noto Sans KR';
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  vertical-align: super;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a7a7a7 !important;
  font-weight: 500;
  font-size: 15px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item, openSideBar }: any) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    if (openSideBar) {
      setSubnav(!subnav);
    }
  };

  return (
    <>
      <SidebarLink
        to={openSideBar ? "#" : item.path}
        onClick={item.submenu && showSubnav}
      >
        <Route>
          {(props) => {
            return (
              <>
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/Icon/" +
                      item.icon +
                      ".png"
                    }
                    alt={String(item.icon)}
                  />
                  {openSideBar ? (
                    <SidebarLabel>{item.title}</SidebarLabel>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {openSideBar ? (
                    item.submenu && subnav ? (
                      <RiIcons.RiArrowUpSFill
                        style={{
                          color: "#A7A7A7",
                          fontSize: "24px",
                          verticalAlign: "middle",
                        }}
                      />
                    ) : item.submenu ? (
                      <RiIcons.RiArrowDownSFill
                        style={{
                          color: "#A7A7A7",
                          fontSize: "24px",
                          verticalAlign: "middle",
                        }}
                      />
                    ) : null
                  ) : null}
                </div>
              </>
            );
          }}
        </Route>
      </SidebarLink>
      {subnav &&
        openSideBar &&
        item.submenu.map((item: any, index: number) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
