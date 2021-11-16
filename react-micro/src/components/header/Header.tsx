import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    color: "black",
  };

  return (
    <div className="header_wrapper">
      <div className="header_search">
        <input />
      </div>
      <div className="header_nav">
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/foo" activeStyle={activeStyle}>
              About Foo
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeStyle={activeStyle}>
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
