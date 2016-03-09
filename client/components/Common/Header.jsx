var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

export default class Header extends React.Component {
	render() {
		console.log(' ****** Header rendering');
		console.log(this.props);
		return (
			<div>
				<img src='/img/logo.png' />
			</div>
		);
	}
};
