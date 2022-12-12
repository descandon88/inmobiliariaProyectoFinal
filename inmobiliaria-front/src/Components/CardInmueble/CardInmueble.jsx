import React, { useEffect, useState } from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { listaInmuebles } from "../../Api/Rule_auth_inmobiliaria";
import "./cardInmueble.css";

function CardInmuebleHome() {
  const [inmuebles, setInmuebles] = useState([]);

  const buscarLista = async () => {
    await listaInmuebles()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    buscarLista();
  }, []);
  return (
    <>
      {inmuebles.map((inmueble, index) => { 
        
       if(index >= 4 ){
        return null
       }
        
        return(

        <div className="contCard" >
          <div className="contImg">
            <img
              src={`http://localhost:8000/api/inmuebles/photo/${inmueble.id_inmueble}`}
              alt="foto usuario"
              height={250}
            ></img>
            <span className="tipoOperacion">{inmueble.tipo_operacion}</span>
          </div>
          <div className="contContenido">
            <h3 className="tituloCard">
              Complejo de tres viviendas a estrenar.
            </h3>
            <p className="precio">U$S{inmueble.precio}</p>
            <hr />
            <div className="especificaciones">
              <p >
                <FaBed className="icono" />
                {inmueble.dormitorio}
              </p>

              <p>
                <FaBath className="icono" />
                {inmueble.banio}
              </p>

              <p>
                <FaRulerCombined className="icono" />
                {inmueble.m2_terreno}
              </p>
            </div>
          </div>
        </div>
      )})}
        
    </>
  );
}

export default CardInmuebleHome;
