import React from 'react'


const Item = ({ producto }) => {
    return (
        <div class="card-producto mx-auto">
            <div class="imgBox">
                <img className='img-productos' src={producto.img} alt={producto.nombre} />
            </div>
            <div class="contentBox">
                <h3>{producto.nombre}</h3>
                <h2 class="price">${producto.precio}</h2>
                <button class="buy" id={producto.id}>Ver mas</button>
            </div>
        </div>
    )
}

export default Item