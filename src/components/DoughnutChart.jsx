"use client";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({dashboard}) => {
  // Initial dynamic data with months
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Data",
        data: dashboard?.data, // Example data for each month
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // January
          "rgba(54, 162, 235, 0.6)", // February
          "rgba(255, 206, 86, 0.6)", // March
          "rgba(75, 192, 192, 0.6)", // April
          "rgba(153, 102, 255, 0.6)", // May
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="mx-auto">
      <Doughnut data={chartData} />
    </div>
  );
};

export default DoughnutChart;
