import React from 'react';
//import Concesionarias from '../componentes/Concesionarias';
import Proveedores from '../componentes/Proveedores';
import Banner from './Banner';
import Banner2 from './Banner2';
//import Nosotros from './Nosotros';
//import Noticias from './Noticias';

function Inicio(props) {
    return (
        <>
            <Banner/>
            <Banner2/>
            <Proveedores/>
     
        </>
    );
}

export default Inicio;