import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from './StilleStedLogo.png';

export const Header = (props) => {
    const handleClick = (e) => {
        const allLinks = document.getElementsByClassName('top-nav-link');
        const topNav = document.getElementById('top-nav');
        const visibility = topNav.getAttribute('data-visible');            
        const navToggle = document.getElementById('nav-toggle');
        allLinks[0].className='top-nav-link';
        allLinks[1].className='top-nav-link';
        allLinks[2].className='top-nav-link';
        allLinks[3].className='top-nav-link';
        e.target.className='top-nav-link active-link';
        if (visibility === "true") {
            topNav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
            };       
};  
  const handleToggle = ({target}) => {
    const navToggle = target;
    const topNav = target.nextSibling;
    const visibility = topNav.getAttribute("data-visible");            
        if (visibility === "false") {
             topNav.setAttribute("data-visible", true);
             navToggle.setAttribute("aria-expanded", true);
            } else if (visibility === "true") {
            topNav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
            }
    };    
  return (
    <header>
        <div id="logo-box">
            <a href='https://www.stillested.dk'><img id="logo" alt='Stillested logo' src={logo}/></a>
            <div id="logo-subtitle"><h1>Terapi og mindfulness ved psykolog Sabrina Leoni</h1>
            </div>
        </div>
        <button onClick={handleToggle} id="nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <span className="sr-only">Menu</span>
        </button>
        <nav id="top-nav" data-visible="false">
            <ul>
                <Link to="">
                    <li className='top-nav-link active-link' value="Home" onClick={handleClick}>FORSIDE</li>
                </Link>
                <Link to="about">
                    <li className='top-nav-link' onClick={handleClick}>OM MIG</li>
                    </Link>
                <Link to="kontakt">
                    <li className='top-nav-link' onClick={handleClick}>KONTAKT</li>
                    </Link>
                <Link to="nyheder">
                    <li className='top-nav-link' onClick={handleClick}>NYHEDER</li>
                </Link>
            </ul>
        </nav>
    </header>
);
};