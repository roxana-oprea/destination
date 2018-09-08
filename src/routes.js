import React from 'react';
import {Route, Switch} from 'react-router-dom';
// pages
import Home from './Components/home/Home';
import About from './Components/about/About';
import Blog from './Components/blog/Blog';

const routes = (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/blog" component={Blog}/>
  </Switch>
);

export default routes;
