/**************************************************************************************************
*
*			Sliding showcase gallery on Home page
*
*/

var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import {connect} from 'react-redux';

var Slider = require('react-slick');
import Lightbox from 'react-images';
const {carouselSettings, galleryStyles, carouselStyle} = require('./carousel-settings');
import CarouselImage from './CarouselImage.jsx';
import ModalPhotoGallery from './ModalPhotoGallery.jsx';

// extract, make externally configurable (via UI)
const imgpath = '/img/patterns/';

const images = [
	{
		src: `${imgpath}aboriginal-fungus.jpg`
	}, {
		src: `${imgpath}berry-flowers.jpg`
	}, {
		src: `${imgpath}diamond-mine.jpg`
	}, {
		src: `${imgpath}lsd-butterflies.jpg`
	}, {
		src: `${imgpath}red-zygote-flowers.jpg`
	}, {
		src: `${imgpath}mayan-hexhexhexium-decay-sponge-tea.jpg`
	}, {
		src: `${imgpath}orchid-eating-phoenix-army.jpg`
	}, {
		src: `${imgpath}ermagerd-a-big-rock.jpg`
	}, {
		src: `${imgpath}chinese-umbrella-mushrooms.jpg`
	}
];

const imgArr = _.map(images, imgObj => imgObj.src);

/**
 * Gets state returned from reducers (dispatch --> action --> reducers --> mapStateToProps).
 * Called regardless of where reducer is activated from
 *
 * @param  {Object} state
 * @return {Object} required state properties: lightboxIsOpen. currentImage, isCarouselRunning
 */
const mapStateToProps = (state) => {
	console.log('&&&&&&&&&&&&&&&&&&& Carousel.jsx:: mapStateToProps: state:', state);
	return {
		lightboxIsOpen: state.carousel.lightboxIsOpen,
		currentImage: state.carousel.currentImage,
		carouselSettings: {
			...carouselSettings,
			speed: (state.carousel.isCarouselRunning) ? 500 : 0,
			autoplay: !!state.carousel.isCarouselRunning
			// initialSlide: state.carousel.currentImage 
		}
	}
}

@connect(mapStateToProps)
export default class Carousel extends React.Component {
	getDefaultProps = {
		isCarouselRunning: true,
		carouselSettings
	}

	constructor(props) {
		console.log('Carousel.jsx:: Carousel: constructor --- RAN! - props: ', props);
		super(props);
		console.log('Carousel.jsx:: Carousel: constructor --- RAN! - props after super: ', props);
		console.log('&&&&&&&& Carousel.jsx:: Carousel: constructor --- RAN! - this.getDefaultProps: ', this.getDefaultProps);
		Object.assign(this.props, props, this.getDefaultProps);
		console.log('&&&&&&&& Carousel.jsx:: Carousel: constructor --- RAN! - this.props: ', this.props);
	}

	componentWillReceiveProps = (nextProps) => {
		console.log('&&&&&&&&&&&&&&&&&&& Carousel.jsx:: Carousel: componentWillReceiveProps nextProps:', nextProps);
	}


	render() {
		console.log('&&&&&&&&&&&&&&&&&&& Carousel.jsx:: render:: props:', this.props);
		console.log('&&&&&&&&&&&&&&&&&&& Carousel.jsx:: render:: state:', this.state);
		var imgStyle = { height: '220px' };
		console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Carousel.jsx:: Carousel:render:: carouselSettings:', carouselSettings);
		return (
			<div className='carousel'>
				<ModalPhotoGallery images={images} />
				<Slider {...this.props.carouselSettings}>
					{
						images.map((imgObj, currentImage) => (
							<CarouselImage src={imgObj.src}
														 style={imgStyle}
														 currentImage={currentImage}
							/>
						))
					}
				</Slider>
			</div>
		);
	}
	componentDidMount() {
		console.log('componentDidMount!');
	}
};
