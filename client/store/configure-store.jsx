// REDUX: CREATE APPLICATION STORE, MAKE AVAILABLE TO THE WHOLE APP
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectContentType, fetchContent } from './actions/actions';

import reducers from './reducers/reducers.jsx';

const loggerMiddleware = createLogger();

const store = createStore(
	reducers, 
	{
		carousel: { 
			currentImage: 0,
			isCarouselRunning: true,
			lightboxIsOpen: false
		}, setCurrentPage: {
			currentPage: 'Home'
		}
	},
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ),
	window.devToolsExtension ? window.devToolsExtension() : undefined,
);

store.dispatch(selectContentType('designs'));
store.dispatch(fetchContent('designs')).then(() => {
	console.log('configure-store.jsx:: fetchContent promise resolved, fetchContent sucessful!');
  console.log(store.getState());
});

export {store as store};