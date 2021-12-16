import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrrowIcon } from "../fonts/images/TreeArrow.svg";

const Wrapper = styled.div`
  max-width: 312px;
  min-height: 566px;
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 10px 10px;
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
`;

const ArrowWrapper = styled.div<{ open: boolean }>`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.open ? "#CEE2FF" : "#ededed")};
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  text-align: center;

  svg {
    transition: 1.5s ease all;
    vertical-align: unset;
    path {
      transition: 1.5s ease all;
      fill: ${(props) => (props.open ? "#0E6DFC;" : "#808080")};
    }
    transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
    transition: 1.5s ease all;
  }
`;

const ItemLabel = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #838383;
  :focus {
    color: #000000;
    font-weight: bold;
  }
`;

const HcTree = (props: any) => {
  const [items, setItems] = useState(props.items);

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
          <ItemLabel onClick={() => toggleOpen(item)}>{item.title}</ItemLabel>
        );

  /*
        Optional prepend slot
     */
  const prependSlot =
    props.prependSlot instanceof Function
      ? (item: any) => props.prependSlot(item)
      : () => props.prependSlot;

  return (
    <Wrapper>
      <TitleWrapper>
        <span>TITLE</span>
      </TitleWrapper>
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
    console.log("toggleOpen:", item);
    //setItems(toggle(items, item));
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

  function Item({ items, style }: any) {
    // console.log('update', new Date().getTime())
    return items.map((item: any) => (
      <div key={item.id} style={{ ...style }}>
        <div
          style={{
            height: "37px",
            lineHeight: "37px",
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
};

export default HcTree;
