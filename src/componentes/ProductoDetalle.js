import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiWebURL } from '../utils';
import './Productos.css';

function ProductoDetalle(props) {
    const [data, setData] = useState([]);

    let params = useParams();
    console.log(params);

    useEffect(() => {
        leerProducto();   
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const leerProducto = async() => {
        const rutaServicio = ApiWebURL + "productosmaestro.php?idproducto=" + params.idproducto;
        const response = await fetch(rutaServicio);
        const result = await response.json();
        setData(result);
    }

    return (
        <section id="producto-detalle" className='padded'>
            <div className="container">
                {data.map(item =>
                    <div key={item.idproducto}>
                        <h1>{item.nombre}</h1>
                        <div className="row">
                            <div className="col">
                                <img src="" className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Stock</th>
                                            <td className='chico'>{item.unidadesenexistencia}</td>
                                        </tr>
                                        <tr>
                                            <th>Detalle</th>
                                            <td className='chico'>{item.detalle}</td>
                                        </tr>
                                        <tr>
                                            <th>Precio</th>
                                            <td className='chico'>
                                                S/ {item.precio}</td>

                                        </tr>
                                        <tr>
                                            <th >Descripcion</th>
                                            <td className='chico'><div dangerouslySetInnerHTML={{__html: item.descripcion}}></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductoDetalle;