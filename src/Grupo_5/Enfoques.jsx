import React from 'react'

function Enfoques() {
  return (
    <section className="Enfoques">
      <div className='Enfoques-text'>

        <h1>Donaciones en especie</h1>
      <img className="image-left" src={`${process.env.PUBLIC_URL}/imagenes/imagen2.jpg`} alt="" />

        <p>
¿Cuentas con recursos físicos o materiales que puedan servir a nuestra causa? contáctanos y déjanos saber el modo en que puedes apoyarnos 
</p>

      </div>
    </section>
  )
}

export default Enfoques;