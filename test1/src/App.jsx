// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <main>
      <h1>!Hola, Mundo!</h1>
      <p>Tu configuracion de React con Vite está lista para funcionar</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

