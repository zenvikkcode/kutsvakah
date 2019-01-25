import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from  './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from  './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
,document.getElementById('root'));
// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
