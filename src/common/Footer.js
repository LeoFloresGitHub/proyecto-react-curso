import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <nav className="nav justify-content-between bg-ligth " id="bgcolor">
    <div className="d-flex flex-column">
        <div id="espacio">
            <ul className="nav  ">

            <li className="nav-item">
                <a className="nav-link active  xd2" aria-current="page" href="#"> @Copyright 2022 Radiant Themes, All Rights Reserved.</a>
                </li>
            
                <ul className='nav xd'>
                <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">Terms & Condition</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#nosotros">Careers</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="#noticias">Privacy Policy</a>
                </li>
                </ul>

                
                
            </ul>
        </div>
        
    </div>
</nav>
    );
}

export default Footer;