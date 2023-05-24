import React, { useEffect, useState } from 'react'
import './Proveedores.css';

export default function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        leerCarrito();
    }, []);

    const leerCarrito = async (carrito) => {
        var datosCarrito = await JSON.parse(localStorage.getItem("carrito"));
        console.log(datosCarrito)
        setCarrito(datosCarrito);
        //console.log(carrito)

        if (datosCarrito !== null) {
            let subTotales = datosCarrito.map(item =>
                item.precio * item.cantidad
            )
            console.log(subTotales)
            setTotal(subTotales.reduce((acumulador, a) => acumulador + a, 0))
            console.log(total)
        }
    }

    const vaciarCarrito = () => {
        localStorage.removeItem("carrito");
        setCarrito([]);
        setTotal(0);
    }

    const eliminarItem = (item) => {
        let carritoMenos = carrito.filter(itemCarrito => itemCarrito.idproducto !== item.idproducto)
        setCarrito(carritoMenos);
        localStorage.setItem("carrito",JSON.stringify(carritoMenos));
    }
    return (
        <section id="carrito" className='padded color'>
            <div className="container">
                <h2 className='txt2'>Carrito</h2>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th>Cod</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>



                                {carrito !== null ?
                                    carrito.map(item =>
                                        <tr key={item.idproducto}>
                                            <td>{item.idproducto}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.cantidad}</td>
                                            <td>S/ {parseFloat(item.precio * item.cantidad).toFixed(2)}</td>
                                            <td><i className="bi bi-x-lg" 
                                                onClick={() => eliminarItem(item)}></i></td>
                                        </tr>
                                    )
                                    : null
                                }



                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="4" className="text-end">Total</th>
                                    <th>S/ {parseFloat(total).toFixed(2)}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <button className='btn btn-danger'
                            onClick={() => vaciarCarrito()}
                        >Vaciar carrito</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
