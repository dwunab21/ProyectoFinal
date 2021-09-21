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
 *     description: <h2>Muestra el listado de usuarios registrados</h2>
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
 *     description: <h2>Solicita un ID de un usuario registrado</h2>
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
ruta.post("/registrarUsuario",uController.registrar)

/**
 * @swagger
 * /registrarUsuario:
 *   post:
 *     tags: [Usuario]
 *     description: <h2>Registra los datos de un nuevo usuario</h2>
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
 *       200:
 *         description: Created
 */

//Editar
ruta.put("/editarUsuario/:id",uController.actualizar)

/**
 * @swagger
 * /editarUsuario/{id}:
 *   put:
 *     tags: [Usuario]
 *     description: <h2>Actulizacion de usuario por ID</h2>
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
 *       200:
 *         description: Success
 */

//Eliminar
ruta.delete("/eliminarUsuario/:id",uController.eliminar)

/**
 * @swagger
 * /eliminarUsuario/{id}:
 *   delete:
 *     tags: [Usuario]
 *     description: <h2>Elimina un usuario por ID</h2>
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

//Autenticacion Tokens
ruta.post("/autenticacion",uController.autenticacion)


module.exports=ruta