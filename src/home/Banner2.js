import React from 'react';
import spon1 from '../assets/spon1.png'
import spon2 from '../assets/spon2.png'
import spon3 from '../assets/spon3.png'
import spon4 from '../assets/spon4.png'
import spon5 from '../assets/spon5.png'

import './Banner.css';

function Banner2(props) {
    return (
      
      
    <section id="scroll" className='padded colo'>
      <div className="container cj">
        
        <div className="row">
              <div className="col">
              <img src={spon1} />
              </div>
              <div className="col">
              <img src={spon2} />
              </div>
              <div className="col">
              <img src={spon3} />   
              </div>
              <div className="col">
              <img src={spon4} />   
              </div>
              <div className="col">
              <img src={spon5} />   
              </div>   
          </div>
      </div>
  </section>


    );
}

export default Banner2;