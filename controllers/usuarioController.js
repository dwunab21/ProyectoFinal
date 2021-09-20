const usuario =require( "../models/usuario.js")

const controlador={}

// GET Ver TODOS //

controlador.listado= async (req,res)=>{
    console.log("Ejecutando el FIND")
    const usuarios= await usuario.find()
    res.json(usuarios)

}

// GET Ver UNO //

controlador.uno= async (req,res)=>{
    console.log("Consulta individual")
    const unusuario= await usuario.findById(req.params.id)
    res.json(unusuario)
}

// POST REGISTRAR //

controlador.registrar= async (req,res)=>{
    const nuevousuario = new usuario(req.body)
    console.log(nuevousuario)
    await nuevousuario.save();
    res.send("Se creo nuevo usuario")
}
// PUT ACTUALIZAR //

controlador.actualizar= async (req,res)=>{
    console.log("Actualizando el usuario")
    await usuario.findByIdAndUpdate(req.params.id,req.body)
    res.json({"status":"Usuario actualizado"})
}

// DELETE ELIMINAR //

controlador.eliminar= async (req,res)=>{
    console.log("Eliminación individual")
    await usuario.findByIdAndDelete(req.params.id)
    res.json({"status":"Usuario eliminado"})
}

module.exports= controlador