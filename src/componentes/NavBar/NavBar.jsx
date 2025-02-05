import React from 'react';
import "./NavBar-styles.css";
import logo from "/img/logo.png";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            {/* Navbar para móviles y tabletas */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="#header">
                        <img src={logo} alt="Logo" className="logo me-2" style={{ height: "40px" }} />
                        <h1 className="m-0 fs-4">LifeBreathe</h1>
                    </a>
                    {/* Botón de menú hamburguesa para dispositivos móviles */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Contenedor colapsable */}
                    <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#header">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#clima">Datos del Aire</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#recomendaciones">Recomendaciones para la salud</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#composicion">Composición del Aire</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar para pantallas grandes */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#header">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#clima">Datos del Aire</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#recomendaciones">Recomendaciones para la salud</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#composicion">Composición del Aire</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;





