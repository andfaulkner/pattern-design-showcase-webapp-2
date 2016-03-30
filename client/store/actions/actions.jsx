var configDb = require('../../../config/config-database.js');

console.log(configDb);

import fetch from 'isomorphic-fetch';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_IS_UPDATES_LOADED = 'SET_IS_UPDATES_LOADED';
export const SET_IS_DESIGNS_LOADED = 'SET_IS_DESIGNS_LOADED';

// Image display-related
export const SET_LIGHTBOX_IS_OPEN = 'SET_LIGHTBOX_IS_OPEN';
export const SET_CURRENT_GALLERY_IMAGE = 'SET_CURRENT_GALLERY_IMAGE';
export const START_STOP_CAROUSEL = 'START_STOP_CAROUSEL';
export const SHIFT_GALLERY_IMAGE = 'SHIFT_GALLERY_IMAGE';

// AJAX-related
export const SELECT_CONTENT_TYPE = 'SELECT_CONTENT_TYPE';
export const INVALIDATE_CONTENT = 'INVALIDATE_CONTENT';
export const REQUEST_CONTENT = 'REQUEST_CONTENT';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';

/**
 * Display & hide the Gallery modal
 * @param {Boolean} visibility - modal visible if true, hidden if false
 */
export const setLightboxIsOpenCreator = (lightboxIsOpen, currentImage) => (
	{
			type: SET_LIGHTBOX_IS_OPEN,
			lightboxIsOpen,
			currentImage
	}
)

/**
 * Set which gallery image to display, by specifying the index of the image
 * @param {Number} index - location in the image array of the image to set as current
 */
export const setCurrentGalleryImageCreator = (currentImage) => (
	{
		type: SET_CURRENT_GALLERY_IMAGE,
		currentImage
	}
);

/**
 * change the page currently shown in the content area, update nav-menu highlights & route
 * @param {String} currentPage - name of the current page to display
 */
export const setCurrentPage = (currentPage) => (
	{
		type: SET_CURRENT_PAGE,
		currentPage
	}
);

export const shiftGalleryImageCreator = (incrementOrDecrement, currentImage) => (
	{
		type: SHIFT_GALLERY_IMAGE,
		incrementOrDecrement,
		currentImage
	}
);

/**
 * Pause or unpause the carousel on the home page
 * @param {Boolean} running - spin if true, stop if false
 */
export const startStopCarousel = (running) => (
	{
		type: START_STOP_CAROUSEL,
		running
	}
);

export const selectContentType = (contentType) => (
	{
		type: SELECT_CONTENT_TYPE,
		contentType
	}
);

export const invalidateContent = (contentType) => (
	{
		type: INVALIDATE_CONTENT,
		contentType
	}
);

function requestContent(contentType) {
	return {
		type: REQUEST_CONTENT,
		contentType
	}
}

const receiveContent = (contentType, json) => (
	{
		type: RECEIVE_CONTENT,
		contentType,
		content: json
	}
)


// Meet our 1st thunk action creator!
// Its insides are different but you use it just like any other action creator:
// store.dispatch(fetchContent('reactjs'))

export const fetchContent = (contentType) => {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return ((dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestContent(contentType));

    const restAPIUrl = _.trimEnd(configDb.mongo.clientURL, '/') + '/api/v1/' + contentType;

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    // TODO switch localhost with a dynamic location?
    return fetch(restAPIUrl)
      .then(response => response.json())
			// We can dispatch many times!
			// Here, we update the app state with the results of the API call.
      .then(json => dispatch(receiveContent(contentType, json)))
      .catch(error => {
      	console.error(`fetch request to ${restAPIUrl} failed with error: `, error);
      	return error;
      });
  })
};

const shouldFetchContent = (state, contentType) => {
  const content = _.get(state, ['content', contentType])

  if (!content) {
    return true
  } else if (content.isFetching) {
    return false
  } else {
    return content.didInvalidate
  }
}

export const fetchContentIfNeeded = (contentType) => {

  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return ((dispatch, getState) => (
    (shouldFetchContent(getState(), contentType))
      // Dispatch a thunk from thunk!
    	? dispatch(fetchContent(contentType))
      // Let the calling code know there's nothing to wait for.
      : Promise.resolve()
  ))
};
