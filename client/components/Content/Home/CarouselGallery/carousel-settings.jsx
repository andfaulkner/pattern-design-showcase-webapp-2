var React = React || require('react');

const arrowStyle = {
  arrow: {
    height: '45px',
    width: '45px',
    border: '0px',
    position: 'relative',
    top: '-133px',
    zIndex: '2'
  },
};

arrowStyle.arrowLeft = _.defaultsDeep({}, arrowStyle.arrow, {
	background: 'url("/img/icons/carousel-left-arrow.png") no-repeat scroll 0 0 transparent',
  float: 'left'
  // left: '-10px'
});

arrowStyle.arrowRight = _.defaultsDeep({}, arrowStyle.arrow, {
	background: 'url("/img/icons/carousel-right-arrow.png") no-repeat scroll 0 0 transparent',
  right: '-10px',
  float: 'right'
});


const CarouselArrowButtonLeft = () => (
 <button style={arrowStyle.arrowLeft} />
);

const CarouselArrowButtonRight = () => (
 <button style={arrowStyle.arrowRight} />
);


const carouselSettings = {
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 1,
	draggable: true,
	autoplay: true,
	speed: 500,
	lazyLoad: false,
	centerMode: true,
	adaptiveHeight: false,
	arrows: true,
	fade: false,
	useCSS: true,
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
