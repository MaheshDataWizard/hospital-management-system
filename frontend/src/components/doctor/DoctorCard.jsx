import React from "react";


const DoctorCard = ({ doctor, onEdit, onDelete }) => {
  return (
    <div className="doctor-card">
      <p className="doctor-info">
        <strong>Name:</strong> {doctor.name} <br />
        <strong>Specialty:</strong> {doctor.specialty}
      </p>
      <div className="btn-container">
        <button className="edit-btn" onClick={() => onEdit(doctor)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(doctor._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
