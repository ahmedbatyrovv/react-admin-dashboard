import React from "react";
import { ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";

const SparkLine = ({ height, width, data, color, currentColor }) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={currentColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={currentColor} stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip />

        <Area
          type="monotone"
          dataKey="y"
          stroke={currentColor}
          fill="url(#spark)"
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SparkLine;
