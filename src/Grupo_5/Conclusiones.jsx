import React from 'react'

function Conclusion() {
  return (
    <section className="Conclusion">
      <div className='Conclusion-text'>
        <h1> Alianzas y cooperación con otras entidades nacionales e internacionales. </h1>

        <p>Si su entidad tiene objetivos afines a los nuestros podemos unir esfuerzos, creemos que con sinergia y cooperación se es más eficaz. [Contáctanos]. 
</p>
        <img className="image-left" src={`${process.env.PUBLIC_URL}/imagenes/Imagen1.png`} alt="" />

      </div>
    </section>
  )
}

export default Conclusion;