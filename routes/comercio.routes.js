const Router =require( "express")
const cController =require( "../controllers/comercioController.js")
const middleware =require("../middleware/verificacion.js")
const ruta = Router();


//Todos

/**
 * @swagger
 * /listadoComercios:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */
ruta.get("/listadoComercios",cController.listado)

//Uno

/**
 * @swagger
 * /unoComercio/{id}:
 *   get:
 *     description: Get all books
 *     parameters:
 *      - name: id
 *        Descripcion: Id del Usuario
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
ruta.get("/unoComercio/:id",cController.uno)

//Registrar

/**
 * @swagger
 * /registrarComercio:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - name: nombre
 *        Descripcion: Nombre del Comercio
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
ruta.post("/registrarComercio",middleware,cController.registrar)
//Editar
ruta.put("/editarComercio/:id",cController.actualizar)
//Eliminar
ruta.delete("/eliminarComercio/:id",cController.eliminar)

module.exports=ruta