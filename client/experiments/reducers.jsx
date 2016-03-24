import * as counterReducers from './counter-reducers.jsx';
import * as todoReducers from './todo-reducers.jsx';
import * as ajaxReducers from './ajax-reducers.jsx';

export const reducers = Object.assign({}, counterReducers, todoReducers);