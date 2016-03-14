var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';

import expect from 'expect';

console.log('experiment');

/***
*
*   REDUCERS
*
*/
const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

/***
*
*   TESTING REDUCER
*
*/
expect(
	counter(0, { type: 'INCREMENT' })
).toEqual(1, 'FAIL: counter(0, { type: \'INCREMENT\' }) does not return 1');

expect(
	counter(0, { type: 'DECREMENT' })
).toEqual(-1, 'FAIL: counter(0, { type: \'DECREMENT\' }) does not return -1');

expect(
	counter(2, { type: 'POOP' })
).toEqual(2, 'FAIL: counter(0, { type: \'POOP\' }) does not return 2');

console.log('No errors found in counter reducer!');

/***
*
*   STORE
*
*/

/***
*			STORE: CONSTRUCT STORE
*/
import { createStore } from 'redux';

const store = createStore(counter);
console.log('redux-experiments.jsx:: store:', store);

/***
*			STORE: DISPATCH ACTION TO UPDATE APP STATE (STORE)
*/
store.dispatch({ type: 'INCREMENT'});

/***
*			STORE: GET CURRENT APP STATE
*/
console.log('redux-experiments.jsx:: after increment: store.getState():', store.getState());

/***
*			STORE: REGISTER A CALLBACK THAT FIRES ANY TIME THE STATE CHANGES
*/
const render = () => {
	console.log('store: ', store.getState());
	document.getElementById('content').innerHTML = store.getState();	
};

render(); // initial render to get the 'component' ready   // => store: 1

// store.subscribe(render)
// 				does the actual subscribing;
// unsubscribeRender
// 				function subscribing returns will unregister the subscribed item, if run
var unsubscribeRender = store.subscribe(render);  // can also use a lambda in store.subscribe

store.dispatch({ type: 'INCREMENT'}); // => store: 2

/***
*			STORE: UNREGISTER A CALLBACK INTENDED TO FIRE ON STORE STATE CHANGE
*/
unsubscribeRender();
console.log('unsubscribeRender run')
store.dispatch({ type: 'INCREMENT'}); // << nothing outputted, because render is now unsubscribed

/***
*
*   REACT COMPONENTS
*
*/
