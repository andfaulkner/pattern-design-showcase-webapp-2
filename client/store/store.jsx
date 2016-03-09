// function clientStore(state, action) {
// 	if (typeof state === 'undefined') {
// 		return 0;
// 	}
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1
// 		case 'DECREMENT':
// 			return state - 1
// 		default:
// 			return state
// 	}
// }
// var store = Redux.createStore(clientStore);
// var valueEl = document.getElementById('value');
// function render() {
// 	valueEl.innerHTML = store.getState().toString();
// }

const store = { };

export store;