const express = require('express');
const router = express.Router();
const {
    listaInmueble,
    listaInmuebleBuscar,
    inmuebleNuevo,
    modificarInmueble,
    eliminarInmueble,
    filtrarInmueble,
    photo,
    buscarById,
    infoInmueble,
    
  } = require("../controllers/inmuebleController");

  
  router.get("/inmuebles/listainmueblebuscar", listaInmuebleBuscar);

  router.post("/inmuebles/listainmueblebuscar/filtrar", filtrarInmueble);

 
   router.get("/inmuebles/listaInmueble", listaInmueble);

   router.get("/inmuebles/photo/:id", photo);

   router.get("/inmuebles/buscar/:id", buscarById);
   router.get("/inmuebles/infoInmueble", infoInmueble);

  
  router.post("/inmuebles/nuevo",  inmuebleNuevo);
  
  router.put("/inmuebles/modificar/:id", modificarInmueble)
  
  router.delete("/inmuebles/eliminar/:id", eliminarInmueble)
 

  
  
  module.exports = router;
