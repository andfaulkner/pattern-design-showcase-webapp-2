import * as counterReducers from './counter-reducers.jsx';
import * as todoReducers from './todo-reducers.jsx';

export const reducers = Object.assign({}, counterReducers, todoReducers);