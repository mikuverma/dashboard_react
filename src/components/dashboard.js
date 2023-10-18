// Dashboard.js
import React from 'react';
import Header from './parts/header.js';
import Sidebar from './parts/sidebar.js';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      {/* <Header /> */}
      <div className="dashboard-content">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
