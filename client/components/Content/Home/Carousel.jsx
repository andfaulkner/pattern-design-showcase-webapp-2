/**************************************************************************************************
*
*			Sliding showcase gallery on Home page
*
*/

var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
var Slider = require('react-slick');

const style = require('./CarouselStyle.jsx');

const imgs = [
	{ filename: '/img/patterns/aboriginal-fungus.jpg' },
	{ filename: '/img/patterns/berry-flowers.jpg' },
	{ filename: '/img/patterns/diamond-mine.jpg' },
	{ filename: '/img/patterns/lsd-butterflies.jpg' },
	{ filename: '/img/patterns/red-zygote-flowers.jpg' },
	{ filename: '/img/patterns/mayan-hexhexhexium-decay-sponge-tea.jpg' },
	{ filename: '/img/patterns/orchid-eating-phoenix-army.jpg' },
	{ filename: '/img/patterns/ermagerd-a-big-rock.jpg' },
	{ filename: '/img/patterns/chinese-umbrella-mushrooms.jpg' }
];



var CarouselArrowButtonLeft = class CarouselArrowButtonLeft extends React.Component {
 render() {
	 return (
		 <button {...this.props} style={style.arrowLeft} />
	 );
 }
};

class CarouselArrowButtonRight extends React.Component {
 render() {
	 return <button {...this.props} style={style.arrowRight} />
 }
};

export default class Carousel extends React.Component {
	render() {
		var settings = {
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide: 1,
			draggable: true,
			autoplay: true,
			speed: 500,
			centerMode: true,
			useCSS: true,
			adaptiveHeight: false,
			dots: false,
			lazyLoad: false,
			arrows: true,
			prevArrow: CarouselArrowButtonLeft,
			nextArrow: CarouselArrowButtonRight,
			// adjust number of images shown based on screen size
			responsive: [
				{ breakpoint: 100000, settings: { slidesToShow: 6 } },
				{ breakpoint: 1560, settings: { slidesToShow: 5 }},
				{ breakpoint: 1300, settings: { slidesToShow: 4 }},
				{ breakpoint: 1000, settings: { slidesToShow: 3 }},
				{ breakpoint: 580, settings: { slidesToShow: 2 }},
				{ breakpoint: 390, settings: { slidesToShow: 1 }}
			]
		};
		var imgStyle = { height: '220px' };
		return (
			<div className='carousel'>
				<Slider {...settings}>
					{_.map(imgs, (imgObj) =>
						<CarouselImage src={imgObj.filename} style={imgStyle} />
					)}
				</Slider>
			</div>
		);
	}
	componentDidMount() {
		console.log('componentDidMount!');
	}
};

class CarouselImage extends React.Component {
	render() {
		console.log('Carousel.jsx:: CarouselImage: this.props:', this.props);
		return (
			<img src={this.props.src} style={this.props.style} />
		);
	}
};