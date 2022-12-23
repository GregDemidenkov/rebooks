import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

import 'assets/styles/reseter.scss';
import 'assets/styles/scroll.scss'
import 'assets/styles/slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store = {store}>
          <PersistGate loading = {null} persistor = {persistor}>
            <App />
          </PersistGate>
        </Provider>
    </BrowserRouter>,
  </React.StrictMode>,
)

reportWebVitals();