import React, { useState } from 'react';
import './NavBar-styles.css';
import logo from '/img/logo.png';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú cuando un enlace es clickeado
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div><img src={logo} alt="Logo" className="logo" /></div>
      <h1>LifeBreathe</h1>
      <br />
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`items ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#header" onClick={closeMenu}>Inicio</a></li>
        <li><a href="#clima" onClick={closeMenu}>Datos del Aire</a></li>
        <li><a href="#recomendaciones" onClick={closeMenu}>Recomendaciones para la salud</a></li>
        <li><a href="#compocision" onClick={closeMenu}>Composición del Aire</a></li>
        <li><a href="#footer" onClick={closeMenu}>Contactos</a></li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Navbar;
