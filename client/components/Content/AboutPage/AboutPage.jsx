var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { getContent } from '../../lib/decorators.jsx';
import { setCurrentPage } from '../../../store/actions/actions.jsx';


@getContent()
export class AboutPage extends React.Component {

	constructor(props) {
		super(props);
		this.props.dispatch(setCurrentPage('About'));
	}

	render() {
		return (
			<div>About that time, eh chaps?</div>
		);
	}
};