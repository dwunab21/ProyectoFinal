const usuario =require( "../models/usuario.js")

const controlador={}

// Ver TODOS //

controlador.listado= async (req,res)=>{
    console.log("Ejecutando el FIND")
    const usuarios= await usuario.find()
    res.json(usuarios)

}

// Ver UNO //

controlador.uno= async (req,res)=>{
    console.log("Consulta individual")
    const unusuario= await usuario.findById(req.params.id)
    res.json(unusuario)
}

// REGISTRAR //

controlador.registrar= async (req,res)=>{
    const nuevousuario = new usuario(req.body)
    console.log(nuevousuario)
    await nuevousuario.save();
    res.send("Se creo nuevo usuario")
}
// ACTUALIZAR //

controlador.actualizar= async (req,res)=>{
    console.log("Actualizando el usuario")
    await usuario.findByIdAndUpdate(req.params.id,req.body)
    res.json({"status":"Usuario actualizado"})
}

// ELIMINAR //

controlador.eliminar= async (req,res)=>{
    console.log("Eliminación individual")
    await usuario.findByIdAndDelete(req.params.id)
    res.json({"status":"Usuario eliminado"})
}

controlador.autenticacion=(req,res)=>{
    //servicio de consulta en la base de datos para verificar usuario y contraseña
    if(req.body.usuario=="administrador" && req.body.clave=="123456"){
        //payload

        var datosToken={
            autenticado:true,
            email:"demo@gmail.com",
            nombre:"Juan Perez"
        }
        const token=jwt.sign(datosToken,llave.llavesecreta,{
            expiresIn:'1d'
        })

        res.json({
            mensaje:"Usuario autenticado",
            token:token
        })

    }else{
        res.status(404).send({mensaje:"usuario no encontrado"})
    }
}

module.exports= controlador