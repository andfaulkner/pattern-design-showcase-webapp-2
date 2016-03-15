/**************************************************************************************************
*
*			Page footer. 
*
*/

var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

export default class Footer extends React.Component {
	render() {
		return (
			<div id='footer-container'>
				<div id='footer'>Footer!</div>
			</div>
		);
	}
};
