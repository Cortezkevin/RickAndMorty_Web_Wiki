import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="container-footer">
      <footer className="footer">
        <div className="footer-status">
          <ul>
            <li><a href="https://rickandmortyapi.com/api/character" target='_blank'>Characters: 826</a></li>
            <li><a href="https://rickandmortyapi.com/api/location" target='_blank'>Locations: 126</a></li>
            <li><a href="https://rickandmortyapi.com/api/episode" target='_blank'>Episodes: 51</a></li>
            <li><a href="https://status.rickandmortyapi.com/" target='_blank'>Server status</a><div id="status"></div></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
          </ul>
        </div>      
        <div className="footer-img">
          <a href="https://reactjs.org/" target='_blank'><img src="https://madewithreactjs.com/images/powered-madewithreactjs--white.png?1" alt="" /></a>
        </div>
        <div className="footer-copyright">
          <p><a href="#"><i class="fa-solid fa-code"></i> by <p>Kevin Cortez</p> 2022</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;