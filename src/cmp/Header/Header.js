import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from './StilleStedLogo.png';

export const Header = (props) => {
    const handleClick = (e) => {
        const allLinks = document.getElementsByClassName('top-nav-link');
        const topNav = document.getElementById('top-nav');
        const visibility = topNav.getAttribute('data-visible');
        const navOpen = document.getElementById('nav-open');
        const navClose = document.getElementById('nav-close');
        allLinks[0].className='top-nav-link';
        allLinks[1].className='top-nav-link';
        allLinks[2].className='top-nav-link';
        allLinks[3].className='top-nav-link';
        e.target.className='top-nav-link active-link';
        if (visibility === "true") {
            topNav.setAttribute("data-visible", false);
            navClose.setAttribute("visible", false);
            navOpen.setAttribute("visible", true);
            };       
};  
  const handleOpen = ({target}) => {
    const navOpen = target;
    const topNav = target.nextSibling;
    const navClose = document.getElementById('nav-close');
    const visibility = topNav.getAttribute("data-visible");            
        if (visibility === "false") {
             topNav.setAttribute("data-visible", true);
             navOpen.setAttribute("visible", false);
             navClose.setAttribute("visible", true);
            } 
    };
    const handleClose = ({target}) => {
        const navClose = target;
        const topNav = document.getElementById('top-nav');
        const navOpen = document.getElementById('nav-open');
        const visibility = topNav.getAttribute("data-visible");            
            if (visibility === "true") {
                 topNav.setAttribute("data-visible", false);
                 navOpen.setAttribute("visiblle", true);
                 navClose.setAttribute("visible", false);
                } 
        };    
  return (
    <header>
        <div id="logo-box">
            <a href='https://stillested.netlify.com'><img id="logo" alt='Stillested logo' src={logo}/></a>
            <div id="logo-subtitle"><h1>Terapi og mindfulness ved psykolog Sabrina Leoni</h1>
            </div>
        </div>
        <button onClick={handleOpen} id="nav-open" className="nav-button" aria-controls="primary-navigation">
                <span className="sr-only">Menu Open</span>
            </button>
        <nav id="top-nav" data-visible="false">
            <button onClick={handleClose} id="nav-close" className="nav-button" aria-controls="primary-navigation">
                <span className="sr-only">Menu Close</span>
            </button>
            <ul >
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