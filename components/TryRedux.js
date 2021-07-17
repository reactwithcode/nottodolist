import {createStore} from 'redux';

// 2 REDUCER: function to manage state
// action: all of objects on inside of dispatch/action
const reducer = function (state, action) {
  let newState;
  switch (action.type) {
    case 'INC':
      newState = state + 1;
      break;
    case 'DEC':
      newState = state - 1;
    default:
      newState = state;
  }

  // if there is no action type
  return newState;
};

//1 STORE
const store = createStore(reducer, 0); // 0 is initialState

// 3 SUBCRIPTIONS
store.subscribe(() => {
  // get state reactively for every page load
  console.log(store.getState());
});

//4 DISPATHCER/ACTION
// do action, to use it on reducer
store.dispatch({type: 'INC', payload: 2});
store.dispatch({type: 'INC', payload: 3});
store.dispatch({type: 'DEC', payload: 1});
store.dispatch({type: 'DEC', payload: 2});
