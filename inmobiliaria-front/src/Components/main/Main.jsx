import React from 'react';
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 925ee2dfb18893167460067219b896c7352766b6
import './main.css';


function Main() {
  return (
<<<<<<< HEAD
    <div className='mainContainer'>
        <div className='containerMainText'>
            <h1 className='titleMain'>Encuentra <span className='red'>la mejor propiedad,</span> nosotros te acompañamos</h1>
            <p className='txtMain'>Respaldo, seguridad y confianza. Ofrecemos un servicio integral, profesional y serio, logrando el objetivo propuesto al cliente.</p>
            <button className="btnMain">Buscar propiedades</button>
        </div>


        <div className="containerMainImage">
          <img className='imgMain' src="public/assets/casaMain.jpg" alt="" />
       

        </div>
    </div>
=======
    
      
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
    
   
  
    
>>>>>>> 925ee2dfb18893167460067219b896c7352766b6
  )
}

export default Main;