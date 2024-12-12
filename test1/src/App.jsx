import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'; // Los componentes comienzan con mayúscula
import Contacto from './pages/contacto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Componente con letra mayúscula */}
      <Route path="/contacto" element={<Contacto />} /> {/* Ruta actualizada */}
    </Routes>
  );
}

export default App;
