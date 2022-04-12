import React, { useState } from "react";
import { Tree } from "@minoru/react-dnd-treeview";
import "./HcDndTreeview.scss";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const SampleData = [
  {
    id: 1,
    parent: 0,
    droppable: true,
    text: "Folder 1",
  },
  {
    id: 2,
    parent: 1,
    droppable: false,
    text: "File 1-1",
  },
  {
    id: 3,
    parent: 1,
    droppable: false,
    text: "File 1-2",
  },
  {
    id: 4,
    parent: 0,
    droppable: true,
    text: "Folder 2",
  },
  {
    id: 5,
    parent: 4,
    droppable: true,
    text: "Folder 2-1",
  },
  {
    id: 6,
    parent: 5,
    droppable: false,
    text: "File 2-1-1",
  },
  {
    id: 7,
    parent: 0,
    droppable: false,
    text: "File 3",
  },
];

function App() {
  const [treeData, setTreeData] = useState(SampleData);
  const handleDrop = (newTree: any) => setTreeData(newTree);

  return (
    <div className="app">
      <Tree
        tree={treeData}
        rootId={0}
        render={(node, { depth, isOpen, onToggle }) => (
          <div style={{ marginInlineStart: depth * 10 }}>
            {node.droppable && (
              <span onClick={onToggle}>{isOpen ? "[-]" : "[+]"}</span>
            )}
            {node.text}
          </div>
        )}
        dragPreviewRender={(monitorProps) => (
          <div>{monitorProps.item.text}</div>
        )}
        onDrop={handleDrop}
      />
    </div>
  );
}

const HcDndTreeview = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </>
  );
};

export default HcDndTreeview;
