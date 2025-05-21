import React, { useState } from "react";
import "./admin_portal.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AdminPortal = () => {
   const [ username, setUsername ] = useState("");
   const [ password, setPassword ] = useState("");
   const [ error, setError ] = useState("");
   const navigate = useNavigate();

   const handleLogin = (e) =>{
    e.preventDefault();

    const adminUser = {
      username: "admin",
      password: "password123",
    };

    if (username === adminUser.username && password === adminUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }

    
   };

  return (
    <div className="admin-login-bg">
      <div className="admin-login-card">
        <h2>Admin Login</h2>
        <form className="admin-login-form" onSubmit={handleLogin} >
          
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Username" name="username" value= {username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">Login</button>
          
        </form>
      </div>
    </div>
  );
};

export default AdminPortal;
