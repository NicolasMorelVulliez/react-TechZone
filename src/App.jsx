import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const anuncio = "ENVIO GRATIS A TODO EL PAIS"

  return (
    <div className="App">
      
        <Navbar />
        <ItemListContainer greeting={anuncio} />
        <ItemDetailContainer itemId={2} />


    </div>
  );
}

export default App;
