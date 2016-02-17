var Comment = require('./Comment.jsx');

module.exports = React.createClass({
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
