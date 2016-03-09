var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';

const styles = {
	titleBox: {
		textAlign: 'center',
		marginBottom: '5px',
		backgroundColor: 'white',
		letterSpacing: '8.4px',
		lineHeight: '1.6em',
		color: '#28B2A4',
		marginBottom: '10px'
	},
	titleText: {
		fontSize: '28px',
		fontWeight: 'bold',
		fontStretch: 'normal',
		fontStyle: 'normal',
		fontVariant: 'normal',
		fontFamily: 'TitleFont'
	}
};

export default class SiteTitle extends React.Component {
	render() {
		return (
			<div style={styles.titleBox}>
				<span style={styles.titleText}>FlowReach</span>
			</div>
		);
	}
};