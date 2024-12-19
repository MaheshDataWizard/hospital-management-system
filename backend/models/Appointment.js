import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
    {
        patientName: {
            type: String,
            required: true,
        },
        doctorName: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
    }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
