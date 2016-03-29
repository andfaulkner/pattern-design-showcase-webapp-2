/**************************************************************************************************
*
*			Create Redux application store, set default values, and prepare
*			it for availability from anywhere else in the app.
*
*			Note: store is exposed through the @connect decorator, available
*			because of the <Provider> tag wrapping every element mounted on
*			React's root node (this wrapping occurs in index.jsx);
*
*/
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { selectContentType, fetchContentIfNeeded } from './actions/actions';

import reducers from './reducers/reducers.jsx';

const loggerMiddleware = createLogger();

const store = compose(
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
  ),
 	window.devToolsExtension ? window.devToolsExtension() : '')
(createStore)
(reducers, 
	{
		carousel: { 
			currentImage: 0,
			isCarouselRunning: true,
			lightboxIsOpen: false
		}, setCurrentPage: {
			currentPage: 'Home'
		}
	}
);

// bio should be grabbed right away
store.dispatch(selectContentType('bios'));
store.dispatch(fetchContentIfNeeded('bios')).then(() => {
	console.info('configure-store.jsx:: fetchContent sucessful!');
});

export {store as store};