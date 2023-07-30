import React, { useEffect, useState } from 'react'
import  pedirProductos  from './pedirProducto';
import ItemList from './ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const serie = useParams().serie;
    //console.log(serie)

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (serie){
                    setProductos(res.filter ((prod) => prod.serie === serie));
                }else{
                    setProductos(res);
                }
            })
    }, [serie])

    return (
        
        <div>
            <ItemList productos ={productos}/>
        </div>
    )
}

export default ItemListContainer


