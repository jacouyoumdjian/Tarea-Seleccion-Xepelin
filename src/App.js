import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title, Login, Home, Edit, useToken } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div className='body-container'>
        <div className='view-content'>
          <Title />
          <Login setToken={setToken} />
        </div>
    </div>
    )
  }
  
  return(
    <BrowserRouter>
      <div className='body-container'>
        <div className='view-content'>
          <Title />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:rowIndex' element={<Edit />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
