import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const LineChart = ({ data, title }) => {
  const chartData = {
    labels: Object.keys(data).map(date => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1; // Month is 0-based, so add 1
    return `${day}/${month}`;
  }),
    datasets: [
      {
        label: title,
        data:  Object.values(data), // An array of corresponding values
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area below the line
      },
    ],
  };

  const options = {
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;