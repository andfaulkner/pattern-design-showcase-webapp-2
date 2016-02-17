var ReactDom = require('./lib/react-dom.min');

// components
var LoginBox = require('./components/comment-box/LoginBox.jsx');

ReactDom.render(
	<LoginBox />,
	document.getElementById('content')
);
