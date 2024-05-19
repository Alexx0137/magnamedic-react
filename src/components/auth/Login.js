import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assetes/css/login.css';
import logo from '../../assetes/img/magnamedic(5).png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica para manejar el login
        // Por ejemplo, establecer el usuario en el estado global o en localStorage
        navigate('/');
    };

    return (
        <div className="background-container d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5 mx-auto">
                            <div className="card-body p-0">

                                <div className="row">

                                    <div className="col-lg-6 d-none d-lg-block">
                                        <div
                                            className="card-logo-container d-flex align-items-center justify-content-center">
                                            <div className="image-container">
                                                <img src={logo} alt="Logo de Magnamedic"
                                                     className="img-fluid centered-and-resized smaller-logo"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-login">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900"><strong>Iniciar sesión</strong></h1>
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail"></label>
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        id="inputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputPassword"></label>
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="inputPassword"
                                                        placeholder="Contraseña"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <a href="/"></a>
                                                <button type="submit"
                                                        className="btn btn-primary btn-user btn-block mt-3">
                                                    Login
                                                </button>
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <a className="small" href="#">¿Olvidaste la contraseña?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
