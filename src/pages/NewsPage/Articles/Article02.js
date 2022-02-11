import React from "react";
import './Article.css';
import {article02} from './ArticlesContent.js';
import {NewsArticle} from '../../../cmp/NewsArticle/NewsArticle.js';

export const Article02 = () => {
  return (
    <>
      <NewsArticle articleData={article02} />
    </>
    );
};