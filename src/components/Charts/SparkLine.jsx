import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const SparkLine = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 90 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="y"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#sparkGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;
