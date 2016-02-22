// components
import CommentBox from './components/comment-box/CommentBox.jsx';
import { LikeButton } from './components/like-button/LikeButton.jsx';
import { AffinityButton } from './components/like-button/AffinityButton.jsx';
import NavbarTest from './components/navbar-test/NavbarTest.jsx';
import ImageUploader from './components/image-uploader/ImageUploader.jsx';
import { Router, Route, hashHistory, Link } from 'react-router';
import { FormBox } from './components/sample-class-components/TestClassBasedComponent.jsx';
import LoginBox from './components/login-box/LoginBoxVanilla.jsx';

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
		<Route path="/login" component={LoginBox} />
	</Router>,
	document.getElementById('content')
);