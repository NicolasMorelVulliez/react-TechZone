import React from 'react'


const ItemCount = ({ cantidad, restarCantidad, sumarCantidad, agregarCarrito }) => {

    return (
        <div>
            <div className='item-count'>
                <button onClick={restarCantidad}>-</button>
                <p>{cantidad}</p>
                <button onClick={sumarCantidad}>+</button>
            </div>
            <button className='agregar-carrito' onClick={agregarCarrito}> Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount