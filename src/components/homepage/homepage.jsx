import React from 'react';
import '../homepage/homepage.css';
import imgphotoh from '../homepage/himg.png';
import readmore from '../homepage/Frame 1421.png';
const Homepage = () => {
    return (
        <>
        <div className="homepage" id="homepage">

        {/* <div id="my-carousel" className='carousel slide' data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
            <div className='container'>
                <h1>example </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima placeat facere eius necessitatibus aperiam cupiditate repellendus suscipit sint doloribus? Totam omnis id, culpa fugit similique magni delectus maxime tenetur.</p>
            <a href="" className='btn btn-lg btn-primary '>
                sign up today
            </a>
            </div>

                    </div>
                <div className="carousel-item">
            <div className='container'>
                <h1>example wrgAGAERTGAERTGARF</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima placeat facere eius necessitatibus aperiam cupiditate repellendus suscipit sint doloribus? Totam omnis id, culpa fugit similique magni delectus maxime tenetur.</p>
            <a href="" className='btn btn-lg btn-primary '>
                sign up today
            </a>
            </div>

                    </div>
            </div>
        </div>
            */}




{/*             
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
       
      <img src={imgphotoh} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={imgphotoh}  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={imgphotoh}  class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={imgphotoh} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={imgphotoh} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={imgphotoh}  class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    <div className="aboutus">
        <p>About Us</p>
        <div className='aboutustext center'>The Institute Alumni Relations Cell, affectionately referred to as IARC serves as a connecting bridge between the expansive alumni community and their alma mater, IIT Roorkee. Operating under the aegis of the Dean of Resources and Alumni Affairs (DORA), IIT Roorkee, IARC is dedicated to its mission of fostering and nurturing an enduring connection and relationship between our cherished alumni and their beloved alma mater. This bond is meticulously cultivated through a myriad of events and programmes that IARC conducts with unwavering dedication.</div>
        <div className="leftspace" ><a href=""><img src={readmore} alt="" /></a></div>
    </div>

        


        </div>

      

      </>
    )
}

export default Homepage


