const carouselStyle = {
  arrow: {
    height: '45px',
    width: '45px',
    border: '0px'
  },
  carouselImgContainer: {
    display: 'inline-block',
    position: 'absolute',
    height: '100px',
    width: '100px'
    // height: '10%',
    // width: '10%'
  },
 carouselImg: {
    position: 'absolute',
    height: '100px',
    width: '100px',
    maxHeight: '300px'
  }
};
// style={{position: 'absolute', display: 'block', verticalAlign: 'top'}
carouselStyle.arrowLeft = _.defaultsDeep({}, carouselStyle.arrow, {
	background: 'url("/img/icons/carousel-left-arrow.png") no-repeat scroll 0 0 transparent',
});
carouselStyle.arrowRight = _.defaultsDeep({}, carouselStyle.arrow, {
	background: 'url("/img/icons/carousel-right-arrow.png") no-repeat scroll 0 0 transparent'
});

module.exports = carouselStyle;