var expect = require('expect');
var deepFreeze = require('deep-freeze');

export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

/**
 * Get rid of one of the counters, from counter list 'list', at location 'index'
 */
export const removeCounter = (list, index) => {
	return [
		...list.slice(0, index),
		...list.slice(index + 1)
	];
};

export const addCounter = (list) => [...list, 0];

export const incrementCounter = (list, index) => {
	return list.map((val, i) => (i === index) ? val + 1 : val)
};

export const counterTests = {

	testAddCounter: () => {
		const listBefore = [];
		deepFreeze(listBefore);
		expect(addCounter(listBefore)).toEqual([0])
		console.log('counter-reducer.jsx:: testAddCounter: reached end of testAddCounter!');
	},

	testRemoveCounter: () => {
		const listBefore = [1, 0, 5, 6];
		deepFreeze(listBefore);
		const listBefore2 = [1, 6];
		deepFreeze(listBefore2);
		expect(removeCounter(listBefore, 2)).toEqual([1, 0, 6]);
		expect(removeCounter(listBefore2, 1)).toEqual([1]);
		console.log('counter-reducer.jsx:: testAddCounter: reached end of testRemoveCounter!');		
	},

	testIncrementCounter: () => {
		const listBefore = [2, 0, 4, 8];
		deepFreeze(listBefore);
		expect(incrementCounter(listBefore, 1)).toEqual([2, 1, 4, 8])
		console.log('counter-reducer.jsx:: testAddCounter: reached end of testIncrementCounter!');		
	}

}