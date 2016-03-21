/**************************************************************************************************
*
*			[component] -> action -> reducer -> modified state clone -> [components relying on state]
*   								              /\
*     
*     - attempts to run all of these functions below, only impacts state if case matches
*/

import { combineReducers } from 'redux';
import { SET_LIGHTBOX_IS_OPEN, SET_CURRENT_GALLERY_IMAGE,
				 START_STOP_CAROUSEL, SET_CURRENT_PAGE,
				 SET_IS_UPDATES_LOADED, SET_IS_DESIGNS_LOADED	} from '../actions/actions.jsx';


/****************************** MIDDLEWARES ******************************/
/**
 * @param  {Object} newState - state being returned. Log it first.
 * @param  {String} actionType - action passed through before state returned. Log it.
 * @return {[type]} [description]
 */
function unknownType(state, reducer) {
	console.warn(reducer + ' received unknown action type');
	return state;
}

function alteredState(newState, actionType) {
	console.info('\n\nAction type received by reducers: ' + actionType);
	console.log('%cSTATE ::', 'color: blue; font-size: 25px;', '\n', newState, '\n\n\n');
	return newState;	
}
/*************************************************************************/

/**
 *	Set the current image to display in the modal gallery 
 */
export function setCurrentGalleryImage(state = {}, action) {
	switch (action.type) {
		case 'SET_CURRENT_GALLERY_IMAGE':
			return alteredState({
				...state,
				currentImage: !_.isUndefined(action.currentImage) && _.isNumber(action.currentImage)
					? action.currentImage
					: state.currentImage,
			}, SET_CURRENT_GALLERY_IMAGE)
		default:
			return unknownType(state, 'setCurrentGalleryImage');
	}
}

/**
 * Set the current page - e.g. Home, About
 */
export function setCurrentPage(state = {}, action) {
	switch (action.type) {
		case 'SET_CURRENT_PAGE':
			return alteredState({
				...state,
				currentPage: action.currentPage || _.get(state, 'currentPage') || 'HOME'
			}, SET_CURRENT_PAGE);
		default:
			return unknownType(state, 'setCurrentPage');
	}
}

/**
 * Display and hide the modal gallery triggered by clicking a carousel image
 * Also sets the current image value to whatever was clicked
 */
export function setLightboxIsOpen(state = {}, action) {
	console.log('reducers.jsx:: setLightboxIsOpen:: state:', state);
	console.log('reducers.jsx:: setLightboxIsOpen:: action:', action);
	switch (action.type) {
		case 'SET_LIGHTBOX_IS_OPEN':
			// weird logic here because false & 0 both act like undefined in a regular
			// check; also, more than just opening the lightbox alters currentImage.
			return alteredState({
				...state,
				currentImage: setCurrentGalleryImage(state, {
						...action,
						type: SET_CURRENT_GALLERY_IMAGE
					}).currentImage,
				lightboxIsOpen: !_.isUndefined(action.lightboxIsOpen)
					? action.lightboxIsOpen
					: state.lightboxIsOpen
			}, SET_LIGHTBOX_IS_OPEN);
		default:
			return unknownType(state, 'setLightboxIsOpen');
	}
}

export function setStartStopCarousel(state = {}, action) {
	switch (action.type) {
		case 'START_STOP_CAROUSEL':
			return alteredState({
				...state,
				isCarouselRunning: !_.isUndefined(action.isCarouselRunning)
					? action.isCarouselRunning
					: _.get(state, 'isCarouselRunning')
			}, START_STOP_CAROUSEL);
		default:
			return unknownType(state, 'setStartStopCarousel');
	}
}

const reducers = combineReducers({
	setLightboxIsOpen,
	setCurrentGalleryImage,
	setCurrentPage,
	setStartStopCarousel
});

export default reducers;
