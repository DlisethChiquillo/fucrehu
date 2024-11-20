import React from 'react'
import { Link } from 'react-router-dom';

function Card6() {
  return (
    <Link to='/grupo6' className="group-card">
      <img src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/1427E/production/_123785528_785290d5-55d8-4aa0-8461-78e4da7b7cd1.jpg" alt="foto pertinente al tema" />
      <h3>PREGUNTAS</h3>
   
      <p>
      Descubre las dudas más recurrentes sobre nuestros servicios. Queremos ofrecerte la información necesaria para despejar cualquier inquietud.
      </p>
    </Link>
  )
}

export default Card6;