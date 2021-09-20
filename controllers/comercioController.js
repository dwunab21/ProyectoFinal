const comercio =require( "../models/comercio.js")

const controlador={}

// GET Ver TODOS //

controlador.listado= async (req,res)=>{
    console.log("Ejecutando el FIND")
    const comercios= await comercio.find()
    res.json(comercios)

}

// GET Ver UNO //

controlador.uno= async (req,res)=>{
    console.log("Consulta individual")
    await comercio.findById(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(err));
    
}

// POST REGISTRAR //

controlador.registrar= async (req,res)=>{
    const nuevocomercio = new comercio(req.body)
    console.log(nuevocomercio)
    await nuevocomercio.save();
    res.send("Se creo nuevo comercio")
}
// PUT ACTUALIZAR //

controlador.actualizar= async (req,res)=>{
    console.log("Actualizando un comercio")
    await comercio.findByIdAndUpdate(req.params.id,req.body)
    res.json({"status":"Comercio actualizado"})
}

// DELETE ELIMINAR //

controlador.eliminar= async (req,res)=>{
    console.log("Eliminación individual")
    await comercio.findByIdAndDelete(req.params.id)
    res.json({"status":"Comercio eliminado"})
}

module.exports= controlador