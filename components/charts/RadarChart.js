import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class RadarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "radar",
          fontFamily: "Inter, sans-serif",
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: "#BFDBFE",
              fill: {
                colors: ["#DBEAFE", "#fff"],
              },
            },
          },
        },

        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June"],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radar"
          height={350}
        />
      </div>
    );
  }
}

export default RadarChart;
