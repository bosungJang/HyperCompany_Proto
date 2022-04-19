import React, { useState, Component } from "react";
//import { Tree, NodeModel } from "@minoru/react-dnd-treeview";
import "./HcDndTreeview.scss";
//import { DndProvider } from "react-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
/*
function App() {
  const [treeData, setTreeData] = useState<NodeModel[]>(SampleData);
  const handleDrop = (newTree: NodeModel[]) => setTreeData(newTree);

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

export default App;
*/

/*Only Change Order */
const getItems = (count: any) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: "10px",
  margin: `0 0 6px 0`,
  borderBottom: "1px solid #D9D9D9",
  borderRadius: "4px",
  fontSize: "14px",
  fontFamily: "Noto Sans KR",
  background: "#FFFFFF",
  // change background colour if dragging
  opacity: isDragging ? "0.9" : "1",
  filter: isDragging ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" : "",
  color: isDragging ? "#000000" : "#5D5D62",
  fontWeight: isDragging ? 700 : 500,

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: any) => ({
  background: "#FFFFFF",
  padding: "10px",
  width: 312,
  borderRadius: "5px",
  border: "1px solid #CECECE",
  minHeight: "832px",
});

export const HcOrderTreeview = () => {
  const [items, setItems] = React.useState(getItems(10));

  function onDragEnd(result: any) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const TempItems: any = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(TempItems);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
