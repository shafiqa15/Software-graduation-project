import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/shafiqaabdat/Downloads/client-main/src/Admin/Admin.css';

function Admin() {
  return (
    <div className="admin-container">
      <h1>Administrative Business</h1>
      <div className="admin-grid">
        <Link to="/financial-management" className="admin-button red">Financial Management</Link>
        <Link to="/view-orders" className="admin-button orange">View All Orders</Link>
        <Link to="/edit-delete-product" className="admin-button green">Edit or Delete Product</Link>
        <Link to="/add-new-product" className="admin-button blue">Add New Product</Link>
        <Link to="/view-users" className="admin-button pink">View All Users</Link>
        <Link to="/send-notification" className="admin-button light-red">Send Notification</Link>
        <Link to="/add-admin" className="admin-button purple">Add Admin</Link>
        <Link to="/add-admin" className="admin-button light-blue">Add or delete Offer</Link>
      </div>
    </div>
  );
}

export default Admin;
