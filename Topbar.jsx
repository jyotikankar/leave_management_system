import React from "react";
import { Bell, MessageSquare } from "lucide-react";
import "./Topbar.css"; // Custom CSS
import { useNavigate } from "react-router-dom";

export const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
};


  const handleProfile = () => {
    navigate("/profile"); // Optional: make sure /profile route exists
  };

  return (
    <div className="topbar">
      <h1 className="topbar-title">Leave Management System</h1>
      <div className="topbar-icons">
        <MessageSquare className="topbar-icon" />
        <Bell className="topbar-icon" />
        
        {/* Dropdown container */}
        <div className="topbar-dropdown">
          <img
            src="image/1.jpg"
            alt="User"
            className="topbar-avatar"
          />
          <div className="dropdown-menu">
            <p onClick={handleProfile}>Profile</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
