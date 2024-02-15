import React from 'react';
import './initiatives.css';
import img from './images/Snapinsta 2.png';

function MockInterviews() {

    return (
        <>
            <div className='in-back'>
                <div className='in-container'>
                    <h1 className='in-title'>Mock Interviews</h1>
                    <p className='in-content'>The “Mock Interview” initiative is aimed at diligently preparing students for upcoming internship opportunities. IARC reaches out to its illustrious alumni through platforms like LinkedIn, inviting them to participate in conducting mock interviews.  The objective is to replicate real interview conditions, providing students with an authentic simulation of the challenges they will face as they prepare for internships. This initiative has successfully organized over 300 mock interviews with remarkable efficiency, garnering praise from participating alumni and students alike.  These mock interviews, infused with the authenticity and real-world insights alumni bring, bolster students' interview skills and boost their confidence, equipping them with invaluable practical experience.</p>

                    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '100px 0' }}>
                        <img src={img} />
                    </div>
                </div>

            </div>
        </>
    )
}
export default MockInterviews;