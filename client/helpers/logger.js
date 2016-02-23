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
		},
		inspect: function inspect(obj, msg) {
			var objName;
			if (obj.name) {
				objName = obj.name;
			} else if (_.isFunction(obj)) {
				objName = 'λ';
			} else {
				objName = 'anonymous object';
			}
			console.log(
				modName + 
				((fn) ? (' --> ' + fn + ':: ') : ':: ') +
				objName + 
				((msg) ? (' - ' + msg) : '') +
				':'
			);
			console.log(obj);
		},
		fn: function fn(fnName) {
			return logger(modName, fnName);
		}
	}	
}

module.exports = logger;