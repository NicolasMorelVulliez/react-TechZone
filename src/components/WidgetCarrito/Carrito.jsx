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

                    <div className='contenedor-productos'>
                        <h3 className='nombre-producto'>{prod.nombre}</h3>
                        <img className='imagen-producto ' src={prod.img} alt={prod.nombre} />
                        <p className='precio-producto'>Precio unitario: ${prod.precio}</p>
                        <p className='precio-final'>Precio total: ${prod.precio * prod.cantidad} </p>
                        <p className='cant-producto'>Cantidad: {prod.cantidad}</p>
                    </div>

                ))
            }
            {
                carrito.length > 0 ?
                <div className='contenedor-alt'>
                    <h2 className='precio-total'>Precio Total: ${precioTotal()}</h2>
                    <button onClick={handleCarrito} className='boton-vaciar'>Vaciar Carrito</button>
                </div>:
                <h2 className='carrito-vacio'>El carrito esta vacio :/ </h2>
            }


        </div>
    )
}

export default Carrito