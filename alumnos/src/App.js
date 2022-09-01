//Nota: -fluid para descentrar

import logo from './logo.svg';
import './App.css';
import List from './List';  //Alumno individual adentro
import Create from './Create';
import Edit from './Edit';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container"> 
          <a className="navbar-brand" href="/">UACJ Alumnos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="create">Agregar alumno</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <BrowserRouter>
        <Routes>
            <Route path='/' element ={<List/>}exact ></Route>
            <Route path='/create' element ={<Create/>}exact></Route>
            <Route path='/edit:idAlumno' element ={<Edit/>}exact></Route>
            
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
