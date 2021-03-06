var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
console.log('CommentBox.jsx:: TOP');

// MAIN REACT EXAMPLE - NUMEROUS CORE CONCEPTS HERE

import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

export default React.createClass({
	getInitialState: () => {
		console.log('init state!');
		return {data: []};
	},
	loadCommentsFromServer: function loadCommentsFromServerCommentBox() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				if (err.toString() !== 'SyntaxError: Unexpected token <') {
					console.error(this.props.url, status, err.toString());
				}
			}.bind(this)
		});
	},
	handleCommentSubmit: function(comment) {
		console.log('CommentBox: handleCommentSubmit fired!');
		console.log(comment);
		console.log(this.props.url);
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				console.log('successful post of comments!');
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log('failed post of comments :-( ');
				if (err.toString() !== 'SyntaxError: Unexpected token <') {
					console.error(this.props.url, status, err.toString());
				}
			}.bind(this)
		});
	},
	componentDidMount: function componentDidMountCommentBox() {
		this.loadCommentsFromServer();
		// WITH POLLING: (don't do this):
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className ="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});
