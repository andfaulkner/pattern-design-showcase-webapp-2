// var React = React || require('react');
// var ReactDOM = ReactDOM || require('react-dom');
// import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
// var Slider = require('react-slick');

// const style = require('./CarouselStyle.jsx')

// const imgs = [
//   { filename: '/img/patterns/aboriginal-fungus.jpg' },
//   { filename: '/img/patterns/berry-flowers.jpg' },
//   { filename: '/img/patterns/diamond-mine.jpg' },
//   { filename: '/img/patterns/lsd-butterflies.jpg' },
//   { filename: '/img/patterns/red-zygote-flowers.jpg' },
//   { filename: '/img/patterns/rock-eyes.jpg' },
// ];

// var Carousel = React.createClass({
//   render: function () {
//     var settings = {
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       initialSlide: 1,
//       draggable: true,
//       autoplay: true,
//       speed: 500,
//       centerMode: true,
//       useCSS: true,
//       adaptiveHeight: true,
//       dots: false,
//       lazyLoad: true,
//       prevArrow: CarouselArrowButtonLeft,
//       nextArrow: CarouselArrowButtonRight,
//       style: {
//       	position: 'absolute',
//       	display: 'inline-block'
//       }
//     };
//     return (
//       <div className='carousel'>
//         <Slider {...settings}>
//           {imgs.map((imgObj) => (
//             <div style={style.carouselImgContainer}>
//               <img 
//                 {...this.props}
//                 src={imgObj.filename}
//                 style={style.carouselImg}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   }
// });


// export default Carousel;







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
  { filename: '/img/patterns/rock-eyes.jpg' },
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
      nextArrow: CarouselArrowButtonRight
    };
    return (
      <div className='carousel'>
        <Slider {...settings}>
          <img src='/img/patterns/aboriginal-fungus.jpg' style={{maxHeight: '220px'}} />
          <img src='/img/patterns/berry-flowers.jpg' style={{maxHeight: '220px'}} />
          <img src='/img/patterns/diamond-mine.jpg' style={{maxHeight: '220px'}} />
          <img src='/img/patterns/lsd-butterflies.jpg' style={{maxHeight: '220px'}} />
          <img src='/img/patterns/red-zygote-flowers.jpg' style={{maxHeight: '220px'}} />
          <img src='/img/patterns/rock-eyes.jpg' style={{maxHeight: '220px'}} />
        </Slider>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount!')
  }
};