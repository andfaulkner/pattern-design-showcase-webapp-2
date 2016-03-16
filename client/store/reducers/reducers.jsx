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
				currentImage: action.currentImage || _.get(state, 'currentImage')
			}
		default:
			return {
				...state,
				currentImage: _.get(state, 'currentImage')
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

// if the lightbox is currently closed:
// store the number of the item that was clicked
// 
// 

/**
 * Display and hide the modal gallery triggered by clicking a carousel image
 */
export function setLightboxIsOpen(state, action) {
	switch (action.type) {
		case 'SET_LIGHTBOX_IS_OPEN':
			var postNumSetChange = (action.currentImage)
				? setCurrentGalleryImage(state, 
					{
						type: SET_CURRENT_GALLERY_IMAGE,
						currentImage: action.currentImage
					}
				)
				: state;
			console.info('setLightboxIsOpen received action type SET_LIGHTBOX_IS_OPEN');
			console.log('reducers.jsx:: reducers.setLightboxIsOpen:: postNumSetChange:', postNumSetChange);
			console.log('reducers.jsx:: reducers.setLightboxIsOpen:: action:', action);
			console.log('reducers.jsx:: reducers.setLightboxIsOpen:: state:', state);
			return Object.assign({},
				{
					...postNumSetChange,
					lightboxIsOpen: action.lightboxIsOpen
				}
			);
		default:
			console.warn('setLightboxIsOpen received unknown action type');
			return state || { }
	}
}

const reducers = combineReducers({
	setLightboxIsOpen,
	setCurrentGalleryImage,
	setCurrentPage
});

export default reducers;
