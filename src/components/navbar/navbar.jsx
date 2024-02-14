import React from 'react';
import '../navbar/navbar.css';

const Navbar = () => {
    return (
        <>

        <div className="navmain" id="mainnav">
       <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light backnav">
       <div className="container">
        {/* <span className="navbar-brand mb-0 h1">Navbar</span> */}

        <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active padd">
                    <a href="" className="nav-link">Home</a>
                </li>
                <li className="nav-item active padd">
                    <a href="" className="nav-link">Gallery</a>
                </li>
                <li className="nav-item dropdown padd">
                    <a href="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Initiative</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a href="" className="dropdown-item">hello</a></li>
                        <li><a href="" className="dropdown-item">hello</a></li>
                    </ul>

                </li>
                <li className="nav-item active padd">
                    <a href="" className="nav-link">Team</a>
                </li>
                <li className="nav-item active padd">
                    <a href="" className="nav-link">About Us</a>
                </li>
            </ul>
        </div>
        </div>
       </nav>
       </div>

      </>
    )
}

export default Navbar