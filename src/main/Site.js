import './Site.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header} from '../cmp/Header/Header.js';
import {Footer} from '../cmp/Footer/Footer.js';
import {HomePage} from '../pages/HomePage/HomePage.js';
import {ContactPage} from '../pages/ContactPage/ContactPage.js';
import {AboutPage} from '../pages/AboutPage/AboutPage.js';
import {NewsPage} from '../pages/NewsPage/NewsPage.js';
import {TherapyPage} from '../pages/TherapyPage/TherapyPage.js';
import {MethodPage} from '../pages/MethodPage/MethodPage.js';
import {BooksPage} from '../pages/BooksPage/BooksPage.js';
import {ResourcesPage} from '../pages/ResourcesPage/ResourcesPage.js';
import {ParentsPage} from '../pages/ParentsPage/ParentsPage.js';


function Site() {
  return (
    <Router>  
    <div id="canvas">
      <Header />
      <div className="page-divider"></div>
        <Routes>
          <Route path='/' exact element = {<HomePage />} />
          <Route path='/about' element = {<AboutPage />} />
          <Route path='/kontakt' element = {<ContactPage />} />
          <Route path='/nyheder' element = {<NewsPage />} />
          <Route path='/terapi' element = {<TherapyPage />} />
          <Route path='/metode' element = {<MethodPage />} />
          <Route path='/boeger' element = {<BooksPage />} />
          <Route path='/ressourcer' element = {<ResourcesPage />} />
          <Route path='/terapi/mindfulness-til-foraeldre' element = {<ParentsPage />} />
        </Routes>
      <div className="page-divider"></div>
      <Footer />
    </div>
    </Router>
  );
}

export default Site;
