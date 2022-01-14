import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Login extends Component {
    render() {
        return (
            <div className="content-container">
                Bienvenidos a la Tarea de Selección
                <br />
                Autor: Joaquín Couyoumdjian | @jacouyoumdjian
                <br /><br />
                <br /><br />
                <button type="button" class="btn btn-secondary btn-lg">
                    <Link className="link" to="/home">Ir a GSheet</Link>
                </button>
            </div>
        );
    }
}

export default Login;