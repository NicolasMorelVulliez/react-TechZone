import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const anuncio = "ENVIO GRATIS A TODO EL PAIS"

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={anuncio} />} /> 
          <Route path="/item/:id" element={<ItemDetailContainer />} /> 
          <Route path="/productos" element={<ItemListContainer />} /> 
          <Route path="/productos/:serie" element={<ItemListContainer />} /> 
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
