import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import WidgetCarrito from "../WidgetCarrito/WidgetCarrito";




function Navbar() {
    return (
        <header>
            
            <li><Link to="/"><img className="logo" src="https://i.ibb.co/vxRp56F/zyro-image.png" alt="Logo"></img></Link></li>
            <button id="abrir" className="abrir-menu"><i className="bi-bi-list"></i></button>
            <nav className="nav" id="nav">
                <button className="cerrar-menu" id="cerrar"><img src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png" alt="" /><i className="bi bi-x-lg"></i></button>
                <ul className="nav-list">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/productos/serie-4000">Serie 4000</Link></li>
                    <li><Link to="/productos/serie-3000">Serie 3000</Link></li>
                    <li><Link to="/contacto">Contactanos</Link></li>
                    <li><WidgetCarrito /></li>


                </ul>
            </nav>
        </header>


    )
}

export default Navbar