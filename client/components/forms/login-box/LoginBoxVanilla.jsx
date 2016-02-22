var ReactGridLayout = require('react-grid-layout');
var Formsy = require('formsy-react');
console.log(Formsy);

import {styles} from './login-box-styles.jsx';
console.log(styles);

import NavbarTest from '../../nav/navbar-test/NavbarTest.jsx';

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
			<div>
				<NavbarTest />
				<div style={styles.formContainer}>
					<form method="POST" style={styles.form}>
						<div>Username:</div>
						<input type="text" name="username" />
						<div>
							<div>Password:</div>
							<input type="text" name="password" />
						</div>
						<div>
							<input type="submit" value="Submit" style={styles.submit} />
						</div>
					</form>
				</div>
			</div>
		);
	}
});