import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcTextField, {
  HcSearchTextField,
  HcTitleTextField,
} from "common/HcTextField";
import { ReactComponent as AddIcon } from "resources/images/Add_Icon_Blue.svg";
import { ReactComponent as VATIcon } from "resources/images/VAT_Icon.svg";
import { ReactComponent as DropDownIcon } from "resources/images/dropDown_icon.svg";

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  visibility: hidden;

  svg {
    cursor: pointer;
    rect {
    }
  }
`;

const ContentWrapper = styled.div<{ keys: boolean; add: boolean }>`
  width: 312px;
  height: 180px;
  border: 1px solid #cecece;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 24px;
  padding: 16px;
  margin-left: ${(props) => (props.keys === false ? `24px` : `0px`)};
  transition: all 0.5s ease;
  overflow: hidden;
  ${(props) =>
    props.add === true
      ? `&:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: all 0.5s ease;
  }`
      : `&:hover{
        ${ButtonWrapper}{
          visibility: visible;
        }
    }`}
`;

const DropDownIconWrapper = styled.div<{ menuOpen?: boolean }>`
  float: right;
  cursor: pointer;

  &:hover {
    svg {
      background: #cecece;
      border-radius: 2px;
      rect {
        fill: #cecece;
      }
    }
  }

  ${(props) =>
    props.menuOpen
      ? `svg {
    background: #cecece;
    border-radius: 2px;
    rect {
      fill: #cecece;
    }
  }`
      : ""};
`;

const HcDropDownMenu = styled("ul")`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  position: absolute;
  //display: none;
  width: 188px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: -12px;
  margin-left: -177px;
`;
const HcDropDownItem = styled("li")`
  padding: 11px;
  color: #3c3c3c;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  height: 42px;
  line-height: 21px;

  &:hover {
    background: #eff5ff;
  }
`;
const VATReportingManagement = () => {
  const [data, setData] = React.useState([
    { title: "???????????? ?????? ????????? ?????????" },
    { title: "???????????? ?????? ????????? ?????????" },
    { title: "???????????? ?????? ????????? ?????????" },
    { title: "????????? ?????? ???????????? ?????????" },
    { title: "?????? ??? ???????????? ?????? ?????? ?????????" },
  ]);

  const onClickNew = () => {
    setData((prev) => [...prev, { title: "????????? ???" }]);
  };

  const DropDown = (props: any) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
      <>
        <DropDownIconWrapper
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        >
          <DropDownIcon />
          {menuOpen === true ? (
            <>
              <HcDropDownMenu>
                <HcDropDownItem>??????</HcDropDownItem>
                <HcDropDownItem>??????</HcDropDownItem>
              </HcDropDownMenu>
            </>
          ) : (
            <></>
          )}
        </DropDownIconWrapper>
      </>
    );
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
          <div style={{ display: "block", width: "100%" }}>
            <HcTitleTextField
              titleName="????????? ???????????? ?????? ??????"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div style={{ marginTop: "47px", width: "100%" }}>
              {data.map((item, key) => (
                <>
                  {key == 0 ? (
                    <ContentWrapper
                      keys={key % 4 === 0 ? true : false}
                      onClick={onClickNew}
                      add={true}
                      style={{
                        overflow: "hidden",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <AddIcon />
                        <div
                          style={{
                            marginTop: "14px",
                            color: "#5D5D62",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          ??? ?????? ??????
                        </div>
                      </div>
                    </ContentWrapper>
                  ) : (
                    <></>
                  )}
                  <ContentWrapper
                    keys={(key + 1) % 4 === 0 ? true : false}
                    add={false}
                  >
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          background: "#F4F4F4",
                          borderRadius: "2px",
                          minHeight: "35px",
                          height: "auto",
                          display: "inline-flex",
                          padding: "4px 8px 4px 4px",
                        }}
                      >
                        <VATIcon
                          style={{ height: "100%", marginTop: "4.5px" }}
                        />
                        <div
                          style={{
                            display: "inline-block",
                            lineHeight: "31px",
                            marginLeft: "4px",
                            maxWidth: "215px",
                            fontSize: "18px",
                            fontWeight: 500,
                            fontFamily: "Noto Sans KR",
                          }}
                        >
                          {item.title}
                        </div>
                      </div>
                      <ButtonWrapper>
                        <DropDown />
                      </ButtonWrapper>
                      <div style={{ marginTop: "16px" }}>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: 400,
                            fontFamily: "Noto Sans KR",
                            color: "#5D5D62",
                          }}
                        >
                          ??????
                        </div>
                      </div>
                    </div>
                  </ContentWrapper>
                </>
              ))}
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default VATReportingManagement;
