import React from 'react';
import ansiedadImage from './imgs/icon.jpg'; 
import { Link } from 'react-router-dom';

function Card3() {
  return (
    <Link to='/grupo3' className="group-card">
      <img src={ansiedadImage} alt="foto pertinente al tema" />
      <h3>EN QUÉ ESTAMOS</h3>
         <p>
         Fundación Crecimiento Humano es una organización sin ánimo de lucro creada en 2004 que busca,  con su trabajo y servicio, aportar al crecimiento integral de la sociedad colombiana.
      </p>
    </Link>
  );
}

export default Card3;
