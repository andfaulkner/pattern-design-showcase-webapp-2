/**************************************************************************************************
*
*			A single Todo list item
*
*/

const Todo = ({ onClick, component, text }) => {
	console.log('components/Todo --> Todo:: onEntry: onClick'); console.log(onClick);
	console.log('components/Todo --> Todo:: onEntry: component'); console.log(component);
	console.log('components/Todo --> Todo:: onEntry: text'); console.log(text);
	var completed = completed || false;

	return <li
		onClick={onClick}
		style={{
			textDecoration: _.isUndefined(completed || false)
				? 'line-through'
				: 'none'
		}}
	>
		{text}
	</li>
};

// // validate that the right 'types' are inputted to const Todo
// Todo.propTypes = {
// 	onClick: React.PropTypes.func.isRequired,
// 	completed: React.PropTypes.bool.isRequired,
// 	text: React.PropTypes.string.isRequired,
// };

export default Todo;