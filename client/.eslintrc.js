
module.exports = {
	extends: '../config/eslintrc-base.js',
	root: true,
	rules: {
		'no-extra-parens': 2,
		'no-unused-vars': 0,
		'keyword-spacing': 2
	},
	globals: {
		ReactDom: true,
		ReactBootstrap: true,
		$: true,
		jquery: true,
		React: true,
		marked: true,
		_: true
	}
};