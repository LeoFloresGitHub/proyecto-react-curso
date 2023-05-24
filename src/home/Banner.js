import React from 'react';
import slide1 from '../assets/banner.png'
import slide2 from '../assets/bannerr.png'
import './Banner.css';



function Banner(props) {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
              
          <img src={slide1} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
                            <h3 className='chic' >BOOST YOUR BUSINESS</h3>
                            <p id="bkm">How To Easily Start Your Online Business</p>
                            <h3 className='chit'>Posuere semper ut donec vel. Ut egestas sit dui placerat volutpat consequat hac mattis.</h3>
                            <button class="button" type="submit">Discover more</button>
                        </div>

          
          </div>
          <div class="carousel-item">
          <img src={slide2} className="d-block w-100 opa" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
                            <h3 className='chic' >BOOST YOUR BUSINESS</h3>
                            <p id="bkm">How To Easily Start Your Online Business</p>
                            <h3 className='chit'>Posuere semper ut donec vel. Ut egestas sit dui placerat volutpat consequat hac mattis.</h3>
                            <button class="button" type="submit">Discover more</button>
                        </div>
          

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Banner;