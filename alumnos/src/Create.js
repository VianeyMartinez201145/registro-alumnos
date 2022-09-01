import React,{useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Create(){ 
    const navegar=useNavigate('')
    //Hooks
    const [nombre, setNombre]=useState('')
    const [edad, setEdad]=useState('')
    const [carrera, setCarrera]=useState('')
    const [semestre, setSemestre]=useState('')
    const [promedio, setPromedio]=useState('')
    const [correo, setCorreo]=useState('')

    function agregarAlumno(){
        var alumnoo={
            nombre: nombre,
            edad: edad,
            carrera: carrera,
            semestre: semestre,
            promedio:promedio,
            correo: correo,
            idAlumno:uniquid()
        }
        console.log(alumnoo)
        
        axios.post('/api/alumnoo/createUser', alumnoo)
        .then(res=>{
            //alert(res.data)
            Swal.fire('Listo!', 'El alumno se creo con exito')
            navegar('/') //-09
            
        })
        .then(err=>{console.log(err)})
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="mt-4"> Agregar un nuevo alumno</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e)=>{setNombre
                        (e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="edad" className="form-label">Edad</label>
                        <input type="text" className="form-control" value={edad} 
                        onChange={(e)=>{setEdad (e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="carrera" className="form-label">Carrera</label>
                        <input type="text" className="form-control" value={carrera} 
                        onChange={(e)=>{setCarrera(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="semestre" className="form-label">Número de semestre</label>
                        <input type="text" className="form-control" value={semestre} 
                        onChange={(e)=>{setSemestre(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="promedio" className="form-label">Promedio general</label>
                        <input type="text" className="form-control" value={promedio} 
                        onChange={(e)=>{setPromedio(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo</label>
                        <input type="string" className="form-control" value={correo} 
                        onChange={(e)=>{setCorreo(e.target.value)}}></input>
                    </div>

                    <button onClick={agregarAlumno} className="btn btn-success">Guardar</button>

                </div>
            </div>
        </div>
    )
}

export default Create;