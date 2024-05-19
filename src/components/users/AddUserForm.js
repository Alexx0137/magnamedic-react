import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const AddUserForm = () => {
    const [user, setUser] = useState({
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
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Aquí puedes enviar los datos del paciente al servidor
        console.log(user);
        // Luego puedes redirigir al usuario o realizar otras acciones necesarias
    };

    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h1 className="h3 mb-0 text-gray-800">Crear usuario</h1>
                </div>

                <div className="card-body">
                    <form className="form">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">Nombres:</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Apellidos:</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="identification">Tipo de documento:</label>
                                <select className="form-control" id="identification" required>
                                    <option value="" disabled selected>Seleccione una opción</option>
                                    <option value="1">Registro civil</option>
                                    <option value="2">Tarjeta de identidad</option>
                                    <option value="3">Cédula de ciudadanía</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="NumberId">Número de documento:</label>
                                <input type="text" className="form-control" id="NumberId" placeholder="" required/>
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Correo:</label>
                                <input type="text" className="form-control" id="email" placeholder="" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Contraseña:</label>
                                <input type="text" className="form-control" id="password" placeholder="" required/>
                            </div>
                        </div>
                        <div className="form-row mt-2">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="role">Rol del usuario:</label>
                                <select className="form-control" id="role" required>
                                    <option value="" disabled selected>Seleccione una opción</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Auxiliar</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">
                                <a href="/users" className="btn btn-secondary btn-sm mt-2 mx-1">
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

export default AddUserForm;
