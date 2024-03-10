// import React, { Component } from 'react'
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
  return (
    <>
        <div>
        <img src={navTop} className='navTop' style={{width:'100%',height:'5.20vw'}}/>
<Navbar bg="dark" variant={"dark"} expand="lg">
    {/* <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand> */}
    <Navbar.Toggle id="margleft" aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            {/* <Nav.Link >Initiatives */}
            <li className="nav-item dropdown  dropd">
                            <a smooth={true} duration={100} to="events" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Initiatives</a>
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

            {/* </Nav.Link> */}
            <Nav.Link as={Link} to="/team">Team</Nav.Link>
            <Nav.Link as={Link} to="/home">Contact Us</Nav.Link>
            


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
