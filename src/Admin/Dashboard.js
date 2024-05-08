import React from 'react';
import LineChart from '../Admin/LineChart';
import DashboardCard from '../Admin/DashboardCard';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <DashboardCard title="Today's Money" value="53,000" percentage="55" isMoney={true} />
        <DashboardCard title="Today's Users" value="2,300" percentage="3" />
        {/* Add more cards as needed */}
      </div>
      <div className="charts">
        <LineChart />
        {/* Add more charts as needed */}
      </div>
    </div>
  );
}

export default Dashboard;
