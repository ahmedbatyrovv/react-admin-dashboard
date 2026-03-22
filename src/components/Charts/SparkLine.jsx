import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  Tooltip
} from "recharts";

const SparkLine = ({ height, width, color, data, type, currentColor }) => {
  // Syncfusion data → Recharts format
  const formattedData = data.map(item => ({
    x: item.x,
    y: item.y
  }));

  return (
    <ResponsiveContainer width={width || "100%"} height={height}>
      {type === "Line"
        ? <LineChart data={formattedData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "8px",
                color: "#fff"
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke={currentColor || color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        : <AreaChart data={formattedData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "8px",
                color: "#fff"
              }}
              labelStyle={{ color: "#9ca3af" }}
            />
            <Area
              type="monotone"
              dataKey="y"
              stroke={currentColor || color}
              fill={color}
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>}
    </ResponsiveContainer>
  );
};

export default SparkLine;
