var React = React || require('react');

export const Counter = ({ value, onIncrement, onDecrement }) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);
