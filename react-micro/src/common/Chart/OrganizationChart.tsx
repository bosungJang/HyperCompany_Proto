import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Tree, TreeNode } from "react-organizational-chart";
import { DndProvider, useDrag, useDrop, DragObjectWithType } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { v4 as uuid } from "uuid";
import { TreeRoot, Node } from "./types";
import { cloneDeep } from "lodash";
import { findParent } from "./helpers";
//import { useRandomUser } from "./useRandomUser";
import { User } from "./types";
import { ReactComponent as DropDownIcon } from "resources/images/dropDown_icon.svg";
import { ReactComponent as AddIcon } from "resources/images/add_icon.svg";
import styled, { keyframes, Keyframes } from "styled-components";
import usePanZoom from "use-pan-and-zoom";

function useOutsideClick(ref: any, setClicked: (value: boolean) => void) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //ref.current.children[0].className = "card_wrapper";
        setClicked(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const StockContainer = styled.div<{ ratio: number }>`
  position: relative;
  top: 0;
  left: 0;
  width: ${(props) => 200 / props.ratio}%;
  height: ${(props) => 200 / props.ratio}%;
  transform: scale(${(props) => props.ratio});
  transform-origin: left top;
`;

function App() {
  const [tree, setTree] = useState<TreeRoot>({
    id: uuid(),
    user: {
      firstName: "지혜",
      lastName: "이",
      email: "",
      id: "",
      jobTitle: "본부장",
      jobPosition: "부장",
      numPeople: "130",
    },
    children: [
      {
        id: uuid(),
        user: {
          id: uuid(),
          firstName: "default",
          lastName: "장보성",
          email: "bosung_jang@tmax.co.kr",
          jobTitle: "본부장",
          jobPosition: "부장",
          numPeople: "130",
        },
        children: [],
      },
    ],
  });
  //const [users, setUsers] = useState<User[]>([]);
  //const [loading, setLoading] = useState(true);

  const [userIndex, setUserIndex] = useState(3);
  const [, drop] = useDrop<DragObjectWithType & { node: Node }, {}, {}>({
    accept: ItemTypes.NODE,
    drop: (item, monitor) => {
      handleRootDrop(item.node);
      return undefined;
    },
  });
  const handleDrop = (node: Node, dropped: Node) => {
    const parent = findParent(dropped.id, tree);
    if (parent) {
      parent.children = parent.children.filter((c) => c.id !== dropped.id);
    }
    node.children = [...node.children, dropped];
    const newTree = cloneDeep(tree);
    setTree(newTree);
  };
  const handleRootDrop = (dropped: Node) => {
    const parent = findParent(dropped.id, tree);
    if (parent) {
      parent.children = parent.children.filter((c) => c.id !== dropped.id);
    }
    tree.children = [...tree.children, dropped];
    const newTree = cloneDeep(tree);
    setTree(newTree);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //if (userIndex === users.length - 1) {
    //  return;
    //}
    const newTree = cloneDeep(tree);
    newTree.children = [
      ...tree.children,
      {
        id: uuid(),
        user: {
          id: uuid(),
          firstName: "장",
          lastName: "보성",
          email: "bosung_jang@tmax.co.kr",
          jobTitle: "본부장",
          jobPosition: "부장",
          numPeople: "130",
        },
        children: [],
      },
    ];
    setUserIndex(userIndex + 1);
    setTree(newTree);
  };
  const RootLabel = (
    <div ref={drop}>
      <div className="card_wrapper">
        <div className="card_body">
          <div className="card_title">{"티맥스 소프트"}</div>
          <div className="content_area">
            <div
              className="img_area"
              style={{
                background:
                  "url(https://mblogthumb-phinf.pstatic.net/20140715_224/gggnine_140539249283179mpC_JPEG/%C3%D6%C1%F6%C8%C6_ssssss_c.jpg?type=w2) center/50px 50px no-repeat ",
              }}
            ></div>
            <div className="content">
              <div className="name">
                {tree.user.lastName} {tree.user.firstName}
              </div>
              <div className="position">
                {"(" + tree.user.jobTitle + " / " + tree.user.jobPosition + ")"}
              </div>
              <div className="number_tag">
                <span>{"+ " + tree.user.numPeople}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card_footer">
          <div className="text_area">{"하위조직 접기"}</div>
        </div>
      </div>
    </div>
  );

  /*  useEffect(() => {
    if (loading) return;
    setTree({
      user: {
        id: uuid(),
        firstName: "장",
        lastName: "보성",
        email: "bosung_jang@tmax.co.kr",
        jobTitle: "본부장",
        jobPosition: "부장",
        numPeople: "130",
      },
      id: uuid(),
      children: [
        {
          user: {
            id: uuid(),
            firstName: "장",
            lastName: "보성",
            email: "bosung_jang@tmax.co.kr",
            jobTitle: "본부장",
            jobPosition: "부장",
            numPeople: "130",
          },
          id: uuid(),
          children: [],
        },
        {
          user: {
            id: uuid(),
            firstName: "장",
            lastName: "보성",
            email: "bosung_jang@tmax.co.kr",
            jobTitle: "본부장",
            jobPosition: "부장",
            numPeople: "130",
          },
          id: uuid(),
          children: [],
        },
      ],
    });
  }, [users, loading]);*/

  /*Drag Scroll */
  const scrollRef = React.useRef<any>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<any>();

  const onDragStart = (e: any) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: any) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const throttle = (func: any, ms: any) => {
    let throttled = false;
    return (...args: any) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  /*Drag Scroll */

  /*Zoom */
  const [ratio, setRatio] = useState(1);
  let posX = 0;
  let posY = 0;

  let originalX = 0;
  let originalY = 0;

  const wheelHandler = (e: any) => {
    setRatio((ratio) => (ratio >= 0.2 ? ratio + 0.001 * e.deltaY : 0.2));
  };

  const moveScreenStart = (e: any) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    posX = e.clientX;
    posY = e.clientY;
  };

  const moveScreen = (e: any) => {
    const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;

    e.target.style.left = limitX
      ? `${e.target.offsetLeft + (e.clientX - posX)}px`
      : "0px";
    e.target.style.top = limitY
      ? `${e.target.offsetTop + (e.clientY - posY)}px`
      : "0px";

    posX = limitX ? e.clientX : 0;
    posY = limitY ? e.clientY : 0;
  };

  const moveScreenEnd = (e: any) => {
    const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;

    e.target.style.left = limitX
      ? `${e.target.offsetLeft + (e.clientX - posX)}px`
      : "0px";
    e.target.style.top = limitY
      ? `${e.target.offsetTop + (e.clientY - posY)}px`
      : "0px";

    //setScreen({ top: e.target.style.top, left: e.target.style.left });
  };

  const dragHandler = (e: any) => {
    e.stopPropagation();

    e.target.style.left = `${
      e.target.offsetLeft + (e.clientX - posX) / ratio
    }px`;
    e.target.style.top = `${e.target.offsetTop + (e.clientY - posY) / ratio}px`;

    posX = e.clientX;
    posY = e.clientY;
  };

  const stockContainer = React.useRef();

  const { transform, panZoomHandlers, setContainer, setPan, setZoom } =
    usePanZoom({ zoomSensitivity: 0.001 });
  /*Zoom */

  return (
    <div
      className="App"
      /*
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : () => {}}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
      */
      ref={(el) => setContainer(el)}
      {...panZoomHandlers}
    >
      <button
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
        }}
        onClick={handleClick}
      >
        Add person
      </button>
      {/* 
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "inline-block",
        }}
      >
        <li
          onClick={() => {
            setRatio((ratio) => ratio - 0.25);
          }}
        >
          −
        </li>
        <li
          onClick={() => {
            setRatio(1);
          }}
        >
          1.0
        </li>
        <li
          onClick={() => {
            setRatio((ratio) => ratio + 0.25);
          }}
        >
          +
        </li>
      </div>
      */}
      {/* 
      <StockContainer
        //ref={stockContainer}
        ratio={ratio}
        onWheel={wheelHandler}
        onDragStart={moveScreenStart}
        onDrag={moveScreen}
        onDragEnd={moveScreenEnd}
        draggable
      >
      */}
      <div style={{ transform }}>
        <Tree
          lineHeight="50px"
          lineWidth="1px"
          lineColor="#D6D6D6"
          nodePadding="10px"
          lineBorderRadius="5px"
          label={RootLabel}
        >
          {tree.children &&
            tree.children.map((c) => (
              <LeafNode onDrop={handleDrop} key={c.id} node={c} />
            ))}
        </Tree>
      </div>
      {/*</StockContainer>*/}
    </div>
  );
}

export const ItemTypes = {
  NODE: "node",
};

interface ILeafNodeProps {
  onDrop: (node: Node, dropped: Node) => void;
  node: Node;
}
const LeafNode: React.FC<ILeafNodeProps> = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.NODE, node: props.node },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  const border = isDragging ? "1px solid blue" : "1px solid #a7a7a7";
  const [, drop] = useDrop<DragObjectWithType & { node: Node }, {}, {}>({
    accept: ItemTypes.NODE,
    drop: (item, monitor) => {
      console.log("drop", props.node, item.node);
      if (props.node !== item.node) {
        props.onDrop(props.node, item.node);
        return undefined;
      }
    },
  });

  const [clicked, setClicked] = React.useState(false);
  const outsideRef = React.useRef(null);
  useOutsideClick(outsideRef, setClicked);

  const Label = (
    <div ref={drop} style={{ opacity: opacity }}>
      <div ref={outsideRef} style={{ display: "inline-block" }}>
        <div
          className={clicked ? "card_wrapper_click" : "card_wrapper"}
          ref={drag}
          onClick={(e) => {
            console.log("target", e.currentTarget);
            //e.currentTarget.className = "card_wrapper_click";
            setClicked(true);
          }}
          style={{ border: border }}
        >
          <div className="card_body">
            <div className="card_title">
              {"티맥스 소프트"}
              <DropDownIcon
                style={{
                  verticalAlign: "text-bottom",
                  float: "right",
                  cursor: "pointer",
                  display: clicked ? "" : "none",
                }}
              />
            </div>
            <div className="content_area">
              <div className="img_area"></div>
              <div className="content">
                <div className="name">
                  {props.node.user.firstName} {props.node.user.lastName}
                </div>
                <div className="position">
                  {"(" +
                    props.node.user.jobTitle +
                    " / " +
                    props.node.user.jobPosition +
                    ")"}
                </div>
                <div className="number_tag">
                  <span>{"+ " + props.node.user.numPeople}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card_footer">
            <div className="text_area">{"하위조직 접기"}</div>
          </div>
          <AddIcon
            style={{
              position: "relative",
              bottom: 7,
              cursor: "pointer",
              display: clicked ? "" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <TreeNode label={Label}>
        {props.node.children &&
          props.node.children.map((c) => (
            <LeafNode onDrop={props.onDrop} key={c.id} node={c} />
          ))}
      </TreeNode>
    </>
  );
};

const OrganizationChart = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </>
  );
};

export default OrganizationChart;
