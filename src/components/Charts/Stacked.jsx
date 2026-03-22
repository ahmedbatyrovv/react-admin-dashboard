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
  // 🔥 Convert Syncfusion → Recharts data
  const data = stackedCustomSeries[0]?.dataSource || [];

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>

          {/* X AXIS */}
          <XAxis dataKey="x" tick={{ fontSize: 12 }} />

          {/* Y AXIS */}
          <YAxis tick={{ fontSize: 12 }} />

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          {/* LEGEND */}
          <Legend />

          {/* 🔥 STACKED BARS */}
          {stackedCustomSeries.map((item, index) => (
            <Bar
              key={index}
              dataKey={item.yName}
              stackId="a"
              fill={item.fill || item.color}
              radius={[6, 6, 0, 0]}
            />
          ))}

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stacked;