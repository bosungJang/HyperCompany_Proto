import React, { PureComponent } from "react";
import { PieChart, Pie, Legend } from "recharts";
import "./DonutChart.css";

const renderColorfulLegendText = (value: string, entry: any) => {
  return (
    <span
      style={{
        color: "#2E2E2E",
        fontWeight: 400,
        padding: "10px",
        fontSize: "14px",
        fontFamily: "Noto Sans KR",
      }}
    >
      {value}
    </span>
  );
};

export default function DonutChart({ data }: any) {
  return (
    <PieChart width={277} height={173}>
      <Legend
        height={0}
        iconType="square"
        layout="vertical"
        verticalAlign="middle"
        iconSize={10}
        formatter={renderColorfulLegendText}
      />
      <Pie
        data={data}
        cx={70}
        cy={70}
        innerRadius={40}
        outerRadius={70}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      ></Pie>
    </PieChart>
  );
}
