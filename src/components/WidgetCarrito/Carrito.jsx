import React, { useContext } from 'react'
import "./Carrito.css";
import { CarritoContext } from '../../context/CarritoContext';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CarritoContext);

    const handleCarrito = () => {
        vaciarCarrito();
    }



    return (
        <div>
            <h1 className='main-title'>Carrito</h1>

            {
                carrito.map((prod) => (

                    <div>
                        <h3>{prod.nombre}</h3>
                        <p>Precio unitario: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad} </p>
                        <p>Cantidad: {prod.cantidad}</p>
                    </div>

                ))
            }
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button onClick={handleCarrito}>Vaciar Carrito</button>
                </>:
                <h2>El carrito esta vacio</h2>
            }


        </div>
    )
}

export default Carrito