import React, { useState } from "react";
import "./addstaff.css"; 

const AddStaff = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    total: "",
    granted_leaves: "",
    remaining_leaves: "",
    department_id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="faculty-form-container">
      <h2 className="form-heading">Add New Staff Member</h2>
      <form className="faculty-grid-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input name="role" value={formData.role} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Total Leaves</label>
          <input type="number" name="total" value={formData.total} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Granted Leaves</label>
          <input type="number" name="granted_leaves" value={formData.granted_leaves} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Remaining Leaves</label>
          <input type="number" name="remaining_leaves" value={formData.remaining_leaves} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Department ID</label>
          <input name="department_id" value={formData.department_id} onChange={handleChange} required />
        </div>

        <div className="form-buttons">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddStaff;

