import React from "react";
import './InPageNav.css';
import { Link } from "react-router-dom";
import img1 from './01inPageNav.png';
import img2 from './02inPageNav.png';
import img3 from './03inPageNav.png';
import img4 from './04inPageNav.png';

const subText = {};
subText.text1 ='Terapi med unge og voksne' ;
subText.text2 = 'Mine måder at arbejde på';
subText.text3 = 'Mine bøger og workshops';
subText.text4 = 'Guidede meditationer og ressourcer';

export const InPageNav = () => {
  return (
    <nav id="in-page-nav">
        <Link to="terapi">
        <section className="nav-box">
            <figure className="nav-img"><img src={img1} alt='two people talking'/></figure>
            <aside className="nav-subtitle"><h2>{subText.text1}</h2></aside>
        </section>
        </Link>      
        <Link to="metode">
            <section className="nav-box">
                <figure className="nav-img"><img src={img2} alt='person under a tree'/></figure>
                <aside className="nav-subtitle"><h2>{subText.text2}</h2></aside>
            </section>
        </Link>        
        <Link to="boeger">
            <section className="nav-box">
                <figure className="nav-img"><img src={img3} alt='mindfulness books'/></figure>
                <aside className="nav-subtitle"><h2>{subText.text3}</h2></aside>
            </section>
        </Link>
        <Link to="ressourcer">
            <section className="nav-box">
                <figure className="nav-img"><img src={img4} alt='smiling face'/></figure>
                <aside className="nav-subtitle"><h2>{subText.text4}</h2></aside>
            </section>
        </Link>
    </nav>
    );
};