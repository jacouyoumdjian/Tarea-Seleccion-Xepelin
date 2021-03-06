import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
        username,
        password
        });
        setToken(token);
    };

    return (
        <div className="content-container">
            <div className='login-container'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label className='normal-text'>Usuario</label>
                        <input
                        className="form-control"
                        name="user"
                        placeholder="Ingrese un valor para usuario ..."
                        onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className='normal-text'>Contraseña</label>
                        <input type="password" 
                        className="form-control" 
                        name="password"
                        placeholder="Ingrese un valor para contraseña ..."
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='login-btn'>
                        <button type="submit" class="btn btn-primary btn-lg">Ingresar</button>
                    </div>
                </form>
            </div>
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
        </div>
    );
    
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }