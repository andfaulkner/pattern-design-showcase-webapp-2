var _ = require('./lodash');

/**
 * @return {Boolean} true if running in NodeJS
 */
const isNode = () => {
	try {
		return _.get(process) && Object.prototype.toString.call(process) === '[object process]';
	} catch (e) {
		return false;
	}
};

// get the NodeJS equivalent of location.origin 
const _getNodeOrigin = (req) => (
	req.get('hostname') ||
	req.host ||
	req.get('host') ||
	req.headers["x-forwarded-for"] ||
	req.connection.remoteAddress
)

/**
 * Return location.origin. Can provide an equivalent if a nodejs or Express req object is provided
 */
const getOrigin = (/*Object?*/ req) => (
	(!isNode())
		? location.origin
		: (!_.isUndefined(req) && _.isObject(req))
				? _getNodeOrigin(req)
				: null
);


var sharedUtils = {
	isNode,
	getOrigin
};

module.exports = sharedUtils;