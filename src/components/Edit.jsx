import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import '../App.css';

const Edit = () => {
    const navigate = useNavigate();
    const { rowIndex } = useParams();
    const [data, setData] = useState({
        idOp: "",
        tasa: "",
        email: "",
    });
    // console.log(data);

    const getData = async () => {
        try {
          const resp = await fetch(
            `https://sheet.best/api/sheets/01308f80-15f5-4e4b-a97f-97ad35847e84/${rowIndex}`
          );
          const data = await resp.json();
          setData(data[0]);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

    const handleChange = (e) => setData({...data, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
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
            if (resp.ok) {
                navigate('/home');
              }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className="content-container">
            <h1>Editar tasa</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ingresar nueva tasa</label>
                    <input class="form-control" id="exampleInputPassword1" 
                    name="tasa"
                    value={data.tasa} 
                    onChange={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary">Editar tasa</button>
            </form>
        </div>
    );
    
}

export default Edit;