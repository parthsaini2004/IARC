import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgphotoh from "../homepage/himg.png";
import '../homepage/automatedcss.css';

// const imageSources = [
//   'path/to/image1.jpg',
//   'path/to/image2.jpg',
//   'path/to/image3.jpg'
// ];



const AutomatedCarousel = () => {
  return (
 <>
 
<div class="wrapper">
  <div id="carousel-slider" class="carousel slide carousel-fade" data-ride="carousel" data-interval="2000">

      <ol class="carousel-indicators">
        <li data-target="#carousel-slider" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-slider " id="margcenter" data-slide-to="1"></li>
        <li data-target="#carousel-slider" data-slide-to="2"></li>
      </ol>
 
      <div class="carousel-inner" role="listbox">

        <div class="carousel-item active">
          {/* <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide" /> */}
          <img class="d-block w-100" src={imgphotoh} alt="First slide" />
        </div>
      
        <div class="carousel-item ">
        <img class="d-block w-100" src={imgphotoh} alt="First slide" />
          {/* <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide" /> */}
        </div>

 
        <div class="carousel-item">
        <img class="d-block w-100" src={imgphotoh} alt="First slide" />
          {/* <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide" /> */}
        </div>

      </div>
    </div>
</div>
 </>
  );
};

export default AutomatedCarousel;