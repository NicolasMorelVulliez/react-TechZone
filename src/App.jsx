import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import { CarritoContext, CartProvider } from './context/CarritoContext';
import Carrito from './components/WidgetCarrito/Carrito';
function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:serie" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
