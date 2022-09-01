import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router'
import Swal from 'sweetalert2'
function Edit(){

    const navegar=useNavigate('')
    const params=useParams()
    //Hooks
    
    const [nombre, setNombre]=useState('')
    const [edad, setEdad]=useState('')
    const [carrera, setCarrera]=useState('')
    const [semestre, setSemestre]=useState('')
    const [promedio, setPromedio]=useState('')
    const [correo, setCorreo]=useState('')
    
    useEffect(()=>{
        axios.post('/api/alumnoo/obtenerdataalumno',{idAlumno:params.idAlumno}).then(res=>{
            console.log(res.data[0])
            const dataalumno =res.data[0]
            setNombre(dataalumno.nombre)
            setEdad(dataalumno.edad)
            setCarrera(dataalumno.carrera)
            setSemestre(dataalumno.semestre)
            setPromedio(dataalumno.promedio)
            setCorreo(dataalumno.correo)
        })
    }, [])

    //Funcion que actualiza al alumno
    function editarAlumno(){
        //Nuevo objeto para actualizar en usuario
        const actualizaralumno={
            nombre: nombre,
            edad: edad,
            carrera: carrera,
            semestre: semestre,
            promedio:promedio,
            correo: correo,
            idAlumno:params.idAlumno
        }

        //Peticion usando axios
        axios.post('/api/alumnoo/actualizaalumno', actualizaralumno)
        .then(res=>{
            console.log(res.data)
            Swal.fire('Listo!', 'El alumno se actualizo con exito')
            navegar('/')
        })
        .then(err=>{console.log(err)})

    }

    return (
        <div className="container">
        <div className="row">
            <h2 className="mt-4"> Editar alumno</h2>
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

                <button onClick={editarAlumno} className="btn btn-success">Guardar cambios</button>

            </div>
        </div>
    </div>
    )
}

export default Edit;
//<h3> El ID del usuario es: {params.idAlumno}</h3>