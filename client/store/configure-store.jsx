// REDUX: CREATE APPLICATION STORE, MAKE AVAILABLE TO THE WHOLE APP
import { createStore } from 'redux';
import reducers from './reducers/reducers.jsx';

const store = createStore(reducers,
	{ carousel: { currentImage: 0, isCarouselRunning: true, lightboxIsOpen: false }, setCurrentPage: {currentPage: 'Home'} },
	window.devToolsExtension ? window.devToolsExtension() : undefined
);

export {store as store};