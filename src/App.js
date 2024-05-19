import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientList from './components/patients/PatientList';
import AddPatientForm from './components/patients/AddPatientForm';
import EditPatientForm from './components/patients/EditPatientForm';
import DoctorList from './components/doctors/DoctorList';
import AddDoctorForm from './components/doctors/AddDoctorForm';
import EditDoctorForm from './components/doctors/EditDoctorForm';
import Sidebar from './components/layouts/Sidebar';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import MainCard from './components/layouts/MainCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MedicalAppointmentList from './components/medical-apointments/MedicalAppointmentList';
import AddMedicalAppointmentForm from './components/medical-apointments/AddMedicalAppointmentForm';
import EditMedicalAppointmentForm from './components/medical-apointments/EditMedicalAppointmentForm';

import Login from './components/auth/Login';
import MedicalSpecialityList from "./components/medical-specialities/medicalSpecialityList";
import AddMedicalSpecialityForm from "./components/medical-specialities/AddmedicalSpecialityForm";
import EditMedicalSpecialityForm from "./components/medical-specialities/EditmedicalSpecialityForm";
import Reports from "./components/reports/Reports";
import AddUserForm from "./components/users/AddUserForm";
import EditUserForm from "./components/users/EditUserForm";
import UserList from "./components/users/UserList";

const DashboardLayout = ({ children }) => (
    <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
            <Navbar />
            <div id="content">
                {children}
            </div>
            <Footer />
        </div>
    </div>
);

const App = () => {
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [medicalSpecialities, setMedicalSpecialities] = useState([]);
    const [medicalAppointments, setMedicalAppointments] = useState([]);
    const [users, setUsers] = useState([]);

    const updatePatient = (id, updatedPatient) => {
        setPatients(patients.map(patient => (patient.id === id ? updatedPatient : patient)));
    };

    const updateDoctor = (id, updatedDoctor) => {
        setDoctors(doctors.map(doctor => (doctor.id === id ? updatedDoctor : doctor)));
    };

    const updateMedicalAppointment = (id, updatedMedicalAppointment) => {
        setMedicalAppointments(
            medicalAppointments.map(
                appointment => (appointment.id === id ? updatedMedicalAppointment : appointment)
            )
        );
    };

    const updateMedicalSpeciality = (id, updatedMedicalSpeciality) => {
        setMedicalSpecialities(
            medicalSpecialities.map(
                speciality => (speciality.id === id ? updatedMedicalSpeciality : speciality)
            )
        );
    };

    const updateUser = (id, updatedUser) => {
        setUsers(
            users.map(
                user => (user.id === id ? updatedUser : user)
            )
        );
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<DashboardLayout><MainCard /></DashboardLayout>} />

                <Route path="/patients" element={<DashboardLayout><PatientList patients={patients} /></DashboardLayout>} />
                <Route path="/add-patient" element={<DashboardLayout><AddPatientForm /></DashboardLayout>} />
                <Route path="/edit-patient/:id" element={<DashboardLayout><EditPatientForm patients={patients} updatePatient={updatePatient} /></DashboardLayout>} />

                <Route path="/doctors" element={<DashboardLayout><DoctorList doctors={doctors} /></DashboardLayout>} />
                <Route path="/add-doctor" element={<DashboardLayout><AddDoctorForm /></DashboardLayout>} />
                <Route path="/edit-doctor/:id" element={<DashboardLayout><EditDoctorForm doctors={doctors} updateDoctor={updateDoctor} /></DashboardLayout>} />

                <Route path="/medical-appointments" element={<DashboardLayout><MedicalAppointmentList medicalAppointments={medicalAppointments} /></DashboardLayout>} />
                <Route path="/add-medical-appointment" element={<DashboardLayout><AddMedicalAppointmentForm /></DashboardLayout>} />
                <Route path="/edit-medical-appointment/:id" element={<DashboardLayout><EditMedicalAppointmentForm medicalAppointments={medicalAppointments} updateMedicalAppointment={updateMedicalAppointment} /></DashboardLayout>} />

                <Route path="/medical-specialities" element={<DashboardLayout><MedicalSpecialityList medicalSpecialities={medicalSpecialities} /></DashboardLayout>} />
                <Route path="/add-medical-speciality" element={<DashboardLayout><AddMedicalSpecialityForm /></DashboardLayout>} />
                <Route path="/edit-medical-speciality/:id" element={<DashboardLayout><EditMedicalSpecialityForm medicalSpecialities={medicalSpecialities} updateMedicalSpeciality={updateMedicalSpeciality} /></DashboardLayout>} />

                <Route path="/users" element={<DashboardLayout><UserList users={users} /></DashboardLayout>} />
                <Route path="/add-user" element={<DashboardLayout><AddUserForm /></DashboardLayout>} />
                <Route path="/edit-user/:id" element={<DashboardLayout><EditUserForm users={users} updateUser={updateUser} /></DashboardLayout>} />

                <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
            </Routes>
        </Router>
    );
};

export default App;
