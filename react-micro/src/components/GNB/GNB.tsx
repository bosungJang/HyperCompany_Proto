import React from "react";
import "./GNB.css";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu, Item } = Menu;
const MenuItem = Item;

interface GNBProps {
  openGNBBar: boolean;
  setGNB: (open: boolean) => void;
}

/*function useOutsideClick(ref: any, setGNB: (open: boolean) => void) {
  function handleClickOutside(event: MouseEvent): void {
    if (ref.current && !ref.current.contains(event.target)) {
      setGNB(false);
    }
  }

  React.useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
*/

const GNB = (props: GNBProps) => {
  /*
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, props.setGNB);
  */
  return (
    <div
      id={props.openGNBBar === false ? "gnb_close" : "gnb_open"}
      /*ref={props.openGNBBar === false ? null : wrapperRef}*/
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={[String(window.location.pathname)]}
      >
        <MenuItem key="/">
          <NavLink exact to="/" onClick={() => props.setGNB(false)}>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem key="/about">
          <NavLink exact to="/about" onClick={() => props.setGNB(false)}>
            About
          </NavLink>
        </MenuItem>

        <SubMenu key="2" title="submenu2">
          <MenuItem key="2-1">item2-1</MenuItem>
          <MenuItem key="2-2">item2-2</MenuItem>
          <SubMenu key="2-3" title="submenu2-3">
            <MenuItem key="2-3-1">item2-3-1</MenuItem>
            <MenuItem key="2-3-2">item2-3-2</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default GNB;
