import React from 'react';

import {Switch,Route } from 'react-router-dom';
import Landingpage from './landingpage';
import About from './about';
import Project from './projects';
import Resume from './resume';
import Profile from './profile';

const Main = () => (
  <Switch>
  <Route exact path = "/" component={Landingpage} />
  <Route path ="/about" component={About}/>
  <Route path ="/resume" component={Resume}/>
  <Route path ="/projects" component={Project}/>
  <Route path ="/profile" component={Profile}/>
  </Switch>
)

export default Main;
