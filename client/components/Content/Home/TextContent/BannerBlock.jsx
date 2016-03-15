var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { Row, Col } from 'react-bootstrap'; 

export class BannerBlock extends React.Component {

	constructor({container, ...props}) {
		super(props);
		this.container = container;
	}

	render() {
		return (
			<Row id='banner-block-container' className='contentblock-left'>
				<Col xsHidden>
					<img
						className='three-banners-img-block'
						id='three-banners-img'
						src='/img/three-banners.jpg'
					/>
				</Col>
			</Row>
		);
	}
};
