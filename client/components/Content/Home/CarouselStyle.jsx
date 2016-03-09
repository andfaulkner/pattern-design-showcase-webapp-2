const carouselStyle = {
  arrow: {
    height: '45px',
    width: '45px',
    border: '0px',
    position: 'relative',
    top: '-133px',
    zIndex: '2'
  },
};

carouselStyle.arrowLeft = _.defaultsDeep({}, carouselStyle.arrow, {
	background: 'url("/img/icons/carousel-left-arrow.png") no-repeat scroll 0 0 transparent',
  float: 'left'
  // left: '-10px'
});
carouselStyle.arrowRight = _.defaultsDeep({}, carouselStyle.arrow, {
	background: 'url("/img/icons/carousel-right-arrow.png") no-repeat scroll 0 0 transparent',
  right: '-10px',
  float: 'right'
});

module.exports = carouselStyle;










// const carouselStyle = {
//  //  arrow: {
//  //  },
//  //  carouselImgContainer: {
//  //  },
//  // carouselImg: {
//  //  }
// };

// // arrowLeft: // background: 'url("/img/icons/carousel-left-arrow.png") no-repeat scroll 0 0 transparent',
// // arrowRight:  background: 'url("/img/icons/carousel-right-arrow.png") no-repeat scroll 0 0 transparent'

// module.exports = carouselStyle;