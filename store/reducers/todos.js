import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {createPromise, ActionType} from 'redux-promise-middleware';
import axios from 'axios';

import {API_URL} from '../constants';

const todosInitialState = {
  todos: [],
  isLoading: false,
};

export default function (state = todosInitialState, action) {
  switch (action.type) {
    case `ALL_TODOS_${ActionType.Pending}`:
      state = {
        ...state,
        isLoading: true,
      };
      break;
    case `ALL_TODOS_${ActionType.Fulfilled}`:
      state = {
        ...state,
        isLoading: false,
        todos: action.payload.data,
      };
      break;
    default:
      state;
  }
  return state;
}
