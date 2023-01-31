import React from 'react';
import '../styles/Proyecto.css';
import { Link } from 'react-router-dom';

export function Proyecto(prop) {

  return (

    <Link to="/contact">
      <div className="contenedor-proyecto">

        <img 
          className="imagen-proyecto"
          src={require(`../imagenes/proyecto-${prop.img.url}.png`)} 
          alt= {prop.img.alt}/>

        <div className="contenedor-texto-proyecto">
          <p className="contenedor-nombre-proyecto"><strong>{prop.title}</strong></p>
          <p className="tecnologia-proyecto"><i>{prop.subtitle}</i></p>
          <p className="descripcion-proyecto">{prop.description}</p>
        </div>
      </div>
    </Link>
  );
}

