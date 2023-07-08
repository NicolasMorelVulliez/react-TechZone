import React from "react";
import "./Navbar.css";


function Navbar() {
    return (
        <header>
            <li><a href=""><img class="logo" src="./img/nav/logo.png" alt="Logo"></img></a></li>
            <button id="abrir" class="abrir-menu"><i class="bi-bi-list"></i></button>
            <nav class="nav" id="nav">
                <button class="cerrar-menu" id="cerrar"><i class="bi bi-x-lg"></i></button>
                <ul class="nav-list">
                    <li><a href="index.html">Productos</a></li>
                    <li><a href="index.html">Generacion 4000</a></li>
                    <li><a href="index.html">Generacion 3000</a></li>
                    <li><a href="carrito"><i class="bi bi-cart3"></i></a></li>
                </ul>
            </nav>
        </header>


    )
}

export default Navbar