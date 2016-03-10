/**************************************************************************************************
*
*			Loads up logo, title, topbar with nav menu, footer.
*			Wrap other components in this.
*
*/
var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

// import { Router, Route, hashHistory, Link } from 'react-router';

import TopBar from './TopLogo.jsx';
import SiteTitle from './SiteTitle.jsx';
import Footer from './Footer.jsx';
import ContentArea from './ContentArea.jsx'
import NavMenu from './NavMenu.jsx';
import TopLogo from './TopLogo.jsx';
import Radium from 'radium';
import routes from '../../routes/routes.jsx';

var logger = require('../../helpers/logger.js')('components/Common/Common')

@Radium
export default class Common extends React.Component {
	render() {
		console.log(this.props)
		logger.logRendering('Common').inspect(this.props);
		return (
			<div>
				<TopLogo />
				<SiteTitle />
				<NavMenu routes={routes} />
				{/* CONTENT RENDERED HERE*/}
				{this.props.children}
				<Footer />
			</div>
		);
	}
};