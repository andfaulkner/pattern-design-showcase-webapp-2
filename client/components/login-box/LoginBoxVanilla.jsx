var ReactGridLayout = require('react-grid-layout');

var loginGrid = React.createClass({
	render: function() {
		return (
			<div />
		);
	}
});



export default React.createClass({
	render: function() {
		return (
			<form method="POST">
				<span>Username:</span>
				<input type="text" name="username" />
				<div>
					<span>Password:</span>
					<input type="text" name="password" />
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		);
	}
});