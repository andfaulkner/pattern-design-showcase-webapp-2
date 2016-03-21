
export function increment(number) {
	return ++number;
}

export function decrement(number) {
	return --number;
}

/****************************** MIDDLEWARES ******************************/
/**
 * @param  {Object} newState - state being returned. Log it first.
 * @param  {String} actionType - action passed through before state returned. Log it.
 * @return {[type]} [description]
 */
export function unknownType(state, reducer) {
	console.warn(reducer + ' received unknown action type');
	return state;
}

export function alteredState(newState, actionType) {
	console.info('\n\n%cAction type: ' + actionType, 
								'text-decoration: underline; font-size: 25px;');
	console.log('%cSTATE ::', 'color: blue; font-size: 20px;', '\n', newState, '\n\n\n');
	return newState;	
}
/*************************************************************************/
