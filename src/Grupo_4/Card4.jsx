import React from 'react'
import { Link } from 'react-router-dom';

function Card4() {
  return (
    
    
    <Link to='/grupo4' className="group-card">
      <img src={`${process.env.PUBLIC_URL}/imagenes/contacto.jpg`} alt="contacto" />
      <h3><b>CONTACTO</b></h3>
            <p>
 
      </p>
    </Link>
    
  )
}

export default Card4;