const Router =require( "express")
const cController =require( "../controllers/comercioController.js")
const middleware =require("../middleware/verificacion.js")
const ruta = Router();



//Todos
ruta.get("/listadoComercios",cController.listado)

/**
 * @swagger
 * /listadoComercios:
 *   get:
 *     tags: [Comercio]
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */

//Uno
ruta.get("/unoComercio/:id",cController.uno)

/**
 * @swagger
 * /unoComercio/{id}:
 *   get:
 *     tags: [Comercio]
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

//Registrar
ruta.post("/registrarComercio",middleware,cController.registrar)

/**
 * @swagger
 * /registrarComercio:
 *   post:
 *     tags: [Comercio]
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

//Editar
ruta.put("/editarComercio/:id",cController.actualizar)
//Eliminar
ruta.delete("/eliminarComercio/:id",cController.eliminar)

module.exports=ruta