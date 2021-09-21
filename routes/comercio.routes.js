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
 *     description: <h2>Muestra el listado de comercios registrados</h2>
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
 *     description: <h2>Solicita un ID de un comercio registrado</h2>
 *     parameters:
 *      - name: id
 *        Descripcion: Id del Usuario
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Success
 */

//Registrar
ruta.post("/registrarComercio",middleware,cController.registrar)

/**
 * @swagger
 * /registrarComercio:
 *   post:
 *     tags: [Comercio]
 *     description: <h2>Registra los datos de un nuevo comercio</h2>
 *     parameters:
 *      - name: nombre
 *        Descripcion: Nombre del Comercio
 *        in: formData
 *        required: true
 *        type: string
 *      - name: direccion
 *        Descripcion: Nombre del Comercio
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Created
 */

//Editar
ruta.put("/editarComercio/:id",cController.actualizar)

/**
 * @swagger
 * /editarComercio/{id}:
 *   put:
 *     tags: [Comercio]
 *     description: <h2>Actulizacion de comercio por ID</h2>
 *     parameters:
 *      - name: id
 *        Descripcion: Id del Usuario
 *        in: path
 *        required: true
 *        type: string
 *      - name: nombre
 *        Descripcion: Nombre del Usuario
 *        in: formData
 *        required: true
 *        type: string
 *      - name: direccion
 *        Descripcion: Apellido del Usuario
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Success
 */
//Eliminar
ruta.delete("/eliminarComercio/:id",cController.eliminar)

/**
 * @swagger
 * /eliminarComercio/{id}:
 *   delete:
 *     tags: [Comercio]
 *     description: <h2>Elimina un comercio por ID</h2>
 *     parameters:
 *      - name: id
 *        Descripcion: Id del Usuario
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Success
 */

module.exports=ruta