import React, { useEffect } from 'react';
import {useState} from 'react';import './detalleCard';
import {buscarById} from '../../Api/Rule_auth_inmobiliaria';
import Header from '../Header/Header';
import './detallecard.css'
import Footer from '../footer/Footer';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




function DetalleCard() {
    const[datosIniciales,setDatosIniciales] = useState([]);
    const { id_inmueble } = useParams();

        useEffect(()=>{
            buscarById(id_inmueble)
          .then((response)=> {
              setDatosIniciales(response);
          })
          .catch((error)=>{
              alert(error);
          });
          },[]);


    const inmuebleDetail = datosIniciales?.filter((arrayDatos) => {
            return arrayDatos.id_inmueble == id_inmueble;
          });

    const inmuebleIndex = datosIniciales?.findIndex((arrayDatos) => {
         return arrayDatos.id_inmueble == id_inmueble;
     });
     console.log("aqui se imprimi el inmuebleDetail: ", inmuebleDetail[0]);
     console.log("aqui se imprimi el inmuebleIndex: ", inmuebleIndex );
     console.log("aqui se imprime el id_inmueble: ", id_inmueble);
     console.log("datos Iniciales todo objecto: ", datosIniciales[0]);
     console.log('Inmueble Detail: ',inmuebleDetail[0]);
     

  return (

    <div>
         <div><Header/></div>
        
        <div className="inmuebleCardContainer">
       <div className='contImagenDetalle'>

        {datosIniciales.length!=0 && <img src={`http://localhost:8000/api/inmuebles/photo/${datosIniciales[0].id_inmueble}`}></img>}
        </div>
        <div className='contDetalle'>

          {datosIniciales.length!=0 && <p className='tipoOperacionDetalle'> {datosIniciales[0].tipo_operacion} </p>}
        { datosIniciales.length!=0 && 
        <p className='detalle'>Precio: ${datosIniciales[0].precio} </p>
         }
 
        {datosIniciales.length!=0 && <p className='detalle'>Tipo de inmueble: {datosIniciales[0].tipo_inmueble} </p>}
        {datosIniciales.length!=0 && <p className='detalle'>Dirección: {datosIniciales[0].direccion} </p>}
        {datosIniciales.length!=0 && <p className='detalle'>Ciudad: {datosIniciales[0].ciudad} </p>}
        {datosIniciales.length!=0 && <p className='detalle'>Departamento: {datosIniciales[0].departamento} </p>}
        {datosIniciales.length!=0 && <p className='detalle'>Descripcion: {datosIniciales[0].descripcion} </p>}
        </div>
        </div>

        <div className="bloqueDeCambioDePaginas">
        <Link className='btnDetalle'to={`/BuscadorPage`}>Regresar al Buscador</Link>
     
        </div>
        

        <div><Footer/></div>
    </div>
  )
}

export default DetalleCard;