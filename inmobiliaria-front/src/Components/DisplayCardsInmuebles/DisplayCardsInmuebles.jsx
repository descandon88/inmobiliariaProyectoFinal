import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import {AiOutlineArrowRight} from "react-icons/ai"
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BsHouse, BsBuilding} from "react-icons/bs";
import { MdLandscape } from "react-icons/md";
import { Link } from "react-router-dom";


import "./displaycardsinmuebles.css";
// import "../CardInmueble/cardInmueble.css";

function DisplayCardsInmuebles({ Inmuebles }) {
  // const objetoInmueble = Inmuebles;
  // const CardsDisplayed = (objetoInmueble) => {};

  return (
    <div className="cardsContainer">
      <ul className="cardContainer wrap">
        {Inmuebles &&
          Inmuebles.map((inmueble, index) => {
            return (
              <li className="contCardDisplayInmuebles" key={index}>
                <div className="conteinerImg">
                  <img className="imagenCard" src={`http://localhost:8000/api/inmuebles/photo/${inmueble.id_inmueble}`}alt="" />
                  <span className="tipoOperacion">
                    {inmueble.tipo_operacion}
                  </span>
                </div>
                <div id="idContContenido" className="contContenido">
             
                  <p className="precio"> U$S{inmueble.precio.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
                  <hr />
                  <div className="especificaciones">
                    <p className="iconosP">
                      <FaBed className="icono"/>
                      {inmueble.dormitorio}
                    </p>
                    <p className="iconosP">
                      <FaBath className="icono" />
                      {inmueble.banio}
                    </p>
                    <p className="iconosP">
                      <FaRulerCombined className="icono" />
                      {inmueble.m2_terreno}m2
                    </p>
                  </div>
                  {/* <p ><span className="tipoInmuebleClass">Tipo: </span> */}
                  <div>
                  
                  {
                  inmueble.tipo_inmueble=='casa' &&  
                  (<p className="iconosP"><BsHouse className="icono"/>Casa</p>)
                  }
                  {
                  inmueble.tipo_inmueble=='apartamento' &&  
                  (<p className="iconosP"><BsBuilding className="icono"/>Apartamento</p>)
                  }
                  {
                   inmueble.tipo_inmueble=='terreno' &&  
                  (<p className="iconosP"><MdLandscape className="icono"/>Terreno</p>)
                  }
                  
                  <p className="iconosP"><HiOutlineLocationMarker className="icono"/>{inmueble.departamento}</p>
                  <Link to={`detalleInmueble/${inmueble.id_inmueble}`} className="linkCards">
                  <div className="masInformacion"><p >Más información</p><AiOutlineArrowRight className="iconoArrow"/> </div>
                  </Link>
                </div>
                {/* to={`PokemonProfile/${obj.nombre}`} */}
                  
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default DisplayCardsInmuebles;
