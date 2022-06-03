import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";

const style = {
  border: "1.5px solid #CECECE",
  padding: "14px 16px",
  backgroundColor: "#F9F9F9",
  cursor: "move",
  width: "328px",
  height: "138px",
  zIndex: "2",
};
const Component = ({ data, components, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path, title: data.title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(ref);

  //const component = components[data.id];

  return (
    <div ref={ref} style={{ ...style, opacity }} className={data.id}>
      <div>{data.title}</div>
      <div>{data.id}</div>
    </div>
  );
};
export default Component;
