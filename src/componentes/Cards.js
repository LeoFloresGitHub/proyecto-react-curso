import React, { useEffect, useState } from 'react';
import './Proveedores.css';

function Cards(props) {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        leerCards();
    }, []);


    const leerCards = (e) => {
        const rutaServicio = "https://servicios.campus.pe/servicioproductostodos.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                setCards(data);
            })
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


    return (
        
    <section id="cards" className='padded color'>
    <div className="container">
        <h2 className='txt'>Productos</h2>
        <div className="row row-cols-1 row-cols-md-6 g-4" >
        {cards.map(item =>
                <div className="col " key={item.idproducto}>
                    <div className="card color ">
                    <img src={"https://servicios.campus.pe/" + item.imagenchica} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <h6>{item.detalle}</h6>
                            <small className="card-text"> S/ {parseFloat(item.precio).toFixed(2)} <i className="bi bi-cart-plus-fill btnAgregarCarrito bc" title="Añadir al carrito"
                                            onClick={(event) => agregarCarrito(item)}></i></small>
                            
                        </div>
                    </div>
                </div>
        )}
        </div>
    </div>
</section>
    );
}

export default Cards;