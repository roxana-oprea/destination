import React from 'react';
import {Route, Switch} from 'react-router-dom';
// pages
import Home from './Components/home/Home';
import About from './Components/about/About';
import Blog from './Components/blog/Blog';
import Events from './Components/events/Events';

const routes = (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/gallery" component={Events}/>
  </Switch>
);

export default routes;
