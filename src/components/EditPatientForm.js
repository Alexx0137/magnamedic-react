import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const EditPatientForm = ({ patients, updatePatient }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [patient, setPatient] = useState({
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

    useEffect(() => {
        const patientId = parseInt(id);
        const foundPatient = patients.find(patient => patient.id === patientId);
        if (foundPatient) {
            setPatient(foundPatient);
        }
    }, [id, patients]);

    const handleChange = e => {
        const { name, value } = e.target;
        setPatient(prevPatient => ({
            ...prevPatient,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        updatePatient(patient.id, patient);
    };

    const onCancel = () => {
        navigate('/patients');
    };


    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h1 className="h3 mb-0 text-gray-800">Editar paciente</h1>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Nombres:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder=""
                                    value={patient.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Apellidos:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    placeholder=""
                                    value={patient.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="identificationTypeId">Tipo de documento:</label>
                                <select className="form-control" id="identificationTypeId" name="identificationTypeId"
                                        value={patient.identificationTypeId} onChange={handleChange} required>
                                    <option value="">Seleccione una opción</option>
                                    <option value="1">Registro civil</option>
                                    <option value="2">Tarjeta de identidad</option>
                                    <option value="3">Cédula de ciudadanía</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="identification">Número de documento:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="identification"
                                    name="identification"
                                    placeholder=""
                                    value={patient.identification}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="genderId">Género:</label>
                                <select className="form-control"
                                        id="genderId"
                                        name="genderId"
                                        value={patient.genderId}
                                        onChange={handleChange} required>
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value="1">Femenino</option>
                                    <option value="2">Masculino</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="bloodTypeId">Tipo de sangre:</label>
                                <select className="form-control"
                                        id="bloodTypeId"
                                        name="bloodTypeId"
                                        value={patient.bloodTypeId}
                                        onChange={handleChange} required>
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value="1">A+</option>
                                    <option value="2">A-</option>
                                    <option value="3">B+</option>
                                    <option value="4">B-</option>
                                    <option value="5">AB+</option>
                                    <option value="6">AB-</option>
                                    <option value="7">O+</option>
                                    <option value="8">O-</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="city">Ciudad:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    placeholder=""
                                    value={patient.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="address">Dirección:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    placeholder=""
                                    value={patient.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="telephone">Teléfono:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telephone"
                                    name="telephone"
                                    placeholder=""
                                    value={patient.telephone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Correo:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    value={patient.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="dateOfBirth">Fecha de nacimiento:</label>
                                <input type="date"
                                       className="form-control"
                                       id="dateOfBirth"
                                       name="dateOfBirth"
                                       value={patient.dateOfBirth}
                                       onChange={handleChange}
                                       required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">

                                <button type="button" onClick={onCancel} className="btn btn-secondary btn-sm mt-2 mx-1">
                                    <FontAwesomeIcon icon={solidIcons.faArrowLeft}/> Cancelar
                                </button>

                                <button type="submit" onClick={handleSubmit}
                                        className="btn btn-primary btn-sm mt-2 mx-1">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPatientForm;
