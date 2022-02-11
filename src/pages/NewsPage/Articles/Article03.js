import React from "react";
import './Article.css';
import {article03} from './ArticlesContent.js';
import {NewsArticle} from '../../../cmp/NewsArticle/NewsArticle.js';

export const Article03 = () => {
  return (
    <>
      <NewsArticle articleData={article03} />
    </>
    );
}