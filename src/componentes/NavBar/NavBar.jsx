import React from 'react'
import "./NavBar-styles.css"
import logo from "/img/logo.png"
import { Outlet, Link } from "react-router-dom"
function Navbar(){
    return (
        <nav className="nav-bar">
            <div><img src={logo} alt="" className="logo"/></div>
            <h1>LifeBreathe</h1>
            <ul className="items">
                <li><Link to='/'>Pronostico del día</Link></li>
                <li><Link to='/'>Recomendaciones</Link></li>
                <li><Link to="/">Composición del Aire</Link></li>
            </ul>
            <Outlet/>
        </nav>
        )
    }

export default Navbar
