import React from "react"; 
import { Routes, Route, Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import Dashboard from "../pages/Dashboard";
import FacultyManagement from "../pages/FacultyManagement";
import LeavesManagement from "../pages/LeavesManagement";
import StaffManagement from "../pages/StaffManagement";
import Reports from "../pages/Reports";
import Departments from "../pages/Departments";
import "./admin_dashboard.css"; 
import AddFaculty from "../pages/addfaculty";
import AddStaff from "../pages/addstaff";
import AddDepartment from "../pages/adddepartment";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          <Topbar />
          <main className="main-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="faculty" element={<FacultyManagement />} />
              <Route path="leaves" element={<LeavesManagement />} />
              <Route path="staff" element={<StaffManagement />} />
              <Route path="reports" element={<Reports />} />
              <Route path="departments" element={<Departments />} />
              <Route path="addfaculty" element={<AddFaculty />} />
              <Route path="addstaff" element={<AddStaff />} />
              <Route path="adddepartment" element={<AddDepartment />} />
            </Routes>
          </main>
        </div>
      </div>
     <Outlet />
    </div>
  );
}
