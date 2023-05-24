import logo from './logo.svg';

import './App.css';

import Footer from './common/Footer';
import MainHeader from './common/MainHeader';

import Inicio from './home/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modelos from './componentes/Modelos';
import Concesionarias from './componentes/Concesionarias';
import Tienda from './componentes/Tienda';
import ProductoDetalle from './componentes/ProductoDetalle';
import Categorias from './mantenimiento/Categorias';
import MantConsesionarias from './mantenimiento/MantConsesionarias';
import Cards from './componentes/Cards';
import Carrito from './componentes/Carrito';

function App() {
  return (
    <BrowserRouter>
    <MainHeader/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/modelos' element={<Modelos/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/consesionarias' element={<Concesionarias/>}/>
      <Route path='/tienda' element={<Tienda/>}/>
      <Route path='/categorias' element={<Categorias />} />
      <Route path='/carrito' element={<Carrito />} />
      <Route path='/detalle/:idproducto' element={<ProductoDetalle/>} />
      <Route path='/mantcsr' element={<MantConsesionarias />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    
  );
}

export default App;
