/**************************************************************************************************
*
*			Sliding showcase gallery on Home page
*
*/

var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import { getContent } from '../../../lib/decorators.jsx';

var Slider = require('react-slick');
import Lightbox from 'react-images';
const {carouselSettings, galleryStyles, carouselStyle} = require('./carousel-settings');
import CarouselImage from './CarouselImage.jsx';
import ModalPhotoGallery from './ModalPhotoGallery.jsx';

// extract, make externally configurable (via UI)
const imgpath = '/img/patterns/';

const images = [
	{ src: `${imgpath}aboriginal-fungus.jpg` },
	{ src: `${imgpath}berry-flowers.jpg` },
	{ src: `${imgpath}diamond-mine.jpg` },
	{	src: `${imgpath}lsd-butterflies.jpg` },
	{	src: `${imgpath}red-zygote-flowers.jpg` },
	{	src: `${imgpath}mayan-hexhexhexium-decay-sponge-tea.jpg` },
	{	src: `${imgpath}orchid-eating-phoenix-army.jpg` },
	{	src: `${imgpath}ermagerd-a-big-rock.jpg` },
	{	src: `${imgpath}chinese-umbrella-mushrooms.jpg` }
];

const imgArr = _.map(images, imgObj => imgObj.src);

/**
 * Gets state returned from reducers (dispatch --> action --> reducers --> mapStateToProps).
 * Called regardless of where reducer is activated from
 *
 * @param  {Object} state
 * @return {Object} required state properties: lightboxIsOpen. currentImage, isCarouselRunning
 * DEFUNCT - FOR NOW
 */
const mapStateToProps = (state) => {
	return {
		lightboxIsOpen: state.carousel.lightboxIsOpen,
		currentImage: state.carousel.currentImage,
		carouselSettings: {
			...carouselSettings,
			speed: (state.carousel.isCarouselRunning) ? 500 : 0,
			autoplay: !!state.carousel.isCarouselRunning
		}
	}
}

@getContent(mapStateToProps)()
export default class Carousel extends React.Component {

	static getDefaultProps = {
		isCarouselRunning: true,
		carouselSettings
	}

	render() {
		return (
			<div className='carousel'>
				<ModalPhotoGallery images={images} />
				<Slider {...this.props.carouselSettings}>
					{
						images.map((imgObj, currentImage) => (
							<CarouselImage
								src={imgObj.src}
								style={{ height: '220px' }}
								currentImage={currentImage}
								key={'CarouselImage_' + currentImage}
							/>
						))
					}
				</Slider>
			</div>
		);
	}
};
