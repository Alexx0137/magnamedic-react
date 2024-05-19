import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import {useParams, useNavigate, useLocation} from 'react-router-dom';

const EditUserForm = ({users, updateUser}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        identificationTypeId: '',
        identification: '',
        email: '',
        password: '',
        role: '',
    });

    useEffect(() => {
        if (location.state) {
            const user = location.state;
            setUser({
                name: user.name,
                lastName: user.last_name,
                identificationTypeId: user.identification_type_id,
                identification: user.identification,
                email: user.email,
                password: user.password,
                role: user.role,
            });
        } else {
            const userId = parseInt(id);
            const foundUser = users.find(user => user.id === userId);
            if (foundUser) {
                setUser({
                    name: foundUser.name,
                    lastName: foundUser.last_name,
                    identificationTypeId: foundUser.identification_type_id,
                    identification: foundUser.identification,
                    email: foundUser.email,
                    password: foundUser.password,
                    role: foundUser.role,
                });
            }
        }
    }, [id, location.state, users]);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        updateUser(user.id, user);
    };

    const onCancel = () => {
        navigate('/users');
    };


    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h1 className="h3 mb-0 text-gray-800">Editar usuario</h1>
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
                                    value={user.name}
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
                                    value={user.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="identificationTypeId">Tipo de documento:</label>
                                <select className="form-control" id="identificationTypeId" name="identificationTypeId"
                                        value={user.identificationTypeId} onChange={handleChange} required>
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
                                    value={user.identification}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Correo:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder=""
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder=""
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="role">Rol del usuario:</label>
                                <select className="form-control"
                                        id="role"
                                        name="role"
                                        value={user.role}
                                        onChange={handleChange}
                                        required
                                >
                                    <option value="" disabled selected>Seleccione una opción</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Auxiliar</option>
                                </select>
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

export default EditUserForm;
