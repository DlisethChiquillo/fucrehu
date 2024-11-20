import React from 'react'

function Sintomas() {
  return (
    <section className="Sintomas">
      <div className='Sintomas-text'>
        <h1>Haciendo donaciones económicas </h1>
      <img className="image-left" src={`${process.env.PUBLIC_URL}/imagenes/economico.jpg`} alt="" />
        <p> Si deseas apoyar económicamente a la fundación, puedes usar el método de consignación a nuestra cuenta de ahorros Bancolombia 389-000010-07
</p>
      </div>
    </section>
  )
}

export default Sintomas;