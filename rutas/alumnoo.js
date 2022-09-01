//Base de datos
//Nota: Verificar el tipo de dato de promedio y edad
const express= require('express')
const router= express.Router()

const mongoose=require('mongoose')
const eschema= mongoose.Schema

const eschemaalumno= new eschema({
    nombre: String,
    edad: String,
    carrera: String,
    semestre: String,
    promedio: String,
    correo: String,
    idAlumno: String
})
const ModeloAlumno=mongoose.model('alumnoos',eschemaalumno)
module.exports=router

/* Ruta de prueba
router.get('/ejemplo',(req,res)=>{
    res.end('Saludos, si carga desde ruta ejemplo')
})*/

//Ruta para agregar un alumno
router.post('/createUser', (req, res)=>{
    const nuevoalumno=new ModeloAlumno({
        nombre:req.body.nombre,
        edad:req.body.edad,
        carrera:req.body.carrera,
        semestre:req.body.semestre,
        promedio:req.body.promedio,
        correo:req.body.correo,
        idAlumno:req.body.idAlumno
    })
    nuevoalumno.save(function(err){
        if(!err){
            res.send('Alumno registrado correctamente')
        }
        else{
            res.send(err)
        }
    })
})


//Obtener todos los alumnos
router.get('/obteneralumnoo',(req,res)=>{
    ModeloAlumno.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

//Obtener datos de alumno
router.post('/obtenerdataalumno',(req,res)=>{
    ModeloAlumno.find({idAlumno:req.body.idAlumno},function(docs,err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

//Ruta para actualizar un alumno
router.post('/actualizaalumno', (req, res)=>{
    ModeloAlumno.findOneAndUpdate({idAlumno:req.body.idAlumno},{
        nombre:req.body.nombre,
        edad:req.body.edad,
        carrera:req.body.carrera,
        semestre:req.body.semestre,
        promedio:req.body.promedio,
        correo:req.body.correo,
    }, (err)=>{
        if(!err){
            res.send('Alumno actualizado correctamente')
        }
        else{
            res.send(err)
        }
    })
})

//Ruta para borrar un alumno
router.post('/borraralumno', (req, res)=>{
    ModeloAlumno.findOneAndDelete({idAlumno:req.body.idAlumno}, (err) =>{
        if(!err){
            res.send('Alumno borrado correctamente')
        }
        else{
            res.send(err)
        }
    })
})
