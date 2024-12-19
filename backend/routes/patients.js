import express from 'express'
const router = express.Router();
import Patient from '../models/Patient.js'

//Get all patient
router.get('/', async (req, res) => {
    try {
        const patient = await Patient.find();
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json("Error: " + error)
    }
})

//Add Patient
router.post('/add', async (req, res) => {
    const { name, age, gender } = req.body;
    try {
        const patient = await Patient.create({ name, age, gender });
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json("Error: " + error);
    }
})

//Update Patient
router.put('/update/:id', async (req, res)=>{
    try {
        const { id } = req.params;
        const { name, age, gender } = req.body;

        const Patient = await Patient.findByIdAndUpdate(id, {name, age, gender});
        res.status(201).json(Patient);
    } catch (error) {
        res.status(400).json("Error: "+error);
    }
})

//Delete Patient
router.delete('/delete/:id', async (req, res)=>{
    try {
        const { id } = req.params;
        const patient = await Patient.findByIdAndDelete(id);
        res.status(200).json(patient);
    } catch (error) {
        res.status(400).json("Error: "+error)
    }
})

export default router