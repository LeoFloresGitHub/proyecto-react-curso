import React, { useEffect, useState } from 'react';
import { ApiWebURL } from '../utils';

function Categorias(props) {
    const [categorias, setCategorias] = useState([]);
    const [idcategoria, setIdcategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        leerCategorias();
    }, []);
    const leerCategorias = (e) => {
        const rutaServicio = ApiWebURL + "categorias.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                setCategorias(data);
            })
    }

    const mostrarTabla = () => {
        return (
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map(item =>
                        <tr key={item.idcategoria}>
                            <td>{item.idcategoria}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td><i className="bi bi-pencil-fill" onClick={() => llenarDatos(item)}
                                data-bs-toggle="modal" data-bs-target="#updateModal"></i></td>
                            <td><i className="bi bi-x-lg" onClick={() => llenarDatos(item)}
                                data-bs-toggle="modal" data-bs-target="#deleteModal"></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const llenarDatos = (item) => {
        setIdcategoria(item.idcategoria);
        setNombre(item.nombre);
        setDescripcion(item.descripcion);
    }
    const borrarDatos = (item) => {
        setIdcategoria('');
        setNombre('');
        setDescripcion('');
    }

    const contenidoFormulario = () => {
        return (
            <div className="modal-body">
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='idcategoria' value={idcategoria}
                        readOnly />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Nombre' value={nombre}
                        required
                        onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Descripción' value={descripcion}
                        required
                        onChange={(event) => setDescripcion(event.target.value)} />
                </div>
            </div>
        )
    }

    const mostrarInsertModal = () => {
        return (
            <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(event) => insertarFila(event)}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Registrar categoría</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {contenidoFormulario()}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const mostrarUpdateModal = () => {
        return (
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(event) => actualizarFila(event)}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Actualizar categoría</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {contenidoFormulario()}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const mostrarDeleteModal = () => {
        return (
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(event) => eliminarFila(event)}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Eliminar categoría</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ¿Está seguro que desea eliminar {nombre}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const insertarFila = (event) => {
        event.preventDefault();
        document.querySelector("#insertModal .btn-close").click();
        //console.log(nombre + "----" + descripcion );
        const rutaServicio = ApiWebURL + "categoriasinsertar.php";
        var formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                alert("Se ha registrado la categoría " + nombre + " con el código " + data);
                leerCategorias();
            })
    }

    const actualizarFila = (event) => {
        event.preventDefault();
        document.querySelector("#updateModal .btn-close").click();

        const rutaServicio = ApiWebURL + "categoriasactualizar.php";
        var formData = new FormData();
        formData.append("idcategoria", idcategoria);
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(() => {
                alert("Se ha actualizado la categoría " + nombre + " con el código " + idcategoria);
                leerCategorias();
            })
    }

    const eliminarFila = (event) => {
        event.preventDefault();
        document.querySelector("#deleteModal .btn-close").click();

        const rutaServicio = ApiWebURL + "categoriaseliminar.php";
        var formData = new FormData();
        formData.append("idcategoria", idcategoria);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(() => {
                alert("Se ha eliminado la categoría " + nombre + " con el código " + idcategoria);
                leerCategorias();
            })
    }


    return (
        <>
            <section id="categorias" className='padded'>
                <div className="container">
                    <h2>Categorías</h2>
                    <div className="mb-3">
                        <button className='btn btn-primary' type='button'
                            onClick={() => borrarDatos()}
                            data-bs-toggle="modal" data-bs-target="#insertModal">
                            Añadir categoría
                        </button>
                    </div>

                    {mostrarTabla()}


                </div>
            </section>
            {mostrarInsertModal()}
            {mostrarUpdateModal()}
            {mostrarDeleteModal()}
        </>
    );
}   

export default Categorias;