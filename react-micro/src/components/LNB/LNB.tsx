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
import { useTranslation } from "react-i18next";

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
export interface LNBArrayProps {
  icon: string;
  title: string;
  path: string;
  submenu?: ISubmenuProps[];
}

export interface ISubmenuProps {
  title: string;
  path: string;
}

interface LNBProps {
  openSideBar: boolean;
  openNav: () => void;
  closeNav: () => void;
  LNBArray: LNBArrayProps[];
}

const OpenSideBar = ({ LNBArray }: { LNBArray: LNBArrayProps[] }) => {
  const { t, i18n } = useTranslation();
  const menuList = LNBArray.map((menu, index) => {
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
                          "/images/Icon/" +
                          menu.icon +
                          "_Active.png"
                        }
                        alt={String(menu.icon)}
                      />
                    }
                  >
                    {t(menu.title)}
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
                          "/images/Icon/" +
                          menu.icon +
                          ".png"
                        }
                        alt={String(menu.icon)}
                      />
                    }
                  >
                    {t(menu.title)}
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
          title={t(String(menu.title))}
          icon={
            <img
              src={
                process.env.PUBLIC_URL + "/images/Icon/" + menu.icon + ".png"
              }
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
                <MenuItem key="2-1">{t(submenus.title)}</MenuItem>
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

const CloseSideBar = ({ LNBArray }: { LNBArray: LNBArrayProps[] }) => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[String(window.location.pathname)]}
    >
      {LNBArray.map((menu, index) => {
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
                          "/images/Icon/" +
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
                          "/images/Icon/" +
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
  React.useEffect(() => {
    console.log("LNB변경");
    document.querySelector(".menu_wrapper")?.animate(
      [
        // from keyframe
        {
          opacity: "0",
        },
        // to keyframe
        {
          opacity: "1",
        },
      ],
      500
    );
  }, [props.LNBArray]);
  return (
    <div id={props.openSideBar === false ? "lnb_close" : "lnb_open"}>
      <div className="menu_wrapper">
        {props.openSideBar === false ? (
          <CloseSideBar LNBArray={props.LNBArray} />
        ) : (
          <OpenSideBar LNBArray={props.LNBArray} />
        )}
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
