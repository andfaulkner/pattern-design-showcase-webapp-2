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

import {connect} from 'react-redux';
import Lightbox from 'react-images';
import { setCurrentPageCreator } from '../../store/actions/actions.jsx';

const mapStateToProps = (state) => {
	return {
		...state,
		currentPage: state.setCurrentPage.currentPage
	}
}

/**
 * root NavBar rendering commponent
 */
@Radium
@connect(mapStateToProps)
export default class NavMenu extends React.Component {

  constructor(props) {
		super(props);
		this.state = this.state || { currentPage: 'Home'};
  }

  selectMenuItem = (setCurrentPageCreator, index, menuItem) => {
  	this.props.dispatch(setCurrentPageCreator(menuItem.title));
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
				// if title property isn't defined, this route isn't for the topbar
				return (navItem.title)
					? (<TopLevelMenuItem
							key={index}
							path={navItem.path}
							title={navItem.title}
							styles={styles.TopLevelMenuItem.base}
							selected={this.props.currentPage === navItem.title}
							selectMenuItem={this.selectMenuItem.bind(this, setCurrentPageCreator, index, navItem)}
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
 * TODO: does this do fuck all?
 */
@Radium
class NavMenuContainer extends React.Component {
	render() {
		return (
			<div style={styles.NavMenuContainerOuter.base}>
				{this.props.children}
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
		var status = Radium.getState(this.state, this.key, ':hover');
		return (
			<li
				className={(this.props.selected) ? 'top-level-menu-item-selected' : 'top-level-menu-item'}
				key={this.props.index}
			>
				<Link
					to={this.props.path}
					className='top-level-menu-link'
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
