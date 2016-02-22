let nextTodoId = 0;

// action pattern to add a todo item (to the store)
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

// action pattern to show & hide todo items
export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

// action pattern to activate & deactivate todo items
export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}
