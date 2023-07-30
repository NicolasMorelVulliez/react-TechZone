import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import { CarritoContext } from './context/CarritoContext';
import Carrito from './components/WidgetCarrito/Carrito';
function App() {
  const anuncio = "ENVIO GRATIS A TODO EL PAIS"

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
  
  const cantidadCarrito = () =>{
    return carrito.reduce((acc,prod) => acc+ prod.cantidad, 0 );
  }
  
  const precioTotal = () =>{
    return carrito.reduce((acc, prod) => acc+ prod.precio * prod.cantidad,0)
  }

  const vaciarCarrito =() =>{
        setCarrito([]);
  }

  return (
    <div className="App">
      <CarritoContext.Provider value={{ carrito, agregarCarrito, cantidadCarrito, precioTotal, vaciarCarrito  }}>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={anuncio} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:serie" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

        </BrowserRouter>
      </CarritoContext.Provider>

    </div>
  );
}

export default App;
