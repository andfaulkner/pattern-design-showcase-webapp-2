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
				<ModalPhotoGallery images={images} />
				<Slider {...settings}>
					{images.map((imgObj, currentImage) => 
						(<CarouselImage src={imgObj.src} style={imgStyle} currentImage={currentImage} /> )
					)}
				</Slider>
			</div>
		);
	}
	componentDidMount() {
		console.log('componentDidMount!');
	}
};
