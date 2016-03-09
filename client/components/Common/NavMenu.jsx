/**************************************************************************************************
*
*  Navigation bar at top of screen. Component structure:
*
* 		.---NavMenu-------------------------------------------------------------------------------.
* 		|                                                                                         |
* 		|    .--NavMenuContainer----------------------------------------------------------------.  |
* 		|    |                                                                                 |  |
* 		|    |     .--TopLevelMenuItem-------------------------.   .-TopLevelMenuItem-.        |  |
* 		|    |     |                                           |   |                  |  ...   |  |
* 		|    |		 |  .-Submenu-----------------------------.  |   |                  |  etc.  |  |
* 		|    |		 |  |   .-SubmenuItem-.  .-SubmenuItem--. |  |   |                  |  ...   |  |
* 		|    |		 |  |   |             |  |              | |  |   --------------------        |  |
* 		|    |     |  |   ---------------  ---------------- |  |                               |  |
* 		|    |     |  \-------------------------------------/  |                               |  |
* 		|    |     |                                           |                               |  |
* 		|    |     ---------------------------------------------                               |  |
* 		|    |                                                                                 |  |
* 		|    \---------------------------------------------------------------------------------/  |
* 		|                                                                                         |
*     -------------------------------------------------------------------------------------------
*/

var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

var logger = require('../../helpers/logger.js')('components/Common/NavMenu.jsx')

import { styles } from './NavMenu-styles.jsx';
import routes from '../../routes/routes.jsx';
import TopLogo from './TopLogo.jsx';
import Radium from 'radium';


/**
 * root NavBar rendering commponent
 */
@Radium
export default class NavMenu extends React.Component {

  constructor(props) {
    super(props);
    console.log('NavMenu props', props);
  }

	generateMenuItems = () => {
		console.log('NavMenu:: generateMenuItems: props');
		console.log(this.props);
		// TODO TOSS THIS - SHOULD COME FROM PARENTS
		return _(routes)
			.map((navItem, index) => {
				console.log('!!!! navItem !!!!');
				console.log(navItem);
				// if title property isn't defined, this route isn't for the topbar
				return (navItem.title)
					? (<TopLevelMenuItem
							key={index}
							path={navItem.path}
							title={navItem.title}
							styles={styles.TopLevelMenuItem.base}
							{...this.props} />)
					: null
			})
			.compact().value()
	}

	render() {
		logger.logRendering('NavMenu').inspect(this.props);
		// Get components for individual top level items on the navbar
		var topLevelMenuItems = this.generateMenuItems();
		return (
			<NavMenuContainer>
				{topLevelMenuItems}
			</NavMenuContainer>
		);
	}
};

/**
 * Renders block containing the entire navigation bar
 */
@Radium
class NavMenuContainer extends React.Component {
	render() {
		var fnLog = logger.logRendering('NavMenuContainer').inspect(this.props);
		return (
			<div>
				<div style={styles.NavMenuContainerOuter.base}>
					<ul style={styles.NavMenuContainer.base}>
						{this.props.children}
					</ul>
				</div>
			</div>
		);
	}
};

/**
 * Individual top-level menu item
 */
@Radium
class TopLevelMenuItem extends React.Component {
	// static defaultProps = {
	// 	childRoutes: []
	// }
	render() {
		logger.logRendering('TopLevelMenuItem').inspect(this.props);
		return (
				<li style={styles.TopLevelMenuItem.base} key={ this.props.index }>
					<Link to={ this.props.path } style={ styles.NavMenuLink.base }>
						{ this.props.title }
					</Link>
				</li>
		);
	}
};

/**
 * Dropdown menu box, appears on hover of TopLevelMenuItem
 */
@Radium
class Submenu extends React.Component {
	render() {
		return (
			<div>Yo</div>
		);
	}
};

/**
 * Single item in the dropdown menu box (appearing on a TopLevelMenuItem hover)
 */
@Radium
class SubmenuItem extends React.Component {
	render() {
		return (
			<div>Yo!!!</div>
		);
	}
};