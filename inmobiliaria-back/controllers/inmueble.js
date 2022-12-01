const knex = require("../config/inmobiliariaRossi_DB");

exports.listaInmueble=(req,res)=>{
    knex("inmobiliariaRossi_DB").then((resultado)=>{
        res.json(resultado);
    }).catch((error)=>{
        res.status(400).json({error:error.message});
    });
};
exports.inmuebleNuevo  = async (req, res) => {
    const {
        tipo_operacion,
        tipo_inmueble,
        dormitorio,
        banio,    
        m2_terreno,
        m2_edificado,
        descripcion,
        precio, 
        garantia,
        departamento,
        barrio,
        direccion,

                } = req.body;
   
    
  try{
  
    await knex.transaction(async (trx) =>{
        const inmueble_nuevo =  await trx ('inmobiliariaRossi_DB')
        .insert({
        tipo_operacion:tipo_operacion,
        tipo_inmueble:tipo_inmueble,
        dormitorio:dormitorio,
        banio:banio,
        m2_terreno:m2_terreno,
        m2_edificado:m2_edificado,
        descripcion:descripcion,
        precio:precio,
        garantia:garantia
           
        }, 'id_inmueble');
  
    await trx ('ubicacion')
        .insert({
            direccion: direccion, 
            departamento: departamento,
            barrio:barrio ,
            id_inmueble: inmueble_nuevo[0].id_inmueble
        });
    } )
    
    res.json({
        mensaje: "El inmueble se ha ingresado correctamente" 
    })
  
  }  catch (error) {
    res.status(400).json({ error: error.message });
  
  }};
  exports.modificarInmueble  = async (req, res) => {
    const {
        tipo_operacion,
        tipo_inmueble,
        dormitorio,
        banio,    
        m2_terreno,
        m2_edificado,
        descripcion,
        precio, 
        garantia,
        departamento,
        barrio,
        direccion,
    } = req.body;
   
    const id = req.params.id;
    
  try{
  
    await knex.transaction(async (trx) =>{
        const inmueble_modificar =  await trx ('inmuebles')
        .where("inmuebles.id_inmueble", id)
        .update({
            tipo_operacion:tipo_operacion,
            tipo_inmueble:tipo_inmueble,
            dormitorio:dormitorio,
            banio:banio,
            m2_terreno:m2_terreno,
            m2_edificado:m2_edificado,
            descripcion:descripcion,
            precio:precio,
            garantia:garantia
           
        }, 'id_inmueble');
  
    await trx ('ubicaciones')
        .where("ubicaciones.id_inmueble", id)
        .update({
            direccion: direccion, 
            departamento: departamento,
            barrio:barrio,
            id_inmueble: inmueble_modificar[0].id_inmueble
        });
    } )
    
    res.json({
        mensaje: "El inmueble se ha modificado correctamente" 
    })
  
  }  catch (error) {
    res.status(400).json({ error: error.message });
  
  }}
  exports.eliminarInmueble  = async (req, res) => {
    const id = req.params.id;
    
  try{
  
    await knex.transaction(async (trx) =>{
        const inmueble_eliminar =  await trx ('ubicaciones')
        .where("ubicaciones.id_inmueble", id)
        .del('id_inmueble');
        
        await trx ('inmuebles')
        .where("inmuebles.id_inmueble", id)
        .del({
            id_inmueble: inmueble_eliminar[0].id_inmueble
        });
        
    } )
    
    res.json({
        mensaje: "El inmueble se ha eliminado correctamente" 
    })
  
  }  catch (error) {
    res.status(400).json({ error: error.message });
  
  }};
  