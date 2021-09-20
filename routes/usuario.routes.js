const Router =require( "express")
const uController =require( "../controllers/usuarioController.js")
const ruta = Router();

//Todos
ruta.get("/listadoUsuarios",uController.listado)
//Uno
ruta.get("/unoUsuario/:id",uController.uno)
//Registrar
ruta.post("/registrarUsuario",uController.registrar)
//Editar
ruta.put("/editarUsuario/:id",uController.actualizar)
//Eliminar
ruta.delete("/eliminarUsuario/:id",uController.eliminar)

module.exports=ruta