import { Bar } from "react-chartjs-2";
import { saveAs } from "file-saver";
import { useRef } from "react";

export const BarChart = ({ chartData }) => {
  const chartRef = useRef(null);
  const saveCanvas = () => {
    const canvasSave = chartRef.current.canvas;
    canvasSave.toBlob(function (blob) {
      saveAs(blob, "home_price_chart.png");
    });
  };
  return (
    <div className="p-5">
      <a
        onClick={saveCanvas}
        className="cursor-pointer border rounded-lg border-gray-300 ml-4 p-1"
      >
        Download Chart
      </a>
      <div className="flex justify-center items-center h-full">
        <Bar
          className="h-[400px] rounded-lg p-4"
          id="barChart"
          data={chartData}
          ref={chartRef}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Interest rates for your situation",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Number of landers offering rates",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
