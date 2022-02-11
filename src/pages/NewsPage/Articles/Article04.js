import React from "react";
import './Article.css';
import {article04} from './ArticlesContent.js';
import {NewsArticle} from '../../../cmp/NewsArticle/NewsArticle.js';

export const Article04 = () => {
  return (
    <>
      <NewsArticle articleData={article04} />
    </>
    );
};