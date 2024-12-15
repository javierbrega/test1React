import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Pedidos from "./pages/Pedidos"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Nosotros" element={<Nosotros/>} />
      <Route path="Pedidos" element={<Pedidos/>}/> 



    </Routes>
  );
}

export default App;
