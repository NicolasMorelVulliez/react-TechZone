import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
    return (
        <div className="card-producto mx-auto">
            <div className="imgBox">
                <img className='img-productos' src={producto.img} alt={producto.nombre} />
            </div>
            <div className="contentBox">
                <h3>{producto.nombre}</h3>
                <h2 className="price">${producto.precio}</h2>
                <Link to={`/item/${producto.id}`}><button className="buy" id={producto.id}>Ver mas</button></Link>
            </div>
        </div>
    )
}

export default Item