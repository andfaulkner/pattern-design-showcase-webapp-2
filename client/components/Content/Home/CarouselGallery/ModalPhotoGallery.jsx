var React = React || require('react');
import {connect} from 'react-redux';
import Lightbox from 'react-images';
import { setLightboxIsOpenCreator,
				 shiftGalleryImageCreator } from '../../../../store/actions/actions.jsx';

const mapStateToProps = (state) => {
	return { 
		lightboxIsOpen: state.carousel.lightboxIsOpen,
		currentImage: state.carousel.currentImage
	}
}


@connect(mapStateToProps)
export default class ModalPhotoGallery extends React.Component {

	/**
	 * set lightbox open state to false, and reset
	 * 'current image' to the 1st in the array
	 */
	closeLightbox = (setLightboxIsOpenCreator) =>
		this.props.dispatch(setLightboxIsOpenCreator(false));

	/**
	 * Run when left arrow clicked in gallery.
	 * Decrements sets the index of 'currentImage'.
	 */
	gotoPrevious = (shiftGalleryImageCreator) => {
		this.props.dispatch(shiftGalleryImageCreator('decrement'));
	}

	/**
	 * Run when right arrow clicked in gallery.
	 * Increments sets the index of 'currentImage'
	 */
	gotoNext = (shiftGalleryImageCreator) => {
		this.props.dispatch(shiftGalleryImageCreator('increment'));
	}

	render() {
		return (
			<Lightbox 
				currentImage={this.props.currentImage}
				backdropClosesModal={true}
				enableKeyboardInput={true}
				isOpen={this.props.lightboxIsOpen}
				onClickPrev={_.partial(this.gotoPrevious, shiftGalleryImageCreator)}
				onClickNext={_.partial(this.gotoNext, shiftGalleryImageCreator)}
				onClose={_.partial(this.closeLightbox, setLightboxIsOpenCreator)} // essential
				images={this.props.images} />
		);
	}
};


ModalPhotoGallery.displayName = 'ModalPhotoGallery';
ModalPhotoGallery.propTypes = {
	images: React.PropTypes.array,
};
		// store.subscribe(this.render);