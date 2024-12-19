import express from "express";
import Doctor from '../models/Doctor.js'
const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        if (!doctors || doctors.length === 0) {
            return res.status(200).json();
        }
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message });
    }
});

// Add new Doctor
router.post('/add', async (req, res) => {
    const { name, speciality } = req.body;

    if (!name || !speciality) {
        return res.status(400).json({ error: "Name and speciality are required" });
    }

    try {
        const doctor = await Doctor.create({ name, speciality });
        res.status(201).json(doctor);
    } catch (error) {
        res.status(400).json({ error: "Error creating doctor: " + error.message });
    }
});

// Update doctor data
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, speciality } = req.body;

    if (!name || !speciality) {
        return res.status(400).json({ error: "Name and speciality are required" });
    }

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { name, speciality }, { new: true });

        if (!updatedDoctor) {
            return res.status(404).json({ error: "Doctor not found" });
        }

        res.status(200).json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ error: "Error updating doctor: " + error.message });
    }
});

// Delete doctor by id
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const doctor = await Doctor.findByIdAndDelete(id);

        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found" });
        }

        res.status(200).json({ message: "Doctor deleted successfully", doctor });
    } catch (error) {
        res.status(400).json({ error: "Error deleting doctor: " + error.message });
    }
});

export default router;
