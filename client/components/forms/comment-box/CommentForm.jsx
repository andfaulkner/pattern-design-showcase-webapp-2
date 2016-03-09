var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {author: '', text: ''};
	},
	handleAuthorChange: function(e) {
		console.log('author changed!');
		this.setState({author: e.target.value});
	},
	handleTextChange: function(e) {
		console.log('text changed!');
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		console.log('handleSubmit fired!');
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if (!author || !text) {
			return;
		}
    this.props.onCommentSubmit({author: author, text: text}); // calls parent
		this.setState({author: '', text: ''}); // clears the form
	},
	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input 
					type="text"
					placeholder="Name"
					value={this.state.author}
					onChange={this.handleAuthorChange}
				/>
				<input 
					type="text"
					placeholder="Comment goes here"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<input type="submit" value="Post" />
			</form>
		);
	}
});