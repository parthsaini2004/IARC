// import React from 'react';
// import '../navbar/navbar.css';
// import {Link} from 'react-router-dom';
import navTop from './Frame 1411.png';

// const Navbar = () => {
//     return (
//         <>
//         {/* <img src={navTop} className='navTop' style={{width:'100%',height:'5.20vw'}}/> */}
//         <div className="navmain" id="mainnav">
//        <nav className="navbar  navbar-expand-md navbar-light bg-light backnav">
//        <div className="container">
//         {/* <span className="navbar-brand mb-0 h1">Navbar</span> */}

//         {/* <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" > */}
//         {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: rgb(0, 0, 0);"><path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path></svg> */}
//         {/* <span className="navbar-toggler-icon"></span>
//         </button> */}
//         <div className="navbarSupportedContent collapse navbar-collapse special" id="navbarNav">
//             <ul className="navbar-nav">
//                 <li className="nav-item active padd highl">
//                     <a href="/" className="nav-link">Home</a>
//                 </li>
//                 <li className="nav-item active padd">
//                     <a href="" className="nav-link">Gallery</a>
//                 </li>
                
                
//                 <li className="nav-item dropdown padd dropd">
//                     {/* <a href="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Initiative</a>
//                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a href="" className="dropdown-item">hello</a></li>
//                         <li><a href="" className="dropdown-item">hello</a></li>
//                     </ul> */}
//                     <a
//     className="  paddt"
    
//     type="button"
//     id="dropdownMenuButton"
//     data-mdb-toggle="dropdown"
//     aria-expanded="false"
//   >
//     {/* className=" dropdown-toggle paddt" */}
//     Initiatives
//   </a>
//   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <li><a className="dropdown-item" href="/act">Alumni Carrer Talk</a></li>
//     <li><a className="dropdown-item" href="/class-song">Class Song</a></li>
//     <li><a className="dropdown-item" href="/mock-interviews">Mock Interview</a></li>
//     <li><a className="dropdown-item" href="/r-land">R-Land Memoirs</a></li>
//     <li><a className="dropdown-item" href="/legacy-thoughts">Legacy Thoughts</a></li>
//     <li><a className="dropdown-item" href="/rainzo">Rainzo</a></li>
//     <li><a className="dropdown-item" href="/alumini-bigwigs">Alumni Bigwigs</a></li>
//     <li><a className="dropdown-item" href="/alumini-podcasts">Alum Podcast</a></li>
    
//   </ul>

//                 </li>
//                 <li className="nav-item active padd">
//                     <a href="/team" className="nav-link">Team</a>
//                 </li>
//                 <li className="nav-item active padd">
//                     <a href="" className="nav-link heightabout">About Us</a>
//                 </li>
//             </ul>
//         </div>
        
//         </div>
//        </nav>
//        </div>

//       </>
//     )
// }

// export default Navbar



// import './Navbar.css'
// import '../navbar/navbar.css';
import '../navbar/newnav.css';
import {Link} from "react-scroll";

// REACT FONT AWESOME IMPORTS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//hello
// function Navbar() {
//     return (
//         <>
//         <img src={navTop} className='navTop' style={{width:'100%',height:'5.20vw'}}/>
//         <div className="navmain" id="mainnav">
//         <nav className="navbar navbar-expand-lg fixed-top">
//             <div className="container">
//                 <a className="navbar-brand" href="#">
//                 {/* <img className="logo" src={navTop} alt="logo..." /> */}
//                 </a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <FontAwesomeIcon icon={faBars} style={{color: "#000000"}}/>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0" smooth={true} duration={100} >
//                         <li className="nav-item nav-link" to="welcome" smooth={true} duration={100}   href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
//                             {/* <Link  to="welcome" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">*/}
//                             Home <span className="sr-only">
//                             </span>
//                             {/* </Link>  */}
//                         </li>
//                         <li className="nav-item nav-link" to="welcome"  smooth={true} duration={100} href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
//                             {/* <Link  to="welcome" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">*/}
//                             Gallery <span className="sr-only">
//                             </span>
//                             {/* </Link>  */}
//                         </li>
//                         <li className="nav-item nav-link" to="welcome"  smooth={true} duration={100} href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
//                             {/* <Link  to="welcome" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">*/}
//                             Initiatives <span className="sr-only">
//                             </span>
//                             {/* </Link>  */}
//                         </li>
//                         <li className="nav-item nav-link" to="welcome"smooth={true} duration={100}   href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
//                             {/* <Link  to="welcome" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">*/}
//                             Team <span className="sr-only">
//                             </span>
//                             {/* </Link>  */}
//                         </li>
//                         <li className="nav-item nav-link" to="welcome" smooth={true} duration={100}  href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
//                             {/* <Link  to="welcome" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">*/}
//                             About Us <span className="sr-only">
//                             </span>
//                             {/* </Link>  */}
//                         </li>
//                         {/* <li className="nav-item">
//                             <Link smooth={true} duration={100} to="about" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gallery</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link smooth={true} duration={100} to="events" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Initiatives 
                            
// </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link smooth={true} duration={100} to="team" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Team</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link smooth={true} duration={100} to="gallery" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About Us</Link>
//                         </li> */}
//                         {/* <li className="nav-item">
//                             <Link smooth={true} duration={100} to="contact" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</Link>
//                         </li> */}
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         </div>
//         </>
//     )
// }



// =============================================================================

function Navbar() {
    return (
        <>
        <img src={navTop} className='navTop' style={{width:'100%',height:'5.20vw'}}/>
        <div className="navmain" id="mainnav">
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                {/* <img className="logo" src={navTop} alt="logo..." /> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#000000"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a smooth={true} duration={100} to="welcome" className="nav-link" href="/" >Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a 
                            smooth={true} duration={100}  offset={-110} className="nav-link" href="/gallery" >Gallery</a>
                        </li>
                       
                        <li className="nav-item dropdown padd dropd">
                            <a smooth={true} duration={100} to="events" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Initiatives</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="/act">Alumni Carrer Talk</a></li>
     <li><a className="dropdown-item" href="/class-song">Class Song</a></li>
     <li><a className="dropdown-item" href="/mock-interviews">Mock Interview</a></li>
     <li><a className="dropdown-item" href="/r-land">R-Land Memoirs</a></li>
   
     <li><a className="dropdown-item" href="/rainzo">Rainzo</a></li>
    
     <li><a className="dropdown-item" href="/alumini-podcasts">Alum Podcast</a></li>
    
   </ul>
                        </li>
                        <li className="nav-item">
                            <a  smooth={true} duration={100} to="teamm" offset={-110} className="nav-link" href="/team" >Team</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link smooth={true} duration={100} to="gallery" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gallery</Link>
                        </li> */}
                        <li className="nav-item">
                            <a smooth={true} duration={100}  offset={-110} className="nav-link" href="/aboutus" >About Us</a>
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
