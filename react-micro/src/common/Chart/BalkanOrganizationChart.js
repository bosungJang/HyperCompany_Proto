import React, { Component } from "react";
import OrgChart from "@balkangraph/orgchart.js";
import "./BalkanOrg.css";

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.size = [200, 200];
OrgChart.templates.myTemplate.node =
  '<circle cx="100" cy="100" r="100" fill="#4D4D4D" stroke-width="1" stroke="#aeaeae"></circle>';

OrgChart.templates.myTemplate.ripple = {
  radius: 100,
  color: "#e6e6e6",
  rect: null,
};

OrgChart.templates.myTemplate.field_0 =
  '<text style="font-size: 24px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.field_1 =
  '<text style="font-size: 16px;" fill="#ffffff" x="100" y="60" text-anchor="middle">{val}</text>';

OrgChart.templates.myTemplate.img_0 =
  '<clipPath id="ulaImg"><circle cx="100" cy="150" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110"  width="80" height="80"></image>';

OrgChart.templates.myTemplate.edge =
  '<path  stroke="#686868" stroke-width="1px" fill="none" edge-id="[{id}][{child-id}]" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>';

OrgChart.templates.myTemplate.plus =
  '<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>' +
  '<line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line>' +
  '<line x1="18" y1="4" x2="18" y2="32" stroke-width="1" stroke="#aeaeae"></line>';

OrgChart.templates.myTemplate.minus =
  '<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>' +
  '<line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line>';

OrgChart.templates.myTemplate.expandCollapseSize = 36;

OrgChart.templates.myTemplate.pointer =
  '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">' +
  '<polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />' +
  '<polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />' +
  '<polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />' +
  '<polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />' +
  '<circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />' +
  "</g></g>";

OrgChart.templates.ana.size = [280, 210];

OrgChart.templates.ana.html = "{val}";

export default class Org extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.chart = new OrgChart(this.divRef.current, {
      //template: "myTemplate",
      template: "ana",
      levelSeparation: 40,
      siblingSeparation: 40,
      nodes: this.props.nodes,
      enableDragDrop: true,
      enableSearch: false,
      nodeMouseClick: OrgChart.action.none,
      nodeBinding: {
        //field_0: "name",
        //field_1: "title",
        //img_0: "img",
        html: "html",
      },
    });

    this.chart.on("field", function (semder, args) {
      if (args.name == "html") {
        args.value = `<foreignobject  x="0" y="0" width="${args.node.w}" height="${args.node.h}">
                        <div class="flip-container  horizontal" style="width: ${args.node.w}px; height: ${args.node.h}px; border: 1px solid #a7a7a7; border-radius: 4px; display: inline-block;">
                            <div class="card_body" style="width: 100%; height: 177px; border-radius: 4px; padding: 16px 16px 16px 20px;">
                                <div style="font-family: 'Noto Sans KR'; font-weight: 700; font-size: 18px; text-align: initial;">
                                    ${args.data.department}
                                </div>                                                       
                                <div style="width: 100%; margin-top: 20px;">
                                    <div style=" float: left; display: inline-block; height: 50px; width: 50px; border-radius: 50%; border: 1px solid #cecece;">
                                        <img src="${args.data.img}" style="border: 1px solid #CECECE; border-radius:50%; width:50px; height:50px;"/>
                                    </div>     
                                    <div style="margin-left: 14px; float: left;  display: inline-block; text-align: initial;">
                                        <div style="font-family: 'Noto Sans KR'; font-weight: 400; font-size: 16px; color: #2d2d31;">
                                            ${args.data.name}
                                        </div>                                                   
                                        <div style="font-family: 'Noto Sans KR'; font-weight: 400; font-size: 12px; color: #838181; margin-top: 2px;">
                                            (${args.data.title} / ${args.data.position})
                                        </div>    
                                        <div style="width: 84px; height: 26px; background: #fff0bb; border-radius: 2px; margin-top: 15px; text-align: center;">
                                            <span style="font-family: 'Noto Sans KR'; font-weight: 700; font-size: 13px; color: #ffa51f;">
                                                ${args.data.number}
                                            </span>
                                        </div>    
                                    </div>                                                    
                                </div>                
                            </div>
                            <div style="width:100%; height:calc(100% - 177px);; background: #f4f4f4; border-radius: 4px; text-align: center;">
                                <div style="display: inline-block; font-size: 10px; line-height: 30px; color: #5d5d62; font-family: 'Noto Sans KR'; font-weight: 400; cursor: pointer;">하위조직 접기</div>
                            </div>
                        </div>
                    </foreignobject>`;
      }
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
