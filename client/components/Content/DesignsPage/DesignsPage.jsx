var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';

import {connect} from 'react-redux';
import { setCurrentPage } from '../../../store/actions/actions.jsx';
import { getContent } from '../../lib/decorators.jsx';
var classNames = require('classnames');

@getContent()('Designs')
export class DesignsPage extends React.Component {

	render() {
		return (
			<div className={classNames('error-404--wrapper')}>
				<div className={classNames('error-404--content-container')}>
					<div className={classNames('updates--block--title', 'error-404--title')}>
						404 :(
					</div>
					<img src='/img/other/404-error.jpg' />
				</div>
			</div>
		);
	}
};