/**************************************************************************************************
*
*			Page footer. 
*
*/

var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { SocialMediaIcons } from '../lib/SocialMediaIcons.jsx';

export default class FooterWrapper extends React.Component {
	render() {
		return (
			<div id='footer-container'>
					<Grid fluid={true} id='footer'>
						<Col lg={1}	md={1} smHidden xsHidden />
						<Col lg={10} md={10} sm={12} xs={12}>
							<Footer/>
						</Col>
						<Col lg={1}	md={1} smHidden xsHidden />
					</Grid>
			</div>
		);
	}
};

class Footer extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={6}	md={6} sm={6} xs={6}
						 className='footer-text-col'
				>
					© 2016 Andrew Faulkner & Tamara Jurchuk
				</Col>
				<Col lg={3}	md={3} sm={3} xs={3}
						 className='footer-text-col'
				>
					FlowReach Inc.
				</Col>
				<Col lg={3}	md={3} sm={3} xs={3}>
					<SocialMediaIcons
						theme={'footer'} 
						className='footer-social-media-icons-container'
						imgClassName='footer-social-media-icon'
					/>
				</Col>
			</Row>
		);
	}
};
