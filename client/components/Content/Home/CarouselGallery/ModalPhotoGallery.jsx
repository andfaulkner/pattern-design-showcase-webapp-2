var React = React || require('react');
import {connect} from 'react-redux';
import Lightbox from 'react-images';
import { setLightboxIsOpenCreator } from '../../../../store/actions/actions.jsx';

const mapStateToProps = (state) => {
	console.log('ModalPhotoGallery.jsx:: mapStateToProps::: state:', state);
	console.log('ModalPhotoGallery.jsx:: mapStateToProps::: state.setLightboxIsOpen:', state.setLightboxIsOpen);
	console.log('ModalPhotoGallery.jsx:: mapStateToProps::: state.setLightboxIsOpen.lightboxIsOpen:', state.setLightboxIsOpen.lightboxIsOpen);
	return { 
		lightboxIsOpen: state.setLightboxIsOpen.lightboxIsOpen,
		currentImage: state.setLightboxIsOpen.currentImage
	}
}

@connect(mapStateToProps)
export default class ModalPhotoGallery extends React.Component {

	getDefaultProps() {
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.setDefaultProps::: this:', this);
		return {
			lightboxIsOpen: false,
			currentImage: 0
		}
	}

	constructor(props) {
		super(props);
		console.log('*** ModalPhotoGallery.jsx:: ModalPhotoGallery.constructor::: props:', props);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.constructor::: this.props:', this.props);
		this.state = {
			lightboxIsOpen: false,
			currentImage: props.currentImage || 0,
		};
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.constructor::: this.state on exit:', this.state);
	}

	componentWillReceiveProps = (nextProps) => {
		console.log('ModalPhotoGallery.jsx:: componentWillReceiveProps:: nextProps:', nextProps);
		console.log('ModalPhotoGallery.jsx:: componentWillReceiveProps:: this.props:', this.props);
		console.log('ModalPhotoGallery.jsx:: componentWillReceiveProps:: this.state:', this.state);
		let {lightboxIsOpen, currentImage, ...props} = nextProps;
		this.setState({
			currentImage,
			lightboxIsOpen 
		});
		console.log('ModalPhotoGallery.jsx:: componentWillReceiveProps:: this.state on exit:', this.state);
	}

	/**
	 * change the state to have the lightbox open, and set current
	 * image to the one clicked. Index: number of images clicked
	 */
	openLightbox = (index, event) => {
		event.preventDefault();
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.openLightbox::: index:', index);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.openLightbox::: event:', event);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.openLightbox:: this.props:', this.props);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.openLightbox:: this.state:', this.state);
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

	/**
	 * set lightbox open state to false, and reset
	 * 'current image' to the 1st in the array
	 */
	closeLightbox = (setLightboxIsOpenCreator) => {
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.closeLightbox::: this:', this);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.closeLightbox::: this.state:', this.state);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.closeLightbox::: this.props:', this.props);
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
		const { dispatch } = this.props;
		dispatch(setLightboxIsOpenCreator(false));
	}

	/**
	 * Run when left arrow clicked in gallery.
	 * Decrements sets the index of 'currentImage'.
	 */
	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}

	/**
	 * Run when right arrow clicked in gallery.
	 * Increments sets the index of 'currentImage'
	 */
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

	render() {
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.render::: this.props:', this.props);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.render::: this.props.images:', this.props.images);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.render::: this.state:', this.state);
		console.log('ModalPhotoGallery.jsx:: ModalPhotoGallery.render::: this.props.lightboxIsOpen:', this.props.lightboxIsOpen);
		return (
			<Lightbox 
				currentImage={this.state.currentImage}
				backdropClosesModal={true}
				enableKeyboardInput={true}
				isOpen={this.props.lightboxIsOpen}
				onClickPrev={this.gotoPrevious}
				onClickNext={this.gotoNext}
				onClose={_.partial(this.closeLightbox, setLightboxIsOpenCreator)}
				images={this.props.images} />
		);
	}
};


ModalPhotoGallery.displayName = 'ModalPhotoGallery';
ModalPhotoGallery.propTypes = {
	images: React.PropTypes.array,
};
		// store.subscribe(this.render);