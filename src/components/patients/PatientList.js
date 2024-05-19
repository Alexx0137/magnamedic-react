import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const PatientList = () => {
    const [patients, setPatients] = useState([
        {
            id: 1,
            identification: "123456789",
            identification_type_id: 1,
            name: "Juan",
            last_name: "Pérez",
            gender_id: 1,
            date_of_birth: "1984-07-13",
            address: "Calle 30 sur #12-24",
            city: "Bogotá",
            telephone: "3013235689",
            email: "juanperez@mail.com",
            blood_type_id: 3,
            created_at: "2015-07-10 09:45:15"
        },
        {
            id: 2,
            identification: "987654321",
            identification_type_id: 1,
            name: "María",
            last_name: "López",
            gender_id: 2,
            date_of_birth: "1990-01-24",
            address: "Carrera 25 #15-10",
            city: "Medellin",
            telephone: "3104567890",
            email: "marialopez@mail.com",
            blood_type_id: 1,
            created_at: "2016-03-20 11:30:45"
        },
    ]);

    const handleDelete = (id, name, last_name) => {
        Swal.fire({
            title: `¿Estás seguro de que deseas eliminar el paciente ${name} ${last_name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setPatients(patients.filter(patient => patient.id !== id));
            }
        });
    };

    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <div className="d-sm-flex align-items-center justify-content-between mb-2">
                        <h1 className="h3 mb-0 text-gray-800">Pacientes</h1>
                        <a href="/add-patient" className="btn btn-primary btn-sm btn-icon-split">
                            <FontAwesomeIcon icon={solidIcons.faPlus} className="me-1"/>
                            Crear paciente
                        </a>
                    </div>
                </div>

                <div className="card-body">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Buscar..."/>
                        <button className="search-button">Buscar</button>
                    </div>
                    <div className="table-responsive">
                        <table className="styled-table" id="patientsTable">
                            <thead>
                            <tr>
                                <th style={{width: "50px"}}>ID</th>
                                <th style={{width: "100px"}}>Documento</th>
                                <th style={{width: "200px"}}>Nombres</th>
                                <th style={{width: "150px"}}>Correo</th>
                                <th style={{width: "250px"}}>Dirección</th>
                                <th style={{width: "150px"}}>Teléfono</th>
                                <th style={{width: "150px"}}>Fecha Registro</th>
                                <th style={{width: "120px"}}>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {patients.map(patient => (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.identification}</td>
                                    <td>{patient.name} {patient.last_name}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.telephone}</td>
                                    <td>{patient.created_at}</td>
                                    <td>
                                        <Link to={`/edit-patient/${patient.id}`}
                                              state={patient} className="btn btn-warning btn-sm me-1"
                                              title="Editar">
                                            <FontAwesomeIcon icon={solidIcons.faEdit}/>
                                        </Link>
                                        <button className="btn btn-danger btn-sm" title="Eliminar"
                                                onClick={() => handleDelete(patient.id, patient.name, patient.last_name)}>
                                            <FontAwesomeIcon icon={solidIcons.faTrash}></FontAwesomeIcon>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientList;
