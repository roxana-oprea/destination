import React from 'react';
import {Route, Switch} from 'react-router-dom';
// pages
import Home from './Components/home/Home';
import About from './Components/about/About';

const routes = (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </Switch>
);

export default routes;
