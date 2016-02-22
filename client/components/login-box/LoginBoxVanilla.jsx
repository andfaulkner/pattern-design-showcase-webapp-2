export default React.createClass({
	render: function() {
		return (
			<form method="POST">
				<span>Username:</span>
				<input type="text" name="username" />
				<span>Password:</span>
				<input type="text" name="password" />
				<input type="submit" value="Submit" />
			</form>
		);
	}
});