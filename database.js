const  Mongoose =require("mongoose");


Mongoose
.connect("mongodb://localhost/emprendeapp")
.then((db)=>console.log("Conectado a MongoDB"))
.catch((err)=>console.log("MongoDB No se puede conectar"));


module.exports= Mongoose