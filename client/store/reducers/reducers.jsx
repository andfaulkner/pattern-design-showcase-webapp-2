/**************************************************************************************************
*
*			[component] -> action -> reducer -> modified state clone -> [components relying on state]
*   								              /\
*     
*     - attempts to run all of these functions below, only impacts state if case matches
*/

import { combineReducers } from 'redux';
import { SET_LIGHTBOX_IS_OPEN, SET_CURRENT_GALLERY_IMAGE,
				 START_STOP_CAROUSEL, SET_CURRENT_PAGE, SHIFT_GALLERY_IMAGE,
				 SET_IS_UPDATES_LOADED, SET_IS_DESIGNS_LOADED	} from '../actions/actions.jsx';

import { setCurrentGalleryImage, shiftGalleryImage,
				 setLightboxIsOpen, startStopCarousel } from './carousel-reducers'

import * as helpers from './reducer-helpers.jsx';

const carousel = (state={}, action) => {
	switch (action.type) {
		case SET_CURRENT_GALLERY_IMAGE:
			return setCurrentGalleryImage(state, action);
		case SET_LIGHTBOX_IS_OPEN:
			return setLightboxIsOpen(state, action);
		case SHIFT_GALLERY_IMAGE:
			return shiftGalleryImage(state, action);
		case START_STOP_CAROUSEL:
			return startStopCarousel(state, action);
		default:
			return helpers.unknownType(state, 'carousel');
	}	
}
// /**
//  *	Set the current image to display in the modal gallery 
//  */
// export function setCurrentGalleryImage(state = {}, action) {
// 	switch (action.type) {
// 		case 'SET_CURRENT_GALLERY_IMAGE':
// 			return alteredState({
// 				...state,
// 				currentImage: !_.isUndefined(action.currentImage) && _.isNumber(action.currentImage)
// 					? action.currentImage
// 					: state.currentImage,
// 			}, SET_CURRENT_GALLERY_IMAGE)
// 		default:
// 			return unknownType(state, 'setCurrentGalleryImage');
// 	}
// }

/**
 * Set the current page - e.g. Home, About
 */
export function setCurrentPage(state = {}, action) {
	switch (action.type) {
		case 'SET_CURRENT_PAGE':
			return helpers.alteredState({
				...state,
				currentPage: action.currentPage || _.get(state, 'currentPage') || 'HOME'
			}, SET_CURRENT_PAGE);
		default:
			return helpers.unknownType(state, 'setCurrentPage');
	}
}

// export function setStartStopCarousel(state = {}, action) {
// 	switch (action.type) {
// 		case 'START_STOP_CAROUSEL':
// 			return alteredState({
// 				...state,
// 				isCarouselRunning: !_.isUndefined(action.isCarouselRunning)
// 					? action.isCarouselRunning
// 					: _.get(state, 'isCarouselRunning')
// 			}, START_STOP_CAROUSEL);
// 		default:
// 			return unknownType(state, 'setStartStopCarousel');
// 	}
// }

// require('./test-reducers');

const reducers = combineReducers({
	carousel,
	// setLightboxIsOpen,
	// setCurrentGalleryImage,
	setCurrentPage,
	// setStartStopCarousel
});

export default reducers;
