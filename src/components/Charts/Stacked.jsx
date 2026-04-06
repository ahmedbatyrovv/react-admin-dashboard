import React from "react";
import { BarChart } from "@mui/x-charts";
import { stackedCustomSeries } from "../../data/dummy";

const Stacked = ({ height = 350 }) => {
  const data = stackedCustomSeries[0]?.dataSource || [];

  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: data.map((item) => item.x),
        },
      ]}
      series={stackedCustomSeries.map((item) => ({
        data: data.map((d) => d[item.yName]),
        stack: "total",
        label: item.name,
        color: item.fill,
      }))}
      height={height}
      sx={{
        "& .MuiBarElement-root": {
          rx: 8,
          ry: 8,
        },
      }}
    />
  );
};

export default Stacked;