/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { chartData } from "./chartData";
export const timestamps = chartData.map(data => {
  const timestampParts = data["timestamp"].split(" ")[1].split(":");
  return `${timestampParts[0]}:${timestampParts[1]}`;
});

export const lineChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: true,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: 
      timestamps,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "14px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    title: {
      text: "Time",
      offsetY: -12,
      style: {
        color: "#c8cfca",
        fontSize: '15px',
        fontFamily: 'Plus Jakarta Display',
        fontWeight: 600, 
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "14px",
      },
    },
    title: {
      text: "Load (kW)",
      offsetX: -5,
      style: {
        color: "#c8cfca",
        fontSize: '15px',
        fontFamily: 'Plus Jakarta Display',
        fontWeight: 600, 
      },
    },
  },
  legend: {
    fontSize: '14px',
    fontFamily: 'Plus Jakarta Display',
    fontWeight: 500, 
    labels: {
      colors: '#c8cfca',
    },
    offsetX: 20,
    offsetY: 0,
    itemMargin: {
      vertical: 0,
    },
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#0075FF", "#2CD9FF"],
  },
  colors: ["#0075FF", "#2CD9FF"],
};
