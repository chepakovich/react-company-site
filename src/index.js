import React from 'react'
import { render } from 'react-dom'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { ConnectedRouter } from 'react-router-redux'
//import createHistory from 'history/createBrowserHistory'
//import { Provider } from 'react-redux'

import {
  //StaticRouter,
  //BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Home, Bdr, Cost,
  RuHome, RuBdr,
  Whoops404
} from './pages'
//import Navigation from './components/Navigation.js'

window.React = React

render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bdr" component={Bdr} />
        <Route path="/cost" component={Cost} />
        <Route path="/ru" component={RuHome} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('react-container')
)
