var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import {connect} from 'react-redux';
import { setCurrentPage } from '../../../store/actions/actions.jsx';

@connect()
export class Page extends React.Component {

	constructor(props) {
		super(props);
		this.props.dispatch(setCurrentPage('Updates'));
	}

	render() {
		return (
			<div>Yo</div>
		);
	}
};