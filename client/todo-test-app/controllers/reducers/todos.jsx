/**************************************************************************************************
*
*			Reducers to modify state tree based on todo item creation & state changes
*
*/

const todo = (state, action) => {
	switch (action.type) {
		// add a new item to the todo list
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
			break;
		// if the todo is off, turn it on. If it's on, turn it off.
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				completed: !state.completed
			})
			break;
		// nothing changes for the todo item
		default:
			return state;
	}
}

const todos = (state=[], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
			break;
		case 'TOGGLE_TODO':
			return state.map(todoItem => todo(todoItem, action))
		default:
			return state;
			break;
	}
}

export default todos;