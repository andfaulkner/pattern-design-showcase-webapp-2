/**************************************************************************************************
*
*			define module here - e.g. Used for external access to app todo lists
*
*/

import { connect } from 'react-redux';
import { toggleTodo } from '../controllers/actions.jsx';
import TodoList from '../components/TodoList.jsx';

const getVisibleTodos = (todos, filter) => {
	console.log('containers/VisibleTodoList --> getVisibleTodos:: todos: '); console.log(todos);
	console.log('containers/VisibleTodoList --> getVisibleTodos:: filter: '); console.log(filter);

	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		default:
			console.error('VisibleTodoList: getVisibleTodos: unknown filter type');
			return todos;
	}
}

const mapStateToProps = (state) => {
	console.log('containers/VisibleTodoList --> mapStateToProps:: state: '); console.log(state);

	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	console.log('containers/VisibleTodoList-> mapDispatchToProps: dispatch:'); console.log(dispatch);
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id));
		}
	}
}

console.log('containers/VisibleTodoList:: mapStateToProps'); console.log(mapStateToProps);
console.log('containers/VisibleTodoList:: mapDispatchToProps'); console.log(mapDispatchToProps);
console.log('containers/VisibleTodoList:: TodoList'); console.log(TodoList);
console.log('containers/VisibleTodoList:: toggleTodo'); console.log(toggleTodo);
console.log('containers/VisibleTodoList:: connect'); console.log(connect);

// connect: Connects a React component to a Redux store
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

console.log('containers/VisibleTodoList: pre-ret VisibleTodoList'); console.log(VisibleTodoList);
export default VisibleTodoList;