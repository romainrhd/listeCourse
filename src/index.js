// Deps
import React from 'react';
import {createRoot} from "react-dom/client";
import LayoutDefault from './layouts/Default';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Style
import './assets/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LayoutDefault />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
