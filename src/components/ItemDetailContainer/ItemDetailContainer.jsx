import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../ItemListContainer/pedirProducto';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({ itemId }) => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        pedirItemPorId(itemId)
            .then((res) => {
                setItem(res);
            })
    }, [])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer