import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from 'redux/store';

import './assets/styles/index.scss';
import './assets/styles/slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store = {store}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals();