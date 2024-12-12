import React from 'react';
import Footer from '../components/Footer'; // Corregida la importación

function Home() {
  return (
    <div>
      <h1>Hola, estamos en Home</h1>
      <Footer /> {/* Componente Footer agregado */}
    </div>
  );
}

export default Home;
