import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as ArrrowIcon } from "../resources/images/TreeArrow.svg";
import { ReactComponent as DotIcon } from "../resources/images/depth_dot_normal.svg";
import { HcSearchTextField, HcSelect } from "common/HcTextField";
import { ReactComponent as AddIcon } from "resources/images/Icon_Add.svg";

const Wrapper = styled.div`
  width: 312px;
  min-height: 566px;
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 10px 10px;
  display: inline-block;
`;

const TitleWrapper = styled.div`
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
  display: inline-block;
  vertical-align: middle;
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
  font-weight: normal;
  font-size: 14px;
  cursor: pointer;
  color: #838383;
  display: inline-block;
  max-width: 164px;

  :focus {
    color: #000000;
    font-weight: bold;
  }
`;

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
    //console.log(items);
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
                <div
                  style={{
                    minHeight: "37px",
                    lineHeight: "37px",
                    borderBottom: "1px solid #E0E0E0",
                    paddingLeft: depth * 30,
                  }}
                  className="label_wrapper"
                >
                  <div
                    className="expander"
                    style={{
                      lineHeight: "initial",
                      display: "inline-block",
                      float: "left",
                      marginTop: "7px",
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
                </div>
                {item.items != null ? depthProduct(item, depth + 1) : null}
              </div>
            );
          })}
        </div>
      );
    }

    return items.map((item: any) => (
      <div key={item.id}>
        <div
          style={{
            minHeight: "37px",
            lineHeight: "37px",
            borderBottom: "1px solid #E0E0E0",
          }}
          className="label_wrapper"
        >
          <div
            className="expander"
            style={{
              lineHeight: "initial",
              display: "inline-block",
              float: "left",
              marginTop: "7px",
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
        </div>
        {item.items != null ? depthProduct(item, 1) : null}
      </div>
    ));
  }
};

export const HRTree = (props: any) => {
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
    const CoverBar = styled.div`
      width: 10px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      -webkit-transition: all 0.5s;
      opacity: 1;
      background: #f9f9f9;
    `;
    const Img = styled.img`
      position: absolute;
      width: 50px;
      left: 10px;
      top: 15;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #257cff;
      background: url(smiling-asian-man-sitting-desk-front-laptop-office-looking-camera-face.jpg);
    `;
    const Ul = styled.ul`
      height: 632px;
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
              src="https://upload.dogzer.es/img_global/4-7-perro-chihuahua/_light-233175-chloe.jpg"
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
    <Wrapper style={{ height: "832px" }}>
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
        placeholder={"사원 검색"}
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
export default HcTree;
