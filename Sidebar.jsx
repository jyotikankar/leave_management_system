import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, FileText, Bell, LayoutDashboard } from "lucide-react";
import "./Sidebar.css"; // Import the custom CSS

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Welcome, Admin</h2>

      <nav className="nav-links">
        <Link to="/dashboard" className="nav-item">
          <LayoutDashboard size={20} /> <span>Dashboard</span>
        </Link>

        <Link to="/dashboard/faculty" className="nav-item">
          <Users size={20} /> <span>Faculty Management</span>
        </Link>

        <Link to="/dashboard/leaves" className="nav-item">
          <FileText size={20} /> <span>Leaves Management</span>
        </Link>

        <Link to="/dashboard/departments" className="nav-item">
          <Home size={20} /> <span>Departments</span>
        </Link>

        <Link to="/dashboard/staff" className="nav-item">
          <Users size={20} /> <span>Staff Management</span>
        </Link>

        <Link to="/dashboard/reports" className="nav-item">
          <Bell size={20} /> <span>Reports</span>
        </Link>
      </nav>
    </div>
  );
};
