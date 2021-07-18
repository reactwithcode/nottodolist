import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {createPromise, ActionType} from 'redux-promise-middleware';
import axios from 'axios';

import {API_URL} from '../constants';

// 2 REDUCER: function to manage state
// action: all of objects on inside of dispatch/action
// const reducer = function (state, action) {
//   let newState;
//   switch (action.type) {
//     case 'INC':
//       newState = state + 1;
//       break;
//     case 'DEC':
//       newState = state - 1;
//     default:
//       newState = state;
//   }

//   // if there is no action type
//   return newState;
// };

//REDUCER
const userInitialState = {
  username: '',
};

const userReducer = function (state = userInitialState, action) {
  switch (action.type) {
    case 'USER_CHANGE_USERNAME':
      state = {
        ...state,
        username: action.payload,
      };
      break;
    default:
      state;
  }
  return state;
};

const todosInitialState = {
  todos: [],
  isLoading: false,
};

const todosReducer = function (state = todosInitialState, action) {
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
};

//1 STORE: only one store in redux

const rootReducers = combineReducers({
  userReducer,
  todosReducer,
});

const middlewares = applyMiddleware(logger, createPromise()); //add logger on development

const store = createStore(rootReducers, middlewares); // 0 is initialState

// 3 SUBCRIPTIONS
store.subscribe(() => {
  // get state reactively for every page load
  console.log(store.getState());
});

//4 DISPATHCER/ACTION
// do action, to use it on reducer
store.dispatch({
  type: 'ALL_TODOS',
  payload: axios.get(`${API_URL}todos`),
});
