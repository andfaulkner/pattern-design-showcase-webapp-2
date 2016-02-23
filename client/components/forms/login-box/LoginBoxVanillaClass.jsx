var Radium = require('radium');

import {styles} from './login-box-styles.jsx';
console.log(styles);

import NavbarTest from '../../nav/navbar-test/NavbarTest.jsx';

class LoginGrid extends React.Component {
	render() {
		return (
			<div />
		);
	}
};

@Radium
class LoginComponent extends React.Component {
	static propTypes = {
    kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
	};

	submit(e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'login',
			data: $('#login-form').serialize(),
			success: function(response) {
				// TODO TEMPORARY PLACEHOLDER
				window.location.href = 'admin';
			},
			fail: function(err) {
				console.log('failed login request');
			}
		});
	}

	render() {
		return (
			<div>
				<NavbarTest />
				<div style={styles.formContainer}>
					<form method="POST" style={styles.form}>
						<div>Username:</div>
						<input type="text" name="username" id="login_username" />
						<div>
							<div>Password:</div>
							<input type="text" name="password" id="login_password" />
						</div>
						<div>
							<input type="submit" value="Submit" style={styles.submit} onClick={this.submit}/>
						</div>
					</form>
					<a href="/auth/google">login</a>
				</div>
			</div>
		);
	}
};

export class LoginBox extends React.Component {
	render() {
		return (
			<LoginComponent kind="primary" />
		)
	}
};