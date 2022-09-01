//comando: nodemon server.js
const express= require('express')
const app= express()

//Importar conexion a MongoDB
const archivoDB=require('./conexion')

//Importacion archivo rutas y modelo alumno
const rutaalumnoo=require('./rutas/alumnoo')

//Importacion body parser
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/alumnoo', rutaalumnoo)
app.get('/', (req,res)=>{
    res.end('Bienvenidos al servidor backend node.js.......')
})

//Configurar server basico

const PORT =process.env.PORT||5000;
app.listen(PORT, console.log('Conexion al servidor correctamente a ${PORT}'));