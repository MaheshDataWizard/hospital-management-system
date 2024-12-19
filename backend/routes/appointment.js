import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// Get All Appointments
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Error fetching appointments", error: error.message });
    }
});

// Add New Appointment
router.post("/add", async (req, res) => {
    const { patientName, doctorName, date } = req.body;

    if (!patientName || !doctorName || !date) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newAppointment = await Appointment.create({ patientName, doctorName, date });
        res.status(201).json({ message: "Appointment created successfully", appointment: newAppointment });
    } catch (error) {
        console.error("Error creating appointment:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Update Appointment Data
router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { patientName, doctorName, date } = req.body;

    if (!patientName || !doctorName || !date) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            id,
            { patientName, doctorName, date },
            { new: true, runValidators: true } // Return updated document and validate
        );

        if (!updatedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.status(200).json({ message: "Appointment updated successfully", appointment: updatedAppointment });
    } catch (error) {
        console.error("Error updating appointment:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Delete Appointment
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findByIdAndDelete(id);

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error("Error deleting appointment:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

export default router;
