var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

var Radium = require('radium');

import {styles} from './login-box-styles.jsx';
console.log(styles);

import NavMenu from '../../aRefactor/Common/NavMenu.jsx';

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
				<NavMenu />
					<div id="signinButton">
						<span class="g-signin"
							data-scope="https://www.googleapis.com/auth/plus.login"
							data-clientid="YOUR_CLIENT_ID"
							data-redirecturi="postmessage"
							data-accesstype="offline"
							data-cookiepolicy="single_host_origin"
							data-callback="signInCallback">
						</span>
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