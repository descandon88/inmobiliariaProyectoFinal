import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './empresa.css'

function Empresa() {
  return (
    <div>
        <Header/>
        <div className='containerEmpresa'>
            <div className='containerImagen'>
        <img className='imagenEmpresa' src="/assets/estudio_integral.jpeg" alt="inmobiliaria" />
            </div>
            <div className='containerCont'>

        <p> <b>"INMOBILIARIA ROSSI" </b> es una empresa que fundamos en la ciudad de Las Piedras con larga experiencia dentro de la localidad y en sus alrededores, comenzamos por el año 1990 con la tercera generación Henry Edison <b>ROSSI PASINA</b>  . Somos una empresa familiar que busca dar un trato directo, personalizado y profesional al cliente. Contamos con amplia trayectoria en el rubro inmobiliario, que pretende darle las mejores soluciones para usted, asesorándolo y acompañándolo en la toma de decisiones. Además tenemos profesionales que nos permiten un amplio asesoramiento notarial, jurídico y contable, para brindarle un servicio integral. Somos una empresa en el mercado inmobiliario, dedicada a la venta, alquiler y administración de propiedades; impulsamos y acompañamos emprendimientos inmobiliarios, proyectos de inversión, fraccionamientos y construcción.</p>
        <h2 className='titulo'> Misión</h2>
        <p>Respaldo, seguridad y confianza; Ofrecemos un servicio integral, profesional y serio, logrando el objetivo propuesto al cliente.</p>
        <h2 className='titulo'>Visión</h2>
        <p>Iniciamos un proyecto familiar que prosperó, destacándose por su seriedad, compromiso e impronta particular. Hoy nos siguen acompañando los clientes más antiguos y sus generaciones así como otros más que se han ido sumando a nuestro compromiso y trabajo.</p>
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Empresa