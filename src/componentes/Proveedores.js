import React, { useEffect, useState } from 'react';
import './Proveedores.css';

function Proveedores(props) {
    const [proveedores, setProveedores] = useState([]);
    const [idproveedor, setIdProveedor] = useState('');
    const [nombre, setNombre] = useState('');
    const [cargo, setCargo] = useState('');
    const [nombrecon, setNombreCon] = useState('');
    const [pais, setPais] = useState('');
    const [telefono, setTel] = useState('');
    const [direccion, setDir] = useState('');



    useEffect(() => {
        leerProveedores();
    }, []);

    const leerProveedores = (e) => {
        const rutaServicio = "https://servicios.campus.pe/proveedores.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProveedores(data);
            })
    }


    const mostrarTabla = () => {
        return (
            <div className="container cont ">
                <h2 className='txt'>Proveedores</h2>
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Empresa</th>
                            <th>Contacto</th>
                            <th>Cargo</th>
                            <th>Dirección</th> 
                            
                            <th>Pais</th>
                            <th>Teléfono</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {proveedores.map(item =>
                            <tr key={item.idproveedor}>
                                <td>{item.nombreempresa}</td>
                                <td>{item.nombrecontacto}</td>
                                <td>{item.cargocontacto}</td>
                                <td>{item.direccion}</td>
                              
                                <td>{item.pais}</td>
                                <td>{item.telefono}</td>
                                <td><i className="bi bi-pencil-fill"  onClick={() => llenarDatos(item)}
                                data-bs-toggle="modal" data-bs-target="#updateModal"></i></td>
                                
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        )}

    const llenarDatos = (item) => {
        setIdProveedor(item.idproveedor);
        setNombre(item.nombreempresa);
        setNombreCon(item.nombrecontacto);
        setIdProveedor(item.direccion);
        setPais(item.pais);
        setCargo(item.cargocontacto);
        setTel(item.telefono);
        setDir(item.direccion);
        
    }

    
    
    
        const contForm = () => {
            return (
                <div className="modal-body">
                    
                    <div className="mb-3">
                        <p>Empresa:</p>
                        <input type="text" className='form-control' placeholder='idcategoria' value={nombre}
                            readOnly />
                    </div>
                    <div className="mb-3">
                        <p>Contacto:</p> 
                        <input type="text" className='form-control' placeholder='idcategoria' value={nombrecon}
                            readOnly />
                    </div>
                    <div className="mb-3">
                        <p>Cargo:</p>
                        <input type="text" className='form-control' placeholder='idcategoria' value={cargo}
                            readOnly />
                    </div>
                    <div className="mb-3">
                        <p>Dirección:</p>
                        <input type="text" className='form-control' placeholder='idcategoria' value={direccion}
                            readOnly />
                    </div>
                    <div className="mb-3">
                        <p>Pais:</p>
                        <input type="text" className='form-control' placeholder='idcategoria' value={pais}
                            readOnly />
                    </div>
                    <div className="mb-3">
                         <p>Teléfono:</p>
                        <input type="text" className='form-control' placeholder='idcategoria' value={telefono}
                            readOnly />
                    </div>
                </div>
            )
        }
        const mostrarUpdateModal = () => {
            return (
                
                <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Datos del proveedor seleccionado</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                {contForm()}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )




    }

    

    return (
        <>
        <section id="proveedores" className='padded color'>
            
        {mostrarTabla()}
        </section>
        {mostrarUpdateModal()}
        </>
    );
}

export default Proveedores;