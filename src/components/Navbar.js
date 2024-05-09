import React from 'react';
import userAvatar from '../assetes/img/undraw_profile.svg'

const Navbar = () => {
    return (
        <header>
            <nav className="dashboard-navbar">
                <div className="user-profile dropdown">
                    <a className="dropdown-toggle-no-arrow" href="#" role="button" id="userDropdown"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="text-gray-600">Nelson García</span>
                        <img src={userAvatar}/>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom"
                        aria-labelledby="userDropdown">
                        <li><a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Perfil
                        </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="login.html">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Cerrar sesión
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
