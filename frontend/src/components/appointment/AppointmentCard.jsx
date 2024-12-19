import React from "react";
import './Appointment.css'

const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
  const { patientName, doctorName, date, _id } = appointment;

  return (
    <div className="appointment-card">
      <p>
        <span>Patient:</span> {patientName}
      </p>
      <p>
        <span>Doctor:</span> {doctorName}
      </p>
      <p>
        <span>Date:</span> {new Date(date).toLocaleDateString()}
      </p>
      <div className="btn-container">
        <button onClick={() => onEdit(appointment)}>Edit</button>
        <button onClick={() => onDelete(_id)}>Delete</button>
      </div>
    </div>
  );
};

export default AppointmentCard;
