var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';

import {connect} from 'react-redux';
import { setCurrentPageCreator } from '../../../store/actions/actions.jsx';

@connect()
export class DesignsPage extends React.Component {
	getDefaultProps = {
		asdf: 'asdfasdf'
	}
	getInitialState = {
		asdfSTATE: 'asdfasdfasdfasdf'
	}
	constructor(props) {
		super(props);
		console.log('&&&&&&&&&&&&&&&& DesignsPage.jsx:: DesignsPage:constructor:::: this.state:', this.state);
		console.log('&&&&&&&&&&&&&&&& DesignsPage.jsx:: DesignsPage:constructor:::: this.props:', this.props);
		console.log('&&&&&&&&&&&&&&&& DesignsPage.jsx:: DesignsPage:constructor:::: props:', props);
  	this.props.dispatch(setCurrentPageCreator('Designs'));
	}

	componentWillMount = () => {
		console.log('%%%%%%%%%%%%%%%% DesignsPage.jsx:: componentWillMount::: this.props:', this.props);
	}

	render() {
		return (
			<div>Yo</div>
		);
	}
};