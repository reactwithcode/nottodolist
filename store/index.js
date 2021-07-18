import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import logger from 'redux-logger';
import {createPromise, ActionType} from 'redux-promise-middleware';

import rootReducers from './reducers';

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, createPromise())),
);

export default store;
