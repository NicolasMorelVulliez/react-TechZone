import React from 'react'


const ItemDetail = ({item}) => {
    return (
        <div>
            <div className='producto-detalle'>
                <img src={item.img} alt={item.nombre} />
                <div>
                    <h3 className='titulo'>{item.nombre}</h3>
                    <p className='descripcion'> {item.descripcion}</p>
                    <p className='categoria'>Generacion: {item.serie}</p>
                    <p className='precio'>${item.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail