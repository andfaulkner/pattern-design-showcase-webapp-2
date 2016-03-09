const carouselStyle = {
  arrow: {
    height: '45px',
    width: '45px',
    border: '0px'
  },
  carouselImgContainer: {
    display: 'inline-block',
    float: 'left',
    height: '10%',
    width: '10%'
  },
 carouselImg: {
    height: '100%',
    width: '100%',
    maxHeight: '300px'
  }
};

carouselStyle.arrowLeft = _.defaultsDeep({}, carouselStyle.arrow, {
	background: 'url("/img/icons/carousel-left-arrow.png") no-repeat scroll 0 0 transparent',
});
carouselStyle.arrowRight = _.defaultsDeep({}, carouselStyle.arrow, {
	background: 'url("/img/icons/carousel-right-arrow.png") no-repeat scroll 0 0 transparent'
});

module.exports = carouselStyle;