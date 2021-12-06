import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OrderedListOutlined } from "@ant-design/icons";
import GNB from "components/GNB/GNB";

interface HeaderProps {
  openGNBBar: boolean;
  setGNB: (open: boolean) => void;
}

function useOutsideClick(ref: any, setGNB: (open: boolean) => void) {
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

const Header = (props: HeaderProps) => {
  const activeStyle = {
    color: "black",
  };

  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, props.setGNB);

  return (
    <div
      className="header_wrapper"
      ref={props.openGNBBar === false ? null : wrapperRef}
    >
      <div className="header_icon">
        <FontAwesomeIcon
          icon={faTh}
          onClick={() => props.setGNB(!props.openGNBBar)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="header_title">SUPERCOMPANY</div>
      <div className="header_search">
        <input placeholder="&#xf002; 통합 검색" type="text" />
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
          <li>
            <NavLink to="/table" activeStyle={activeStyle}>
              Table
            </NavLink>
          </li>
        </ul>
      </div>
      <GNB openGNBBar={props.openGNBBar} setGNB={props.setGNB} />
    </div>
  );
};

export default Header;
