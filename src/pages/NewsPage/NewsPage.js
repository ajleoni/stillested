import React from "react";
import {Outlet} from 'react-router-dom';
import './NewsPage.css';

export const NewsPage = () => {
  return (
    <>
    <Outlet></Outlet>
    </>
    );
};