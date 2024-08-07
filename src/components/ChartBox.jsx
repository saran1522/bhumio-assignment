import { Box } from "@mui/material";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import React from "react";
import { BarChart } from "./BarChart";
import { useHouseData } from "../Context/HouseDataContext";

Chart.register(CategoryScale);

function ChartBox() {
  const { currColor, chartData } = useHouseData();
  return (
    <Box
      height={500}
      width="65%"
      mx={1}
      my={4}
      className="flex flex-col justify-center p-4"
    >
      <h2 className="text-xl">
        In Alabama, most lenders in our data are offering rates at or below
        7.000%.
      </h2>
      <div className="h-full flex flex-col justify-center items-center rounded-lg ">
        <BarChart chartData={chartData} />
      </div>
    </Box>
  );
}

export default ChartBox;
