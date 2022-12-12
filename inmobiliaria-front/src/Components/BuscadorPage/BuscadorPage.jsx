import React, { useEffect } from 'react';
import {useState} from 'react';
import Header from '../Header/Header';
import BuscadorBar from '../BuscadorBar/BuscadorBar';
import Footer from '../footer/Footer';
import DisplayCardsInmuebles from '../DisplayCardsInmuebles/DisplayCardsInmuebles';
import {listaInmueblesBuscar, filtrarInmuebles} from '../../Api/Rule_auth_inmobiliaria';



import './buscadorpage.css';
import './../../Routes/App/App.css'

function BuscadorPage() {
    const[inmuebles, setInmuebles] = useState([]);
    const[datosIniciales,setDatosIniciales] = useState([]);
    const [ObjetoSelect, setObjetoSelect] = useState({
      departamento:'',
      tipo_inmueble:'',
      tipo_operacion:'',
      precio_max:0,
      precio_min:0,
  });
   

    useEffect(()=>{
      listaInmueblesBuscar()
    .then((response)=> {
        setInmuebles(response);
        setDatosIniciales(response);
    })
    .catch((error)=>{
        alert(error);
    });
    },[]);

    console.log("inmuebles: ", inmuebles);

    const onClickFiltrar = async (datos) =>{
       await filtrarInmuebles(datos)
      .then((response)=> {
          setInmuebles(response)
      })
      .catch((error)=>{
          alert(error);
      });
      
  };


  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='buscadorbarContainer'>
      <BuscadorBar  
        setInmuebles={setInmuebles}
        ObjetoSelect={ObjetoSelect}
        setObjetoSelect={setObjetoSelect} 
        Inmuebles={inmuebles} 
        InmuebleBuscar={listaInmueblesBuscar}
        onClickFiltrar={onClickFiltrar}
        />  
    </div>
    <div className='containerCard'>
      <DisplayCardsInmuebles  Inmuebles={inmuebles}
      />
    </div>
    <div><Footer/></div>
    </>
  )
}

export default BuscadorPage;