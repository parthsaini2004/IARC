import React from "react";
import "./MeetTeam.css";
import image1 from "./teamImages/image1.png";
import image2 from "./teamImages/image2.png";
import image3 from "./teamImages/image3.png";
import image4 from "./teamImages/image4.png";
import image5 from "./teamImages/image5.png";
import image6 from "./teamImages/image6.png";
import image7 from "./teamImages/image7.png";
import image8 from "./teamImages/image8.png";
import image9 from "./teamImages/image9.png";
import image10 from "./teamImages/image10.png";
import image11 from "./teamImages/image11.png";
import linked from "./teamImages/LinkedIn.png";
import insta from "./teamImages/Instagram.png";

export const MeetTeam = () => {
  return (
    <div>
      <div className="teamm">
        <p>Meet the Team</p>
        <div className="cardbox">
          <div className="teamCard">
            <img src={image1} />
            <nmc className="nameCard">
              <h2>Pawanhaari Mittal</h2>
              <h3>Secretary</h3>
              <h5>email</h5>
              <h5>+91 7728986489</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
        </div>

        <div className="cardbox">
          <div className="teamCard">
            <img src={image2} />
            <nmc className="nameCard">
              <h2>Sanya Singh</h2>
              <h3>Additional Secretary</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image3} />
            <nmc className="nameCard">
              <h2>Anand Seshadri</h2>
              <h3>Additional Secretary</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
        </div>

        <div className="cardbox">
          <div className="teamCard ">
            <img src={image4} />
            <nmc className="nameCard">
              <h2>Krishna Verma</h2>
              <h3>Joint Secretary (Operations)</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image5} />
            <nmc className="nameCard">
              <h2>Saurav Kumar</h2>
              <h3>Joint Secretary (Operations)</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image6} />
            <nmc className="nameCard">
              <h2>Shivam Ojha</h2>
              <h3>Joint Secretary (Editorial)</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image7} />
            <nmc className="nameCard">
              <h2>Abhinav Goyal</h2>
              <h3>Joint Secretary (Editorial)</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image8} />
            <nmc className="nameCard">
              <h2>Paridhi Jain</h2>
              <h3>Joint Secretary (Design)</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image9} />
            <nmc className="nameCard">
              <h2>Sagar Kharat</h2>
              <h3>Joint Secretary (Video Editing)</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
        </div>

        <div className="cardbox">
          <div className="teamCard">
            <img src={image10} />
            <nmc className="nameCard">
              <h2>Krishna Gupta</h2>
              <h3>Joint Secretary (Web-D)</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image11} />
            <nmc className="nameCard">
              <h2>Prachi Singh</h2>
              <h3>Joint Secretary (Web-D)</h3>
              <h5>email</h5>
              <h5>phone number</h5>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
        </div>
      </div>
    </div>
  );
};
