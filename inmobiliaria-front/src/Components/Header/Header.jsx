import { Link } from "react-router-dom";
import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        
            <a href="/"><img className='logo' src="public\assets\logo.jpeg" alt="logo" /></a> 
        
        <nav className='nav'>
            <ul className='navList'>
                <li className='liHeader'><a className='ancla' href="">Inicio</a></li>
                <li className='liHeader'><a className='ancla' href="">Empresa</a></li>
                <li className='liHeader'><a className='ancla' href="#servicios">Servicios</a></li>
                <li className='liHeader'><a className='ancla' href="">Estudio</a></li>
                <li className='liHeader'><a className='ancla' href="#contacto">Contacto</a></li>
            </ul>
        </nav>

        <Link to={"/login"}>
          <button className='btnHeader'>Iniciar sesión</button>
        </Link>
    </div>
  )
}

export default Header