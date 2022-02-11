import React from "react";
import {Link} from 'react-router-dom';

import './NewsPage.css';
import {news} from './NewsListContent.js';

export const NewsList = () => {
  let content = news.map(
    (item , index) => {
      return (      
      <>
        {index!==0?<div className="page-divider"></div>:<div></div>}
        <Link to={item.link}>
          <section className="news">
              <aside>
                <img src={item.img}></img>
              </aside>
              <article>
                <h2>{item.title}</h2>
                <p className="news-date">{item.date}</p>
                <p>{item.description}</p>
              </article>
            </section>
          </Link>
      </> 
          )}
  );

  return (
    <>
      {content}
    </>
    );
};