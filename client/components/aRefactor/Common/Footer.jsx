var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

export default class Footer extends React.Component {
	render() {
		const footerContainerStyles = {
			position: 'absolute',
			width: '100%',
			height: '100%', 
		}

		const footerStyles = {
			position: 'absolute',
			bottom: 0,
			width: '100%',
			height: '50px',
			border: '1px solid red',
			textAlign: 'center'
		};
		console.log(footerContainerStyles)
		return (
			<div style={footerContainerStyles}>
				<div style={footerStyles}>Footer!</div>
			</div>
		);
	}
};
