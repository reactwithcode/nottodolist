import axios from 'axios';

import {API_URL} from '../constants/';
import {createPromise, ActionType} from 'redux-promise-middleware';

export function allTodos() {
  return {
    type: `ALL_TODOS`,
    payload: axios.get(`${API_URL}todos/`),
  };
}
