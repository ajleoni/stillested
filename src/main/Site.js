import './Site.css';
import React, {useLayoutEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import {Header} from '../cmp/Header/Header.js';
import {Footer} from '../cmp/Footer/Footer.js';
import {HomePage} from '../pages/HomePage/HomePage.js';
import {ContactPage} from '../pages/ContactPage/ContactPage.js';
import {AboutPage} from '../pages/AboutPage/AboutPage.js';
import {TherapyPage} from '../pages/TherapyPage/TherapyPage.js';
import {MethodPage} from '../pages/MethodPage/MethodPage.js';
import {BooksPage} from '../pages/BooksPage/BooksPage.js';
import {ResourcesPage} from '../pages/ResourcesPage/ResourcesPage.js';
import {ParentsPage} from '../pages/ParentsPage/ParentsPage.js';
import {NewsPage} from '../pages/NewsPage/NewsPage.js';

//News Section
import { NewsList } from '../pages/NewsPage/NewsList';
//News Articles
import {Article01} from '../pages/NewsPage/Articles/Article01.js';
import {Article02} from '../pages/NewsPage/Articles/Article02.js';
import {Article03} from '../pages/NewsPage/Articles/Article03.js';
import {Article04} from '../pages/NewsPage/Articles/Article04.js';
import {Article05} from '../pages/NewsPage/Articles/Article05.js';


const ScrollUp = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 


function Site() {
  return (
    <Router>
      <ScrollUp>  
      <div id="canvas">
        <Header />
        <div className="page-divider"></div>
          <Routes>
            <Route path='/' exact element = {<HomePage />} />
            <Route path='/about' element = {<AboutPage />} />
            <Route path='/kontakt' element = {<ContactPage />} />
            <Route path='/nyheder' exact element = {<NewsPage />} />
            <Route path='/nyheder/01' element = {<Article01 />} ></Route>
            <Route path='/nyheder/02' element = {<Article02 />} ></Route>
            <Route path='/nyheder/03' element = {<Article03 />} ></Route>
            <Route path='/nyheder/04' element = {<Article04 />} ></Route>
            <Route path='/nyheder/05' element = {<Article05 />} ></Route>
            <Route path='/terapi' element = {<TherapyPage />} />
            <Route path='/metode' element = {<MethodPage />} />
            <Route path='/boeger' element = {<BooksPage />} />
            <Route path='/ressourcer' element = {<ResourcesPage />} />
            <Route path='/terapi/mindfulness-til-foraeldre' element = {<ParentsPage />} />
          </Routes>
          <Outlet />
        <div className="page-divider"></div>
        <Footer />
      </div>
      </ScrollUp>
    </Router>
  );
}

export default Site;
