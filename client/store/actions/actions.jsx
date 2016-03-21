export const SET_LIGHTBOX_IS_OPEN = 'SET_LIGHTBOX_IS_OPEN';
export const SET_CURRENT_GALLERY_IMAGE = 'SET_CURRENT_GALLERY_IMAGE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_IS_UPDATES_LOADED = 'SET_IS_UPDATES_LOADED';
export const SET_IS_DESIGNS_LOADED = 'SET_IS_DESIGNS_LOADED';
export const START_STOP_CAROUSEL = 'START_STOP_CAROUSEL';
export const SHIFT_GALLERY_IMAGE = 'SHIFT_GALLERY_IMAGE';

/**
 * Display & hide the Gallery modal
 * @param {Boolean} visibility - modal visible if true, hidden if false
 */
export function setLightboxIsOpenCreator(lightboxIsOpen, currentImage) {
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
export function setCurrentGalleryImageCreator(currentImage) {
	return {
		type: SET_CURRENT_GALLERY_IMAGE,
		currentImage
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

export function shiftGalleryImageCreator(incrementOrDecrement, currentImage) {
	return {
		type: SHIFT_GALLERY_IMAGE,
		incrementOrDecrement,
		currentImage
	}
}

/**
 * Pause or unpause the carousel on the home page
 * @param {Boolean} running - spin if true, stop if false
 */
export function startStopCarousel(running) {
	return {
		type: START_STOP_CAROUSEL,
		running
	}
}