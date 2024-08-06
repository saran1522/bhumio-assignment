import { rateData } from "./sampleData";

const interestRates = Object.keys(rateData.data);
const lenders = Object.values(rateData.data);

export const chartData = {
  labels: interestRates,
  xlabel: "Colors",
  datasets: [
    {
      data: lenders,
      label: "hlerlweo",
      backgroundColor: "#94d2bd",
      hoverBackgroundColor: "#07beb8",
    },
  ],
};
