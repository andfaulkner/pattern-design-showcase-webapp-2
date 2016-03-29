var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

import Comment from './Comment.jsx';

console.log('CommentList.jsx:: TOP');

export default React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<div className="commentList">
					<Comment author={comment.author} key={comment.id}>
						{comment.text}
					</Comment>
					Hello, I am a comment list!
				</div>
			);
		});
		return (
			<div className="commentList">
					{commentNodes}
			</div>
		);
	}
});
