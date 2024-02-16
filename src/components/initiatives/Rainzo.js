import React from 'react';
import './initiatives.css';
import img from './images/rainzo.png';

function Rainzo() {

    return (
        <>
            <div className='in-back'>
                <div className='in-container'>
                    <h1 className='in-title'>Raionzo</h1>
                    <p className='in-content'>"Raionzo" is the official alumni fest of IIT Roorkee, aimed at rekindling the cherished connection between alumni and their beloved institute. This grand event features distinguished alumni who deliver guest lectures and partake in a diverse array of activities, allowing them to relive their college days. The last edition of "Raionzo" was held in 2019 and was met with resounding appreciation from alumni, students, and the administration. The forthcoming revival of this event, under the astute guidance of the Dean of Resources and Alumni (DORA), signifies the institute’s unwavering commitment to nurturing a sense of nostalgia and belonging among alumni.  Additionally, it offers current students a precious opportunity to interact with accomplished professionals who once trod the same academic halls. "Raionzo" serves as a vibrant platform for the exchange of knowledge, networking, and a celebration of the remarkable achievements of the institute's alumni.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '6.5vw 0' }}>
                        <img style={{maxWidth:'80%'}} src={img} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rainzo;