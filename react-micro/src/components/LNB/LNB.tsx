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

const OpenSideBar = () => {
  return (
    <Menu mode="inline">
      <SubMenu key="1" title="submenu1">
        <MenuItem key="1-1">
          <NavLink exact to="/">
            Home
          </NavLink>
        </MenuItem>
        <MenuItem key="1-2">
          <NavLink exact to="/about">
            About
          </NavLink>
        </MenuItem>
      </SubMenu>
      <SubMenu key="2" title="submenu2">
        <MenuItem key="2-1">item2-1</MenuItem>
        <MenuItem key="2-2">item2-2</MenuItem>
        <SubMenu key="2-3" title="submenu2-3">
          <MenuItem key="2-3-1">item2-3-1</MenuItem>
          <MenuItem key="2-3-2">item2-3-2</MenuItem>
        </SubMenu>
      </SubMenu>
      <MenuItem key="3">item3</MenuItem>
    </Menu>
  );
};

const CloseSideBar = () => {
  return (
    <Menu mode="inline">
      <MenuItem key="1">
        <NavLink exact to="/">
          <FolderOutlined />
        </NavLink>
      </MenuItem>
      <MenuItem key="2">
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
      {props.openSideBar === false ? <CloseSideBar /> : <OpenSideBar />}
    </div>
  );
};

export default LNB;
