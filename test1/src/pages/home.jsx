import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header /> {/* Componente Header agregado*/}
      <h1>Hola, estamos en Home</h1>
      <Footer /> {/* Componente Footer agregado */}
    </div>
  );
}

export default Home;
