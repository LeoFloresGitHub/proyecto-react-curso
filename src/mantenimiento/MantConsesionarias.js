import React, { useEffect, useState } from 'react';
import { ApiWebURL } from '../utils';

function MantConsesionarias(props) {
    const [concesionarias, setConcesionarias] = useState([]);
    const [cdconcesionaria, setCdconcesionaria] = useState('');
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [servicio, setServicio] = useState('');

    useEffect(() => {
        leerConcesionarias();
    }, []);
    const leerConcesionarias = (e) => {
        const rutaServicio = ApiWebURL + "concesionarias.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                setConcesionarias(data);
            })
    }

    const mostrarTabla = () => {
        return (
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Ciudad</th>
                        <th>Teléfono</th>
                        <th>Servicio</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {concesionarias.map(item =>
                        <tr key={item.cdconcesionaria}>
                            <td>{item.cdconcesionaria}</td>
                            <td>{item.nombre}</td>
                            <td>{item.direccion}</td>
                            <td>{item.ciudad}</td>
                            <td>{item.telefono}</td>
                            <td>{item.servicio}</td>
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
        setCdconcesionaria(item.cdconcesionaria);
        setNombre(item.nombre);
        setDireccion(item.direccion);
        setCiudad(item.ciudad);
        setTelefono(item.telefono);
        setServicio(item.servicio);
    }
    const borrarDatos = (item) => {
        setCdconcesionaria('');
        setNombre('');
        setDireccion('');
        setCiudad('');
        setTelefono('');
        setServicio('');
    }

    const contenidoFormulario = () => {
        return (
            <div className="modal-body">
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='cdconcesionaria' value={cdconcesionaria}
                        readOnly />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Nombre' value={nombre}
                        required
                        onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Direccion' value={direccion}
                        required
                        onChange={(event) => setDireccion(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Ciudad' value={ciudad}
                        required
                        onChange={(event) => setCiudad(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Telefono' value={telefono}
                        required
                        onChange={(event) => setTelefono(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Servicio' value={servicio}
                        required
                        onChange={(event) => setServicio(event.target.value)} />
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
                                <h5 className="modal-title" id="exampleModalLabel">Registrar Concesionaria</h5>
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
                                <h5 className="modal-title" id="exampleModalLabel">Actualizar Concesionaria</h5>
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
                                <h5 className="modal-title" id="exampleModalLabel">Eliminar Concesionaria</h5>
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
        const rutaServicio = ApiWebURL + "concesionariasinsertar.php";
        var formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("direccion", direccion);
        formData.append("ciudad", ciudad);
        formData.append("telefono", telefono);
        formData.append("servicio", servicio);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                alert("Se ha registrado la concesionaria " + nombre + " con el código " + data);
                leerConcesionarias();
            })
    }

    const actualizarFila = (event) => {
        event.preventDefault();
        document.querySelector("#updateModal .btn-close").click();

        const rutaServicio = ApiWebURL + "concesionariasactualizar.php";
        var formData = new FormData();
        formData.append("cdconcesionaria", cdconcesionaria);
        formData.append("nombre", nombre);
        formData.append("direccion", direccion);
        formData.append("ciudad", ciudad);
        formData.append("telefono", telefono);
        formData.append("servicio", servicio);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(() => {
                alert("Se ha actualizado la concesionaria " + nombre + " con el código " + cdconcesionaria);
                leerConcesionarias();
            })
    }

    const eliminarFila = (event) => {
        event.preventDefault();
        document.querySelector("#deleteModal .btn-close").click();

        const rutaServicio = ApiWebURL + "concesionariaseliminar.php";
        var formData = new FormData();
        formData.append("cdconcesionaria", cdconcesionaria);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(() => {
                alert("Se ha eliminado la categoría " + nombre + " con el código " + cdconcesionaria);
                leerConcesionarias();
            })
    }


    return (
        <>
            <section id="concesionarias" className='padded'>
                <div className="container">
                    <h1>Concesionarias</h1> <br></br>
                    <div className="mb-3">
                        <button className='btn btn-primary' type='button'
                            onClick={() => borrarDatos()}
                            data-bs-toggle="modal" data-bs-target="#insertModal">
                            Añadir concesionarias
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

export default MantConsesionarias;