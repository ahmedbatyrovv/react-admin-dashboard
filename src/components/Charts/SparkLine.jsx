import React from "react";
import { LineChart } from "@mui/x-charts";

const SparkLine = ({ data }) => {
  return (
    <LineChart
      xAxis={[
        {
          scaleType: "point",
          data: data.map((item) => item.x),
        },
      ]}
      series={[
        {
          data: data.map((item) => item.y),
          area: true,
          showMark: false,
        },
      ]}
      height={90}
      sx={{
        "& .MuiLineElement-root": {
          stroke: "#2563eb",
          strokeWidth: 2,
        },
        "& .MuiAreaElement-root": {
          fill: "rgba(37,99,235,0.2)",
        },
      }}
    />
  );
};

export default SparkLine;