
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Producto from './Producto';

function Tienda(props) {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
    useEffect(() => {
        leerCategorias();
    }, []);

    const leerCategorias = async(e) => {
        const rutaServicio = "https://progweb2fml.000webhostapp.com/keymoto/categorias.php";
    
        await axios.get(rutaServicio)
        .then((result) => {
            setCategorias(result.data);
        })

        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCategorias(data);
                console.log(data);
            })
    }

    const mostrarCategorias = () => {
        return (
            <ul className="list-group" id="lista-categorias">
                {categorias.map(item =>
                    <li className="list-group-item" key={item.idcategoria}
                        onClick={(event) => seleccionarCategoria(item, event)}>
                        <h5>{item.nombre}</h5>
                        <small>{item.descripcion}</small>
                    </li>
                )}
            </ul>
        )
    }

    const seleccionarCategoria = (item, event) => {
        event.preventDefault();//Para evitar que propaguen mas eventos
        setCategoriaSeleccionada(item);
        
        var itemLista = document.querySelectorAll("#lista-categorias li");
        itemLista.forEach((item) => {
            item.classList.remove("active");
        })

        event.currentTarget.classList.add("active");
        //event.currentTarget hace referencia al objeto que recibió el evento
    }
    return (
        <section id="tienda" className='padded'>
            <div className="container">
                <h1>Tienda de accesorios</h1>
                <br></br>
                <div className="row">
                    <div className="col-md-3">
                        {mostrarCategorias()}
                    </div>
                    <div className="col-md-9">
                        <h3>{categoriaSeleccionada.nombre}</h3>
                        <p>{categoriaSeleccionada.descripcion}</p>
                        <Producto categoriaProducto = {categoriaSeleccionada.idcategoria != null 
                            ? categoriaSeleccionada.idcategoria: 0 } />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Tienda;