import React from 'react';
import { Link } from 'react-router-dom';
import '../Admin/Sidebar.css'
// import { DashboardIcon } from '@mui/icons-material/Dashboard';
function Admin() {
  return (
    <div className="sidebar">
      <div className="logo">
        Your Dashboard
      </div>
      <div className="menu">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/tables">Tables</Link>
        <Link to="/billing"> Paid   Orders </Link>
        <Link to="/virtual-reality">Virtual Reality</Link>
        <Link to="/rtl">Customer Messages</Link>
      </div>
      <div className="account">
        <Link to="/profile">Profile</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>
      <div className="docs">
        <button onClick={() => window.open("https://www.documentation-link.com", "_blank")}>Documentation</button>
      </div>
    </div>
  );
}

export default Admin;
