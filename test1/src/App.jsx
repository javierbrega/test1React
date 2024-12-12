import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'; 
import Contacto from './pages/contacto';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/contacto" element={<Contacto />} /> 
    </Routes>
  );
}

export default App;
