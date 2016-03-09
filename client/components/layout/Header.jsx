var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
console.log('Header.jsx:: TOP');

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<img src='/img/logo.png' />
			</div>
		);
	}
};
