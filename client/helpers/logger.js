/**************************************************************************************************
*
*			Client-side log micro-framework. Pass in name of current 
*			module, and optionally current function to instantiate. instance.inspect
*			lets you look at an object, but also shows its name & a tag revealing its location: 
*			//=>     module --> function:: objectName:
*			//=>     // ... object contents here ... //
*
*			TODO a bit weird.
*
*/

function logger (moduleName, curFn) {
	var modName = moduleName;
	var fn;
	if (curFn) {
		fn = curFn;
	}
	return {
		log: function log(msg) {
			console.log(
				modName + 
				((fn) ? (' --> ' + fn + ':: ') : ':: ') +
				((msg) ? (msg) : ''));
			return this;
		},
		inspect: function inspect(obj, msg) {
			var objName;
			if (obj.name) {
				objName = obj.name;
			} else if (_.isFunction(obj)) {
				objName = 'λ';
			} else {
				objName = 'object: ';
			}
			console.log(
				modName + 
				((fn) ? (' --> ' + fn + ':: ') : ':: ') +
				objName + 
				((msg) ? (' - ' + msg) : '') +
				':'
			);
			console.log(obj);
			return this;
		},
		/**
		 * Special sugar logging function for logging when a component in about to render
		 *
		 * @param  {String} componentName
		 * @return {Object} instance of logger with fnName set to the componentName provided
		 */
		logRendering: function logRendering(componentName) {
			console.log('\n**** -----> RENDERING ' + componentName + ' -- ' + modName + '...');
			return this.fn(componentName);
		},
		fn: function fn(fnName) {
			// console.log(fnName);
			return logger(modName, fnName);
		},
	}	
}

module.exports = logger;