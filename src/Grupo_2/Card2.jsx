import React from 'react'
import { Link } from 'react-router-dom';
import FOTO3 from "./TDAH3.jpeg"

function Card2() {
  return (
    <Link to='/grupo2' className="group-card">
      <img alt='TDAH' src={FOTO3}/>
      <h3>NUESTROS SERVICIOS</h3>
         <p>
         La Fundación Crecimiento Humano genera y participa en proyectos de calidad con la concurrencia activa de los equipos de trabajo voluntario, empresas y entidades involucradas, familias y comunidad
      </p>
    </Link>
  )
}

export default Card2;