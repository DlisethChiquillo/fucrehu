import React from 'react'
import foto from './imgs/fondo.jpg'
import { Link } from 'react-router-dom';

function Card1() {
  return (
    <Link to='/grupo1' className="group-card">
      <img src={foto} alt="foto pertinente al tema" />
      <h3>¿QUIÈNES SOMOS?</h3>
            <p>
            Contamos con un grupo interdisciplinar de profesionales y personas voluntarias, cuyo ferviente anhelo es disponer sus conocimientos, capacidades y demás aportes al servicio o en beneficio del crecimiento de la sociedad en especial los sectores marginados o de mayor necesidad a nivel social.
      </p>
    </Link>
  )
}

export default Card1;