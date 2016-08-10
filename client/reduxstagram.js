import React from 'react';
import { render } from 'react-dom';

import PhotoGrid from './components/PhotoGrid';
import App from './components/App';
// import Main from './components/Main';
import Single from './components/Single';

import css from './styles/style.styl';
//import store, curly brace is for named export
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

//if route matches '/' grab Main; depending on URL structure pass PhotoGrid or Single ie children of Main

//use <Provider> to expose store to application

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId'   component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
