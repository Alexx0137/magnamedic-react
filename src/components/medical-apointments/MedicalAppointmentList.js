import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const MedicalAppointmentList = () => {
    const [medicalAppointments, setMedicalAppointments] = useState([
        {
            id: 1,
            date: "2024-05-20",
            time: "08:00:00",
            state: "Atendido",
            patients_id: "Jorge Ramirez",
            identification: 11122233,
            doctors_id: "Luis Tovar",
            medical_speciality: "Optometría",
            consulting_room_id: "103",
            observations: "Ninguna"
        },
        {
            id: 2,
            date: "2024-05-20",
            time: "08:00:00",
            state: "Atendido",
            patients_id: "Karen Linares",
            identification: 11122233,
            doctors_id: "Edgar Sarmiento",
            medical_speciality: "Medicina Géneral",
            consulting_room_id: "104",
            observations: "Ninguna"
        },
        {
            id: 3,
            date: "2024-05-20",
            time: "08:15:00",
            state: "Pendiente",
            patients_id: "Esteban Rendón",
            identification: 11122233,
            doctors_id: "Elisa Diaz",
            medical_speciality: "Odontología",
            consulting_room_id: "110",
            observations: "Ninguna"
        },
        {
            id: 4,
            date: "2024-05-20",
            time: "08:30:00",
            state: "Pendiente",
            patients_id: "Erly Vargas",
            identification: 11122233,
            doctors_id: "Sandra Guzmán",
            medical_speciality: "Medicina General",
            consulting_room_id: "106",
            observations: "Ninguna"
        },
        {
            id: 5,
            date: "2024-05-20",
            time: "08:30:00",
            state: "Pendiente",
            patients_id: "Ignacio Briceño",
            identification: 11122233,
            doctors_id: "Paula Mateus",
            medical_speciality: "Laboratorio",
            consulting_room_id: "120",
            observations: "Ninguna"
        },
        {
            id: 6,
            date: "2024-05-20",
            time: "08:30:00",
            state: "Pendiente",
            patients_id: "Patricia Gonzales",
            identification: 11122233,
            doctors_id: "Elisa Diaz",
            medical_speciality: "Odontología",
            consulting_room_id: "110",
            observations: "Ninguna"
        },
        {
            id: 7,
            date: "2024-05-20",
            time: "08:45:00",
            state: "Pendiente",
            patients_id: "Alvaro Torres",
            identification: 11122233,
            doctors_id: "Edgar Sarmiento",
            medical_speciality: "Medicina Géneral",
            consulting_room_id: "104",
            observations: "Ninguna"
        }
    ]);

    const handleDelete = (id, patients_id) => {
        Swal.fire({
            title: `¿Estás seguro de que deseas eliminar la cita de ${patients_id}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar cita',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setMedicalAppointments(medicalAppointments.filter(appointment => appointment.id !== id));
            }
        });
    };

    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <div className="d-sm-flex align-items-center justify-content-between mb-2">
                        <h1 className="h3 mb-0 text-gray-800">Citas Médicas</h1>
                        <a href="/add-medical-appointment" className="btn btn-primary btn-sm btn-icon-split">
                            <FontAwesomeIcon icon={solidIcons.faPlus} className="me-1"/>
                            Agendar Cita Médica
                        </a>
                    </div>
                </div>

                <div className="card-body">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Buscar..."/>
                        <button className="search-button">Buscar</button>
                    </div>
                    <div className="table-responsive">
                        <table className="styled-table" id="medicalAppointmentsTable">
                            <thead>
                            <tr>
                                <th>Fecha/hora</th>
                                <th>Paciente</th>
                                <th>Especialidad</th>
                                <th>Doctor</th>
                                <th>Consultorio</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {medicalAppointments.map(medicalAppointment => (
                                <tr key={medicalAppointment.id}>
                                    <td>{medicalAppointment.date} {medicalAppointment.time}</td>
                                    <td>{medicalAppointment.patients_id}</td>
                                    <td>{medicalAppointment.medical_speciality}</td>
                                    <td>{medicalAppointment.doctors_id}</td>
                                    <td>{medicalAppointment.consulting_room_id}</td>
                                    <td>{medicalAppointment.state}</td>
                                    <td>
                                        <Link to={`/edit-medical-appointment/${medicalAppointment.id}`}
                                              state={medicalAppointment} className="btn btn-warning btn-sm me-1"
                                              title="Editar">
                                            <FontAwesomeIcon icon={solidIcons.faEdit}/>
                                        </Link>
                                        <button className="btn btn-danger btn-sm" title="Eliminar"
                                                onClick={() => handleDelete(medicalAppointment.id, medicalAppointment.patients_id)}>
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

export default MedicalAppointmentList;
