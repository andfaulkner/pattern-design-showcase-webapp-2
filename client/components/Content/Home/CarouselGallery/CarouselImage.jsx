var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import {ReactRouter, Link, Router, Route, hashHistory} from 'react-router';
import {connect} from 'react-redux';

import { setLightboxIsOpenCreator } from '../../../../store/actions/actions.jsx';

const mapStateToProps = (state) => {
	return {
		displayGallery: state.displayGallery
	}
}

@connect(mapStateToProps)
export default class CarouselImage extends React.Component {
	constructor(props) {
		super(props);
		this.props.setLightboxIsOpenCreator = setLightboxIsOpenCreator;
	}

	displayGallery = (setLightboxIsOpenCreator, currentImage) => {
		console.log('CarouselImage.jsx:: CarouselImage.displayGallery:: currentImage:', currentImage);
		this.props.dispatch(setLightboxIsOpenCreator(true, currentImage));
	}
	render() {
		return (
			<img src={this.props.src}
					 style={this.props.style}
					 currentImage={this.props.currentImage}
					 onClick={
					 	_.partial(this.displayGallery, setLightboxIsOpenCreator, this.props.currentImage)
					 }
			/>
		);
	}
};