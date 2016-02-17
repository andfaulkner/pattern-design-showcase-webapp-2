class LoginBox extends import React from 'react';

class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'LoginBox';
    }
    render() {
      return (
	      <form method="POST">
			    <span>Username:</span>
	        <input type="text" name="username">
			    <span>Password:</span>
	        <input type="text" name="password">
	        <input type="submit" value="Submit">
				</form>
			)
    }
}

export default LoginBox;