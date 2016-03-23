var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';

import {connect} from 'react-redux';
import { setCurrentPageCreator } from '../../../store/actions/actions.jsx';

function lifecycleDefaults(target) {
	target.prototype.componentWillMount = function() {
		console.log('componentWillMount ran from decorator!');
		console.log('this.props is still accessible', this.props);
	}
	target.prototype.componentWillUnmount = function() {
		console.log('componentWillUnmount ran from decorator!');
		console.log('this.props is still accessible', this.props);
	}
	target.prototype.componentDidMount = function() {
		console.log('componentDidMount ran from decorator!');
		console.log('this.props is still accessible', this.props);
	}
}

@lifecycleDefaults
export class DesignsPage extends React.Component {

	render() {
		return (
			<div>Wow, these are really great designs!</div>
		);
	}
};