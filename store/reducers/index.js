// 2
import {combineReducers} from 'redux';

import todosReducer from './todos';

// 2
const rootReducers = combineReducers({
  todosReducer,
});

export default rootReducers;
