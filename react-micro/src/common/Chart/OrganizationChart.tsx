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

function useOutsideClick(ref: any) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.children[0].className = "card_wrapper";
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

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
  return (
    <div className="App">
      <button
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
        }}
        onClick={handleClick}
      >
        Add person
      </button>
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
  const [, drop] = useDrop<DragObjectWithType & { node: Node }, {}, {}>({
    accept: ItemTypes.NODE,
    drop: (item, monitor) => {
      props.onDrop(props.node, item.node);
      return undefined;
    },
  });

  const outsideRef = React.useRef(null);
  useOutsideClick(outsideRef);

  const Label = (
    <div ref={drop} style={{ opacity: opacity }}>
      <div ref={outsideRef} style={{ display: "inline-block" }}>
        <div
          className="card_wrapper"
          ref={drag}
          onClick={(e) => {
            console.log("target", e.currentTarget);
            e.currentTarget.className = "card_wrapper_click";
          }}
        >
          <div className="card_body">
            <div className="card_title">{"티맥스 소프트"}</div>
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

export default function organizationChart() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </>
  );
}
