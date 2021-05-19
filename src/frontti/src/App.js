import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import MapPage from './components/MapPage';
import SearchPage from './components/SearchPage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={FrontPage} path="/" exact />
          <Route component={MapPage} path="/map" />
          <Route component={SearchPage} path="/SearchPage" />
        </Switch>
      </BrowserRouter>
    </div> 
  )
}

