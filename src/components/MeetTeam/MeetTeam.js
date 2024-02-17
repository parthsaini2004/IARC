import React from 'react'
import './MeetTeam.css'
import image1 from './teamImages/image1.png'
import image2 from './teamImages/image2.png'
import image3 from './teamImages/image3.png'
import image4 from './teamImages/image4.png'
import image5 from './teamImages/image5.png'
import image6 from './teamImages/image6.png'
import image7 from './teamImages/image7.png'
import image8 from './teamImages/image8.png'
import image9 from './teamImages/image9.png'
import image10 from './teamImages/image10.png'
import image11 from './teamImages/image11.png'

export const MeetTeam = () => {
  return (
    <div>
        <div className="teamm">
        <p>Meet the Team</p>
        <div className="cardbox"><div className='teamCard'><img src={image1} /><div className="nameCard"><h2>Pawanhaari Mittal</h2><h3>Secretary</h3></div></div></div>

        <div className="cardbox"><div className='teamCard'><img src={image2} /><div className="nameCard"><h2>Sanya Singh</h2><h3>Additional Secretary</h3></div></div><div className='teamCard'><img src={image3} /><div className="nameCard"><h2>Anand Seshadri</h2><h3>Additional Secretary</h3></div></div></div>

        <div className="cardbox"><div className='teamCard'><img src={image4} /><div className="nameCard"><h2>Krishna Verma</h2><h3>Joint Secretary (Operations)</h3></div></div><div className='teamCard'><img src={image5} /><div className="nameCard"><h2>Saurav Kumar</h2><h3>Joint Secretary (Operations)</h3></div></div><div className='teamCard'><img src={image6} /><div className="nameCard"><h2>Shivam Ojha</h2><h3>Joint Secretary (Editorial)</h3></div></div></div>

        <div className="cardbox"><div className='teamCard'><img src={image7} /><div className="nameCard"><h2>Abhinav Goyal</h2><h3>Joint Secretary (Editorial)</h3></div></div><div className='teamCard'><img src={image8} /><div className="nameCard"><h2>Paridhi Jain</h2><h3>Joint Secretary (Design)</h3></div></div><div className='teamCard'><img src={image9} /><div className="nameCard"><h2>Sagar Kharat</h2><h3>Joint Secretary (Video Editing)</h3></div></div></div>

        <div className="cardbox"><div className='teamCard'><img src={image10} /><div className="nameCard"><h2>Krishna Gupta</h2><h3>Joint Secretary (Web-D)</h3></div></div><div className='teamCard'><img src={image11} /><div className="nameCard"><h2>Prachi Singh</h2><h3>Joint Secretary (Web-D)</h3></div></div></div>
    </div>
    </div>
  )
}
