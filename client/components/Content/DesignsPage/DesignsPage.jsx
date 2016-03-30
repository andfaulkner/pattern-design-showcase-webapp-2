var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';

import {connect} from 'react-redux';
import { setCurrentPage } from '../../../store/actions/actions.jsx';

export class DesignsPage extends React.Component {

	render() {
		return (
			<div>Wow, these are really great designs!</div>
		);
	}
};