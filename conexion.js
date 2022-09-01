//Conexion a la base de datos
const mongoose = require('mongoose');

URI='mongodb+srv://vian:mvGUGrfU9XkLTCFD@cluster0.pwncghl.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

.then (db=> console.log('Base de datos conectada', db.connection.name))
.catch (error => console.log(error))
/*
mongoose.connect('mongodb://127.0.0.1:27017/crudMERN');

const objetobd=mongoose.connection

//Verificar si se conecta
objetobd.on ('connected', ()=>{console.log('Conexion correcta a MongoDB')})
objetobd.on ('error', ()=>{console.log('Error al correcta a MongoDB')})
*/
module.exports=mongoose