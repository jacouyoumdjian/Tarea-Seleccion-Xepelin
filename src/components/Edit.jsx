import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import '../App.css';

const Edit = () => {
    const { rowIndex } = useParams();
    const [data, setData] = useState({
        name: "",
    });
    console.log(data);

    const handleChange = (e) => setData({...data, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        console.log(e)
        e.preventDefault();
        try {
            const resp = await fetch(
                `https://sheet.best/api/sheets/01308f80-15f5-4e4b-a97f-97ad35847e84/${rowIndex}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="content-container">
            <h1>Editar tasa</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ingresar nueva tasa</label>
                    <input class="form-control" id="exampleInputPassword1" 
                    value={data.tasa} onChange={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary">cambiar con link</button>
            </form>
        </div>
        
    );
    
}

export default Edit;