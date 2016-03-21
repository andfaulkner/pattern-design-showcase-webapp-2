var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import {ReactRouter, Link, Router, Route, hashHistory} from 'react-router';
import {connect} from 'react-redux';

import { setLightboxIsOpenCreator } from '../../../../store/actions/actions.jsx';

/**
 * Gets the back from 
 *
 * @param  {[type]} state [description]
 * @return {[type]} [description]
 */
const mapStateToProps = (state) => {
	return {
		lightboxIsOpen: state.lightboxIsOpen
	}
}

@connect(mapStateToProps)
export default class CarouselImage extends React.Component {
	constructor(props) {
		super(props);
		this.props.setLightboxIsOpenCreator = setLightboxIsOpenCreator;
	}

	// Display the modal gallery popover - runs on clicking an item on the carousel
	lightboxIsOpen = (setLightboxIsOpenCreator, currentImage) => {
		console.log('CarouselImage.jsx:: CarouselImage.lightboxIsOpen:: currentImage:', currentImage);
		this.props.dispatch(setLightboxIsOpenCreator(true, currentImage));
	}
	render() {
		return (
			<img src={this.props.src}
					 style={this.props.style}
					 currentImage={this.props.currentImage}
					 onClick={
					 	_.partial(this.lightboxIsOpen, setLightboxIsOpenCreator, this.props.currentImage)
					 }
			/>
		);
	}
};