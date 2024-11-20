import React from 'react'
import './Grupo2.css';
import FOTO1 from "./TDHA1.JPG"
import FOTO2 from "./TDAH2.jpg"
import FOTO3 from "./TDAH3.JPG"

function Titulo() {
  return (
    <div>
      <h1 class = "title">NUESTROS SERVICIOS</h1>
      <h1 class='mainTitle'><font color="#00107a">F</font>undacion</h1>
      <h1 class='mainTitle'> <font color="#00107a">C</font>recimiento </h1>
      <h1 class='mainTitle'><font color="#00107a">H</font>humano</h1>
      
    </div>
  )
}

function Introduccion() {
  return (
    <div>
  <p>La Fundación Crecimiento Humano genera y participa en proyectos de calidad con la concurrencia activa de los equipos de trabajo voluntario, empresas y entidades involucradas, familias y comunidad; distribuidas en 4 ejes principales:
  </p>
        <ul>
        <li><p><strong>Social comunitario.</strong></p></li>
        <li><p><strong>Educacion.</strong></p></li>
        <li><p><strong>Salud.</strong></p></li>
      </ul>
    </div>
  )
}

function ServiciosComunitarios() {
  return (
    <div>
      <img src={FOTO1} alt="" width="60%"/>
        <ul>
        <li>
          <p>
            <strong>Social comunitario:</strong>
            La Fundación Crecimiento Humano está comprometida en el desarrollo de programas y proyectos comunitarios, de impacto social.
          </p>
          <p>
            <strong>Educación:</strong>La Fundación busca prestar servicios en educación formal e informal en los diferentes niveles de educación (inicial, preescolar, primaria básica, educación media y superior)

          </p>
        </li>
      </ul>
               </div>
  );
}

function CausasYManejo() {
  return (
    <div>
      <img src={FOTO3} alt="" width="55%"/>
      <p>SALUD: 
      Identificadas las necesidades particulares en las comunidades abordadas,Fundación Crecimiento humano pretende  ofrecer:
      </p>
      <ul>      
        <li><p>Programas de educación básica en prevención primaria, acompañamiento, orientación en prevención secundaria y apoyo a procesos de rehabilitación y reincorporación a la vida productiva.</p></li>  
        <li><p>Formación, apoyo y participación en el cuidado de personas en condición de discapacidad y adultos mayores 
        </p></li>
        <li><p>Formación en principios de salud mental para construir familias y entornos sociales saludables</p></li>
        <li><p>Atención, orientación y acompañamiento inicial en crisis de salud mental </p></li>
        <li><p>Desarrollo de actividades formativas en autocuidado y preservación de calidad de vida desde la responsabilidad.</p></li>
        <li><p>Canalizar recursos de apoyo en atención básica en salud para comunidades desprotegidas </p></li>
        <li><p>Promover y desarrollar programas que impacten en la seguridad alimentaria en poblaciones vulnerables</p></li>
        <li><p>Asesorar frente al acceso a planes de beneficios en salud, sistema pensional y en riesgos laborales.</p></li>
      </ul>
     </div>
  );
}

function Conclusion() {
  return (
    <div>
      <img src={FOTO2} alt="" width="55%"/>
      <p>EMPRESARIAL:</p>
      <p>Fundación Crecimiento humano realiza  Alianzas con empresas, organizaciones y entidades públicas o privadas,   a nivel  regional, nacional e internacional, que sean afines a los objetivos, convicciones y principios de la Fundación, y en el marco del sistema de responsabilidad social empresarial;  con el propósito  de optimizar y potencializar recursos que contribuyan, de manera mancomunada al desarrollo integral de los individuos,  las comunidades y a la preservación del medio ambiente.</p>
    </div>
  )
}

function Grupo2() {
  return (
  <div>
    <div id='container'><Titulo /></div>
    <div id="content">
    <Introduccion />
    <br />
    <ServiciosComunitarios />
    <br />
    <CausasYManejo/>
    <br />
    <Conclusion />
   
    </div>
  </div>
    
  )
}

export default Grupo2;