import React from 'react';
import ObjServicios from './objServicios/ObjServicios';
import './servicios.css';



function Servicios() {
    const CardServices = (obj) => {
        return  obj.map((obj, index) => (
<<<<<<< HEAD
            <li className='li-card-servicio'key={index}>
                <h3>{obj.nombre}</h3>
                <div className='li-description'><p >{obj.descripcion}</p></div>
              
                <img className='li-images' src={obj.img}></img>
                
            </li>
        ));
    }
  return (
    <div className="services-container">
    <h2>¿Qué ofrecemos?</h2>
    <p className='services-description'>Nuestras soluciones están acorde a lo que necesitas junto con la asesoría personalizada.</p>
    <ul className="ul-card-servicio">
=======
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
>>>>>>> 925ee2dfb18893167460067219b896c7352766b6
      {CardServices(ObjServicios)}
    </ul>
    </div>
  )
}

export default Servicios;