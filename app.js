const  Express  =require("express");
const Morgan =require("morgan");

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


module.exports= app