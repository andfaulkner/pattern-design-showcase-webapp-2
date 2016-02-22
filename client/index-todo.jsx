/**************************************************************************************************
*
*			Full mini-app implementing a todo list with React & Redux
*
*/

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

	// <Router history={hashHistory}>
	// 	<Route path="/" component={NavbarTest} />
	// 	<Route path="/comment" component={CommentBox} />
	// 	<Route path="/like" component={LikeButton} />
	// 	<Route path="/affinity" component={AffinityButton} />
	// 	<Route path="/upload_images" component={ImageUploader} />
	// </Router>,
