import React from "react";
import "antd/dist/antd.css";
import "./LNB.css";
import { NavLink } from "react-router-dom";
import {
  PlusCircleOutlined,
  MailOutlined,
  FolderOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";

const { SubMenu, Item } = Menu;
const MenuItem = Item;

interface LNBProps {
  openSideBar: boolean;
  setLNB: (open: boolean) => void;
}

const activeStyle = {
  color: "#1890ff",
};

const OpenSideBar = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[String(window.location.pathname)]}
    >
      <MenuItem key="/" icon={<FolderOutlined />}>
        <NavLink exact to="/">
          Home
        </NavLink>
      </MenuItem>
      <MenuItem key="/about" icon={<MailOutlined />}>
        <NavLink exact to="/about">
          About
        </NavLink>
      </MenuItem>

      <SubMenu key="2" title="submenu2" icon={<PlusCircleOutlined />}>
        <MenuItem key="2-1">item2-1</MenuItem>
        <MenuItem key="2-2">item2-2</MenuItem>
        <SubMenu key="2-3" title="submenu2-3">
          <MenuItem key="2-3-1">item2-3-1</MenuItem>
          <MenuItem key="2-3-2">item2-3-2</MenuItem>
        </SubMenu>
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
        <NavLink exact to="/">
          <FolderOutlined />
        </NavLink>
      </MenuItem>
      <MenuItem key="/about">
        <NavLink exact to="/about">
          <MailOutlined />
        </NavLink>
      </MenuItem>
      <MenuItem key="3">
        <PlusCircleOutlined />
      </MenuItem>
    </Menu>
  );
};

const LNB = (props: LNBProps) => {
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
          onClick={() => props.setLNB(!props.openSideBar)}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/Group 214.png"}
            alt="Group"
            id={
              props.openSideBar === false
                ? "LNB_button_close"
                : "LNB_button_open"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LNB;
