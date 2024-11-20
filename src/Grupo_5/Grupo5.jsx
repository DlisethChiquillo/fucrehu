import React from 'react'

import './index5.css';
import Sintomas from './Sintomas';
import Enfoques from './Enfoques';
import Conclusion from './Conclusiones';
import Causas from './Causas';
import Definición from './Definición';
import Apoyo from './Apoyo';
import Test from './Test';

function Grupo5() {
  return (
    <main >
      <div className="container-g5">
        <div className='titulo-lindo'>
          <h1>¿Cómo puedo participar?
</h1>
        </div>
      <img className="image-left" src={`${process.env.PUBLIC_URL}/imagenes/participar.jpg`} alt="" />
       
        <Definición />
        <Sintomas />
        <Causas />
        <Enfoques />
        <Apoyo />
        <Conclusion />
        <br></br>
       
      </div>
    </main>

  )
}

export default Grupo5;