import React from 'react';
import casco from '../assets/casco.png';
import guantes from '../assets/guantes.png';
import licencia from '../assets/licencia.png';
import './Noticias.css';


function Noticias(props) {
    return (
        <section id="noticias" className='padded'>
            <div className="container">
                <h1>Noticias</h1>
                <div className="row">
                    <div className="col">
                        <div class="card" >
                    <   img src={casco} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <p class="card-text">La importancia de usar casco nos puede evitar que un accidente pueda terminar en una tragedia, es muy importante ...</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" >
                    <   img src={guantes} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <p class="card-text">La protección al manejar una motocicleta no solo basta con tener un casco, también es vital portar guantes, rodilleras ...</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" >
                    <   img src={licencia} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <p class="card-text">Recuerden hermanos motociclistas que ahora nuestras licencias ya estan registradas por el MTC, asi que si tú lo sacaste de manera dudosa...</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Noticias;