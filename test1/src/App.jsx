import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Pedidos from "./pages/Pedidos";
import Carpinteria from "./pages/Carpinteria";
import Construccion from "./pages/Construccion";
import LinkLopez from "./pages/LinkLopez";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LinkLopez" element={<LinkLopez />} />
      <Route path="/Nosotros" element={<Nosotros/>} />
      <Route path="/Pedidos" element={<Pedidos/>}/> 
      <Route path="/Carpinteria" element={<Carpinteria/>}/>
      <Route path="/Construccion" element={<Construccion/>}/>



    </Routes>
  );
}

export default App;
