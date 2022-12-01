import React from 'react'
import {FiMapPin, FiPhoneCall, FiSmartphone, FiMail } from 'react-icons/fi';


import './footer.css'
function Footer() {
  return (
    <div className='contFooter'>
      <div className='footer'>

        {/* <a href="/"><img className='logo' src="public\assets\logoSinFondo.png" alt="logo" /></a>  */}
     <ul className='footerList'>
                <li className='liFooter'>< FiMapPin className='iconoFooter'/> <span className='spanFooter'>Rivera 641</span> </li>
                <li className='liFooter'>< FiSmartphone className='iconoFooter'/> <span className='spanFooter'>(+598)99867688</span></li>
                <li className='liFooter'>< FiPhoneCall className='iconoFooter'/> <span className='spanFooter'>(+598)23656520</span></li>
                <li className='liFooter'>< FiMail className='iconoFooter'/> <span className='spanFooter'>contacto@inmobiliariarossi.com.uy</span></li> 
         </ul>
      </div>
         <p className='ubicacion'>LAS PIEDRAS - CANELONES - URUGUAY</p>
       
         <p className='derechos'>Inmobiliaria Rossi. © 2023. Todos los derechos reservados.</p>

      
    </div>
  )
}

export default Footer