import React from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
  display: grid;
  grid-row: 3px 1fr;
`;

const ActiveLine = styled.div<{ width: number; offset: number }>`
  height: 3px;
  width: ${(p) => `${p.width}px`};
  transform: translateX(${(p) => `${p.offset}px`});
  background: #257cff;
  transition: all 350ms cubic-bezier(0.15, 0.3, 0.25, 1);
`;

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
`;
const TabItem = styled.li<{ size: string }>`
  display: inline-block;

  cursor: pointer;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  color: #5f5f5f;
  text-align: center;

  margin-right: 30px;
  &: last-child {
    margin-right: 0px;
  }

  ${(props) => props.size}

  &.is-active {
    color: #000000;
  }
`;

interface IProps {
  items: any;
  size: "normal" | "small";
}

const handleSizeType = (size: string) => {
  switch (size) {
    case "small":
      return "min-width: 60px; height: 19px; font-size: 13px;";
    default:
      return "min-width: 100px; height: 24px; font-size: 16px;";
  }
};

const HcTabs: React.FC<IProps> = (props) => {
  const activeRef = React.createRef<any>();
  const none = React.createRef();
  const [selected, setSelected] = React.useState("1");
  const [offset, setOffset] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const activeElement = activeRef.current;
    setOffset(activeElement.offsetLeft);
    setWidth(activeElement.clientWidth);
  }, [selected, activeRef]);

  return (
    <TabsWrapper>
      <TabList>
        {props.items.map((item: any) => {
          return (
            <TabItem
              key={item.to}
              ref={selected === item.to ? activeRef : none}
              className={selected === item.to ? "is-active" : ""}
              onClick={() => setSelected(item.to)}
              size={handleSizeType(props.size)}
            >
              {item.name}
            </TabItem>
          );
        })}
      </TabList>
      <ActiveLine width={width} offset={offset} />
    </TabsWrapper>
  );
};

export default HcTabs;
