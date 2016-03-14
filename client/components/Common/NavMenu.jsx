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

var logger = 
	require('../../helpers/logger.js')('components/Common/NavMenu.jsx');

import {styles} from './NavMenu-styles.jsx';
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
		console.log('NavMenu.jsx:: NavMenu: constructor: props:', props);
		this.state = this.state || { currentPage: 'Home'};
		console.log('NavMenu.jsx:: NavMenu: constructor: this.state:', this.state);
  }

  selectMenuItem = (index, menuItem) => {
  	console.log('\n\n\n\n\n\n\n\n\n\n\n\nNavMenu.jsx:: selectMenuItem entered!');
  	this.state = { currentPage: menuItem.title };
  	this.setState({ currentPage: menuItem.title }, function() {
			console.log('\n\nNavMenu: NavMenu.selectMenuItem: this:', this);
			console.log('NavMenu: NavMenu.selectMenuItem: index:', index);
			console.log('NavMenu: NavMenu.selectMenuItem: menuItem:', menuItem);
			console.log('\n\n\n\n\n\n\n\n\n\n\n\n')
  	});
  }

  /**
   * @METHOD
   * Builder that generates individual menu items from routes list
   * @return {ReactElement} TopLevelMenuItem, initialized
   */
	generateMenuItems = () => {
		var clStyle = 'color: white; background: black; font-size: 12px';
		// TODO TOSS THIS - SHOULD COME FROM PARENTS
		return _(this.props.routes)
			.map((navItem, index) => {
				console.log('%cNavMenu: NavMenu.generateMenuItems: navItem.title:', clStyle, navItem.title);
				console.log('%cNavMenu: NavMenu.generateMenuItems: this:', clStyle, this);
				console.log('%cNavMenu: NavMenu.generateMenuItems: this.state:', clStyle, this.state);
				console.log('%cNavMenu: NavMenu.generateMenuItems: this.state.currentPage:', clStyle, this.state.currentPage);
				// if title property isn't defined, this route isn't for the topbar
				return (navItem.title)
					? (<TopLevelMenuItem
							key={index}
							path={navItem.path}
							title={navItem.title}
							styles={styles.TopLevelMenuItem.base}
							selected={this.state.currentPage === navItem.title}
							selectMenuItem={this.selectMenuItem.bind(this, index, navItem)}
							{...this.props}
						/>)
					: null;
			})
			.compact().value();
	}

	render() {
		// Get components for individual top level items on the navbar
		return (
			<NavMenuContainer>
				{this.generateMenuItems()}
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
	render() {
		var style = (this.props.selected)
			? styles.TopLevelMenuItem.selected
			: styles.TopLevelMenuItem.base;
		return (
			<li style={style} key={this.props.index}>
				<Link
					to={this.props.path}
					style={styles.NavMenuLink.base}
					onClick={this.props.selectMenuItem}
				>
					{this.props.title}
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
