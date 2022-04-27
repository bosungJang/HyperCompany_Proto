import React, { Component } from "react";
import SortableTree from "@nosferatu500/react-sortable-tree";
import FileExplorerTheme from "@nosferatu500/theme-file-explorer";
import "./HcDndTreeviewSortable.scss";
import CustomNodeContentRenderer from "./CustomNodeContentRenderer";

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          title: "item1",
          children: [
            { title: "item1-1", children: [{ title: "item1-1-1" }] },
            { title: "item1-2" },
            { title: "item1-3" },
          ],
        },
        { title: "item2", children: [{ title: "item2-1" }] },
      ],
    };
  }

  render() {
    return (
      <div
        style={{
          border: "1px solid #CECECE",
          width: "312px",
          minHeight: "832px",
          borderRadius: "5px",
          display: "inline-block",
        }}
      >
        <SortableTree
          treeData={this.state.treeData}
          onChange={(treeData) => this.setState({ treeData })}
          theme={FileExplorerTheme}
          generateNodeProps={(extendedNode) => ({
            title: (
              <div
                style={{
                  fontFamily: "Noto Sans KR",
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#5D5D62",
                }}
              >
                {extendedNode.node.title}
              </div>
            ),
            /*
            buttons:
              extendedNode.node.title === "item1" ? [<button>X</button>] : [],
              */
          })}
          style={{ margin: "10px" }}
          //nodeContentRenderer={CustomNodeContentRenderer}
        />
      </div>
    );
  }
}
