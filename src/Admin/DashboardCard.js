import React from 'react';
import '/Users/shafiqaabdat/Downloads/client-main/src/Admin/Dashboard.css'; // Make sure to style your card
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

function DashboardCard({ title, value, percentage, icon, isMoney }) {
  return (
    <div className="dashboard-card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-value">{isMoney && '$'}{value}</div>
        <div className="card-percentage">{percentage > 0 ? `+${percentage}%` : `${percentage}%`}</div>
      </div>
    </div>
  );
}

export default DashboardCard;
