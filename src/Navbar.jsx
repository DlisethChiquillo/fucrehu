import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/LogoITR.jpg`} alt="fundacion" />
        </Link>
        <nav>
          <ul>
          <li><Link to="/">INICIO</Link></li>
            <li><Link to="/grupo1">¿QUIÈNES SOMOS?</Link></li>
            <li><Link to="/grupo2">NUESTROS SERVICIOS</Link></li>
            <li><Link to="/grupo3">EN QUÈ ESTAMOS</Link></li>
            <li><Link to="/grupo4">CONTACTO</Link></li>
            <li><Link to="/grupo5">¿COMO PUEDO PARTICIPAR?</Link></li>
            <li><Link to="/grupo6">PREGUNTAS</Link></li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;