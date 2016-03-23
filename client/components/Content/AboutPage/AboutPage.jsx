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
export class AboutPage extends React.Component {

	constructor(props) {
		super(props);
		console.log('AboutPage.jsx:: AboutPage: constructor loaded!');
		this.props.dispatch(setCurrentPage('About'));
	}

	render() {
		return (
			<div>About that time, eh chaps?</div>
		);
	}
};