import React, { useEffect, useState } from 'react'
import pedirProductos from './pedirProducto';
import ItemList from './ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const serie = useParams().serie;

    useEffect(() => {

        const productosRef = collection(db, "productos")

        const q = serie ? query(productosRef, where("serie", "==", serie)) : productosRef;

        getDocs(q)
            .then((resp) => {

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })


    }, [serie])

    return (

        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer


