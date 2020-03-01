import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from './view/home'
import About from "./view/about/index";
import Contact from "./view/contact/index";


export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Index}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
  )
}

