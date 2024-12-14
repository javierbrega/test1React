import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import SobreNosotros from "./pages/SobreNosotros";
import Pedidos from "./pages/Pedidos"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/SobreNosotros" element={<SobreNosotros/>} />
      <Route path="Pedidos" element={<Pedidos/>}/> 



    </Routes>
  );
}

export default App;
