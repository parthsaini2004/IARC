import React from 'react';
import '../homepage/homepage.css';
import imgphotoh from '../homepage/himg.png';
import readmore from '../homepage/Frame 1421.png';
import Profileimg from './imgchar';

import seemore from '../homepage/seemore.png';
import pic1 from '../homepage/pic1.png';
import pic2 from '../homepage/pic2.png';
import pic3 from '../homepage/pic3.png';
import pic4 from '../homepage/pic4.png';
import pic5 from '../homepage/pic5.png';
import pic6 from '../homepage/pic6.png';
import pic7 from '../homepage/pic7.png';
import pic8 from '../homepage/pic8.png';
import pic9 from '../homepage/pic9.png';
import pic10 from '../homepage/pic10.png';
import pic11 from '../homepage/pic11.png';
import pic12 from '../homepage/pic12.png';
import pic13 from '../homepage/pic13.png';

import image1 from '../MeetTeam/teamImages/image1.png'
import image2 from '../MeetTeam/teamImages/image2.png'
import image3 from '../MeetTeam/teamImages/image3.png'
import othermem from './otherteam.png';
import linked from '../MeetTeam/teamImages/LinkedIn.png'
import insta from '../MeetTeam/teamImages/Instagram.png'









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
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active">
       
      <img src={imgphotoh} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imgphotoh}  className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imgphotoh}  className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}


<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imgphotoh} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imgphotoh} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imgphotoh}  className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    <div className="aboutus">
        <p>About Us</p>
        <div className='aboutustext center '>The Institute Alumni Relations Cell, affectionately referred to as IARC serves as a connecting bridge between the expansive alumni community and their alma mater, IIT Roorkee. Operating under the aegis of the Dean of Resources and Alumni Affairs (DORA), IIT Roorkee, IARC is dedicated to its mission of fostering and nurturing an enduring connection and relationship between our cherished alumni and their beloved alma mater. This bond is meticulously cultivated through a myriad of events and programmes that IARC conducts with unwavering dedication.</div>
        <div className="leftspace sizeread" ><a href="" ><img src={readmore} alt="" /></a></div>
    </div>


        <div className="galleryteamiarc">
          <p>Gallery</p>
          <div className="grouper">
              <Profileimg  imgphoto={pic1} />
              </div>
              <div className="grouper">
              <Profileimg  imgphoto={pic2} />
              <Profileimg  imgphoto={pic3} />
              </div>
              <div className="grouper">
              <Profileimg  imgphoto={pic4} />
              <Profileimg  imgphoto={pic5} />
              <Profileimg  imgphoto={pic6} />
              </div>
              <div className="grouper">
              <Profileimg  imgphoto={pic7} />
              <Profileimg  imgphoto={pic8} />
              <Profileimg  imgphoto={pic9} />
              <Profileimg  imgphoto={pic10} />
              </div>
              <div className="grouper">
               <Profileimg  imgphoto={pic11} />
               <Profileimg  imgphoto={pic12} />
               <Profileimg  imgphoto={pic13} />
               </div>
               <div className="leftspace sizeread" ><a href="" ><img src={seemore} alt="" /></a></div>


        </div>
        <div className="teamm">
        <p>Meet the Team</p>
        <div className="cardbox"><div className='teamCard'><img className='hmimg' src={image1} /><nmc className="nameCard namhm"><h2>Pawanhaari Mittal</h2><h3>Secretary</h3><h5>email</h5><h5>+91 7728986489</h5><conn><img src={linked} /><img src={insta}/></conn></nmc></div></div>

        <div className="cardbox hmcards"><div className='teamCard'><img className='hmimg' src={image2} /><nmc className="nameCard namhm"><h2>Sanya Singh</h2><h3>Additional Secretary</h3><h5>email</h5><h5>phone number</h5><conn><img src={linked} /><img src={insta}/></conn></nmc></div><div className='teamCard'><img className='hmimg' src={image3} /><nmc className="nameCard namhm"><h2>Anand Seshadri</h2><h3>Additional Secretary</h3><h5>email</h5><h5>phone number</h5><conn><img src={linked} /><img src={insta}/></conn></nmc></div></div>
        <div className="leftspace sizeread othermemm" ><a href="/team" ><img src={othermem} alt="" /></a></div>
        </div>


     </div>


      </>
    )
}

export default Homepage


