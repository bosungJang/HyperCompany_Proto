import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #838181 !important;
  justify-content: space-between;
  align-items: center;
  padding: 13px 17px;
  list-style: none;#FFFFFF;
  height: 60px !important;
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
  background: #ffffff;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a7a7a7 !important;
  font-weight: 500;
  font-size: 15px;
  font-family: "Noto Sans KR";

  &:hover {
    //background: #632ce4;
    cursor: pointer;
  }
`;

const SideBarWrapper = styled.div<{
  subnav: boolean;
  length: number;
  openSideBar: boolean;
}>`
  height: ${({ subnav, length, openSideBar }) =>
    openSideBar && subnav ? length * 60 + "px" : "0px"};
  overflow: hidden;
  transition: 350ms;
`;

const Wrapper = styled.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const SubMenu = ({ item, openSideBar }: any) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    if (openSideBar) {
      setSubnav(!subnav);
    }
  };

  React.useEffect(() => {
    if (
      String(item.path).split("/")[2] == window.location.pathname.split("/")[2]
    ) {
      setSubnav(true);
    }
  }, []);

  return (
    <Wrapper>
      <SidebarLink
        to={openSideBar && item.submenu != null ? "#" : item.path}
        onClick={item.submenu && showSubnav}
      >
        <Route>
          {(props) => {
            const matches =
              props.location.pathname.split("/")[2] ===
              String(item.path).split("/")[2];

            return (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {matches ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/Icon/" +
                        item.icon +
                        "_Active.png"
                      }
                      alt={String(item.icon)}
                    />
                  ) : (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/Icon/" +
                        item.icon +
                        ".png"
                      }
                      alt={String(item.icon)}
                    />
                  )}

                  {openSideBar ? (
                    <SidebarLabel
                      style={
                        matches ? { fontWeight: 700, color: "#000000" } : {}
                      }
                    >
                      {item.title}
                    </SidebarLabel>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {openSideBar ? (
                    item.submenu && subnav ? (
                      <RiIcons.RiArrowUpSFill
                        style={
                          matches
                            ? {
                                color: "#000000",
                                fontSize: "24px",
                                verticalAlign: "middle",
                              }
                            : {
                                color: "#A7A7A7",
                                fontSize: "24px",
                                verticalAlign: "middle",
                              }
                        }
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
      <SideBarWrapper
        subnav={subnav}
        length={item.submenu != null && item.submenu.length}
        openSideBar={openSideBar}
      >
        {item.submenu != null &&
          openSideBar &&
          item.submenu.map((item: any, index: number) => {
            return (
              <DropdownLink to={item.path} key={index}>
                <Route>
                  {(props) => {
                    const matches =
                      props.location.pathname === String(item.path);
                    return (
                      <SidebarLabel
                        style={
                          matches ? { color: "#5D5D62", fontWeight: 700 } : {}
                        }
                      >
                        {item.title}
                      </SidebarLabel>
                    );
                  }}
                </Route>
              </DropdownLink>
            );
          })}
      </SideBarWrapper>
    </Wrapper>
  );
};

export default SubMenu;
