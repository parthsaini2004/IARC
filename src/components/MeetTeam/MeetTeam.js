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
              <name>Pawanhaari Mittal</name>
              <por>Secretary</por>
              <contact>email</contact>
              <contact>+91 7728986489</contact>
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
              <name>Sanya Singh</name>
              <por>Additional Secretary</por>
              <contact>email</contact>
              <contact>phone number</contact>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image3} />
            <nmc className="nameCard">
              <name>Anand Seshadri</name>
              <por>Additional Secretary</por>
              <contact>email</contact>
              <contact>phone number</contact>
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
              <name>Krishna Verma</name>
              <por>Joint Secretary (Operations)</por>
              <contact>email</contact>
              <contact>phone number</contact>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image5} />
            <nmc className="nameCard">
              <name>Saurav Kumar</name>
              <por>Joint Secretary (Operations)</por>
              <contact>email</contact>
              <contact>phone number</contact>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image6} />
            <nmc className="nameCard">
              <name>Shivam Ojha</name>
              <por>Joint Secretary (Editorial)</por>
              <contact>email</contact>
              <contact>phone number</contact>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image7} />
            <nmc className="nameCard">
              <name>Abhinav Goyal</name>
              <por>Joint Secretary (Editorial)</por>
              <contact>email</contact>
              <contact>phone number</contact>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image8} />
            <nmc className="nameCard">
              <name>Paridhi Jain</name>
              <por>Joint Secretary (Design)</por>
              <contact>email</contact>
              <contact>phone number</contact>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image9} />
            <nmc className="nameCard">
              <name>Sagar Kharat</name>
              <por>Joint Secretary (Video Editing)</por>
              <contact>email</contact>
              <contact>phone number</contact>
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
              <name>Krishna Gupta</name>
              <por>Joint Secretary (Web-D)</por>
              <contact>email</contact>
              <contact>phone number</contact>
              <conn>
                <img src={linked} />
                <img src={insta} />
              </conn>
            </nmc>
          </div>
          <div className="teamCard">
            <img src={image11} />
            <nmc className="nameCard">
              <name>Prachi Singh</name>
              <por>Joint Secretary (Web-D)</por>
              <contact>email</contact>
              <contact>phone number</contact>
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
