/**************************************************************************************************
*
*			Reducers for setting state of carousel:
*				{Number} current gallery image 										-- currentImage
*				{Boolean} whether lightbox is open or closed 			-- lightboxIsOpen
*				{Boolean} whether carousel is started or stopped 	-- isCarouselRunning
*
*/

import * as helpers from './reducer-helpers.jsx';
import { SET_LIGHTBOX_IS_OPEN, SET_CURRENT_GALLERY_IMAGE,
				 START_STOP_CAROUSEL, SET_CURRENT_PAGE, SHIFT_GALLERY_IMAGE,
				 SET_IS_UPDATES_LOADED, SET_IS_DESIGNS_LOADED	} from '../actions/actions.jsx';

/**
 *	Set the current image to display in the modal gallery 
 */
export const setCurrentGalleryImage = (state = {}, action) => {
	return {
		...state,
		currentImage: !_.isUndefined(action.currentImage) && _.isNumber(action.currentImage)
			? action.currentImage
			: state.currentImage,
	}
};

/**
 *	Set the current image to display in the modal gallery 
 */
export const shiftGalleryImage = (state = {}, action) => {
	const shift = (action.incrementOrDecrement === 'increment')
		? helpers.increment
		: (action.incrementOrDecrement === 'decrement')
			? helpers.decrement
			: console.error('INVALID incrementOrDecrement VALUE SENT TO shiftGalleryImage reducer');
	return {
		...state,
		currentImage: !_.isUndefined(action.currentImage) && _.isNumber(action.currentImage)
			? shift(action.currentImage)
			: shift(state.currentImage)
		};
}

/**
 * Display and hide the modal gallery triggered by clicking a carousel image
 * Also sets the current image value to whatever was clicked
 */
export const setLightboxIsOpen = (state = {}, action) => {
	// weird logic here because false & 0 both act like undefined in a regular
	// check; also, more than just opening the lightbox alters currentImage.
	return {
		...state,
		currentImage: setCurrentGalleryImage(state, action).currentImage,
		isCarouselRunning: startStopCarousel(state, {
				isCarouselRunning: !action.lightboxIsOpen
			}).isCarouselRunning,
		lightboxIsOpen: !_.isUndefined(action.lightboxIsOpen)
			? action.lightboxIsOpen
			: state.lightboxIsOpen
	};
};

export const startStopCarousel = (state = {}, action) => {
	return {
		...state,
		isCarouselRunning: !_.isUndefined(action.isCarouselRunning)
			? action.isCarouselRunning
			: _.get(state, 'isCarouselRunning')
	};
};
