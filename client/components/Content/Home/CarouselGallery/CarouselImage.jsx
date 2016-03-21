var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { setLightboxIsOpenCreator } from '../../../../store/actions/actions.jsx';


/**
 * Gets state returned from reducers (dispatch --> action --> reducers --> mapStateToProps).
 * Called regardless of where reducer is activated from
 *
 * @param  {Object} state
 * @return {Object} important components of state - lightboxIsOpen
 * DEFUNCT - FOR NOW
 */
const mapStateToProps = (state) => {
	return {
		lightboxIsOpen: state.carousel.lightboxIsOpen
	}
}

/**
 * Generate a single Carousel image.
 * Listens to state for changes in lightboxIsOpen, opens & closes lightbox in response
 */
@connect()
export default class CarouselImage extends React.Component {

	constructor(props) {
		super(props);
		this.props.setLightboxIsOpenCreator = setLightboxIsOpenCreator;
	}

	/** 
	 * Display the modal gallery popover - runs on clicking an item on the carousel
	 *
	 * @param  {Object} setLightboxIsOpenCreator - action to dispatch to to open the lightbox
	 * @param  {Number} currentImage - image selected (to be opened in the lightbox)
	 */
	lightboxIsOpen = (setLightboxIsOpenCreator, currentImage) => {
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