var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

const TopLevelMenuItemBase = {
	paddingLeft: '10px',
	paddingRight: '10px',
	marginLeft: '10px',
	marginRight: '10px',
	boxSizing: 'border-box',
	display: 'inline-block',
	listStyleType: 'none',
	backgroundColor: '#FFFFFF',
	borderTopStyle: 'solid',
};

export const styles = {

	//**************************** WHOLE NAVBAR HOLDER ****************************//
	NavMenu: {
		base: {
		}
	},
	NavMenuContainerOuter: {
		base: {
			display: 'block',
			textAlign: 'center',
			alignContent: 'center',
			marginTop: '15px'
		}
	},
	NavMenuContainer: {
		base: {
			listStyleType: 'none',
			marginTop: '0px',
			paddingTop: '0px',
			overflow: 'hidden',
			backgroundColor: '#FFFFFF',
		  display: 'block',
			cursor: 'auto',
			textAlign: 'center',
			alignContent: 'center',
			'-webkit-padding-start': '0px'
		}
	},
	//*****************************************************************************//


	//**************************** INDIVIDUAL MENU ITEMS ****************************//
	TopLevelMenuItem: {
		base: _.defaultsDeep({}, TopLevelMenuItemBase, {
			borderTopColor: 'white',
			borderTopStyle: 'hidden',
	    ':hover': {
				borderTopColor: 'rgba(79, 212, 199, 1)',
				borderTopStyle: 'solid',
			}
		}),
		selected: _.defaultsDeep({}, TopLevelMenuItemBase, {
			borderTopColor: 'black'
		})
	},

	NavMenuLink: {
		base: {
			display: 'inline-block',
			color: 'black',
			textAlign: 'center',
			padding: '10px 10px',
			textDecoration: 'none',
			fontStyle: 'normal',
			fontVariant: 'normal',
			fontWeight: 'normal',
			fontStretch: 'normal',
			fontSize: '16px',
			lineHeight:' 1.4em',
			fontFamily: 'courier new',
	    ':hover': {
				borderTopColor: 'rgba(79, 212, 199, 1)',
				borderTopStyle: 'hidden',
				color: 'rgba(79, 212, 199, 1)'
			}
		}
	},

	//--------------------- SUBMENUS ---------------------//
	Submenu: {
		base: {
			listStyleType: 'none',
			marginTop: '0px',
			paddingTop: '0px',
			overflow: 'hidden',
			backgroundColor: '#333',
			display: 'block',
			cursor: 'auto'
		}
	},

	SubmenuItem: {
		base: {

		}
	}
	//----------------------------------------------------//
	//*******************************************************************************//

};