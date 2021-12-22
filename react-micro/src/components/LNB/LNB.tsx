import React from "react";
import "antd/dist/antd.css";
import "./LNB.css";
import { NavLink } from "react-router-dom";
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
  { icon: "HOME", title: "Home" },
  {
    icon: "Board",
    title: "Board",
    submenu: [{ icon: "Board1", title: "Board1" }],
  },
];

const OpenSideBar = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[String(window.location.pathname)]}
    >
      {" "}
      <NavLink
        exact
        to="/"
        activeClassName="menu_selected"
        children={
          <MenuItem
            key="/"
            icon={
              <img
                src={process.env.PUBLIC_URL + "/images/Home_Icon.png"}
                alt="Home_Icon"
              />
            }
          >
            Home
          </MenuItem>
        }
      />
      <NavLink exact to="/about" activeClassName="menu_selected">
        <MenuItem
          key="/about"
          icon={
            <img
              src={process.env.PUBLIC_URL + "/images/Team_Icon.png"}
              alt="Home_Icon"
            />
          }
        >
          About
        </MenuItem>
      </NavLink>
      <SubMenu
        key="2"
        title="submenu2"
        icon={
          <img
            src={process.env.PUBLIC_URL + "/images/Board_Icon.png"}
            alt="Home_Icon"
          />
        }
      >
        <NavLink exact to="/test" activeClassName="menu_selected">
          <MenuItem key="2-1"> item2-1</MenuItem>
        </NavLink>
        <NavLink exact to="/table" activeClassName="menu_selected">
          <MenuItem key="2-2"> item2-2</MenuItem>
        </NavLink>
      </SubMenu>
    </Menu>
  );
};

const CloseSideBar = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[String(window.location.pathname)]}
    >
      <MenuItem key="/">
        <NavLink exact to="/" activeClassName="menu_selected">
          <img
            src={process.env.PUBLIC_URL + "/images/Home_Icon.png"}
            alt="Home_Icon"
          />
        </NavLink>
      </MenuItem>
      <MenuItem key="/about">
        <NavLink exact to="/about" activeClassName="menu_selected">
          <img
            src={process.env.PUBLIC_URL + "/images/Team_Icon.png"}
            alt="Home_Icon"
          />
        </NavLink>
      </MenuItem>
      <MenuItem key="3">
        <img
          src={process.env.PUBLIC_URL + "/images/Board_Icon.png"}
          alt="Home_Icon"
        />
      </MenuItem>
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
