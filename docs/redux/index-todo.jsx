/**************************************************************************************************
*
*			Full mini-app implementing a todo list with React & Redux
*
*/
var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import routes from './todo-test-app/controllers/routes.jsx';
import todoApp from './todo-test-app/controllers/reducers/index.jsx';
import TodoListRoot from './todo-test-app/components/TodoListRoot.jsx';
import configureStore from './todo-test-app/configureStore.jsx'
import logger from './helpers/logger.js';

var modLog = logger('index-todo');
modLog.inspect({ hello: 'logger' });

var modLog2 = modLog.fn('global');
modLog2.inspect({ hello2: 'logger2' });

console.log(configureStore);
console.log(configureStore.name);

// use a reducer to build the initial state
let store = configureStore();

// App rendering occurs here. Provider makes the "store" available in all subtags. 
// TodoListRoot is the TodoList component itself.
ReactDOM.render(
	<Provider store={store}>
		<TodoListRoot />
	</Provider>,
	document.getElementById('content')
);