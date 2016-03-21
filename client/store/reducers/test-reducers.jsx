var reducers = require('./reducers.jsx');

import { SET_LIGHTBOX_IS_OPEN, SET_CURRENT_GALLERY_IMAGE,
				 START_STOP_CAROUSEL, SET_CURRENT_PAGE, SHIFT_GALLERY_IMAGE,
				 SET_IS_UPDATES_LOADED, SET_IS_DESIGNS_LOADED	} from '../actions/actions.jsx';

var expect = require('expect');
var deepFreeze = require('deep-freeze');

(function testShiftGalleryImage() {
	const action = {
		type: SHIFT_GALLERY_IMAGE,
		incrementOrDecrement: 'increment'
	};
	const prevState = {
		currentImage: 5
	};
	const postState = {
		currentImage: 6		
	};
	expect(
		reducers.shiftGalleryImage(prevState, action)
	).toEqual(postState);
	console.log('******************** testShiftGalleryImage successful! ********************' );
}());