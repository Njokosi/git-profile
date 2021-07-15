import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class PolarAreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      options: {
        chart: {
          type: "polarArea",
          fontFamily: "Inter, sans-serif",
        },
        stroke: {
          colors: ["#fff"],
        },
        fill: {
          opacity: 0.9,
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 1,
              strokeColor: "#E5E7EB",
            },
            spokes: {
              strokeWidth: 1,
              connectorColors: "#E5E7EB",
            },
          },
        },
        grid: {
          padding: {
            top: 20,
          },
        },
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
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="polarArea"
        />
      </div>
    );
  }
}

export default PolarAreaChart;
