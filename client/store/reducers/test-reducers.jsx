const reducers = require('./reducers.jsx');

import { SET_LIGHTBOX_IS_OPEN, SET_CURRENT_GALLERY_IMAGE,
				 START_STOP_CAROUSEL, SET_CURRENT_PAGE, SHIFT_GALLERY_IMAGE,
				 SET_IS_UPDATES_LOADED, SET_IS_DESIGNS_LOADED	} from '../actions/actions.jsx';

var expect = require('expect');
var deepFreeze = require('deep-freeze');

(function testShiftGalleryImage() {
	const action = {
		type: SHIFT_GALLERY_IMAGE,
		incrementOrDecrement: 'increment',
		currentImage: 5
	};
	const prevState = {
		currentImage: 5
	};
	const postState = {
		currentImage: 6		
	};
	console.log('test-reducers.jsx:: testShiftGalleryImage:: reducers.default:', reducers.default);
	expect(
		reducers.default(prevState, action).carousel
	).toEqual(postState);
	console.log('******************** testShiftGalleryImage successful! ********************' );
}());

(function testSetCurrentPage() {
	const action = {
		type: SET_CURRENT_PAGE,
		currentPage: 'DESIGNS'
	};
	const prevState = {
		currentPage: 'HOME'
	};
	const postState = {
		currentPage: 'DESIGNS'
	};
	console.log('test-reducers.jsx:: testSetCurrentPage:: reducers:', reducers);
	expect(
		reducers.setCurrentPage(prevState, action)
	).toEqual(postState);
	console.log('******************** testSetCurrentPage successful! ********************' );
}());