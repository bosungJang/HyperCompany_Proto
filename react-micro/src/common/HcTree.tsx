import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as ArrrowIcon } from "../resources/images/TreeArrow.svg";
import { ReactComponent as DotIcon } from "../resources/images/depth_dot_normal.svg";
import { HcSearchTextField, HcSelect } from "common/HcTextField";
import { ReactComponent as AddIcon } from "resources/images/Icon_Add.svg";

export const Wrapper = styled.div`
  width: 312px;
  min-height: 566px;
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 10px 10px;
  display: inline-block;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 36px;
  vertical-align: middle;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }
  overflow: hidden;
`;
const LabelWrapper = styled.div`
  height: 40px;
  margin-bottom: 6px;
  border-radius: 3px;
  font-weight: bold;
  line-height: 19px;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 10px;
`;
const arrowRotate = () => keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(90deg)
  }
`;

const arrowRotateReverse = () => keyframes`
  from{
    transform: rotate(90deg)
  }
  to{
    transform: rotate(0deg)
  }
`;

const ArrowWrapper = styled.div<{ open?: boolean }>`
  width: 20px;
  height: 20px;
  //background: ${(props) => (props.open ? "#CEE2FF" : "#ededed")};
  background: #ededed;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  text-align: center;
  //float: left;

  // animation-duration: 0.5s;
  //animation-timing-function: ease-out;
  // animation-name: ${(props) =>
    props.open ? arrowRotate() : arrowRotateReverse()};
  // animation-fill-mode: forwards;

  transform: ${(props) => (props.open ? `rotate(90deg)` : "")};
  svg {
    vertical-align: unset;
    path {
      transition: 1.5s ease all;
      // fill: ${(props) => (props.open ? "#0E6DFC;" : "#808080")};
      fill: #808080;
    }
  }
`;

const ItemLabel = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: #5d5d62;
  display: flex;
  max-width: 164px;

  :focus {
    color: #000000;
    font-weight: bold;
  }
`;

export const TreeIcon = (props?: any) => {
  const { open, items, style } = props;

  return (
    <>
      {" "}
      {items ? (
        <ArrowWrapper open={open} style={style}>
          <ArrrowIcon />
        </ArrowWrapper>
      ) : (
        <ArrowWrapper style={style}>
          <DotIcon />
        </ArrowWrapper>
      )}
    </>
  );
};

const HcTree = (props: any) => {
  const [items, setItems] = useState(props.items);
  const [inputVal, setInputVal] = React.useState("");

  /*
        The default slot is also the labelSlot. If the user passes in
        a rendering function then we use that, otherwise we render
        the title.
     */
  const labelSlot =
    props.children instanceof Function
      ? (item: any) => (
          <ItemLabel onClick={() => toggleOpen(item)}>
            {props.children(item)}
          </ItemLabel>
        )
      : (item: any) => (
          <ItemLabel
            onClick={() => {
              toggleOpen(item);
              if (item.items == null && props.currentData != null) {
                props.setcurrentData({ id: item.id, title: item.title });
                if (props.closeModal != null) {
                  props.closeModal();
                }
              }
            }}
          >
            {item.title}
            {item.headCount ? (
              <div
                style={{ color: "#838181", marginLeft: "8px", fontWeight: 400 }}
              >
                {item.headCount}
              </div>
            ) : (
              ""
            )}
          </ItemLabel>
        );

  function searchTree(element: any, searchKeyword: string): any {
    console.log("work?", element, searchKeyword);
    let result: any = null;

    function loop(element: any, searchKeyword: string): any {
      if (result == null) {
        for (var i = 0; i < element.length; i++) {
          if (String(element[i].id) == String(searchKeyword)) {
            result = element[i];
            console.log("match", result);
            break;
          } else {
            if (element[i].items != null) {
              loop(element[i].items, searchKeyword);
            }
          }
        }
      }
    }

    loop(element, searchKeyword);

    return result;
    /*
    if (element.title === searchKeyword) {
      console.log("1st");
      return element;
    } else if (element.children != null) {
      console.log("2nd");
      var i;
      var result = null;
      for (i = 0; result == null && i < element.children.length; i++) {
        result = searchTree(element.children[i], searchKeyword);
        console.log("3rd");
      }
      return result;
    }
    return null;
    */
  }

  /*
        Optional prepend slot
     */
  const prependSlot =
    props.prependSlot instanceof Function
      ? (item: any) => props.prependSlot(item)
      : () => props.prependSlot;

  return (
    <Wrapper style={{ ...props.style }}>
      <TitleWrapper>
        <span>{props.title}</span>
        {props.isCreate != null ? (
          <div
            style={{ float: "right", marginTop: "2px", cursor: "pointer" }}
            onClick={() => props.setIsCreates(true)}
          >
            <AddIcon />
          </div>
        ) : null}
      </TitleWrapper>
      {props.search ? (
        <div style={{ marginBottom: "10px", marginLeft: "10px" }}>
          <HcSearchTextField
            name="name"
            value={inputVal}
            placeholder={
              props.placeholder ? props.placeholder : "계정코드 또는 계정과목명"
            }
            style={{ width: "276px", height: "36px" }}
            onChange={(e) => {
              const lengthOfInputValue = inputVal.split("").length;

              if (lengthOfInputValue !== 10) setInputVal(e.currentTarget.value);
              if (lengthOfInputValue > 0) {
                // setItems(items.filter((x: any) => x.title.includes(inputVal)));

                // setItems(
                //   items.filter(function (item: string) {
                //     const str = String(inputVal);
                //     return str.includes(item) === true;
                //   })
                // );
                console.log(
                  items.filter((x: any) => x.title.includes(inputVal))
                );
                setItems(
                  props.items.filter((x: any) => x.title.includes(inputVal))
                );
              } else {
                setItems(props.items);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputVal.trim() !== "") {
                if (searchTree(items, e.currentTarget.value) != null)
                  alert(searchTree(items, e.currentTarget.value).title);
              }
            }}
          />
        </div>
      ) : null}
      <Item
        key="1"
        {...{
          ...props,
          prependSlot,
          labelSlot,
          toggleOpen,
          items,
        }}
      />
      {inputVal}
      correct items:{" "}
      {items.filter((x: any) => x.title.includes(inputVal)).length}
    </Wrapper>
  );

  function toggleOpen(item: any) {
    setItems(toggle(items));

    function toggle(items: any) {
      let result = items.map((i: any) => {
        return i.id === item.id
          ? {
              ...i,
              $open: !i.$open,
            }
          : {
              ...i,
              ...(i.items && { items: toggle(i.items) }),
            };
      });
      return result;
    }
  }
  /*
  function Item({ items, style }: any) {
    // console.log('update', new Date().getTime())
    return items.map((item: any) => (
      <div key={item.id} style={{ ...style }}>
        <div
          style={{
            height: "37px",
            lineHeight: "37px",
            borderBottom: "1px solid #E0E0E0",
          }}
          className="label_wrapper"
        >
          <span className="expander" style={{ lineHeight: "initial" }}>
            {item.items ? (
              <ArrowWrapper open={item.$open}>
                <ArrrowIcon />
              </ArrowWrapper>
            ) : null}
          </span>
          {prependSlot(item)}
          {labelSlot(item)}
        </div>
        {item.items && (
          <div
            style={
              item.$open ? { display: "inline-list-item" } : { display: "none" }
            }
          >
            <Item
              {...{
                style: {
                  ...style,
                  paddingLeft: "30px",
                },
                items: item.items,
              }}
            />
          </div>
        )}
      </div>
    ));
  }
  */
  function Item({ items }: any) {
    function depthProduct(item: any, depth: number) {
      return (
        <div
          style={
            item.$open ? { display: "inline-list-item" } : { display: "none" }
          }
        >
          {item.items.map((item: any) => {
            return (
              <div>
                <LabelWrapper
                  className="label_wrapper"
                  style={
                    item.id &&
                    props.currentData &&
                    props.currentData.id !== null
                      ? {
                          paddingLeft: depth * 30,
                          paddingTop: item.items ? "6px" : "9px",
                          background:
                            String(item.id) === String(props.currentData.id)
                              ? "#EFF5FF"
                              : "#ffff",
                        }
                      : {
                          paddingLeft: depth * 30,
                          paddingTop: item.items ? "6px" : "9px",
                        }
                  }
                >
                  <div
                    className="expander"
                    style={{
                      lineHeight: "initial",
                      display: "inline-block",
                      float: "left",
                    }}
                  >
                    {item.items ? (
                      <ArrowWrapper open={item.$open}>
                        <ArrrowIcon />
                      </ArrowWrapper>
                    ) : (
                      <ArrowWrapper>
                        {console.log(item.id)}
                        <DotIcon />
                      </ArrowWrapper>
                    )}
                  </div>
                  {labelSlot(item)}
                </LabelWrapper>
                {item.items != null ? depthProduct(item, depth + 1) : null}
              </div>
            );
          })}
        </div>
      );
    }

    return items.map((item: any) => (
      <div key={item.id}>
        <LabelWrapper
          style={
            item.id && props.currentData && props.currentData.id !== null
              ? {
                  background:
                    String(item.id) === String(props.currentData.id)
                      ? "#EFF5FF"
                      : "#ffff",
                  paddingTop: item.items ? "6px" : "9px",
                  lineHeight: item.items ? "20px" : "19px",
                }
              : {
                  paddingTop: item.items ? "6px" : "9px",
                  lineHeight: item.items ? "20px" : "19px",
                }
          }
          className="label_wrapper"
        >
          <div
            className="expander"
            style={{
              lineHeight: "initial",
              display: "inline-block",
              float: "left",
            }}
          >
            {item.items ? (
              <ArrowWrapper open={item.$open}>
                <ArrrowIcon />
              </ArrowWrapper>
            ) : (
              <ArrowWrapper>
                <DotIcon />
              </ArrowWrapper>
            )}
          </div>
          {labelSlot(item)}
        </LabelWrapper>
        {item.items != null ? depthProduct(item, 1) : null}
      </div>
    ));
  }
};
export const Ul = styled.ul`
  height: 628px;
  margin-bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
    opacity: 0;
  }
  &::-webkit-scrollbar-track {
    display: none;
    opacity: 0;
  }
`;
export const HRTree = (props?: any) => {
  const [inputVal, setInputVal] = React.useState("");
  function searchTree(element: any, searchKeyword: string): any {
    console.log("work?", element, searchKeyword);
    let result: any = null;

    function loop(element: any, searchKeyword: string): any {
      if (result == null) {
        for (var i = 0; i < element.length; i++) {
          if (String(element[i].id) == String(searchKeyword)) {
            result = element[i];
            console.log("match", result);
            break;
          } else {
            if (element[i].items != null) {
              loop(element[i].items, searchKeyword);
            }
          }
        }
      }
    }
    loop(element, searchKeyword);
    return result;
  }
  function HrItems(items: any[]) {
    const Item = styled.li`
      height: 80px;
      width: 288px;
      border-radius: 4px;
      margin-bottom: 7px;
      padding: 17px 0px 14px 74px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #2d2d31;
      display: block;
      position: relative;
    `;
    const Position = styled.div`
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      color: #2d2d31;
      margin-top: 7px;
    `;
    const Img = styled.img`
      position: absolute;
      width: 50px;
      left: 10px;
      top: 15;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #257cff;
    `;

    return (
      <Ul>
        {items.map((item) => (
          <Item
            onClick={() => props.setState(item.id)}
            style={{
              background: props.state === item.id ? "#EFF5FF" : "#FFFFFF",
            }}
          >
            <Img
              src={item.img}
              style={{
                border:
                  props.state === item.id
                    ? "2px solid #257CFF"
                    : "1px solid #cecece",
              }}
            />
            {item.name}
            <Position>{item.position}</Position>
          </Item>
        ))}
      </Ul>
    );
  }
  return (
    <Wrapper style={{ height: "832px", overflow: "hidden" }}>
      <TitleWrapper style={{ margin: "6px 0px 0px 10px" }}>
        <span>{props.title}</span>
        {props.isCreate != null ? (
          <div
            style={{ float: "right", marginTop: "2px", cursor: "pointer" }}
            onClick={() => props.setIsCreates(true)}
          >
            <AddIcon />
          </div>
        ) : null}
      </TitleWrapper>

      <HcSelect
        style={{
          width: "276px",
          margin: "12px 0px 10px 6px",
          height: "36px",
        }}
      >
        <option>조직 선택</option>
      </HcSelect>
      <HcSearchTextField
        name="name"
        value={inputVal}
        placeholder={props.placeholder}
        style={{ width: "276px", height: "36px", marginLeft: "6px" }}
        onChange={(e) => {
          const lengthOfInputValue = inputVal.split("").length;

          if (lengthOfInputValue !== 10) setInputVal(e.currentTarget.value);
        }}
        onKeyDown={(e) => {
          // if (e.key === "Enter" && inputVal.trim() !== "") {
          //   if (searchTree(items, e.currentTarget.value) != null)
          //     alert(searchTree(items, e.currentTarget.value).title);
          // }
        }}
      />

      {props.children ? props.children : ""}
      {HrItems(props.items)}
    </Wrapper>
  );
};
const Settings = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  padding: 5.5px 10.5px;

  &:hover {
    background-color: #cecece;
  }
  &:active {
    background-color: #cecece;
  }
`;
const Menucontainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 8px;
  right: 3px;
  &:hover > .tooltip,
  &:focus > .tooltip {
    display: block;
    position: absolute;
  }
  overflow: visible;
`;
const Content = styled.div<{ active: boolean }>`
  // ${(props) => (props.active ? "display: block;" : "display:none;")}
  display: none;
  position: absolute;
  z-index: 200;
  width: fit-content;
  height: fit-content;
  left: 18px;
  top: 25px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    display: block;
    .threeDotBtn {
      background-color: #cecece;
    }
  }
`;
export const TreeDotBtn = ({ children }: any) => {
  const [active, setActive] = useState(false);
  return (
    <Menucontainer
      onClick={(e: any) => {
        e.stopPropagation();
        setActive(!active);
      }}
    >
      <Settings className="threeDotBtn">
        <svg
          width="4"
          height="14"
          viewBox="0 0 4 14"
          fill="none"
          style={{ marginBottom: 4 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM3.5 7C3.5 7.82843 2.82843 8.5 2 8.5C1.17157 8.5 0.5 7.82843 0.5 7C0.5 6.17157 1.17157 5.5 2 5.5C2.82843 5.5 3.5 6.17157 3.5 7ZM2 13.5C2.82843 13.5 3.5 12.8284 3.5 12C3.5 11.1716 2.82843 10.5 2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5Z"
            fill="#5D5D62"
          />
        </svg>
      </Settings>{" "}
      <Content className="tooltip" active={active}>
        {children}
      </Content>
    </Menucontainer>
  );
};
export default HcTree;
