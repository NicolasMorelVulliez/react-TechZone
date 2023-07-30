import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }

        const segundoCarrito = [...carrito]
        const estaCarrtio = segundoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (estaCarrtio) {
            estaCarrtio.cantidad += cantidad
        } else {
            segundoCarrito.push(itemAgregado);
        }
        setCarrito(segundoCarrito);
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() =>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    return (
        <CarritoContext.Provider value={{ carrito, agregarCarrito, cantidadCarrito, precioTotal, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>)

}