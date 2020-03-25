import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Bisection from './Bisection';
import BisectionM from './BisectionM';
import Spline from './Spline';

ReactDOM.render(
  
  <BrowserRouter>
 {/*  <App /> */}
    <Route exact path="/" component={App}/>
    <Route exact path="/Bisection" component={Bisection}/>
    <Route exact path="/Spline" component={Spline}/>
    <Route exact path="/BisectionM" component={BisectionM
    }/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
