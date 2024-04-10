import React from "react";
import "../css/Navigation.css";
import logoWhite from "../assets/logoWhite.png"




export default function Navigation(){

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <img id="logo" className="img-fluid  d-flex justify-content-left " src={logoWhite} />
          </a>
          <button className="navbar-toggler navbar-dark ms-auto  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </p>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Face Brick</a></li>
                  <li><a className="dropdown-item" href="#">Thin Brick</a></li>                 
                  <li><a className="dropdown-item" href="#">Pavers</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Face brick
                </p>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Colors</a></li>
                  <li><a className="dropdown-item" href="#">Sizes</a></li>                 
                  <li><a className="dropdown-item" href="#">Textures</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Thin brick
                </p>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Colors</a></li>
                  <li><a className="dropdown-item" href="#">Sizes</a></li>                 
                  <li><a className="dropdown-item" href="#">Textures</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Pavers</p>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" href="#" >Colors</li>
                    <li className="dropdown-item" href="#" >Sizes</li>

                </ul>
             </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </p>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Literature</a></li>
                  <li><a className="dropdown-item" href="#">BIM</a></li>                 
                  <li><a className="dropdown-item" href="#">Specifications</a></li>
                  <li><a className="dropdown-item" href="#">Technical Notes</a></li>
                  <li><a className="dropdown-item" href="#">Brick Briefs</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </p>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Videos</a></li>                 
                </ul>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Careers/Carrera
                </p>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Current Openings</a></li>
                  <li><a className="dropdown-item" href="#">Application</a></li>                 
                  <li><a className="dropdown-item" href="#">Solicitud</a></li>
                  <li><a className="dropdown-item" href="#">Apply Online/Aplica Online</a></li>
                  
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
}