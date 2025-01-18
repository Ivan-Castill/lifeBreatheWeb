import React from 'react'
import "./NavBar-styles.css"
import logo from "/img/logo.png"
import { Outlet, Link } from "react-router-dom"
function Navbar(){
    return (
        <div className="header">
            <div className="noticiaDia"><p>Noticias del dia:</p></div>
            <div className="barraLogo"><img src={logo} alt="" className="logo"/><h1>LifeBreathe</h1></div>
            <div className="barraOpciones">
                <nav className="itemsOpciones">
                    <ul className="items">
                        <li><Link to=''>Composion del Aire</Link></li>
                        <li><Link to=''>Recomendacion para el Dia</Link></li>
                        <li><Link to=''>Clima del dia</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
