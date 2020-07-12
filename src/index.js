import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import initData from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import { HomePage } from './pages/home';

// const store = createStore(initData);

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
          <Route component={App} />
      </BrowserRouter>
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
