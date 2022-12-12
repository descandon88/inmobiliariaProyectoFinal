import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './estudio.css'

function Estudio() {
  return (
    <div>
        <Header/>
        
        <div className='contEstudio'>
            <div className='contHistoria'>
            <h1 className='tituloPrincipal'>Estudio Integral Rossi</h1>
            <div className='contFlex'>

             <img className='imagenEstudio' src="/assets/estudio_integral.jpeg" alt="" />
            <p>Ofrecemos un servicio integral a personas y empresas interrelacionando  nuestras diversas áreas profesionales: “Contable, Notarial, Jurídica, y Negocios Inmobiliarios”.</p>
            </div>
            <p>Contamos con un equipo de profesionales que desarrolla su trabajo con responsabilidad teniendo como objetivo principal dar una atención personalizada al cliente buscando cual es la necesidad y respuesta más conveniente a sus intereses.-</p>
            <p>Vemos al cliente ”como persona” en su ámbito cotidiano, vida familiar, económica, etc… </p>
            <p>Si bien nuestro estudio está radico en Las Piedras, Canelones, atendemos en toda el área metropolitana del país , Montevideo , Maldonado San José y en donde el cliente nos llame.-</p>
            </div>
            <div className='contServicios'>
                <h2 className='tituloSec'>Nuestras areas de servicios</h2>
                <h3 className='tituloTerc'>Asesoramiento Contable</h3>
                <ul className='estiloLista'>
                    <li>Confección de estados contables y balances, liquidaciones de Sueldos, MTSS y BPS.</li>
                    <li>Liquidación de Impuestos DGI: IRPF, IVA mínimo, IVA, IRAE, IP e ICOSA.</li>
                    <li>Construcción: registro de obra, sueldos, FOCER Y BPS.</li>
                    <li>Confección y registro de empresas unipersonales y sociedades comerciales.</li>
                    <li>Proyectos de inversión buscando asistencia financiera bancaria.</li> 
                </ul>
                <h3 className='tituloTerc'>Notarial - Juridica:</h3>
                <ul>
                    <li>Intervención notarial en los diferente tipos contractuales y negociales del cliente:  compraventas, arrendamientos, hipotecas etc.</li>
                    <li>Préstamos bancarios en todos sus productos: prestamos inmobiliarios, prendas, contratos de leasing etc.</li>
                    <li>Certificaciones notariales en sus diferentes tipos: de propiedad, de firmas presentación rupe; estados de responsabilidad etc.</li>
                    <li>Sucesiones, escrituraciones judiciales, divorcios, separación judicial de bienes etc.</li>
                    <li>Proyectos de inversión buscando asistencia financiera bancaria.</li> 
                    <li>Asistencia judicial en materia civil, comercial , laboral y familia.</li>
                    <li>Contratos</li>
                    <li>Automotores</li>
                    <li>Poderes</li>
                </ul>
                <h3 className='tituloTerc'>Otros servicios</h3>
                <ul>
                    <li>Asistencia  personalizada en la búsqueda de una solución de vivienda propia ,buscando cual es la mejor solución de préstamos inmobiliarios que se ofrece en el mercado.</li>
                    <li>Asesoramiento  en fraccionamientos comunes o en propiedad horizontal contamos con Ingenieros Agrimensores.</li>
                    <li>Regularización de construcciones  ante BPS e Intendencias Municipales.</li>
                    <li>Asesoramiento a la mediana y pequeña empresa brindándole información financiera, de logística y viabilidad comercial.</li>
                </ul>
            </div>
        </div>
        <Footer/>
          

    </div>
  )
}

export default Estudio