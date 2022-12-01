const express = require('express');
const router = express.Router();
const {
    listaInmueble,
    inmuebleNuevo,
    modificarInmueble,
    eliminarInmueble,
    
  } = require("../controllers/inmueble");
  const  verifyToken = require("../validators/auth");
  const {verifyPerfil,verifyPerfil2} = require ("../validators/perfil")
 
  router.get("/inmueble/listaInmueble",verifyToken, verifyPerfil, verifyPerfil2, listaInmueble);
  
  router.post("/inmueble/nuevo",verifyToken, verifyPerfil, verifyPerfil2, inmuebleNuevo);
  
  router.put("/inmueble/modificar",verifyToken,verifyPerfil, verifyPerfil2, modificarInmueble)
  
  router.delete("/inmueble/eliminar/:id",verifyPerfil , verifyPerfil2, eliminarInmueble)
 

  
  
  module.exports = router;
