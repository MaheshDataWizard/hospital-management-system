# Hospital Management System Using MERN

This project is a **Hospital Management System** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It provides functionality to manage appointments, patients, and doctors efficiently.

---

## Table of Contents

1. [Backend](#backend)

   - [Models](#models)
   - [Routes](#routes)

2. [Frontend](#frontend)

   - [Components](#components)

3. [How to Run](#how-to-run)

4. [Technologies Used](#technologies-used)

5. [License](#license)

---

## Backend

The backend of the application is built using **Node.js** and **Express.js**.

### Models

1. **Appointment.js**: Contains the schema and model for appointments.
2. **Patient.js**: Contains the schema and model for patients.
3. **Doctor.js**: Contains the schema and model for doctors.

These models are located in the `backend/models` folder.

### Routes

The routes are created to handle the API endpoints for each model.

1. **appointmentRoutes.js**: Handles CRUD operations for appointments.
2. **patientRoutes.js**: Handles CRUD operations for patients.
3. **doctorRoutes.js**: Handles CRUD operations for doctors.

These routes are located in the `backend/routes` folder.

---

## Frontend

The frontend is developed using **React.js**.

### Components

Each major entity (Appointment, Patient, Doctor) has its own set of components organized in separate folders under `src/components`:

#### Appointment

- **Appointment.jsx**: Main component for managing appointments.
- **Appointment.css**: Stylesheet for the appointment component.
- **AppointmentCard.jsx**: A card component for displaying appointment details.

#### Patient

- **Patient.jsx**: Main component for managing patients.
- **Patient.css**: Stylesheet for the patient component.
- **PatientCard.jsx**: A card component for displaying patient details.

#### Doctor

- **Doctor.jsx**: Main component for managing doctors.
- **Doctor.css**: Stylesheet for the doctor component.
- **DoctorCard.jsx**: A card component for displaying doctor details.

---

## How to Run

### Prerequisites

- Node.js installed
- MongoDB installed and running locally
- Git installed

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MaheshDataWizard/hospital-management-system.git
   cd hospital-management-system
   ```

2. **Setup Backend:**

   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file with the following:
     ```env
     MONGODBURL=mongodb://localhost:27017/hospital-mng-sys
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Setup Frontend:**

   - Navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm run dev
     ```

4. Open the application in your browser at `http://localhost:3000`.

---

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React.js, CSS

---
