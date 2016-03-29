/**************************************************************************************************
*
*			Root of todo list component. Contains 3 main parts:
*			1) button to add another todo list item
*			2) list of existing todo list items
*			3) list footer
*
*/

import Footer from './Footer.jsx';
import AddTodo from '../containers/AddTodo.jsx';
import VisibleTodoList from '../containers/VisibleTodoList.jsx';

const TodoListRoot = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default TodoListRoot;