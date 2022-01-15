import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const Home = () => {
    const [data, setData] = useState();

    // const getData = async () => {
    //     try {
    //         const resp = await fetch(
    //             "https://sheet.best/api/sheets/01308f80-15f5-4e4b-a97f-97ad35847e84"
    //         );
    //         const data = await resp.json();
    //         setData(data);
    //         console.log(data[0].idOp)

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div className="content-container">
            {data?.map((item, i) =>
                <div className='cards-container'>
                    <div class="card" key={i}>
                        <div class="card-header">
                            <p class="card-title">id Op: {item.idOp}</p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-text">Tasa: {item.tasa}</h5>
                            <h5 class="card-text">Email: {item.email}</h5>
                            <span type="button" class="btn btn-warning">
                                <Link className="link" to={`/edit/${i}`}>
                                    Editar tasa
                                </Link>
                            </span>
                        </div>
                    </div>
                    <br />
                </div>
            )}
        </div>
        
    );
    
}

export default Home;