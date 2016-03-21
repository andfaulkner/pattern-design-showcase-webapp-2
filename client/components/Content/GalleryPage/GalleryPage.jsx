var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import Gallery from 'react-photo-gallery';

import {connect} from 'react-redux';
import { setCurrentPageCreator } from '../../../store/actions/actions.jsx';

// extract, make externally configurable (via UI)
const imgpath = '/img/patterns/';

const images = [
	{
		src: `/img/example-full/native-leaf-bark.jpg`
	}, 	{
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

const PHOTOS = _.reduce(images, (imgSettings, image) => {
	imgSettings.push({
		src: image.src,
		width: 200,
		height: 200,
		aspectRatio: 1,
		lightboxImage: {
			src: image.src
		}
	});
	imgSettings.src = image.src;
	return imgSettings;
}, []);

@connect()
export class GalleryPage extends React.Component {
	constructor(props) {
		super(props);
  	this.props.dispatch(setCurrentPageCreator('Gallery'));
	}

	render() {
		return (
			<div>
				<Gallery photos={PHOTOS} />
			</div>
		);
	}
};