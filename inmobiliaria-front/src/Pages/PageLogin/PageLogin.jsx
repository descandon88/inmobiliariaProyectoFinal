import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../../Components/Login/Login'
import './pageLogin.css';


function PageAdmin() {
  return (
  
<>

      <div className='contPageLogin'>
        <div className='containerPLoginText'>
            <h1 className='titlePageLogin'>Bienvenido al <span className='spanRed'>área administrativa</span> </h1>
            <p className='txtPageLogin'>Si no tienes acceso a esta área puedes volver al inicio!</p>
            <Link to={"/"}>
              <button className="btnPageLogin btnGray">Volver</button>
            </Link>
        </div>

        <div className="contForm">
          <Login/>
        </div>

        </div>
        
        </> 
  
  )
}

export default PageAdmin;