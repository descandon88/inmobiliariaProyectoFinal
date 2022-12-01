import React from 'react';
import Header from './Components/Header/Header';
import Servicios from './Components/servicios/Servicios';
import Main from './Components/main/Main';
import Footer from './Components/footer/Footer'

import './App.css';
import CardInmuebleHome from './Components/CardInmueble/CardInmueble';

function App() {
  

  return (
    <>
     <div >
      <Header/>
    </div>
    <div>
      <Main/>
      </div> 
    <div>
      <Servicios/>
    </div>
     <h2 className='tituloCards'>Ultimos ingresos</h2>
    <div className='containerCard'>
    <CardInmuebleHome/>
    <CardInmuebleHome/>
    <CardInmuebleHome/>
    </div>
    <Footer/>
    </>
  )
}

export default App;
