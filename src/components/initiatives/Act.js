import React from 'react';
import './initiatives.css';
import img1 from './images/Act-img-1.png';
import img2 from './images/Act-img-2.png'

function Act() {

    return (
        <>
            <div className='in-back'>
                <div className='in-container'>
                    <h1 className='in-title'>Alumni Career Talk</h1>
                    <p className='in-content'>"Alumni Career Talk" (ACT), is an initiative wherein we bring distinguished alumni from diverse fields such as software development, data science, entrepreneurship, consulting, product management, and civil services. These esteemed alumni are invited to share their invaluable experiences and insights with the current generation of students at the institute. The aim is to shed light on a vast array of career paths and opportunities, providing students with a panoramic view of their potential professional journeys. Noteworthy luminaries, including<br /><br/>
                        <b>&#x2022;  Mr. Amit Verma </b>(IPS, IITR’ 12 graduate)<br />
                        <b>&#x2022;  Mr. Akash Mukherjee</b> (Director, Strategic Finance & Planning at Coupang, IITR’ 10 graduate)<br />
                        <b>&#x2022;  Mr. Aditya Jha</b> (Senior Applications Engineer at Oracle, IITR’ 18 graduate)<br />
                        <b>&#x2022;  Mr. Priyanshu Gandhi</b> (Technical Head SAVE NGO, IITR’17)<br />
                        <b>&#x2022;  Mr. Aashish Kumar</b> (IPS CSE 2021)<br />
                        <b>&#x2022;  Mr. Vikas Agarwal</b> (IRS CSE 2020)<br />
                        <b>&#x2022;  Mr. Hari Babu Srivastava</b> (Former Director General of DRDO, IITR’ 83 graduate)<br /><br/>
                        have graced these career talks, offering candid accounts of their personal and professional experiences, replete with triumphs and setbacks. The impact of these talks is immeasurable, guiding students toward a nuanced understanding of the many career options available and igniting the flames of inspiration and direction in those still navigating their career paths.</p><br /><br /><br />
                    <div style={{ display: 'flex', justifyContent: 'space-evenly',maxWidth:'100%' ,flexWrap:'wrap'}}>
                        <img style={{maxWidth:'60%',margin:'10px'}} src={img1} alt='act-img-1' />
                        <img style={{maxWidth:'60%', margin:'10px'}} src={img2} alt='act-img-1' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Act;