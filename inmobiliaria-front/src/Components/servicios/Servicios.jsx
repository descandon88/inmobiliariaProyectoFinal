import React from 'react';
import ObjServicios from './objServicios/ObjServicios';
import './servicios.css';



function Servicios() {
    const CardServices = (obj) => {
        return  obj.map((obj, index) => (
            <li className='liCardServicio'key={index}>
                <h3>{obj.nombre}</h3>
                <div className='liDescription'><p >{obj.descripcion}</p></div>
                <img className='liImages' src={obj.img}></img>

            </li>
        ));
    }

  return (
    <div className="servicesContainer">
      <h3 className='secSubtitle' id='servicios'>Servicios</h3>
    <h2 className='secTitle'>¿Qué ofrecemos?</h2>
    <p className='description'>Nuestras soluciones están acorde a lo que necesitas junto con la asesoría personalizada.</p>
    <ul className="ulCardServicio">
      {CardServices(ObjServicios)}
    </ul>
    </div>
  )
}

export default Servicios;