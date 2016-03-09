var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

// TUTORIAL: handling events
import Common from '../../aRefactor/Common/Common.jsx';

const LikeButton = React.createClass({
	// is it liked or disliked to start?
	getInitialState: () => ({liked: false}),
	// what to do on click?
	handleClick: function(event) {
		this.setState({ liked: !this.state.liked });
	},
	// Create the component!
	render: function() {
		var text = this.state.liked
			? 'like'
			: 'haven\'t liked';
		return (
			<Common>
				<p onClick={this.handleClick}>
					You {text} this. Click to toggle.
				</p>
			</Common>
		)
	}
});

export { LikeButton as LikeButton };