import { combineReducers } from 'redux';

import todos from './todos.jsx';
import visibilityFilter from './visibilityFilter.jsx';

// create one giant reducers object containing all reducers, usable anywhere
const todoApp = combineReducers({
	todos,
	visibilityFilter
});

console.log('todoApp');
console.log(todoApp);

export default todoApp;