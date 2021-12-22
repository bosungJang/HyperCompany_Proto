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
  margin-top -2.5px;
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
  border-bottom: 1px solid #cecece;

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
      return "min-width: 60px; height: 28px; font-size: 13px; padding: 0 20px; padding-bottom: 8px;";
    default:
      return "min-width: 80px; height: 30px; font-size: 16px; padding: 0 20px; padding-bottom: 10px;";
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
