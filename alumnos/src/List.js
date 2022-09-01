import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Alumno from './Alumno'
function List(){

    const [dataalumnos, setdataalumnos]=useState([])
    useEffect(() => {
        axios.get('/api/alumnoo/obteneralumnoo').then(res=>{
            console.log(res.data)  
            setdataalumnos(res.data)     
         }).catch(err=>{
            console.log(err)
         })

    }, [])

//Mapear List en un objeto de 'alumnoo'
const list=dataalumnos.map((alumnoo, key)=>{
    return(
        <div>
            <Alumno alumnoo={alumnoo}/>
        </div>
    )
})

///-----------------------------------------------
    return (
        <div>
            <h2> Lista de alumnos</h2>
            {list}
        </div>
    )
}
export default List;