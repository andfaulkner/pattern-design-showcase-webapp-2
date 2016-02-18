// components
var CommentBox = require('./components/comment-box/CommentBox.jsx');
var LikeButton = require('./components/like-button/LikeButton.jsx');
var AffinityButton = require('./components/like-button/AffinityButton.jsx')
var NavbarTest = require('./components/navbar-test/NavbarTest.jsx')
var ImageUploader = require('./components/image-uploader/ImageUploader.jsx');

import { Router, Route, hashHistory, Link } from 'react-router';

var TestClassBasedComponent = require('./components/sample-class-components/TestClassBasedComponent.jsx');

// var FilterableProductTable = require('./components/like-button/FilterableProductTable.jsx');


// var NavTopbar = require('./components/nav-topbar/NavTopbar.jsx');

// var LoginBox = require('./components/login-box/LoginBox.jsx');

// import {Circle} from './experiments/js2015-classes';


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={NavbarTest} />
		<Route path="/comment" component={CommentBox} />
		<Route path="/like" component={LikeButton} />
		<Route path="/affinity" component={AffinityButton} />
		<Route path="/upload_images" component={ImageUploader} />
	</Router>,
	document.getElementById('content')
);

// ReactDom.render(
// 	<FilterableProductTable />,
// 	document.getElementById('content')
// );
	// <LikeButton />,

// ReactDOM.render(
// 	<TestClassBasedComponent />,
// 	document.getElementById('content')
// );


// ReactDOM.render(
// 	<AffinityButton />,
// 	document.getElementById('content')
// );

// ReactDom.render(
// 	<div>
// 		<CommentBox url="/api/comments" pollInterval={2000} />
// 	</div>,
// 	document.getElementById('content')
// );
