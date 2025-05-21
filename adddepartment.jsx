import React, { useState } from "react";
import "./adddepartment.css"; 

const AddDepartment = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    hod: "",
    email: "",
    phone: "",
    staff_count: "",
    established: "",
    location: "",
    description: "",
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
      <h2 className="form-heading">Add New Department </h2>
      <form className="faculty-grid-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Department Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Department ID</label>
          <input name="department_id" value={formData.department_id} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Faculty</label>
          <input type="text" name="hod" value={formData.hod} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="phone" value={formData.address} onChange={handleChange} required />
        </div>

    
        <div className="form-buttons">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddDepartment;

