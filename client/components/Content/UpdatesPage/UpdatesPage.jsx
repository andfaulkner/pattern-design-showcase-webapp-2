var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import {connect} from 'react-redux';
import { setCurrentPage } from '../../../store/actions/actions.jsx';

const mapStateToProps = (state) => {
	return {
		...state,
		currentPage: state.setCurrentPage.currentPage
	}
}


@connect(mapStateToProps)
export class UpdatesPage extends React.Component {

	componentWillReceiveProps = (nextProps) => {
		console.log('^^^^^^^^^^^^^^^^^^^ UpdatesPage.jsx:: UpdatesPage: componentWillReceiveProps!');
	}

	constructor(props) {
		super(props);
		console.log('^^^^^^^^^^^^^^^^^^^ UpdatesPage.jsx:: UpdatesPage: constructor!!');
		this.props.dispatch(setCurrentPage('Updates'));
	}

	render() {
		return (
			<div>Too many things happening to list them!</div>
		);
	}
};