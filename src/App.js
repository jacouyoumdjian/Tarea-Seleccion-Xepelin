import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login, Gsheet } from './components';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <div className='body-container'>
        <div className='view-content'>
          <br/>
          <br/>
          <div className='view-title-container'>
            <h2>
              Tarea de Selección - Product Engineer - Xepelin
            </h2>
          </div>
          <br/>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/gsheet' element={<Gsheet />} />
          </Routes>
          <br/>
          <br/>
          <br/>
        </div>
        <br/><br/>
        <br/><br/>
    </div>
    </BrowserRouter>
    );
}

export default App;
