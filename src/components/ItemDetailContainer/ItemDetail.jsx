import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CarritoContext } from '../../context/CarritoContext';


const ItemDetail = ({ item }) => {

    const { carrito, agregarCarrito } = useContext(CarritoContext);
    console.log(carrito)


    const [cantidad, setCantidad] = useState(1);

    const restarCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumarCantidad = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }


    


    return (
        <div>
            <div className='producto-detalle'>
                <img src={item.img} alt={item.nombre} />
                <div>
                    <h3 className='titulo'>{item.nombre}</h3>
                    <p className='descripcion'> {item.descripcion}</p>
                    <p className='categoria'>Generacion: {item.serie}</p>
                    <p className='precio'>${item.precio}</p>
                    <ItemCount cantidad={cantidad}
                        sumarCantidad={sumarCantidad}
                        restarCantidad={restarCantidad}
                        agregarCarrito={() => { agregarCarrito(item, cantidad) }} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail