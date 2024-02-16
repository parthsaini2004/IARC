import React from 'react';
import './initiatives.css';
import img1 from './images/Screenshot 2024-01-23 202415 1.png';
import img2 from './images/Screenshot 2024-01-23 202552 1.png';

function Rland() {

    return (
        <>
            <div className='in-back'>
                <div className='in-container'>
                    <h1 className='in-title'>R-Land Memories</h1>
                    <p className='in-content'>"R-Land Memoirs" is an initiative dedicated to preserving and exploring the institute's rich historical tapestry. This endeavor involves meticulous research into the historical facets of the campus, intending to amass invaluable data on significant campus landmarks, buildings, and events. This treasure trove of historical knowledge is then creatively shared with students and the wider community through platforms such as Instagram, LinkedIn, and Facebook. Utilizing visual and written content, "R-Land Memoirs" educates the audience about the campus's storied history, fostering a profound appreciation and connection with the institute's rich heritage. By delving into different facets of the campus, from its iconic landmarks to historical events, this initiative creates awareness about the evolution and significance of the institute's physical and cultural landscape.</p>
                    <div style={{display:'flex',justifyContent:'space-evenly', padding:'6.25vw 0', flexWrap:'wrap'}}>
                        <img style={{maxWidth:'60%',margin:'10px'}} src={img1} alt='act-img-1'/>
                        <img style={{maxWidth:'60%',margin:'10px'}} src={img2} alt='act-img-1'/>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Rland;