import { createStore, compose } from 'redux';
//syncHistoryWithStore: hooks up react-router with redux
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
//import root reducer
import rootReducer from './reducers/index';

//set default data

import comments from './data/comments';
import posts from './data/posts';

//create object for default data
const defaultState = {
  posts: posts,
  comments: comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  });
}

export default store
