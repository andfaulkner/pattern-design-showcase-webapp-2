var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
var Slider = require('react-slick');

const style = require('./CarouselStyle.jsx')

const imgs = [
  { filename: '/img/patterns/aboriginal-fungus.jpg' },
  { filename: '/img/patterns/berry-flowers.jpg' },
  { filename: '/img/patterns/diamond-mine.jpg' },
  { filename: '/img/patterns/lsd-butterflies.jpg' },
  { filename: '/img/patterns/red-zygote-flowers.jpg' },
  { filename: '/img/patterns/rock-eyes.jpg' },
];

var Carousel = React.createClass({
  render: function () {
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
      adaptiveHeight: true,
      dots: false,
      lazyLoad: true,
      prevArrow: CarouselArrowButtonLeft,
      nextArrow: CarouselArrowButtonRight,
      className: 'poo',
      style: {
      	position: 'absolute',
      	display: 'inline-block'
      }
    };
    return (
      <Slider {...settings} style={{width: '3000px'}}>
        {imgs.map((imgObj) => (
          <div style={style.carouselImgContainer}>
            <img 
              {...this.props}
              src={imgObj.filename}
              style={style.carouselImg}
            />
          </div>
        ))}
      </Slider>
    );
  }
});

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

export default Carousel;