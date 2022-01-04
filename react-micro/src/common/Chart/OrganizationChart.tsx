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

function App() {
  const [tree, setTree] = useState<TreeRoot>({
    id: uuid(),
    user: {
      firstName: "Init",
      lastName: "",
      email: "",
      id: "",
    },
    children: [],
  });
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

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
    if (userIndex === users.length - 1) {
      return;
    }
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
        },
        children: [],
      },
    ];
    setUserIndex(userIndex + 1);
    setTree(newTree);
  };
  const RootLabel = (
    <div ref={drop}>
      <div>
        <h4 style={{ margin: "0" }}>'장 보성'</h4>
      </div>
    </div>
  );

  useEffect(() => {
    if (loading) return;
    setTree({
      user: {
        id: uuid(),
        firstName: "장",
        lastName: "보성",
        email: "bosung_jang@tmax.co.kr",
      },
      id: uuid(),
      children: [
        {
          user: {
            id: uuid(),
            firstName: "장",
            lastName: "보성",
            email: "bosung_jang@tmax.co.kr",
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
          },
          id: uuid(),
          children: [],
        },
      ],
    });
  }, [users, loading]);
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
        lineColor="#E2E8F0"
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
  const [, drag] = useDrag({
    item: { type: ItemTypes.NODE, node: props.node },
  });
  const [, drop] = useDrop<DragObjectWithType & { node: Node }, {}, {}>({
    accept: ItemTypes.NODE,
    drop: (item, monitor) => {
      props.onDrop(props.node, item.node);
      return undefined;
    },
  });
  const Label = (
    <div ref={drop}>
      <div
        ref={drag}
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          border: "1px solid #EDF2F7",
          borderRadius: "5px",
          display: "inline-block",
          color: "black",
        }}
      >
        <h5
          style={{
            margin: 0,
            background: "#EDF2F7",
            padding: "0.5rem",
            borderBottom: "1px solid #eee",
          }}
        >
          {props.node.user.firstName} {props.node.user.lastName}
        </h5>
        <div
          style={{
            background: "#F7FAFC",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src="https://t.pimg.jp/064/564/785/5/64564785.jpg"
            style={{ flex: 1, width: 80 }}
            alt="face"
          />
          <p style={{ padding: "0.5rem" }}>{props.node.user.email}</p>
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
