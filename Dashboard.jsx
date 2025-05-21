import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUsers,
  faBuilding,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const counters = [
    {
      label: "Faculty",
      count: 25,
      icon: faChalkboardTeacher,
      color: "#f0573c",
    },

    {
      label: "Staff",
      count: 40,
      icon: faUsers,
      color: "#1cc88a",
    },

    {
      label: "Departments",
      count: 5,
      icon: faBuilding,
      color: "#36b9cc",
    },

    {
      label: "Staff on Leave",
      count: 3,
      icon: faUserClock,
      color: "#f6c23e",
    },
    
  ];

  const actionCards = [
    { label: "Add Faculty" },
    { label: "Add Staff" },
    { label: "Add Department" },
    { label: "Request a Leave" },
  ];

  return (
    <div className="dashboard-container">
      {/* Counter Section */}
      <div className="counter-card-grid">
        {counters.map((item, idx) => (
          <div
            key={idx}
            className="counter-card"
            style={{
              borderTop: `5px solid ${item.color}`,
              borderBottom: `5px solid ${item.color}`,
            }}
          >
            <div className="counter-icon" style={{ color: item.color }}>
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </div>
            <h3>{item.label}</h3>
            <p className="counter-number">{item.count}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="action-card-grid">
        {actionCards.map((card, idx) => (
          <div key={idx} className="action-card">
            <button
              onClick={() => {
                if (card.label === "Add Faculty") {
                  navigate("/dashboard/addfaculty"); 
                }
             
                if (card.label === "Add Staff") {
                  navigate("/dashboard/addstaff"); 
                }

                if (card.label === "Add Department") {
                  navigate("/dashboard/adddepartment"); 
                }
              }}
            >
              {card.label}
            </button>
          </div>

          
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
