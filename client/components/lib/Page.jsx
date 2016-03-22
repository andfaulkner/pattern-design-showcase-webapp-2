var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import {connect} from 'react-redux';
import { setCurrentPageCreator } from '../../../store/actions/actions.jsx';

@connect()
export class Page extends React.Component {

	constructor(props) {
		super(props);
		this.props.dispatch(setCurrentPageCreator('Updates'));
	}

	render() {
		return (
			<div>Yo</div>
		);
	}
};