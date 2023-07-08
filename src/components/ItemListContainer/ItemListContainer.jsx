import React, { useEffect, useState } from 'react'
import  pedirProductos  from './pedirProducto';
import ItemList from './ItemList';
import "./ItemListContainer.css"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])

    return (
        
        <div>
            <ItemList productos ={productos}/>
        </div>
    )
}

export default ItemListContainer


