import fetch from 'isomorphic-fetch';

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
export function setCurrentPage(currentPage) {
	console.log('actions.jsx:: setCurrentPage:: currentPage:', currentPage);
	console.log('actions.jsx:: setCurrentPage:: SET_CURRENT_PAGE:', SET_CURRENT_PAGE);
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


export const SELECT_CONTENT_TYPE = 'SELECT_CONTENT_TYPE';

export function selectContentType(contentType) {
	return {
		type: SELECT_CONTENT_TYPE,
		contentType
	}
}

export const INVALIDATE_CONTENT = 'INVALIDATE_CONTENT';

export function invalidateContent(contentType) {
	return {
		type: INVALIDATE_CONTENT,
		contentType
	}
}

export const REQUEST_CONTENT = 'REQUEST_CONTENT';
function requestContent(contentType) {
	return {
		type: REQUEST_CONTENT,
		contentType
	}
}

export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
function receiveContent(contentType, json) {
	return {
		type: RECEIVE_CONTENT,
		contentType,
		content: json.map(child => {
			return {
				dateCompleted: child.dateCompleted,
				textContent: child.textContent,
				title: child.title,
				sticky: child.sticky,
				link: child.link
			}
		}),
		receivedAt: Date.now()
	}
}


// Meet our 1st thunk action creator!
// Its insides are different but you use it just like any other action creator:
// store.dispatch(fetchContent('reactjs'))

export function fetchContent(contentType) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestContent(contentType))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    // TODO switch localhost with a dynamic location?
    return fetch(`http://localhost:3000/api/v1/${contentType}`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveContent(contentType, json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

function shouldFetchContent(state, contentType) {
  const content = state.contentByContentType[contentType]
  if (!content) {
    return true
  } else if (content.isFetching) {
    return false
  } else {
    return content.didInvalidate
  }
}

export function fetchContentIfNeeded(contentType) {

  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchContent(getState(), contentType)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchContent(contentType))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}
