import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { stackedCustomSeries } from "../../data/dummy";

const Stacked = ({ width = "100%", height = 300 }) => {
  const data = stackedCustomSeries[0]?.dataSource || [];

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          {/* AXIS */}
          <XAxis
            dataKey="x"
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
            }}
          />

          {/* LEGEND */}
          <Legend />

          {/* STACKED BARS */}
          {stackedCustomSeries.map((item, index) => (
            <Bar
              key={index}
              dataKey={item.yName}
              stackId="a"
              fill={item.fill}
              radius={[10, 10, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stacked;