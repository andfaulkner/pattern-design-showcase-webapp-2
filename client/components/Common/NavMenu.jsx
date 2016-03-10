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
		this.state = { currentPage: 'Home'};
		console.log('NavMenu.jsx:: NavMenu: constructor: this.state:', this.state);
  }

  selectState(menuItem) {
		console.log('NavMenu: NavMenu.selectState: this:', this);
  	this.setState({ currentPage: menuItem });
  	this.render();
  }

  /**
   * @METHOD
   * Builder that generates individual menu items from routes list
   * @return {ReactElement} TopLevelMenuItem, initialized
   */
	generateMenuItems = () => {
		var self = this;
		// TODO TOSS THIS - SHOULD COME FROM PARENTS
		return _(this.props.routes)
			.map((navItem, index) => {
				console.log('NavMenu: NavMenu.generateMenuItems: navItem.title:', navItem.title);
				console.log('NavMenu: NavMenu.generateMenuItems: this.state:', this.state);
				console.log('NavMenu: NavMenu.generateMenuItems: this.state.currentPage:', this.state.currentPage);
				// if title property isn't defined, this route isn't for the topbar
				return (navItem.title)
					? (<TopLevelMenuItem
							key={index}
							path={navItem.path}
							title={navItem.title}
							styles={styles.TopLevelMenuItem.base}
							selected={this.state.currentPage === navItem.title}
							selectState={this.selectState.bind(self, navItem.title)}
							{...this.props}
						/>)
					: null;
			})
			.compact().value();
	}

	render() {
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
		console.log('NavMenu.jsx:: NavMenuContainer: this:', this);
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
		console.log('TopLevelMenuItem:: this.props: ', this.props);
		console.log('TopLevelMenuItem:: this.state: ', this.state);
		var style = (this.props.selected)
			? styles.TopLevelMenuItem.selected
			: styles.TopLevelMenuItem.base;
		return (
			<li style={style} key={this.props.index}>
				<Link
					to={this.props.path}
					style={styles.NavMenuLink.base}
					onClick={this.props.selectState}
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
