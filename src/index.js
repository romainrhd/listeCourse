// Deps
import React from 'react';
import store from "./store";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import LayoutDefault from './layouts/Default';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

// Style
import './assets/index.css';

library.add(fab, faArrowLeft, faCheck, faPlus);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <LayoutDefault />
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
