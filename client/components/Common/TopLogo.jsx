var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

var logger = require('../../helpers/logger.js')('components/Common/TopLogo.jsx');

var styles = {
	topLogo: {
		textAlign: 'center',
		marginBottom: '5px',
		backgroundColor: 'white'
	}
};

export default class TopLogo extends React.Component {
	render() {
		return (
			<div style={styles.topLogo}>
				<img src="./img/logo.png" />
			</div>
		);
	}
};