import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  const activeStyle = {
    color: "black",
  };

  return (
    <div className="header_wrapper">
      <div style={{ marginTop: "-20px" }}>
        <div className="header_icon">
          <FontAwesomeIcon icon={faTh} />
        </div>
        <div className="header_title">
          <h5>SUPERCOMPANY</h5>
        </div>
        <div className="header_search">
          <input placeholder="&#xf002; 통합 검색" type="text" />
        </div>
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
