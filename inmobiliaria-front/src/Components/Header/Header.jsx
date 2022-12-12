import { Link } from "react-router-dom";
import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        
            <a href="/"><img className='logo' src="/assets/logoSinFondo.png" alt="logo" /></a> 
        
        <nav className='nav'>
            <ul className='navList'>
                <li className='liHeader'><a className='ancla' href="/">Inicio</a></li>
                <li className='liHeader'><Link className='ancla' to={"/empresa"}>Empresa</Link></li>
                <li className='liHeader'><a className='ancla' href="/#servicios">Servicios</a></li>
                <li className='liHeader'><Link className='ancla' to={"/estudio"}>Estudio</Link></li>
                <li className='liHeader'><a className='ancla' href="#contacto">Contacto</a></li>
            </ul>
        </nav>

        <Link to={"/pageLogin"}>
          <button className='btnGray'>Iniciar sesión</button>
        </Link>
    </div>
  )
}

export default Header