import './MainHeader.css';
import logo from '../assets/logo.PNG';
import React from 'react';
import { Link } from 'react-router-dom';

function MainHeader(props) {
    return (
        <div >
           <nav class="navbar navbar-expand-lg cont">
  <div class="container-fluid cont">
  <Link className="navbar-brand" to='/'><img src={logo}/></Link>
    
    <div class="collapse navbar-collapse centro " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 red">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/cards">Cards</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/carrito">Carrito</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Portafolio
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      </div>
  
        <button class="button" type="submit">Free Consultation</button>
     
    
  </div>
</nav>
        </div>
    );
}

export default MainHeader;