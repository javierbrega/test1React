// src/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer>
      <section className="footer-flex-container">
        <div className="footer-column">
          <h3>
            <strong>Maderera Lopez</strong>
          </h3>
          <p>San Rafael - Mendoza - Argentina</p>
          <p>Tel: 0260 440-4918</p>
          <p>Dir: Av. Juan B. Alberdi 2100</p>
        </div>
        <div className="footer-column">
          <h3>Accesos Rápidos</h3>
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#productos">Productos</a>
            </li>
            <li>
              <a href="#contacto">Construcción</a>
            </li>
            <li>
              <a href="#home">Pedidos OnLine</a>
            </li>
            <li>
              <a href="#productos">Sobre Nosotros </a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>
            <strong>Redes Sociales</strong>
          </h3>{" "}
          <a href="https://www.instagram.com/madereralopezsr/" target="_blank">
            {" "}
            <img
              src="src\assets\icons\instagram.svg"
              alt="instagram logo"
              width={30}
            />{" "}
          </a>
          <a href="https://www.facebook.com/madereralopezsr/" target="_blank">
            {" "}
            <img
              src="src\assets\icons\facebook.svg"
              alt="facebook logo"
              width={30}
            />{" "}
          </a>
          <a href="#linkedin" target="_blank">
            {" "}
            <img
              src="src\assets\icons\linkedin.svg"
              alt="linkedin logo"
              width={30}
            />{" "}
          </a>
        </div>
      </section>
      <hr />
      <section>
        <p>© 2021 Maderera Lopez - Todos los derechos reservados</p>
      </section>

    </footer>
  );
}

export default Footer;
