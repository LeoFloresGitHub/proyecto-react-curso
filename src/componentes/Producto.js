import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';
import noImagen from '../assets/no-imagen.jpg';


function Producto(props) {
    const [productos, setProductos] = useState([]);
    const [itemProducto, setItemProducto] = useState([]);
    useEffect(() => {
        //console.log(props.categoriaProducto);
        leerProductos(props.categoriaProducto);
    }, [props.categoriaProducto]);

    const leerProductos = (idcategoria) => {
        const rutaServicio = "https://progweb2fml.000webhostapp.com/keymoto/productos.php";

        var formData = new FormData();
        formData.append("caty", idcategoria);
        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProductos(data);
            })
    }

    const mostrarProductosTabla = () => {
        return (
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th className="text-end">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(item =>
                        <tr key={item.idproducto}>
                            <td>{item.idproducto}</td>
                            <td>{item.nombre}</td>
                            <td className="text-end">{parseFloat(item.precio).toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }


    const mostrarCuadriculaTabla = () => {
        return (
            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-2  g-4" id="cards-productos">
                {productos.map(item =>
                    <div className="col" key={item.idproducto}>
                        <div className="card">
                            <Link to={"/detalle/" + item.idproducto}>
                                <img src={item.imagenchica !== null ? "https://progweb2fml.000webhostapp.com/keymoto/fotos/" + item.imagenchica : noImagen} className="card-img-top" alt="..." />
                            </Link>
                            <div className={item.preciorebajado === "0" ? "sin-oferta" : "con-oferta"}>
                                {Math.round((1 - parseFloat(item.preciorebajado) / parseFloat(item.precio)) * 100)}%
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">{item.nombre}
                                    <i className="bi bi-eye-fill btnQuickView" onClick={(event) => seleccionarItem(event, item)} data-bs-toggle="modal" data-bs-target="#quickViewModal"></i></h6>
                                <p className="card-text">S/
                                    {item.preciorebajado === "0" ? parseFloat(item.precio).toFixed(2)
                                        : parseFloat(item.preciorebajado).toFixed(2)}
                                    <span className="precio-lista">
                                        {item.preciorebajado !== "0" ? " (S/." + parseFloat(item.precio).toFixed(2) + ")"
                                            : ""}
                                        <i className="bi bi-cart-plus-fill btnAgregarCarrito" title="Añadir al carrito"
                                            onClick={(event) => agregarCarrito(item)}></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    const agregarCarrito = (item) => {
        item.cantidad = "1";
        //console.log(item);
        let carrito = [];
        
        //console.log(carrito);
        if(localStorage.getItem("carrito")){
            carrito = JSON.parse(localStorage.getItem("carrito"));
            var index = -1;
            for(var i = 0; i< carrito.length; i++){
                var itemCarrito = carrito[i];
                if(item.idproducto === itemCarrito.idproducto){
                    index = i;
                    break;
                }
            }
            if(index === -1){
                carrito.push(item);
                localStorage.setItem("carrito",JSON.stringify(carrito));
            }
            else{
                let itemCarrito = carrito[index];
                itemCarrito.cantidad++;
                carrito[index] = itemCarrito;
                localStorage.setItem("carrito",JSON.stringify(carrito));
            }
        }
        else{
            carrito.push(item);
            localStorage.setItem("carrito",JSON.stringify(carrito));
        }
    }

    const seleccionarItem = (event, item) => {
        event.preventDefault();
        setItemProducto(item)
    }

    const mostrarModalQuickView = () => {
        return (
            <div className="modal fade" id="quickViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{itemProducto.nombre}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img src={"https://progweb2fml.000webhostapp.com/keymoto/fotos/" + itemProducto.imagenchica} className="img-fluid" alt="" />
                                </div>
                                <div className="col">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Stock</th>
                                                <td>{itemProducto.unidadesenexistencia}</td>
                                            </tr>
                                            <tr>
                                                <th>Detalle</th>
                                                <td>{itemProducto.detalle}</td>
                                            </tr>
                                            <tr>
                                                <th>Precio</th>
                                                <td>
                                                    S/
                                                    {itemProducto.preciorebajado === "0" ? parseFloat(itemProducto.precio).toFixed(2)
                                                        : parseFloat(itemProducto.preciorebajado).toFixed(2)}
                                                    <span className="precio-lista">
                                                        {itemProducto.preciorebajado !== "0" ? " (S/." + parseFloat(itemProducto.precio).toFixed(2) + ")"
                                                            : ""}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="bi bi-table"></i></button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="bi bi-grid-3x3-gap-fill"></i></button>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                {mostrarProductosTabla()}
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                {mostrarCuadriculaTabla()}
            </div>
        </div>
        {mostrarModalQuickView()}
      
    </div>
    );
}

export default Producto;