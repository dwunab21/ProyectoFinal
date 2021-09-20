const Router =require( "express")
const cController =require( "../controllers/comercioController.js")
const ruta = Router();

//Todos
ruta.get("/listadoComercios",cController.listado)
//Uno
ruta.get("/unoComercio/:id",cController.uno)
//Registrar
ruta.post("/registrarComercio",cController.registrar)
//Editar
ruta.put("/editarComercio/:id",cController.actualizar)
//Eliminar
ruta.delete("/eliminarComercio/:id",cController.eliminar)

module.exports=ruta