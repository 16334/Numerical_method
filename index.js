import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Ro} from 'react-router-dom';
import Bisection from './Bisection';


ReactDOM.render(
  <App />,
  <BrowserRouter >
    <Route path="/" component={App}/>
    <Route path="/Bisection" component={Bisection}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
