// src/Header.jsx
import React, { useState } from "react"; 
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <img
            src="src\assets\icons\logo.png"
            width={50}
            height={50}
            padding={50}
            alt="LOGO"
          />
          <br />
          <h1>Maderera Lopez</h1>
        </div>

        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li>
            <a href="./">Inicio</a>
          </li>
          <li>
            <a href="./Carpinteria">Carpinteria</a>
          </li>
          <li>
            <a href="./Construccion">Construcción</a>
          </li>
          <li>
            <a href="./Pedidos">Pedidos</a>
          </li>
          <li>
            <a href="./Nosotros">Nosotros</a>
          </li>
          <li>
            <a href="./Contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
