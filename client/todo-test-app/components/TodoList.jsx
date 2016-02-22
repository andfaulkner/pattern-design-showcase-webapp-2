import Todo from './Todo.jsx';
console.log('components/TodoList:: Todo'); console.log(Todo);

const TodoList = ({ todos, onTodoClick }) => {
	console.log('components/TodoList --> TodoList:: onEntry: Todo'); console.log(Todo);
	console.log('components/TodoList --> TodoList:: onEntry: todos'); console.log(todos);
	console.log('components/TodoList --> TodoList:: onTodoClick'); console.log(onTodoClick);
	var completed = completed || false;

	return (
	<ul>
		{todos.map(todo => {
			console.log('components/TodoList --> TodoList --> todos.map:: todo'); console.log(todo);
			return <Todo
				key={todo.id}
				{...todo}
        onClick={() => { 
					console.log('components/TodoList --> TodoList --> onClick:: todo'); console.log(todo);
        	return onTodoClick(todo.id); 
        }}
			/>
		})}
	</ul>
)};

// TodoList.propTypes = {
// 	todos: React.PropTypes.arrayOf(
// 		React.PropTypes.shape({
// 			id:					React.PropTypes.number.isRequired,
// 			completed:	React.PropTypes.bool.isRequired,
// 			text:				React.PropTypes.string.isRequired
// 		}).isRequired
// 	).isRequired,
// 	onTodoClick: React.PropTypes.func.isRequired
// };

console.log('components/TodoList:: TodoList on export'); console.log(TodoList);
export default TodoList;