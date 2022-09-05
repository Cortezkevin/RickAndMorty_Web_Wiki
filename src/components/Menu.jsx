import React from "react";
import '../styles/Menu.css';
import Logo from '../images/logo.png';

const Menu = () =>{
  return (
    <div className="container-menu">
      <header className="container-menu-header">
        <div className="container-menu-logo">
          <img src={Logo} alt="logo" />
        </div>      
        <nav className="container-menu-links">
          <ul>
            <li><a href="#" id="selected">Characters</a></li>
            <li><a href="#">Episodes</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="https://rickandmortyapi.com/support-us" target="_blank" className="link-button"  rel="noreferrer">SUPPORT US</a></li>
          </ul>
        </nav>  
      </header>        
    </div>
  );
};

export default Menu;