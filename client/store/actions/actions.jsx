export const SET_LIGHTBOX_IS_OPEN = 'SET_LIGHTBOX_IS_OPEN';
export const SET_CURRENT_GALLERY_IMAGE = 'SET_CURRENT_GALLERY_IMAGE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_IS_UPDATES_LOADED = 'SET_IS_UPDATES_LOADED';
export const SET_IS_DESIGNS_LOADED = 'SET_IS_DESIGNS_LOADED';

/**
 * Display & hide the Gallery modal
 * @param {Boolean} visibility - modal visible if true, hidden if false
 */
export function setLightboxIsOpenCreator(lightboxIsOpen, currentImage) {
	console.log('!! actions.jsx:: ACTIONS.JSX:::: lightboxIsOpen:', lightboxIsOpen);
	return {
		type: SET_LIGHTBOX_IS_OPEN,
		lightboxIsOpen,
		currentImage
	}
}

/**
 * Set which gallery image to display, by specifying the index of the image
 * @param {Number} index - location in the image array of the image to set as current
 */
export function setCurrentGalleryImageCreator(index) {
	return {
		type: SET_CURRENT_GALLERY_IMAGE,
		index
	}
}

/**
 * change the page currently shown in the content area, update nav-menu highlights & route
 * @param {String} currentPage - name of the current page to display
 */
export function setCurrentPageCreator(currentPage) {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}