import React from "react";
import "antd/dist/antd.css";
import "./LNB.css";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import {
  PlusCircleOutlined,
  MailOutlined,
  FolderOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { ReactComponent as ArrrowIcon } from "../../fonts/images/LNBArrowIcon.svg";
import { Menu } from "antd";
import styled from "styled-components";

const { SubMenu, Item } = Menu;
const MenuItem = Item;

const ArrowIconWrapper = styled.div`
  &:hover {
    svg {
      circle {
        fill: #a7a7a7;
      }
    }
  }
  &:active {
    svg {
      circle {
        fill: #000000;
      }
    }
  }
`;

interface LNBProps {
  openSideBar: boolean;
  openNav: () => void;
  closeNav: () => void;
}

const testArray = [
  { icon: "Home_Icon", title: "Home", path: "/" },
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
      { title: "인사정보관리", path: "/hr/management" },
    ],
  },
];

const OpenSideBar = () => {
  const menuList = testArray.map((menu, index) => {
    if (menu.submenu == null) {
      return (
        <NavLink exact to={String(menu.path)} activeClassName="menu_selected">
          <Route>
            {(props) => {
              const matches = props.location.pathname === String(menu.path);
              if (matches) {
                return (
                  <MenuItem
                    key={String(menu.path)}
                    icon={
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/" +
                          menu.icon +
                          "_Active.png"
                        }
                        alt={String(menu.icon)}
                      />
                    }
                  >
                    {menu.title}
                  </MenuItem>
                );
              } else {
                return (
                  <MenuItem
                    key={String(menu.path)}
                    icon={
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/" +
                          menu.icon +
                          ".png"
                        }
                        alt={String(menu.icon)}
                      />
                    }
                  >
                    {menu.title}
                  </MenuItem>
                );
              }
            }}
          </Route>
        </NavLink>
      );
    } else {
      return (
        <SubMenu
          key={String(menu.path)}
          title={String(menu.title)}
          icon={
            <img
              src={process.env.PUBLIC_URL + "/images/" + menu.icon + ".png"}
              alt={String(menu.icon)}
            />
          }
        >
          {menu.submenu.map((submenus) => {
            return (
              <NavLink
                exact
                to={String(submenus.path)}
                activeClassName="menu_selected"
              >
                <MenuItem key="2-1">{submenus.title}</MenuItem>
              </NavLink>
            );
          })}
        </SubMenu>
      );
    }
  });
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[String(window.location.pathname)]}
    >
      {menuList}
    </Menu>
  );
};

const CloseSideBar = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[String(window.location.pathname)]}
    >
      {testArray.map((menu, index) => {
        return (
          <MenuItem key={String(menu.path)}>
            <NavLink
              exact
              to={String(menu.path)}
              activeClassName="menu_selected"
            >
              <Route>
                {(props) => {
                  const matches = props.location.pathname === String(menu.path);
                  if (matches) {
                    return (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/" +
                          menu.icon +
                          "_Active.png"
                        }
                        alt={String(menu.icon)}
                      />
                    );
                  } else {
                    return (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/" +
                          menu.icon +
                          ".png"
                        }
                        alt={String(menu.icon)}
                      />
                    );
                  }
                }}
              </Route>
            </NavLink>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

const LNB = (props: LNBProps) => {
  console.log("array", testArray.length);
  console.log("array1", testArray[0].submenu?.length);
  return (
    <div id={props.openSideBar === false ? "lnb_close" : "lnb_open"}>
      <div className="menu_wrapper">
        {props.openSideBar === false ? <CloseSideBar /> : <OpenSideBar />}
      </div>
      <div
        className={
          props.openSideBar === false
            ? "button_wrapper_close"
            : "button_wrapper_open"
        }
      >
        <div
          className={
            props.openSideBar === false
              ? "LNB_wrapper_close"
              : "LNB_wrapper_open"
          }
          onClick={
            props.openSideBar === false
              ? () => props.openNav()
              : () => props.closeNav()
          }
        >
          <ArrowIconWrapper
            id={
              props.openSideBar === false
                ? "LNB_button_close"
                : "LNB_button_open"
            }
          >
            <ArrrowIcon />
          </ArrowIconWrapper>
        </div>
      </div>
    </div>
  );
};

export default LNB;
