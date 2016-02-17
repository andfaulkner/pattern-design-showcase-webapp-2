// components
var CommentBox = require('./components/comment-box/CommentBox.jsx');
var LikeButton = require('./components/like-button/LikeButton.jsx');
// var FilterableProductTable = require('./components/like-button/FilterableProductTable.jsx');

import {Circle} from './experiments/js2015-classes';

// ReactDom.render(
// 	<FilterableProductTable />,
// 	document.getElementById('content')
// );

ReactDOM.render(
	<LikeButton />,
	document.getElementById('content')
);

// ReactDom.render(
// 	<div>
// 		<CommentBox url="/api/comments" pollInterval={2000} />
// 	</div>,
// 	document.getElementById('content')
// );
