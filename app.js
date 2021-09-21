const  Express  =require("express");
const Morgan =require("morgan");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const RutasComercio =require("./routes/comercio.routes.js")
const RutasUsuario =require ("./routes/usuario.routes.js") 

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(Morgan('dev'))
app.use(RutasComercio)
app.use(RutasUsuario)
app.set('puerto', 3000)

//GET con parametros 
app.get("/",(req,res)=>{
    res.send("App Funcionando...");
})

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "APP Comercio",
        version: '1.0.0',
        description: '<h2>Geolocalización de comercios de emprendedores en el departamento de Chalatenango.</h2>',
      },
    },
    apis: ["./routes/*.js"] 
    

  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use('/Documentacion', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports= app