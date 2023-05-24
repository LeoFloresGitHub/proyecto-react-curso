import React, { useEffect, useState } from 'react';

function Modelos(props) {

    const [modelos, setModelos] = useState([]);
    useEffect(() => {
        leerModelos();
    }, []);

    const leerModelos = (e) => {
        const rutaServicio = "https://progweb2fml.000webhostapp.com/keymoto/modelos.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setModelos(data);
            })
    }


    return (
        <section id="modelos" className='padded'>
            <div className="container">
                <h1>Modelos  2022</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4" >
                {modelos.map(item =>
                        <div className="col" key={item.idmoto}>
                            <div className="card">
                                <img src={"https://progweb2fml.000webhostapp.com/keymoto/fotos/" + item.foto} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.marca}</h5>
                                    <p className="card-text">{item.nombre}</p>
                                </div>
                            </div>
                        </div>
                )}
                </div>
            </div>
        </section>
    );
}

export default Modelos;