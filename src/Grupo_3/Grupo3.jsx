import React, { useState } from 'react';
import './style.css';
import Ventana from "./Ventanas.jsx";

import MoreTextComponent from './moreText.jsx';

function Grupo3() {
  const [modo, setModo] = useState("default");
  const [positionX, setPositionX] = useState([50, "after", 0]);
  const [lucky, setLucky] = useState(0);
  const [activar, setActivar] = useState(false);
  const [ansiedadImage, setAnsiedadImage] = useState(0);

  const ChangeMode = () => {
    if (modo === "default") {
      setModo("ansiedad")
     
    } else {
      setModo("default")
      
      }
  };

  setTimeout(function() {
    if(modo==="ansiedad"){
    setAnsiedadImage(ansiedadImage+1)
    if(ansiedadImage===5){
      setAnsiedadImage(1)
    }
    }
    else{
      setAnsiedadImage(0)
    }
   }, Math.random() * 500);
   


  const handleMoreText = () => {
    if (modo === "default") {
      setPositionX([-300, 0]);
      setActivar(true);
     
    } else {
      setPositionX([Math.random() * 90, Math.random() * 300]);
      if (lucky >= Math.random() * 200) {
        setActivar(true);
        setPositionX([-300, 0]);
      }
      setLucky(lucky + 1);
    }
  };

  return (
    <div className='container'>
      <div>    
        <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckDefault" 
            onChange={ChangeMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
        </div>
      
        <div className="card">
          <img alt='' className={`"card-img"  ansi-${ansiedadImage}`}/>
         
        </div>
      </div>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

      <div className='content'>
        <h1 id='titulo' className={`${modo}-izquierda`}>Capacitaciones</h1>
        <div className="Position">
          <p className={`${modo}-derecha`}>
          Identificación de iniciativas en diferentes lugares del país relacionadas con niños, niñas,  adolescentes y personas mayores.
          </p>
          <h4 id='subtitulo' className={`${modo}-caer`}>Niños (San Alberto)</h4>
          <p className={`${modo}-caer`}>
          FuCrehu se encuentra desarrollando una iniciativa que busca un acompañamiento en el desarrollo personal y escolar de los niños y adolescentes en escolaridad primaria y secundaria del barrio Villa Fanny y sus alrededores, del municipio de San Alberto (Cesar)
          </p>
          <h3 className={`${modo}-izquierda`}>Bucaramanga (Santander):</h3>
          <ul className='lista'>
            <li className={`${modo}-derecha`}> Programa para Adultos Mayores, cuyo objetivo es dar cobertura  a los adultos mayores  de 65 años pertenecientes a la Iglesia Apostólica de Jesucristo, inicialmente en la zona de influencia de la Congregación Centro Bucaramanga con proyección a ampliación a la zona Metropolitana de Bucaramanga y otras zonas del País con algunas condiciones de vulnerabilidad.  </li>
            <li className={`${modo}-derecha`}> La intervención se realiza mediante actividades de cuidado, acompañamiento, atención,  coordinación para asistencia en salud, visitación, cobertura espiritual, provisión de alimentación, vestido; jornadas grupales  con fines de socialización, estimulación física y estimulación cognitiva, entre otras.  </li>
          
          </ul>
        </div>

        <button 
          className="MoreText" 
          style={{ left: `${positionX[0]}%`, top: `${positionX[1]}px`}} 
          onClick={handleMoreText}
        >
          Seguir leyendo
        </button>
        {activar && <MoreTextComponent modo={modo} />}
        <Ventana mod={modo} />
      </div>
    </div>
  );
}

export default Grupo3;