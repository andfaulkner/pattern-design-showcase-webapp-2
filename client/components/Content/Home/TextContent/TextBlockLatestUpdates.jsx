var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'; 

export const TextBlockLatestUpdates = React.createClass({
	render: function() {
		return (
			<Col lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
				<Row>
					MAIN-RIGHT!
				</Row>
			</Col>
		);
	}
});

// Settings:
// 1 or 2 line title?
// numLines={2}
// 
// has description?
// hasDescription={true}
// 
// title background colour
// titleBackgroundColor={'white'}
// 
// title font colour
// titleFontColor={'black'}
// 
// content background
// contentBackground={'white'}
// 
// content border
// contentBorder=
