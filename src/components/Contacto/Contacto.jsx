import React from 'react'
import "./Contacto.css"
import { useForm } from "react-hook-form"

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar = (data) =>{
        console.log(data)
    }


    return (
        <div >
            <h1 className='main-title'>Contacto</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>

                <input type='text' placeholder='Ingresa tu nombre'  {...register("nombre")}/>
                <input type='email' placeholder='Ingresa tu email' {...register("email")}  />
                <input type='phone' placeholder='Ingrese su numero de telefono' {...register("telefono")}/>

                <button className='enviar' type='submit'> Enviar</button>

            </form>
        </div>
    )
}

export default Contacto