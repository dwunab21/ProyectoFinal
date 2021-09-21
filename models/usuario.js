const  Mongoose  =require( "mongoose");



const usuarioScheme= Mongoose.Schema({

    nombre:{type:String,requierd:true},
    apellido:{type:String,requierd:true},
    direccion:{type:String,requierd:true}
    


})

module.exports= Mongoose.model('Usuario',usuarioScheme)