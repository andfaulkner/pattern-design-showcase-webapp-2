var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

import Common from '../../Common/Common.jsx';
var logger = require('../../../../helpers/logger.js')('components/Content/Home.jsx');
import Carousel from './Carousel.jsx';

console.log('Home.jsx:: TOP');

console.log(Carousel);

export default class Home extends React.Component {
	render() {
		logger.logRendering('Home').inspect(this.props);
		return (
			<Common>
				<Carousel/>
			</Common>
		);
	}
};