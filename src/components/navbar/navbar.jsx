import React from 'react';
import '../navbar/navbar.css';
import {Link} from 'react-router-dom';
import navTop from './Frame 1411.png';

const Navbar = () => {
    return (
        <>
        <img src={navTop} className='navTop' style={{width:'100%',height:'5.20vw'}}/>
        <div className="navmain" id="mainnav">
       <nav className="navbar  navbar-expand-md navbar-light bg-light backnav">
       <div className="container">
        {/* <span className="navbar-brand mb-0 h1">Navbar</span> */}

        <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse special" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active padd highl">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item active padd">
                    <a href="" className="nav-link">Gallery</a>
                </li>
                
                
                <li className="nav-item dropdown padd dropd">
                    {/* <a href="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Initiative</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a href="" className="dropdown-item">hello</a></li>
                        <li><a href="" className="dropdown-item">hello</a></li>
                    </ul> */}
                    <a
    className="  paddt"
    
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    {/* className=" dropdown-toggle paddt" */}
    Initiatives
  </a>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="/act">Alumni Carrer Talk</a></li>
    <li><a className="dropdown-item" href="/class-song">Class Song</a></li>
    <li><a className="dropdown-item" href="/mock-interviews">Mock Interview</a></li>
    <li><a className="dropdown-item" href="/r-land">R-Land Memoirs</a></li>
    <li><a className="dropdown-item" href="/legacy-thoughts">Legacy Thoughts</a></li>
    <li><a className="dropdown-item" href="/rainzo">Rainzo</a></li>
    <li><a className="dropdown-item" href="/alumini-bigwigs">Alumni Bigwigs</a></li>
    <li><a className="dropdown-item" href="/alumini-podcasts">Alum Podcast</a></li>
    
  </ul>

                </li>
                <li className="nav-item active padd">
                    <a href="/team" className="nav-link">Team</a>
                </li>
                <li className="nav-item active padd">
                    <a href="" className="nav-link heightabout">About Us</a>
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