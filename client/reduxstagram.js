import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import css from './styles/style.styl';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//if route matches '/' grab Main; depending on URL structure pass PhotoGrid or Single ie children of Main

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
