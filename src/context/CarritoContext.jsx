import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

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

    return (
        <CarritoContext.Provider value={{ carrito, agregarCarrito, cantidadCarrito, precioTotal, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>)

}