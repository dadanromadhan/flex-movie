import {Nav} from "react-bootstrap"
import React, {useState} from 'react'
import logo from "../assets/logo/FLEX.png"
// import "../node_modules/jquery/dist/jquery.min.js";


const NavigationBar = (props) =>{
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return(
        <div>
        <Nav className="navbar navbar-expand-lg navbar-dark">
        <div class="container">
        <a class="navbar-brand text-info font-weight-bolder" href="/">
        <img src={logo} alt="Logo" width="150" height="auto" className="vertical-align-middle" />
      </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#trending">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#superhero">TV Series</a>
        </li>
      </ul>
      </div>
      </div>
        </Nav>
        </div>
    )
}
export default NavigationBar