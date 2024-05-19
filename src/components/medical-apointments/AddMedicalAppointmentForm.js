import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const AddMedicalAppointmentForm = () => {
    const [medicalAppointment, setMedicalAppointment] = useState({
        name: '',
        lastName: '',
        identificationTypeId: '',
        identification: '',
        genderId: '',
        bloodTypeId: '',
        city: '',
        address: '',
        telephone: '',
        email: '',
        dateOfBirth: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setMedicalAppointment(prevMedicalAppointment => ({
            ...prevMedicalAppointment,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Aquí puedes enviar los datos del paciente al servidor
        console.log(medicalAppointment);
        // Luego puedes redirigir al usuario o realizar otras acciones necesarias
    };

    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h1 className="h3 mb-0 text-gray-800">Crear Cita Médica</h1>
                </div>
                <div className="card-body">
                    <form className="form">
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name">Nombre del Paciente:</label>
                                <input type="text" className="form-control" id="name" placeholder="" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="numberId">Número de documento:</label>
                                <input type="text" className="form-control" id="numberId" placeholder="" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="speciality">Especialidad:</label>
                                <select className="form-control" id="speciality" required>
                                    <option value="" disabled selected>Seleccione una opción</option>
                                    <option value="1">Medicina general</option>
                                    <option value="2">Odontología</option>
                                    <option value="3">Pediatría</option>
                                    <option value="4">Cardiología</option>
                                    <option value="5">Dermatología</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="doctor">Médico:</label>
                                <select className="form-control" id="doctor" required>
                                    <option value="" disabled selected>Seleccione una opción</option>
                                    <option value="1">María Rodríguez</option>
                                    <option value="3">Ana Gutiérrez</option>
                                    <option value="4">Pedro Sánchez</option>
                                    <option value="5">José García</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="appointmentDate">Fecha de la Cita:</label>
                                <input type="date" className="form-control" id="appointmentDate" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="appointmentTime">Hora de la Cita:</label>
                                <input type="time" className="form-control" id="appointmentTime" required min="06:00"
                                       max="18:00"/>
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="col-md-12 mb-3 observations">
                                <label htmlFor="observations">Observaciones:</label>
                                <textarea className="form-control" id="observations"></textarea>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">
                                <a href="/medical-appointments" className="btn btn-secondary btn-sm mt-2 mx-1">
                                    <FontAwesomeIcon icon={solidIcons.faArrowLeft}></FontAwesomeIcon>
                                    Cancelar
                                </a>
                                <a onClick="" href="#"
                                   className="btn btn-primary btn-sm mt-2 mx-1">
                                    Guardar
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
        ;
};

export default AddMedicalAppointmentForm;
