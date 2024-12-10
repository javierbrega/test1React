// src/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <h3>Columna 1</h3>
        <p>Contenido de la columna 1</p>
      </div>
      <div className="footer-column">
        <h3>Columna 2</h3>
        <p>Contenido de la columna 2</p>
      </div>
      <div className="footer-column">
        <h3>Columna 3</h3>
        <p>Contenido de la columna 3</p>
      </div>
      <p className="derechos">© 2024 Javier Brega. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
