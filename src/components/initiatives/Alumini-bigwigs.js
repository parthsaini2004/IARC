import React from 'react';
import './initiatives.css';
import img from './images/Screenshot 2024-01-23 211044 1.png';

function AluminiBigwigs() {

    return (
        <>
            <div className='in-back'>
                <div className='in-container'>
                    <h1 className='in-title'>Alumni Bigwigs</h1>
                    <p className='in-content'>The "Alumni Bigwigs" initiative is set to relaunch after a temporary hiatus. It entails the creation of engaging riddles and quizzes for IITR students. The primary aim is to enhance students' awareness of their esteemed alumni, inviting them to partake in a rewarding journey of discovery. As part of this initiative, small tokens of appreciation are planned for participating students, further enriching their engagement with the institute's alumni community.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '6.5vw 0' }}>
                        <img style={{maxWidth:'60%'}} src={img} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AluminiBigwigs;