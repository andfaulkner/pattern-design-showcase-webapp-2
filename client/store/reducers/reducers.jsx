import { combineReducers } from 'redux';
import { SET_CURRENT_GALLERY_IMAGE } from '../actions/actions.jsx' 

/**
 *	Set the current image to display in the modal gallery 
 */
export function setCurrentGalleryImage(state, action) {
	switch (action.type) {
		case 'SET_CURRENT_GALLERY_IMAGE':
			return {
				...state,
				currentImage: action.currentImage || 0
			}
		default:
			return {
				...state,
				currentImage: _.get(state, 'currentImage') || 0
			}
	}
}

/**
 * Set the current page - e.g. Home, About
 */
export function setCurrentPage(state, action) {
	switch (action.type) {
		case 'SET_CURRENT_PAGE':
			console.info('setCurrentPage received action type SET_CURRENT_PAGE');
			return {
				...state,
				currentPage: action.currentPage || _.get(state, 'currentPage') || 'HOME'
			}
		default:
			console.warn('setCurrentPage received unknown action type');
			return {
				...state,
				currentPage: _.get(state, 'currentPage') || 'HOME'
			}
	}
}
/**
 * Display and hide the modal gallery triggered by clicking a carousel image
 */
export function setLightboxIsOpen(state, action) {
	switch (action.type) {
		case 'SET_LIGHTBOX_IS_OPEN':
			var curImg = (action.currentImage)
				? setCurrentGalleryImage(state, {
					type: SET_CURRENT_GALLERY_IMAGE,
					currentImage: action.currentImage
				}) : {};
			console.info('setLightboxIsOpen received action type SET_LIGHTBOX_IS_OPEN');
			console.log('reducers.jsx:: reducers.setLightboxIsOpen:: state:', state);
			console.log('reducers.jsx:: reducers.setLightboxIsOpen:: action:', action);
			console.log('reducers.jsx:: reducers.setLightboxIsOpen:: curImg:', curImg);
			return Object.assign({}, curImg, {
				...state,
				lightboxIsOpen: action.lightboxIsOpen
			});
		default:
			console.warn('setLightboxIsOpen received unknown action type');
			return {
				...state,
				lightboxIsOpen: _.get(state, 'lightboxIsOpen') || false
			}
	}
}

const reducers = combineReducers({
	setLightboxIsOpen,
	setCurrentGalleryImage,
	setCurrentPage
});

export default reducers;
