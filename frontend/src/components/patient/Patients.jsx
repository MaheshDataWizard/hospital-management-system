import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Patients.css";
import PatientCard from "./PatientCard";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({ name: "", age: "", gender: "" });
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      axios
        .post(
          `http://localhost:5000/patients/update/${selectedPatient._id}`,
          formData
        )
        .then(() => {
          setPatients(
            patients.map((patient) =>
              patient._id === selectedPatient._id
                ? { ...formData, _id: patient._id }
                : patient
            )
          );
          resetForm();
        })
        .catch((error) => console.error("Error updating patient:", error));
    } else {
      axios
        .post("http://localhost:5000/patients/add", formData)
        .then((response) => {
          setPatients([...patients, response.data]);
          resetForm();
        })
        .catch((error) => console.error("Error adding patient:", error));
    }
  };

  const handleDeletePatient = (id) => {
    axios
      .delete(`http://localhost:5000/patients/delete/${id}`)
      .then(() => setPatients(patients.filter((patient) => patient._id !== id)))
      .catch((error) => console.error("Error deleting patient:", error));
  };

  const handleEditPatient = (patient) => {
    setSelectedPatient(patient);
    setFormData(patient);
    setIsEditMode(true);
  };

  const resetForm = () => {
    setFormData({ name: "", age: "", gender: "" });
    setSelectedPatient(null);
    setIsEditMode(false);
  };

  return (
    <div className="patient-main">
      <div className="form-sections">
        <h4>{isEditMode ? "Edit Patient" : "Add New Patient"}</h4>
        <form onSubmit={handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <label>Age:</label>
          <input
            type="text"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
          <label>Gender:</label>
          <input
            type="text"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            required
          />
          <button type="submit">
            {isEditMode ? "Update Patient" : "Add Patient"}
          </button>
        </form>
      </div>
      <div className="patients-section">
        <h3>Patients ({patients.length})</h3>
        <div className="patient-list">
          {patients.map((patient) => (
            <PatientCard
              key={patient._id}
              patient={patient}
              onEdit={handleEditPatient}
              onDelete={handleDeletePatient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
