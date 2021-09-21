const Router =require( "express")
const uController =require( "../controllers/usuarioController.js")
const ruta = Router();

//Todos
ruta.get("/listadoUsuarios",uController.listado)

/**
 * @swagger
* /listadoUsuarios:
 *   get:
 *     tags: [Usuario]
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 */

//Uno
ruta.get("/unoUsuario/:id",uController.uno)

/**
 * @swagger
 * /unoUsuario/{id}:
 *   get:
 *     tags: [Usuario]
 *     description: Get all books
 *     parameters:
 *      - name: id
 *        Descripcion: Id del Usuario
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Success
 */

//Registrar
ruta.post("/registrarUsuario",uController.registrar)
/**
 * @swagger
 * /registrarUsuario:
 *   post:
 *     tags: [Usuario]
 *     description: Get all books
 *     parameters:
 *      - name: nombre
 *        Descripcion: Nombre del Usuario
 *        in: formData
 *        required: true
 *        type: string
 *      - name: apellido
 *        Descripcion: Apellido del Usuario
 *        in: formData
 *        required: true
 *        type: string
 *      - name: direccion
 *        Descripcion: Direccion del usuario
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */

//Editar
ruta.put("/editarUsuario/:id",uController.actualizar)
//Eliminar
ruta.delete("/eliminarUsuario/:id",uController.eliminar)
//Autenticacion Tokens
ruta.post("/autenticacion",uController.autenticacion)


module.exports=ruta