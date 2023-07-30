import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'

const WidgetCarrito = () => {

    const { cantidadCarrito } = useContext(CarritoContext);


    return (
        <div>
            <Link to="/carrito">
                <img className="carrito-logo" src="https://images.vexels.com/media/users/3/200985/isolated/preview/c338a29ce227d751b27f8b141cdb5afa-mano-con-el-icono-de-carrito-de-compras.png" alt="" />
                <span className='numero-carrito'>{cantidadCarrito()}</span>
            </Link>
        </div>
    )
}

export default WidgetCarrito