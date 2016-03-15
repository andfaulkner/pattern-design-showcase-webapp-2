var expect = require('expect');
var deepFreeze = require('deep-freeze');

/**
 * Find a Todo based on ID, then trigger the provided function on it & return the result
 * @param  {Object} state 	state tree
 * @param  {Object} action 	full action object that triggered the reducer
 * @param  {Function} fn) 	function to run on specific todo the action is targeting
 * @return {Object} 				transformed clone of state tree
 */
const runFnOnTodo = (state, action, fn) => (
	state.map((todo) => (todo.id === action.id) ? fn(todo) : todo)
);

/**
 * If completed is false, make it true. If completed is true, make it false
 * @param  {Object} todo 			part of state tree representing a single todo list item
 * @return {Object} transformed clone of todo list state tree 	
 */
const toggleTodo = (todo) => Object.assign({}, todo, { completed: !todo.completed });

const addTodo = (state, action) => ([
	...state,
	{
		id: action.id,
		text: action.text,
		completed: false
	}
]);


export const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return addTodo(state, action);
		case 'REMOVE_TODO':
			return _.filter(state, (todo) => todo.id !== action.id);
		case 'TOGGLE_TODO':
			return findTodo(state, action, toggleTodo);
		default:
			if (_.isArray(state) && state.length === 0) {
				console.log('empty todo list state tree');
			} else {
				console.log('Unknown action pattern, returning state unchanged');
			}
			return state;
	}
};


export const todoTests = {
	//Ensure you can turn a todo on or off
	testToggleTodo: () => {
		const todoBefore = {
			id: 0,
			text: 'Pet Meeka a lot',
			completed: true
		};
		const todoAfter = {
			id: 0,
			text: 'Pet Meeka a lot',
			completed: false
		};
		deepFreeze(todoBefore);

		expect(toggleTodo(todoBefore)).toEqual(todoAfter);
		console.log('todo-reducers.jsx:: todoTests: End of testToggleTodo!!!');
	},
	//Ensure you can add a Todo item to the state
	testAddTodo: () => {
		const stateBefore = [];
		const action = { 
			type: 'ADD_TODO',
			id: 0,
			text: 'Pet Meeka tons and tons'
		};
		const stateAfter = [{ 
			completed: false,
			id: 0,
			text: 'Pet Meeka tons and tons'
		}];
		deepFreeze(action);
		deepFreeze(stateBefore);

		expect(todos(stateBefore, action)).toEqual(stateAfter);
		console.log('todo-reducers.jsx:: testAddTodo: all tests passed!');
	},
	//Ensure you can remove a Todo item from the state
	testRemoveTodo: () => {
		const stateBefore = [{ 
			completed: false,
			id: 0,
			text: 'Pet Meeka tons and tons'
		}, {
			completed: true,
			id: 1,
			text: 'Give Meeka attention'			
		}];
		const action = { 
			type: 'REMOVE_TODO',
			id: 1
		};
		const stateAfter = [{ 
			completed: false,
			id: 0,
			text: 'Pet Meeka tons and tons'
		}];
		deepFreeze(action);
		deepFreeze(stateBefore);

		expect(todos(stateBefore, action)).toEqual(stateAfter);
		console.log('todo-reducers.jsx:: testRemoveTodo: all tests passed!');
	}
};
