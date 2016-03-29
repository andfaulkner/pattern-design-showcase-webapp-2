/**************************************************************************************************
*
*			Component that allows addition of a new todo list item.
*			Includes input box, form, & button.
*			Wired to 
*
*/
var modNm = 'containers/AddTodo ';

import { connect } from 'react-redux';
import { addTodo } from '../controllers/actions.jsx';

console.log(modNm + '::connect: '); console.log(connect);
console.log(modNm + ':: addTodo: '); console.log(addTodo);

let AddTodo = ({ dispatch }) => {
	let fnName = modNm + '--> AddTodo';
	console.log(fnName + ':: dispatch: '); console.log(dispatch);
	console.log(fnName + ':: connect: '); console.log(connect);
	console.log(fnName + ':: addTodo: '); console.log(addTodo);

	let input;
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					console.log(fnName + ' --> onSubmit:: e:'); console.log(e);
					console.log(fnName + ' --> onSubmit:: on entry, input:'); console.log(input);
					if (!input.value.trim()) {
						return;
					}
					console.log(fnName + ' --> onSubmit:: on exit, input:'); console.log(input);
					dispatch(addTodo(input.value));
					input.value = '';
				}}
			>
				<input
					ref={node => {
						console.log(fnName + ' --> define ref:: node'); console.log(node);
						input = node;
					}}
				/>
				<button type="submit">
					Add Todo
				</button>
			</form>
		</div>
	);
};

AddTodo = connect()(AddTodo);
console.log(modNm + '--> AddTodo --> AddTodo just before ret'); console.log(AddTodo);

export default AddTodo;