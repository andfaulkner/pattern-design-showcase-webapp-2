
var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

export const styles = {
	navBarContainerOuter: {
		'display': 'block'
	},
	navBarContainer: {
		listStyleType: 'none',
		marginTop: '0px',
		paddingTop: '0px',
		overflow: 'hidden',
		backgroundColor: '#333',
	  display: 'block',
		cursor: 'auto'
	},
	topLevelMenuItem: {
		float: 'left',
		boxSizing: 'border-box',
		display: 'list-item',
		listStyleType: 'none',
		backgroundColor: 'black',
	},
	navbarLinkStyles: {
		display: 'inline-block',
		color: 'white',
		textAlign: 'center',
		padding: '10px 10px',
		textDecoration: 'none',
		fontSize: '11px'
	}
}