import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class RadarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Exp",
          data: this.props.data,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "radar",
          fontFamily: "Inter, sans-serif",
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["#3B82F6"],
          dashArray: 0,
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: "#BFDBFE",
              fill: {
                colors: ["#EFF6FF", "#fff"],
              },
            },
          },
        },
        dataLabels: {
          style: {
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            colors: ["#2563EB"],
          },
        },

        xaxis: {
          categories: this.props.categories,
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
