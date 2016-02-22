// TUTORIAL: handling events

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
			<p onClick={this.handleClick}>
				You {text} this. Click to toggle.
			</p>
		)
	}
});

export { LikeButton as LikeButton };