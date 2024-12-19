import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { mongoDBURL, port } from "./config.js";
import appointmentsRouter from "./routes/appointment.js";
import patientsRouter from "./routes/patients.js"
import doctorsRouter from "./routes/doctor.js"

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

// Routes
app.use("/patients", patientsRouter);
app.use("/doctors",doctorsRouter);
app.use("/appointments", appointmentsRouter);

// Server Listening
const PORT = port || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
