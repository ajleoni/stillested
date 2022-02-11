import React from "react";
import './Article.css';
import {article01} from './ArticlesContent.js';
import {NewsArticle} from '../../../cmp/NewsArticle/NewsArticle.js';

export const Article01 = () => {
  return (
    <>
      <NewsArticle articleData={article01} />
    </>
    );
};