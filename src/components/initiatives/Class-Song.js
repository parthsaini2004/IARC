import React from 'react';
import './initiatives.css';
import img1 from './images/Screenshot 2023-12-12 184128.png';
import img3 from './images/Screenshot 2023-12-12 184125.png';
import img4 from './images/Screenshot 2023-12-12 184126.png';
import img2 from './images/Screenshot 2023-12-12 184127.png';
import img5 from './images/Snapinsta 3.png';
import Slider from './Slider';

function ClassSong() {

    return (
        <>
            <div className='in-back'>
                <div className='in-container'>
                    <h1 className='in-title'>Class Song</h1>
                    <p className='in-content'>The "Class Song" initiative is a creative endeavor that seeks to craft a touching video tribute dedicated to graduating students. This endeavor results in a visual tapestry capturing the precious moments of graduating students, evoking emotions and nostalgia that resonate with both graduates and the wider community. Notably, Class Song videos have collectively garnered around 1.2 Million views on YouTube, showcasing the widespread appreciation and impact of these cherished tributes.  Our aim is to create a video that not only serves as a reflection of the students' journeys but also fosters a deep sense of nostalgia and sentimentality as they transition to the next phase of their lives. Class song is a symbolic representation of the shared experiences, growth, and camaraderie among the graduating class, offering a touching and lasting tribute to their time at IIT Roorkee. In this endeavor, we engage in collaboration with the choreography section and cinesec to produce an outstanding video. Annually, over 1000 final-year students actively participate in this initiative, contributing to the creation of a spectacular performance. Explore the previous “Class Song” from the links below: <br /><br/><br/>
                        <a className='class-song-links' href='https://youtu.be/Shu2YRoLPUc?si=dsMRXeUXLzemtotk' target='_blank'> Class Song 2023: Class Song 2023 | Socha Hai | IIT Roorkee</a><br />
                        <a className='class-song-links' href='https://youtu.be/Da6x0jqTqyo?si=xUDr7f4-Tp4PJibu' target='_blank'>  Class Song 2022: Class Song 2022 | Dil Dhadakne Do | IIT Roorkee</a><br />
                        <a className='class-song-links' href='https://youtu.be/N4kS__waq6E?si=nR5HhYdOCQOmcHuK' target='_blank'>  Class Song 2021: Class Song 2021 | Memoir Film | Avicii - The Nights | IIT Roorkee</a><br />
                        <a className='class-song-links' href='https://youtu.be/u514fr4ve8w?si=VOQorUV2DcanrPIS' target='_blank'>  Class Song 2020: Class Song 2020 | Memoir Film | OneRepublic - I Lived | IIT Roorkee</a><br />
                        <a className='class-song-links' href='https://youtu.be/7QHtfqaycNQ?si=m3pD2xOim2JXaN-_' target='_blank'>  Class Song 2019: Class Song 2019 | Sooraj Ki Baahon Mein | IIT Roorkee</a><br/>
                        <a className='class-song-links' href='https://youtu.be/EUei7-LIP7c?si=xaKUci4EkwYTWkTq' target='_blank'>  Class Song 2018: Udd Gaye | Hasta La Vista - Class of 2018 | IIT Roorkee</a><br />
                        </p><br /><br /><br />
                    {/* <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                        <img src={img1} alt='act-img-1'/>
                        <img src={img2} alt='act-img-1'/>
                        <img src={img3} alt='act-img-1'/>
                        <img src={img4} alt='act-img-1'/>
                        </div> */}


                    <Slider />

                    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1.25vw 0' }}>
                        <img style={{ maxWidth: '60%' }} src={img5} />
                    </div>

                </div>
            </div>
        </>
    )
}
export default ClassSong;

