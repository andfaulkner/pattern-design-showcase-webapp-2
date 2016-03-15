/**************************************************************************************************
*
*			Sliding showcase gallery on Home page
*
*/

var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
var Slider = require('react-slick');
import Lightbox from 'react-images';

const {carouselSettings, galleryStyles} = require('./carousel-settings');

// extract, make externally configurable (via UI)
const imgpath = '/img/patterns/';

const imgs = [
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

const imgArr = _.map(imgs, imgObj => imgObj.src);

export default class Carousel extends React.Component {
	constructor(props) {
		super(props);
		console.log('Carousel.jsx:: Carousel: constructor:: this:', this);
		console.log('Carousel.jsx:: Carousel: constructor:: carouselSettings:', carouselSettings);
	}
	render() {
		console.log('Carousel.jsx:: CAROUSEL::: carouselSettings:', carouselSettings);
		var settings = carouselSettings;
		console.log('Carousel.jsx:: Carousel: settings:', settings);
		var imgStyle = { height: '220px' };
		return (
			<div className='carousel'>
				<Slider {...settings}>
					{imgs.map(imgObj => (<CarouselImage src={imgObj.src} style={imgStyle} /> ))}
				</Slider>
				<ModalPhotoGallery />
			</div>
		);
	}
	componentDidMount() {
		console.log('componentDidMount!');
	}
};

class CarouselImage extends React.Component {
	constructor(props) {
		super(props);
	}
	displayGallery = () => {

	}
	render() {
		return (
			<img  src={this.props.src}
						style={this.props.style}
						onClick={this.displayGallery}
			/>
		);
	}
};

/**
 * 
 */
class ModalPhotoGallery extends React.Component {

	/**
	 * Set initial state of ModalPhotoGallery: lightbox closed, & pointing
	 * at the 1st image in the array 
	 */
	constructor(props) {
		super(props);
		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};
	}

	/**
	 * change the state to have the lightbox open, and set current
	 * image to the one clicked. Index: number of images clicked
	 */
	openLightbox = (index, event) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

	/**
	 * set lightbox open state to false, and reset
	 * 'current image' to the 1st in the array
	 */
	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

	/**
	 * Run when left arrow clicked in gallery.
	 * Decrements sets the index of 'currentImage'.
	 */
	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}

	/**
	 * Run when right arrow clicked in gallery.
	 * Increments sets the index of 'currentImage'
	 */
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

	/**
	 * Render the on-page 'Gallery' that triggers the modal gallery when
	 * images in it are clicked.
	 * A regular on-page non-popup component is rendered here.
	 */
	renderGallery = () => {
		// don't render the gallery if there are no images to render
		if (!this.props.images) return;

		// actual rendering begins
		const gallery = this.props.images.map((obj, i) => (
			// Link that triggers the modal gallery popup
			<a key={i}
				 href={obj.src}
				 onClick={(event) => this.openLightbox(i, event)}
				 style={galleryStyles.thumbnail}
			>
				{/* Actual image being displayed (in the on-page gallery) */}
				<img src={obj.thumbnail}
						 style={galleryStyles.thumbnailImage}
						 width={galleryStyles.thumbnailImage.size}
						 height={galleryStyles.thumbnailImage.size}
				/>
			</a>
		));

		// return the rendered (non-modal) gallery, styled & wrapped in a div
		return (
			<div style={galleryStyles.gallery}>
				{gallery}
			</div>
		)
	}

	render() {
		console.log('Carousel.jsx:: ModalPhotoGallery: this:', this);
		return (
			<div className='section'>
				{this.props.heading && <h2>{this.props.heading}</h2>}
				{this.props.subheading && <p>{this.props.subheading}</p>}				
				{this.renderGallery()}
				<Lightbox
					currentImage={this.state.currentImage}
					images={imgs}
					backdropClosesModal={true}
					enableKeyboardInput={true}
	        isOpen={this.state.lightboxIsOpen}
					onClickPrev={this.gotoPrevious}
	        onClickNext={this.gotoNext}
	        onClose={this.closeLightbox}
				/>
			</div>
		);
	}
};

ModalPhotoGallery.displayName = 'ModalPhotoGallery';
ModalPhotoGallery.propTypes = {
	images: React.PropTypes.array,
	heading: React.PropTypes.string,
	subheading: React.PropTypes.string,
	sepia: React.PropTypes.bool,
};
