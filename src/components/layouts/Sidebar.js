import React from 'react';
import logo from '../../assetes/img/magnamedic(2).png'
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <a href="/">
                    <img src={logo}
                         alt="Logo de Mi Empresa"/>
                </a>
            </div>
            <ul>
                <hr/>
                <li>
                    <FontAwesomeIcon icon={solidIcons.faHome} className="iconSidebar"/>
                    <a href="/"><span>Inicio</span></a>
                </li>
                <hr/>

                <li>
                    <FontAwesomeIcon icon={solidIcons.faCalendar} className="iconSidebar"/>
                    <a href="/medical-appointments"><span>Citas médicas</span></a>
                </li>
                <li>
                    <FontAwesomeIcon icon={solidIcons.faUsers} className="iconSidebar"/>
                    <a href="/patients">
                        <span>Pacientes</span></a>
                </li>
                <hr/>

                <li>
                    <FontAwesomeIcon icon={solidIcons.faStethoscope} className="iconSidebar"/>
                    <a href="/doctors"><span>Médicos</span></a>
                </li>
                <li>
                    <FontAwesomeIcon icon={solidIcons.faKitMedical} className="iconSidebar"/>
                    <a href="/medical-specialities"><span>Especialidades médicas</span></a>
                </li>
                <hr/>

                <li>
                    <FontAwesomeIcon icon={solidIcons.faUsers} className="iconSidebar"/>
                    <a href="/users"><span>Usuarios</span></a>
                </li>
                <li>
                    <FontAwesomeIcon icon={solidIcons.faChartArea} className="iconSidebar"/>
                    <a href="/reports"><span>Reportes</span></a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
