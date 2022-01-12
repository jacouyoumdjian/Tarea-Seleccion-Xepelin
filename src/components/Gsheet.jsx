import React, { useEffect, useState } from 'react';
import '../App.css';

const Gsheet = () => {
    const [data, setData] = useState();
    const getData = async () => {
        try {
            const resp = await fetch('https://sheet.best/api/sheets/3631d91e-8d10-4c7e-9d48-abf7c0b22d4b'
            );
            const data = await resp.json();
            setData(data);
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getData();
    })

    let dummyArray = [[100, 1.5, "jacouyoumdjian@gmail.com"], 
    [101, 1.3, "jacouyoumdjian@gmail.com"],
    [102, 0.7, "jacouyoumdjian@gmail.com"]];

    return (
        <div className="content-container">
            {dummyArray.map((item) =>
                <div className='cards-container'>
                    <div class="card">
                        <div class="card-header">
                            <p class="card-title">id Op: </p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-text">Tasa: </h5>
                            <h5 class="card-text">Email: </h5>
                            <a href="#" class="btn btn-primary">Editar tasa</a>
                        </div>
                    </div>
                    <br />
                </div>
            )};
        </div>
        
    );
    
}

export default Gsheet;