import React from 'react';
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MainCard = () => {
    return (
        <div className="container-fluid">
            <div className="title-container">
                <h1 className="h3 mb-0 text-gray-800">Resumén del día</h1>
            </div>
            <div className="row">

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs text-primary text-uppercase mb-1">
                                        Citas del día
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">45</div>
                                </div>
                                <div className="col-auto">
                                    <FontAwesomeIcon icon={solidIcons.faCalendar} className="fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs text-primary text-uppercase mb-1">
                                        Numero de pacientes
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">620</div>
                                </div>
                                <div className="col-auto">
                                    <FontAwesomeIcon icon={solidIcons.faUser} className="fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs text-primary text-uppercase mb-1">
                                        Numero de medicos
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">10</div>
                                </div>
                                <div className="col-auto">
                                    <FontAwesomeIcon icon={solidIcons.faUserDoctor} className="fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs text-primary text-uppercase mb-1">
                                        Numero de usuarios
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">4</div>
                                </div>
                                <div className="col-auto">
                                    <FontAwesomeIcon icon={solidIcons.faUsers} className="fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainCard;
