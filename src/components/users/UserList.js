import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const UserList = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Juan",
            last_name: "Pérez",
            identificationTypeId: 1,
            identification: 808085,
            email: "juanperez@mail.com",
            password: "Juan2024",
            role: "auxiliar",
            created_at: "2015-07-10 09:45:15"
        },
        {
            id: 2,
            name: "María",
            last_name: "López",
            identificationTypeId: 2,
            identification: 30589,
            email: "marialopez@mail.com",
            password: "Maria123456",
            role: "medico",
            created_at: "2016-03-20 11:30:45"
        },
    ]);

    const handleDelete = (id, name, last_name) => {
        Swal.fire({
            title: `¿Estás seguro de que deseas eliminar el usuario ${name} ${last_name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setUsers(users.filter(user => user.id !== id));
            }
        });
    };

    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <div className="d-sm-flex align-items-center justify-content-between mb-2">
                        <h1 className="h3 mb-0 text-gray-800">Usuarios</h1>
                        <a href="/add-user" className="btn btn-primary btn-sm btn-icon-split">
                            <FontAwesomeIcon icon={solidIcons.faPlus} className="me-1"/>
                            Crear usuario
                        </a>
                    </div>
                </div>

                <div className="card-body">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Buscar..."/>
                        <button className="search-button">Buscar</button>
                    </div>
                    <div className="table-responsive">
                        <table className="styled-table" id="usersTable">
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Contraseña</th>
                                <th>Rol</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name} {user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                    <td>{user.created_at}</td>
                                    <td>
                                        <Link to={`/edit-user/${user.id}`}
                                              state={user} className="btn btn-warning btn-sm me-1" title="Editar">
                                            <FontAwesomeIcon icon={solidIcons.faEdit}/>
                                        </Link>
                                        <button className="btn btn-danger btn-sm" title="Eliminar"
                                                onClick={() => handleDelete(user.id, user.name, user.last_name)}>
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

export default UserList;
