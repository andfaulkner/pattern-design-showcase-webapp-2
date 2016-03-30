var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
var classNames = require('classnames');

export class Title extends React.Component {

	static propTypes = {
		title: React.PropTypes.string.isRequired
	}

	render() {
		return (
			<div>
				<div className={classNames('page--title-container')}>
					<div className={classNames('page--title')}>{this.props.title}</div>
				</div>
			</div>
		);
	}
};
