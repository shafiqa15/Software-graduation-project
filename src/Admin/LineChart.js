import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Sales',
      data: [150, 200, 175, 225, 200, 250, 300],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
      
      
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function LineChart() {
  return <Line data={data} options={options} style={{width:'1200px'}} />;
}

export default LineChart;
