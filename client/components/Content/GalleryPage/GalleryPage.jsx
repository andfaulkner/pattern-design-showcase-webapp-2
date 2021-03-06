var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import Gallery from 'react-photo-gallery';
import { setCurrentPage } from '../../../store/actions/actions.jsx';
import { getContent } from '../../lib/decorators.jsx';

// extract, make externally configurable (via UI)
const imgpath = '/img/patterns/';

const images = [
	{ src: `/img/example-full/native-leaf-bark.jpg` },
	{ src: `${imgpath}aboriginal-fungus.jpg` },
	{ src: `${imgpath}berry-flowers.jpg` },
	{ src: `${imgpath}diamond-mine.jpg` },
	{ src: `${imgpath}lsd-butterflies.jpg` },
	{ src: `${imgpath}red-zygote-flowers.jpg` },
	{ src: `${imgpath}mayan-hexhexhexium-decay-sponge-tea.jpg` },
	{ src: `${imgpath}ermagerd-a-big-rock.jpg` }
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

@getContent()('Gallery')
export class GalleryPage extends React.Component {

	render() {
		return (
			<div>
				WIP - requires styling, pagination, etc.
				<Gallery photos={PHOTOS} />
			</div>
		);
	}
};