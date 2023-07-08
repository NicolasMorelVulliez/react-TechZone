import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <header>
            <li><Link to="/"><img className="logo" src="./img/nav/logo.png" alt="Logo"></img></Link></li>
            <button id="abrir" className="abrir-menu"><i className="bi-bi-list"></i></button>
            <nav className="nav" id="nav">
                <button className="cerrar-menu" id="cerrar"><i className="bi bi-x-lg"></i></button>
                <ul className="nav-list">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/productos/serie-4000">Serie 4000</Link></li>
                    <li><Link to="/productos/serie-3000">Serie 3000</Link></li>
                    <li><Link to="carrito"><img className="carrito-logo" src="https://images.vexels.com/media/users/3/200985/isolated/preview/c338a29ce227d751b27f8b141cdb5afa-mano-con-el-icono-de-carrito-de-compras.png" alt="" /></Link></li>
                </ul>
            </nav>
        </header>


    )
}

export default Navbar