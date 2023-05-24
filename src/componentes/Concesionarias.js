import React, { useEffect, useState } from 'react';

function Concesionarias(props) {
    const [concesionarias, setConcesionarias] = useState([]);
    useEffect(() => {
        leerConcesionarias();
    }, []);

    const leerConcesionarias = (e) => {
        const rutaServicio = "https://progweb2fml.000webhostapp.com/keymoto/concesionarias.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setConcesionarias(data);
            })
    }

    return (
        <section id="concesionarias" className='padded'>
            <div className="container">
                <h1>Concesionarias</h1>
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Empresa</th>
                            <th>Dirección</th>
                            <th>Ubicación</th>
                            <th>Teléfono</th> 
                            <th>Servicio</th>
                        </tr>
                    </thead>
                    <tbody>
                    {concesionarias.map(item =>
                            <tr key={item.cdconcesionaria}>
                                <td>{item.nombre}</td>
                                <td>{item.direccion}</td>
                                <td>{item.ciudad}</td>
                                <td>{item.telefono}</td>
                                <td>{item.servicio}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Concesionarias;