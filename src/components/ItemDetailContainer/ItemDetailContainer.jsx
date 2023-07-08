import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../ItemListContainer/pedirProducto';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    console.log(id)

    useEffect(() => {
        pedirItemPorId(Number(id))
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