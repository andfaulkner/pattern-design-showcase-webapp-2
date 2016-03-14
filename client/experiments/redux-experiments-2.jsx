var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import expect from 'expect';
var deepFreeze = require('deep-freeze');

import {counterTests} from './counter-reducers';
import {todoTests} from './todo-reducers';

_.each(counterTests, fn => fn())
_.each(todoTests, fn => fn())


/***
*
*   REDUCERS
*
*/
import {reducers} from './reducers';

/***
*
*   STORE
*
*/
/***
*			STORE: IMPORT & CONSTRUCT STORE
*/
import { createStore } from 'redux';
const store = createStore(reducers.counterReducer);

/***
*
*   COMPONENTS (REACT)
*
*/
/***
*			COMPONENTS: CREATE RENDERABLE REACT COMPONENT
*/
import {Counter} from './Counter';
import {TodoList} from './TodoList';

/***
*			COMPONENTS: RENDER REACT COMPONENT
*/
const render = () => {
	ReactDOM.render(
		<div>
			<Counter
				value={store.getState()}
				onIncrement={() => store.dispatch({ type: 'INCREMENT' }) }
				onDecrement={() => store.dispatch({ type: 'DECREMENT' }) }
			/>
			{/*<TodoList>
				{this.props.children}
			</TodoList>*/}
		</div>,
		document.getElementById('content')
	);
};

/***
*			STORE: REGISTER A CALLBACK THAT FIRES ANY TIME THE STATE CHANGES
*/
store.subscribe(render);

/***
*			RENDER THE REACT COMPONENT FOR THE FIRST TIME.
*/
render();