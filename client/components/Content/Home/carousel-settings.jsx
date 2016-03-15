var React = React || require('react');

const carouselSettings = {
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

class CarouselArrowButtonLeft extends React.Component {
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

const THUMBNAIL_SIZE = 72;
const galleryStyles = {
	gallery: {
		marginLeft: -5,
		marginRight: -5,
		overflow: 'hidden',
	},
	thumbnail: {
		backgroundSize: 'cover',
		borderRadius: 3,
		float: 'left',
		height: THUMBNAIL_SIZE,
		margin: 5,
		overflow: 'hidden',
		width: THUMBNAIL_SIZE,
	},
	thumbnailImage: {
		display: 'block',
		height: 'auto',
		maxWidth: '100%'
	}
};

module.exports = {
	galleryStyles,
	carouselSettings
};
