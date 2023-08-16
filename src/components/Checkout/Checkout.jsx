import React, { useContext, useState } from 'react'
import "./Checkout.css"
import { CarritoContext } from '../../context/CarritoContext';
import { useForm } from 'react-hook-form';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Checkout = () => {

    const [idPedido, setIdPedido] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CarritoContext);

    const {register, handleSubmit} = useForm();

    const comprar = (data) =>{
        const pedido ={
            cliente: data,
            prodcutos: carrito,
            total: precioTotal(),
        }

        const refPedidos =  collection(db, "pedidos");

        addDoc(refPedidos, pedido)
        .then ((doc) =>{
            setIdPedido(doc.id)
            vaciarCarrito()
        })
    }

    if (idPedido){
        return(
            <div className='checkout'>
                <h1 className='titulo'> Muchas Gracias por su compra</h1>
                <p className='subtitulo'>Tu numero de pedido es: {idPedido}</p>
                <a href="https://imgbb.com/"><img className='img' src="https://i.ibb.co/dc1RDh5/aa038d22-7e1b-4511-bf46-ffd7840a1119.webp" alt="aa038d22-7e1b-4511-bf46-ffd7840a1119" border="0"></img></a>
                <p className='consulta'>Cualquier consulta/duda no dudes en contactarnos </p>
            </div>
        )
    }

    return (
        <div >
            <h1 className='main-title'>Finalizar Compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>

                <input type='text' placeholder='Ingresa tu nombre'  {...register("nombre")}/>
                <input type='text' placeholder='Ingresa tu apellido'  {...register("apellido")}/>
                <input type='email' placeholder='Ingresa tu email' {...register("email")}  />
                <input type='phone' placeholder='Ingrese su numero de telefono' {...register("telefono")}/>


                <button className='enviar' type='submit'> Comprar</button>

            </form>
        </div>
    )

}

export default Checkout