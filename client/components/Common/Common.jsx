/**************************************************************************************************
*
*			Loads up logo, title, topbar with nav menu, footer.
*			Wrap other components in this.
*
*/
var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

import SiteTitle from './SiteTitle.jsx';
import Footer from './Footer.jsx';
import NavMenu from './NavMenu.jsx';
import TopLogo from './TopLogo.jsx';
import Radium from 'radium';
import routes from '../../routes/routes.jsx';

@Radium
export default class Common extends React.Component {
	render() {
		return (
			<div>
				<TopLogo />
				<SiteTitle />
				<NavMenu routes={routes} />
				{this.props.children}					{/* actual content rendered here */}
				<Footer />
			</div>
		);
	}
};