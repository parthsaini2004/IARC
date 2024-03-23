// import React, { Component } from 'react'
import { useState } from 'react';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import "../navbar/navbariarc.css";
// import Initiatedropdown from './initiatedropdown';


// import Home from './Home';
// import Contact from './Contact';
// import About from './About';

import navTop from './Frame 1411.png';

const Navbariarc = () => {
    const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 990) {
      setShowDropdown(true);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 990) {
      setShowDropdown(false);
    }
  };
  const handleClick = () => {
    if (window.innerWidth < 990) {
      setShowDropdown(!showDropdown)
    }
  };
  const [expanded, setExpanded] = useState(false);
  const handleNavItemClick = () => {
    setExpanded(false);
  };
   
  return (

    
    <>
        <div>
        <img src={navTop} className='navTop'  alt="logo"/>
<Navbar bg="dark" variant={"dark"} expand="lg" expanded={expanded} >
    {/* <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand> */}
    <Navbar.Toggle id="margleft" aria-controls="navbarScroll" onClick={()=>setExpanded(!expanded)}/>
    <Navbar.Collapse id="navbarScroll">
        <Nav
            className=" my-lg-0 navbar-item-position"
            style={{ maxHeight: '200px' }}
            navbarScroll
            
            
        >
            <Nav.Link as={Link} to="/" ><span className="fontStyles" onClick={handleNavItemClick}>Home</span></Nav.Link>
            <Nav.Link as={Link} to="/gallery" ><span className="fontStyles" onClick={handleNavItemClick}>Gallery</span></Nav.Link>
            <NavDropdown
          title="Initiatives"
          id="basic-nav-dropdown"
          show={showDropdown}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          className="fontStyles"
          
        >
          <NavDropdown.Item href="/act" className="effects"><span className="fontStyles">Alumni Career Talk</span></NavDropdown.Item>
          <NavDropdown.Item href="/class-song" className="effects"><span className="fontStyles">Class Song</span></NavDropdown.Item>
          <NavDropdown.Item href="/mock-interviews" className="effects"><span className="fontStyles">Mock Interviews</span></NavDropdown.Item>
          <NavDropdown.Item href="/r-land" className="effects"><span className="fontStyles">R-land Memoirs</span></NavDropdown.Item>
          <NavDropdown.Item href="/legacy-thoughts" className="effects"><span className="fontStyles">Legacy Thoughts</span></NavDropdown.Item>
          <NavDropdown.Item href="/rainzo" className="effects"><span className="fontStyles">Rainzo</span></NavDropdown.Item>
          {/* <NavDropdown.Item href="/alumni-bigwigs" className="effects"><span className="fontStyles">Alumni Bigwigs</span></NavDropdown.Item>
          <NavDropdown.Item href="/alumni-podcasts" className="effects"><span className="fontStyles">Alum Podcast</span></NavDropdown.Item> */}
        </NavDropdown>
            {/* <Nav.Link >
            <div smooth={true} duration={100} to="events" offset={-110} 
                            // className="nav-link" 
                             data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Initiatives</div>
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
            </Nav.Link> */}
            {/* <Nav.Link >Initiatives */}
            {/* <li className="nav-item dropdown  dropd">
                            <a smooth={true} duration={100} to="events" offset={-110} 
                            // className="nav-link" 
                            href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Initiatives</a>
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
                        </li> */}

            {/* </Nav.Link> */}
            <Nav.Link as={Link} to="/team"><span className="fontStyles" onClick={handleNavItemClick}>Team</span></Nav.Link>
            <Nav.Link as={Link} to="/home"><span className="fontStyles" onClick={handleNavItemClick}>Contact Us</span></Nav.Link>
            


        </Nav>

    </Navbar.Collapse>
</Navbar>
</div>
<div>
{/* <Switch>
    <Route path="/about">
        <About />
    </Route>
    <Route path="/contact">
        <Contact />
    </Route>
    <Route path="/">
        <Home />
    </Route>
</Switch> */}
</div>
    </>
  );
};

export default Navbariarc;
