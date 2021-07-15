import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class ReversedBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: this.props.data,
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          fontFamily: "Inter, sans-serif",
        },
        fill: {
          colors: ["#2563EB"],
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 2,
            barHeight: "90%",
          },
        },
        dataLabels: {
          enabled: true,
        },
        xaxis: {
          categories: this.props.categories,
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        yaxis: {
          reversed: false,
          axisTicks: {
            show: true,
          },
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
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default ReversedBarChart;
