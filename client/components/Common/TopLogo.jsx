var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

var logger = require('../../helpers/logger.js')('components/Common/TopLogo.jsx');

const TopLogo = () => (
	<div id='top-logo'>
		<img src="./img/logo.png" />
	</div>
);

export default TopLogo;