import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "./constants";
import DropZone from "./DropZone";
import Column from "./Column";
import LineTo from "react-lineto";
import { SteppedLineTo } from "react-lineto";

const style = {};
const Row = ({ data, components, handleDrop, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ROW,
      id: data.id,
      children: data.children,
      path,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderColumn = (column, currentPath) => {
    return (
      <Column
        key={column.id}
        data={column}
        components={components}
        handleDrop={handleDrop}
        path={currentPath}
      />
    );
  };

  //line-to
  /*
  React.useEffect(() => {
    startAnimation();
    return function cleanup() {
      stopAnimation();
    };
  });

  function startAnimation() {
    const step = () => {
      
      this.setState(
        Object.assign({}, this.state, {
          ticks: this.state.ticks + 1,
        })
      );
      
      this.frame = requestAnimationFrame(step);
    };
    step();
  }

  function stopAnimation() {
    cancelAnimationFrame(this.frame);
  }

  function togglePause() {
    const paused = !this.state.paused;
    if (paused) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
    this.setState(Object.assign({}, this.state, { paused }));
  }

  function renderPauseButton() {
    const text = this.state.paused ? "Play" : "Pause";
    return <button onClick={this.togglePause}>{text}</button>;
  }
  */
  //line-to

  return (
    <div
      /*ref={ref}*/ style={{ ...style, opacity }}
      className="base draggable row"
    >
      <div className="columns">
        <SteppedLineTo
          delay={0}
          from="component0"
          to="component3"
          orientation="h"
          fromAnchor="left"
          toAnchor="right"
        />
        <SteppedLineTo
          delay={0}
          from="component0"
          to="component5"
          orientation="h"
          fromAnchor="left"
          toAnchor="right"
        />
        {data.children.map((column, index) => {
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={column.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length,
                }}
                //onDrop={handleDrop}
                onDrop={() => {}}
                className="horizontalDrag"
              />
              {renderColumn(column, currentPath)}
            </React.Fragment>
          );
        })}
        <DropZone
          data={{
            path: `${path}-${data.children.length}`,
            childrenCount: data.children.length,
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
          isLast
        />
      </div>
    </div>
  );
};
export default Row;
