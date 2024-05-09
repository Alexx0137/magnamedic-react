import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PatientList from './components/PatientList';
import AddPatientForm from './components/AddPatientForm';
import EditPatientForm from './components/EditPatientForm';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainCard from './components/MainCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [patients, setPatients] = useState([
        // Aquí puedes tener la lista de pacientes con sus datos
    ]);

    const updatePatient = (id, updatedPatient) => {
        // Lógica para actualizar los datos del paciente
    };

    return (
        <Router>
            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <Navbar/>
                    <div id="content">
                        <Routes>
                            <Route exact path="/" element={<MainCard/>}/>
                            <Route path="/patients" element={<PatientList patients={patients}/>}/>
                            <Route path="/add-patient" element={<AddPatientForm/>}/>
                            <Route path="/edit-patient/:id"
                                   element={<EditPatientForm patients={patients} updatePatient={updatePatient}/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;