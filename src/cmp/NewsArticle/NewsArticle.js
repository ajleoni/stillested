import React from "react";
import './NewsArticle.css';

export const NewsArticle = ({articleData}) => {
    let paragraphs = articleData.paragraphs.map(
        (item) => {
          return (      
          <>
          <p>{item}</p>
          </>
        )}
      );
    
    return (
      <>
        <section>
            <aside>
                <div className="article-img">
                    <img src={articleData.img}/>
                </div>
            </aside>
            <article className="news-article">
                <h2>{articleData.title}</h2>
                <p className="news-date">{articleData.date}</p>
                {paragraphs}
            </article>
        </section>
      </>
      );
  };