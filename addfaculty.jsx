import React, { useState } from "react";
import "./addfaculty.css"; 

const AddFaculty = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
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
      <h2 className="form-heading">Add New Faculty</h2>
      <form className="faculty-grid-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Designation</label>
          <input name="designation" value={formData.designation} onChange={handleChange} required />
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

export default AddFaculty;

