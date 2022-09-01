import axios from 'axios'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function Alumno({alumnoo}){
    //Variable para redirigir a inicio autonmaticamnte -09
    const navegar=useNavigate('')

    //Funcion para borrar usuario
    function borraralumno(idAlumno){
        axios.post('/api/alumnoo/borraralumno',{idAlumno:idAlumno}).then(res=>{
            console.log(res.data)
            Swal.fire('Listo!', 'El alumno se elimino con exito')
            navegar(0) //-09
        }).catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <ul className="list-group">
                        <h6> ID</h6>
                        <li className="list-group-item">{alumnoo.idAlumno}</li>
                        <h6> Nombre y apellido</h6>
                        <li className="list-group-item">{alumnoo.nombre}</li>
                        <h6> Edad</h6>
                        <li className="list-group-item">{alumnoo.edad}</li>
                        <h6> Carrera</h6>
                        <li className="list-group-item">{alumnoo.carrera}</li>
                        <h6> Semestre</h6>
                        <li className="list-group-item">{alumnoo.semestre}</li>
                        <h6> Promedio</h6>
                        <li className="list-group-item">{alumnoo.promedio}</li>
                        <h6> Correo</h6>
                        <li className="list-group-item">{alumnoo.correo}</li>
                    </ul>

                    <Link to={`/edit${alumnoo.idAlumno}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borraralumno(alumnoo.idAlumno)}}>Eliminar</button>
                    <hr className="mt-4"></hr>

                </div>
            </div>
        </div>
    )
}

export default Alumno;