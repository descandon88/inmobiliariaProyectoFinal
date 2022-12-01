import React from 'react'
import {FaBed,FaBath,FaRulerCombined} from 'react-icons/fa';
import './cardInmueble.css'

function CardInmuebleHome() {
  return (
    <div className='contCard'>
        <div className='contImg'>
            <img className='imgCard' src="public\assets\casa1.jpeg" alt="" />
            <span className='tipoOperacion'>Venta</span>
        </div>
        <div className='contContenido'>

        <h3 className='tituloCard'>Complejo de tres viviendas a estrenar.</h3>
            <p className='precio'>U$S150.000</p>
           <hr />
            <div className='especificaciones'>
                
                <p><FaBed className='icono'/>2</p>
                
                <p><FaBath className='icono'/>1</p>
                
                <p><FaRulerCombined className='icono'/>63 m2</p>

        </div>
            </div>
                 
        

    </div>
  )
}

export default CardInmuebleHome