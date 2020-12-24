import React from "react";
import { Link } from "react-router-dom";
import "bootswatch/dist/sketchy/bootstrap.css";
import "./Navbar.css";
import $ from 'jquery';
import Popper from 'popper.js';


export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor01" >
  <ul class="navbar-nav mr-auto">

      
        <li class="nav-item active">
        <Link to="/" class="nav-link" >Home
          <span class="sr-only">(current)</span>
        </Link>
        </li>
        
        <li class="nav-item"> 
        <Link to="/aboutMe" class="nav-link">
          About Me 
          </Link>
          </li>

          <li class="nav-item"><Link to="/projects" class="nav-link"> Projects </Link></li>

          <li class="nav-item"> 
        <Link to="/contact" class="nav-link">
            Contact 
         </Link>
          </li>

        
      
       
      </ul>
      </div>
</nav> 
 );
}
