// src/Header.jsx

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="header-logo">
          <img src="src\assets\icons\logo.png" width={50} height={50} padding={50}  alt="LOGO" />
          <br />
          <h1>Maderera Lopez</h1>
        </div>
        
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#Moviliario">Moviliario</a></li>
          <li><a href="#Construcción">Construcción</a></li>
          <li><a href="#Pedidos">Pedidos OnLine</a></li>
          <li><a href="#Sobre Nosotros">Sobre Nosotros</a></li>
          <li><a href="#Contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
