import React, { useState, useContext, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login, Home, Edit, Dashboard, Preferences, useToken } from './components';
import { 
  BrowserRouter, 
  Routes,
  Route, 
  Link,
  useNavigate,
  useLocation, 
  Navigate} from "react-router-dom";

const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div className='body-container'>
        <div className='view-content'>
          <div className='view-title-container'>
              <br />
              <h1 className='title-text'>
              Tarea de Selección
              <br />
              Product Engineer - Xepelin
              </h1>
              <br />
              <p className='normal-text'>
                  Bienvenidos a la Tarea de Selección
                  <br />
                  Autor: Joaquín Couyoumdjian | @jacouyoumdjian
              </p>
              <br /><br />
          </div>
          <Login setToken={setToken} />
        </div>
    </div>
    )
  }
  
  return(
    <BrowserRouter>
      <div className='body-container'>
        <div className='view-content'>
          <div className='view-title-container'>
              <br />
              <h1 className='title-text'>
              Tarea de Selección
              <br />
              Product Engineer - Xepelin
              </h1>
              <br />
              <p className='normal-text'>
                  Bienvenidos a la Tarea de Selección
                  <br />
                  Autor: Joaquín Couyoumdjian | @jacouyoumdjian
              </p>
              <br /><br />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:rowIndex' element={<Edit />} />
          </Routes>
          {/* <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/preferences' element={<Preferences />} />
          </Routes> */}
        </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
