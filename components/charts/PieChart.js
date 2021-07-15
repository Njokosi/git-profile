import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
    const [series] = useState([44, 55, 13, 43, 22]);
    const [options] = useState({
      chart: {
        type: "pie",
        offsetY: -20,
        fontFamily: "Inter, sans-serif",
        sparkline: {
          enabled: true,
        },
      },

      grid: {
        padding: {
          top: 20,
        },
      },

      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    });
    return (
      <Chart options={options} series={series} type="pie" width={300} />
    );
}

export default PieChart
