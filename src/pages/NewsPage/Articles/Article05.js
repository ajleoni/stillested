import React from "react";
import './Article.css';
import {article05} from './ArticlesContent.js';
import {NewsArticle} from '../../../cmp/NewsArticle/NewsArticle.js';

export const Article05 = () => {
  return (
    <>
      <NewsArticle articleData={article05} />
    </>
    );
};