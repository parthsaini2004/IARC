import React from "react";
import '../homepage/imagchar.css';

export default function Profileimg(prop){
    return(
        <>
    <div>
        <img className="teamiarcp" src={prop.imgphoto} alt="" />
    </div>
    </>
    )
} 