import React from 'react';
import { Link } from "react-router-dom";
import './main.css';


function Main() {
  return (
    
      
    <div className='mainContainer'>
        <div className='containerMainText'>
            <h1 className='titleMain'>Encuentra <span className='spanRed'>la mejor propiedad,</span> nosotros te acompañamos</h1>
            <p className='txtMain'>Respaldo, seguridad y confianza. Ofrecemos un servicio integral, profesional y serio, logrando el objetivo propuesto al cliente.</p>
            <button className='btnRed btnMain'>
            <Link to={"/buscadorPage"} className="btnRed btnMain">Buscar propiedades</Link>
              </button>
        </div>
        <div className='contIconos'>
        <a href="mailto:contacto@inmobiliariarossi.com.uy"><img className='iconoStatic' src="../public/assets/gmail.png" alt="" /></a>
        <a target="-blank" href="https://wa.me/+59899867688"><img className='iconoStatic' src="../public/assets/whatsapp.png" alt="" /></a>
        </div>
    </div>
    
   
  
    
  )
}

export default Main;