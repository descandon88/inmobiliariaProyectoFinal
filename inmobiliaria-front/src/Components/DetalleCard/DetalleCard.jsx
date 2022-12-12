import React, { useEffect } from 'react';
import {useState} from 'react';import './detalleCard';
import {buscarById} from '../../Api/Rule_auth_inmobiliaria';
import Header from '../Header/Header';
import './detallecard.css'
import Footer from '../footer/Footer';
import { Link  } from "react-router-dom";
import { useParams} from "react-router-dom";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import {BsHouse, BsBuilding} from "react-icons/bs";
import { MdLandscape } from "react-icons/md";

// import {MdScreenSearchDesktop} from "react-icons/md";




function DetalleCard() {
    const[datosIniciales,setDatosIniciales] = useState([]);
    const { id_inmueble } = useParams();
    // const navigate = useNavigate();

   

        useEffect(()=>{
            buscarById(id_inmueble)
          .then((response)=> {
              setDatosIniciales(response);
          })
          .catch((error)=>{
              alert(error);
          });
          },[]);
    
    // const params = useParams();

    // const navigateToContacts = () => {
        
    //   navigate(+1);
     
    //     };   
    //     const handleNavigation = () => {
    //       navigate("/BuscadorPage/detalleInmueble/28");
    //       console.log('id: es ',datosIniciales[0].id_inmueble+1)
    //     };
        

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

    <>
         <div><Header/></div>
     
        <div className="inmuebleCardContainer">
        <div className="contRowOne">
       <div className='contImagenDetalle'>

        {datosIniciales.length!=0 && <img src={`http://localhost:8000/api/inmuebles/photo/${datosIniciales[0].id_inmueble}`}></img>}
        </div>
        <div className='contDetalle'>

          {datosIniciales.length!=0 && <p className='tipoOperacionDetalle'> {datosIniciales[0].tipo_operacion} </p>}
        { datosIniciales.length!=0 && 
        <p className='detallePrecio'>U$S {datosIniciales[0].precio.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} </p>
         }
           {datosIniciales.length!=0 && <div>
          {datosIniciales[0].tipo_inmueble=="Casa" && <p className="iconosP"><BsHouse className="icono"/>Casa</p>}
        {datosIniciales[0].tipo_inmueble=="Apartamento" && <p className="iconosP"><BsBuilding className="icono"/>Apartamento</p>}
        {datosIniciales[0].tipo_inmueble=="Terreno" && <p className="iconosP"><MdLandscape className="icono"/>Terreno</p>} </div> } 
        { datosIniciales.length!=0 && <div className="contIconosFa">
                    <p className="iconosP">
                      <FaBed className="icono"/>
                      {datosIniciales[0].dormitorio} Dorm.
                    </p>
                    <p className="iconosP">
                      <FaBath className="icono" />
                      {datosIniciales[0].banio} Baños
                    </p>
                    <p className="iconosP">
                      <FaRulerCombined className="icono" />
                      {datosIniciales[0].m2_terreno}m2 de Terreno
                    </p>
                  </div>}
     

        {  
        datosIniciales.length!=0 && <div >
      
        <div className="contBarrioCiudad">
        <h3>Ubicación</h3>
        {<p className='detalleBarrioCiudad'>{datosIniciales[0].barrio},  {datosIniciales[0].ciudad } </p>}
       
        <h3>Dirección</h3>
        {<p className='detalleBarrioCiudad'>  {datosIniciales[0].direccion } </p>}
        <h3>Descripcion</h3>
        {<p className='detalle'>{datosIniciales[0].descripcion} </p>}
        </div>
          
        </div>
        }

          
        
        
        </div>
        </div>
        <div className="contRowTwo">
        <Link className='btnDetalle'to={`/BuscadorPage`}> 
        <div className="buscadorReturn"><p>Volver al Buscador</p> </div>
        </Link>
        </div>
        </div>
       
       
       
        <div className="bloqueDeCambioDePaginas">
        {/* <Link to={`/BuscadorPage`}><MdScreenSearchDesktop className="icono"/><p>Regresar al Buscador</p></Link> */}
        
        {/* // <Link to={`/BuscadorPage/detalleInmueble/${datosIniciales[0].id_inmueble+1}`}><p>Siguiente</p> </Link>  */}
        {/* { datosIniciales.length!=0  && 
        <button onClick={handleNavigation}>Siguiente</button> } */}
       
        </div>
       
        

        <div><Footer/></div>
    </>
  )
}

export default DetalleCard;