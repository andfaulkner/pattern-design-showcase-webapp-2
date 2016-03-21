var React = React || require('react');
import {connect} from 'react-redux';
import Lightbox from 'react-images';
import { setLightboxIsOpenCreator } from '../../../../store/actions/actions.jsx';

const mapStateToProps = (state) => {
	return { 
		lightboxIsOpen: state.setLightboxIsOpen.lightboxIsOpen,
		currentImage: state.setLightboxIsOpen.currentImage
	}
}


@connect(mapStateToProps)
export default class ModalPhotoGallery extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lightboxIsOpen: false,
			currentImage: props.currentImage || 0,
		};
	}

	componentWillReceiveProps = (nextProps) => {
		let {lightboxIsOpen, currentImage, ...props} = nextProps;
		this.setState({
			currentImage,
			lightboxIsOpen
		});
	}

	/**
	 * change the state to have the lightbox open, and set current
	 * image to the one clicked. Index: number of images clicked
	 */
	openLightbox = (imageToOpen, event) => {
		event.preventDefault();
		this.setState({
			currentImage: imageToOpen,
			lightboxIsOpen: true,
		});
	}

	setLightboxIsOpenCreator = () => setLightboxIsOpenCreator

	/**
	 * set lightbox open state to false, and reset
	 * 'current image' to the 1st in the array
	 */
	closeLightbox = (setLightboxIsOpenCreator) => {
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
		const { dispatch } = this.props;
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